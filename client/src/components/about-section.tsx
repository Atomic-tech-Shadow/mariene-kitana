import { motion } from "framer-motion";
import { Progress } from "@/components/ui/progress";
import { fadeInUp, slideUp } from "@/lib/animations";
import { portfolioData } from "@shared/schema";

export default function AboutSection() {
  const skills = [
    { name: "Photographie", level: 98 },
    { name: "Mode & Style", level: 95 },
    { name: "Beauté & Makeup", level: 92 },
  ];

  return (
    <section id="apropos" className="py-20 bg-gradient-to-br from-secondary to-purple-50">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div {...fadeInUp}>
            <h2 className="text-4xl lg:text-5xl font-bold text-primary mb-8">
              À propos de moi
            </h2>
            <div className="space-y-6 text-lg text-neutral leading-relaxed">
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
              >
                {portfolioData.user.bio1}
              </motion.p>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                {portfolioData.user.bio2}
              </motion.p>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
              >
                {portfolioData.user.bio3}
              </motion.p>
            </div>
            
            {/* Skills */}
            <motion.div 
              className="mt-12"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <h3 className="text-2xl font-semibold text-primary mb-6">Mes Compétences</h3>
              <div className="space-y-6">
                {skills.map((skill, index) => (
                  <motion.div 
                    key={skill.name}
                    initial={{ opacity: 0, x: -30 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: 0.5 + index * 0.1 }}
                  >
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-neutral font-medium">{skill.name}</span>
                      <span className="text-primary font-semibold">{skill.level}%</span>
                    </div>
                    <Progress 
                      value={skill.level} 
                      className="h-2 bg-gray-200"
                    />
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </motion.div>
          
          <motion.div {...slideUp}>
            <div className="relative">
              <motion.img 
                src="/kitana/10.jpg" 
                alt="Portrait artistique de Mariène Kitana" 
                className="rounded-2xl shadow-2xl w-full"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
              />
              
              {/* Stats Cards */}
              <motion.div 
                className="absolute -bottom-6 -left-6 bg-white rounded-xl shadow-lg p-6"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.8 }}
                whileHover={{ scale: 1.05 }}
              >
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary mb-1">
                    {portfolioData.stats.projects}
                  </div>
                  <div className="text-sm text-neutral">Projets réalisés</div>
                </div>
              </motion.div>
              
              <motion.div 
                className="absolute -top-6 -right-6 bg-white rounded-xl shadow-lg p-6"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 1 }}
                whileHover={{ scale: 1.05 }}
              >
                <div className="text-center">
                  <div className="text-3xl font-bold text-accent mb-1">
                    {portfolioData.stats.clients}
                  </div>
                  <div className="text-sm text-neutral">Clients satisfaits</div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
