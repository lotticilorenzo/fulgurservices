'use client'

import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { createPortal } from 'react-dom'
import { QRCodeSVG } from 'qrcode.react'
import { X } from '@phosphor-icons/react'

interface WhatsAppHybridLinkProps {
  href: string
  children: React.ReactNode
  className?: string
  target?: string
  rel?: string
  'aria-label'?: string
}

export function WhatsAppHybridLink({ href, children, className, target, rel, 'aria-label': ariaLabel }: WhatsAppHybridLinkProps) {
  const [isMobile, setIsMobile] = useState(true) // Default true for hydration matching, then precise check
  const [showModal, setShowModal] = useState(false)
  const [isMounted, setIsMounted] = useState(false)

  useEffect(() => {
    setIsMounted(true)
    const checkMobile = () => {
      const userAgent = navigator.userAgent || navigator.vendor || (window as any).opera
      return /android|webos|iphone|ipad|ipod|blackberry|iemobile|opera mini/i.test(userAgent.toLowerCase()) || window.innerWidth <= 768
    }
    setIsMobile(checkMobile())
    
    // Lock body text scroll when modal open
    if (showModal) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    
    return () => { document.body.style.overflow = '' }
  }, [showModal])

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (!isMobile) {
      e.preventDefault()
      setShowModal(true)
    }
    // if mobile, we let the standard href execute and open the app natively
  }

  return (
    <>
      <a 
        href={href} 
        onClick={isMobile ? undefined : handleClick} 
        className={className} 
        target={isMobile ? "_self" : (target || undefined)}
        rel={rel || (isMobile ? "noopener noreferrer" : undefined)}
        aria-label={ariaLabel}
      >
        {children}
      </a>

      {isMounted && createPortal(
        <AnimatePresence>
          {showModal && (
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-[99999] flex items-center justify-center bg-[#0D1117]/80 backdrop-blur-md p-4"
              onClick={() => setShowModal(false)}
            >
              <motion.div
                initial={{ opacity: 0, scale: 0.95, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95, y: 20 }}
                transition={{ type: 'spring', damping: 25, stiffness: 300 }}
                onClick={(e) => e.stopPropagation()}
                className="bg-[#161B24] border border-[#2A8C7A]/20 rounded-[2rem] p-8 sm:p-12 max-w-sm w-full shadow-2xl relative flex flex-col items-center text-center"
              >
                <button 
                  onClick={() => setShowModal(false)}
                  className="absolute top-5 right-5 p-2 text-[#8A9BAE] hover:text-white hover:bg-white/5 transition-colors rounded-full"
                  aria-label="Chiudi modale WhatsApp"
                >
                  <X size={24} weight="bold" />
                </button>
                
                <div className="w-16 h-16 rounded-2xl bg-[#25D366]/10 text-[#25D366] flex items-center justify-center mb-6 shadow-inner border border-[#25D366]/20">
                  <svg width="32" height="32" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                     <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347Zm-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884Zm8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z" />
                  </svg>
                </div>

                <h3 className="font-display text-2xl font-bold text-white mb-3 text-balance">
                  Inquadra per chattare
                </h3>
                <p className="font-sans text-[#8A9BAE] text-[15px] leading-relaxed mb-8 text-balance">
                  Scansiona questo QR code con la fotocamera del tuo telefono per aprire WhatsApp e inviarci il messaggio.
                </p>

                <div className="p-5 bg-white rounded-[1.25rem] shadow-xl border-4 border-white">
                  <QRCodeSVG value={href} size={200} level="H" includeMargin={false} />
                </div>
                
                <div className="mt-8 flex flex-col items-center gap-1 opacity-60">
                  <span className="text-[10px] text-white font-mono uppercase tracking-[0.25em]">Fulgur Service Parma</span>
                  <span className="text-[10px] text-white/50 font-sans tracking-wide">Assistenza Immediata</span>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>,
        document.body
      )}
    </>
  )
}
