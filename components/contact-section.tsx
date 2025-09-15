"use client";

import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Mail, Phone, MapPin, CheckCircle } from "lucide-react";
import React, { useState } from 'react';

// Déclaration pour Google Analytics
declare global {
  interface Window {
    gtag?: (...args: any[]) => void;
  }
}

interface FormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

interface SubmitStatus {
  success: boolean;
  message: string;
}

const ContactForm = () => {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<SubmitStatus>({ success: false, message: '' });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [cooldown, setCooldown] = useState(0);

  const validateForm = () => {
    const newErrors: Record<string, string> = {};
    
    if (!formData.name.trim()) newErrors.name = 'Le nom est requis';
    if (!formData.email.trim()) newErrors.email = 'L\'email est requis';
    if (!/\S+@\S+\.\S+/.test(formData.email)) newErrors.email = 'Email invalide';
    if (!formData.subject.trim()) newErrors.subject = 'Le sujet est requis';
    if (!formData.message.trim()) newErrors.message = 'Le message est requis';
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }

    if (cooldown > 0) {
      setSubmitStatus({
        success: false,
        message: `Veuillez attendre ${cooldown}s avant de renvoyer un message`
      });
      return;
    }

    setIsSubmitting(true);
    setSubmitStatus({ success: false, message: '' });

    try {
      const response = await fetch('/api/send-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || `HTTP error! status: ${response.status}`);
      }

      const data = await response.json();

      setSubmitStatus({
        success: true,
        message: 'Message envoyé avec succès !'
      });
      setFormData({ name: '', email: '', subject: '', message: '' });
      
      // Set cooldown
      setCooldown(30);
      const timer = setInterval(() => {
        setCooldown(prev => {
          if (prev <= 1) {
            clearInterval(timer);
            return 0;
          }
          return prev - 1;
        });
      }, 1000);

      // Analytics tracking
      if (typeof window !== 'undefined' && window.gtag) {
        window.gtag('event', 'contact_form_submit', {
          event_category: 'engagement',
          event_label: 'contact_form'
        });
      }
    } catch (error) {
      console.error('Contact form error:', error);
      setSubmitStatus({
        success: false,
        message: error instanceof Error ? error.message : 'Une erreur inattendue est survenue'
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Card className="w-full p-6">
      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Messages de statut */}
        {submitStatus.success && (
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="p-4 bg-green-50 border border-green-200 rounded-lg"
          >
            <div className="flex items-center space-x-2">
              <CheckCircle className="h-5 w-5 text-green-600" />
              <span className="text-green-800">{submitStatus.message}</span>
            </div>
          </motion.div>
        )}

        {submitStatus.message && !submitStatus.success && (
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="p-4 bg-red-50 border border-red-200 rounded-lg"
          >
            <span className="text-red-800">{submitStatus.message}</span>
          </motion.div>
        )}

        <div className="space-y-2">
          <Input
            name="name"
            placeholder="Votre nom"
            value={formData.name}
            onChange={handleChange}
            required
            aria-label="Nom complet"
            aria-describedby={errors.name ? "name-error" : undefined}
            className={errors.name ? "border-red-500" : ""}
          />
          {errors.name && (
            <span id="name-error" className="text-red-500 text-sm" role="alert">
              {errors.name}
            </span>
          )}
        </div>

        <div className="space-y-2">
          <Input
            name="email"
            type="email"
            placeholder="Votre email"
            value={formData.email}
            onChange={handleChange}
            required
            aria-label="Adresse email"
            aria-describedby={errors.email ? "email-error" : undefined}
            className={errors.email ? "border-red-500" : ""}
          />
          {errors.email && (
            <span id="email-error" className="text-red-500 text-sm" role="alert">
              {errors.email}
            </span>
          )}
        </div>

        <div className="space-y-2">
          <Input
            name="subject"
            placeholder="Sujet"
            value={formData.subject}
            onChange={handleChange}
            required
            aria-label="Sujet du message"
            aria-describedby={errors.subject ? "subject-error" : undefined}
            className={errors.subject ? "border-red-500" : ""}
          />
          {errors.subject && (
            <span id="subject-error" className="text-red-500 text-sm" role="alert">
              {errors.subject}
            </span>
          )}
        </div>

        <div className="space-y-2">
          <Textarea
            name="message"
            placeholder="Votre message"
            value={formData.message}
            onChange={handleChange}
            rows={6}
            required
            aria-label="Contenu du message"
            aria-describedby={errors.message ? "message-error" : undefined}
            className={errors.message ? "border-red-500 min-h-[120px]" : "min-h-[120px]"}
          />
          {errors.message && (
            <span id="message-error" className="text-red-500 text-sm" role="alert">
              {errors.message}
            </span>
          )}
        </div>

        <Button
          type="submit"
          className="w-full"
          disabled={isSubmitting || cooldown > 0}
          aria-label={isSubmitting ? "Envoi en cours..." : cooldown > 0 ? `Attendre ${cooldown}s` : "Envoyer le message"}
        >
          {isSubmitting 
            ? 'Envoi en cours...' 
            : cooldown > 0 
              ? `Attendre ${cooldown}s` 
              : 'Envoyer le message'
          }
        </Button>
      </form>
    </Card>
  );
};

export default ContactForm;

const ContactInfo = () => {
  return (
    <motion.div
      initial={{ opacity: 0}}
      whileInView={{ opacity: 1}}
      transition={{ duration: 0.6 }}
      className="space-y-8"
    >
      {[
        { icon: Mail, title: "Email", value: "yowedjamal@gmail.com" },
        { icon: Phone, title: "Téléphone", value: "+229 01 57 51 24 89" },
        { icon: MapPin, title: "Adresse", value: "Cotonou, Bénin" },
      ].map((item, index) => (
        <motion.div
          key={item.title}
          initial={{ opacity: 0}}
          whileInView={{ opacity: 1}}
          transition={{ duration: 0.6, delay: index * 0.1 }}
          className="group"
        >
          <div className="relative p-6 rounded-lg border-2 border-dashed border-primary/20 overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-primary/5 to-secondary/5 transform group-hover:scale-105 transition-transform duration-500" />
            <div className="relative flex items-start space-x-4">
              <div className="p-2 rounded-full bg-primary/10 group-hover:bg-primary/20 transition-colors">
                <item.icon className="h-6 w-6 text-primary" />
              </div>
              <div>
                <h3 className="font-semibold text-lg">{item.title}</h3>
                <p className="text-muted-foreground mt-1">{item.value}</p>
              </div>
            </div>
          </div>
        </motion.div>
      ))}
    </motion.div>
  );
};

export function ContactSection() {
  return (
    <div id="contact" className="relative">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-40">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(var(--primary) / 0.1) 2px, rgba(var(--primary) / 0.1) 4px)`,
            backgroundSize: "100% 4px",
          }}
        />
      </div>

      {/* Contact Section */}
      <section className="relative py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h1 className="text-4xl font-bold">Contactez-moi</h1>
            <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
              Discutons de vos projets DevOps, développement web et sécurité numérique. 
              Je suis disponible pour des collaborations, missions freelance ou consultations techniques.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 xl:gap-12">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="order-2 lg:order-1"
            >
              <ContactForm />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="order-1 lg:order-2"
            >
              <ContactInfo />
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}
