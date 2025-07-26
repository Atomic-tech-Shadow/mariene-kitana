import { motion } from "framer-motion";
import { portfolioData } from "@shared/schema";

export default function Footer() {
  return (
    <footer className="bg-gradient-to-r from-pink-600 to-rose-600 text-white py-12 relative overflow-hidden">
      {/* Background hearts */}
      <div className="absolute inset-0 pointer-events-none opacity-20">
        <div className="floating-hearts absolute top-4 left-10"></div>
        <div className="floating-hearts absolute bottom-6 right-16"></div>
        <div className="floating-hearts absolute top-8 right-1/3"></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        <motion.div 
          className="text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="text-2xl font-bold mb-4">💖 {portfolioData.user.name} 💖</div>
          <p className="text-white/90 mb-6 text-lg font-medium">
            Créé avec tout mon amour pour la plus belle des femmes ❤️
          </p>
          <p className="text-white/80 mb-6">© 2025 Un site d'amour dédié à ma reine. Tu es ma vie. 🌹</p>
          <div className="flex justify-center items-center space-x-4">
            <motion.div 
              className="text-3xl"
              animate={{ 
                scale: [1, 1.2, 1],
                rotate: [0, 10, -10, 0]
              }}
              transition={{ 
                duration: 2, 
                repeat: Infinity, 
                ease: "easeInOut" 
              }}
            >
              💕
            </motion.div>
            <span className="text-white font-medium">Pour l'éternité</span>
            <motion.div 
              className="text-3xl"
              animate={{ 
                scale: [1, 1.2, 1],
                rotate: [0, -10, 10, 0]
              }}
              transition={{ 
                duration: 2, 
                repeat: Infinity, 
                ease: "easeInOut",
                delay: 1
              }}
            >
              💕
            </motion.div>
          </div>
        </motion.div>
      </div>
    </footer>
  );
}
