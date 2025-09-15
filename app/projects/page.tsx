import { Metadata } from 'next';
import ProjectsPage from './projects-page';

export const metadata: Metadata = {
  title: "Projets - Djamal GANI",
  description: "Découvrez mes projets de développement web et DevOps : plateformes e-commerce, sites vitrines, applications full-stack, solutions cloud et infrastructures sécurisées.",
  keywords: ["Projets", "Portfolio", "Développement Web", "E-commerce", "Full Stack", "React", "Next.js", "DevOps", "Cloud", "Docker", "Kubernetes"],
  openGraph: {
    title: "Projets - Djamal GANI",
    description: "Portfolio de projets web et DevOps innovants",
    url: "https://djamal.site/projects",
  },
};

export default function Page() {
  return <ProjectsPage />;
}