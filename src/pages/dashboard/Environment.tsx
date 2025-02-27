
import { Card } from "@/components/ui/card";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";

const Environment = () => {
  const temperatureData = [
    { date: "2023-05-01", value: 21 },
    { date: "2023-05-02", value: 22 },
    { date: "2023-05-03", value: 21 },
    { date: "2023-05-04", value: 23 },
    { date: "2023-05-05", value: 24 },
  ];

  const humidityData = [
    { date: "2023-05-01", value: 45 },
    { date: "2023-05-02", value: 48 },
    { date: "2023-05-03", value: 50 },
    { date: "2023-05-04", value: 45 },
    { date: "2023-05-05", value: 42 },
  ];

  return (
    <div className="p-8">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-2xl font-semibold text-gray-900">Environment</h1>
        <Select defaultValue="daily">
          <SelectTrigger className="w-[180px]">
            <SelectValue placeholder="Select timeframe" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="daily">Daily</SelectItem>
            <SelectItem value="weekly">Weekly</SelectItem>
            <SelectItem value="monthly">Monthly</SelectItem>
          </SelectContent>
        </Select>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
        <Card className="p-6">
          <h2 className="text-lg font-semibold mb-4">Temperature</h2>
          <div className="h-[300px]">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={temperatureData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="date" />
                <YAxis domain={[0, 30]} tickFormatter={(value) => `${value}°C`} />
                <Tooltip formatter={(value) => [`${value}°C`, 'Temperature']} />
                <Line 
                  type="monotone" 
                  dataKey="value" 
                  stroke="#818cf8" 
                  strokeWidth={2}
                />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </Card>

        <Card className="p-6">
          <h2 className="text-lg font-semibold mb-4">Humidity</h2>
          <div className="h-[300px]">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={humidityData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="date" />
                <YAxis domain={[0, 100]} tickFormatter={(value) => `${value}%`} />
                <Tooltip formatter={(value) => [`${value}%`, 'Humidity']} />
                <Line 
                  type="monotone" 
                  dataKey="value" 
                  stroke="#059669" 
                  strokeWidth={2}
                />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </Card>
      </div>

      <Card className="p-6">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-lg font-semibold">Environment vs. Bat Activity</h2>
          <Select defaultValue="temperature">
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="Select parameter" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="temperature">Temperature</SelectItem>
              <SelectItem value="humidity">Humidity</SelectItem>
            </SelectContent>
          </Select>
        </div>
        <div className="h-[300px]">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={temperatureData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="date" />
              <YAxis yAxisId="left" domain={[0, 30]} tickFormatter={(value) => `${value}°C`} />
              <YAxis yAxisId="right" orientation="right" domain={[0, 20]} />
              <Tooltip />
              <Line 
                yAxisId="left"
                type="monotone" 
                dataKey="value" 
                stroke="#818cf8" 
                strokeWidth={2}
              />
              <Line 
                yAxisId="right"
                type="monotone" 
                dataKey="activity" 
                stroke="#059669" 
                strokeWidth={2}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </Card>
    </div>
  );
};

export default Environment;
