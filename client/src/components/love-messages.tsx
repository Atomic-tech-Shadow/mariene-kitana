import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { fadeInUp, slideUp } from "@/lib/animations";

const loveMessages = [
  {
    title: "Ma Reine de Beauté",
    message: "Mariène, ta beauté n'a pas de limites. Chaque jour, tu m'éblouis par ton élégance naturelle, ton sourire radieux et ta grâce infinie. Tu es la définition même de la perfection.",
    heart: "💖"
  },
  {
    title: "Mon Âme Sœur",
    message: "Depuis que tu es entrée dans ma vie, tout a pris un sens. Tu es bien plus qu'une compagne, tu es mon autre moitié, celle qui complète chaque partie de mon être.",
    heart: "💞"
  },
  {
    title: "Ma Source de Joie",
    message: "Ton rire est la mélodie la plus douce que j'aie jamais entendue. Ta joie de vivre est contagieuse et illumine même mes journées les plus sombres.",
    heart: "💓"
  },
  {
    title: "Mon Inspiration",
    message: "Tu me donnes envie d'être meilleur chaque jour. Ta force, ton intelligence et ta gentillesse sont une source constante d'inspiration pour moi.",
    heart: "💗"
  },
  {
    title: "Mon Havre de Paix",
    message: "Dans tes bras, je trouve le calme et la sérénité. Tu es mon refuge, l'endroit où je me sens en sécurité et aimé inconditionnellement.",
    heart: "💘"
  },
  {
    title: "Ma Plus Belle Rencontre",
    message: "Si je devais recommencer ma vie mille fois, je te chercherais à chaque fois. Tu es la meilleure chose qui me soit jamais arrivée.",
    heart: "💝"
  },
  {
    title: "Mon Amour Éternel",
    message: "Mon cœur bat pour toi aujourd'hui, battra pour toi demain et pour toujours. Rien ni personne ne pourra jamais changer cela.",
    heart: "💟"
  },
  {
    title: "Ma Plus Belle Histoire",
    message: "Avec toi, chaque jour est une nouvelle page d'une histoire magnifique. Je veux continuer à écrire cette histoire avec toi pour l'éternité.",
    heart: "❤️🔥"
  }
];

const loveQuotes = [
  {
    quote: "Aimer, ce n'est pas se regarder l'un l'autre, c'est regarder ensemble dans la même direction.",
    author: "Antoine de Saint-Exupéry"
  },
  {
    quote: "La vie sans amour, c'est comme un arbre sans fleurs ni fruits.",
    author: "Khalil Gibran"
  },
  {
    quote: "Je t'aime non seulement pour ce que tu es, mais pour ce que je suis quand nous sommes ensemble.",
    author: "Elizabeth Barrett Browning"
  },
  {
    quote: "Aimer, c'est trouver sa richesse hors de soi.",
    author: "Alain"
  }
];

export default function LoveMessages() {
  return (
    <section id="messages" className="py-20 bg-gradient-to-br from-pink-50 via-rose-50 to-red-50 relative overflow-hidden">
      {/* Floating hearts background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="floating-hearts absolute top-10 left-10"></div>
        <div className="floating-hearts absolute bottom-20 right-10"></div>
        <div className="floating-hearts absolute top-1/2 left-1/4"></div>
        <div className="floating-hearts absolute bottom-1/3 right-1/4"></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        <motion.div className="text-center mb-16" {...fadeInUp}>
          <h2 className="text-4xl lg:text-5xl font-bold text-primary mb-6">
            💌 Mots d'Amour pour Mariène 💌
          </h2>
          <p className="text-xl text-pink-700 max-w-3xl mx-auto leading-relaxed font-medium">
            800% de mots pour te dire combien tu comptes dans ma vie, ma reine bien-aimée
          </p>
        </motion.div>

        {/* Love Messages Grid */}
        <div className="grid md:grid-cols-2 gap-8 mb-20">
          {loveMessages.map((msg, index) => (
            <motion.div
              key={msg.title}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <Card className="bg-white/90 backdrop-blur-sm border-2 border-pink-200 shadow-lg hover:shadow-xl transition-all duration-300 romantic-glow">
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    <div className="text-4xl animate-pulse">
                      {msg.heart}
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-primary mb-3">
                        {msg.title}
                      </h3>
                      <p className="text-pink-700 leading-relaxed">
                        {msg.message}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Love Quotes Section */}
        <motion.div className="text-center mb-12" {...slideUp}>
          <h3 className="text-3xl lg:text-4xl font-bold text-primary mb-8">
            Citations d'Amour pour Toi
          </h3>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {loveQuotes.map((quote, index) => (
            <motion.div
              key={index}
              className="bg-white/80 backdrop-blur-sm rounded-lg p-6 border-2 border-rose-200 shadow-lg"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <blockquote className="text-lg text-pink-800 italic leading-relaxed mb-4">
                "{quote.quote}"
              </blockquote>
              <cite className="text-primary font-semibold">
                — {quote.author}
              </cite>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}