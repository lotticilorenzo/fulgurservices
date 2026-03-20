import React from 'react'

export default function LoadingSlug() {
  return (
    <main className="bg-[var(--bg)] min-h-[100dvh] pt-32 sm:pt-40">
      
      {/* BREADCRUMBS SKELETON */}
      <div className="mx-auto w-full max-w-4xl px-6 xl:px-8 mb-8">
        <div className="h-4 w-48 bg-[#12151E] rounded animate-pulse" />
      </div>

      {/* HERO SKELETON */}
      <div className="mx-auto w-full max-w-4xl px-6 xl:px-8 mb-20">
        <div className="h-20 w-20 rounded-2xl bg-[#12151E] animate-pulse mb-8" />
        <div className="h-16 w-3/4 bg-[#12151E] rounded-xl animate-pulse mb-6" />
        <div className="h-8 w-2/3 bg-[#12151E] rounded animate-pulse mb-2" />
        <div className="h-8 w-1/2 bg-[#12151E] rounded animate-pulse" />
      </div>

      <div className="w-full bg-[var(--bg-2)] border-t border-[var(--br)] py-20">
        <div className="mx-auto w-full max-w-4xl px-6 xl:px-8">
          <div className="grid grid-cols-1 md:grid-cols-[2fr_1fr] gap-16">
            
            {/* LATO SINISTRO SKELETON */}
            <div className="flex flex-col gap-10">
              
              <div className="flex flex-col gap-3">
                <div className="h-4 w-full bg-[#12151E] rounded animate-pulse" />
                <div className="h-4 w-full bg-[#12151E] rounded animate-pulse" />
                <div className="h-4 w-5/6 bg-[#12151E] rounded animate-pulse" />
                <div className="h-4 w-full bg-[#12151E] rounded animate-pulse" />
              </div>

              <div>
                <div className="h-8 w-1/2 bg-[#12151E] rounded animate-pulse mb-6" />
                <div className="flex flex-col gap-4">
                  {[...Array(5)].map((_, i) => (
                    <div key={i} className="h-16 w-full bg-[#12151E] border border-[var(--br)] rounded-xl animate-pulse" />
                  ))}
                </div>
              </div>

            </div>

            {/* LATO DESTRO SKELETON (Sidebar) */}
            <div className="flex flex-col gap-8">
              
              <div className="h-48 w-full bg-[#12151E] border border-[var(--br)] rounded-2xl animate-pulse" />
              <div className="h-48 w-full bg-slate-900/40 border border-[var(--accent)]/20 rounded-2xl animate-pulse" />

            </div>

          </div>
        </div>
      </div>

    </main>
  )
}
