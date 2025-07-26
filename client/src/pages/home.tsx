import { motion } from "framer-motion";
import Navigation from "@/components/navigation";
import HeroSection from "@/components/hero-section";
import ProjectsGallery from "@/components/projects-gallery";
import AboutSection from "@/components/about-section";
import ContactSection from "@/components/contact-section";
import Footer from "@/components/footer";
import MagicalBackground from "@/components/magical-background";
import LoveSurpriseButton from "@/components/love-surprise-button";

export default function Home() {
  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="min-h-screen bg-background text-foreground relative"
    >
      <MagicalBackground />
      <div className="relative z-10">
        <Navigation />
        <HeroSection />
        <ProjectsGallery />
        <AboutSection />
        <ContactSection />
        <Footer />
      </div>
      <LoveSurpriseButton />
    </motion.div>
  );
}
