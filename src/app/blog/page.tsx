import React from 'react'
import type { Metadata } from 'next'
import { METADATA } from '@/lib/seo'
import { BLOG_POSTS } from '@/lib/blog-data'
import { BlogCard } from '@/components/blog/BlogCard'
import { SectionLabel } from '@/components/ui/SectionLabel'
import { CTASection } from '@/components/home/CTASection'

export const metadata: Metadata = {
  title: METADATA.blog.title,
  description: METADATA.blog.description,
  openGraph: METADATA.blog.openGraph,
}

export default function BlogPage() {
  return (
    <main className="min-h-screen bg-[var(--bg)] pt-32 pb-0 sm:pt-40">
      
      {/* HEADER BLOG */}
      <div className="mx-auto w-full max-w-7xl px-6 xl:px-8 mb-20 text-center flex flex-col items-center">
        <SectionLabel className="mb-4">— BLOG & AUTHORITY</SectionLabel>
        <h1 className="font-display text-4xl font-extrabold tracking-tight text-[var(--tx-1)] sm:text-5xl lg:text-7xl max-w-4xl leading-[1.1]">
          Conoscenza al servizio del <span className="text-transparent bg-clip-text bg-gradient-to-r from-[var(--accent)] to-[var(--br-h)]">pulito professionale.</span>
        </h1>
        <p className="mt-8 font-sans text-lg lg:text-xl font-light text-[var(--tx-2)] max-w-2xl leading-relaxed text-balance">
          Approfondimenti tecnici, guide alla manutenzione e le ultime news da <strong>Fulgur Service</strong>, il tuo partner a Parma dalla visione innovativa.
        </p>
      </div>

      {/* POST GRID */}
      <div className="mx-auto w-full max-w-7xl px-6 xl:px-8 mb-32">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {BLOG_POSTS.map((post, idx) => (
            <BlogCard key={post.id} post={post} index={idx} />
          ))}
        </div>

        {/* Empty state protection */}
        {BLOG_POSTS.length === 0 && (
          <div className="text-center py-20 bg-[var(--bg-2)] rounded-[3rem] border border-[var(--br)]">
            <p className="font-sans text-[var(--tx-3)]">Nessun articolo disponibile al momento. Torna a trovarci presto!</p>
          </div>
        )}
      </div>

      <CTASection />
    </main>
  )
}
