import React from 'react'
import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { BLOG_POSTS } from '@/lib/blog-data'
import { makeBlogPostJsonLd, makeBreadcrumbsJsonLd } from '@/lib/seo'
import { Calendar, Clock, ArrowLeft, User } from '@phosphor-icons/react/dist/ssr'
import { CTASection } from '@/components/home/CTASection'
import { ScrollReveal } from '@/components/ui/ScrollReveal'

const BASE_URL = 'https://www.fulgurservice.it'
const OG_DEFAULT = `${BASE_URL}/og/default.jpg`

export async function generateStaticParams() {
  return BLOG_POSTS.map((post) => ({ slug: post.slug }))
}

export async function generateMetadata(props: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const params = await props.params
  const post = BLOG_POSTS.find((p) => p.slug === params.slug)
  if (!post) return {}

  return {
    title: `${post.title} | Blog Fulgur Service`,
    description: post.excerpt,
    keywords: post.keywords,
    alternates: {
      canonical: `${BASE_URL}/blog/${post.slug}`,
    },
    openGraph: {
      title: post.title,
      description: post.excerpt,
      url: `${BASE_URL}/blog/${post.slug}`,
      siteName: 'Fulgur Service',
      images: [{ url: post.image || OG_DEFAULT, width: 1200, height: 630, alt: post.imageAlt || post.title }],
      locale: 'it_IT',
      type: 'article',
    },
    twitter: {
      card: 'summary_large_image',
      title: post.title,
      description: post.excerpt,
      images: [post.image || OG_DEFAULT],
    },
  }
}

export default async function BlogPostPage(props: { params: Promise<{ slug: string }> }) {
  const params = await props.params
  const post = BLOG_POSTS.find((p) => p.slug === params.slug)

  if (!post) notFound()

  const blogJsonLd = makeBlogPostJsonLd(post)
  const breadcrumbsJsonLd = makeBreadcrumbsJsonLd([
    { name: 'Home', item: '/' },
    { name: 'Blog', item: '/blog' },
    { name: post.title, item: `/blog/${post.slug}` },
  ])

  return (
    <main className="bg-[var(--bg)] min-h-[100dvh] pt-32 sm:pt-40">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(blogJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbsJsonLd) }}
      />
      <article>

        {/* Post Header */}
        <header className="mx-auto w-full max-w-4xl px-6 lg:px-8 mb-16">
          <ScrollReveal>
            <div className="mb-8">
              <Link 
                href="/blog" 
                className="inline-flex items-center gap-2 text-xs font-mono-fulgur font-bold uppercase tracking-widest text-[var(--tx-3)] hover:text-[var(--accent)] transition-colors"
              >
                <ArrowLeft size={14} /> Torna al Blog
              </Link>
            </div>
            
            <div className="flex flex-wrap items-center gap-4 mb-6">
              <span className="bg-[var(--accent)]/10 text-[var(--accent)] px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-widest border border-[var(--accent)]/20 shadow-[0_0_15px_rgba(78,203,160,0.1)]">
                {post.category}
              </span>
              <div className="flex items-center gap-4 text-[var(--tx-3)] font-mono-fulgur text-[10px] uppercase tracking-wider">
                <span className="flex items-center gap-1.5"><Calendar size={14} weight="bold" /> {post.date}</span>
                <span className="flex items-center gap-1.5"><Clock size={14} weight="bold" /> {post.readTime}</span>
              </div>
            </div>

            <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-black text-[var(--tx-1)] leading-[1.05] tracking-tight mb-8">
              {post.title}
            </h1>

            <p className="font-sans text-xl font-light text-[var(--tx-2)] leading-relaxed italic border-l-2 border-[var(--accent)] pl-6">
              {post.excerpt}
            </p>
          </ScrollReveal>
        </header>

        {/* Featured Image */}
        <div className="mx-auto w-full max-w-7xl px-6 lg:px-8 mb-20">
          <ScrollReveal>
             <div className="relative aspect-[21/9] rounded-[2rem] sm:rounded-[3rem] overflow-hidden border border-[var(--br)] shadow-2xl">
                <Image
                  src={post.image}
                  alt={post.imageAlt || post.title}
                  fill
                  className="object-cover"
                  priority
                />
                <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-black/60 to-transparent" />
             </div>
          </ScrollReveal>
        </div>

        {/* Content Body */}
        <div className="mx-auto w-full max-w-3xl px-6 lg:px-8 mb-32">
          <ScrollReveal>
            <div 
              className="prose prose-invert prose-emerald max-w-none 
                prose-headings:font-display prose-headings:font-bold prose-headings:tracking-tight prose-headings:text-[var(--tx-1)]
                prose-p:font-sans prose-p:font-light prose-p:text-lg prose-p:leading-relaxed prose-p:text-[var(--tx-2)]
                prose-li:font-sans prose-li:font-light prose-li:text-[var(--tx-2)]
                prose-blockquote:border-[var(--accent)] prose-blockquote:bg-[var(--bg-2)] prose-blockquote:rounded-2xl prose-blockquote:py-4 prose-blockquote:px-8 prose-blockquote:italic
                prose-strong:text-[var(--tx-1)] prose-strong:font-bold
                prose-a:text-[var(--accent)] prose-a:no-underline hover:prose-a:underline
              "
              dangerouslySetInnerHTML={{ __html: post.content }}
            />
            
            {/* Tags & Meta Footer */}
            <div className="mt-20 pt-10 border-t border-[var(--br)] flex flex-wrap items-center justify-between gap-8">
              <div className="flex flex-wrap gap-2">
                {post.keywords.map((kw) => (
                  <span key={kw} className="text-[10px] font-mono-fulgur uppercase tracking-widest text-[var(--tx-3)] bg-[var(--bg-2)] border border-[var(--br)] px-3 py-1.5 rounded-lg">
                    #{kw.replace(/ /g, '')}
                  </span>
                ))}
              </div>
              <div className="flex items-center gap-4 text-sm text-[var(--tx-2)] font-sans">
                <div className="flex items-center gap-2">
                  <User size={18} className="text-[var(--accent)]" /> 
                  <span>Articolo a cura di {post.author}</span>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </article>

      <CTASection />
    </main>
  )
}
