
import { useState, useEffect } from "react";
import { supabase } from "@/integrations/supabase/client";
import { Card, CardContent } from "@/components/ui/card";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { toast } from "sonner";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";
import DashboardLayout from "@/components/DashboardLayout";

const Environment = () => {
  const [userName, setUserName] = useState("Demo User");
  const [loading, setLoading] = useState(true);
  const [timeframe, setTimeframe] = useState("daily");
  const [environmentVariable, setEnvironmentVariable] = useState("temperature");

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
          <p className="mt-4 text-lg">Loading environment data...</p>
        </div>
      </div>
    );
  }

  return (
    <DashboardLayout userName={userName}>
      <div className="mb-8">
        <h1 className="text-2xl font-semibold text-gray-900">Environment</h1>
      </div>
      
      <div className="mb-6">
        <Select value={timeframe} onValueChange={setTimeframe}>
          <SelectTrigger className="w-[180px]">
            <SelectValue placeholder="Select timeframe" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="hourly">Hourly</SelectItem>
            <SelectItem value="daily">Daily</SelectItem>
            <SelectItem value="weekly">Weekly</SelectItem>
            <SelectItem value="monthly">Monthly</SelectItem>
          </SelectContent>
        </Select>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
        <Card>
          <CardContent className="p-6">
            <h2 className="text-lg font-semibold text-gray-900 mb-4">Temperature</h2>
            <div className="h-[300px]">
              <ResponsiveContainer width="100%" height="100%">
                <LineChart data={temperatureData}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#eee" />
                  <XAxis dataKey="date" />
                  <YAxis domain={[0, 30]} />
                  <Tooltip formatter={(value) => [`${value}°C`, 'Temperature']} />
                  <Line 
                    type="monotone" 
                    dataKey="value" 
                    stroke="#8884d8" 
                    strokeWidth={2}
                    dot={{ r: 4 }}
                  />
                </LineChart>
              </ResponsiveContainer>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <h2 className="text-lg font-semibold text-gray-900 mb-4">Humidity</h2>
            <div className="h-[300px]">
              <ResponsiveContainer width="100%" height="100%">
                <LineChart data={humidityData}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#eee" />
                  <XAxis dataKey="date" />
                  <YAxis domain={[0, 100]} />
                  <Tooltip formatter={(value) => [`${value}%`, 'Humidity']} />
                  <Line 
                    type="monotone" 
                    dataKey="value" 
                    stroke="#82ca9d" 
                    strokeWidth={2}
                    dot={{ r: 4 }}
                  />
                </LineChart>
              </ResponsiveContainer>
            </div>
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardContent className="p-6">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-lg font-semibold text-gray-900">Environment vs. Bat Activity</h2>
            <Select value={environmentVariable} onValueChange={setEnvironmentVariable}>
              <SelectTrigger className="w-[180px]">
                <SelectValue placeholder="Select variable" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="temperature">Temperature</SelectItem>
                <SelectItem value="humidity">Humidity</SelectItem>
                <SelectItem value="pressure">Pressure</SelectItem>
                <SelectItem value="light">Light</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div className="h-[300px]">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={correlationData}>
                <CartesianGrid strokeDasharray="3 3" stroke="#eee" />
                <XAxis dataKey="date" />
                <YAxis yAxisId="left" domain={[0, 30]} />
                <YAxis yAxisId="right" orientation="right" domain={[0, 20]} />
                <Tooltip />
                <Line 
                  type="monotone" 
                  dataKey="temperature" 
                  stroke="#8884d8" 
                  yAxisId="left"
                  strokeWidth={2}
                  dot={{ r: 4 }}
                />
                <Line 
                  type="monotone" 
                  dataKey="activity" 
                  stroke="#82ca9d" 
                  yAxisId="right"
                  strokeWidth={2}
                  dot={{ r: 4 }}
                />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </CardContent>
      </Card>
    </DashboardLayout>
  );
};

const temperatureData = [
  { date: "2023-05-01", value: 21 },
  { date: "2023-05-02", value: 22 },
  { date: "2023-05-03", value: 21 },
  { date: "2023-05-04", value: 24 },
  { date: "2023-05-05", value: 25 },
];

const humidityData = [
  { date: "2023-05-01", value: 45 },
  { date: "2023-05-02", value: 47 },
  { date: "2023-05-03", value: 48 },
  { date: "2023-05-04", value: 42 },
  { date: "2023-05-05", value: 40 },
];

const correlationData = [
  { date: "2023-05-01", temperature: 21, activity: 12 },
  { date: "2023-05-02", temperature: 22, activity: 14 },
  { date: "2023-05-03", temperature: 21, activity: 15 },
  { date: "2023-05-04", temperature: 24, activity: 18 },
  { date: "2023-05-05", temperature: 25, activity: 16 },
];

export default Environment;
