import Image from 'next/image'

export function LPCaseStudy() {
  return (
    <section data-scroll-section className="py-24 sm:py-32 bg-[var(--bg-3)]">
      <div className="mx-auto max-w-5xl px-5 sm:px-8">
        <p className="font-mono text-xs uppercase tracking-[0.25em] text-[var(--accent-d)] mb-6">
          05 — LAVORI REALI
        </p>
        <h2
          className="font-display font-extrabold text-[var(--tx-1)] tracking-tight mb-4"
          style={{ fontSize: 'clamp(2rem, 4vw, 3.5rem)' }}
        >
          Cantieri a Parma. Risultati concreti.
        </h2>
        <p className="font-body text-[var(--tx-2)] text-lg mb-14 max-w-[55ch]">
          Boutique, appartamenti, spazi commerciali. Consegnati puliti, nei tempi concordati.
        </p>

        {/* Before / After */}
        <div className="grid sm:grid-cols-2 gap-8 mb-10">
          <div>
            <p className="font-mono text-[10px] uppercase tracking-[0.25em] text-[var(--accent-d)] mb-3">
              PRIMA
            </p>
            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-md">
              <Image
                src="/images/case-studies/primapulizia.webp"
                alt="Appartamento a Parma prima dell'intervento di pulizia fine cantiere — calce e polveri residue"
                fill
                sizes="(max-width: 640px) 100vw, 50vw"
                className="object-cover"
              />
            </div>
          </div>
          <div>
            <p className="font-mono text-[10px] uppercase tracking-[0.25em] text-[var(--accent-d)] mb-3">
              DOPO
            </p>
            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-md">
              <Image
                src="/images/case-studies/dopopulizia.webp"
                alt="Appartamento a Parma dopo l'intervento di pulizia fine cantiere — ambienti pronti alla consegna"
                fill
                sizes="(max-width: 640px) 100vw, 50vw"
                className="object-cover"
              />
            </div>
          </div>
        </div>

        {/* Gallery */}
        <div className="grid grid-cols-3 gap-4">
          {[
            {
              src: '/images/gallery/fine-cantiere-appartamento-nuovo-fulgur.webp',
              alt: 'Pulizia fine cantiere appartamento nuovo a Parma — Fulgur Service',
            },
            {
              src: '/images/gallery/fine-cantiere-boutique-zegna-parma-2.webp',
              alt: 'Intervento post cantiere boutique Zegna Parma — rimozione residui edilizi',
            },
            {
              src: '/images/gallery/pulizia-post-cantiere-nuova-costruzione.webp',
              alt: 'Pulizia post cantiere nuova costruzione a Parma — Fulgur Service',
            },
          ].map((img) => (
            <div key={img.src} className="relative aspect-square rounded-xl overflow-hidden shadow-sm">
              <Image
                src={img.src}
                alt={img.alt}
                fill
                sizes="(max-width: 640px) 33vw, (max-width: 1024px) 33vw, 200px"
                className="object-cover"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
