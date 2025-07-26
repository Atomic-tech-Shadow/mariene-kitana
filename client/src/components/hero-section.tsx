import { motion } from "framer-motion";
import { ArrowRight, Heart, Sparkles, Star, Crown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { fadeInUp, slideUp, floatAnimation, heartBeat, sparkleFloat, loveText, magicAppear, butterflEffect, starTwinkle } from "@/lib/animations";

export default function HeroSection() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="accueil" className="min-h-screen flex items-center justify-center bg-gradient-to-br from-pink-50 via-rose-50 to-red-50 pt-16 pb-8 px-4 relative overflow-hidden love-hearts-bg">
      {/* Magical floating elements background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="floating-hearts absolute top-10 left-10 animate-heartbeat"></div>
        <div className="floating-hearts absolute top-32 right-20 animate-twinkle"></div>
        <div className="floating-hearts absolute bottom-20 left-1/4 animate-butterfly-float"></div>
        <div className="floating-hearts absolute bottom-32 right-1/3 animate-sparkle-dance"></div>
        
        {/* Magical sparkles */}
        <motion.div 
          className="absolute top-1/4 left-1/3 text-4xl"
          {...sparkleFloat}
        >
          ✨
        </motion.div>
        <motion.div 
          className="absolute top-3/4 right-1/4 text-3xl animate-twinkle"
          {...starTwinkle}
        >
          ⭐
        </motion.div>
        <motion.div 
          className="absolute top-1/3 right-1/3 text-2xl animate-rainbow-pulse"
          animate={{
            y: [-15, 15, -15],
            x: [-5, 5, -5],
            rotate: [0, 360],
            transition: {
              duration: 6,
              repeat: Infinity,
              ease: "easeInOut"
            }
          }}
        >
          💫
        </motion.div>
      </div>
      
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-20 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div {...fadeInUp}>
            <div className="mb-6">
              <motion.span 
                className="inline-block px-6 py-3 bg-gradient-to-r from-pink-100 to-rose-100 text-pink-600 rounded-full text-sm font-medium mb-4 animate-love-glow romantic-sparkle"
                whileHover={{ scale: 1.05 }}
                {...magicAppear}
              >
                👑 Ma Reine de Beauté 👑
              </motion.span>
              <motion.h1 
                className="font-bold text-3xl sm:text-4xl md:text-5xl lg:text-7xl text-primary leading-tight mb-6 animate-text-dance"
                {...loveText}
              >
                Mon Amour,
                <motion.span 
                  className="gradient-text block animate-rainbow-pulse"
                  animate={{
                    textShadow: [
                      "0 0 10px rgba(255, 105, 180, 0.5)",
                      "0 0 20px rgba(255, 105, 180, 0.8)",
                      "0 0 10px rgba(255, 105, 180, 0.5)"
                    ],
                    transition: {
                      duration: 2,
                      repeat: Infinity,
                      ease: "easeInOut"
                    }
                  }}
                >
                  Mariène Kitana
                </motion.span>
              </motion.h1>
              <motion.p 
                className="text-base sm:text-lg md:text-xl text-pink-700 leading-relaxed mb-8 font-medium"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
              >
                La plus belle des reines, ma muse et mon inspiration. Chaque photo capture ta beauté extraordinaire et l'amour infini que j'ai pour toi. ❤️
              </motion.p>
            </div>
            
            <motion.div 
              className="flex flex-col sm:flex-row gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <motion.div
                whileHover={{ 
                  scale: 1.05,
                  boxShadow: "0 0 30px rgba(255, 105, 180, 0.6)"
                }}
                whileTap={{ scale: 0.95 }}
              >
                <Button
                  onClick={() => scrollToSection("projets")}
                  className="bg-gradient-to-r from-pink-500 to-rose-500 hover:from-pink-600 hover:to-rose-600 text-white px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg font-medium shadow-lg hover:shadow-xl transition-all duration-200 animate-love-glow romantic-sparkle w-full sm:w-auto"
                  size="lg"
                >
                  💕 Voir ma beauté 💕
                  <motion.div
                    animate={{
                      scale: [1, 1.2, 1],
                      transition: {
                        duration: 1.5,
                        repeat: Infinity,
                        ease: "easeInOut"
                      }
                    }}
                  >
                    <Heart className="ml-2 h-5 w-5" />
                  </motion.div>
                </Button>
              </motion.div>
              <motion.div
                whileHover={{ 
                  scale: 1.05,
                  borderColor: "#ff69b4"
                }}
                whileTap={{ scale: 0.95 }}
              >
                <Button
                  onClick={() => scrollToSection("contact")}
                  variant="outline"
                  className="border-2 border-pink-500 text-pink-600 hover:bg-pink-500 hover:text-white px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg font-medium transition-all duration-200 animate-magical-entrance w-full sm:w-auto"
                  size="lg"
                >
                  💌 M'écrire un message
                </Button>
              </motion.div>
            </motion.div>
          </motion.div>
          
          <motion.div className="lg:pl-12" {...slideUp}>
            <div className="relative">
              <div className="relative w-full max-w-md mx-auto romantic-sparkle">
                <motion.div 
                  className="aspect-[3/4] rounded-2xl overflow-hidden shadow-2xl animate-love-glow"
                  whileHover={{ 
                    scale: 1.03,
                    rotateY: 5,
                    boxShadow: "0 0 40px rgba(255, 105, 180, 0.8)"
                  }}
                  transition={{ duration: 0.3 }}
                  {...magicAppear}
                >
                  <img 
                    src="/00.jpg" 
                    alt="Portrait professionnel de Mariène Kitana" 
                    className="w-full h-full object-cover animate-rainbow-pulse" 
                  />
                </motion.div>
                
                {/* Enhanced floating romantic elements */}
                <motion.div 
                  className="absolute -top-4 -right-4 w-16 h-16 bg-gradient-to-br from-pink-400 to-rose-500 rounded-full flex items-center justify-center shadow-lg animate-heartbeat"
                  {...sparkleFloat}
                  whileHover={{ scale: 1.2 }}
                >
                  <motion.div
                    {...heartBeat}
                  >
                    <Heart className="text-white text-xl" />
                  </motion.div>
                </motion.div>

                <motion.div 
                  className="absolute -bottom-4 -left-4 w-20 h-20 bg-gradient-to-br from-rose-500 to-pink-600 rounded-full flex items-center justify-center shadow-lg animate-sparkle-dance"
                  {...butterflEffect}
                  whileHover={{ scale: 1.2 }}
                >
                  <Sparkles className="text-white text-xl animate-twinkle" />
                </motion.div>

                {/* Crown element */}
                <motion.div 
                  className="absolute -top-8 left-1/2 transform -translate-x-1/2 w-12 h-12 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-full flex items-center justify-center shadow-lg animate-rainbow-pulse"
                  animate={{
                    y: [-20, 0, -20],
                    rotate: [0, 10, -10, 0],
                    transition: {
                      duration: 4,
                      repeat: Infinity,
                      ease: "easeInOut"
                    }
                  }}
                  whileHover={{ scale: 1.3 }}
                >
                  <Crown className="text-white text-lg" />
                </motion.div>

                {/* Extra magical sparkles */}
                <motion.div 
                  className="absolute top-1/4 -left-6 text-2xl"
                  animate={{
                    x: [-10, 10, -10],
                    y: [-5, 5, -5],
                    rotate: [0, 360],
                    scale: [0.8, 1.2, 0.8],
                    transition: {
                      duration: 3,
                      repeat: Infinity,
                      ease: "easeInOut"
                    }
                  }}
                >
                  🌟
                </motion.div>
                
                {/* Love message overlay */}
                <motion.div 
                  className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white/95 backdrop-blur-sm rounded-lg px-4 py-2 shadow-lg animate-love-glow"
                  initial={{ opacity: 0, scale: 0.8, rotateZ: -180 }}
                  animate={{ 
                    opacity: 1, 
                    scale: 1, 
                    rotateZ: 0,
                    transition: {
                      duration: 1.2,
                      delay: 1.5,
                      type: "spring",
                      stiffness: 200
                    }
                  }}
                  whileHover={{ scale: 1.05 }}
                >
                  <motion.p 
                    className="text-pink-600 font-medium text-sm animate-text-dance"
                    animate={{
                      color: ["#e91e63", "#ff69b4", "#ff1493", "#e91e63"],
                      transition: {
                        duration: 2,
                        repeat: Infinity,
                        ease: "easeInOut"
                      }
                    }}
                  >
                    💕 Je t'aime pour l'éternité 💕
                  </motion.p>
                </motion.div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
