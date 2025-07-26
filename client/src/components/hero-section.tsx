import { motion } from "framer-motion";
import { ArrowRight, Heart, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { fadeInUp, slideUp, floatAnimation } from "@/lib/animations";

export default function HeroSection() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="accueil" className="min-h-screen flex items-center justify-center bg-gradient-to-br from-pink-50 via-rose-50 to-red-50 pt-16 relative overflow-hidden">
      {/* Floating hearts background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="floating-hearts absolute top-10 left-10"></div>
        <div className="floating-hearts absolute top-32 right-20"></div>
        <div className="floating-hearts absolute bottom-20 left-1/4"></div>
        <div className="floating-hearts absolute bottom-32 right-1/3"></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-20 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div {...fadeInUp}>
            <div className="mb-6">
              <motion.span 
                className="inline-block px-6 py-3 bg-gradient-to-r from-pink-100 to-rose-100 text-pink-600 rounded-full text-sm font-medium mb-4 heart-pulse"
                whileHover={{ scale: 1.05 }}
              >
                💖 Ma Reine de Beauté 💖
              </motion.span>
              <motion.h1 
                className="font-bold text-5xl lg:text-7xl text-primary leading-tight mb-6"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                Mon Amour,
                <span className="gradient-text block">Mariène Kitana</span>
              </motion.h1>
              <motion.p 
                className="text-xl text-pink-700 leading-relaxed mb-8 font-medium"
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
              <Button
                onClick={() => scrollToSection("projets")}
                className="bg-gradient-to-r from-pink-500 to-rose-500 hover:from-pink-600 hover:to-rose-600 text-white px-8 py-4 text-lg font-medium shadow-lg hover:shadow-xl transition-all duration-200 romantic-glow"
                size="lg"
              >
                💕 Voir ma beauté 💕
                <Heart className="ml-2 h-5 w-5" />
              </Button>
              <Button
                onClick={() => scrollToSection("contact")}
                variant="outline"
                className="border-2 border-pink-500 text-pink-600 hover:bg-pink-500 hover:text-white px-8 py-4 text-lg font-medium transition-all duration-200"
                size="lg"
              >
                💌 M'écrire un message
              </Button>
            </motion.div>
          </motion.div>
          
          <motion.div className="lg:pl-12" {...slideUp}>
            <div className="relative">
              <div className="relative w-full max-w-md mx-auto">
                <motion.div 
                  className="aspect-[3/4] rounded-2xl overflow-hidden shadow-2xl"
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.3 }}
                >
                  <img 
                    src="/00.jpg" 
                    alt="Portrait professionnel de Mariène Kitana" 
                    className="w-full h-full object-cover" 
                  />
                </motion.div>
                
                {/* Floating romantic elements */}
                <motion.div 
                  className="absolute -top-4 -right-4 w-16 h-16 bg-gradient-to-br from-pink-400 to-rose-500 rounded-full flex items-center justify-center shadow-lg romantic-glow"
                  {...floatAnimation}
                >
                  <Heart className="text-white text-xl heart-pulse" />
                </motion.div>
                <motion.div 
                  className="absolute -bottom-4 -left-4 w-20 h-20 bg-gradient-to-br from-rose-500 to-pink-600 rounded-full flex items-center justify-center shadow-lg romantic-glow"
                  {...floatAnimation}
                  animate={{
                    y: [-10, 10, -10],
                    transition: {
                      duration: 3,
                      repeat: Infinity,
                      ease: "easeInOut",
                      delay: 1
                    }
                  }}
                >
                  <Sparkles className="text-white text-xl" />
                </motion.div>
                
                {/* Love message overlay */}
                <motion.div 
                  className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white/90 backdrop-blur-sm rounded-lg px-4 py-2 shadow-lg"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.8, delay: 1.5 }}
                >
                  <p className="text-pink-600 font-medium text-sm">💕 Je t'aime pour l'éternité 💕</p>
                </motion.div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
