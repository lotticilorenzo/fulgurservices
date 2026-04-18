'use client'

import React, { useState, useRef, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChatCircleDots, X, PaperPlaneTilt, Robot, WarningCircle, ArrowClockwise } from '@phosphor-icons/react'
import { cn } from '@/lib/utils'

interface Message {
  role: 'user' | 'assistant'
  content: string
}

// Stesso pattern del server | strip il tag [LEAD:{...}] dal testo visualizzato
const LEAD_STRIP_RE = /\[LEAD:\{[^}]+\}\]/g

// SSE packet inviato dalla route
type SsePacket = { t: string } | { lead: Record<string, string> }

const QUICK_CHIPS = ['Preventivo uffici', 'Pulizia pannelli fotovoltaici', 'Igiene Sanitaria']

export default function ChatWidget() {
  const [isOpen, setIsOpen] = useState(false)
  const [messages, setMessages] = useState<Message[]>([])
  const [input, setInput] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  // Contenuto che si accumula token per token durante lo streaming
  const [streamingContent, setStreamingContent] = useState('')
  const [error, setError] = useState<string | null>(null)

  const scrollRef = useRef<HTMLDivElement>(null)
  const abortRef = useRef<AbortController | null>(null)

  // Ascolto toggle esterno (es. dal FloatingActions)
  useEffect(() => {
    const handleToggle = () => setIsOpen(prev => !prev)
    window.addEventListener('toggle-fulgur-ai', handleToggle)
    return () => window.removeEventListener('toggle-fulgur-ai', handleToggle)
  }, [])

  // Auto-scroll al fondo ad ogni nuovo contenuto
  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight
    }
  }, [messages, streamingContent, isLoading, isOpen])

  // Abort request in-flight se il componente viene smontato
  useEffect(() => {
    return () => { abortRef.current?.abort() }
  }, [])

  // ── Core send function ─────────────────────────────────────────────────
  const sendMessage = async (content: string) => {
    if (!content.trim() || isLoading) return

    const userMessage: Message = { role: 'user', content: content.trim() }
    const updatedMessages = [...messages, userMessage]

    setMessages(updatedMessages)
    setInput('')
    setIsLoading(true)
    setStreamingContent('')
    setError(null)

    abortRef.current?.abort()
    abortRef.current = new AbortController()

    let rawAccumulated = ''

    try {
      const response = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ messages: updatedMessages }),
        signal: abortRef.current.signal,
      })

      if (!response.ok || !response.body) {
        const errData = await response.json().catch(() => ({})) as { error?: string }
        throw new Error(errData.error ?? 'Servizio non disponibile. Riprova più tardi.')
      }

      // ── Lettura stream SSE ──────────────────────────────────────────────
      const reader = response.body.getReader()
      const decoder = new TextDecoder()
      let lineBuffer = ''
      let isDone = false

      while (!isDone) {
        const { done, value } = await reader.read()
        if (done) break

        // lineBuffer gestisce righe spezzate tra chunk successivi
        lineBuffer += decoder.decode(value, { stream: true })
        const lines = lineBuffer.split('\n')
        lineBuffer = lines.pop() ?? ''

        for (const line of lines) {
          if (!line.startsWith('data: ')) continue
          const data = line.slice(6).trim()

          if (data === '[DONE]') {
            isDone = true
            break
          }

          try {
            const packet = JSON.parse(data) as SsePacket
            if ('t' in packet) {
              rawAccumulated += packet.t
              // Strip il marker lead prima di mostrare a video
              setStreamingContent(rawAccumulated.replace(LEAD_STRIP_RE, '').trim())
            }
            // Il pacchetto { lead } è gestito server-side (webhook).
            // Non serve azione UI aggiuntiva | il testo dell'AI conferma all'utente.
          } catch {
            // chunk SSE malformato — skip
          }
        }
      }

      // Finalizza: sposta il contenuto streaming nei messaggi permanenti
      const finalContent = rawAccumulated.replace(LEAD_STRIP_RE, '').trim()
      if (finalContent) {
        setMessages(prev => [...prev, { role: 'assistant', content: finalContent }])
      }
    } catch (err: unknown) {
      if (err instanceof Error && err.name === 'AbortError') return
      setError(err instanceof Error ? err.message : 'Errore di connessione')
    } finally {
      setIsLoading(false)
      setStreamingContent('')
    }
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    void sendMessage(input)
  }

  const resetChat = () => {
    abortRef.current?.abort()
    setMessages([])
    setStreamingContent('')
    setError(null)
    setIsLoading(false)
  }

  const isTyping = isLoading || streamingContent !== ''

  return (
    <div className="fixed z-[9999] font-sans pointer-events-none inset-0 sm:inset-auto sm:bottom-24 sm:right-6">
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 100, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 100, scale: 0.95 }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className={cn(
              "chat-widget-panel flex flex-col overflow-hidden pointer-events-auto shadow-2xl border border-white/10 backdrop-blur-xl bg-[#161B24]/95",
              "fixed inset-x-0 bottom-0 h-[85dvh] rounded-t-[2.5rem]",
              "sm:relative sm:inset-auto sm:w-[380px] sm:h-[600px] sm:rounded-2xl sm:border-white/5"
            )}
          >
            {/* Header */}
            <div className="p-5 border-b border-white/10 bg-gradient-to-r from-[#2A8C7A]/20 to-transparent flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="relative">
                  <div className="w-10 h-10 rounded-full bg-[#2A8C7A] flex items-center justify-center shadow-lg shadow-[#2A8C7A]/20">
                    <Robot size={24} weight="fill" className="text-white" />
                  </div>
                  <span className="absolute -bottom-0.5 -right-0.5 w-3 h-3 rounded-full bg-[#4ECBA0] border-2 border-[#161B24]" />
                </div>
                <div>
                  <h3 className="text-[#F0F4F2] font-display font-bold text-base leading-tight">Fulgur AI</h3>
                  <div className="flex items-center gap-1.5">
                    <span className="text-[#4ECBA0] text-[10px] uppercase tracking-widest font-mono font-bold animate-pulse">Online</span>
                    <span className="text-white/20 text-[10px]">•</span>
                    <span className="text-[#8A9BAE] text-[10px] uppercase tracking-widest font-mono">Specialista</span>
                  </div>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <button
                  onClick={resetChat}
                  className="p-2 hover:bg-white/5 rounded-full text-[#8A9BAE] transition-colors"
                  aria-label="Reset chat"
                >
                  <ArrowClockwise size={20} />
                </button>
                <button
                  onClick={() => setIsOpen(false)}
                  className="p-2 hover:bg-white/5 rounded-full text-[#F0F4F2] transition-colors"
                  aria-label="Chiudi chat"
                >
                  <X size={24} weight="bold" />
                </button>
              </div>
            </div>

            {/* Messaggi */}
            <div
              ref={scrollRef}
              className="flex-1 overflow-y-auto p-5 space-y-6 scroll-smooth custom-scrollbar"
            >
              {/* Schermata di benvenuto | visibile solo se non ci sono messaggi e non sta scrivendo */}
              {messages.length === 0 && !isTyping && (
                <div className="h-full flex flex-col items-center justify-center text-center p-6 space-y-6">
                  <motion.div
                    initial={{ scale: 0.8, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    className="w-20 h-20 rounded-[2.5rem] bg-gradient-to-br from-[#4ECBA0]/20 to-transparent border border-[#4ECBA0]/20 flex items-center justify-center shadow-inner"
                  >
                    <ChatCircleDots size={44} weight="duotone" className="text-[#4ECBA0]" />
                  </motion.div>
                  <div className="space-y-3">
                    <h4 className="text-[#F0F4F2] font-display text-xl font-bold">In cosa posso aiutarla?</h4>
                    <p className="text-[#8A9BAE] text-sm leading-relaxed font-light max-w-[240px] mx-auto">
                      Sono a sua disposizione per preventivi, informazioni tecniche e assistenza sui servizi Fulgur.
                    </p>
                  </div>
                  {/* Quick chips | clic = auto-submit immediato */}
                  <div className="flex flex-wrap gap-2 justify-center pt-4">
                    {QUICK_CHIPS.map((chip, idx) => (
                      <motion.button
                        key={chip}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 * idx }}
                        onClick={() => void sendMessage(chip)}
                        className="px-4 py-2.5 rounded-xl bg-white/5 border border-white/5 text-[#F0F4F2] text-xs font-medium hover:bg-[#4ECBA0]/10 hover:border-[#4ECBA0]/30 transition-all active:scale-95"
                      >
                        {chip}
                      </motion.button>
                    ))}
                  </div>
                </div>
              )}

              {/* Messaggi finalizzati */}
              {messages.map((msg, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className={cn('flex flex-col gap-1.5', msg.role === 'user' ? 'items-end' : 'items-start')}
                >
                  <div className={cn(
                    'max-w-[85%] p-4 rounded-2xl text-[14px] leading-relaxed shadow-sm',
                    msg.role === 'user'
                      ? 'bg-[#2A8C7A] text-white rounded-tr-none font-medium shadow-lg shadow-[#2A8C7A]/10'
                      : 'bg-[#F0F4F2] text-[#1A1A2E] rounded-tl-none font-medium shadow-md'
                  )}>
                    {msg.content}
                  </div>
                  <span className="text-[10px] text-[var(--tx-3)] font-mono uppercase tracking-widest px-1">
                    {msg.role === 'user' ? 'Lei' : 'Fulgur AI'}
                  </span>
                </motion.div>
              ))}

              {/* Bolla di streaming | mostra dots finché non arriva il primo token */}
              {isTyping && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="flex flex-col items-start gap-1.5"
                >
                  <div className="max-w-[85%] p-4 rounded-2xl bg-[#F0F4F2] text-[#1A1A2E] rounded-tl-none font-medium shadow-md text-[14px] leading-relaxed min-w-[200px]">
                    {streamingContent ? (
                      <span>{streamingContent}</span>
                    ) : (
                      <div className="flex flex-col gap-2.5 py-0.5">
                        {([88, 72, 50] as const).map((w, i) => (
                          <motion.div
                            key={i}
                            className="h-2.5 rounded-full bg-[#2A8C7A]/20"
                            style={{ width: `${w}%` }}
                            animate={{ opacity: [0.4, 0.9, 0.4] }}
                            transition={{ repeat: Infinity, duration: 1.4, delay: i * 0.18, ease: 'easeInOut' }}
                          />
                        ))}
                      </div>
                    )}
                  </div>
                  <span className="text-[10px] text-[var(--tx-3)] font-mono uppercase tracking-widest px-1">
                    Fulgur AI
                  </span>
                </motion.div>
              )}

              {error && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="p-4 rounded-2xl bg-red-500/10 border border-red-500/20 text-red-400 text-xs flex items-center gap-3"
                >
                  <WarningCircle size={20} weight="bold" />
                  <p>{error}</p>
                </motion.div>
              )}
            </div>

            {/* Input */}
            <div className="p-5 bg-[#0D1117] border-t border-white/10 shrink-0 pb-[env(safe-area-inset-bottom,2rem)] sm:pb-6">
              <form onSubmit={handleSubmit} className="relative flex items-center gap-3">
                <input
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  placeholder="Scriva qui la sua domanda..."
                  className="flex-1 bg-white/5 border border-white/10 rounded-2xl px-5 py-4 text-[15px] text-[#F0F4F2] placeholder-[#4A5568] focus:outline-none focus:border-[#4ECBA0]/50 transition-all"
                  disabled={isLoading}
                />
                <button
                  type="submit"
                  disabled={!input.trim() || isLoading}
                  aria-label="Invia messaggio"
                  className={cn(
                    'h-[52px] w-[52px] rounded-2xl transition-all flex-shrink-0 flex items-center justify-center',
                    input.trim() && !isLoading
                      ? 'bg-[#2A8C7A] text-white shadow-lg shadow-[#2A8C7A]/30 hover:bg-[#4ECBA0] active:scale-95'
                      : 'bg-white/5 text-[#4A5568]'
                  )}
                >
                  <PaperPlaneTilt size={24} weight="fill" />
                </button>
              </form>
              <div className="mt-4 flex items-center justify-center gap-2 opacity-30 select-none grayscale">
                <Robot size={12} />
                <span className="text-[9px] uppercase tracking-[0.2em] font-mono">DeepSeek Powered Assistant</span>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}
