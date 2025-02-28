
import React from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Check, X, Trash2, Play } from "lucide-react";
import { ClassificationItem } from "./types";

interface ClassificationListViewProps {
  classifications: ClassificationItem[];
  editingSpecies: string | null;
  newSpeciesName: string;
  setNewSpeciesName: (name: string) => void;
  handleSaveEdit: (id: string) => void;
  handleCancelEdit: () => void;
  playAudio: (url: string) => void;
  handleAnnotate: (id: string) => void;
  handleVerifyClassification: (id: string) => void;
  handleDeleteClassification: (id: string) => void;
}

const ClassificationListView = ({
  classifications,
  editingSpecies,
  newSpeciesName,
  setNewSpeciesName,
  handleSaveEdit,
  handleCancelEdit,
  playAudio,
  handleAnnotate,
  handleVerifyClassification,
  handleDeleteClassification
}: ClassificationListViewProps) => {
  return (
    <div className="space-y-4">
      {classifications.map((item) => (
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
                  <Play className="h-4 w-4 text-primary" />
                </Button>
                <div>
                  <div className="font-medium flex items-center gap-2">
                    {item.species}
                  </div>
                  <div className="flex items-center text-sm text-gray-500 gap-3">
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
                  variant="outline" 
                  size="sm"
                  onClick={() => handleAnnotate(item.id)}
                >
                  Review
                </Button>
                <Button 
                  variant="default" 
                  size="sm"
                  onClick={() => handleVerifyClassification(item.id)}
                  className="bg-green-600 hover:bg-green-700"
                >
                  <Check className="h-4 w-4 mr-1" /> Confirm
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

export default ClassificationListView;
