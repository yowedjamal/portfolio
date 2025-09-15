'use client';

import { ContactSection } from '@/components/contact-section';
import { motion } from 'framer-motion';

export default function ContactPage() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <ContactSection />
    </motion.div>
  );
}