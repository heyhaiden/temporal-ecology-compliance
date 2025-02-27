
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";

const Admin = () => {
  return (
    <div className="p-8">
      <h1 className="text-2xl font-semibold text-gray-900 mb-8">Admin</h1>

      {/* User Management Section */}
      <div className="mb-12">
        <h2 className="text-lg font-semibold mb-4">User Management</h2>
        <Card>
          <CardContent className="p-6">
            <div className="flex gap-4 mb-6">
              <Input placeholder="Name" className="flex-1" />
              <Input placeholder="Email" className="flex-1" />
              <Button className="bg-black hover:bg-gray-800">Add User</Button>
            </div>
            
            <div className="grid grid-cols-3 gap-4 font-medium text-sm text-gray-500 mb-2">
              <div>Name</div>
              <div>Email</div>
              <div>Role</div>
            </div>
            
            {[
              { name: "John Doe", email: "john@example.com", role: "Admin" },
              { name: "Jane Smith", email: "jane@example.com", role: "Viewer" },
            ].map((user, index) => (
              <div key={index} className="grid grid-cols-3 gap-4 py-3 border-t">
                <div>{user.name}</div>
                <div>{user.email}</div>
                <div>{user.role}</div>
              </div>
            ))}
          </CardContent>
        </Card>
      </div>

      {/* Device Management Section */}
      <div>
        <h2 className="text-lg font-semibold mb-4">Device Management</h2>
        <Card>
          <CardContent className="p-6">
            <div className="flex gap-4 mb-6">
              <Input placeholder="Device Name" className="flex-1" />
              <Input placeholder="Location" className="flex-1" />
              <Button className="bg-black hover:bg-gray-800">Add Device</Button>
            </div>
            
            <div className="grid grid-cols-3 gap-4 font-medium text-sm text-gray-500 mb-2">
              <div>Name</div>
              <div>Location</div>
              <div>Status</div>
            </div>
            
            {[
              { name: "Device 1", location: "Forest Edge", status: "Active" },
              { name: "Device 2", location: "Lakeside", status: "Inactive" },
            ].map((device, index) => (
              <div key={index} className="grid grid-cols-3 gap-4 py-3 border-t">
                <div>{device.name}</div>
                <div>{device.location}</div>
                <div className={device.status === "Active" ? "text-emerald-600" : "text-gray-500"}>
                  {device.status}
                </div>
              </div>
            ))}
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Admin;
