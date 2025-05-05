'use client';
import { motion } from 'framer-motion';

export default function CTAButton({ children = 'Subscribe' }) {
  return (
    <motion.button
      type="submit"
      className="px-8 py-3 rounded-md bg-primary text-white font-semibold shadow-lg focus:outline-none"
      whileHover={{ 
        scale: 1.07,
        y: -2,
        boxShadow: '0 10px 24px rgba(233,69,96,0.16)'
      }}
      whileTap={{ scale: 0.96, y: 1 }}
      transition={{ type: 'spring', stiffness: 350, damping: 18 }}
    >
      {children}
    </motion.button>
  );
}
