'use client'

import dynamic from 'next/dynamic'
import { useEffect, useState } from 'react'

// Code-split: il bundle di ChatWidget non viene incluso nell'initial JS
const ChatWidget = dynamic(() => import('./ChatWidget'), { ssr: false })

// Estensione window per requestIdleCallback (non in tutti i TS lib)
type WindowWithIdle = Window & {
  requestIdleCallback?: (cb: () => void, opts?: { timeout: number }) => number
  cancelIdleCallback?: (id: number) => void
}

export default function ChatWidgetLoader() {
  const [shouldLoad, setShouldLoad] = useState(false)

  useEffect(() => {
    const w = window as WindowWithIdle
    if (w.requestIdleCallback) {
      const id = w.requestIdleCallback(() => setShouldLoad(true), { timeout: 3000 })
      return () => w.cancelIdleCallback?.(id)
    }
    // Fallback per Safari (no requestIdleCallback)
    const t = setTimeout(() => setShouldLoad(true), 2500)
    return () => clearTimeout(t)
  }, [])

  return shouldLoad ? <ChatWidget /> : null
}
