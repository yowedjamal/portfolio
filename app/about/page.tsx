import { Metadata } from 'next';
import AboutPage from './about-page';

export const metadata: Metadata = {
  title: "À propos - Djamal GANI",
  description: "Découvrez le parcours de Djamal GANI, expert DevOps et sécurité numérique. Spécialisé en Cloud Computing, Kubernetes, Docker et cybersécurité avec plus de 5 ans d'expérience.",
  keywords: ["À propos", "DevOps Expert", "Sécurité numérique", "Cloud Computing", "Kubernetes", "Docker", "Cybersécurité", "Développement Full Stack"],
  openGraph: {
    title: "À propos - Djamal GANI",
    description: "Expert DevOps et sécurité numérique avec plus de 5 ans d'expérience",
    url: "https://djamal.site/about",
  },
};

export default function Page() {
  return <AboutPage />;
}