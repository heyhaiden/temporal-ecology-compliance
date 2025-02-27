
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";

const Classification = () => {
  const classifications = [
    { species: "Common Pipistrelle", time: "2023-05-15 22:30:00", confidence: 92 },
    { species: "Soprano Pipistrelle", time: "2023-05-15 22:31:15", confidence: 87 },
    { species: "Noctule", time: "2023-05-15 22:32:30", confidence: 79 },
    { species: "Brown Long-eared Bat", time: "2023-05-15 22:33:45", confidence: 85 },
  ];

  const confidenceData = classifications.map(c => ({
    time: c.time.split(' ')[1],
    confidence: c.confidence / 100
  }));

  return (
    <div className="p-8">
      <h1 className="text-2xl font-semibold text-gray-900 mb-8">Classification</h1>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card className="p-6">
          <h2 className="text-lg font-semibold mb-4">Real-Time Classification List</h2>
          <div className="space-y-4">
            {classifications.map((item, index) => (
              <div key={index} className="flex items-center justify-between">
                <div>
                  <div className="font-medium">{item.species}</div>
                  <div className="text-sm text-gray-500">{item.time}</div>
                </div>
                <div className="flex items-center gap-4">
                  <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                    item.confidence >= 90 ? 'bg-emerald-100 text-emerald-800' :
                    item.confidence >= 80 ? 'bg-blue-100 text-blue-800' :
                    'bg-amber-100 text-amber-800'
                  }`}>
                    {item.confidence}%
                  </span>
                  <Button variant="outline" size="sm">Override species</Button>
                </div>
              </div>
            ))}
          </div>
        </Card>

        <Card className="p-6">
          <h2 className="text-lg font-semibold mb-4">Confidence Graph</h2>
          <div className="h-[300px]">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={confidenceData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="time" />
                <YAxis domain={[0, 1]} tickFormatter={(value) => `${value * 100}%`} />
                <Tooltip 
                  formatter={(value) => [`${(Number(value) * 100).toFixed(0)}%`, 'Confidence']}
                />
                <Line 
                  type="monotone" 
                  dataKey="confidence" 
                  stroke="#059669" 
                  strokeWidth={2}
                />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default Classification;
