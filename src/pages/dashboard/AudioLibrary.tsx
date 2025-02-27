
import { Input } from "@/components/ui/input";
import { Card } from "@/components/ui/card";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Slider } from "@/components/ui/slider";
import { Play } from "lucide-react";

const AudioLibrary = () => {
  const recordings = [
    { species: "Common Pipistrelle", time: "2023-05-15 22:30", duration: "00:05", confidence: 92 },
    { species: "Soprano Pipistrelle", time: "2023-05-15 23:15", duration: "00:07", confidence: 87 },
    { species: "Noctule", time: "2023-05-16 00:45", duration: "00:04", confidence: 79 },
    { species: "Brown Long-eared Bat", time: "2023-05-16 01:30", duration: "00:06", confidence: 85 },
  ];

  return (
    <div className="p-8">
      <h1 className="text-2xl font-semibold text-gray-900 mb-8">Audio Library</h1>
      
      <Card className="p-6 mb-8">
        <h2 className="text-lg font-semibold mb-4">Filters</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-end">
          <div>
            <Input type="date" className="w-full" />
          </div>
          <div>
            <Select>
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
            <div className="flex items-center justify-between mb-2">
              <span className="text-sm text-gray-500">Confidence Range:</span>
              <span className="text-sm text-gray-500">0% - 100%</span>
            </div>
            <Slider defaultValue={[0, 100]} max={100} step={1} />
          </div>
        </div>
      </Card>

      <Card className="p-6">
        <h2 className="text-lg font-semibold mb-4">Audio Recordings</h2>
        <div className="space-y-4">
          {recordings.map((recording, index) => (
            <div key={index} className="flex items-center justify-between py-3 border-b last:border-0">
              <div>
                <div className="font-medium">{recording.species}</div>
                <div className="text-sm text-gray-500">{recording.time}</div>
              </div>
              <div className="flex items-center gap-6">
                <span>{recording.duration}</span>
                <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                  recording.confidence >= 90 ? 'bg-emerald-100 text-emerald-800' :
                  recording.confidence >= 80 ? 'bg-blue-100 text-blue-800' :
                  'bg-amber-100 text-amber-800'
                }`}>
                  {recording.confidence}%
                </span>
                <button className="p-2 hover:bg-gray-100 rounded-full">
                  <Play className="h-5 w-5" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </Card>
    </div>
  );
};

export default AudioLibrary;
