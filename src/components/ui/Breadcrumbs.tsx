'use client'

import React from 'react'
import Link from 'next/link'
import { CaretRight, House } from '@phosphor-icons/react'
import { motion } from 'framer-motion'

interface BreadcrumbItem {
  label: string
  href: string
  active?: boolean
}

interface BreadcrumbsProps {
  items: BreadcrumbItem[]
  className?: string
}

export function Breadcrumbs({ items, className = '' }: BreadcrumbsProps) {
  return (
    <nav 
      aria-label="Breadcrumb" 
      className={`flex items-center space-x-2 font-mono-fulgur text-[9px] sm:text-[10px] uppercase tracking-widest ${className}`}
    >
      <div className="flex items-center">
        <Link 
          href="/" 
          className="flex items-center gap-1.5 text-[var(--tx-3)] hover:text-[var(--accent)] transition-colors"
          title="Torna alla Home"
        >
          <House size={12} weight="duotone" className="text-[var(--accent)]" />
          <span className="hidden sm:inline">Home</span>
        </Link>
      </div>

      {items.map((item, index) => (
        <div key={item.href} className="flex items-center space-x-2">
          <CaretRight size={8} weight="bold" className="text-[var(--br)]" />
          {item.active ? (
            <span className="text-[var(--accent)] font-bold decoration-[var(--accent)] underline-offset-4 decoration-1">
              {item.label}
            </span>
          ) : (
            <Link 
              href={item.href}
              className="text-[var(--tx-3)] hover:text-[var(--accent)] transition-all"
            >
              {item.label}
            </Link>
          )}
        </div>
      ))}
    </nav>
  )
}
