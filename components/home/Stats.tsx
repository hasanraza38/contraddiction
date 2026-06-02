import React from 'react'

const Stats = () => {
  return (
    <section className="w-full grid grid-cols-2 md:grid-cols-3 border-b border-[var(--color-border-light)] border-b-[0.5px] bg-[#FFFFFF]">
      {[
        { number: "12+", label: "Years of uncompromising mastery in bespoke design." },
        { number: "1450+", label: "Customers who trust our work and continue to choose us." },
        { number: "550+", label: "Articles Available at All Times" }
      ].map((stat, i) => (
        <div 
          key={i} 
          className={`p-12 flex flex-col items-center justify-center border-[var(--color-border-light)] ${
            i === 2 ? 'col-span-2 md:col-span-1' : 'col-span-1'
          } ${
            i === 0 ? 'border-r-[0.5px]' : ''
          } ${
            i !== 2 ? 'border-b-[0.5px] md:border-b-0 md:border-r-[0.5px]' : 'md:border-r-0'
          }`}
        >
          <span className="text-[64px] font-serif text-[var(--color-text-primary)] mb-2">{stat.number}</span>
          <span className="text-[10px] uppercase tracking-[0.3em] text-[var(--color-text-secondary)] text-center max-w-[280px]">{stat.label}</span>
        </div>
      ))}
    </section>
  )
}

export default Stats 