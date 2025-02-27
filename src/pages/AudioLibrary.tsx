
import { useState, useEffect } from "react";
import { supabase } from "@/integrations/supabase/client";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Slider } from "@/components/ui/slider";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { PlayCircle } from "lucide-react";
import { toast } from "sonner";
import DashboardLayout from "@/components/DashboardLayout";

const AudioLibrary = () => {
  const [userName, setUserName] = useState("Demo User");
  const [loading, setLoading] = useState(true);
  const [date, setDate] = useState("");
  const [species, setSpecies] = useState("");
  const [confidenceRange, setConfidenceRange] = useState([0]);

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

  const handlePlayAudio = (id: number) => {
    toast.success(`Playing audio ${id}`);
  };

  if (loading) {
    return (
      <div className="flex min-h-screen items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-emerald-600 mx-auto"></div>
          <p className="mt-4 text-lg">Loading audio library...</p>
        </div>
      </div>
    );
  }

  return (
    <DashboardLayout userName={userName}>
      <div className="mb-8">
        <h1 className="text-2xl font-semibold text-gray-900">Audio Library</h1>
      </div>
      
      <Card className="mb-8">
        <CardContent className="p-6">
          <h2 className="text-lg font-semibold text-gray-900 mb-4">Filters</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Date
              </label>
              <Input 
                type="date" 
                value={date} 
                onChange={(e) => setDate(e.target.value)}
                placeholder="dd/mm/yyyy"
              />
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Species
              </label>
              <Select value={species} onValueChange={setSpecies}>
                <SelectTrigger>
                  <SelectValue placeholder="Select species" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="common-pipistrelle">Common Pipistrelle</SelectItem>
                  <SelectItem value="soprano-pipistrelle">Soprano Pipistrelle</SelectItem>
                  <SelectItem value="noctule">Noctule</SelectItem>
                  <SelectItem value="brown-long-eared">Brown Long-eared Bat</SelectItem>
                </SelectContent>
              </Select>
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Confidence Range: {confidenceRange[0]}% - 100%
              </label>
              <Slider 
                value={confidenceRange} 
                onValueChange={setConfidenceRange}
                max={100} 
                step={1}
                className="mt-2"
              />
            </div>
          </div>
        </CardContent>
      </Card>
      
      <Card>
        <CardContent className="p-6">
          <h2 className="text-lg font-semibold text-gray-900 mb-4">Audio Recordings</h2>
          <div className="space-y-6">
            {audioRecordings.map((recording) => (
              <div key={recording.id} className="flex items-center justify-between border-b border-gray-100 pb-4">
                <div>
                  <h3 className="font-medium text-gray-900">{recording.species}</h3>
                  <p className="text-sm text-gray-500">{recording.timestamp}</p>
                </div>
                
                <div className="flex items-center gap-6">
                  <div className="text-right">
                    <span className="text-sm font-medium">{recording.duration}</span>
                  </div>
                  
                  <div className={`px-2 py-1 text-xs font-medium rounded-full ${getConfidenceColor(recording.confidence)}`}>
                    {recording.confidence}%
                  </div>
                  
                  <Button variant="ghost" size="sm" onClick={() => handlePlayAudio(recording.id)}>
                    <PlayCircle className="h-5 w-5" />
                  </Button>
                  
                  <div className="w-32 h-3 bg-gray-200 rounded-full overflow-hidden">
                    <div className="h-full bg-gray-400" style={{ width: "100%" }} />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
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

const audioRecordings = [
  { id: 1, species: "Common Pipistrelle", timestamp: "2023-05-15 22:30", duration: "00:05", confidence: 92 },
  { id: 2, species: "Soprano Pipistrelle", timestamp: "2023-05-15 23:15", duration: "00:07", confidence: 87 },
  { id: 3, species: "Noctule", timestamp: "2023-05-16 00:45", duration: "00:04", confidence: 79 },
  { id: 4, species: "Brown Long-eared Bat", timestamp: "2023-05-16 01:30", duration: "00:06", confidence: 85 },
];

export default AudioLibrary;
