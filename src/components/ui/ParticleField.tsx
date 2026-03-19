'use client'

import React, { useEffect, useRef } from 'react'

interface Particle {
  x: number
  y: number
  vx: number
  vy: number
  radius: number
  alpha: number
}

export function ParticleField() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext('2d')
    if (!ctx) return

    let animationFrameId: number
    let particles: Particle[] = []
    let width = 0
    let height = 0

    const initParticles = () => {
      particles = []
      const isMobile = window.innerWidth < 768
      const particleCount = isMobile ? 18 : 40

      for (let i = 0; i < particleCount; i++) {
        particles.push({
          x: Math.random() * width,
          y: Math.random() * height,
          vx: (Math.random() - 0.5) * 0.5, // Velocità lenta
          vy: (Math.random() - 0.5) * 0.5,
          radius: Math.random() * 1.5 + 0.5,
          alpha: Math.random() * 0.15 + 0.1, // 0.1 - 0.25 (più leggere su light)
        })
      }
    }

    const resize = () => {
      if (!canvas.parentElement) return
      width = canvas.parentElement.clientWidth
      height = canvas.parentElement.clientHeight
      canvas.width = width
      canvas.height = height
      initParticles()
    }

    // ResizeObserver per catturare i veri cambiamenti di dimensione del contenitore
    const resizeObserver = new ResizeObserver(() => {
      resize()
    })
    
    if (canvas.parentElement) {
      resizeObserver.observe(canvas.parentElement)
    }

    // Colore primario: var(--accent) => rgb(78, 203, 160)
    // Estraiamo i valori dal CSS custom properties o li hardcodiamo in base al design (#4ECBA0)
    const accentRGB = '78, 203, 160'

    const render = () => {
      ctx.clearRect(0, 0, width, height)

      // Aggiorna e disegna particelle
      for (let i = 0; i < particles.length; i++) {
        const p = particles[i]

        p.x += p.vx
        p.y += p.vy

        // Bounce
        if (p.x < 0 || p.x > width) p.vx *= -1
        if (p.y < 0 || p.y > height) p.vy *= -1

        ctx.beginPath()
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2)
        ctx.fillStyle = `rgba(${accentRGB}, ${p.alpha})`
        ctx.fill()

        // Connessioni
        for (let j = i + 1; j < particles.length; j++) {
          const p2 = particles[j]
          const dx = p.x - p2.x
          const dy = p.y - p2.y
          const dist = Math.sqrt(dx * dx + dy * dy)

          if (dist < 110) {
            ctx.beginPath()
            ctx.moveTo(p.x, p.y)
            ctx.lineTo(p2.x, p2.y)
            // Opacità proporzionale alla distanza (vicine = più visibili)
            const lineAlpha = (1 - dist / 110) * 0.2
            ctx.strokeStyle = `rgba(${accentRGB}, ${lineAlpha})`
            ctx.lineWidth = 0.5
            ctx.stroke()
          }
        }
      }

      animationFrameId = requestAnimationFrame(render)
    }

    resize()
    render()

    return () => {
      resizeObserver.disconnect()
      cancelAnimationFrame(animationFrameId)
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 z-0 h-full w-full pointer-events-none"
      aria-hidden="true"
    />
  )
}
