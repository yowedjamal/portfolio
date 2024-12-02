'use client';

import { motion } from 'framer-motion';
import { Shield, Server, Code } from 'lucide-react';

const features = [
  {
    icon: Shield,
    title: "Sécurité Numérique",
    description: "Protection des données et conformité aux normes de sécurité les plus strictes.",
  },
  {
    icon: Server,
    title: "DevOps Expert",
    description: "Automatisation et optimisation des processus de développement et déploiement.",
  },
  {
    icon: Code,
    title: "Développement Web",
    description: "Création d'applications web modernes, performantes et sécurisées.",
  },
];

export function AnimatedFeatures() {
  return (
    <div className="py-24 bg-background">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="flex flex-col items-center text-center group"
            >
              <motion.div
                whileHover={{ scale: 1.1 }}
                className="rounded-lg bg-primary/10 p-3 transition-colors group-hover:bg-primary/20"
              >
                <feature.icon className="h-6 w-6 text-primary" />
              </motion.div>
              <h3 className="mt-6 text-xl font-semibold">{feature.title}</h3>
              <p className="mt-2 text-foreground/60">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}