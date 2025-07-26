import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsOpen(false);
    }
  };

  const navItems = [
    { label: "💕 Mon Amour", id: "accueil" },
    { label: "📸 Sa Beauté", id: "projets" },
    { label: "💖 Mon Cœur", id: "apropos" },
    { label: "💌 Lui Écrire", id: "contact" },
  ];

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled 
          ? "bg-white/95 backdrop-blur shadow-lg" 
          : "glass-effect"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <motion.div 
            className="font-bold text-xl text-primary animate-text-dance"
            whileHover={{ 
              scale: 1.1,
              textShadow: "0 0 15px rgba(255, 105, 180, 0.8)"
            }}
            animate={{
              background: [
                "linear-gradient(45deg, #e91e63, #ff69b4)",
                "linear-gradient(135deg, #ff1493, #dc143c)",
                "linear-gradient(225deg, #dc143c, #ff69b4)",
                "linear-gradient(315deg, #ff69b4, #e91e63)"
              ],
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
              transition: {
                duration: 3,
                repeat: Infinity,
                ease: "linear"
              }
            }}
          >
            👑 Mariène Kitana 👑
          </motion.div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-8">
            {navItems.map((item, index) => (
              <motion.button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="text-neutral hover:text-primary transition-colors duration-200 font-medium"
                whileHover={{ 
                  scale: 1.1,
                  y: -2,
                  color: "#ff69b4",
                  textShadow: "0 0 10px rgba(255, 105, 180, 0.6)"
                }}
                whileTap={{ scale: 0.95 }}
                animate={{
                  y: [0, -2, 0],
                  transition: {
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: index * 0.2
                  }
                }}
              >
                <motion.span
                  animate={{
                    filter: [
                      "hue-rotate(0deg)",
                      "hue-rotate(90deg)",
                      "hue-rotate(180deg)",
                      "hue-rotate(270deg)",
                      "hue-rotate(360deg)"
                    ],
                    transition: {
                      duration: 4,
                      repeat: Infinity,
                      ease: "linear",
                      delay: index * 0.5
                    }
                  }}
                >
                  {item.label}
                </motion.span>
              </motion.button>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </Button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          exit={{ opacity: 0, height: 0 }}
          className="md:hidden bg-white border-t"
        >
          <div className="px-6 py-4 space-y-3">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="block w-full text-left text-neutral hover:text-primary transition-colors duration-200 font-medium py-2"
              >
                {item.label}
              </button>
            ))}
          </div>
        </motion.div>
      )}
    </motion.nav>
  );
}
