'use client';
import { motion } from 'framer-motion';

export default function FeatureCard({ title, description, children }) {
  return (
    <motion.div
      className="bg-bg dark:bg-darkbg p-8 rounded-lg shadow-lg"
      whileHover={{
        y: -7,
        scale: 1.04,
        boxShadow: '0 12px 32px rgba(233,69,96,0.10)'
      }}
      transition={{ type: 'spring', stiffness: 320, damping: 18 }}
    >
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-gray-600 dark:text-gray-300">{description}</p>
      {children}
    </motion.div>
  );
}
