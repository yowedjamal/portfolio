"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";

const typewriterVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 },
  },
};

const letterVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { type: "spring", stiffness: 100 },
  },
};

const AboutSection = () => {
  const terminalRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: terminalRef,
    offset: ["start end", "end start"],
  });

  const opacity = useTransform(scrollYProgress, [0, 0.5], [0, 1]);
  const y = useTransform(scrollYProgress, [0, 1], [100, 0]);

  const skills = [
    "Laravel 🐘",
    "Spring Boot ☕",
    "Django 🐍",
    "Angular ⚛️",
    "Next.js ⚡",
    "Flutter 📱",
    "Node.js 🟢",
    "PostgreSQL 🐘",
    "Firebase 🔥",
    "Docker 🐳",
    "Git 🔧",
    "API Design 🛠️"
  ];

  const commands = ["whoami", "ls skills", "cat experience.txt", "cat achievements.txt"];

  const getCommandOutput = (cmd: string) => {
    switch (cmd) {
      case "whoami":
        return `
> Software Engineer | Backend & Fullstack Developer
> API & SaaS Architect | Web Signature Specialist
> 3+ ans d'expérience en développement
> Spécialiste en signature électronique & VDS
> Expert en solutions SaaS modulaires`;
      case "ls skills":
        return skills.join("\n");
      case "cat experience.txt":
        return `
🏆 NASA Space Apps Challenge 2023 (Bénin)
└── 2e place nationale
└── Solution technologique ouverte et impactante

🎓 Diplôme National en Développement Logiciel
└── PIGIER Bénin (2020-2023)
└── Spécialisation en solutions SaaS

🌍 Localisation: Abomey-Calavi, Bénin (remote EMEA)
📧 Email: yowedjamal@gmail.com
📱 Téléphone: +229 01 57 51 24 89`;
      case "cat achievements.txt":
        return `
🔒 Signature & Sécurité Documentaire
└── Driver Spring Boot pour signature PDF
└── Microservice gestion champs PDF
└── Interface Angular + Laravel
└── Intégration Keycloak SSO

📄 Visible Digital Seal (VDS)
└── VDS generator API Django (normes ICAO)
└── App Flutter vérification VDS
└── Système validation manifeste XML

📦 Multi-shop platform (Nusato)
└── Architecture eCommerce Next.js + Firebase
└── Personnalisation par boutique
└── Automatisation Telegram Bot

📊 SaaS GymBoard
└── Gestion salle de sport QR Code
└── Multi-filiales, suivi coachs/clients
└── Tableaux de bord temps réel`;
      default:
        return "Command not found";
    }
  };

  const TerminalPrompt = () => (
    <div className="flex items-center gap-2 text-primary font-mono">
      <span>djamal@portfolio</span>
      <span className="text-secondary">:~$</span>
    </div>
  );

  const AnimatedSkillBadge = ({ skill }: { skill: string }) => (
    <motion.div
      whileHover={{
        scale: 1.1,
        rotate: [0, -5, 5, -5, 0],
        transition: { duration: 0.3 },
      }}
      className="transform-gpu"
    >
      <Badge
        variant="outline"
        className={cn(
          "border-primary/50 text-primary",
          "hover:bg-primary hover:text-primary-foreground",
          "transition-all duration-300",
          "backdrop-blur-sm bg-background/50"
        )}
      >
        {skill}
      </Badge>
    </motion.div>
  );

  return (
    <div
      id="about"
      className={cn(
        "min-h-screen py-20 relative overflow-hidden",
      )}
    >
      {/* Animated background grid */}
      <div className="absolute inset-0 opacity-20">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, hsl(var(--primary)) 1px, transparent 0)`,
            backgroundSize: "50px 50px",
          }}
        />
      </div>

      <motion.div
        ref={terminalRef}
        className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8"
      >
        <div
          className={cn(
            "rounded-lg shadow-2xl overflow-hidden",
            "bg-card border border-primary/20",
            "backdrop-blur-sm"
          )}
        >
          {/* Terminal Header */}
          <div
            className={cn(
              "p-3 flex items-center gap-2",
              "bg-muted/50 border-b border-border"
            )}
          >
            <div className="flex gap-2">
              <div className="w-3 h-3 rounded-full bg-destructive" />
              <div className="w-3 h-3 rounded-full bg-yellow-500" />
              <div className="w-3 h-3 rounded-full bg-primary" />
            </div>
            <span className="text-muted-foreground text-sm font-mono ml-2">
              portfolio.terminal
            </span>
          </div>

          {/* Terminal Content */}
          <div className="p-6 font-mono text-sm space-y-4">
            {commands.map((cmd, index) => (
              <motion.div
                key={cmd}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={typewriterVariants}
                className="space-y-2"
              >
                <div className="flex items-center gap-2">
                  <TerminalPrompt />
                  <motion.span
                    variants={letterVariants}
                    className="text-foreground"
                  >
                    {cmd}
                  </motion.span>
                </div>
                <motion.pre
                  className="text-primary/80 ml-4 whitespace-pre-wrap"
                  variants={letterVariants}
                >
                  {getCommandOutput(cmd)}
                </motion.pre>
              </motion.div>
            ))}

            <div className="flex items-center gap-2">
              <TerminalPrompt />
              <span className="animate-pulse text-primary">█</span>
            </div>
          </div>
        </div>

        {/* Skills Grid */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true }}
          className="mt-12 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4"
        >
          {skills.map((skill) => (
            <AnimatedSkillBadge key={skill} skill={skill} />
          ))}
        </motion.div>
      </motion.div>
    </div>
  );
};

export default AboutSection;
