'use client'

import React, { useState, useRef, useCallback } from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { ArrowsLeftRight } from '@phosphor-icons/react'

interface BeforeAfterSliderProps {
  beforeImage: string
  afterImage: string
  beforeLabel?: string
  afterLabel?: string
  aspectRatio?: string
  className?: string
}

export function BeforeAfterSlider({
  beforeImage,
  afterImage,
  beforeLabel = 'PRIMA',
  afterLabel = 'DOPO',
  aspectRatio = 'aspect-[16/9]',
  className = '',
}: BeforeAfterSliderProps) {
  const [sliderPosition, setSliderPosition] = useState(50)
  const [isDragging, setIsDragging] = useState(false)
  const [containerWidth, setContainerWidth] = useState<number | undefined>(undefined)
  const containerRef = useRef<HTMLDivElement>(null)

  React.useEffect(() => {
    if (!containerRef.current) return
    const ro = new ResizeObserver((entries) => {
      for (const entry of entries) setContainerWidth(entry.contentRect.width)
    })
    ro.observe(containerRef.current)
    return () => ro.disconnect()
  }, [])

  const handleMove = useCallback((clientX: number) => {
    if (!containerRef.current) return
    const rect = containerRef.current.getBoundingClientRect()
    const x = Math.max(0, Math.min(clientX - rect.left, rect.width))
    const percent = (x / rect.width) * 100
    setSliderPosition(percent)
  }, [])

  const handleMouseDown = useCallback(() => setIsDragging(true), [])
  const handleMouseUp = useCallback(() => setIsDragging(false), [])
  
  const handleMouseMove = useCallback((e: React.MouseEvent) => {
    if (!isDragging) return
    handleMove(e.clientX)
  }, [isDragging, handleMove])

  const handleTouchMove = useCallback((e: React.TouchEvent) => {
    handleMove(e.touches[0].clientX)
  }, [handleMove])

  return (
    <div
      ref={containerRef}
      className={`relative overflow-hidden cursor-ew-resize rounded-3xl border border-white/10 select-none ${aspectRatio} ${className}`}
      onMouseMove={handleMouseMove}
      onMouseDown={handleMouseDown}
      onMouseUp={handleMouseUp}
      onMouseLeave={handleMouseUp}
      onTouchMove={handleTouchMove}
    >
      {/* After Image (Background) */}
      <div className="absolute inset-0">
        <Image
          src={afterImage}
          alt="Dopo il trattamento"
          fill
          className="object-cover object-top"
          draggable={false}
        />
        <div className="absolute bottom-4 right-6 bg-black/50 backdrop-blur-md px-3 py-1 rounded-full text-[10px] font-bold text-white tracking-widest border border-white/10">
          {afterLabel}
        </div>
      </div>

      {/* Before Image (Overlay) */}
      <motion.div
        className="absolute inset-0 overflow-hidden"
        style={{ width: `${sliderPosition}%` }}
      >
        <div className="absolute inset-0 w-[100vw] h-full h-full pointer-events-none">
          {/* We use a fixed width container for the inner image to prevent squashing */}
          <div className={`relative h-full ${aspectRatio}`} style={{ width: containerWidth }}>
            <Image
              src={beforeImage}
              alt="Prima del trattamento"
              fill
              className="object-cover object-top"
              draggable={false}
            />
          </div>
        </div>
        <div className="absolute bottom-4 left-6 bg-black/50 backdrop-blur-md px-3 py-1 rounded-full text-[10px] font-bold text-[var(--accent)] tracking-widest border border-[var(--accent)]/30">
          {beforeLabel}
        </div>
      </motion.div>

      {/* Slider Handle */}
      <div
        className="absolute inset-y-0 z-20 group"
        style={{ left: `${sliderPosition}%` }}
      >
        <div className="absolute inset-y-0 -left-px w-0.5 bg-gradient-to-b from-transparent via-[var(--accent)] to-transparent" />
        
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex h-10 w-10 items-center justify-center rounded-full bg-[var(--accent)] text-white shadow-[0_0_20px_var(--accent)] transition-transform group-hover:scale-110 active:scale-95 border-2 border-white/20">
          <ArrowsLeftRight size={20} weight="bold" />
        </div>

        {/* Shine effect on handle */}
        <div className="absolute top-0 bottom-0 left-1/2 -translate-x-1/2 w-[40px] bg-gradient-to-r from-transparent via-[var(--accent)]/10 to-transparent pointer-events-none" />
      </div>
    </div>
  )
}
