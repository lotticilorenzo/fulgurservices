import Image from 'next/image'

export function LPCaseStudy() {
  return (
    <section className="py-16 sm:py-20 bg-[var(--bg-2)]">
      <div className="mx-auto max-w-5xl px-5 sm:px-8">
        <p className="font-mono-fulgur text-[10px] uppercase tracking-[0.18em] text-[var(--accent)] mb-3">
          — LAVORI REALI
        </p>
        <h2
          className="font-display font-bold text-[var(--tx-1)] tracking-tight mb-4"
          style={{ fontSize: 'clamp(26px, 3.5vw, 42px)' }}
        >
          Cantieri a Parma. Risultati concreti.
        </h2>
        <p className="font-body text-[var(--tx-2)] text-base mb-10 max-w-[55ch]">
          Boutique, appartamenti, spazi commerciali. Consegnati puliti, nei tempi concordati.
        </p>

        {/* Before / After */}
        <div className="grid sm:grid-cols-2 gap-4 mb-8">
          <div className="relative">
            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden">
              <Image
                src="/images/case-studies/primapulizia.webp"
                alt="Appartamento a Parma prima dell'intervento di pulizia fine cantiere — calce e polveri residue"
                fill
                sizes="(max-width: 640px) 100vw, 50vw"
                className="object-cover"
              />
            </div>
            <span className="absolute top-3 left-3 font-mono-fulgur text-[10px] uppercase tracking-[0.15em] bg-[var(--tx-1)]/80 text-white px-3 py-1 rounded-full">
              Prima
            </span>
          </div>
          <div className="relative">
            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden">
              <Image
                src="/images/case-studies/dopopulizia.webp"
                alt="Appartamento a Parma dopo l'intervento di pulizia fine cantiere — ambienti pronti alla consegna"
                fill
                sizes="(max-width: 640px) 100vw, 50vw"
                className="object-cover"
              />
            </div>
            <span className="absolute top-3 left-3 font-mono-fulgur text-[10px] uppercase tracking-[0.15em] bg-[var(--accent)]/90 text-white px-3 py-1 rounded-full">
              Dopo
            </span>
          </div>
        </div>

        {/* Gallery */}
        <div className="grid grid-cols-3 gap-3">
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
            <div key={img.src} className="relative aspect-square rounded-xl overflow-hidden">
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
