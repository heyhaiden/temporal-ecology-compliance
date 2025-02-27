
import React from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

interface AnnotationEditorProps {
  currentAnnotation: {
    startTime: number;
    endTime: number;
    label: string;
  };
  onSetStartTime: () => void;
  onSetEndTime: () => void;
  onLabelChange: (label: string) => void;
  onAddAnnotation: () => void;
}

export function AnnotationEditor({
  currentAnnotation,
  onSetStartTime,
  onSetEndTime,
  onLabelChange,
  onAddAnnotation
}: AnnotationEditorProps) {
  const formatTime = (time: number): string => {
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
    return `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
  };

  return (
    <div className="grid grid-cols-1 gap-4 mb-4">
      <div className="flex items-center space-x-2">
        <Button onClick={onSetStartTime} variant="outline" size="sm">Set Start</Button>
        <div className="text-sm">
          {formatTime(currentAnnotation.startTime)}
        </div>
        <Button onClick={onSetEndTime} variant="outline" size="sm">Set End</Button>
        <div className="text-sm">
          {formatTime(currentAnnotation.endTime)}
        </div>
        <Input 
          placeholder="Label" 
          value={currentAnnotation.label} 
          onChange={(e) => onLabelChange(e.target.value)} 
          className="max-w-[200px]"
        />
        <Button onClick={onAddAnnotation} variant="default" size="sm">Add</Button>
      </div>
    </div>
  );
}
