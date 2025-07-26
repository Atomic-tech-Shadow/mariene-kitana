import { motion } from "framer-motion";
import { portfolioData } from "@shared/schema";

export default function Footer() {
  return (
    <footer className="bg-primary text-white py-12">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div 
          className="text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="text-2xl font-bold mb-4">Portfolio</div>
          <p className="text-white/80 mb-6">© 2024 {portfolioData.user.name}. Tous droits réservés.</p>
          <div className="flex justify-center space-x-6">
            <motion.a 
              href="#" 
              className="text-white/80 hover:text-white transition-colors duration-200"
              whileHover={{ scale: 1.05 }}
            >
              Mentions légales
            </motion.a>
            <motion.a 
              href="#" 
              className="text-white/80 hover:text-white transition-colors duration-200"
              whileHover={{ scale: 1.05 }}
            >
              Politique de confidentialité
            </motion.a>
          </div>
        </motion.div>
      </div>
    </footer>
  );
}
