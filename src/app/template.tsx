'use client'

import { motion } from 'framer-motion'

/**
 * template.tsx — eseguito ad ogni cambio di route in App Router.
 * Fornisce la fade-in di entrata per le pagine non intercettate
 * dal PageTransitionProvider (back/forward, link diretti, ecc.).
 */
export default function Template({ children }: { children: React.ReactNode }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 8 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.42, ease: [0.16, 1, 0.3, 1] }}
    >
      {children}
    </motion.div>
  )
}
