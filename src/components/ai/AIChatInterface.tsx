'use client'

import React, { useState, useEffect, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Cpu, PaperPlaneRight, User, Robot, X, ArrowsOut, ChatCircleDots } from '@phosphor-icons/react'
import { SpotlightCard } from '@/components/ui/SpotlightCard'
import { cn } from '@/lib/utils'

interface Message {
  id: string
  text: string
  sender: 'user' | 'ai'
  timestamp: Date
}

interface AIChatInterfaceProps {
  initialContext?: string
  className?: string
}

export function AIChatInterface({ initialContext, className }: AIChatInterfaceProps) {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      text: initialContext 
        ? `Ciao! Sono il Fulgur AI specializzato in ${initialContext}. Come posso approfondire i dettagli tecnici con te oggi?`
        : "Ciao! Sono Fulgur AI, il tuo consulente tecnico. Come posso aiutarti oggi con la pulizia o la manutenzione dei tuoi spazi?",
      sender: 'ai',
      timestamp: new Date(),
    }
  ])
  const [input, setInput] = useState('')
  const [isTyping, setIsTyping] = useState(false)
  const scrollRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight
    }
  }, [messages])

  const handleSend = async () => {
    if (!input.trim() || isTyping) return

    const userMessage: Message = {
      id: Date.now().toString(),
      text: input,
      sender: 'user',
      timestamp: new Date(),
    }

    setMessages((prev) => [...prev, userMessage])
    setInput('')
    setIsTyping(true)

    try {
      const res = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ 
          message: userMessage.text,
          context: initialContext 
        }),
      })

      const data = await res.json()

      const aiMessage: Message = {
        id: (Date.now() + 1).toString(),
        text: data.text || "Mi scusi, ho avuto un piccolo glitch neurale. Può ripetere?",
        sender: 'ai',
        timestamp: new Date(),
      }

      setMessages((prev) => [...prev, aiMessage])
    } catch (error) {
      console.error('AI Chat Error:', error)
      const errorMessage: Message = {
        id: (Date.now() + 1).toString(),
        text: "Spiacente, la mia connessione neurale è temporaneamente interrotta. Riprova tra poco.",
        sender: 'ai',
        timestamp: new Date(),
      }
      setMessages((prev) => [...prev, errorMessage])
    } finally {
      setIsTyping(false)
    }
  }

  return (
    <div className={cn("w-full max-w-2xl mx-auto flex flex-col h-[600px] rounded-3xl overflow-hidden border border-white/10 bg-black/40 backdrop-blur-xl shadow-2xl relative", className)}>
      {/* Header */}
      <div className="p-6 border-b border-white/10 flex items-center justify-between bg-white/[0.02]">
        <div className="flex items-center gap-4">
          <div className="relative">
            <div className="h-10 w-10 rounded-full bg-gradient-to-tr from-[var(--accent)] to-[var(--br-h)] flex items-center justify-center border border-white/20">
              <Robot size={24} weight="fill" className="text-white" />
            </div>
            <div className="absolute bottom-0 right-0 h-3 w-3 rounded-full bg-emerald-500 border-2 border-black" />
          </div>
          <div>
            <h4 className="font-display font-bold text-white text-sm">Fulgur AI</h4>
            <p className="text-[10px] text-[var(--accent)] font-mono-fulgur uppercase tracking-wider">Online · Consulente Tecnico</p>
          </div>
        </div>
        <div className="flex items-center gap-3 text-white/40">
           <ArrowsOut size={20} className="hover:text-white transition-colors cursor-pointer" />
        </div>
      </div>

      {/* Messages Area */}
      <div 
        ref={scrollRef}
        className="flex-grow overflow-y-auto p-6 flex flex-col gap-6 custom-scrollbar"
      >
        <AnimatePresence initial={false}>
          {messages.map((msg) => (
            <motion.div
              key={msg.id}
              initial={{ opacity: 0, x: msg.sender === 'user' ? 20 : -20, y: 10 }}
              animate={{ opacity: 1, x: 0, y: 0 }}
              className={`flex ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}
            >
              <div className={`flex gap-3 max-w-[85%] ${msg.sender === 'user' ? 'flex-row-reverse' : 'flex-row'}`}>
                <div className={`h-8 w-8 rounded-full shrink-0 flex items-center justify-center border border-white/10 ${msg.sender === 'user' ? 'bg-white/5' : 'bg-[var(--accent)]/10 text-[var(--accent)]'}`}>
                  {msg.sender === 'user' ? <User size={16} /> : <Robot size={16} weight="fill" />}
                </div>
                <div className={`p-4 rounded-2xl text-sm leading-relaxed ${
                  msg.sender === 'user' 
                    ? 'bg-white/5 border border-white/10 text-white font-light' 
                    : 'bg-[var(--bg-2)] border border-white/5 text-[var(--tx-2)] font-light'
                }`}>
                  {msg.text}
                </div>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
        
        {isTyping && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="flex justify-start">
            <div className="bg-[var(--bg-2)] border border-white/5 p-4 rounded-2xl flex gap-1">
              <div className="h-1.5 w-1.5 rounded-full bg-[var(--accent)] animate-bounce" style={{ animationDelay: '0ms' }} />
              <div className="h-1.5 w-1.5 rounded-full bg-[var(--accent)] animate-bounce" style={{ animationDelay: '200ms' }} />
              <div className="h-1.5 w-1.5 rounded-full bg-[var(--accent)] animate-bounce" style={{ animationDelay: '400ms' }} />
            </div>
          </motion.div>
        )}
      </div>

      {/* Input Area */}
      <div className="p-6 bg-white/[0.02] border-t border-white/10">
        <form onSubmit={(e) => { e.preventDefault(); handleSend(); }} className="relative">
          <input 
            type="text" 
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Chiedimi della sanificazione HACCP..."
            className="w-full bg-[var(--bg-2)] border border-white/10 rounded-2xl pl-6 pr-14 py-4 text-sm text-white focus:ring-2 focus:ring-[var(--accent)]/50 focus:border-[var(--accent)] outline-none transition-all placeholder:text-white/20"
          />
          <button 
            type="submit"
            disabled={!input.trim() || isTyping}
            className="absolute right-3 top-1/2 -translate-y-1/2 h-10 w-10 rounded-xl bg-[var(--accent)] text-white flex items-center justify-center disabled:opacity-50 hover:scale-105 transition-transform"
          >
            <PaperPlaneRight size={20} weight="fill" />
          </button>
        </form>
        <p className="mt-4 text-center text-[10px] text-white/30 font-sans tracking-wide">
          Basato sulla Neural-RAG di Fulgur Service · Fornisce risposte tecniche verificate.
        </p>
      </div>
    </div>
  )
}
