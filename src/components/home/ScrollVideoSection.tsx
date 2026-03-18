'use client'

import { useEffect, useRef } from 'react'

export function ScrollVideoSection() {
  const sectionRef = useRef<HTMLDivElement>(null)
  const videoRef   = useRef<HTMLVideoElement>(null)

  useEffect(() => {
    const video   = videoRef.current
    const section = sectionRef.current
    if (!video || !section) return

    let rafId      = 0
    let targetTime = 0
    let dirty      = false   // only seek when scroll has changed

    const onScroll = () => {
      const sectionTop    = section.offsetTop
      const sectionHeight = section.offsetHeight   // 1000vh
      const viewportH     = window.innerHeight
      const scrollable    = sectionHeight - viewportH

      const progress = Math.min(
        Math.max((window.scrollY - sectionTop) / scrollable, 0),
        1
      )
      targetTime = progress * video.duration
      dirty = true
    }

    // Rate-limit seeks to one per animation frame — avoids queuing multiple
    // seeks before the browser can decode the next frame.
    const tick = () => {
      if (dirty && video.readyState >= 2) {
        video.currentTime = targetTime
        dirty = false
      }
      rafId = requestAnimationFrame(tick)
    }

    const start = () => {
      onScroll()
      rafId = requestAnimationFrame(tick)
      window.addEventListener('scroll', onScroll, { passive: true })
    }

    if (video.readyState >= 1) {
      start()
    } else {
      video.addEventListener('loadedmetadata', start, { once: true })
    }

    return () => {
      cancelAnimationFrame(rafId)
      window.removeEventListener('scroll', onScroll)
    }
  }, [])

  return (
    <div
      ref={sectionRef}
      style={{ height: '1000vh' }}
      className="relative"
    >
      <div className="sticky top-0 h-screen w-full overflow-hidden bg-black">
        <video
          ref={videoRef}
          src="/videos/dasporcoapulito_scrub.mp4"
          muted
          playsInline
          preload="auto"
          disablePictureInPicture
          style={{
            position: 'absolute',
            inset: 0,
            width: '100%',
            height: '100%',
            objectFit: 'cover',
          }}
        />
      </div>
    </div>
  )
}
