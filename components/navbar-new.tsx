"use client"

import * as React from "react"
import Link from "next/link"
import { Moon, Sun, Home, User, FolderOpen, MessageSquare } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import { useTheme } from "next-themes"
import { LanguageSelector } from "./language-selector"
import { useTranslations } from "@/hooks/useTranslations"

const navigation = [
	{ name: "navbar.home", href: "/", icon: Home },
	{ name: "navbar.about", href: "/about", icon: User },
	{ name: "navbar.projects", href: "/projects", icon: FolderOpen },
	{ name: "navbar.contact", href: "/contact", icon: MessageSquare },
]

export function Navbar() {
	const [isOpen, setIsOpen] = React.useState(false)
	const { theme, setTheme } = useTheme()
	const { t, locale } = useTranslations()

	return (
		<>
			{/* Unified Navigation for All Screen Sizes */}
			<div>
				{/* Backdrop */}
				<AnimatePresence>
					{isOpen && (
						<motion.div
							initial={{ opacity: 0 }}
							animate={{ opacity: 1 }}
							exit={{ opacity: 0 }}
							className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40"
							onClick={() => setIsOpen(false)}
						/>
					)}
				</AnimatePresence>

				{/* Menu Button - Fixed in Bottom Right Corner */}
				<motion.div
					className="fixed bottom-6 right-6 z-50"
					whileHover={{ scale: 1.05 }}
					whileTap={{ scale: 0.95 }}
				>
					<Button
						onClick={() => setIsOpen(!isOpen)}
						className={cn(
							"w-14 h-14 rounded-full p-0 shadow-2xl",
							"bg-gradient-to-r from-nav-gradient-from to-nav-gradient-to",
							"dark:from-dark-nav-gradient-from dark:to-dark-nav-gradient-to",
							"border-2 border-white/30 dark:border-white/20",
							"backdrop-blur-lg",
							"transition-all duration-300",
							"hover:shadow-[0_0_25px_rgba(255,255,255,0.3)]",
							isOpen && "rotate-90"
						)}
						aria-label={isOpen ? t("navbar.closeMenu") : t("navbar.openMenu")}
						aria-expanded={isOpen}
					>
						{/* Simple Hamburger Menu */}
						<motion.div className="relative w-6 h-6">
							<motion.span
								className="absolute top-1 left-0 w-6 h-0.5 bg-white rounded-full"
								animate={{
									rotate: isOpen ? 45 : 0,
									y: isOpen ? 8 : 0,
								}}
								transition={{ duration: 0.2, ease: "easeInOut" }}
							/>
							<motion.span
								className="absolute top-3 left-0 w-6 h-0.5 bg-white rounded-full"
								animate={{
									opacity: isOpen ? 0 : 1,
								}}
								transition={{ duration: 0.2 }}
							/>
							<motion.span
								className="absolute top-5 left-0 w-6 h-0.5 bg-white rounded-full"
								animate={{
									rotate: isOpen ? -45 : 0,
									y: isOpen ? -8 : 0,
								}}
								transition={{ duration: 0.2, ease: "easeInOut" }}
							/>
						</motion.div>
					</Button>
				</motion.div>

				{/* Menu Dropdown - Optimized for All Screen Sizes */}
				<AnimatePresence>
					{isOpen && (
						<motion.div
							initial={{ opacity: 0, y: -20, scale: 0.95 }}
							animate={{ opacity: 1, y: 0, scale: 1 }}
							exit={{ opacity: 0, y: -20, scale: 0.95 }}
							transition={{ duration: 0.2, ease: "easeOut" }}
							className={cn(
								"fixed z-50",
								// Responsive positioning
								"top-20 right-4 left-4", // Mobile
								"md:top-24 md:right-6 md:left-auto md:w-80", // Desktop
								"bg-gradient-to-r from-nav-gradient-from to-nav-gradient-to",
								"dark:from-dark-nav-gradient-from dark:to-dark-nav-gradient-to",
								"rounded-lg shadow-xl border border-white/20 dark:border-white/10",
								"backdrop-blur-lg p-4"
							)}
						>
							{/* Logo - Visible on All Screens */}
							<div className="flex items-center justify-between mb-6">
								<Link
									href="/"
									onClick={() => setIsOpen(false)}
									className={cn(
										"font-bold text-lg text-white",
										"hover:opacity-80 transition-opacity",
										"focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white rounded-md px-2 py-1"
									)}
									aria-label="Accueil - Djamal GANI"
								>
									Djamal GANI
								</Link>
							</div>

							{/* Navigation Links */}
							<nav className="space-y-3">
								{navigation.map((item, index) => (
									<motion.div
										key={item.name}
										initial={{ opacity: 0, x: -20 }}
										animate={{ opacity: 1, x: 0 }}
										transition={{ delay: index * 0.1, duration: 0.3 }}
									>
										<Link
											href={item.href}
											onClick={() => setIsOpen(false)}
											className={cn(
												"flex items-center space-x-3 p-3 rounded-lg",
												"bg-white/10 hover:bg-white/20",
												"text-white transition-all duration-200",
												"border border-white/10 hover:border-white/20",
												"focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white",
												"group"
											)}
											aria-label={`Naviguer vers ${t(item.name)}`}
										>
											<item.icon className="w-5 h-5 transition-transform group-hover:scale-110" />
											<span className="font-medium">{t(item.name)}</span>
										</Link>
									</motion.div>
								))}

								{/* Language Selector */}
								<motion.div
									initial={{ opacity: 0, x: -20 }}
									animate={{ opacity: 1, x: 0 }}
									transition={{ delay: (navigation.length + 1) * 0.1, duration: 0.3 }}
									className="pt-2"
								>
									<LanguageSelector currentLocale={locale} />
								</motion.div>

								{/* Theme Toggle in Menu */}
								<motion.div
									initial={{ opacity: 0, x: -20 }}
									animate={{ opacity: 1, x: 0 }}
									transition={{ delay: navigation.length * 0.1, duration: 0.3 }}
									className="pt-3 border-t border-white/20"
								>
									<Button
										onClick={() => {
											setTheme(theme === "dark" ? "light" : "dark")
											setIsOpen(false)
										}}
										className={cn(
											"w-full justify-start space-x-3 p-3 h-auto",
											"bg-white/10 hover:bg-white/20",
											"text-white border border-white/10 hover:border-white/20",
											"transition-all duration-200",
											"focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
										)}
										aria-label={`Basculer vers le thème ${
											theme === "dark" ? "clair" : "sombre"
										}`}
									>
										<div className="relative w-5 h-5">
											<Sun className="w-5 h-5 rotate-0 scale-100 transition-all duration-300 dark:-rotate-90 dark:scale-0" />
											<Moon className="absolute inset-0 w-5 h-5 rotate-90 scale-0 transition-all duration-300 dark:rotate-0 dark:scale-100" />
										</div>
										<span className="font-medium">
											{theme === "dark" ? t("navbar.lightMode") : t("navbar.darkMode")}
										</span>
									</Button>
								</motion.div>
							</nav>
						</motion.div>
          )}
        </AnimatePresence>
      </div>
    </>
  )
}