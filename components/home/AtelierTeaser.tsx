import Link from 'next/link'
import React from 'react'

const AtelierTeaser = () => {
  return (
    <section className="w-full py-32 px-6 bg-[#0D0D0D] text-white flex flex-col items-center justify-center text-center">
        <h2 className="font-serif italic text-4xl md:text-[56px] leading-tight mb-8 max-w-4xl">
          {`"The work happens in Karachi.`}<br/>{`The silence happens in the piece."`}
        </h2>
        <div className="text-[10px] uppercase tracking-[0.3em] text-[#A0A0A0] mb-12 flex flex-col gap-2">
          <span>8 CRAFTSPEOPLE · 0 CNC MACHINES</span>
          <span>1 SINGULAR FOCUS</span>
        </div>
        <Link 
          href="/atelier"
          className="px-6 py-3 border border-[#FFFFFF] text-[#FFFFFF] uppercase tracking-[0.2em] text-[10px] hover:bg-[#FFFFFF] hover:text-[#0D0D0D] transition-colors duration-500"
        >
          Visit the Atelier →
        </Link>
      </section>
  )
}

export default AtelierTeaser