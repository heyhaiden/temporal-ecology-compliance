
import { useRef, useEffect, useState } from 'react';
import WaveSurfer from 'wavesurfer.js';

interface UseWavesurferOptions {
  audioUrl: string;
  initialZoom?: number;
}

export function useWavesurfer({ audioUrl, initialZoom = 50 }: UseWavesurferOptions) {
  const waveformRef = useRef<HTMLDivElement>(null);
  const wavesurfer = useRef<WaveSurfer | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [zoom, setZoom] = useState(initialZoom);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);

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
  }, [audioUrl, zoom]);

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

  const getCurrentTime = () => {
    return wavesurfer.current?.getCurrentTime() || 0;
  };

  return {
    waveformRef,
    isPlaying,
    currentTime,
    duration,
    handlePlayPause,
    handleZoomIn,
    handleZoomOut,
    getCurrentTime
  };
}
