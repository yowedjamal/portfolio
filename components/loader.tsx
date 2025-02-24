"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"

export const Loader = () => {
  const [loading, setLoading] = useState(true)
  
  useEffect(() => {
    // Simulate minimum loading time of 2 seconds
    const timer = setTimeout(() => {
      setLoading(false)
    }, 2000)
    
    return () => clearTimeout(timer)
  }, [])
  
  if (!loading) return null
  
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-background">
      <div className="relative flex flex-col items-center">
        {/* Main logo animation */}
        <motion.div
          className="mb-8 text-4xl font-bold text-primary"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          DG
        </motion.div>
        
        {/* Loading indicator */}
        <div className="relative h-1 w-48 overflow-hidden rounded-full bg-muted">
          <motion.div 
            className="absolute left-0 top-0 h-full bg-primary"
            initial={{ width: "0%" }}
            animate={{
              width: "100%"
            }}
            transition={{ duration: 1.8, ease: "easeInOut" }}
          />
        </div>
        
        {/* Text animation */}
        <motion.div
          className="mt-4 text-sm text-muted-foreground"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
        >
          Sécurité et développement
        </motion.div>
        
        {/* Tech keywords that fade in */}
        <div className="mt-8 flex flex-wrap justify-center gap-2">
          {["DevOps", "Sécurité", "Web", "Cloud"].map((word, index) => (
            <motion.span
              key={word}
              className="text-xs text-muted-foreground"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 + index * 0.2 }}
            >
              {word}
              {index < 3 && " • "}
            </motion.span>
          ))}
        </div>
      </div>
    </div>
  )
}