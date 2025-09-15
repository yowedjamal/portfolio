'use client';

import AboutSection from '@/components/about-section';
import { motion } from 'framer-motion';

export default function AboutPage() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <AboutSection />
    </motion.div>
  );
}