import { motion } from "framer-motion";
import { Play, Heart } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { fadeInUp } from "@/lib/animations";

const videos = [
  {
    title: "Ton charme en mouvement",
    description: "Ma reine Mariène dans toute sa beauté naturelle. Chaque mouvement est pure élégance.",
    thumbnail: "/00.jpg",
    videoUrl: "/0.mp4",
    heart: "💖"
  },
  {
    title: "Joie contagieuse",
    description: "Le rire de ma bien-aimée qui illumine mes journées. Sa joie de vivre est contagieuse.",
    thumbnail: "/01.jpg", 
    videoUrl: "/2.mp4",
    heart: "💫"
  },
  {
    title: "Grâce en mouvement",
    description: "Mariène dansant comme un ange. Sa grâce naturelle me coupe le souffle à chaque fois.",
    thumbnail: "/02.jpg",
    videoUrl: "/7.mp4", 
    heart: "✨"
  }
];

export default function VideoGallery() {
  return (
    <section id="videos" className="py-20 bg-gradient-to-br from-purple-50 via-pink-50 to-rose-50 relative overflow-hidden">
      {/* Magical background elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="romantic-sparkle absolute top-16 left-12"></div>
        <div className="romantic-sparkle absolute bottom-20 right-16"></div>
        <div className="romantic-sparkle absolute top-1/2 left-1/4"></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        <motion.div className="text-center mb-16" {...fadeInUp}>
          <h2 className="text-4xl lg:text-5xl font-bold text-primary mb-6">
            🎬 Moments Magiques en Vidéo 🎬
          </h2>
          <p className="text-xl text-pink-700 max-w-3xl mx-auto leading-relaxed font-medium">
            Découvre Mariène en mouvement - chaque vidéo capture sa beauté et sa joie de vivre naturelle
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {videos.map((video, index) => (
            <motion.div
              key={video.title}
              initial={{ opacity: 0, y: 50, rotateY: 45 }}
              animate={{ opacity: 1, y: 0, rotateY: 0 }}
              transition={{ 
                duration: 0.8, 
                delay: index * 0.3,
                type: "spring",
                bounce: 0.3
              }}
              whileHover={{ 
                y: -10,
                scale: 1.02,
                transition: { duration: 0.3 }
              }}
            >
              <Card className="bg-white/90 backdrop-blur-sm border-2 border-pink-200 shadow-lg hover:shadow-2xl transition-all duration-300 group overflow-hidden romantic-glow">
                <div className="relative">
                  <video 
                    className="w-full h-64 object-cover rounded-t-lg"
                    poster={video.thumbnail}
                    controls
                    preload="metadata"
                    controlsList="nodownload"
                    style={{
                      filter: 'brightness(1.1) contrast(1.1) saturate(1.2)'
                    }}
                  >
                    <source src={video.videoUrl} type="video/mp4" />
                    Votre navigateur ne supporte pas la lecture vidéo.
                  </video>
                  
                  {/* Play overlay */}
                  <div className="absolute inset-0 bg-black/20 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="bg-white/90 rounded-full p-4 shadow-lg">
                      <Play className="text-primary w-8 h-8" fill="currentColor" />
                    </div>
                  </div>

                  {/* Heart animation */}
                  <div className="absolute top-4 right-4 text-2xl animate-pulse">
                    {video.heart}
                  </div>
                </div>

                <CardContent className="p-6">
                  <div className="flex items-start space-x-3">
                    <Heart className="text-primary w-6 h-6 mt-1 animate-heartbeat" fill="currentColor" />
                    <div>
                      <h3 className="text-xl font-bold text-primary mb-2">
                        {video.title}
                      </h3>
                      <p className="text-pink-700 leading-relaxed text-sm">
                        {video.description}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Call to action */}
        <motion.div 
          className="text-center mt-16"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
        >
          <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 border-2 border-rose-200 shadow-lg max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-primary mb-4">
              💕 Pour Ma Reine Bien-Aimée 💕
            </h3>
            <p className="text-pink-800 leading-relaxed">
              Chaque vidéo raconte une partie de notre histoire d'amour. 
              Mariène, tu es la star de ma vie, la réalisatrice de mon bonheur 
              et la productrice de tous mes rêves qui deviennent réalité.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}