import Image from 'next/image'
import React from 'react'

const MaterialsAndCraft = () => {
  return (
      <section className="w-full border-b border-[var(--color-border-light)] border-b-[0.5px] bg-[#FFFFFF]">
        <div className="p-6 md:p-16 flex flex-col md:flex-row gap-16">
          <div className="w-full md:w-1/2">
            <h2 className="text-[32px] font-serif text-[var(--color-text-primary)] mb-8">What Luxury Furniture Is Actually Made Of.</h2>
            <p className="text-[16px] text-[var(--color-text-primary)] leading-[1.9]">
              The single most revealing question you can ask of any object that calls itself "luxury furniture" is this: <b>"what is it actually made of?"</b> At Contradiction, the answer is never complicated, and never accommodating. We do not use veneers. We do not use composites or engineered substitutes. If a surface appears to be stone, it is stone that is quarried, transported, and worked by hand. If a piece feels heavy, it is because it is solid, throughout with no interior compromise. Specific ages of timber from specific forests. Brass that has already begun to oxidise because we want its history, not its shine. <br />

<b>Material comes first. Everything else follows.</b>


            </p>
          </div>
          <div className="w-full md:w-1/2 pt-4">
            <div className="grid grid-cols-2 gap-x-8 gap-y-0 border-t border-[var(--color-border-light)] border-t-[0.5px]">
              {[
                { m: "CARRARA TRAVERTINE", o: "ITALY" },
                { m: "OXIDISED BRASS", o: "UK" },
                { m: "HAND-POURED CONCRETE", o: "SCOTLAND" },
                { m: "SMOKED GLASS", o: "CZECH REP." },
                { m: "EBONISED OAK", o: "FRANCE" },
                { m: "VEGETABLE-TANNED LEATHER", o: "ARGENTINA" }
              ].map((item, i) => (
                <div key={i} className="py-4 border-b border-[var(--color-border-light)] border-b-[0.5px] flex flex-col gap-1">
                  <span className="text-[10px] uppercase tracking-[0.2em] text-[var(--color-text-primary)]">{item.m}</span>
                  <span className="text-[10px] uppercase tracking-[0.2em] text-[var(--color-text-secondary)]">{item.o}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="w-full h-[60vh] relative border-t border-[var(--color-border-light)] border-t-[0.5px]">
          <Image 
            src="https://images.unsplash.com/photo-1682184805271-11671b7ecf4c?q=80&w=1632&auto=format&fit=crop"
            alt="Crafting process"
            fill
            sizes="100vw"
            className="object-cover"
          />
        </div>
      </section>
  )
}

export default MaterialsAndCraft