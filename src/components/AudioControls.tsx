
import React from 'react';
import { Button } from "@/components/ui/button";
import { Play, Pause, ZoomIn, ZoomOut } from 'lucide-react';

interface AudioControlsProps {
  isPlaying: boolean;
  currentTime: number;
  duration: number;
  onPlayPause: () => void;
  onZoomIn: () => void;
  onZoomOut: () => void;
}

export function AudioControls({
  isPlaying,
  currentTime,
  duration,
  onPlayPause,
  onZoomIn,
  onZoomOut
}: AudioControlsProps) {
  const formatTime = (time: number): string => {
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
    return `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
  };

  return (
    <div className="flex items-center justify-between mb-4">
      <div className="flex items-center space-x-2">
        <Button onClick={onPlayPause} variant="outline" size="sm">
          {isPlaying ? <Pause className="h-4 w-4" /> : <Play className="h-4 w-4" />}
        </Button>
        <Button onClick={onZoomIn} variant="outline" size="sm">
          <ZoomIn className="h-4 w-4" />
        </Button>
        <Button onClick={onZoomOut} variant="outline" size="sm">
          <ZoomOut className="h-4 w-4" />
        </Button>
      </div>
      <div className="text-sm">
        {formatTime(currentTime)} / {formatTime(duration)}
      </div>
    </div>
  );
}
