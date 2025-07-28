import { motion } from "framer-motion";
import { useEffect, useState } from "react";

interface Particle {
  id: number;
  x: number;
  y: number;
  type: 'heart' | 'sparkle' | 'star' | 'rose';
  size: number;
  duration: number;
  delay: number;
}

export default function AdvancedParticleSystem() {
  const [particles, setParticles] = useState<Particle[]>([]);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  // Generate particles
  useEffect(() => {
    const generateParticles = () => {
      const newParticles: Particle[] = [];
      const types: Particle['type'][] = ['heart', 'sparkle', 'star', 'rose'];
      
      for (let i = 0; i < 15; i++) {
        newParticles.push({
          id: i,
          x: Math.random() * 100,
          y: Math.random() * 100,
          type: types[Math.floor(Math.random() * types.length)],
          size: Math.random() * 1.5 + 0.5,
          duration: Math.random() * 3 + 3,
          delay: Math.random() * 2,
        });
      }
      setParticles(newParticles);
    };

    generateParticles();
  }, []);

  // Track mouse movement for interactive effects
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth) * 100,
        y: (e.clientY / window.innerHeight) * 100,
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const getParticleEmoji = (type: Particle['type']) => {
    switch (type) {
      case 'heart': return '💖';
      case 'sparkle': return '✨';
      case 'star': return '⭐';
      case 'rose': return '🌹';
      default: return '💖';
    }
  };

  const getParticleColor = (type: Particle['type']) => {
    switch (type) {
      case 'heart': return 'text-pink-400';
      case 'sparkle': return 'text-yellow-400';
      case 'star': return 'text-purple-400';
      case 'rose': return 'text-rose-500';
      default: return 'text-pink-400';
    }
  };

  return (
    <div className="fixed inset-0 pointer-events-none z-10 overflow-hidden">
      {/* Static Particles */}
      {particles.map((particle) => (
        <motion.div
          key={particle.id}
          className={`absolute ${getParticleColor(particle.type)} opacity-60`}
          style={{
            left: `${particle.x}%`,
            top: `${particle.y}%`,
            fontSize: `${particle.size}rem`,
          }}
          animate={{
            y: [-20, 20, -20],
            x: [-10, 10, -10],
            rotate: [0, 360],
            scale: [0.8, 1.2, 0.8],
            opacity: [0.3, 0.8, 0.3],
          }}
          transition={{
            duration: particle.duration,
            repeat: Infinity,
            ease: "easeInOut",
            delay: particle.delay,
          }}
        >
          {getParticleEmoji(particle.type)}
        </motion.div>
      ))}

      {/* Interactive Mouse Trail Hearts */}
      <motion.div
        className="absolute text-pink-500 text-xl pointer-events-none"
        style={{
          left: `${mousePosition.x}%`,
          top: `${mousePosition.y}%`,
          transform: 'translate(-50%, -50%)',
        }}
        animate={{
          scale: [1, 1.3, 1],
          opacity: [0.5, 0.8, 0.5],
        }}
        transition={{
          duration: 1,
          repeat: Infinity,
        }}
      >
        💕
      </motion.div>

      {/* Floating Bubbles Effect */}
      {Array.from({ length: 8 }).map((_, i) => (
        <motion.div
          key={`bubble-${i}`}
          className="absolute w-2 h-2 bg-pink-300/30 rounded-full"
          style={{
            left: `${Math.random() * 100}%`,
            top: `100%`,
          }}
          animate={{
            y: [0, -window.innerHeight - 50],
            x: [0, Math.random() * 100 - 50],
            opacity: [0, 0.6, 0],
            scale: [0.5, 1.5, 0.5],
          }}
          transition={{
            duration: Math.random() * 5 + 5,
            repeat: Infinity,
            delay: i * 0.5,
            ease: "easeOut",
          }}
        />
      ))}

      {/* Romantic Glow Orbs */}
      <motion.div
        className="absolute w-32 h-32 bg-gradient-to-r from-pink-500/20 to-rose-500/20 rounded-full blur-2xl"
        style={{
          left: '10%',
          top: '20%',
        }}
        animate={{
          scale: [1, 1.5, 1],
          opacity: [0.2, 0.4, 0.2],
          x: [-20, 20, -20],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
        }}
      />

      <motion.div
        className="absolute w-24 h-24 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-full blur-2xl"
        style={{
          right: '15%',
          bottom: '25%',
        }}
        animate={{
          scale: [1.2, 0.8, 1.2],
          opacity: [0.3, 0.6, 0.3],
          y: [-30, 30, -30],
        }}
        transition={{
          duration: 7,
          repeat: Infinity,
          delay: 2,
        }}
      />

      {/* Magical Sparkle Trail */}
      {Array.from({ length: 12 }).map((_, i) => (
        <motion.div
          key={`sparkle-${i}`}
          className="absolute text-yellow-300"
          style={{
            left: `${5 + i * 8}%`,
            top: `${80 + Math.sin(i) * 10}%`,
            fontSize: '0.8rem',
          }}
          animate={{
            opacity: [0, 1, 0],
            scale: [0, 1.5, 0],
            rotate: [0, 180, 360],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            delay: i * 0.1,
          }}
        >
          ✨
        </motion.div>
      ))}

      {/* Love Message Particles */}
      <motion.div
        className="absolute text-pink-400 text-sm font-light opacity-50"
        style={{
          left: '50%',
          top: '10%',
          transform: 'translateX(-50%)',
        }}
        animate={{
          y: [0, -20, 0],
          opacity: [0.3, 0.7, 0.3],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
        }}
      >
        Pour Mariène, avec tout mon amour ❤️
      </motion.div>
    </div>
  );
}