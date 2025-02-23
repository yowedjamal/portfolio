"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Github, ExternalLink, Maximize2, MinusCircle } from "lucide-react"
import Image from "next/image"
import { cn } from "@/lib/utils"

const PLACEHOLDER_IMAGES = {
  visitbenin: "/images/visitbenin.png",
  agency: "/images/aas.png",
  frozen: "/images/congelato.png",
  incubator: "/images/incubator.png",
}

const projects = [
  {
    title: "VisitBenin",
    description:
      "Plateforme de référencement des sites touristiques au bénin avec intégration d'un chatbot pour une expérience utilisateur interactive et personnalisée.",
    image: PLACEHOLDER_IMAGES.visitbenin,
    tags: ["Angular", "Cohere", "Laravel"],
    github: "#",
    demo: "https://visitbenin.djamal.site",
  },
  {
    title: "MultiServices Agency",
    description:
      "Site vitrine moderne pour une agence multiservices spécialisée dans l'immobilier, la formation et la communication. Présentation détaillée des services et informations clés de l'agence.",
    image: PLACEHOLDER_IMAGES.agency, // Image à placer dans public/images/
    tags: ["Next.js", "Tailwind CSS", "TypeScript"],
    github: "#",
    demo: "https://aas.djamal.site",
  },
  {
    title: "FrozenDelights",
    description:
      "Site vitrine élégant pour une boutique de produits surgelés, mettant en valeur les produits et l'histoire de l'entreprise à travers une interface utilisateur intuitive.",
    image: PLACEHOLDER_IMAGES.frozen, // Image à placer dans public/images/
    tags: ["React", "Styled Components", "Node.js"],
    github: "#",
    demo: "https://congelato.djamal.site",
  },
  {
    title: "TechIncubator",
    description:
      "Plateforme de présentation d'un incubateur technologique d'une école, présentant les programmes, les startups incubées et les opportunités de mentorat.",
    image: PLACEHOLDER_IMAGES.incubator, // Image à placer dans public/images/
    tags: ["Next.js", "Framer Motion", "Prisma"],
    github: "#",
    demo: "https://incubator.djamal.site",
  },
]

const HologramProject = ({ project, index }: any) => {
  const [isExpanded, setIsExpanded] = useState(false)
  const [isHovered, setIsHovered] = useState(false)

  return (
    <motion.div
      layout
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{
        duration: 0.5,
        delay: index * 0.2,
        layout: { duration: 0.3 },
      }}
      className={cn("relative", isExpanded && "col-span-3 row-span-2")}
    >
      <div
        className={cn(
          "relative rounded-xl overflow-hidden",
          "bg-gradient-to-r from-nav-gradient-from/30 to-nav-gradient-to/30 dark:from-dark-nav-gradient-from/30 dark:to-dark-nav-gradient-to/30",
          "backdrop-blur-sm border border-primary/20",
          "transition-all duration-500",
          isExpanded ? "h-[600px]" : "h-[400px]",
        )}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {/* Hologram Effect Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-secondary/5 z-10" />
        <div
          className="absolute inset-0 opacity-30"
          style={{
            backgroundImage: `repeating-linear-gradient(0deg, 
              transparent, 
              transparent 2px, 
              hsl(var(--primary)/.05) 2px, 
              hsl(var(--primary)/.05) 4px)`,
          }}
        />

        {/* Project Image with Effect */}
        <motion.div
          className="absolute inset-0 z-0"
          animate={{
            filter: isHovered ? ["brightness(1)", "brightness(1.2)", "brightness(1)"] : "brightness(1)",
          }}
          transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
        >
          <Image
            src={project.image || "/placeholder.svg"}
            alt={project.title}
            fill
            className={cn("object-cover mix-blend-luminosity", "opacity-40 dark:opacity-30")}
          />
        </motion.div>

        {/* Content Container */}
        <div className="relative z-20 p-6 h-full flex flex-col justify-between">
          <div className="backdrop-blur-md bg-card/80 rounded-lg p-4">
            <motion.div
              className="flex justify-between items-start"
              animate={{ y: isHovered ? 0 : 10, opacity: isHovered ? 1 : 0.8 }}
            >
              <h3 className={cn("text-2xl font-bold", "text-primary dark:text-primary-foreground")}>{project.title}</h3>
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setIsExpanded(!isExpanded)}
                className="text-primary hover:text-secondary transition-colors"
              >
                {isExpanded ? <MinusCircle /> : <Maximize2 />}
              </Button>
            </motion.div>

            <motion.p
              className="mt-4 text-foreground dark:text-foreground/90 font-medium"
              animate={{ opacity: isHovered ? 1 : 0.9 }}
            >
              {project.description}
            </motion.p>
          </div>

          <motion.div
            className="space-y-6 backdrop-blur-md bg-card/80 rounded-lg p-4 mt-4"
            animate={{ y: isHovered ? 0 : 20, opacity: isHovered ? 1 : 0 }}
          >
            <div className="flex flex-wrap gap-2">
              {project.tags.map((tag: string) => (
                <Badge
                  key={tag}
                  className={cn(
                    "bg-primary/90 text-primary-foreground",
                    "hover:bg-primary/80",
                    "border-none font-medium",
                  )}
                >
                  {tag}
                </Badge>
              ))}
            </div>

            <div className="flex gap-4">
              <Button
                size="sm"
                className={cn("bg-primary text-primary-foreground", "hover:bg-primary/90", "border-none")}
                asChild
              >
                <a href={project.github} target="_blank" rel="noopener noreferrer">
                  <Github className="mr-2 h-4 w-4" />
                  Code
                </a>
              </Button>
              <Button
                size="sm"
                className={cn("bg-secondary text-secondary-foreground", "hover:bg-secondary/90", "border-none")}
                asChild
              >
                <a href={project.demo} target="_blank" rel="noopener noreferrer">
                  <ExternalLink className="mr-2 h-4 w-4" />
                  Demo
                </a>
              </Button>
            </div>
          </motion.div>
        </div>
      </div>
    </motion.div>
  )
}

export function ProjectsSection() {
  return (
    <section
      className={cn("min-h-screen py-24 relative overflow-hidden", "bg-gradient-to-b from-background to-background/95")}
    >
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className={cn("absolute inset-0", "bg-gradient-to-b from-primary/5 to-secondary/5")} />
        <div
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage: `radial-gradient(
              circle at 2px 2px, 
              hsl(var(--primary)/.2) 2px, 
              transparent 0
            )`,
            backgroundSize: "32px 32px",
          }}
        />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2
            className={cn(
              "text-4xl font-bold",
              "bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent",
            )}
          >
            Projets Réalisés
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Découvrez mes dernières réalisations en matière de DevOps et sécurité.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 auto-rows-auto">
          {projects.map((project, index) => (
            <HologramProject key={project.title} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  )
}

