
import { useState, useEffect } from "react";
import { supabase } from "@/integrations/supabase/client";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";
import DashboardLayout from "@/components/DashboardLayout";

const Classification = () => {
  const [userName, setUserName] = useState("Demo User");
  const [loading, setLoading] = useState(true);

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
          <p className="mt-4 text-lg">Loading classification data...</p>
        </div>
      </div>
    );
  }

  return (
    <DashboardLayout userName={userName}>
      <div className="mb-8">
        <h1 className="text-2xl font-semibold text-gray-900">Classification</h1>
      </div>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card>
          <CardContent className="p-6">
            <h2 className="text-lg font-semibold text-gray-900 mb-4">Real-Time Classification List</h2>
            <div className="space-y-4">
              {classificationList.map((item) => (
                <div key={item.id} className="flex items-center justify-between border-b border-gray-100 pb-3">
                  <div>
                    <p className="font-medium text-gray-900">{item.species}</p>
                    <p className="text-sm text-gray-500">{item.timestamp}</p>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="flex items-center gap-2">
                      <div className={`px-2 py-1 text-xs font-medium rounded-full ${getConfidenceColor(item.confidence)}`}>
                        {item.confidence}%
                      </div>
                    </div>
                    <Button variant="outline" size="sm">Override species</Button>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <h2 className="text-lg font-semibold text-gray-900 mb-4">Confidence Graph</h2>
            <div className="h-[400px]">
              <ResponsiveContainer width="100%" height="100%">
                <LineChart data={confidenceData}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#eee" />
                  <XAxis dataKey="time" />
                  <YAxis domain={[0, 1]} tickFormatter={(tick) => `${(tick * 100)}%`} />
                  <Tooltip 
                    formatter={(value: number) => [`${(value * 100).toFixed(0)}%`, 'Confidence']} 
                  />
                  <Line 
                    type="monotone" 
                    dataKey="confidence" 
                    stroke="#059669" 
                    strokeWidth={2}
                    dot={{ r: 4 }}
                  />
                </LineChart>
              </ResponsiveContainer>
            </div>
          </CardContent>
        </Card>
      </div>
    </DashboardLayout>
  );
};

const getConfidenceColor = (confidence: number) => {
  if (confidence >= 90) return "bg-emerald-100 text-emerald-800";
  if (confidence >= 80) return "bg-green-100 text-green-800";
  if (confidence >= 70) return "bg-lime-100 text-lime-800";
  if (confidence >= 60) return "bg-amber-100 text-amber-800";
  return "bg-red-100 text-red-800";
};

const classificationList = [
  { id: 1, species: "Common Pipistrelle", timestamp: "2023-05-15 22:30:00", confidence: 92 },
  { id: 2, species: "Soprano Pipistrelle", timestamp: "2023-05-15 22:31:15", confidence: 87 },
  { id: 3, species: "Noctule", timestamp: "2023-05-15 22:32:30", confidence: 79 },
  { id: 4, species: "Brown Long-eared Bat", timestamp: "2023-05-15 22:33:45", confidence: 85 },
];

const confidenceData = [
  { time: "22:30", confidence: 0.92 },
  { time: "22:31", confidence: 0.87 },
  { time: "22:32", confidence: 0.79 },
  { time: "22:33", confidence: 0.85 },
  { time: "22:34", confidence: 0.91 },
];

export default Classification;
