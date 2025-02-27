
import React, { useRef, useEffect, useState } from 'react';
import WaveSurfer from 'wavesurfer.js';
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Play, Pause, ZoomIn, ZoomOut, Save } from 'lucide-react';

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
  const waveformRef = useRef<HTMLDivElement>(null);
  const spectrogramRef = useRef<HTMLDivElement>(null);
  const wavesurfer = useRef<WaveSurfer | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [zoom, setZoom] = useState(50);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [annotations, setAnnotations] = useState(initialLabels);
  const [currentAnnotation, setCurrentAnnotation] = useState({
    startTime: 0,
    endTime: 0,
    label: ''
  });

  // Initialize WaveSurfer
  useEffect(() => {
    if (waveformRef.current) {
      const options = {
        container: waveformRef.current,
        waveColor: '#4ae',
        progressColor: '#059669',
        cursorColor: '#059669',
        barWidth: 2,
        barRadius: 3,
        responsive: true,
        height: 150,
        normalize: true,
        plugins: []
      };

      wavesurfer.current = WaveSurfer.create(options);
      
      // Load the audio file
      wavesurfer.current.load(audioUrl);

      // Event handlers
      wavesurfer.current.on('ready', () => {
        if (wavesurfer.current) {
          setDuration(wavesurfer.current.getDuration());
          wavesurfer.current.zoom(zoom);
        }
      });

      wavesurfer.current.on('audioprocess', () => {
        if (wavesurfer.current) {
          setCurrentTime(wavesurfer.current.getCurrentTime());
        }
      });

      wavesurfer.current.on('play', () => {
        setIsPlaying(true);
      });

      wavesurfer.current.on('pause', () => {
        setIsPlaying(false);
      });

      // Clean up on unmount
      return () => {
        if (wavesurfer.current) {
          wavesurfer.current.destroy();
        }
      };
    }
  }, [audioUrl]);

  // Handle zoom changes
  useEffect(() => {
    if (wavesurfer.current) {
      wavesurfer.current.zoom(zoom);
    }
  }, [zoom]);

  const handlePlayPause = () => {
    if (wavesurfer.current) {
      wavesurfer.current.playPause();
    }
  };

  const handleZoomIn = () => {
    setZoom(prevZoom => Math.min(prevZoom + 10, 150));
  };

  const handleZoomOut = () => {
    setZoom(prevZoom => Math.max(prevZoom - 10, 10));
  };

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
    if (wavesurfer.current) {
      setCurrentAnnotation(prev => ({
        ...prev,
        startTime: wavesurfer.current?.getCurrentTime() || 0
      }));
    }
  };

  const handleSetEndTime = () => {
    if (wavesurfer.current) {
      setCurrentAnnotation(prev => ({
        ...prev,
        endTime: wavesurfer.current?.getCurrentTime() || 0
      }));
    }
  };

  const handleSaveAnnotations = () => {
    if (onSaveAnnotation) {
      onSaveAnnotation(annotations);
    }
  };

  const formatTime = (time: number): string => {
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
    return `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
  };

  return (
    <Card className="p-6">
      <h2 className="text-lg font-semibold mb-4">Audio Annotation</h2>
      
      {/* Waveform */}
      <div ref={waveformRef} className="mb-4 border rounded-lg overflow-hidden"></div>
      
      {/* Controls */}
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center space-x-2">
          <Button onClick={handlePlayPause} variant="outline" size="sm">
            {isPlaying ? <Pause className="h-4 w-4" /> : <Play className="h-4 w-4" />}
          </Button>
          <Button onClick={handleZoomIn} variant="outline" size="sm">
            <ZoomIn className="h-4 w-4" />
          </Button>
          <Button onClick={handleZoomOut} variant="outline" size="sm">
            <ZoomOut className="h-4 w-4" />
          </Button>
        </div>
        <div className="text-sm">
          {formatTime(currentTime)} / {formatTime(duration)}
        </div>
      </div>
      
      {/* Annotation Controls */}
      <div className="grid grid-cols-1 gap-4 mb-4">
        <div className="flex items-center space-x-2">
          <Button onClick={handleSetStartTime} variant="outline" size="sm">Set Start</Button>
          <div className="text-sm">
            {formatTime(currentAnnotation.startTime)}
          </div>
          <Button onClick={handleSetEndTime} variant="outline" size="sm">Set End</Button>
          <div className="text-sm">
            {formatTime(currentAnnotation.endTime)}
          </div>
          <Input 
            placeholder="Label" 
            value={currentAnnotation.label} 
            onChange={(e) => setCurrentAnnotation(prev => ({ ...prev, label: e.target.value }))} 
            className="max-w-[200px]"
          />
          <Button onClick={handleAddAnnotation} variant="default" size="sm">Add</Button>
        </div>
      </div>
      
      {/* Annotations List */}
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
                  onClick={() => setAnnotations(prev => prev.filter(a => a.id !== annotation.id))}
                >
                  Remove
                </Button>
              </div>
            ))}
          </div>
        )}
      </div>
      
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
