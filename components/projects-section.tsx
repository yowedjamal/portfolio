'use client';

import { motion } from 'framer-motion';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Github, ExternalLink } from 'lucide-react';
import Image from 'next/image';

const projects = [
  {
    title: "Cloud Security Platform",
    description: "Plateforme de sécurité cloud avec monitoring en temps réel et détection des menaces.",
    image: "https://images.unsplash.com/photo-1633356122102-3fe601e05bd2",
    tags: ["AWS", "Python", "React", "Docker"],
    github: "#",
    demo: "#"
  },
  {
    title: "DevOps Pipeline Automation",
    description: "Solution d'automatisation CI/CD pour le déploiement continu d'applications.",
    image: "https://images.unsplash.com/photo-1667372393119-3d4c48d07fc9",
    tags: ["Jenkins", "Kubernetes", "Terraform"],
    github: "#",
    demo: "#"
  },
  {
    title: "Infrastructure as Code Framework",
    description: "Framework pour la gestion d'infrastructure cloud en tant que code.",
    image: "https://images.unsplash.com/photo-1667372393913-64daa47b2794",
    tags: ["Terraform", "AWS", "Python"],
    github: "#",
    demo: "#"
  }
];

export function ProjectsSection() {
  return (
    <section className="py-24 bg-muted">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold">Projets Réalisés</h2>
          <p className="mt-4 text-lg text-foreground/60">
            Découvrez mes dernières réalisations en matière de DevOps et sécurité.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="overflow-hidden">
                <div className="relative h-48">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold">{project.title}</h3>
                  <p className="mt-2 text-foreground/60">{project.description}</p>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <Badge key={tag} variant="secondary">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                  <div className="mt-6 flex gap-4">
                    <Button variant="outline" size="sm" asChild>
                      <a href={project.github} target="_blank" rel="noopener noreferrer">
                        <Github className="mr-2 h-4 w-4" />
                        Code
                      </a>
                    </Button>
                    <Button variant="outline" size="sm" asChild>
                      <a href={project.demo} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="mr-2 h-4 w-4" />
                        Demo
                      </a>
                    </Button>
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}