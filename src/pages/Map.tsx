
import { useState, useEffect } from "react";
import { supabase } from "@/integrations/supabase/client";
import { Card, CardContent } from "@/components/ui/card";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { toast } from "sonner";
import DashboardLayout from "@/components/DashboardLayout";

const Map = () => {
  const [userName, setUserName] = useState("Demo User");
  const [loading, setLoading] = useState(true);
  const [mapMode, setMapMode] = useState("heatmap");

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

  if (loading) {
    return (
      <div className="flex min-h-screen items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-emerald-600 mx-auto"></div>
          <p className="mt-4 text-lg">Loading map data...</p>
        </div>
      </div>
    );
  }

  return (
    <DashboardLayout userName={userName}>
      <div className="mb-8 flex justify-between items-center">
        <h1 className="text-2xl font-semibold text-gray-900">Map</h1>
        <Select value={mapMode} onValueChange={setMapMode}>
          <SelectTrigger className="w-[180px]">
            <SelectValue placeholder="Select mode" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="heatmap">Heat Map</SelectItem>
            <SelectItem value="points">Point Map</SelectItem>
            <SelectItem value="devices">Device Locations</SelectItem>
          </SelectContent>
        </Select>
      </div>
      
      <Card>
        <CardContent className="p-6">
          <div className="aspect-video bg-gray-100 rounded-md flex items-center justify-center">
            <div className="text-center">
              <img 
                src="/lovable-uploads/cc902d0d-4d75-40b5-a90a-c423e697210e.png" 
                alt="Map placeholder" 
                className="max-w-full max-h-full mx-auto"
              />
              <p className="mt-4 text-sm text-gray-500">Map visualization would appear here with actual implementation</p>
            </div>
          </div>
          
          <div className="mt-4 grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="bg-gray-50 p-4 rounded-md">
              <p className="text-sm text-gray-500">Total Detection Points</p>
              <p className="text-xl font-semibold">1,234</p>
            </div>
            <div className="bg-gray-50 p-4 rounded-md">
              <p className="text-sm text-gray-500">Active Devices</p>
              <p className="text-xl font-semibold">5</p>
            </div>
            <div className="bg-gray-50 p-4 rounded-md">
              <p className="text-sm text-gray-500">Coverage Area</p>
              <p className="text-xl font-semibold">2.4 km²</p>
            </div>
            <div className="bg-gray-50 p-4 rounded-md">
              <p className="text-sm text-gray-500">Detection Hotspots</p>
              <p className="text-xl font-semibold">3</p>
            </div>
          </div>
        </CardContent>
      </Card>
    </DashboardLayout>
  );
};

export default Map;
