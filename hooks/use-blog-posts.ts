"use client";

import { BlogPost } from "@/types/blog";

const posts: BlogPost[] = [
  {
    id: "1",
    slug: "securiser-infrastructure-cloud",
    title: "Sécuriser votre Infrastructure Cloud",
    excerpt:
      "Guide complet pour sécuriser votre infrastructure cloud avec les meilleures pratiques.",
    content: `
# Sécuriser votre Infrastructure Cloud

Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.

## Points clés

1. Authentification et autorisation
2. Chiffrement des données
3. Surveillance et logging
4. Gestion des accès

...`,
    image: "https://images.unsplash.com/photo-1633356122544-f134324a6cee",
    date: "2024-01-15",
    readTime: "10 min",
    category: "Cloud Security",
    author: {
      name: "John Doe",
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e",
    },
  },
  {
    id: "2",
    slug: "devops-automatisation-efficacite",
    title: "DevOps : Automatisation et Efficacité",
    excerpt:
      "Comment mettre en place une pipeline DevOps efficace pour votre équipe.",
    content: `
# DevOps : Automatisation et Efficacité

Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.

## Étapes clés

1. Intégration continue
2. Déploiement continu
3. Monitoring
4. Feedback

...`,
    image: "https://images.unsplash.com/photo-1667372393119-3d4c48d07fc9",
    date: "2024-01-10",
    readTime: "8 min",
    category: "DevOps",
    author: {
      name: "Jane Smith",
      avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80",
    },
  },
  {
    id: "3",
    slug: "kubernetes-production",
    title: "Kubernetes en Production",
    excerpt:
      "Bonnes pratiques pour déployer et gérer Kubernetes en production.",
    content: `
# Kubernetes en Production

Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.

## Bonnes pratiques

1. Architecture haute disponibilité
2. Gestion des ressources
3. Sécurité
4. Monitoring

...`,
    image: "https://images.unsplash.com/photo-1667372393913-64daa47b2794",
    date: "2024-01-05",
    readTime: "12 min",
    category: "Kubernetes",
    author: {
      name: "Mike Johnson",
      avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e",
    },
  },
];

export function useBlogPosts() {
  const categories = Array.from(new Set(posts.map((post) => post.category)));

  return {
    posts,
    categories,
    getPostBySlug: (slug: string) => posts.find((post) => post.slug === slug),
  };
}
