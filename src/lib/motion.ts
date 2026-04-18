// lib/motion.ts | Framer Motion variants | Fulgur Service
import type { Variants } from 'framer-motion'

// Easing esponenziale | "snappy" e naturale
const EASE = [0.16, 1, 0.3, 1] as const
// Easing più morbido per elementi grandi
const EASE_SOFT = [0.25, 0.46, 0.45, 0.94] as const

/* ── Reveal base | fade + rise + lieve scala ── */
export const fadeUp: Variants = {
  hidden:  { opacity: 0, y: 28, scale: 0.985 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.7, ease: EASE },
  },
}

/* ── Stagger container ── */
export const staggerContainer: Variants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.09, delayChildren: 0.05 },
  },
}

/* ── Stagger item | più espressivo del fadeUp base ── */
export const staggerItem: Variants = {
  hidden:  { opacity: 0, y: 22, scale: 0.97 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.6, ease: EASE },
  },
}

/* ── Fade puro | per overlay, tooltip, ecc ── */
export const fadeIn: Variants = {
  hidden:  { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.4, ease: EASE_SOFT } },
}

/* ── Scale in | per cards, modal ── */
export const scaleIn: Variants = {
  hidden:  { opacity: 0, scale: 0.9 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.55, ease: EASE },
  },
}

/* ── Slide sinistra ── */
export const slideInLeft: Variants = {
  hidden:  { opacity: 0, x: -36 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.65, ease: EASE },
  },
}

/* ── Slide destra ── */
export const slideInRight: Variants = {
  hidden:  { opacity: 0, x: 36 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.65, ease: EASE },
  },
}

/* ── Spring config per hover / interazioni fisiche ── */
export const springConfig   = { type: 'spring' as const, stiffness: 160, damping: 18 }
export const springHeavy    = { type: 'spring' as const, stiffness: 100, damping: 22 }
export const springSnappy   = { type: 'spring' as const, stiffness: 300, damping: 24 }

/* ── Slide laterale per form multi-step ── */
export const slideStep = {
  enter: (dir: number) => ({ x: dir > 0 ? 280 : -280, opacity: 0 }),
  center: {
    x: 0,
    opacity: 1,
    transition: { duration: 0.42, ease: EASE },
  },
  exit: (dir: number) => ({
    x: dir < 0 ? 280 : -280,
    opacity: 0,
    transition: { duration: 0.3, ease: EASE },
  }),
}

/* ── Overlay fullscreen (mobile nav) ── */
export const overlayVariants: Variants = {
  hidden:  { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.22 } },
  exit:    { opacity: 0, transition: { duration: 0.18 } },
}

/* ── Menu item stagger (mobile nav) ── */
export const menuVariants: Variants = {
  hidden:  { opacity: 0, y: 16 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.055, duration: 0.45, ease: EASE },
  }),
  exit: { opacity: 0, transition: { duration: 0.15 } },
}
