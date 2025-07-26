import { motion } from "framer-motion";
import { Heart, Sparkles, Star, Crown } from "lucide-react";

export default function MagicalBackground() {
  // Create arrays of magical elements
  const hearts = Array.from({ length: 8 }, (_, i) => i);
  const sparkles = Array.from({ length: 6 }, (_, i) => i);
  const stars = Array.from({ length: 10 }, (_, i) => i);

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      {/* Reduce elements on mobile */}
      <div className="hidden sm:block">
      {/* Floating hearts */}
      {hearts.map((i) => (
        <motion.div
          key={`heart-${i}`}
          className="absolute text-pink-400 opacity-60"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            fontSize: `${Math.random() * 1.5 + 1}rem`,
          }}
          animate={{
            y: [-20, 20, -20],
            x: [-10, 10, -10],
            rotate: [0, 15, -15, 0],
            scale: [0.8, 1.2, 0.8],
            opacity: [0.3, 0.7, 0.3],
            transition: {
              duration: Math.random() * 3 + 3,
              repeat: Infinity,
              ease: "easeInOut",
              delay: Math.random() * 2,
            },
          }}
        >
          💖
        </motion.div>
      ))}

      {/* Floating sparkles */}
      {sparkles.map((i) => (
        <motion.div
          key={`sparkle-${i}`}
          className="absolute text-yellow-400 opacity-70"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            fontSize: `${Math.random() * 1.2 + 0.8}rem`,
          }}
          animate={{
            y: [-30, 30, -30],
            x: [-15, 15, -15],
            rotate: [0, 180, 360],
            scale: [0.5, 1.5, 0.5],
            opacity: [0.2, 1, 0.2],
            transition: {
              duration: Math.random() * 4 + 2,
              repeat: Infinity,
              ease: "easeInOut",
              delay: Math.random() * 3,
            },
          }}
        >
          ✨
        </motion.div>
      ))}

      {/* Floating stars */}
      {stars.map((i) => (
        <motion.div
          key={`star-${i}`}
          className="absolute text-purple-400 opacity-50"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            fontSize: `${Math.random() * 1 + 0.7}rem`,
          }}
          animate={{
            y: [-25, 25, -25],
            x: [-8, 8, -8],
            rotate: [0, 90, 180, 270, 360],
            scale: [0.6, 1.3, 0.6],
            opacity: [0.1, 0.8, 0.1],
            transition: {
              duration: Math.random() * 5 + 3,
              repeat: Infinity,
              ease: "easeInOut",
              delay: Math.random() * 4,
            },
          }}
        >
          ⭐
        </motion.div>
      ))}

      {/* Magical border sparkles */}
      <motion.div
        className="absolute top-10 left-10 text-4xl text-pink-500"
        animate={{
          scale: [1, 1.5, 1],
          rotate: [0, 360],
          opacity: [0.4, 1, 0.4],
          transition: {
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut",
          },
        }}
      >
        💫
      </motion.div>

      <motion.div
        className="absolute top-10 right-10 text-3xl text-rose-500"
        animate={{
          scale: [1, 1.3, 1],
          rotate: [360, 0],
          opacity: [0.5, 1, 0.5],
          transition: {
            duration: 3.5,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1,
          },
        }}
      >
        🌟
      </motion.div>

      <motion.div
        className="absolute bottom-10 left-10 text-3xl text-purple-500"
        animate={{
          scale: [1, 1.4, 1],
          y: [-15, 15, -15],
          opacity: [0.6, 1, 0.6],
          transition: {
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2,
          },
        }}
      >
        💖
      </motion.div>

      <motion.div
        className="absolute bottom-10 right-10 text-4xl text-orange-500"
        animate={{
          scale: [1, 1.2, 1],
          rotate: [0, -360],
          x: [-10, 10, -10],
          opacity: [0.3, 0.9, 0.3],
          transition: {
            duration: 5,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 0.5,
          },
        }}
      >
        👑
      </motion.div>

      {/* Central magical portal effect */}
      <motion.div
        className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-32 h-32 rounded-full"
        style={{
          background: "radial-gradient(circle, rgba(255,105,180,0.1) 0%, transparent 70%)",
        }}
        animate={{
          scale: [1, 1.5, 1],
          opacity: [0.2, 0.6, 0.2],
          transition: {
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut",
          },
        }}
      />
      </div>

      {/* Simplified mobile version */}
      <div className="block sm:hidden">
        {/* Reduced hearts for mobile */}
        {hearts.slice(0, 4).map((i) => (
          <motion.div
            key={`heart-mobile-${i}`}
            className="absolute text-pink-400 opacity-40"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              fontSize: "1rem",
            }}
            animate={{
              y: [-15, 15, -15],
              x: [-8, 8, -8],
              rotate: [0, 10, -10, 0],
              scale: [0.8, 1.1, 0.8],
              opacity: [0.2, 0.5, 0.2],
              transition: {
                duration: Math.random() * 4 + 4,
                repeat: Infinity,
                ease: "easeInOut",
                delay: Math.random() * 2,
              },
            }}
          >
            💖
          </motion.div>
        ))}

        {/* Reduced sparkles for mobile */}
        {sparkles.slice(0, 3).map((i) => (
          <motion.div
            key={`sparkle-mobile-${i}`}
            className="absolute text-yellow-400 opacity-50"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              fontSize: "0.9rem",
            }}
            animate={{
              y: [-20, 20, -20],
              x: [-10, 10, -10],
              rotate: [0, 180, 360],
              scale: [0.6, 1.2, 0.6],
              opacity: [0.1, 0.7, 0.1],
              transition: {
                duration: Math.random() * 5 + 3,
                repeat: Infinity,
                ease: "easeInOut",
                delay: Math.random() * 3,
              },
            }}
          >
            ✨
          </motion.div>
        ))}
      </div>
    </div>
  );
}