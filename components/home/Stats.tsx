import React from 'react'

const Stats = () => {
  return (
      <section className="w-full grid grid-cols-2 md:grid-cols-3 border-b border-[var(--color-border-light)] border-b-[0.5px] bg-[#FFFFFF]">
        {[
          { number: "7", label: "Seven commissions a year. Never more." },
          { number: "14", label: "Fourteen months. One uncompromised creation." },
          
          { number: "Closed", label: "Current commission availability. The next opening has not been announced." }

        ].map((stat, i) => (
          <div key={i} className={`p-12 flex flex-col items-center justify-center border-b border-[var(--color-border-light)] border-b-[0.5px] md:border-b-0 ${i !== 3 ? 'md:border-r border-r-[0.5px]' : ''}`}>
            <span className="text-[64px] font-serif text-[var(--color-text-primary)] mb-2">{stat.number}</span>
            <span className="text-[10px] uppercase tracking-[0.3em] text-[var(--color-text-secondary)] text-center">{stat.label}</span>
          </div>
        ))}
      </section>
  )
}

export default Stats