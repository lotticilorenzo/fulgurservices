'use client'

import { useEffect, useState, useRef } from 'react'
import {
  useScroll,
  useTransform,
  useSpring,
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
    setIsMobile(mq.matches)
    const handler = (e: MediaQueryListEvent) => setIsMobile(e.matches)
    mq.addEventListener('change', handler)
    return () => mq.removeEventListener('change', handler)
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

  // 3. Modello fisico perfetto: assorbe gli scatti bruschi della rotellina del mouse (wheel events)
  // e li trasforma in curve matematiche accelerate o decelerate.
  const smoothProgress = useSpring(bufferedProgress, {
    stiffness: 80, // Quanto "rigida" è la molla (più bassa = più fluida ma lenta)
    damping: 25, // Quanta frizione (previene il bouncing)
    restDelta: 0.0001, // Precisione per millisecondo
  })

  // 4. Per la UI (es. barra di caricamento, capitoli), teniamo lo stato reattivo sincronizzato:
  // Questo aggiorna i testi e i "pallini" all'istante (mentre il video continua dolcemente dietro)
  useMotionValueEvent(bufferedProgress, 'change', (latest) => {
    setProgress(latest)
  })

  // 5. Disaccoppiamento per performance (Bypass the Video Decoder bottleneck):
  // Aggiorniamo solo un ref quando useSpring cambia...
  const targetTime = useRef(0)
  useMotionValueEvent(smoothProgress, 'change', (latest) => {
    // Note: Scrubber abilited on mobile as well!
    const video = videoRef.current
    if (video && video.duration) {
      targetTime.current = latest * video.duration
    }
  })

  // ...e applichiamo il `currentTime` al video DOM solo se NON sta già decodificando (seeking).
  // Questo previene scatti violenti (stutter) quando il file MP4 è complesso o ha pochi keyframe.
  useEffect(() => {
    // Note: renderLoop active on mobile!
    const video = videoRef.current
    if (!video) return

    let rafId: number

    const renderLoop = () => {
      if (video.readyState >= 2) {
        // Se dobbiamo muovere il video, e il decoder ha finito il lavoro precedente:
        const diff = Math.abs(video.currentTime - targetTime.current)
        if (!video.seeking && diff > 0.02) {
          video.currentTime = targetTime.current
        }
      }
      rafId = requestAnimationFrame(renderLoop)
    }

    rafId = requestAnimationFrame(renderLoop)
    return () => cancelAnimationFrame(rafId)
  }, [isMobile, videoRef])

  return { progress, isMobile }
}
