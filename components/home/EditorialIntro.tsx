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
            The luxury furniture industry assumes price purchases taste. We disagree. The most expensive rooms are often the least interesting. What matters is not expenditure it is the seriousness of the making.
            </p>
            <p>
              Contradiction is not a store. It is a private atelier for clients who have stopped asking what things cost and started asking what things are worth. Every commission is a conversation between client, craftspeople, and space. One object. One room. 
            </p>
            <p>
             Every piece begins as an argument. Cast iron resists. Stone pushes back. Hardwood has opinions. These are not problems we solve they are tensions we maintain. We do not make objects that accommodate. We make objects that insist.
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