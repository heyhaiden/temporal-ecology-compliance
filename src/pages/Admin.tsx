
import { useState, useEffect } from "react";
import { supabase } from "@/integrations/supabase/client";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";
import DashboardLayout from "@/components/DashboardLayout";

const Admin = () => {
  const [userName, setUserName] = useState("Demo User");
  const [loading, setLoading] = useState(true);
  const [newUserName, setNewUserName] = useState("");
  const [newUserEmail, setNewUserEmail] = useState("");
  const [newDeviceName, setNewDeviceName] = useState("");
  const [newDeviceLocation, setNewDeviceLocation] = useState("");

  useEffect(() => {
    const loadUserData = async () => {
      try {
        const { data: { session } } = await supabase.auth.getSession();
        if (session?.user) {
          setUserName(session.user.email?.split('@')[0] || "User");
        }
      } catch (error) {
        console.error("Error loading user data:", error);
      } finally {
        setLoading(false);
      }
    };
    
    loadUserData();
  }, []);

  const handleAddUser = () => {
    toast.success(`User ${newUserName} added successfully`);
    setNewUserName("");
    setNewUserEmail("");
  };

  const handleAddDevice = () => {
    toast.success(`Device ${newDeviceName} added successfully`);
    setNewDeviceName("");
    setNewDeviceLocation("");
  };

  if (loading) {
    return (
      <div className="flex min-h-screen items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-emerald-600 mx-auto"></div>
          <p className="mt-4 text-lg">Loading admin panel...</p>
        </div>
      </div>
    );
  }

  return (
    <DashboardLayout userName={userName}>
      <div className="mb-8">
        <h1 className="text-2xl font-semibold text-gray-900">Admin</h1>
      </div>
      
      <Card className="mb-8">
        <CardContent className="p-6">
          <h2 className="text-lg font-semibold text-gray-900 mb-6">User Management</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
            <Input 
              type="text" 
              placeholder="Name" 
              value={newUserName}
              onChange={(e) => setNewUserName(e.target.value)}
            />
            <Input 
              type="email" 
              placeholder="Email" 
              value={newUserEmail}
              onChange={(e) => setNewUserEmail(e.target.value)}
            />
            <Button 
              className="bg-black text-white hover:bg-gray-800"
              onClick={handleAddUser}
            >
              Add User
            </Button>
          </div>
          
          <div className="overflow-hidden rounded-lg border border-gray-200">
            <table className="w-full text-left">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-3 text-sm font-medium text-gray-900">Name</th>
                  <th className="px-6 py-3 text-sm font-medium text-gray-900">Email</th>
                  <th className="px-6 py-3 text-sm font-medium text-gray-900">Role</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {users.map((user) => (
                  <tr key={user.id} className="bg-white">
                    <td className="px-6 py-4 text-sm text-gray-900">{user.name}</td>
                    <td className="px-6 py-4 text-sm text-gray-900">{user.email}</td>
                    <td className="px-6 py-4 text-sm text-gray-900">{user.role}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </CardContent>
      </Card>
      
      <Card>
        <CardContent className="p-6">
          <h2 className="text-lg font-semibold text-gray-900 mb-6">Device Management</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
            <Input 
              type="text" 
              placeholder="Device Name" 
              value={newDeviceName}
              onChange={(e) => setNewDeviceName(e.target.value)}
            />
            <Input 
              type="text" 
              placeholder="Location" 
              value={newDeviceLocation}
              onChange={(e) => setNewDeviceLocation(e.target.value)}
            />
            <Button 
              className="bg-black text-white hover:bg-gray-800"
              onClick={handleAddDevice}
            >
              Add Device
            </Button>
          </div>
          
          <div className="overflow-hidden rounded-lg border border-gray-200">
            <table className="w-full text-left">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-3 text-sm font-medium text-gray-900">Name</th>
                  <th className="px-6 py-3 text-sm font-medium text-gray-900">Location</th>
                  <th className="px-6 py-3 text-sm font-medium text-gray-900">Status</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {devices.map((device) => (
                  <tr key={device.id} className="bg-white">
                    <td className="px-6 py-4 text-sm text-gray-900">{device.name}</td>
                    <td className="px-6 py-4 text-sm text-gray-900">{device.location}</td>
                    <td className="px-6 py-4 text-sm">
                      <span className={`px-2 py-1 text-xs font-medium rounded-full ${
                        device.status === "Active" 
                          ? "bg-green-100 text-green-800" 
                          : "bg-red-100 text-red-800"
                      }`}>
                        {device.status}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </CardContent>
      </Card>
    </DashboardLayout>
  );
};

const users = [
  { id: 1, name: "John Doe", email: "john@example.com", role: "Admin" },
  { id: 2, name: "Jane Smith", email: "jane@example.com", role: "Viewer" },
];

const devices = [
  { id: 1, name: "Device 1", location: "Forest Edge", status: "Active" },
  { id: 2, name: "Device 2", location: "Lakeside", status: "Inactive" },
];

export default Admin;
