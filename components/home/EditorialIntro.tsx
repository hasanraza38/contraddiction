import Link from 'next/link'
import React from 'react'

const EditorialIntro = () => {
  return (
    <section className="w-full py-[120px] px-6 md:px-16 border-b border-[var(--color-border-light)] border-b-[0.5px] bg-[#FFFFFF]">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row gap-16 md:gap-24">
          <div className="w-full md:w-1/2">
            <h2 className="font-serif italic text-3xl md:text-[40px] leading-tight text-[var(--color-text-primary)]">
              {"We do not make furniture. We make arguments."}
            </h2>
          </div>
          <div className="w-full md:w-1/2 flex flex-col gap-6 text-[16px] md:text-[18px] text-[var(--color-text-primary)] leading-[1.9]">
            <p>
              Contradiction was founded on a simple premise: most luxury is merely expensive accommodation. It seeks to soothe, to comfort, to blend seamlessly into the background of a well-curated life.
            </p>
            <p>
              We reject this. We believe that an object brought into your space should demand its right to be there. It should force a posture. It should interrupt the silence. It should be, in some small way, difficult.
            </p>
            <p>
              We are not a store. We are a private atelier producing seven unique commissions per year. We do not restock. We do not iterate.
            </p>
            <Link href="/philosophy" className="text-[var(--color-brand-primary)] text-[10px] uppercase tracking-[0.3em] mt-4 hover:text-[var(--color-brand-hover)] transition-colors">
              Read our full philosophy →
            </Link>
          </div>
        </div>
      </section>

  )
}

export default EditorialIntro