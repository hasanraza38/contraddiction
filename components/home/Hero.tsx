import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative w-full min-h-[calc(100vh-53px)] flex flex-col md:flex-row border-b border-[var(--color-border-light)] border-b-[0.5px]">
      {/* Background Image full width */}
      <div className="absolute inset-0 z-0">
        <Image 
          src="https://images.unsplash.com/photo-1599696848652-f0ff23bc911f?q=80&w=2000&auto=format&fit=crop"
          alt="Contradiction moody interior"
          fill
          sizes="100vw"
          className="object-cover opacity-80"
          priority
        />
        {/* Dark overlay to make text readable */}
        <div className="absolute inset-0 bg-black/70" />
      </div>

      {/* Content overlay */}
      <div className="relative z-10 w-full md:w-[55%] flex-1 flex flex-col justify-center px-6 py-24 md:py-0 md:px-16">
        <div className="text-[10px] uppercase tracking-[0.3em] text-white/80 absolute top-8 left-6 md:left-16 animate-[fadeIn_1s_ease-out_0.1s_both]">
           Private Collection — Est. 2024
        </div>
        
        <h1 className="text-5xl md:text-[72px] font-serif leading-[1.1] text-white mb-8 mt-12 md:mt-0">
          <span className="block animate-[fadeIn_1s_ease-out_0.2s_both]">Objects Forged</span>
          <span className="block animate-[fadeIn_1s_ease-out_0.4s_both]">
           to Defy  <i className="text-[var(--color-brand-primary)]">Possession</i>
          </span>
        </h1>
        
        <p className="text-[16px] text-white/80 mb-12 animate-[fadeIn_1s_ease-out_0.6s_both] max-w-md">
         Not every object submits to its owner. Some demand to be reckoned with.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 animate-[fadeIn_1s_ease-out_0.8s_both]">
          <Link 
            href="/catalogue"
            className="px-8 py-4 bg-[var(--color-brand-primary)] border border-[var(--color-brand-primary)] text-white uppercase tracking-[0.2em] text-[10px] text-center hover:bg-white hover:text-[var(--color-brand-primary)] hover:border-white transition-all duration-500 shadow-lg"
          >
           Explore the Collection →
          </Link>
          <Link 
            href="/philosophy"
            className="px-8 py-4 border border-white text-white uppercase tracking-[0.2em] text-[10px] text-center hover:bg-white hover:text-black transition-all duration-500 backdrop-blur-md bg-black/30"
          >
            Our Philosophy →


          </Link>
        </div>

        <div className="text-[10px] uppercase tracking-[0.3em] text-white/80 absolute bottom-8 left-6 md:left-16 animate-[fadeIn_1s_ease-out_1s_both]">
          By private appointment — Karachi
        </div>
      </div>
    </section>
  );
}
