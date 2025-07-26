import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useQuery } from "@tanstack/react-query";
import { ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { fadeInUp, staggerContainer, scaleOnHover } from "@/lib/animations";
import type { Project } from "@shared/schema";

export default function ProjectsGallery() {
  const [activeFilter, setActiveFilter] = useState("all");

  const { data: projects = [], isLoading } = useQuery<Project[]>({
    queryKey: ["/api/projects"],
  });

  const categories = [
    { id: "all", label: "Tous les projets" },
    { id: "photo", label: "Photography" },
    { id: "mode", label: "Mode" },
    { id: "beaute", label: "Beauté" },
  ];

  const filteredProjects = projects.filter(project => 
    activeFilter === "all" || project.category === activeFilter
  );

  const getCategoryColor = (category: string) => {
    switch (category) {
      case "photo":
        return "bg-accent/10 text-accent";
      case "mode":
        return "bg-green-100 text-green-600";
      case "beaute":
        return "bg-primary/10 text-primary";
      default:
        return "bg-purple-100 text-purple-600";
    }
  };

  const getCategoryLabel = (category: string) => {
    switch (category) {
      case "photo":
        return "Photography";
      case "mode":
        return "Mode";
      case "beaute":
        return "Beauté";
      default:
        return "Création";
    }
  };

  if (isLoading) {
    return (
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="h-12 bg-gray-200 rounded mx-auto mb-6 w-64 animate-pulse"></div>
            <div className="h-6 bg-gray-200 rounded mx-auto w-96 animate-pulse"></div>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[...Array(6)].map((_, i) => (
              <div key={i} className="animate-pulse">
                <div className="bg-gray-200 aspect-[4/3] rounded-xl mb-4"></div>
                <div className="h-4 bg-gray-200 rounded mb-2"></div>
                <div className="h-4 bg-gray-200 rounded w-3/4"></div>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="projets" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div className="text-center mb-16" {...fadeInUp}>
          <h2 className="text-4xl lg:text-5xl font-bold text-primary mb-6">
            Ma Galerie
          </h2>
          <p className="text-xl text-neutral max-w-3xl mx-auto leading-relaxed">
            Découvrez une sélection de mes shootings et créations les plus récentes, 
            alliant beauté naturelle et art visuel pour des moments inoubliables.
          </p>
        </motion.div>
        
        {/* Filter Buttons */}
        <motion.div 
          className="flex flex-wrap justify-center gap-4 mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          {categories.map((category) => (
            <Button
              key={category.id}
              onClick={() => setActiveFilter(category.id)}
              variant={activeFilter === category.id ? "default" : "outline"}
              className={`px-6 py-3 rounded-full font-medium transition-all duration-200 ${
                activeFilter === category.id
                  ? "bg-primary text-white hover:bg-primary/90"
                  : "bg-gray-100 text-neutral hover:bg-gray-200"
              }`}
            >
              {category.label}
            </Button>
          ))}
        </motion.div>
        
        {/* Projects Grid */}
        <motion.div 
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={staggerContainer}
          initial="initial"
          animate="animate"
        >
          <AnimatePresence mode="wait">
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                {...scaleOnHover}
              >
                <Card className="overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300">
                  <div className="aspect-[4/3] overflow-hidden">
                    <img 
                      src={project.imageUrl} 
                      alt={project.title}
                      className="w-full h-full object-cover transform transition-transform duration-300 hover:scale-110" 
                    />
                  </div>
                  <CardContent className="p-6">
                    <div className="flex items-center justify-between mb-3">
                      <Badge className={getCategoryColor(project.category)}>
                        {getCategoryLabel(project.category)}
                      </Badge>
                      {project.projectUrl && (
                        <motion.button
                          whileHover={{ scale: 1.1 }}
                          whileTap={{ scale: 0.95 }}
                          onClick={() => project.projectUrl && window.open(project.projectUrl, '_blank')}
                        >
                          <ExternalLink className="h-5 w-5 text-neutral hover:text-primary cursor-pointer transition-colors duration-200" />
                        </motion.button>
                      )}
                    </div>
                    <h3 className="text-xl font-semibold text-primary mb-2">
                      {project.title}
                    </h3>
                    <p className="text-neutral leading-relaxed">
                      {project.description}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
