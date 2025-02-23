"use client"

import { motion, useScroll, useTransform } from 'framer-motion';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Calendar, Clock, Mail, Phone, MapPin, ArrowRight } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

const posts = [
  {
    title: "L'Importance du Développement Web 🌐💻",
    excerpt: "Le développement web n'est pas simplement une compétence technique, c'est une force motrice...",
    image: "https://miro.medium.com/v2/resize:fit:720/format:webp/1*B3RSF7gIAaWLy2O_uk0FjA.jpeg",
    date: "2024-01-15",
    readTime: "10 min",
    category: "Dev web",
    link: "https://medium.com/@ganidjamal04/limportance-du-développement-web-96816ef41fad"
  },
  {
    title: "Introduction au Développement Web",
    excerpt: "Le développement web 🌐 est bien plus qu'une simple création de pages web. C'est l'art de transformer des idées ...",
    image: "https://miro.medium.com/v2/resize:fit:720/format:webp/0*hnJ2hNRnpS87Sr_w",
    date: "2023-11-24",
    readTime: "8 min",
    category: "Dev Web",
    link: "https://medium.com/@ganidjamal04/introduction-au-développement-web-b97887806b89"
  }
];

const BlogPost = ({ post, index }:any) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.2 }}
      className="relative group"
    >
      <Link href={post.link} className="block">
        <div className="relative overflow-hidden rounded-lg border-2 border-dashed border-primary/20 p-1">
          <div className="absolute inset-0 bg-gradient-to-r from-primary/5 to-secondary/5 transform group-hover:scale-105 transition-transform duration-500" />
          <Card className="overflow-hidden bg-background/50 backdrop-blur-sm">
            <div className="relative">
              <div className="absolute top-0 right-0 z-10 bg-background/80 backdrop-blur-sm px-3 py-1 m-4 rounded-full">
                <Badge variant="outline" className="border-primary/50">
                  {post.category}
                </Badge>
              </div>
              <div className="relative h-48 overflow-hidden">
                <Image
                  src={post.image}
                  alt={post.title}
                  fill
                  className="object-cover transform group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent" />
              </div>
            </div>
            <div className="p-6 relative">
              <div className="space-y-4">
                <h3 className="text-xl font-bold leading-tight group-hover:text-primary transition-colors">
                  {post.title}
                </h3>
                <p className="text-muted-foreground line-clamp-2">{post.excerpt}</p>
                <div className="flex items-center justify-between text-sm text-muted-foreground">
                  <div className="flex items-center gap-4">
                    <span className="flex items-center">
                      <Calendar className="mr-1 h-4 w-4" />
                      {new Date(post.date).toLocaleDateString('fr-FR')}
                    </span>
                    <span className="flex items-center">
                      <Clock className="mr-1 h-4 w-4" />
                      {post.readTime}
                    </span>
                  </div>
                  <ArrowRight className="h-5 w-5 transform group-hover:translate-x-2 transition-transform" />
                </div>
              </div>
            </div>
          </Card>
        </div>
      </Link>
    </motion.div>
  );
};

export function BlogSection() {
  return (
    <div className="relative">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-40">
        <div className="absolute inset-0" 
          style={{
            backgroundImage: `repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(var(--primary) / 0.1) 2px, rgba(var(--primary) / 0.1) 4px)`,
            backgroundSize: '100% 4px'
          }}
        />
      </div>

      {/* Blog Section */}
      <section className="relative py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold">Blog</h2>
            <p className="mt-4 text-lg text-muted-foreground">
              Découvrez mes derniers articles sur la sécurité et le DevOps.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
            {posts.map((post, index) => (
              <BlogPost key={post.title} post={post} index={index} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}