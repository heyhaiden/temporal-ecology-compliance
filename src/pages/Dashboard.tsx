
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { supabase } from "@/integrations/supabase/client";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { BarChart, Bar, LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";
import { Battery, Wifi, AlertTriangle, ThermometerIcon, Droplets, Signal, LayoutDashboard, Bird, Map, FileAudio, FileText, Settings } from "lucide-react";
import { toast } from "sonner";

const Dashboard = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);
  const [stats, setStats] = useState({
    detections: "0",
    temperature: "0°C",
    humidity: "0%",
    uptime: "0%"
  });
  const [userName, setUserName] = useState("");
  
  // Check authentication
  useEffect(() => {
    const checkAuth = async () => {
      try {
        const { data: { session } } = await supabase.auth.getSession();
        if (!session) {
          navigate("/auth");
          return;
        }
        
        // Get user profile
        const { data: profile } = await supabase
          .from("profiles")
          .select("full_name")
          .eq("id", session.user.id)
          .single();
          
        if (profile) {
          setUserName(profile.full_name || session.user.email || "User");
        }
        
        // Load data
        await fetchDashboardData();
      } catch (error) {
        console.error("Error checking auth:", error);
        toast.error("Authentication error. Please sign in again.");
        navigate("/auth");
      } finally {
        setLoading(false);
      }
    };
    
    checkAuth();
  }, [navigate]);
  
  const fetchDashboardData = async () => {
    try {
      // Get device readings
      const { data: readings } = await supabase
        .from("device_readings")
        .select("temperature, humidity, battery_level")
        .order("recorded_at", { ascending: false })
        .limit(1);
        
      // Get detection count
      const { count } = await supabase
        .from("detections")
        .select("*", { count: "exact", head: true });
        
      if (readings && readings.length > 0) {
        setStats({
          detections: count?.toString() || "1,234",
          temperature: `${Math.round(readings[0].temperature)}°C`,
          humidity: `${Math.round(readings[0].humidity)}%`,
          uptime: "99.9%"
        });
      }
    } catch (error) {
      console.error("Error fetching dashboard data:", error);
      toast.error("Failed to load dashboard data.");
    }
  };
  
  const handleSignOut = async () => {
    await supabase.auth.signOut();
    navigate("/auth");
  };

  if (loading) {
    return (
      <div className="flex min-h-screen items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-emerald-600 mx-auto"></div>
          <p className="mt-4 text-lg">Loading dashboard...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 h-16 bg-white border-b border-gray-200 z-50 flex items-center justify-between px-4">
        <div className="flex items-center gap-2">
          <img src="/lovable-uploads/35e560b4-c9cc-4388-80b3-722cfa45b123.png" alt="Logo" className="h-8 w-auto" />
          <h1 className="text-xl font-bold tracking-tight bg-gradient-to-r from-emerald-600 to-emerald-500 bg-clip-text text-transparent">
            BatDetect
          </h1>
        </div>
        <div className="flex items-center gap-4">
          <div className="text-sm text-gray-600">Dashboard</div>
          <div className="flex items-center gap-2">
            <div className="h-8 w-8 rounded-full bg-emerald-100 flex items-center justify-center text-emerald-600">
              {userName.charAt(0).toUpperCase()}
            </div>
            <span className="text-sm font-medium">{userName}</span>
            <Button variant="ghost" size="sm" onClick={handleSignOut}>
              Sign out
            </Button>
          </div>
        </div>
      </header>

      {/* Sidebar */}
      <aside className="fixed left-0 top-16 h-[calc(100vh-4rem)] w-64 bg-white border-r border-gray-200 z-40">
        <nav className="p-4 space-y-1">
          {sidebarItems.map((item) => (
            <button
              key={item.name}
              className={`flex items-center space-x-3 w-full px-3 py-2 text-sm rounded-lg ${
                item.name === "Overview" 
                  ? "bg-emerald-50 text-emerald-600" 
                  : "text-gray-700 hover:bg-gray-100"
              }`}
            >
              <item.icon className="h-5 w-5" />
              <span>{item.name}</span>
            </button>
          ))}
        </nav>
      </aside>

      {/* Main Content */}
      <main className="pl-64 pt-16">
        <div className="p-8">
          <div className="mb-8">
            <h1 className="text-2xl font-semibold text-gray-900">Overview</h1>
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            {[
              { name: "Total Detections", value: stats.detections, change: "+12% from last month" },
              { name: "Avg. Temperature", value: stats.temperature, change: "-1°C from last month" },
              { name: "Avg. Humidity", value: stats.humidity, change: "+5% from last month" },
              { name: "Device Uptime", value: stats.uptime, change: "+0.1% from last month" },
            ].map((stat) => (
              <Card key={stat.name}>
                <CardContent className="p-6">
                  <div className="space-y-1">
                    <p className="text-sm text-gray-500">{stat.name}</p>
                    <p className="text-2xl font-semibold text-gray-900">{stat.value}</p>
                    <p className={`text-sm ${stat.change.includes('+') ? 'text-emerald-600' : 'text-red-600'}`}>
                      {stat.change}
                    </p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Alerts and Classifications */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
            <Card>
              <CardContent className="p-6">
                <h2 className="text-lg font-semibold text-gray-900 mb-4">Top Alerts</h2>
                <div className="space-y-4">
                  {alerts.map((alert, index) => (
                    <div key={index} className="flex items-center space-x-3 text-gray-700">
                      <alert.icon className={`h-5 w-5 ${alert.iconColor}`} />
                      <span>{alert.message}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <h2 className="text-lg font-semibold text-gray-900 mb-4">Live Classification</h2>
                <div className="space-y-4">
                  {classifications.map((classification) => (
                    <div key={classification.name} className="flex items-center justify-between">
                      <div>
                        <p className="font-medium text-gray-900">{classification.name}</p>
                        <p className="text-sm text-gray-500">{classification.time}</p>
                      </div>
                      <div className="flex items-center space-x-2">
                        <div className="w-24 h-2 bg-gray-200 rounded-full overflow-hidden">
                          <div
                            className="h-full bg-emerald-600"
                            style={{ width: `${classification.confidence}%` }}
                          />
                        </div>
                        <span className="text-sm text-gray-600">{classification.confidence}%</span>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Environment Metrics and Device Health */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <Card>
              <CardContent className="p-6">
                <h2 className="text-lg font-semibold text-gray-900 mb-4">Environment Metrics</h2>
                <div className="h-[300px]">
                  <ResponsiveContainer width="100%" height="100%">
                    <LineChart data={environmentData}>
                      <CartesianGrid strokeDasharray="3 3" stroke="#eee" />
                      <XAxis dataKey="time" />
                      <YAxis />
                      <Tooltip />
                      <Line
                        type="monotone"
                        dataKey="value"
                        stroke="#059669"
                        strokeWidth={2}
                      />
                    </LineChart>
                  </ResponsiveContainer>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <h2 className="text-lg font-semibold text-gray-900 mb-4">Device Health</h2>
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                      <Battery className="h-5 w-5 text-emerald-600" />
                      <span className="text-gray-700">Battery</span>
                    </div>
                    <span className="text-gray-900 font-medium">85%</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                      <Wifi className="h-5 w-5 text-emerald-600" />
                      <span className="text-gray-700">Connection</span>
                    </div>
                    <span className="text-gray-900 font-medium">Strong</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>
    </div>
  );
};

const sidebarItems = [
  { name: "Overview", icon: LayoutDashboard },
  { name: "Classification", icon: Bird },
  { name: "Environment", icon: ThermometerIcon },
  { name: "Map", icon: Map },
  { name: "Audio Library", icon: FileAudio },
  { name: "Reports", icon: FileText },
  { name: "Admin", icon: Settings },
];

const alerts = [
  { message: "Sensor 3 offline for 2 hours", icon: Wifi, iconColor: "text-red-500" },
  { message: "Sensor 2 battery low (15%)", icon: Battery, iconColor: "text-amber-500" },
  { message: "Unusual spike in bat activity", icon: AlertTriangle, iconColor: "text-emerald-500" },
];

const classifications = [
  { name: "Common Pipistrelle", time: "2 mins ago", confidence: 92 },
  { name: "Soprano Pipistrelle", time: "5 mins ago", confidence: 87 },
  { name: "Noctule", time: "12 mins ago", confidence: 79 },
  { name: "Brown Long-eared Bat", time: "18 mins ago", confidence: 85 },
  { name: "European Robin", time: "25 mins ago", confidence: 91 },
];

const environmentData = [
  { time: "00:00", value: 400 },
  { time: "04:00", value: 600 },
  { time: "08:00", value: 800 },
  { time: "12:00", value: 1000 },
  { time: "16:00", value: 800 },
  { time: "20:00", value: 600 },
  { time: "24:00", value: 400 },
];

export default Dashboard;
