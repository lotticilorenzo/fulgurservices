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

  // Ring follows with spring delay for a smooth trailing effect
  const ringX = useSpring(mouseX, { stiffness: 260, damping: 28, mass: 0.3 })
  const ringY = useSpring(mouseY, { stiffness: 260, damping: 28, mass: 0.3 })

  useEffect(() => {
    // Only show on true pointer devices (not touch)
    const isTouch = window.matchMedia('(hover: none)').matches
    if (isTouch) return
    setIsTouchDevice(false)

    const onMove = (e: MouseEvent) => {
      mouseX.set(e.clientX)
      mouseY.set(e.clientY)
      setVisible(true)
    }

    const onLeave = () => setVisible(false)
    const onEnter = () => setVisible(true)
    const onDown = () => setClicking(true)
    const onUp = () => setClicking(false)

    // Event delegation — works for dynamic elements too
    const onOver = (e: MouseEvent) => {
      const hoverable = (e.target as Element).closest(
        'a, button, [role="button"], label, input, textarea, select, [data-hover]'
      )
      setHovering(!!hoverable)
    }

    document.addEventListener('mousemove', onMove, { passive: true })
    document.addEventListener('mouseleave', onLeave)
    document.addEventListener('mouseenter', onEnter)
    document.addEventListener('mousedown', onDown)
    document.addEventListener('mouseup', onUp)
    document.addEventListener('mouseover', onOver)

    return () => {
      document.removeEventListener('mousemove', onMove)
      document.removeEventListener('mouseleave', onLeave)
      document.removeEventListener('mouseenter', onEnter)
      document.removeEventListener('mousedown', onDown)
      document.removeEventListener('mouseup', onUp)
      document.removeEventListener('mouseover', onOver)
    }
  }, [mouseX, mouseY])

  if (isTouchDevice) return null

  return (
    <>
      {/* ── Outer ring — follows with spring lag ── */}
      <motion.div
        aria-hidden="true"
        className="pointer-events-none fixed top-0 left-0 z-[9999] rounded-full border border-solid"
        style={{
          x: ringX,
          y: ringY,
          translateX: '-50%',
          translateY: '-50%',
        }}
        animate={{
          width:  hovering ? 52 : clicking ? 28 : 40,
          height: hovering ? 52 : clicking ? 28 : 40,
          opacity: visible ? 1 : 0,
          borderColor: hovering
            ? 'rgba(78, 203, 160, 1)'
            : 'rgba(78, 203, 160, 0.55)',
          backgroundColor: hovering
            ? 'rgba(78, 203, 160, 0.10)'
            : 'rgba(78, 203, 160, 0)',
          scale: clicking ? 0.85 : 1,
        }}
        transition={{ duration: 0.18, ease: 'easeOut' }}
      />

      {/* ── Inner dot — exact cursor position ── */}
      <motion.div
        aria-hidden="true"
        className="pointer-events-none fixed top-0 left-0 z-[9999] rounded-full"
        style={{
          x: mouseX,
          y: mouseY,
          translateX: '-50%',
          translateY: '-50%',
          backgroundColor: 'var(--accent)',
        }}
        animate={{
          width:  hovering ? 7 : clicking ? 12 : 6,
          height: hovering ? 7 : clicking ? 12 : 6,
          opacity: visible ? 1 : 0,
          scale: clicking ? 0.7 : 1,
        }}
        transition={{ duration: 0.1 }}
      />
    </>
  )
}
