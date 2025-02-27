
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import AudioAnnotation from "@/components/AudioAnnotation";
import { toast } from "sonner";
import { 
  Search, 
  Filter, 
  ArrowUp, 
  ArrowDown, 
  ChevronLeft, 
  ChevronRight, 
  Grid, 
  List,
  Check,
  X,
  Edit,
  Trash2,
  Speaker
} from "lucide-react";

const Classification = () => {
  const [selectedClassification, setSelectedClassification] = useState<string | null>(null);
  const [searchQuery, setSearchQuery] = useState("");
  const [sortField, setSortField] = useState<"time" | "species" | "confidence">("time");
  const [sortDirection, setSortDirection] = useState<"asc" | "desc">("desc");
  const [viewMode, setViewMode] = useState<"list" | "grid">("list");
  const [currentPage, setCurrentPage] = useState(1);
  const [editingSpecies, setEditingSpecies] = useState<string | null>(null);
  const [newSpeciesName, setNewSpeciesName] = useState("");
  const recordingsPerPage = 10;

  // Sample data - in a real app this would be fetched from an API
  const [allClassifications, setAllClassifications] = useState([
    { 
      id: "1",
      species: "Common Pipistrelle", 
      time: "2023-05-15 22:30:00", 
      confidence: 92, 
      verified: false,
      audioUrl: "https://www.soundboard.com/handler/DownLoadTrack.ashx?cliptitle=Bat+Screech&filename=mz/Mzg1ODMxNTEzMzg1ODM3_JjbSeJPWExA.mp3" 
    },
    { 
      id: "2",
      species: "Soprano Pipistrelle", 
      time: "2023-05-15 22:31:15", 
      confidence: 87, 
      verified: false,
      audioUrl: "https://www.soundboard.com/handler/DownLoadTrack.ashx?cliptitle=Bat+Sound&filename=mz/Mzg1ODMxNTEzMzg1ODQz_JzPV7tBxSDk.mp3" 
    },
    { 
      id: "3",
      species: "Noctule", 
      time: "2023-05-15 22:32:30", 
      confidence: 79, 
      verified: false,
      audioUrl: "https://www.soundboard.com/handler/DownLoadTrack.ashx?cliptitle=Bat+Squeak&filename=mz/Mzg1ODMxNTEzMzg1ODM0_KzPGV7Ln7Jw.mp3" 
    },
    { 
      id: "4",
      species: "Brown Long-eared Bat", 
      time: "2023-05-15 22:33:45", 
      confidence: 85, 
      verified: false,
      audioUrl: "https://www.soundboard.com/handler/DownLoadTrack.ashx?cliptitle=Bat+Echo+Location&filename=mz/Mzg1ODMxNTEzMzg1ODI5_pEVmQVZQ19U.mp3" 
    },
    // Additional test entries
    { 
      id: "5",
      species: "Lesser Horseshoe Bat", 
      time: "2023-05-15 23:10:22", 
      confidence: 76, 
      verified: false,
      audioUrl: "https://www.soundboard.com/handler/DownLoadTrack.ashx?cliptitle=Bat+Screech&filename=mz/Mzg1ODMxNTEzMzg1ODM3_JjbSeJPWExA.mp3" 
    },
    { 
      id: "6",
      species: "Greater Horseshoe Bat", 
      time: "2023-05-15 23:21:33", 
      confidence: 94, 
      verified: true,
      audioUrl: "https://www.soundboard.com/handler/DownLoadTrack.ashx?cliptitle=Bat+Sound&filename=mz/Mzg1ODMxNTEzMzg1ODQz_JzPV7tBxSDk.mp3" 
    },
    { 
      id: "7",
      species: "Daubenton's Bat", 
      time: "2023-05-15 23:42:50", 
      confidence: 81, 
      verified: false,
      audioUrl: "https://www.soundboard.com/handler/DownLoadTrack.ashx?cliptitle=Bat+Squeak&filename=mz/Mzg1ODMxNTEzMzg1ODM0_KzPGV7Ln7Jw.mp3" 
    },
    { 
      id: "8",
      species: "Nathusius' Pipistrelle", 
      time: "2023-05-15 23:55:12", 
      confidence: 68, 
      verified: false,
      audioUrl: "https://www.soundboard.com/handler/DownLoadTrack.ashx?cliptitle=Bat+Echo+Location&filename=mz/Mzg1ODMxNTEzMzg1ODI5_pEVmQVZQ19U.mp3" 
    },
    { 
      id: "9",
      species: "Whiskered Bat", 
      time: "2023-05-16 00:05:45", 
      confidence: 73, 
      verified: false,
      audioUrl: "https://www.soundboard.com/handler/DownLoadTrack.ashx?cliptitle=Bat+Screech&filename=mz/Mzg1ODMxNTEzMzg1ODM3_JjbSeJPWExA.mp3" 
    },
    { 
      id: "10",
      species: "Brandt's Bat", 
      time: "2023-05-16 00:18:29", 
      confidence: 89, 
      verified: false,
      audioUrl: "https://www.soundboard.com/handler/DownLoadTrack.ashx?cliptitle=Bat+Sound&filename=mz/Mzg1ODMxNTEzMzg1ODQz_JzPV7tBxSDk.mp3" 
    },
    { 
      id: "11",
      species: "Natterer's Bat", 
      time: "2023-05-16 00:32:14", 
      confidence: 82, 
      verified: false,
      audioUrl: "https://www.soundboard.com/handler/DownLoadTrack.ashx?cliptitle=Bat+Squeak&filename=mz/Mzg1ODMxNTEzMzg1ODM0_KzPGV7Ln7Jw.mp3" 
    },
    { 
      id: "12",
      species: "Serotine", 
      time: "2023-05-16 00:47:38", 
      confidence: 91, 
      verified: false,
      audioUrl: "https://www.soundboard.com/handler/DownLoadTrack.ashx?cliptitle=Bat+Echo+Location&filename=mz/Mzg1ODMxNTEzMzg1ODI5_pEVmQVZQ19U.mp3" 
    }
  ]);

  // Filter and sort classifications
  const filteredClassifications = allClassifications
    .filter(item => {
      if (!searchQuery) return true;
      const query = searchQuery.toLowerCase();
      return (
        item.species.toLowerCase().includes(query) ||
        item.time.toLowerCase().includes(query)
      );
    })
    .sort((a, b) => {
      // Sort logic
      if (sortField === "time") {
        return sortDirection === "asc" 
          ? new Date(a.time).getTime() - new Date(b.time).getTime()
          : new Date(b.time).getTime() - new Date(a.time).getTime();
      } else if (sortField === "species") {
        return sortDirection === "asc"
          ? a.species.localeCompare(b.species)
          : b.species.localeCompare(a.species);
      } else { // confidence
        return sortDirection === "asc" 
          ? a.confidence - b.confidence 
          : b.confidence - a.confidence;
      }
    });

  // Pagination
  const totalPages = Math.ceil(filteredClassifications.length / recordingsPerPage);
  const paginatedClassifications = filteredClassifications.slice(
    (currentPage - 1) * recordingsPerPage,
    currentPage * recordingsPerPage
  );
  
  const selectedItem = selectedClassification 
    ? allClassifications.find(c => c.id === selectedClassification) 
    : null;

  const handleAnnotate = (id: string) => {
    setSelectedClassification(id);
  };

  const handleSaveAnnotation = (annotations: any[]) => {
    console.log("Saved annotations:", annotations);
    if (selectedItem) {
      toast.success(`Saved ${annotations.length} annotations for ${selectedItem.species}`);
    }
  };

  const toggleSortDirection = () => {
    setSortDirection(prev => prev === "asc" ? "desc" : "asc");
  };

  const handleChangePage = (page: number) => {
    if (page > 0 && page <= totalPages) {
      setCurrentPage(page);
    }
  };

  const handleVerifyClassification = (id: string) => {
    setAllClassifications(prevClassifications => 
      prevClassifications.map(c => 
        c.id === id ? { ...c, verified: true } : c
      )
    );
    toast.success("Classification verified!");
  };

  const handleStartEdit = (id: string, currentSpecies: string) => {
    setEditingSpecies(id);
    setNewSpeciesName(currentSpecies);
  };

  const handleCancelEdit = () => {
    setEditingSpecies(null);
    setNewSpeciesName("");
  };

  const handleSaveEdit = (id: string) => {
    if (newSpeciesName.trim()) {
      setAllClassifications(prevClassifications => 
        prevClassifications.map(c => 
          c.id === id ? { ...c, species: newSpeciesName.trim(), verified: true } : c
        )
      );
      setEditingSpecies(null);
      setNewSpeciesName("");
      toast.success("Species name updated and verified!");
    }
  };

  const handleDeleteClassification = (id: string) => {
    setAllClassifications(prevClassifications => 
      prevClassifications.filter(c => c.id !== id)
    );
    toast.success("Classification removed!");
  };

  const playAudio = (url: string) => {
    const audio = new Audio(url);
    audio.play();
    toast.info("Playing audio");
  };

  // Format date and time in a more readable way
  const formatDateTime = (dateTimeString: string) => {
    const date = new Date(dateTimeString);
    return date.toLocaleString('en-GB', {
      day: 'numeric',
      month: 'short',
      hour: '2-digit',
      minute: '2-digit'
    });
  };

  const renderClassificationList = () => {
    return (
      <div className="space-y-4">
        {paginatedClassifications.map((item) => (
          <div key={item.id} className="flex items-center justify-between p-3 hover:bg-gray-50 rounded-md">
            {editingSpecies === item.id ? (
              <div className="flex flex-grow items-center gap-2">
                <Input 
                  value={newSpeciesName} 
                  onChange={(e) => setNewSpeciesName(e.target.value)}
                  className="max-w-xs"
                  placeholder="Enter correct species name"
                />
                <div className="flex items-center gap-1">
                  <Button variant="outline" size="sm" onClick={() => handleSaveEdit(item.id)}>
                    <Check className="h-4 w-4 mr-1" /> Save
                  </Button>
                  <Button variant="ghost" size="sm" onClick={handleCancelEdit}>
                    <X className="h-4 w-4 mr-1" /> Cancel
                  </Button>
                </div>
              </div>
            ) : (
              <>
                <div className="flex items-center gap-3">
                  <Button
                    variant="ghost"
                    size="sm"
                    className="h-8 w-8 p-0 rounded-full"
                    onClick={() => playAudio(item.audioUrl)}
                  >
                    <Speaker className="h-4 w-4 text-primary" />
                  </Button>
                  <div>
                    <div className="font-medium flex items-center gap-2">
                      {item.species}
                      {item.verified && (
                        <span className="inline-flex items-center px-2 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
                          <Check className="h-3 w-3 mr-1" /> Verified
                        </span>
                      )}
                    </div>
                    <div className="flex items-center text-sm text-gray-500 gap-3">
                      <span>{formatDateTime(item.time)}</span>
                      <span className={`inline-flex items-center px-2 py-0.5 rounded-full text-xs font-medium ${
                        item.confidence >= 90 ? 'bg-emerald-100 text-emerald-800' :
                        item.confidence >= 80 ? 'bg-blue-100 text-blue-800' :
                        'bg-amber-100 text-amber-800'
                      }`}>
                        {item.confidence}% match
                      </span>
                    </div>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <Button 
                    variant="default" 
                    size="sm"
                    onClick={() => handleVerifyClassification(item.id)}
                    className="bg-green-600 hover:bg-green-700"
                  >
                    <Check className="h-4 w-4 mr-1" /> Confirm
                  </Button>
                  <Button 
                    variant="outline" 
                    size="sm"
                    onClick={() => handleAnnotate(item.id)}
                  >
                    Review
                  </Button>
                  <Button 
                    variant="ghost" 
                    size="sm"
                    onClick={() => handleDeleteClassification(item.id)}
                    className="text-red-600 hover:text-red-700 hover:bg-red-50"
                  >
                    <Trash2 className="h-4 w-4" />
                  </Button>
                </div>
              </>
            )}
          </div>
        ))}
      </div>
    );
  };

  const renderClassificationGrid = () => {
    return (
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {paginatedClassifications.map((item) => (
          <Card key={item.id} className="p-4 hover:shadow-md transition-shadow">
            {editingSpecies === item.id ? (
              <div className="space-y-3">
                <Input 
                  value={newSpeciesName} 
                  onChange={(e) => setNewSpeciesName(e.target.value)}
                  className="w-full"
                  placeholder="Enter correct species name"
                />
                <div className="flex items-center gap-2 justify-end">
                  <Button variant="outline" size="sm" onClick={() => handleSaveEdit(item.id)}>
                    <Check className="h-4 w-4 mr-1" /> Save
                  </Button>
                  <Button variant="ghost" size="sm" onClick={handleCancelEdit}>
                    <X className="h-4 w-4 mr-1" /> Cancel
                  </Button>
                </div>
              </div>
            ) : (
              <>
                <div className="flex items-center justify-between mb-3">
                  <div className="font-medium">{item.species}</div>
                  <Button
                    variant="ghost"
                    size="sm"
                    className="h-8 w-8 p-0 rounded-full"
                    onClick={() => playAudio(item.audioUrl)}
                  >
                    <Speaker className="h-4 w-4 text-primary" />
                  </Button>
                </div>
                <div className="flex justify-between items-center mb-3">
                  <span className="text-sm text-gray-500">{formatDateTime(item.time)}</span>
                  <span className={`inline-flex items-center px-2 py-0.5 rounded-full text-xs font-medium ${
                    item.confidence >= 90 ? 'bg-emerald-100 text-emerald-800' :
                    item.confidence >= 80 ? 'bg-blue-100 text-blue-800' :
                    'bg-amber-100 text-amber-800'
                  }`}>
                    {item.confidence}% match
                  </span>
                </div>
                {item.verified && (
                  <div className="mb-3">
                    <span className="inline-flex items-center px-2 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
                      <Check className="h-3 w-3 mr-1" /> Verified
                    </span>
                  </div>
                )}
                <div className="flex gap-2 mt-2">
                  <Button 
                    variant="default" 
                    size="sm"
                    onClick={() => handleVerifyClassification(item.id)}
                    className="bg-green-600 hover:bg-green-700 flex-1"
                  >
                    <Check className="h-4 w-4 mr-1" /> Confirm
                  </Button>
                  <Button 
                    variant="outline" 
                    size="sm"
                    onClick={() => handleAnnotate(item.id)}
                    className="flex-1"
                  >
                    Review
                  </Button>
                  <Button 
                    variant="ghost" 
                    size="sm"
                    onClick={() => handleDeleteClassification(item.id)}
                    className="text-red-600 hover:text-red-700 hover:bg-red-50"
                  >
                    <Trash2 className="h-4 w-4" />
                  </Button>
                </div>
              </>
            )}
          </Card>
        ))}
      </div>
    );
  };

  return (
    <div className="p-8">
      <h1 className="text-2xl font-semibold text-gray-900 mb-8">Classification</h1>
      
      <div className="mb-6">
        <Card className="p-6">
          <div className="flex flex-col sm:flex-row gap-4 justify-between mb-6">
            <div className="flex items-center gap-2 flex-grow max-w-md">
              <Search className="h-4 w-4 text-gray-500" />
              <Input
                placeholder="Search by species or date..."
                value={searchQuery}
                onChange={(e) => {
                  setSearchQuery(e.target.value);
                  setCurrentPage(1); // Reset to first page on new search
                }}
                className="max-w-sm"
              />
            </div>

            <div className="flex flex-wrap gap-2 items-center">
              <div className="flex items-center">
                <Select 
                  value={sortField} 
                  onValueChange={(value) => setSortField(value as "time" | "species" | "confidence")}
                >
                  <SelectTrigger className="w-[130px]">
                    <SelectValue placeholder="Sort by" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="time">Date/Time</SelectItem>
                    <SelectItem value="species">Species</SelectItem>
                    <SelectItem value="confidence">Confidence</SelectItem>
                  </SelectContent>
                </Select>
                <Button 
                  variant="ghost" 
                  size="icon" 
                  onClick={toggleSortDirection}
                  className="ml-1"
                >
                  {sortDirection === "asc" ? 
                    <ArrowUp className="h-4 w-4" /> : 
                    <ArrowDown className="h-4 w-4" />
                  }
                </Button>
              </div>

              <div className="flex border rounded-md">
                <Button
                  variant={viewMode === "list" ? "default" : "ghost"}
                  size="sm"
                  className="rounded-r-none"
                  onClick={() => setViewMode("list")}
                >
                  <List className="h-4 w-4 mr-1" /> List
                </Button>
                <Button
                  variant={viewMode === "grid" ? "default" : "ghost"}
                  size="sm"
                  className="rounded-l-none"
                  onClick={() => setViewMode("grid")}
                >
                  <Grid className="h-4 w-4 mr-1" /> Grid
                </Button>
              </div>
            </div>
          </div>

          {/* Classification items */}
          {viewMode === "list" ? renderClassificationList() : renderClassificationGrid()}

          {/* Pagination */}
          {totalPages > 1 && (
            <div className="flex items-center justify-between mt-6">
              <div className="text-sm text-gray-500">
                Showing {(currentPage - 1) * recordingsPerPage + 1} to {Math.min(currentPage * recordingsPerPage, filteredClassifications.length)} of {filteredClassifications.length} recordings
              </div>
              <div className="flex items-center gap-2">
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => handleChangePage(currentPage - 1)}
                  disabled={currentPage === 1}
                >
                  <ChevronLeft className="h-4 w-4" />
                </Button>
                <span className="text-sm">
                  Page {currentPage} of {totalPages}
                </span>
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => handleChangePage(currentPage + 1)}
                  disabled={currentPage === totalPages}
                >
                  <ChevronRight className="h-4 w-4" />
                </Button>
              </div>
            </div>
          )}
        </Card>
      </div>

      {selectedClassification && selectedItem && (
        <div className="mb-6">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-xl font-semibold">Audio Annotation: {selectedItem.species}</h2>
            <Button 
              variant="ghost" 
              onClick={() => setSelectedClassification(null)}
            >
              Close
            </Button>
          </div>
          <AudioAnnotation 
            audioUrl={selectedItem.audioUrl}
            onSaveAnnotation={handleSaveAnnotation}
            initialLabels={[
              {
                id: "1",
                startTime: 0.5,
                endTime: 1.5,
                label: selectedItem.species
              }
            ]}
          />
        </div>
      )}
    </div>
  );
};

export default Classification;
