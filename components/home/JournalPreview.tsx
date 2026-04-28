import { journalArticles } from '@/lib/data'
import Link from 'next/link'
import React from 'react'

const JournalPreview = () => {
  return (
   <section className="w-full border-b border-[var(--color-border-light)] border-b-[0.5px] bg-[#FFFFFF]">
        <div className="px-6 md:px-16 py-8 border-b border-[var(--color-border-light)] border-b-[0.5px]">
          <span className="text-[10px] uppercase tracking-[0.3em] text-[var(--color-text-secondary)]">From the Journal</span>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3">
          {journalArticles.slice(0, 3).map((article, i) => (
            <div key={i} className={`p-8 flex flex-col border-b border-[var(--color-border-light)] border-b-[0.5px] md:border-b-0 ${i !== 2 ? 'md:border-r border-r-[0.5px]' : ''}`}>
              <span className="text-[10px] uppercase tracking-[0.2em] text-[var(--color-text-secondary)] mb-4">{article.date}</span>
              <h3 className="font-serif text-[22px] leading-snug text-[var(--color-text-primary)] mb-4 line-clamp-2">
                {article.title}
              </h3>
              <p className="text-[14px] text-[var(--color-text-secondary)] line-clamp-1 mb-8">
                {article.excerpt}
              </p>
              <Link href={`/journal/${article.slug}`} className="mt-auto text-[var(--color-brand-primary)] text-[10px] uppercase tracking-[0.3em] hover:text-[var(--color-brand-hover)] transition-colors">
                Read →
              </Link>
            </div>
          ))}
        </div>
      </section>
  )
}

export default JournalPreview