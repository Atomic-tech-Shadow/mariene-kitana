import { motion } from "framer-motion";
import { useEffect, useState } from "react";

interface EnhancedMusicEffectsProps {
  isPlaying: boolean;
  volume: number;
  currentTrack: string;
}

export default function EnhancedMusicEffects({ isPlaying, volume, currentTrack }: EnhancedMusicEffectsProps) {
  const [audioWaves, setAudioWaves] = useState<number[]>(Array(32).fill(0));
  const [musicNotes, setMusicNotes] = useState<Array<{ id: number; x: number; y: number; note: string }>>([]);

  // Simulate audio frequency data
  useEffect(() => {
    if (!isPlaying) {
      setAudioWaves(Array(32).fill(0));
      return;
    }

    const interval = setInterval(() => {
      const newWaves = Array.from({ length: 32 }, (_, i) => {
        const baseFreq = Math.sin(Date.now() * 0.001 + i * 0.5) * 0.5 + 0.5;
        const randomVariation = Math.random() * 0.3;
        return (baseFreq + randomVariation) * volume * 0.8;
      });
      setAudioWaves(newWaves);
    }, 80);

    return () => clearInterval(interval);
  }, [isPlaying, volume]);

  // Generate floating music notes
  useEffect(() => {
    if (!isPlaying) {
      setMusicNotes([]);
      return;
    }

    const interval = setInterval(() => {
      const notes = ['♪', '♫', '♬', '♩', '♭', '♯'];
      const newNote = {
        id: Date.now(),
        x: Math.random() * 100,
        y: 100,
        note: notes[Math.floor(Math.random() * notes.length)]
      };

      setMusicNotes(prev => {
        const filtered = prev.filter(note => Date.now() - note.id < 6000);
        return [...filtered, newNote].slice(-8);
      });
    }, 800);

    return () => clearInterval(interval);
  }, [isPlaying]);

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      {/* Full Screen Audio Visualizer */}
      <div className="absolute bottom-0 left-0 right-0 h-32 flex items-end justify-center space-x-1 opacity-30">
        {audioWaves.map((height, index) => (
          <motion.div
            key={index}
            className="bg-gradient-to-t from-pink-500 to-purple-500 rounded-t-full"
            style={{
              width: `${100 / audioWaves.length}vw`,
              maxWidth: '4px',
            }}
            animate={{
              height: `${Math.max(height * 120, 2)}px`,
              opacity: isPlaying ? 0.6 : 0.1,
            }}
            transition={{
              duration: 0.1,
              ease: "easeOut",
            }}
          />
        ))}
      </div>

      {/* Floating Music Notes */}
      {musicNotes.map((note) => (
        <motion.div
          key={note.id}
          className="absolute text-2xl font-bold text-pink-400"
          style={{
            left: `${note.x}%`,
            top: `${note.y}%`,
          }}
          animate={{
            y: [0, -window.innerHeight - 100],
            x: [0, (Math.random() - 0.5) * 100],
            opacity: [0, 0.8, 0.6, 0],
            rotate: [0, (Math.random() - 0.5) * 360],
            scale: [0.5, 1.2, 0.8, 0],
          }}
          transition={{
            duration: 6,
            ease: "easeOut",
          }}
        >
          {note.note}
        </motion.div>
      ))}

      {/* Rhythmic Background Pulse */}
      {isPlaying && (
        <motion.div
          className="absolute inset-0 bg-gradient-radial from-pink-500/5 via-transparent to-transparent"
          animate={{
            scale: [1, 1.1, 1],
            opacity: [0.3, 0.6, 0.3],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      )}

      {/* Corner Music Visualization */}
      <div className="absolute top-4 left-4 w-16 h-16 glass-romantic rounded-full flex items-center justify-center z-10">
        <motion.div
          className="w-8 h-8 border-2 border-pink-400 rounded-full"
          animate={{
            rotate: isPlaying ? [0, 360] : 0,
            borderColor: isPlaying 
              ? ["#f472b6", "#ec4899", "#db2777", "#f472b6"] 
              : "#f472b6",
          }}
          transition={{
            rotate: { duration: 3, repeat: Infinity, ease: "linear" },
            borderColor: { duration: 1.5, repeat: Infinity },
          }}
        >
          <motion.div
            className="w-2 h-2 bg-pink-500 rounded-full mx-auto mt-3"
            animate={{
              scale: isPlaying ? [1, 1.5, 1] : 1,
            }}
            transition={{
              duration: 0.6,
              repeat: Infinity,
            }}
          />
        </motion.div>
      </div>

      {/* Track Information Display */}
      {isPlaying && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="absolute top-20 left-1/2 transform -translate-x-1/2 glass-romantic px-6 py-3 rounded-full z-10"
        >
          <div className="flex items-center space-x-3">
            <motion.div
              animate={{
                rotate: [0, 360],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "linear",
              }}
            >
              🎵
            </motion.div>
            <span className="text-white text-sm font-medium truncate max-w-48">
              {currentTrack}
            </span>
            <motion.div
              animate={{
                scale: [1, 1.2, 1],
                opacity: [0.7, 1, 0.7],
              }}
              transition={{
                duration: 1,
                repeat: Infinity,
              }}
            >
              💖
            </motion.div>
          </div>
        </motion.div>
      )}

      {/* Ambient Light Effects */}
      {isPlaying && (
        <>
          <motion.div
            className="absolute top-1/4 left-1/4 w-64 h-64 bg-pink-500/10 rounded-full blur-3xl"
            animate={{
              scale: [1, 1.3, 1],
              opacity: [0.2, 0.4, 0.2],
              x: [-20, 20, -20],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
          <motion.div
            className="absolute bottom-1/4 right-1/4 w-48 h-48 bg-purple-500/10 rounded-full blur-3xl"
            animate={{
              scale: [1.2, 0.8, 1.2],
              opacity: [0.3, 0.5, 0.3],
              y: [-30, 30, -30],
            }}
            transition={{
              duration: 5,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 1,
            }}
          />
        </>
      )}
    </div>
  );
}