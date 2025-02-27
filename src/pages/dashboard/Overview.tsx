
import { useState, useEffect } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Battery, Wifi, AlertTriangle, Calendar, ChevronDown, ChevronRight } from "lucide-react";
import { toast } from "sonner";
import { 
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger 
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";

const Overview = () => {
  const [stats, setStats] = useState({
    detections: "1,234",
    temperature: "22°C",
    humidity: "68%",
    uptime: "99.9%"
  });
  
  const [timeframe, setTimeframe] = useState("month");
  const [expandedDevice, setExpandedDevice] = useState(null);

  useEffect(() => {
    // Load dashboard data
    loadDashboardData();
  }, [timeframe]);

  const loadDashboardData = () => {
    try {
      // This function just sets our predefined stats
      setStats({
        detections: "1,234",
        temperature: "22°C",
        humidity: "68%",
        uptime: "99.9%"
      });
    } catch (error) {
      console.error("Error loading dashboard data:", error);
      toast.error("Could not load dashboard data");
    }
  };

  const devices = [
    { 
      id: 1, 
      name: "BatBox-1", 
      status: "online", 
      battery: "85%", 
      connection: "Strong",
      location: "Forest Edge",
      lastUpdate: "2 mins ago"
    },
    { 
      id: 2, 
      name: "BatBox-2", 
      status: "online", 
      battery: "67%", 
      connection: "Medium",
      location: "Lakeside",
      lastUpdate: "15 mins ago" 
    },
    { 
      id: 3, 
      name: "BirdBox-1", 
      status: "offline", 
      battery: "12%", 
      connection: "Disconnected",
      location: "Oak Tree",
      lastUpdate: "2 hours ago" 
    },
  ];

  const toggleDeviceExpand = (deviceId) => {
    if (expandedDevice === deviceId) {
      setExpandedDevice(null);
    } else {
      setExpandedDevice(deviceId);
    }
  };

  return (
    <div className="p-8">
      <div className="mb-8 flex justify-between items-center">
        <h1 className="text-2xl font-semibold text-gray-900">Overview</h1>
        
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="outline" className="gap-2">
              <Calendar className="h-4 w-4" />
              {timeframe === "day" && "Last Day"}
              {timeframe === "week" && "Last Week"}
              {timeframe === "month" && "Last Month"}
              {timeframe === "quarter" && "Last Quarter"}
              {timeframe === "custom" && "Custom Range"}
              <ChevronDown className="h-4 w-4 ml-2" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end" className="w-56">
            <DropdownMenuItem onClick={() => setTimeframe("day")}>
              Last Day
            </DropdownMenuItem>
            <DropdownMenuItem onClick={() => setTimeframe("week")}>
              Last Week
            </DropdownMenuItem>
            <DropdownMenuItem onClick={() => setTimeframe("month")}>
              Last Month
            </DropdownMenuItem>
            <DropdownMenuItem onClick={() => setTimeframe("quarter")}>
              Last Quarter
            </DropdownMenuItem>
            <DropdownMenuItem onClick={() => setTimeframe("custom")}>
              Custom Range
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
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

      {/* Alerts and Device Status */}
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
            <h2 className="text-lg font-semibold text-gray-900 mb-4">Device Status</h2>
            <div className="space-y-2">
              {devices.map((device) => (
                <div key={device.id} className="border rounded-md">
                  <div 
                    className={`flex items-center justify-between p-3 cursor-pointer ${
                      device.status === 'online' ? 'border-l-4 border-l-emerald-500' : 'border-l-4 border-l-red-500'
                    }`}
                    onClick={() => toggleDeviceExpand(device.id)}
                  >
                    <div className="flex items-center gap-2">
                      <span className="font-medium">{device.name}</span>
                      <span className={`text-xs px-2 py-0.5 rounded-full ${
                        device.status === 'online' ? 'bg-emerald-100 text-emerald-800' : 'bg-red-100 text-red-800'
                      }`}>
                        {device.status}
                      </span>
                    </div>
                    <ChevronRight className={`h-5 w-5 text-gray-400 transition-transform ${
                      expandedDevice === device.id ? 'rotate-90' : ''
                    }`} />
                  </div>
                  
                  {expandedDevice === device.id && (
                    <div className="p-3 border-t bg-gray-50">
                      <div className="grid grid-cols-2 gap-3">
                        <div className="flex items-center justify-between">
                          <div className="flex items-center space-x-2">
                            <Battery className="h-4 w-4 text-gray-500" />
                            <span className="text-sm text-gray-600">Battery</span>
                          </div>
                          <span className={`text-sm font-medium ${
                            parseInt(device.battery) < 20 ? 'text-red-600' : 'text-gray-800'
                          }`}>{device.battery}</span>
                        </div>
                        <div className="flex items-center justify-between">
                          <div className="flex items-center space-x-2">
                            <Wifi className="h-4 w-4 text-gray-500" />
                            <span className="text-sm text-gray-600">Connection</span>
                          </div>
                          <span className="text-sm font-medium text-gray-800">{device.connection}</span>
                        </div>
                        <div className="flex items-center justify-between">
                          <span className="text-sm text-gray-600">Location</span>
                          <span className="text-sm font-medium text-gray-800">{device.location}</span>
                        </div>
                        <div className="flex items-center justify-between">
                          <span className="text-sm text-gray-600">Last Update</span>
                          <span className="text-sm font-medium text-gray-800">{device.lastUpdate}</span>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

const alerts = [
  { message: "Sensor 3 offline for 2 hours", icon: Wifi, iconColor: "text-red-500" },
  { message: "Sensor 2 battery low (15%)", icon: Battery, iconColor: "text-amber-500" },
  { message: "Unusual spike in bat activity", icon: AlertTriangle, iconColor: "text-emerald-500" },
];

export default Overview;
