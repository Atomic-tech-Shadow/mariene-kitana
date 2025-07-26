import { motion } from "framer-motion";
import { ArrowRight, Palette, Lightbulb } from "lucide-react";
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
    <section id="accueil" className="min-h-screen flex items-center justify-center bg-gradient-to-br from-secondary via-white to-purple-50 pt-16">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div {...fadeInUp}>
            <div className="mb-6">
              <motion.span 
                className="inline-block px-4 py-2 bg-accent/10 text-accent rounded-full text-sm font-medium mb-4"
                whileHover={{ scale: 1.05 }}
              >
                Portfolio Créatif
              </motion.span>
              <motion.h1 
                className="font-bold text-5xl lg:text-7xl text-primary leading-tight mb-6"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                Bonjour, je suis
                <span className="gradient-text block">Marie Dubois</span>
              </motion.h1>
              <motion.p 
                className="text-xl text-neutral leading-relaxed mb-8"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
              >
                Designer créative passionnée par l'art visuel et l'expérience utilisateur. 
                Je transforme les idées en créations uniques et mémorables.
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
                className="bg-primary hover:bg-primary/90 text-white px-8 py-4 text-lg font-medium shadow-lg hover:shadow-xl transition-all duration-200"
                size="lg"
              >
                Voir mes projets
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button
                onClick={() => scrollToSection("contact")}
                variant="outline"
                className="border-2 border-primary text-primary hover:bg-primary hover:text-white px-8 py-4 text-lg font-medium transition-all duration-200"
                size="lg"
              >
                Me contacter
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
                    src="https://images.unsplash.com/photo-1494790108755-2616b612b742?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&h=1000" 
                    alt="Portrait professionnel" 
                    className="w-full h-full object-cover" 
                  />
                </motion.div>
                
                {/* Floating elements */}
                <motion.div 
                  className="absolute -top-4 -right-4 w-16 h-16 bg-accent rounded-full flex items-center justify-center shadow-lg"
                  {...floatAnimation}
                >
                  <Palette className="text-white text-xl" />
                </motion.div>
                <motion.div 
                  className="absolute -bottom-4 -left-4 w-20 h-20 bg-primary rounded-full flex items-center justify-center shadow-lg"
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
                  <Lightbulb className="text-white text-xl" />
                </motion.div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
