'use client'

import { useEffect, useState, useRef } from 'react'
import {
  useScroll,
  useTransform,
  useMotionValueEvent,
} from 'framer-motion'

interface UseScrollVideoScrubOptions {
  /**
   * Total height of the scroll section. Default is 800vh.
   */
  totalVh?: number
}

/**
 * Custom hook che sfrutta le ottimizzazioni in C++ (via Wasm) di Framer Motion
 * per uno scrubbing del video "burroso" al 100%. Calcola il progresso basandosi su
 * `useScroll`, lo taglia all'85% per creare il buffer statico finale, e infine
 * applica un modello fisico a molla (`useSpring`) per muovere silenziosamente il tempo del video.
 *
 * Evita performance drop su mobile disattivando tutto e restituendo `isMobile = true`.
 */
export function useScrollVideoScrub(
  sectionRef: React.RefObject<HTMLDivElement | null>,
  videoRef: React.RefObject<HTMLVideoElement | null>,
  _opts: UseScrollVideoScrubOptions = {}
) {
  const [progress, setProgress] = useState(0)
  const [isMobile, setIsMobile] = useState(false)

  // Rilevamento media query per mobile
  useEffect(() => {
    const mq = window.matchMedia('(max-width: 768px)')
    const initT = setTimeout(() => setIsMobile(mq.matches), 0)
    const handler = (e: MediaQueryListEvent) => setIsMobile(e.matches)
    mq.addEventListener('change', handler)
    return () => {
      clearTimeout(initT)
      mq.removeEventListener('change', handler)
    }
  }, [])

  // 1. Lettura pura e priva di attrito dello scroll lungo il target (section)
  // `offset: ['start start', 'end end']` significa 0 quando la cima entra, 1 quando il fondo esce.
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start start', 'end end'],
  })

  // 2. Buffer dell'85%: Il valore crudo arriva ad 1 prima che la section sia finita,
  // così l'ultimo 15% di scroll rimane sull'ultimo frame.
  const bufferedProgress = useTransform(scrollYProgress, [0, 0.85], [0, 1], {
    clamp: true,
  })

  // 4. Per la UI (es. barra di caricamento, capitoli), teniamo lo stato reattivo sincronizzato
  useMotionValueEvent(bufferedProgress, 'change', (latest) => {
    setProgress(latest)
  })

  // 5. Disaccoppiamento per performance (Bypass the Video Decoder bottleneck):
  const targetTime = useRef(0)
  useMotionValueEvent(bufferedProgress, 'change', (latest) => {
    if (isMobile) return
    const video = videoRef.current
    if (video && video.duration) {
      targetTime.current = latest * video.duration
    }
  })

  // ...e applichiamo il `currentTime` al video DOM solo se NON sta già decodificando (seeking).
  // Questo previene scatti violenti (stutter) quando il file MP4 è complesso o ha pochi keyframe.
  useEffect(() => {
    if (isMobile) return
    const video = videoRef.current
    if (!video) return

    // Assicuriamo il corretto pre-loading logico all'inizio
    video.currentTime = 0

    let rafId: number
    let currentLerp = 0
    const lerpFactor = 0.1 // Smorzamento inerziale della testina

    const renderLoop = () => {
      // 1. Calcolo matematico disaccoppiato dal decoder (Insegue targetTime)
      currentLerp += (targetTime.current - currentLerp) * lerpFactor

      if (video.readyState >= 2) {
        // 2. Controllo scostamento reale
        const diff = Math.abs(video.currentTime - currentLerp)
        if (!video.seeking && diff > 0.01) {
          video.currentTime = currentLerp
        }
      }
      rafId = requestAnimationFrame(renderLoop)
    }

    rafId = requestAnimationFrame(renderLoop)
    return () => cancelAnimationFrame(rafId)
  }, [isMobile, videoRef])

  return { progress, isMobile }
}
