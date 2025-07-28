import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Play, Pause, SkipForward, SkipBack, Volume2, Heart } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Slider } from "@/components/ui/slider";
import RomanticVisualizer from "./romantic-visualizer";

interface Track {
  id: string;
  title: string;
  artist: string;
  url: string;
  duration: number;
}

const romanticPlaylist: Track[] = [
  {
    id: "1",
    title: "Perfect",
    artist: "Ed Sheeran",
    url: "https://audio-previews.elements.envatoapi.com/files/153682631/preview.mp3?response-content-disposition=attachment%3Bfilename%3D%22GWSRQHV-romantic-piano.mp3%22",
    duration: 263
  },
  {
    id: "2", 
    title: "All of Me",
    artist: "John Legend",
    url: "https://audio-previews.elements.envatoapi.com/files/149662698/preview.mp3?response-content-disposition=attachment%3Bfilename%3D%22CT3TKKA-love-story.mp3%22",
    duration: 269
  },
  {
    id: "3",
    title: "Thinking Out Loud",
    artist: "Ed Sheeran", 
    url: "https://audio-previews.elements.envatoapi.com/files/214302311/preview.mp3?response-content-disposition=attachment%3Bfilename%3D%22CWFPTWY-romantic-love.mp3%22",
    duration: 281
  },
  {
    id: "4",
    title: "A Thousand Years",
    artist: "Christina Perri",
    url: "https://audio-previews.elements.envatoapi.com/files/206958228/preview.mp3?response-content-disposition=attachment%3Bfilename%3D%22BKQFPNG-romantic-wedding.mp3%22",
    duration: 295
  },
  {
    id: "5",
    title: "Love Story",
    artist: "Taylor Swift",
    url: "https://audio-previews.elements.envatoapi.com/files/138729479/preview.mp3?response-content-disposition=attachment%3Bfilename%3D%22MVJGQVF-romantic-piano-ballad.mp3%22",
    duration: 236
  }
];

export default function RomanticMusicPlayer() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTrack, setCurrentTrack] = useState(0);
  const [currentTime, setCurrentTime] = useState(0);
  const [volume, setVolume] = useState([70]);
  const [isVisible, setIsVisible] = useState(false);
  const audioRef = useRef<HTMLAudioElement>(null);

  const track = romanticPlaylist[currentTrack];

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    const updateTime = () => setCurrentTime(audio.currentTime);
    const handleEnded = () => nextTrack();

    audio.addEventListener('timeupdate', updateTime);
    audio.addEventListener('ended', handleEnded);
    audio.volume = volume[0] / 100;

    return () => {
      audio.removeEventListener('timeupdate', updateTime);
      audio.removeEventListener('ended', handleEnded);
    };
  }, [currentTrack, volume]);

  const togglePlay = async () => {
    const audio = audioRef.current;
    if (!audio) return;

    if (isPlaying) {
      audio.pause();
    } else {
      try {
        await audio.play();
      } catch (error) {
        console.log("Autoplay prevented");
      }
    }
    setIsPlaying(!isPlaying);
  };

  const nextTrack = () => {
    setCurrentTrack((prev) => (prev + 1) % romanticPlaylist.length);
    setCurrentTime(0);
  };

  const prevTrack = () => {
    setCurrentTrack((prev) => (prev - 1 + romanticPlaylist.length) % romanticPlaylist.length);
    setCurrentTime(0);
  };

  const formatTime = (time: number) => {
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
    return `${minutes}:${seconds.toString().padStart(2, '0')}`;
  };

  return (
    <>
      {/* Music Visualizer */}
      <RomanticVisualizer isPlaying={isPlaying} currentTrack={track.title} />

      {/* Music Player Toggle Button */}
      <motion.button
        onClick={() => setIsVisible(!isVisible)}
        className="fixed bottom-6 right-6 z-50 glass-premium text-white p-4 rounded-full shadow-2xl hover:shadow-pink-500/25 transition-all duration-300"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        animate={{
          boxShadow: isPlaying 
            ? ["0 0 20px rgba(236, 72, 153, 0.5)", "0 0 40px rgba(236, 72, 153, 0.8)", "0 0 20px rgba(236, 72, 153, 0.5)"]
            : "0 0 20px rgba(236, 72, 153, 0.3)"
        }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <Heart className="w-6 h-6" fill="currentColor" />
      </motion.button>

      {/* Music Player Panel */}
      <AnimatePresence>
        {isVisible && (
          <motion.div
            initial={{ opacity: 0, y: 100, scale: 0.8 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 100, scale: 0.8 }}
            className="fixed bottom-24 right-6 z-40 w-80 glass-romantic rounded-2xl p-6 shadow-2xl romantic-glow"
          >
            {/* Floating Hearts Animation */}
            <div className="absolute inset-0 pointer-events-none overflow-hidden rounded-2xl">
              {Array.from({ length: 3 }).map((_, i) => (
                <motion.div
                  key={i}
                  className="absolute text-pink-400 text-sm"
                  style={{
                    left: `${20 + i * 30}%`,
                    top: `${10 + i * 20}%`,
                  }}
                  animate={{
                    y: [-10, -30, -10],
                    opacity: [0.3, 0.8, 0.3],
                    scale: [0.8, 1.2, 0.8],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    delay: i * 0.5,
                  }}
                >
                  💖
                </motion.div>
              ))}
            </div>

            {/* Track Info */}
            <div className="text-center mb-4 relative z-10">
              <motion.h3 
                className="text-white font-semibold text-lg mb-1"
                animate={{ opacity: [0.8, 1, 0.8] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                {track.title}
              </motion.h3>
              <p className="text-pink-200 text-sm">{track.artist}</p>
            </div>

            {/* Progress Bar */}
            <div className="mb-4 relative z-10">
              <Slider
                value={[currentTime / track.duration * 100]}
                onValueChange={(value) => {
                  const audio = audioRef.current;
                  if (audio) {
                    audio.currentTime = (value[0] / 100) * track.duration;
                  }
                }}
                className="w-full"
                max={100}
                step={1}
              />
              <div className="flex justify-between text-xs text-pink-200 mt-1">
                <span>{formatTime(currentTime)}</span>
                <span>{formatTime(track.duration)}</span>
              </div>
            </div>

            {/* Controls */}
            <div className="flex items-center justify-center space-x-4 mb-4 relative z-10">
              <Button
                variant="ghost"
                size="sm"
                onClick={prevTrack}
                className="text-white hover:bg-white/10 rounded-full p-2"
              >
                <SkipBack className="w-5 h-5" />
              </Button>
              
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button
                  onClick={togglePlay}
                  className="bg-gradient-to-r from-pink-500 to-rose-500 hover:from-pink-600 hover:to-rose-600 text-white rounded-full p-3 shadow-lg"
                >
                  {isPlaying ? <Pause className="w-6 h-6" /> : <Play className="w-6 h-6" />}
                </Button>
              </motion.div>

              <Button
                variant="ghost"
                size="sm"
                onClick={nextTrack}
                className="text-white hover:bg-white/10 rounded-full p-2"
              >
                <SkipForward className="w-5 h-5" />
              </Button>
            </div>

            {/* Volume Control */}
            <div className="flex items-center space-x-2 relative z-10">
              <Volume2 className="w-4 h-4 text-pink-200" />
              <Slider
                value={volume}
                onValueChange={setVolume}
                className="flex-1"
                max={100}
                step={1}
              />
            </div>

            {/* Audio Element */}
            <audio
              ref={audioRef}
              src={track.url}
              preload="metadata"
            />
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}