'use client';

import { motion } from 'framer-motion';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Calendar, Clock } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

const posts = [
  {
    title: "Sécuriser votre Infrastructure Cloud",
    excerpt: "Guide complet pour sécuriser votre infrastructure cloud avec les meilleures pratiques.",
    image: "https://images.unsplash.com/photo-1633356122544-f134324a6cee",
    date: "2024-01-15",
    readTime: "10 min",
    category: "Cloud Security"
  },
  {
    title: "DevOps : Automatisation et Efficacité",
    excerpt: "Comment mettre en place une pipeline DevOps efficace pour votre équipe.",
    image: "https://images.unsplash.com/photo-1667372393119-3d4c48d07fc9",
    date: "2024-01-10",
    readTime: "8 min",
    category: "DevOps"
  },
  {
    title: "Kubernetes en Production",
    excerpt: "Bonnes pratiques pour déployer et gérer Kubernetes en production.",
    image: "https://images.unsplash.com/photo-1667372393913-64daa47b2794",
    date: "2024-01-05",
    readTime: "12 min",
    category: "Kubernetes"
  }
];

export function BlogSection() {
  return (
    <section className="py-24 bg-background">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold">Blog</h2>
          <p className="mt-4 text-lg text-foreground/60">
            Découvrez mes derniers articles sur la sécurité et le DevOps.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {posts.map((post, index) => (
            <motion.div
              key={post.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Link href="#" className="group">
                <Card className="overflow-hidden">
                  <div className="relative h-48">
                    <Image
                      src={post.image}
                      alt={post.title}
                      fill
                      className="object-cover transition-transform group-hover:scale-105"
                    />
                  </div>
                  <div className="p-6">
                    <Badge className="mb-4">{post.category}</Badge>
                    <h3 className="text-xl font-semibold group-hover:text-primary transition-colors">
                      {post.title}
                    </h3>
                    <p className="mt-2 text-foreground/60">{post.excerpt}</p>
                    <div className="mt-4 flex items-center gap-4 text-sm text-foreground/60">
                      <div className="flex items-center">
                        <Calendar className="mr-1 h-4 w-4" />
                        {new Date(post.date).toLocaleDateString('fr-FR')}
                      </div>
                      <div className="flex items-center">
                        <Clock className="mr-1 h-4 w-4" />
                        {post.readTime}
                      </div>
                    </div>
                  </div>
                </Card>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}