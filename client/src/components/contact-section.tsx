import { useState } from "react";
import { motion } from "framer-motion";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { Mail, Phone, MapPin, Send, Instagram, Linkedin } from "lucide-react";
import { SiBehance, SiDribbble } from "react-icons/si";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";
import { apiRequest } from "@/lib/queryClient";
import { fadeInUp, slideUp } from "@/lib/animations";
import { portfolioData } from "@shared/schema";
import type { InsertContact } from "@shared/schema";

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });

  const { toast } = useToast();
  const queryClient = useQueryClient();

  const contactMutation = useMutation({
    mutationFn: async (data: InsertContact) => {
      return await apiRequest("POST", "/api/contact", data);
    },
    onSuccess: () => {
      toast({
        title: "Message envoyé !",
        description: "Merci pour votre message. Je vous répondrai bientôt.",
      });
      setFormData({ name: "", email: "", subject: "", message: "" });
      queryClient.invalidateQueries({ queryKey: ["/api/contacts"] });
    },
    onError: () => {
      toast({
        title: "Erreur",
        description: "Une erreur s'est produite lors de l'envoi du message.",
        variant: "destructive",
      });
    }
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    contactMutation.mutate(formData);
  };

  const contactInfo = [
    {
      icon: Mail,
      title: "Email",
      value: portfolioData.contact.email,
      href: `mailto:${portfolioData.contact.email}`
    },
    {
      icon: Phone,
      title: "Téléphone",
      value: portfolioData.contact.phone,
      href: `tel:${portfolioData.contact.phone}`,
      display: "Appeler Mariène"
    },
    {
      icon: MapPin,
      title: "Localisation",
      value: portfolioData.contact.location
    }
  ];

  const socialLinks = [
    { icon: Instagram, href: "#", label: "Instagram" },
    { icon: Linkedin, href: "#", label: "LinkedIn" },
    { icon: SiBehance, href: "#", label: "Behance" },
    { icon: SiDribbble, href: "#", label: "Dribbble" }
  ];

  return (
    <section id="contact" className="py-20 bg-gradient-to-br from-white to-pink-50 relative overflow-hidden">
      {/* Floating hearts */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="floating-hearts absolute top-20 left-10"></div>
        <div className="floating-hearts absolute bottom-40 right-16"></div>
        <div className="floating-hearts absolute top-60 left-1/2"></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        <motion.div className="text-center mb-16" {...fadeInUp}>
          <h2 className="text-4xl lg:text-5xl font-bold text-primary mb-6">
            💌 Écrire à Ma Reine 💌
          </h2>
          <p className="text-xl text-pink-700 max-w-3xl mx-auto leading-relaxed font-medium">
            Chaque message que tu reçois est un petit cadeau d'amour. N'hésitez pas à lui écrire, 
            elle sera toujours ravie de lire vos mots doux et vos compliments. ❤️
          </p>
        </motion.div>
        
        <div className="grid lg:grid-cols-2 gap-16">
          {/* Contact Info */}
          <motion.div {...slideUp}>
            <div className="space-y-8">
              {contactInfo.map((info, index) => (
                <motion.div 
                  key={info.title}
                  className="flex items-start space-x-4"
                  initial={{ opacity: 0, x: -30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                >
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <info.icon className="text-primary text-xl" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-primary mb-2">{info.title}</h3>
                    {info.href ? (
                      <a 
                        href={info.href}
                        className="text-neutral hover:text-primary transition-colors duration-200 font-medium"
                      >
                        {info.value}
                        {info.title === "Téléphone" && (
                          <span className="block text-sm text-pink-600 mt-1">
                            📞 Appeler ma reine d'amour
                          </span>
                        )}
                      </a>
                    ) : (
                      <p className="text-neutral font-medium">{info.value}</p>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>
            
            {/* Social Links */}
            <motion.div 
              className="mt-12"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <h3 className="text-xl font-semibold text-primary mb-6">Suivez-moi</h3>
              <div className="flex space-x-4">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 bg-primary text-white rounded-lg flex items-center justify-center hover:bg-primary/90 transition-colors duration-200"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.3, delay: 0.5 + index * 0.1 }}
                  >
                    <social.icon className="text-xl" />
                  </motion.a>
                ))}
              </div>
            </motion.div>
          </motion.div>
          
          {/* Contact Form */}
          <motion.div {...fadeInUp}>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <Label htmlFor="name" className="text-sm font-medium text-neutral mb-2">
                    Nom
                  </Label>
                  <Input
                    id="name"
                    name="name"
                    type="text"
                    value={formData.name}
                    onChange={handleInputChange}
                    placeholder="Votre nom"
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-200"
                  />
                </div>
                <div>
                  <Label htmlFor="email" className="text-sm font-medium text-neutral mb-2">
                    Email
                  </Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="votre@email.com"
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-200"
                  />
                </div>
              </div>
              
              <div>
                <Label htmlFor="subject" className="text-sm font-medium text-neutral mb-2">
                  Sujet
                </Label>
                <Input
                  id="subject"
                  name="subject"
                  type="text"
                  value={formData.subject}
                  onChange={handleInputChange}
                  placeholder="Sujet de votre message"
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-200"
                />
              </div>
              
              <div>
                <Label htmlFor="message" className="text-sm font-medium text-neutral mb-2">
                  Message
                </Label>
                <Textarea
                  id="message"
                  name="message"
                  rows={6}
                  value={formData.message}
                  onChange={handleInputChange}
                  placeholder="Décrivez votre projet ou votre demande..."
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-200 resize-none"
                />
              </div>
              
              <Button
                type="submit"
                disabled={contactMutation.isPending}
                className="w-full bg-gradient-to-r from-pink-500 to-rose-500 hover:from-pink-600 hover:to-rose-600 text-white py-4 px-8 rounded-lg font-medium transition-all duration-200 shadow-lg hover:shadow-xl romantic-glow"
                size="lg"
              >
                {contactMutation.isPending ? "💕 Envoi en cours..." : "💌 Envoyer mon message d'amour"}
                <Send className="ml-2 h-5 w-5" />
              </Button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
