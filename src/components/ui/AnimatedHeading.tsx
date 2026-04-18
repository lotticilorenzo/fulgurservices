'use client'

import { motion } from 'framer-motion'
import type { Variants } from 'framer-motion'
import { cn } from '@/lib/utils'

interface AnimatedHeadingProps {
  children: string
  as?: 'h1' | 'h2' | 'h3'
  className?: string
  delay?: number
  /** Stagger tra parole in secondi */
  wordStagger?: number
  /** Colora l'ultima parola con var(--accent) */
  accentLast?: boolean
}

const WORD_VARIANTS = {
  hidden:  { opacity: 0, y: '60%', rotateX: 20 },
  visible: (i: number) => ({
    opacity: 1,
    y: '0%',
    rotateX: 0,
    transition: {
      delay: i * 0.07,
      duration: 0.65,
      ease: [0.16, 1, 0.3, 1],
    },
  }),
}

const CONTAINER_VARIANTS = {
  hidden: {},
  visible: {},
}

/**
 * AnimatedHeading | spezza il testo parola per parola e le anima
 * in entrata con un reveal dal basso premium.
 * Funziona solo su stringhe semplici (nessun JSX child).
 */
export function AnimatedHeading({
  children,
  as: Tag = 'h2',
  className,
  delay = 0,
  wordStagger = 0.07,
  accentLast = false,
}: AnimatedHeadingProps) {
  const words = children.split(' ').filter(Boolean)

  const wordVars: Variants = {
    hidden:  { opacity: 0, y: '55%' },
    visible: (i: number) => ({
      opacity: 1,
      y: '0%',
      transition: {
        delay: delay + i * wordStagger,
        duration: 0.62,
        ease: [0.16, 1, 0.3, 1] as [number, number, number, number],
      },
    }),
  }

  return (
    <motion.div
      variants={CONTAINER_VARIANTS}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-6% 0px' }}
    >
      <Tag className={cn('overflow-hidden', className)}>
        <span className="flex flex-wrap gap-x-[0.25em]" aria-label={children}>
          {words.map((word, i) => (
            <span key={i} className="overflow-hidden inline-block">
              <motion.span
                className={cn(
                  'inline-block',
                  accentLast && i === words.length - 1 && 'text-[var(--accent)]'
                )}
                custom={i}
                variants={wordVars}
              >
                {word}
              </motion.span>
            </span>
          ))}
        </span>
      </Tag>
    </motion.div>
  )
}
