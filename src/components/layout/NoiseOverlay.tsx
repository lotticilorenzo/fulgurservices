'use client'

import React from 'react'

/**
 * NoiseOverlay — Texture di rumore visivo sull'intera pagina.
 * FIX VIOL-05:
 *   - SVG spostato su file esterno /images/noise.svg → cachable dal browser
 *   - z-index abbassato da 9999 a 10 (sopra il contenuto ma sotto navbar/modal)
 *   - will-change: auto (nessun layer promotion permanente)
 */
export default function NoiseOverlay() {
  return (
    <div
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 z-10 opacity-[0.025]"
      style={{
        backgroundImage: "url('/images/noise.svg')",
        backgroundRepeat: 'repeat',
        backgroundSize: '128px 128px',
      }}
    />
  )
}
