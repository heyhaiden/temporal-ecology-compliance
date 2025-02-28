
import React from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Check, X, Trash2, Play } from "lucide-react";
import { ClassificationItem } from "./types";

interface ClassificationGridViewProps {
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

const ClassificationGridView = ({
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
}: ClassificationGridViewProps) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
      {classifications.map((item) => (
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
                  <Play className="h-4 w-4 text-primary" />
                </Button>
              </div>
              <div className="flex justify-between items-center mb-3">
                <span className={`inline-flex items-center px-2 py-0.5 rounded-full text-xs font-medium ${
                  item.confidence >= 90 ? 'bg-emerald-100 text-emerald-800' :
                  item.confidence >= 80 ? 'bg-blue-100 text-blue-800' :
                  'bg-amber-100 text-amber-800'
                }`}>
                  {item.confidence}% match
                </span>
              </div>
              <div className="flex gap-2 mt-2">
                <Button 
                  variant="outline" 
                  size="sm"
                  onClick={() => handleAnnotate(item.id)}
                  className="flex-1"
                >
                  Review
                </Button>
                <Button 
                  variant="default" 
                  size="sm"
                  onClick={() => handleVerifyClassification(item.id)}
                  className="bg-green-600 hover:bg-green-700 flex-1"
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
        </Card>
      ))}
    </div>
  );
};

export default ClassificationGridView;
