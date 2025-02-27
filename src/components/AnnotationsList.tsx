
import React from 'react';
import { Button } from "@/components/ui/button";

interface Annotation {
  id: string;
  startTime: number;
  endTime: number;
  label: string;
}

interface AnnotationsListProps {
  annotations: Annotation[];
  onRemoveAnnotation: (id: string) => void;
}

export function AnnotationsList({ annotations, onRemoveAnnotation }: AnnotationsListProps) {
  const formatTime = (time: number): string => {
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
    return `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
  };

  return (
    <div className="border rounded-lg p-4 mb-4 max-h-[200px] overflow-y-auto">
      <h3 className="text-sm font-medium mb-2">Annotations</h3>
      {annotations.length === 0 ? (
        <p className="text-sm text-gray-500">No annotations yet.</p>
      ) : (
        <div className="space-y-2">
          {annotations.map((annotation) => (
            <div key={annotation.id} className="flex items-center justify-between text-sm">
              <div>
                <span className="font-medium">{annotation.label}</span>
                <span className="text-gray-500 ml-2">
                  ({formatTime(annotation.startTime)} - {formatTime(annotation.endTime)})
                </span>
              </div>
              <Button 
                variant="ghost" 
                size="sm"
                onClick={() => onRemoveAnnotation(annotation.id)}
              >
                Remove
              </Button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
