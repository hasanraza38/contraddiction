import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const SingleFeaturedProduct = () => {
  return (
   <section className="w-full flex flex-col md:flex-row border-b border-[var(--color-border-light)] border-b-[0.5px] bg-[#FFFFFF]">
           <div className="w-full md:w-[60%] aspect-square md:aspect-auto relative border-b md:border-b-0 md:border-r border-[var(--color-border-light)] border-r-[0.5px]">
             <Image 
               src="https://images.unsplash.com/photo-1595428774223-ef52624120d2?q=80&w=1200&auto=format&fit=crop"
               alt="Cabinet of Weight"
               fill
               sizes="(max-width: 768px) 100vw, 60vw"
               className="object-cover"
               priority
             />
           </div>
           <div className="w-full md:w-[40%] p-6 md:p-16 flex flex-col justify-center">
             <span className="text-[10px] uppercase tracking-[0.3em] text-[var(--color-brand-primary)] mb-8">Featured Commission</span>
             <h2 className="text-[48px] md:text-[64px] font-serif leading-tight text-[var(--color-text-primary)] mb-8">
               Cabinet of Weight
             </h2>
             <div className="text-[16px] text-[var(--color-text-primary)] leading-[1.9] flex flex-col gap-4 mb-12">
               <p>
                 Storage as an act of concealment. We designed this piece to be inherently uninviting. It offers no handles, no obvious entry points.
               </p>
               <p>
                 It is a fortress of raw steel, guarding the delicate warmth of its internal walnut construction. It forces you to touch the cold steel to open it. It requires physical effort.
               </p>
               <p>
                 It does not yield easily, and that is precisely the point. It is for the person who respects resistance.
               </p>
             </div>
             
             <div className="w-full border-t border-[var(--color-border-light)] border-t-[0.5px] mb-8">
               <div className="py-4 border-b border-[var(--color-border-light)] border-b-[0.5px] flex justify-between text-[10px] uppercase tracking-[0.2em] text-[var(--color-text-secondary)]">
                 <span>Material</span>
                 <span className="text-[var(--color-text-primary)]">RAW STEEL / WALNUT</span>
               </div>
               <div className="py-4 border-b border-[var(--color-border-light)] border-b-[0.5px] flex justify-between text-[10px] uppercase tracking-[0.2em] text-[var(--color-text-secondary)]">
                 <span>Craftsperson</span>
                 <span className="text-[var(--color-text-primary)]">J. H. Richter</span>
               </div>
               <div className="py-4 border-b border-[var(--color-border-light)] border-b-[0.5px] flex justify-between text-[10px] uppercase tracking-[0.2em] text-[var(--color-text-secondary)]">
                 <span>Year</span>
                 <span className="text-[var(--color-text-primary)]">2024</span>
               </div>
             </div>
   
             <Link href="/catalogue/cabinet-of-weight" className="text-[var(--color-brand-primary)] text-[10px] uppercase tracking-[0.3em] hover:text-[var(--color-brand-hover)] transition-colors">
               See full piece →
             </Link>
           </div>
         </section>
  )
}

export default SingleFeaturedProduct