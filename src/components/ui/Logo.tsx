import React from 'react'
import Image from 'next/image'
import { cn } from '@/lib/utils'

interface LogoProps {
  size?: number
  className?: string
  /** 'default': usa colori brand | 'white': per sfondi scuri */
  variant?: 'default' | 'white'
  /** Se true, mostra solo l'icona del logo (tagliata o centrata) */
  iconOnly?: boolean
}

export function Logo({ size = 40, className = '', variant = 'default', iconOnly = false }: LogoProps) {
  // Il logo ufficiale è in /images/logo-fulgur-service.png
  // Se iconOnly è true, potremmo voler croppare o usare un'altra versione, 
  // ma per ora usiamo la stessa immagine con overflow-hidden se necessario.
  
  return (
    <div 
      className={cn("relative flex items-center justify-center overflow-visible", className)}
      style={{ width: iconOnly ? size : size * 3.8, height: size }}
    >
      <Image
        src="/images/logo-fulgur-service.png"
        alt="Fulgur Service Logo"
        fill
        className={cn(
          "object-contain transition-all duration-300",
          variant === 'white' && "brightness-0 invert",
          "scale-100"
        )}
        priority
      />
    </div>
  )
}

export default Logo
