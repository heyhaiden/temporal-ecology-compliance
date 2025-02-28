
import React from "react";
import { Button } from "@/components/ui/button";
import AudioAnnotation from "@/components/AudioAnnotation";
import { ClassificationItem } from "./types";

interface AudioAnnotationViewProps {
  selectedItem: ClassificationItem;
  handleSaveAnnotation: (annotations: any[]) => void;
  setSelectedClassification: (id: string | null) => void;
}

const AudioAnnotationView = ({
  selectedItem,
  handleSaveAnnotation,
  setSelectedClassification
}: AudioAnnotationViewProps) => {
  return (
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
  );
};

export default AudioAnnotationView;
