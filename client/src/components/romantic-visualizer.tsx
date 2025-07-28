import { motion } from "framer-motion";
import { useEffect, useState } from "react";

interface RomanticVisualizerProps {
  isPlaying: boolean;
  currentTrack: string;
}

export default function RomanticVisualizer({ isPlaying, currentTrack }: RomanticVisualizerProps) {
  const [audioData, setAudioData] = useState<number[]>(Array(16).fill(0));

  // Simulate audio visualization data
  useEffect(() => {
    if (!isPlaying) {
      setAudioData(Array(16).fill(0));
      return;
    }

    const interval = setInterval(() => {
      const newData = Array.from({ length: 16 }, () => Math.random() * 100);
      setAudioData(newData);
    }, 100);

    return () => clearInterval(interval);
  }, [isPlaying]);

  const getVisualizerColor = (index: number, height: number) => {
    const colors = [
      "bg-pink-400",
      "bg-rose-400", 
      "bg-red-400",
      "bg-pink-500",
      "bg-rose-500"
    ];
    return colors[index % colors.length];
  };

  return (
    <div className="fixed bottom-4 left-4 z-30 w-64 h-16 glass-romantic rounded-2xl p-3 overflow-hidden">
      {/* Track Info */}
      <div className="text-xs text-white/80 mb-2 truncate">
        🎵 {currentTrack}
      </div>
      
      {/* Visualizer Bars */}
      <div className="flex items-end justify-center space-x-1 h-8">
        {audioData.map((height, index) => (
          <motion.div
            key={index}
            className={`w-2 rounded-full ${getVisualizerColor(index, height)}`}
            style={{
              height: isPlaying ? `${Math.max(height * 0.3, 5)}px` : '2px',
            }}
            animate={{
              height: isPlaying 
                ? [`${Math.max(height * 0.3, 5)}px`, `${Math.max(height * 0.5, 8)}px`, `${Math.max(height * 0.3, 5)}px`]
                : '2px',
              opacity: isPlaying ? [0.6, 1, 0.6] : 0.3,
            }}
            transition={{
              duration: 0.5,
              repeat: isPlaying ? Infinity : 0,
              ease: "easeInOut",
            }}
          />
        ))}
      </div>

      {/* Floating Music Notes */}
      {isPlaying && (
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          {Array.from({ length: 3 }).map((_, i) => (
            <motion.div
              key={i}
              className="absolute text-pink-300 text-xs"
              style={{
                left: `${20 + i * 25}%`,
                top: '10%',
              }}
              animate={{
                y: [0, -20, 0],
                x: [0, 5, 0],
                opacity: [0.4, 0.8, 0.4],
                rotate: [0, 10, 0],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                delay: i * 0.4,
              }}
            >
              {i % 2 === 0 ? '♪' : '♫'}
            </motion.div>
          ))}
        </div>
      )}
    </div>
  );
}