'use client'

import { usePathname } from 'next/navigation'
import dynamic from 'next/dynamic'

// Each import is a separate code-split chunk — not included in the initial JS bundle
const LenisProvider = dynamic(
  () => import('@/components/layout/LenisProvider').then((m) => ({ default: m.LenisProvider })),
  { ssr: false }
)
const CustomCursor = dynamic(
  () => import('@/components/ui/CustomCursor').then((m) => ({ default: m.CustomCursor })),
  { ssr: false }
)
const IntroLoader = dynamic(
  () => import('@/components/ui/IntroLoader').then((m) => ({ default: m.IntroLoader })),
  { ssr: false }
)
const FloatingActions = dynamic(
  () => import('@/components/ui/FloatingActions').then((m) => ({ default: m.FloatingActions })),
  { ssr: false }
)
const ChatWidgetLoader = dynamic(() => import('@/components/ai/ChatWidgetLoader'), { ssr: false })

export function SiteOnlyComponents() {
  const pathname = usePathname()
  if (pathname.startsWith('/lp')) return null
  return (
    <>
      <LenisProvider />
      <CustomCursor />
      <IntroLoader />
      <FloatingActions />
      <ChatWidgetLoader />
    </>
  )
}
