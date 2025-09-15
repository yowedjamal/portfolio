import { Metadata } from 'next';
import ContactPage from './contact-page';

export const metadata: Metadata = {
  title: "Contact - Djamal GANI",
  description: "Contactez Djamal GANI pour vos projets DevOps et développement web. Expert en sécurité numérique, cloud computing et solutions digitales innovantes.",
  keywords: ["Contact", "DevOps Consultant", "Développement Web", "Sécurité Numérique", "Consultation", "Services IT", "Cloud Solutions"],
  openGraph: {
    title: "Contact - Djamal GANI",
    description: "Contactez-moi pour vos projets DevOps et développement web",
    url: "https://djamal.site/contact",
  },
};

export default function Page() {
  return <ContactPage />;
}