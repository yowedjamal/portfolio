// import './globals.css';
// import './animation.css';
// import type { Metadata } from 'next';
// import { Inter } from 'next/font/google';
// import { ThemeProvider } from '@/components/theme-provider';
// import { Navbar } from '@/components/navbar';
// import { Footer } from '@/components/footer';

// const inter = Inter({ subsets: ['latin'] });

// export const metadata: Metadata = {
//   title: 'Mon Numérique en Confiance',
//   description: 'Sécuriser vos données. Optimiser vos projets.',
// };

// export default function RootLayout({
//   children,
// }: {
//   children: React.ReactNode;
// }) {
//   return (
//     <html lang="fr" suppressHydrationWarning>
//       <body className={inter.className}>
//         <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
//           <div className="flex min-h-screen flex-col">
//             <Navbar />
//             <main className="flex-1">{children}</main>
//             <Footer />
//           </div>
//         </ThemeProvider>
//       </body>
//     </html>
//   );
// }

import type React from "react"
import "./globals.css"
import "./animation.css"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import { ThemeProvider } from "@/components/theme-provider"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  metadataBase: new URL("https://djamal.site"), // À remplacer par votre domaine réel
  title: {
    default: "Djamal GANI | Home",
    template: "%s | Djamal GANI",
  },
  description:
    "Portfolio de Djamal GANI - Expert en développement et sécurité numérique. Découvrez mes projets et compétences en DevOps, sécurité et développement web.",
  keywords: [
    "Djamal GANI",
    "Portfolio",
    "DevOps",
    "Sécurité",
    "Développement Web",
    "Full Stack",
    "Cloud Computing",
    "Cybersécurité",
    "Projets Web",
    "Expert Numérique",
  ],
  authors: [{ name: "Djamal GANI" }],
  creator: "Djamal GANI",
  publisher: "Djamal GANI",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: "website",
    locale: "fr_FR",
    url: "https://djamal.site",
    title: "Djamal GANI | Portfolio",
    description: "Expert en développement et sécurité numérique",
    siteName: "Djamal GANI",
    images: [
      {
        url: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?auto=format&fit=crop&q=80",
        width: 1200,
        height: 630,
        alt: "Djamal GANI - Portfolio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Djamal GANI | Portfolio",
    description: "Expert en développement et sécurité numérique",
    images: ["https://images.unsplash.com/photo-1633356122544-f134324a6cee?auto=format&fit=crop&q=80"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
}

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Djamal GANI",
  url: "https://djamal.site",
  image: "/images/profile.jpg",
  description: "Expert en développement et sécurité numérique",
  jobTitle: "Expert DevOps & Sécurité",
  knowsAbout: [
    "DevOps",
    "Sécurité Informatique",
    "Développement Web",
    "Cloud Computing",
    "CI/CD",
    "Docker",
    "Kubernetes",
  ],
  mainEntityOfPage: {
    "@type": "WebSite",
    "@id": "https://djamal.site",
    name: "Portfolio de Djamal GANI",
    url: "https://djamal.site",
  },
  sameAs: ["https://linkedin.com/in/djamal-yowe-gani", "https://github.com/yowedjamal"],
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="fr" suppressHydrationWarning className="scroll-smooth">
      <head>
        <link rel="canonical" href="https://djamal.site" />
        <link rel="alternate" href="https://djamal.site" hrefLang="fr-FR" />
        <link rel="manifest" href="/manifest.json" />
        <meta name="theme-color" content="#ffffff" />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      </head>
      <body className={`${inter.className} antialiased`}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <div className="flex min-h-screen flex-col">
            <Navbar />
            <main className="flex-1">{children}</main>
            <Footer />
          </div>
        </ThemeProvider>
      </body>
    </html>
  )
}