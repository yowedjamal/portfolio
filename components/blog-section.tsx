'use client';

import { motion } from 'framer-motion';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Calendar, Clock } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

const posts = [
  {
    title: "L’Importance du Développement Web 🌐💻",
    excerpt: "Le développement web n’est pas simplement une compétence technique, c’est une force motrice...",
    image: "https://miro.medium.com/v2/resize:fit:720/format:webp/1*B3RSF7gIAaWLy2O_uk0FjA.jpeg",
    date: "2024-01-15",
    readTime: "10 min",
    category: "Dev web",
    link: "https://medium.com/@ganidjamal04/limportance-du-développement-web-96816ef41fad"
  },
  {
    title: "Introduction au Développement Web",
    excerpt: "Le développement web 🌐 est bien plus qu’une simple création de pages web. C’est l’art de transformer des idées ...",
    image: "https://miro.medium.com/v2/resize:fit:720/format:webp/0*hnJ2hNRnpS87Sr_w",
    date: "2023-11-24",
    readTime: "8 min",
    category: "Dev Web",
    link: "https://medium.com/@ganidjamal04/introduction-au-développement-web-b97887806b89"
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
              <Link href={post.link} className="group">
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