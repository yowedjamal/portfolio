'use client';

import { ProjectsSection } from '@/components/projects-section';
import { motion } from 'framer-motion';

export default function ProjectsPage() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <ProjectsSection />
    </motion.div>
  );
}