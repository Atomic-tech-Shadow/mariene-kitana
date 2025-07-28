import { motion } from "framer-motion";
import Navigation from "@/components/navigation";
import HeroSection from "@/components/hero-section";
import ProjectsGallery from "@/components/projects-gallery";
import VideoGallery from "@/components/video-gallery";
import AboutSection from "@/components/about-section";
import LoveMessages from "@/components/love-messages";
import ContactSection from "@/components/contact-section";
import Footer from "@/components/footer";
import MagicalBackground from "@/components/magical-background";
import LoveSurpriseButton from "@/components/love-surprise-button";
import MobileOptimization from "@/components/mobile-optimization";
import BackgroundMusic from "@/components/background-music";

export default function Home() {
  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="min-h-screen bg-background text-foreground relative"
      style={{ minHeight: 'calc(var(--vh, 1vh) * 100)' }}
    >
      <MobileOptimization />
      <MagicalBackground />
      <div className="relative z-10">
        <Navigation />
        <HeroSection />
        <ProjectsGallery />
        <VideoGallery />
        <AboutSection />
        <LoveMessages />
        <ContactSection />
        <Footer />
      </div>
      <LoveSurpriseButton />
      <BackgroundMusic />
    </motion.div>
  );
}
