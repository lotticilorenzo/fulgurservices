'use client'

import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { Clock, Calendar, ArrowRight } from '@phosphor-icons/react'
import { BlogPost } from '@/lib/blog-data'
import { SpotlightCard } from '@/components/ui/SpotlightCard'

interface BlogCardProps {
  post: BlogPost
  index: number
}

export function BlogCard({ post, index }: BlogCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1, duration: 0.5 }}
      className="group"
    >
      <Link href={`/blog/${post.slug}`}>
        <SpotlightCard className="h-full flex flex-col bg-[var(--bg-2)] border border-[var(--br)] rounded-3xl overflow-hidden transition-all duration-500 hover:border-[var(--accent)]/30 hover:shadow-2xl hover:shadow-[var(--accent)]/5">
          {/* Cover Image */}
          <div className="relative aspect-[16/10] overflow-hidden">
            <Image
              src={post.image}
              alt={post.title}
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-110"
            />
            <div className="absolute top-4 left-4 z-10">
              <span className="bg-[var(--bg)]/80 backdrop-blur-md border border-white/10 text-[var(--accent)] text-[10px] font-bold uppercase tracking-widest px-3 py-1.5 rounded-full">
                {post.category}
              </span>
            </div>
          </div>

          {/* Content */}
          <div className="p-6 lg:p-8 flex flex-col flex-grow">
            <div className="flex items-center gap-4 mb-4 text-[var(--tx-3)] font-mono-fulgur text-[10px] uppercase tracking-wider">
              <span className="flex items-center gap-1.5">
                <Calendar size={14} weight="fill" className="text-[var(--accent)]" />
                {post.date}
              </span>
              <span className="flex items-center gap-1.5">
                <Clock size={14} weight="fill" className="text-[var(--accent)]" />
                {post.readTime}
              </span>
            </div>

            <h3 className="font-display text-xl lg:text-2xl font-bold text-[var(--tx-1)] mb-4 leading-tight group-hover:text-[var(--accent)] transition-colors">
              {post.title}
            </h3>

            <p className="font-sans text-sm font-light text-[var(--tx-2)] leading-relaxed line-clamp-3 mb-8">
              {post.excerpt}
            </p>

            <div className="mt-auto flex items-center justify-between">
              <span className="flex items-center gap-2 font-display text-sm font-bold text-[var(--tx-1)] group-hover:translate-x-1 transition-transform">
                Leggi Articolo <ArrowRight size={16} weight="bold" className="text-[var(--accent)]" />
              </span>
              <div className="h-px flex-grow mx-4 bg-[var(--br)]" />
            </div>
          </div>
        </SpotlightCard>
      </Link>
    </motion.div>
  )
}
