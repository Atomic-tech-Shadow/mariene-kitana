import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Heart, Sparkles, Crown, Star } from "lucide-react";

export default function LoveSurpriseButton() {
  const [isActive, setIsActive] = useState(false);
  const [showMessages, setShowMessages] = useState(false);

  const loveMessages = [
    "💕 Je t'aime Mariène !",
    "🌟 Tu es ma reine !",
    "👑 La plus belle au monde !",
    "💖 Mon cœur t'appartient !",
    "✨ Tu illumines ma vie !",
    "🌹 Ma princesse d'amour !",
    "💎 Précieuse comme un diamant !",
    "🦋 Libre comme un papillon !",
  ];

  const handleClick = () => {
    setIsActive(true);
    setShowMessages(true);
    
    // Hide messages after 5 seconds
    setTimeout(() => {
      setShowMessages(false);
      setIsActive(false);
    }, 5000);
  };

  return (
    <>
      {/* Surprise Button */}
      <motion.button
        onClick={handleClick}
        className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 w-14 h-14 sm:w-16 sm:h-16 bg-gradient-to-br from-pink-500 to-rose-600 rounded-full shadow-lg z-50 flex items-center justify-center animate-love-glow touch-manipulation"
        whileHover={{ 
          scale: 1.1,
          boxShadow: "0 0 30px rgba(255, 105, 180, 0.8)"
        }}
        whileTap={{ scale: 0.9 }}
        animate={{
          y: isActive ? [-20, 20, -20] : [0, -5, 0],
          transition: {
            duration: isActive ? 1 : 2,
            repeat: Infinity,
            ease: "easeInOut"
          }
        }}
      >
        <motion.div
          animate={{
            scale: [1, 1.3, 1],
            rotate: isActive ? [0, 360] : [0, 15, -15, 0],
            transition: {
              duration: isActive ? 1 : 2,
              repeat: Infinity,
              ease: "easeInOut"
            }
          }}
        >
          <Heart className="text-white text-lg sm:text-xl" />
        </motion.div>
      </motion.button>

      {/* Magical explosion effect */}
      <AnimatePresence>
        {isActive && (
          <motion.div
            className="fixed inset-0 pointer-events-none z-40"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
          >
            {/* Flash effect */}
            <motion.div
              className="absolute inset-0 bg-gradient-radial from-pink-300/30 via-rose-200/20 to-transparent"
              initial={{ scale: 0 }}
              animate={{ scale: 3 }}
              exit={{ scale: 0 }}
              transition={{ duration: 1 }}
            />

            {/* Floating hearts explosion */}
            {Array.from({ length: 15 }).map((_, i) => (
              <motion.div
                key={i}
                className="absolute text-4xl"
                style={{
                  left: "50%",
                  top: "50%",
                }}
                initial={{ 
                  x: 0, 
                  y: 0, 
                  scale: 0, 
                  opacity: 0 
                }}
                animate={{
                  x: (Math.random() - 0.5) * 1000,
                  y: (Math.random() - 0.5) * 800,
                  scale: [0, 1.5, 0],
                  opacity: [0, 1, 0],
                  rotate: [0, 360 * (Math.random() > 0.5 ? 1 : -1)],
                }}
                transition={{
                  duration: 3,
                  ease: "easeOut",
                  delay: i * 0.1,
                }}
              >
                {["💖", "💕", "❤️", "💗", "💝"][Math.floor(Math.random() * 5)]}
              </motion.div>
            ))}

            {/* Sparkles explosion */}
            {Array.from({ length: 10 }).map((_, i) => (
              <motion.div
                key={`sparkle-${i}`}
                className="absolute text-3xl"
                style={{
                  left: "50%",
                  top: "50%",
                }}
                initial={{ 
                  x: 0, 
                  y: 0, 
                  scale: 0, 
                  opacity: 0 
                }}
                animate={{
                  x: (Math.random() - 0.5) * 800,
                  y: (Math.random() - 0.5) * 600,
                  scale: [0, 1.2, 0],
                  opacity: [0, 1, 0],
                  rotate: [0, 720],
                }}
                transition={{
                  duration: 2.5,
                  ease: "easeOut",
                  delay: i * 0.15,
                }}
              >
                {["✨", "⭐", "🌟", "💫"][Math.floor(Math.random() * 4)]}
              </motion.div>
            ))}
          </motion.div>
        )}
      </AnimatePresence>

      {/* Love messages */}
      <AnimatePresence>
        {showMessages && (
          <div className="fixed inset-0 pointer-events-none z-30">
            {loveMessages.map((message, i) => (
              <motion.div
                key={i}
                className="absolute bg-white/95 backdrop-blur-sm rounded-lg px-3 py-2 shadow-lg border-2 border-pink-300"
                style={{
                  left: `${10 + (i % 2) * 40}%`,
                  top: `${15 + Math.floor(i / 2) * 20}%`,
                }}
                initial={{ 
                  scale: 0, 
                  opacity: 0, 
                  rotateZ: -180 
                }}
                animate={{ 
                  scale: 1, 
                  opacity: 1, 
                  rotateZ: 0,
                  y: [-10, 10, -10],
                  transition: {
                    duration: 0.8,
                    delay: i * 0.2,
                    y: {
                      duration: 2,
                      repeat: Infinity,
                      ease: "easeInOut",
                      delay: i * 0.2 + 1
                    }
                  }
                }}
                exit={{ 
                  scale: 0, 
                  opacity: 0, 
                  rotateZ: 180,
                  transition: {
                    duration: 0.5,
                    delay: i * 0.1
                  }
                }}
              >
                <motion.p
                  className="text-pink-600 font-medium text-xs sm:text-sm whitespace-nowrap"
                  animate={{
                    color: ["#e91e63", "#ff69b4", "#ff1493", "#e91e63"],
                    transition: {
                      duration: 2,
                      repeat: Infinity,
                      ease: "easeInOut",
                      delay: i * 0.3
                    }
                  }}
                >
                  {message}
                </motion.p>
              </motion.div>
            ))}
          </div>
        )}
      </AnimatePresence>
    </>
  );
}