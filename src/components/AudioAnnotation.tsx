
import React, { useState } from 'react';
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Save } from 'lucide-react';
import { useWavesurfer } from '@/hooks/useWavesurfer';
import { AudioControls } from './AudioControls';
import { AnnotationEditor } from './AnnotationEditor';
import { AnnotationsList } from './AnnotationsList';

interface AudioAnnotationProps {
  audioUrl: string;
  initialLabels?: Array<{
    id: string;
    startTime: number;
    endTime: number;
    label: string;
  }>;
  onSaveAnnotation?: (labels: any[]) => void;
}

const AudioAnnotation: React.FC<AudioAnnotationProps> = ({ 
  audioUrl, 
  initialLabels = [],
  onSaveAnnotation 
}) => {
  const {
    waveformRef,
    isPlaying,
    currentTime,
    duration,
    handlePlayPause,
    handleZoomIn,
    handleZoomOut,
    getCurrentTime
  } = useWavesurfer({ audioUrl });

  const [annotations, setAnnotations] = useState(initialLabels);
  const [currentAnnotation, setCurrentAnnotation] = useState({
    startTime: 0,
    endTime: 0,
    label: ''
  });

  const handleAddAnnotation = () => {
    if (currentAnnotation.label && currentAnnotation.startTime < currentAnnotation.endTime) {
      setAnnotations(prev => [
        ...prev, 
        { 
          id: Date.now().toString(), 
          ...currentAnnotation 
        }
      ]);
      setCurrentAnnotation({ startTime: 0, endTime: 0, label: '' });
    }
  };

  const handleSetStartTime = () => {
    setCurrentAnnotation(prev => ({
      ...prev,
      startTime: getCurrentTime()
    }));
  };

  const handleSetEndTime = () => {
    setCurrentAnnotation(prev => ({
      ...prev,
      endTime: getCurrentTime()
    }));
  };

  const handleLabelChange = (label: string) => {
    setCurrentAnnotation(prev => ({ ...prev, label }));
  };

  const handleRemoveAnnotation = (id: string) => {
    setAnnotations(prev => prev.filter(a => a.id !== id));
  };

  const handleSaveAnnotations = () => {
    if (onSaveAnnotation) {
      onSaveAnnotation(annotations);
    }
  };

  return (
    <Card className="p-6">
      <h2 className="text-lg font-semibold mb-4">Audio Annotation</h2>
      
      {/* Waveform */}
      <div ref={waveformRef} className="mb-4 border rounded-lg overflow-hidden"></div>
      
      {/* Controls */}
      <AudioControls 
        isPlaying={isPlaying}
        currentTime={currentTime}
        duration={duration}
        onPlayPause={handlePlayPause}
        onZoomIn={handleZoomIn}
        onZoomOut={handleZoomOut}
      />
      
      {/* Annotation Editor */}
      <AnnotationEditor 
        currentAnnotation={currentAnnotation}
        onSetStartTime={handleSetStartTime}
        onSetEndTime={handleSetEndTime}
        onLabelChange={handleLabelChange}
        onAddAnnotation={handleAddAnnotation}
      />
      
      {/* Annotations List */}
      <AnnotationsList 
        annotations={annotations}
        onRemoveAnnotation={handleRemoveAnnotation}
      />
      
      <Button 
        onClick={handleSaveAnnotations} 
        className="w-full"
      >
        <Save className="h-4 w-4 mr-2" />
        Save Annotations
      </Button>
    </Card>
  );
};

export default AudioAnnotation;
