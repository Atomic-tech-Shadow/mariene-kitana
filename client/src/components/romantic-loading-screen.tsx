import { motion } from "framer-motion";
import { Heart, Crown, Sparkles } from "lucide-react";
import { useEffect, useState } from "react";

interface RomanticLoadingScreenProps {
  onComplete: () => void;
}

export default function RomanticLoadingScreen({ onComplete }: RomanticLoadingScreenProps) {
  const [progress, setProgress] = useState(0);
  const [currentMessage, setCurrentMessage] = useState(0);

  const loadingMessages = [
    "Préparation de la magie pour Mariène... ✨",
    "Chargement des souvenirs d'amour... 💖",
    "Illumination des étoiles romantiques... ⭐",
    "Finalisation de votre expérience magique... 🌹"
  ];

  useEffect(() => {
    const duration = 4000; // 4 seconds total
    const interval = 50; // Update every 50ms
    const steps = duration / interval;
    const increment = 100 / steps;

    const timer = setInterval(() => {
      setProgress(prev => {
        const newProgress = prev + increment;
        
        // Change message based on progress
        if (newProgress > 25 && currentMessage === 0) setCurrentMessage(1);
        if (newProgress > 50 && currentMessage === 1) setCurrentMessage(2);
        if (newProgress > 75 && currentMessage === 2) setCurrentMessage(3);
        
        if (newProgress >= 100) {
          clearInterval(timer);
          setTimeout(onComplete, 500);
          return 100;
        }
        return newProgress;
      });
    }, interval);

    return () => clearInterval(timer);
  }, [currentMessage, onComplete]);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-gradient-to-br from-pink-900 via-rose-800 to-purple-900 overflow-hidden">
      {/* Animated Background Particles */}
      <div className="absolute inset-0">
        {Array.from({ length: 20 }).map((_, i) => (
          <motion.div
            key={i}
            className="absolute"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [-20, -40, -20],
              x: [-10, 10, -10],
              opacity: [0.2, 0.8, 0.2],
              scale: [0.5, 1.5, 0.5],
            }}
            transition={{
              duration: Math.random() * 3 + 2,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          >
            {i % 3 === 0 ? "💖" : i % 3 === 1 ? "✨" : "🌹"}
          </motion.div>
        ))}
      </div>

      {/* Main Loading Content */}
      <div className="relative z-10 text-center max-w-md mx-auto px-6">
        {/* Logo/Crown Animation */}
        <motion.div
          className="mb-8"
          animate={{
            rotate: [0, 10, -10, 0],
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
          }}
        >
          <div className="relative inline-block">
            <Crown className="w-20 h-20 text-yellow-400 mx-auto" />
            <motion.div
              className="absolute -top-2 -right-2"
              animate={{
                scale: [1, 1.3, 1],
                rotate: [0, 180, 360],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
              }}
            >
              <Sparkles className="w-6 h-6 text-pink-300" />
            </motion.div>
          </div>
        </motion.div>

        {/* Title */}
        <motion.h1
          className="text-4xl font-bold text-white mb-2"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <span className="bg-gradient-to-r from-pink-300 via-rose-300 to-purple-300 bg-clip-text text-transparent">
            Mariène Kitana
          </span>
        </motion.h1>

        <motion.p
          className="text-pink-200 text-lg mb-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.8 }}
        >
          Reine de Beauté ✨
        </motion.p>

        {/* Loading Message */}
        <motion.div
          key={currentMessage}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-8 h-6"
        >
          <p className="text-pink-100 text-sm">
            {loadingMessages[currentMessage]}
          </p>
        </motion.div>

        {/* Progress Bar */}
        <div className="relative mb-6">
          <div className="w-full h-2 bg-white/20 rounded-full overflow-hidden">
            <motion.div
              className="h-full bg-gradient-to-r from-pink-400 via-rose-400 to-purple-400 rounded-full relative"
              style={{ width: `${progress}%` }}
              transition={{ duration: 0.1 }}
            >
              {/* Glowing effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-pink-300 to-purple-300 opacity-60 blur-sm" />
            </motion.div>
          </div>
          <div className="text-center mt-2">
            <span className="text-pink-200 text-sm font-medium">
              {Math.round(progress)}%
            </span>
          </div>
        </div>

        {/* Floating Hearts */}
        <div className="relative">
          {Array.from({ length: 5 }).map((_, i) => (
            <motion.div
              key={i}
              className="absolute text-pink-400"
              style={{
                left: `${10 + i * 20}%`,
                bottom: 0,
              }}
              animate={{
                y: [0, -30, 0],
                opacity: [0.4, 1, 0.4],
                scale: [0.8, 1.2, 0.8],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                delay: i * 0.3,
              }}
            >
              <Heart className="w-4 h-4" fill="currentColor" />
            </motion.div>
          ))}
        </div>
      </div>

      {/* Romantic Glow Effects */}
      <div className="absolute inset-0 pointer-events-none">
        <motion.div
          className="absolute top-1/4 left-1/4 w-32 h-32 bg-pink-500/20 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.5, 1],
            opacity: [0.3, 0.6, 0.3],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
          }}
        />
        <motion.div
          className="absolute bottom-1/4 right-1/4 w-40 h-40 bg-purple-500/20 rounded-full blur-3xl"
          animate={{
            scale: [1.2, 0.8, 1.2],
            opacity: [0.4, 0.7, 0.4],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            delay: 1,
          }}
        />
      </div>
    </div>
  );
}