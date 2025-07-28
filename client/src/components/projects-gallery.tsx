import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useQuery } from "@tanstack/react-query";
import { ExternalLink, X, ChevronLeft, ChevronRight, ZoomIn, Play, Pause } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { fadeInUp, staggerContainer, scaleOnHover } from "@/lib/animations";
import type { Project } from "@shared/schema";

export default function ProjectsGallery() {
  const [activeFilter, setActiveFilter] = useState("all");
  const [selectedImage, setSelectedImage] = useState<Project | null>(null);
  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);
  const [isSlideshow, setIsSlideshow] = useState(false);
  const [slideshowInterval, setSlideshowInterval] = useState<NodeJS.Timeout | null>(null);

  const { data: projects = [], isLoading, error } = useQuery<Project[]>({
    queryKey: ["/api/projects"],
  });



  const categories = [
    { id: "all", label: "💕 Toutes tes photos" },
    { id: "photo", label: "📸 Portraits" },
    { id: "mode", label: "👗 Mode" },
    { id: "beaute", label: "💄 Beauté" },
  ];

  const filteredProjects = projects.filter(project => 
    activeFilter === "all" || project.category === activeFilter
  );

  // Slideshow functionality
  useEffect(() => {
    if (isSlideshow && filteredProjects.length > 0 && selectedImage) {
      const interval = setInterval(() => {
        const newIndex = (currentSlideIndex + 1) % filteredProjects.length;
        setCurrentSlideIndex(newIndex);
        setSelectedImage(filteredProjects[newIndex]);
      }, 3000);
      setSlideshowInterval(interval);
      return () => clearInterval(interval);
    } else if (slideshowInterval) {
      clearInterval(slideshowInterval);
      setSlideshowInterval(null);
    }
  }, [isSlideshow, filteredProjects.length, currentSlideIndex, selectedImage]);

  // Keyboard navigation
  useEffect(() => {
    if (!selectedImage || filteredProjects.length === 0) return;

    const handleKeyPress = (e: KeyboardEvent) => {
      switch (e.key) {
        case 'ArrowLeft':
          e.preventDefault();
          prevImage();
          break;
        case 'ArrowRight':
          e.preventDefault();
          nextImage();
          break;
        case 'Escape':
          e.preventDefault();
          closeFullscreen();
          break;
        case ' ':
          e.preventDefault();
          toggleSlideshow();
          break;
      }
    };

    if (typeof window !== 'undefined') {
      window.addEventListener('keydown', handleKeyPress);
      return () => window.removeEventListener('keydown', handleKeyPress);
    }
  }, [selectedImage, filteredProjects.length, currentSlideIndex]);

  const openFullscreen = (project: Project) => {
    setSelectedImage(project);
    const index = filteredProjects.findIndex(p => p.id === project.id);
    setCurrentSlideIndex(index);
  };

  const closeFullscreen = () => {
    setSelectedImage(null);
    setIsSlideshow(false);
  };

  const nextImage = () => {
    if (filteredProjects.length === 0) return;
    const newIndex = (currentSlideIndex + 1) % filteredProjects.length;
    setCurrentSlideIndex(newIndex);
    setSelectedImage(filteredProjects[newIndex]);
  };

  const prevImage = () => {
    if (filteredProjects.length === 0) return;
    const newIndex = currentSlideIndex === 0 ? filteredProjects.length - 1 : currentSlideIndex - 1;
    setCurrentSlideIndex(newIndex);
    setSelectedImage(filteredProjects[newIndex]);
  };

  const toggleSlideshow = () => {
    setIsSlideshow(!isSlideshow);
  };

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
    <section id="projets" className="py-20 bg-gradient-to-br from-rose-50 to-pink-100 relative">
      {/* Floating hearts */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="floating-hearts absolute top-20 left-16"></div>
        <div className="floating-hearts absolute bottom-32 right-20"></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        <motion.div className="text-center mb-16" {...fadeInUp}>
          <h2 className="text-4xl lg:text-5xl font-bold text-primary mb-6">
            💖 Galerie de Ma Princesse 💖
          </h2>
          <p className="text-xl text-pink-700 max-w-3xl mx-auto leading-relaxed font-medium">
            Chaque photo de toi est un trésor qui capture ta beauté extraordinaire. 
            Tu es la plus belle chose qui me soit jamais arrivée. ❤️✨
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
                  ? "bg-gradient-to-r from-pink-500 to-rose-500 text-white hover:from-pink-600 hover:to-rose-600 romantic-glow"
                  : "bg-pink-50 text-pink-600 border-pink-200 hover:bg-pink-100"
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
                <Card className="overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300 border-2 border-pink-100 hover:border-pink-300 romantic-glow">
                  <div 
                    className="aspect-[4/3] overflow-hidden relative cursor-pointer group"
                    onClick={() => openFullscreen(project)}
                  >
                    <img 
                      src={project.imageUrl} 
                      alt={project.title}
                      className="w-full h-full object-cover transform transition-transform duration-300 hover:scale-110" 
                      onError={(e) => {
                        console.log('Image failed to load:', project.imageUrl);
                        const target = e.currentTarget as HTMLImageElement;
                        target.style.display = 'none';
                        // Show a placeholder or retry logic
                        const parent = target.parentElement;
                        if (parent && !parent.querySelector('.image-fallback')) {
                          const fallback = document.createElement('div');
                          fallback.className = 'image-fallback w-full h-full bg-pink-100 flex items-center justify-center text-pink-400';
                          fallback.innerHTML = `<div class="text-center"><div class="text-4xl mb-2">💖</div><div class="text-sm">Image en cours de chargement...</div></div>`;
                          parent.appendChild(fallback);
                        }
                      }}
                    />
                    {/* Zoom overlay on hover */}
                    <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                      <ZoomIn className="text-white w-12 h-12 animate-pulse" />
                    </div>
                    {/* Love overlay at bottom */}
                    <div className="absolute inset-0 bg-gradient-to-t from-pink-900/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-4">
                      <span className="text-white font-semibold text-lg">💕 Cliquer pour agrandir 💕</span>
                    </div>
                  </div>
                  <CardContent className="p-6 bg-gradient-to-br from-white to-pink-50">
                    <div className="flex items-center justify-between mb-3">
                      <Badge className={`${getCategoryColor(project.category)} px-3 py-1 rounded-full font-medium`}>
                        {getCategoryLabel(project.category)}
                      </Badge>
                      <div className="text-pink-400 text-xl">💖</div>
                    </div>
                    <h3 className="text-xl font-semibold text-pink-800 mb-2">
                      {project.title}
                    </h3>
                    <p className="text-pink-600 leading-relaxed">
                      {project.description}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Slideshow Controls */}
        {filteredProjects.length > 1 && (
          <motion.div 
            className="flex justify-center mt-12 gap-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <Button
              onClick={toggleSlideshow}
              className="bg-gradient-to-r from-pink-500 to-rose-500 text-white hover:from-pink-600 hover:to-rose-600 romantic-glow px-6 py-3 rounded-full"
            >
              {isSlideshow ? <Pause className="w-5 h-5 mr-2" /> : <Play className="w-5 h-5 mr-2" />}
              {isSlideshow ? 'Arrêter le Slideshow' : 'Démarrer le Slideshow'}
            </Button>
          </motion.div>
        )}
      </div>

      {/* Fullscreen Modal */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
            onClick={closeFullscreen}
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              className="relative max-w-4xl max-h-[90vh] w-full"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close button */}
              <Button
                onClick={closeFullscreen}
                className="absolute top-4 right-4 z-10 bg-black/50 hover:bg-black/70 text-white rounded-full p-2"
                size="sm"
              >
                <X className="w-6 h-6" />
              </Button>

              {/* Navigation buttons */}
              {filteredProjects.length > 1 && (
                <>
                  <Button
                    onClick={prevImage}
                    className="absolute left-4 top-1/2 transform -translate-y-1/2 z-10 bg-black/50 hover:bg-black/70 text-white rounded-full p-3"
                  >
                    <ChevronLeft className="w-8 h-8" />
                  </Button>
                  <Button
                    onClick={nextImage}
                    className="absolute right-4 top-1/2 transform -translate-y-1/2 z-10 bg-black/50 hover:bg-black/70 text-white rounded-full p-3"
                  >
                    <ChevronRight className="w-8 h-8" />
                  </Button>
                </>
              )}

              {/* Slideshow control */}
              <Button
                onClick={toggleSlideshow}
                className="absolute bottom-4 left-1/2 transform -translate-x-1/2 z-10 bg-black/50 hover:bg-black/70 text-white rounded-full px-4 py-2"
              >
                {isSlideshow ? <Pause className="w-4 h-4 mr-2" /> : <Play className="w-4 h-4 mr-2" />}
                {isSlideshow ? 'Pause' : 'Play'}
              </Button>

              {/* Image */}
              <img
                src={selectedImage.imageUrl}
                alt={selectedImage.title}
                className="w-full h-full object-contain rounded-lg"
                onError={(e) => {
                  console.log('Fullscreen image failed to load:', selectedImage.imageUrl);
                  const target = e.currentTarget as HTMLImageElement;
                  target.style.display = 'none';
                }}
              />

              {/* Image info */}
              <div className="absolute bottom-4 left-4 right-4 bg-black/70 text-white p-4 rounded-lg">
                <h3 className="text-xl font-bold mb-2">{selectedImage.title}</h3>
                <p className="text-gray-200">{selectedImage.description}</p>
                <div className="flex justify-between items-center mt-2">
                  <Badge className="bg-pink-500 text-white">
                    {getCategoryLabel(selectedImage.category)}
                  </Badge>
                  <span className="text-sm text-gray-300">
                    {currentSlideIndex + 1} / {filteredProjects.length}
                  </span>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
