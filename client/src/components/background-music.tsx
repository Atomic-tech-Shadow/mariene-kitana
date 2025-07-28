import { useState, useRef, useEffect } from "react";
import RomanticVisualizer from "./romantic-visualizer";
import EnhancedMusicEffects from "./enhanced-music-effects";

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
    title: "Lakiya's Romantic Theme",
    artist: "MR LAKSIDU",
    url: "https://files.catbox.moe/rg70o9.mp3",
    duration: 180
  },
  {
    id: "2", 
    title: "Perfect Love",
    artist: "Romantic Piano",
    url: "https://www.soundjay.com/misc/sounds/magic-chime-02.mp3",
    duration: 120
  },
  {
    id: "3",
    title: "Eternal Love",
    artist: "Ambient Romance", 
    url: "https://www.soundjay.com/misc/sounds/bell-ringing-05.mp3",
    duration: 95
  },
  {
    id: "4",
    title: "Heart Melody",
    artist: "Love Symphony",
    url: "https://www.soundjay.com/misc/sounds/magic-wand-01.mp3",
    duration: 87
  },
  {
    id: "5",
    title: "Mariène's Song",
    artist: "For My Queen",
    url: "https://www.soundjay.com/misc/sounds/wind-chime-01.mp3",
    duration: 145
  }
];

export default function BackgroundMusic() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTrack, setCurrentTrack] = useState(0);
  const [currentTime, setCurrentTime] = useState(0);
  const [volume] = useState([20]); // Volume bas pour musique d'ambiance
  const audioRef = useRef<HTMLAudioElement>(null);

  const track = romanticPlaylist[currentTrack];

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    const updateTime = () => setCurrentTime(audio.currentTime);
    const handleEnded = () => {
      setCurrentTrack((prev) => (prev + 1) % romanticPlaylist.length);
      setCurrentTime(0);
    };

    audio.addEventListener('timeupdate', updateTime);
    audio.addEventListener('ended', handleEnded);
    audio.volume = volume[0] / 100;

    // Auto-play music automatically
    const startAutoPlay = async () => {
      try {
        await audio.play();
        setIsPlaying(true);
      } catch (error) {
        // Auto-play prevented by browser policy
        console.log("Auto-play prevented, waiting for user interaction");
        // Try again on first user interaction
        const enableAudio = () => {
          audio.play().then(() => {
            setIsPlaying(true);
            document.removeEventListener('click', enableAudio);
            document.removeEventListener('touchstart', enableAudio);
          }).catch(() => {
            console.log("Failed to start audio");
          });
        };
        document.addEventListener('click', enableAudio, { once: true });
        document.addEventListener('touchstart', enableAudio, { once: true });
      }
    };

    if (!isPlaying) {
      startAutoPlay();
    }

    return () => {
      audio.removeEventListener('timeupdate', updateTime);
      audio.removeEventListener('ended', handleEnded);
    };
  }, [currentTrack, volume, isPlaying]);

  return (
    <>
      {/* Enhanced Music Effects */}
      <EnhancedMusicEffects 
        isPlaying={isPlaying} 
        volume={volume[0]} 
        currentTrack={track.title}
      />

      {/* Music Visualizer */}
      <RomanticVisualizer isPlaying={isPlaying} currentTrack={track.title} />

      {/* Hidden Audio Element */}
      <audio
        ref={audioRef}
        src={track.url}
        loop={false}
        preload="auto"
        style={{ display: 'none' }}
      />
    </>
  );
}