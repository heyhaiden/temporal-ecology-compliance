
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { PlayCircle, Pause, Volume2, Download, Search } from "lucide-react";
import { useState } from "react";

const AudioLibrary = () => {
  const [searchQuery, setSearchQuery] = useState("");
  
  const audioRecordings = [
    { id: 1, name: "Common Pipistrelle", date: "2023-05-15", duration: "00:32", size: "2.4 MB" },
    { id: 2, name: "Soprano Pipistrelle", date: "2023-05-15", duration: "00:28", size: "2.1 MB" },
    { id: 3, name: "Noctule", date: "2023-05-16", duration: "00:45", size: "3.2 MB" },
    { id: 4, name: "Brown Long-eared Bat", date: "2023-05-16", duration: "00:37", size: "2.7 MB" },
    { id: 5, name: "European Robin", date: "2023-05-17", duration: "00:52", size: "3.8 MB" },
  ];
  
  const filteredRecordings = audioRecordings.filter(recording => 
    recording.name.toLowerCase().includes(searchQuery.toLowerCase())
  );
  
  return (
    <div className="p-8">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-2xl font-semibold text-gray-900">Audio Library</h1>
        <div className="relative w-64">
          <Search className="absolute left-2 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-500" />
          <Input
            className="pl-8"
            placeholder="Search recordings..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>
      </div>
      
      <Card className="overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-gray-200 bg-gray-50">
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Name</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Date</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Duration</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Size</th>
                <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {filteredRecordings.map((recording) => (
                <tr key={recording.id}>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex items-center">
                      <Volume2 className="h-4 w-4 text-gray-400 mr-2" />
                      <span className="text-sm font-medium text-gray-900">{recording.name}</span>
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{recording.date}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{recording.duration}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{recording.size}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                    <div className="flex justify-end space-x-2">
                      <Button variant="ghost" size="sm">
                        <PlayCircle className="h-4 w-4" />
                      </Button>
                      <Button variant="ghost" size="sm">
                        <Download className="h-4 w-4" />
                      </Button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Card>
    </div>
  );
};

export default AudioLibrary;
