"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const slides = [
  {
    title: "Signature Électronique",
    subtitle: "Sécurité Documentaire",
    description:
      "Développeur spécialisé en signature électronique et VDS (Visible Digital Seal). Je conçois des solutions sécurisées pour la validation et l'authentification de documents conformes aux normes internationales.",
    image:
      "/images/visitbenin.png",
  },
  {
    title: "Architecture SaaS",
    subtitle: "Solutions Modulaires",
    description:
      "Expert en développement d'APIs robustes et de plateformes SaaS modulaires. De la gestion de salle de sport à l'e-commerce multi-shops, je crée des solutions adaptées à vos besoins métier.",
    image:
      "/images/incubator.png",
  },
  {
    title: "Fullstack Development",
    subtitle: "Laravel • Spring Boot • Angular",
    description:
      "Développeur fullstack avec 3+ ans d'expérience en Laravel, Spring Boot, Django, Angular, Next.js et Flutter. Je transforme vos idées en applications performantes et évolutives.",
    image:
      "/images/nusato.png",
  },
];

export function HeroSlider() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  useEffect(() => {
    if (!isAutoPlaying) return;

    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);

    return () => clearInterval(timer);
  }, [isAutoPlaying]);

  const nextSlide = () => {
    setIsAutoPlaying(false);
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setIsAutoPlaying(false);
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <div className="relative h-[100vh] overflow-hidden">
      <AnimatePresence mode="wait">
        <motion.div
          key={currentSlide}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
          className="absolute inset-0"
        >
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url(${slides[currentSlide].image})` }}
          >
            <div className="absolute inset-0 bg-black/50" />
          </div>
          <div className="relative h-full flex items-center">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
              <motion.div
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.2 }}
                className="text-center text-white"
              >
                <h2 className="text-3xl font-semibold text-primary-foreground">
                  {slides[currentSlide].subtitle}
                </h2>
                <h1 className="mt-2 text-5xl font-bold tracking-tight sm:text-6xl">
                  {slides[currentSlide].title}
                </h1>
                <p className="mt-6 text-xl leading-8 text-gray-300 max-w-3xl mx-auto">
                  {slides[currentSlide].description}
                </p>
                
                <motion.div
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.4 }}
                  className="mt-8 flex flex-col sm:flex-row gap-4 justify-center items-center"
                >
                  <Button 
                    size="lg" 
                    className="bg-primary hover:bg-primary/80 text-primary-foreground px-8 py-3 text-lg font-semibold"
                    onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                  >
                    Démarrer un projet
                  </Button>
                  <Button 
                    variant="outline" 
                    size="lg"
                    className="border-white/30 text-white hover:bg-white/10 px-8 py-3 text-lg font-semibold"
                    onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
                  >
                    Voir mes réalisations
                  </Button>
                </motion.div>

                <motion.div
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.6 }}
                  className="mt-12 text-center"
                >
                  <p className="text-gray-300 text-lg mb-2">Disponible pour des missions remote</p>
                  <div className="flex justify-center items-center gap-6 text-sm text-gray-400">
                    <span>📍 Abomey-Calavi, Bénin</span>
                    <span>📧 yowedjamal@gmail.com</span>
                    <span>📱 +229 01 57 51 24 89</span>
                  </div>
                </motion.div>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </AnimatePresence>

      <div className="absolute bottom-8 left-0 right-0 flex justify-center space-x-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => {
              setIsAutoPlaying(false);
              setCurrentSlide(index);
            }}
            className={`h-2 w-2 rounded-full transition-all ${
              index === currentSlide ? "bg-white w-8" : "bg-white/50"
            }`}
          />
        ))}
      </div>

      <Button
        variant="ghost"
        size="icon"
        className="absolute left-4 top-1/2 -translate-y-1/2 text-white hover:bg-white/20"
        onClick={prevSlide}
      >
        <ChevronLeft className="h-8 w-8" />
      </Button>
      <Button
        variant="ghost"
        size="icon"
        className="absolute right-4 top-1/2 -translate-y-1/2 text-white hover:bg-white/20"
        onClick={nextSlide}
      >
        <ChevronRight className="h-8 w-8" />
      </Button>
    </div>
  );
}
