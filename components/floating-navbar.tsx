"use client"

import * as React from "react"
import Link from "next/link"
import { Moon, Sun, Home, User, FolderOpen, MessageSquare } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import { useTheme } from "next-themes"

const navigation = [
  { name: "Home", href: "/", icon: Home },
  { name: "About", href: "/about", icon: User },
  { name: "Projects", href: "/projects", icon: FolderOpen },
  { name: "Contact", href: "/contact", icon: MessageSquare },
]

export function FloatingNavbar() {
  const [isOpen, setIsOpen] = React.useState(false)
  const { theme, setTheme } = useTheme()

  return (
    <>
      {/* Desktop Navigation - Keep existing */}
      <motion.nav
        className={cn(
          "fixed top-4 z-50 w-[95vw] md:w-[60vw] lg:w-[50vw]",
          "left-[50%] transform -translate-x-[50%]",
          "bg-gradient-to-r from-nav-gradient-from to-nav-gradient-to dark:from-dark-nav-gradient-from dark:to-dark-nav-gradient-to",
          "rounded-lg shadow-lg gradient-animate",
          "border border-white/20 dark:border-white/10",
          "backdrop-blur-lg supports-[backdrop-filter]:bg-opacity-80",
          "hidden md:block"
        )}
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
      >
        <div className="mx-auto px-4">
          <div className="flex h-16 items-center justify-between">
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="flex items-center">
              <Link
                href="/"
                className={cn(
                  "flex items-center font-bold text-lg",
                  "text-white dark:text-white",
                  "hover:opacity-80 transition-opacity",
                  "focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white rounded-md px-2 py-1"
                )}
                aria-label="Accueil - Djamal GANI"
              >
                Djamal GANI
              </Link>
            </motion.div>

            <div className="flex items-center space-x-3">
              {navigation.map((item) => (
                <motion.div key={item.name} whileHover={{ y: -5 }} whileTap={{ scale: 0.95 }}>
                  <Link
                    href={item.href}
                    className={cn(
                      "nav-item rounded-md px-3 py-2 block",
                      "text-sm font-medium",
                      "bg-white/20 dark:bg-black/10",
                      "text-white dark:text-white",
                      "backdrop-blur-lg",
                      "border border-white/20 dark:border-white/10",
                      "transition-all duration-200",
                      "hover:bg-white/30 dark:hover:bg-white/20",
                      "hover:shadow-[0_0_15px_rgba(255,255,255,0.3)]",
                      "focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white",
                      "focus-visible:bg-white/40"
                    )}
                    aria-label={`Naviguer vers ${item.name}`}
                  >
                    {item.name}
                  </Link>
                </motion.div>
              ))}

              <motion.div whileHover={{ rotate: 180 }} transition={{ duration: 0.3 }}>
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
                  aria-label={`Basculer vers le thème ${theme === "dark" ? "clair" : "sombre"}`}
                  className={cn(
                    "ml-2",
                    "text-white dark:text-white",
                    "hover:bg-white/30 dark:hover:bg-white/20",
                    "border border-white/20 dark:border-white/10",
                    "backdrop-blur-lg",
                    "focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
                  )}
                >
                  <Sun className="h-5 w-5 rotate-0 scale-100 transition-all duration-500 dark:-rotate-90 dark:scale-0" />
                  <Moon className="absolute h-5 w-5 rotate-90 scale-0 transition-all duration-500 dark:rotate-0 dark:scale-100" />
                  <span className="sr-only">Basculer le thème</span>
                </Button>
              </motion.div>
            </div>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Floating Navigation */}
      <div className="md:hidden">
        {/* Backdrop */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/20 backdrop-blur-sm z-40"
              onClick={() => setIsOpen(false)}
            />
          )}
        </AnimatePresence>

        {/* Floating Action Button */}
        <motion.div
          className="fixed bottom-6 right-6 z-50"
          whileTap={{ scale: 0.9 }}
        >
          <Button
            onClick={() => setIsOpen(!isOpen)}
            className={cn(
              "w-14 h-14 rounded-full shadow-lg",
              "bg-gradient-to-r from-primary to-secondary",
              "hover:shadow-xl hover:shadow-primary/25",
              "border-2 border-white/30",
              "transition-all duration-300"
            )}
            aria-label={isOpen ? "Fermer le menu" : "Ouvrir le menu"}
          >
            <motion.div
              animate={{ rotate: isOpen ? 45 : 0 }}
              transition={{ duration: 0.2 }}
            >
              <div className="relative w-6 h-6">
                <motion.span
                  className="absolute top-2 left-0 w-6 h-0.5 bg-white rounded-full"
                  animate={{
                    rotate: isOpen ? 45 : 0,
                    y: isOpen ? 6 : 0,
                  }}
                />
                <motion.span
                  className="absolute top-4 left-0 w-6 h-0.5 bg-white rounded-full"
                  animate={{
                    opacity: isOpen ? 0 : 1,
                  }}
                />
                <motion.span
                  className="absolute top-6 left-0 w-6 h-0.5 bg-white rounded-full"
                  animate={{
                    rotate: isOpen ? -45 : 0,
                    y: isOpen ? -6 : 0,
                  }}
                />
              </div>
            </motion.div>
          </Button>
        </motion.div>

        {/* Floating Menu Items */}
        <AnimatePresence>
          {isOpen && (
            <div className="fixed bottom-20 right-6 z-50">
              {navigation.map((item, index) => {
                const angle = (index * 45) - 135; // Arc de cercle
                const radius = 100;
                const x = Math.cos((angle * Math.PI) / 180) * radius;
                const y = Math.sin((angle * Math.PI) / 180) * radius;

                return (
                  <motion.div
                    key={item.name}
                    initial={{
                      opacity: 0,
                      scale: 0,
                      x: 0,
                      y: 0,
                    }}
                    animate={{
                      opacity: 1,
                      scale: 1,
                      x: x,
                      y: y,
                    }}
                    exit={{
                      opacity: 0,
                      scale: 0,
                      x: 0,
                      y: 0,
                    }}
                    transition={{
                      duration: 0.3,
                      delay: index * 0.1,
                      type: "spring",
                      stiffness: 260,
                      damping: 20,
                    }}
                    className="absolute"
                  >
                    <Link
                      href={item.href}
                      onClick={() => setIsOpen(false)}
                      className={cn(
                        "flex flex-col items-center justify-center",
                        "w-12 h-12 rounded-full",
                        "bg-white/10 backdrop-blur-md",
                        "border border-white/20",
                        "text-white",
                        "shadow-lg",
                        "hover:bg-white/20 hover:scale-110",
                        "transition-all duration-200",
                        "focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
                      )}
                      aria-label={`Naviguer vers ${item.name}`}
                    >
                      <item.icon className="w-5 h-5" />
                    </Link>
                    
                    {/* Label */}
                    <motion.div
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: (index * 0.1) + 0.2 }}
                      className="absolute -bottom-8 left-1/2 transform -translate-x-1/2"
                    >
                      <span className="text-xs text-white bg-black/50 px-2 py-1 rounded-full whitespace-nowrap">
                        {item.name}
                      </span>
                    </motion.div>
                  </motion.div>
                );
              })}

              {/* Theme Toggle */}
              <motion.div
                initial={{
                  opacity: 0,
                  scale: 0,
                  x: 0,
                  y: 0,
                }}
                animate={{
                  opacity: 1,
                  scale: 1,
                  x: -120,
                  y: 0,
                }}
                exit={{
                  opacity: 0,
                  scale: 0,
                  x: 0,
                  y: 0,
                }}
                transition={{
                  duration: 0.3,
                  delay: navigation.length * 0.1,
                  type: "spring",
                  stiffness: 260,
                  damping: 20,
                }}
                className="absolute"
              >
                <Button
                  onClick={() => {
                    setTheme(theme === "dark" ? "light" : "dark");
                    setIsOpen(false);
                  }}
                  className={cn(
                    "w-12 h-12 rounded-full",
                    "bg-gradient-to-r from-amber-400 to-orange-500",
                    "hover:bg-gradient-to-r hover:from-amber-300 hover:to-orange-400",
                    "border-2 border-white/30",
                    "shadow-lg",
                    "hover:scale-110",
                    "transition-all duration-200"
                  )}
                  aria-label={`Basculer vers le thème ${theme === "dark" ? "clair" : "sombre"}`}
                >
                  <Sun className="h-5 w-5 rotate-0 scale-100 transition-all duration-500 dark:-rotate-90 dark:scale-0" />
                  <Moon className="absolute h-5 w-5 rotate-90 scale-0 transition-all duration-500 dark:rotate-0 dark:scale-100" />
                </Button>
              </motion.div>
            </div>
          )}
        </AnimatePresence>
      </div>
    </>
  )
}
