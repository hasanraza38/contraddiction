import Link from 'next/link'
import React from 'react'

const EditorialIntro = () => {
  return (
    <section className="w-full py-[120px] px-6 md:px-16 border-b border-[var(--color-border-light)] border-b-[0.5px] bg-[#FFFFFF]">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row gap-16 md:gap-24">
          <div className="w-full md:w-1/2">
            <h2 className="font-serif italic text-3xl md:text-[40px] leading-tight text-[var(--color-text-primary)]">
              {"We Do Not Make Furniture. We Make Statements That Refuse to Leave the Room."}
            </h2>
          </div>
          <div className="w-full md:w-1/2 flex flex-col gap-6 text-[16px] md:text-[18px] text-[var(--color-text-primary)] leading-[1.9]">
            <p>
              There is a particular arrogance to the luxury furniture industry. The assumption that money, spent lavishly enough, purchases taste. That price is a synonym for intention. 
            </p>
            <p>
              We are not a store. We are not a brand in the conventional sense. We are a private luxury atelier producing seven singular bespoke furniture commissions per year. 
            </p>
            <p>
              Every handcrafted piece we produce begins as an argument, between the material and the maker, between the object and the room it will inhabit, between permanence and the desire for comfort. We do not resolve that argument. We let it stand.
            </p>
            <Link href="/philosophy" className="text-[var(--color-brand-primary)] text-[10px] uppercase tracking-[0.3em] mt-4 hover:text-[var(--color-brand-hover)] transition-colors">
              Read the full philosophy →
            </Link>
          </div>
        </div>
      </section>

  )
}

export default EditorialIntro