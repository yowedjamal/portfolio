"use client"

import * as React from "react"
import Link from "next/link"
import { Moon, Sun, Menu, X } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import { useTheme } from "next-themes"

const navigation = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Projects", href: "/projects" },
  { name: "Contact", href: "/contact" },
]

export function Navbar() {
  const [isOpen, setIsOpen] = React.useState(false)
  const { theme, setTheme } = useTheme();

  return (
    <motion.nav
      className={cn(
        "fixed bottom-2 z-50 w-[95%] md:w-[60%] lg:w-[50%]",
        "left-[50%] transform -translate-x-[50%]",
        "bg-gradient-to-r from-nav-gradient-from to-nav-gradient-to dark:from-dark-nav-gradient-from dark:to-dark-nav-gradient-to",
        "rounded-lg shadow-lg gradient-animate",
        "border border-white/20 dark:border-white/10",
        "backdrop-blur-lg supports-[backdrop-filter]:bg-opacity-80",
      )}
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
              )}
            >
              Djamal GANI
            </Link>
          </motion.div>

          {/* Desktop menu */}
          <div className="hidden md:flex md:items-center md:space-x-3">
            {navigation.map((item) => (
              <motion.div key={item.name} whileHover={{ y: -5 }} whileTap={{ scale: 0.95 }}>
                <Link
                  href={item.href}
                  className={cn(
                    "nav-item rounded-md px-2 py-2 block",
                    "text-sm font-medium",
                    "bg-white/10 dark:bg-black/10",
                    "text-white dark:text-white",
                    "backdrop-blur-lg",
                    "border border-white/20 dark:border-white/10",
                    "transition-all duration-200",
                    "hover:bg-white/20 dark:hover:bg-white/20",
                    "hover:shadow-[0_0_15px_rgba(255,255,255,0.3)]",
                  )}
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
                className={cn(
                  "ml-2",
                  "text-white dark:text-white",
                  "hover:bg-white/20 dark:hover:bg-white/20",
                  "border border-white/20 dark:border-white/10",
                  "backdrop-blur-lg",
                )}
              >
                <Sun className="h-5 w-5 rotate-0 scale-100 transition-all duration-500 dark:-rotate-90 dark:scale-0" />
                <Moon className="absolute h-5 w-5 rotate-90 scale-0 transition-all duration-500 dark:rotate-0 dark:scale-100" />
                <span className="sr-only">Toggle theme</span>
              </Button>
            </motion.div>
          </div>

          {/* Mobile menu button */}
          <motion.div whileTap={{ scale: 0.9 }} className="flex items-center md:hidden">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsOpen(!isOpen)}
              className={cn(
                "text-white dark:text-white",
                "hover:bg-white/20 dark:hover:bg-white/20",
                "border border-white/20 dark:border-white/10",
              )}
            >
              <AnimatePresence mode="wait">
                <motion.div
                  key={isOpen ? "close" : "open"}
                  initial={{ rotate: -90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: 90, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
                </motion.div>
              </AnimatePresence>
            </Button>
          </motion.div>
        </div>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            transition={{ duration: 0.2 }}
            className={cn(
              "absolute bottom-[4.5rem] left-0 right-0",
              "bg-gradient-to-r from-nav-gradient-from to-nav-gradient-to dark:from-dark-nav-gradient-from dark:to-dark-nav-gradient-to",
              "rounded-lg shadow-lg gradient-animate",
              "border border-white/20 dark:border-white/10",
              "backdrop-blur-lg supports-[backdrop-filter]:bg-opacity-80",
            )}
          >
            <div className="space-y-1 p-3">
              {navigation.map((item, index) => (
                <motion.div
                  key={item.name}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Link
                    href={item.href}
                    className={cn(
                      "block rounded-md px-4 py-2",
                      "text-base font-medium",
                      "text-white dark:text-white",
                      "hover:bg-white/20 dark:hover:bg-white/20",
                      "transition-colors",
                    )}
                    onClick={() => setIsOpen(false)}
                  >
                    {item.name}
                  </Link>
                </motion.div>
              ))}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: navigation.length * 0.1 }}
              >
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
                  className={cn(
                    "w-full justify-start mt-2",
                    "text-white dark:text-white",
                    "hover:bg-white/20 dark:hover:bg-white/20",
                  )}
                >
                  <Sun className="mr-2 h-5 w-5" />
                  <span>Change Theme</span>
                </Button>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  )
}

