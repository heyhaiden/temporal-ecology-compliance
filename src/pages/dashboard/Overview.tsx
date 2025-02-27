
import { useState, useEffect } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";
import { Battery, Wifi, AlertTriangle } from "lucide-react";
import { toast } from "sonner";

const Overview = () => {
  const [stats, setStats] = useState({
    detections: "1,234",
    temperature: "22°C",
    humidity: "68%",
    uptime: "99.9%"
  });

  useEffect(() => {
    // Load dashboard data
    loadDashboardData();
  }, []);

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

  return (
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
  );
};

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

export default Overview;
