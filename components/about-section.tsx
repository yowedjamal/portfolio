'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { Badge } from '@/components/ui/badge';
import { Card } from '@/components/ui/card';

const skills = [
  "Docker", "Kubernetes", "Terraform", "AWS", "Azure",
  "CI/CD", "Python", "JavaScript", "React", "Node.js",
  "Security", "DevOps","Laravel", "Cloud Architecture", "Monitoring", 
  "Angular"
];

const certifications = [
  {
    name: "TOIEC",
    issuer: "Pigier Bénin",
    year: "2023"
  },
];

export function AboutSection() {
  return (
    <section className="py-24 bg-background">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="grid grid-cols-1 gap-12 lg:grid-cols-2"
        >
          <div className="space-y-6">
            <h2 className="text-3xl font-bold">À propos de moi</h2>
            <p className="text-lg text-foreground/80">
              Expert en DevOps et sécurité numérique avec plus de 2 ans d'expérience
              dans la conception et l'implémentation de solutions cloud sécurisées.
              Passionné par l'automatisation et l'optimisation des processus de
              développement.
            </p>
            <div className="space-y-4">
              <h3 className="text-xl font-semibold">Compétences</h3>
              <div className="flex flex-wrap gap-2">
                {skills.map((skill) => (
                  <Badge key={skill} variant="secondary">
                    {skill}
                  </Badge>
                ))}
              </div>
            </div>
          </div>
          
          <div className="relative">
            <Image
              src="https://images.unsplash.com/photo-1667372393119-3d4c48d07fc9"
              alt="Profile"
              width={500}
              height={500}
              className="rounded-lg object-cover"
              priority
            />
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true }}
          className="mt-24"
        >
          <h3 className="text-2xl font-bold mb-8">Certifications</h3>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {certifications.map((cert) => (
              <Card key={cert.name} className="p-6">
                <h4 className="font-semibold">{cert.name}</h4>
                <p className="text-sm text-foreground/60 mt-2">{cert.issuer}</p>
                <p className="text-sm text-foreground/60">{cert.year}</p>
              </Card>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}