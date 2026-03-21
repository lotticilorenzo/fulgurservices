'use client'

import React, { useEffect, useState } from 'react'
import { motion, useMotionValue, useSpring } from 'framer-motion'

export function CustomCursor() {
  const [visible, setVisible] = useState(false)
  const [hovering, setHovering] = useState(false)
  const [clicking, setClicking] = useState(false)
  const [isTouchDevice, setIsTouchDevice] = useState(true)

  const mouseX = useMotionValue(-200)
  const mouseY = useMotionValue(-200)

  // Il fulmine segue il mouse con una molla morbida
  const boltX = useSpring(mouseX, { stiffness: 260, damping: 28, mass: 0.3 })
  const boltY = useSpring(mouseY, { stiffness: 260, damping: 28, mass: 0.3 })

  // L'aura è più pigra: crea un effetto "scia" visivo
  const auraX = useSpring(mouseX, { stiffness: 140, damping: 20, mass: 0.6 })
  const auraY = useSpring(mouseY, { stiffness: 140, damping: 20, mass: 0.6 })

  useEffect(() => {
    const isTouch = window.matchMedia('(hover: none)').matches
    if (isTouch) return
    const initT = setTimeout(() => setIsTouchDevice(false), 0)

    // RAF guard — evita saturazione main thread su display a 120Hz
    let rafPending = false
    let lastX = -200
    let lastY = -200

    const onMove = (e: MouseEvent) => {
      lastX = e.clientX
      lastY = e.clientY
      setVisible(true)
      if (!rafPending) {
        rafPending = true
        requestAnimationFrame(() => {
          mouseX.set(lastX)
          mouseY.set(lastY)
          rafPending = false
        })
      }
    }

    const onDown = () => setClicking(true)
    const onUp   = () => setClicking(false)

    // Event delegation — funziona anche per elementi dinamici
    const onOver = (e: MouseEvent) => {
      const hoverable = (e.target as Element).closest(
        'a, button, [role="button"], label, input, textarea, select, [data-hover]'
      )
      setHovering(!!hoverable)
    }

    const onDocLeave  = () => setVisible(false)
    const onDocEnter  = () => setVisible(true)

    window.addEventListener('mousemove', onMove, { passive: true })
    window.addEventListener('mousedown', onDown, { passive: true })
    window.addEventListener('mouseup',   onUp,   { passive: true })
    document.addEventListener('mouseleave', onDocLeave)
    document.addEventListener('mouseenter', onDocEnter)
    document.addEventListener('mouseover',  onOver)

    return () => {
      clearTimeout(initT)
      window.removeEventListener('mousemove', onMove)
      window.removeEventListener('mousedown', onDown)
      window.removeEventListener('mouseup',   onUp)
      document.removeEventListener('mouseleave', onDocLeave)
      document.removeEventListener('mouseenter', onDocEnter)
      document.removeEventListener('mouseover',  onOver)
    }
  }, [mouseX, mouseY])

  if (isTouchDevice) return null

  return (
    <>
      {/* ── Aura — scia morbida più lenta, radial glow ── */}
      <motion.div
        aria-hidden="true"
        className="pointer-events-none fixed top-0 left-0 z-[9997]"
        style={{
          x: auraX,
          y: auraY,
          translateX: '-50%',
          translateY: '-50%',
          width: 40,
          height: 40,
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(78,203,160,0.28) 0%, transparent 70%)',
        }}
        animate={{
          opacity: visible ? (hovering ? 0.8 : 0.4) : 0,
          scale:   hovering ? 2.4 : clicking ? 0.5 : 1,
        }}
        transition={{ duration: 0.4, ease: 'easeOut' }}
      />

      {/* ── Ring — cerchio leggero centrato sul fulmine ── */}
      <motion.div
        aria-hidden="true"
        className="pointer-events-none fixed top-0 left-0 z-[9998]"
        style={{
          x: boltX,
          y: boltY,
          translateX: '-50%',
          translateY: '-50%',
          width: 32,
          height: 32,
          borderRadius: '50%',
          border: '1px solid rgba(78,203,160,0.5)',
        }}
        animate={{
          opacity: visible ? 1 : 0,
          scale:   hovering ? 1.75 : clicking ? 0.6 : 1,
        }}
        transition={{
          opacity: { duration: 0.15 },
          scale:   { type: 'spring', stiffness: 320, damping: 22 },
        }}
      />

      {/* ── Fulmine SVG — sopra il ring ── */}
      <motion.div
        aria-hidden="true"
        className="pointer-events-none fixed top-0 left-0 z-[9999] text-[var(--accent)]"
        style={{
          x: boltX,
          y: boltY,
          translateX: '-50%',
          translateY: '-50%',
          originX: '50%',
          originY: '50%',
        }}
        animate={{
          opacity: visible ? 1 : 0,
          scale:   hovering ? 1.35 : clicking ? 0.7 : 1,
          rotate:  hovering ? -12 : clicking ? 8 : 0,
          filter:  clicking
            ? 'drop-shadow(0 0 10px rgba(78,203,160,1)) drop-shadow(0 0 20px rgba(78,203,160,0.6))'
            : hovering
            ? 'drop-shadow(0 0 6px rgba(78,203,160,0.85))'
            : 'drop-shadow(0 0 2px rgba(78,203,160,0.4))',
        }}
        transition={{
          opacity: { duration: 0.15 },
          scale:   { type: 'spring', stiffness: 400, damping: 22 },
          rotate:  { type: 'spring', stiffness: 300, damping: 18 },
          filter:  { duration: 0.2 },
        }}
      >
        <svg
          width="20"
          height="20"
          viewBox="0 0 14 24"
          fill="currentColor"
          aria-hidden="true"
        >
          <path d="M10 1L3 13h5L6 23 14 10H9z" />
        </svg>
      </motion.div>
    </>
  )
}
