import Image from "next/image";
import Link from "next/link";
import Marquee from "@/components/Marquee";
import { products, journalArticles } from "@/lib/data";

export default function Home() {
  const previewProducts = products.slice(0, 6);

  return (
    <div className="flex flex-col w-full">
      {/* Section 1 — Hero */}
      <section className="relative w-full min-h-[calc(100vh-53px)] flex flex-col md:flex-row border-b border-[var(--color-border-light)] border-b-[0.5px]">
        {/* Left side */}
        <div className="w-full md:w-[55%] flex-1 flex flex-col justify-center px-6 py-24 md:py-0 md:px-16 border-b md:border-b-0 md:border-r border-[var(--color-border-light)] border-r-[0.5px]">
          <div className="text-[10px] uppercase tracking-[0.3em] text-[var(--color-text-secondary)] absolute top-8 left-6 md:left-16 animate-[fadeIn_1s_ease-out_0.1s_both]">
            Private Collection — Est. 2024
          </div>
          
          <h1 className="text-5xl md:text-[72px] font-serif leading-[1.1] text-[var(--color-text-primary)] mb-8 mt-12 md:mt-0">
            <span className="block animate-[fadeIn_1s_ease-out_0.2s_both]">Objects made</span>
            <span className="block animate-[fadeIn_1s_ease-out_0.4s_both]">
              to resist <i className="text-[var(--color-brand-primary)]">explanation.</i>
            </span>
          </h1>
          
          <p className="text-[16px] text-[var(--color-text-secondary)] mb-12 animate-[fadeIn_1s_ease-out_0.6s_both] max-w-md">
            Furniture for people who have stopped needing to justify what they own.
          </p>

          <div className="flex gap-4 animate-[fadeIn_1s_ease-out_0.8s_both]">
            <Link 
              href="/catalogue"
              className="px-6 py-3 border border-[var(--color-brand-primary)] text-[var(--color-brand-primary)] uppercase tracking-[0.2em] text-[10px] hover:bg-[var(--color-brand-primary)] hover:text-white transition-colors duration-500"
            >
              Enter the Catalogue →
            </Link>
            <Link 
              href="/philosophy"
              className="px-6 py-3 border border-[#0D0D0D] text-[#0D0D0D] uppercase tracking-[0.2em] text-[10px] hover:bg-[#0D0D0D] hover:text-white transition-colors duration-500"
            >
              Our Philosophy →
            </Link>
          </div>

          <div className="text-[10px] uppercase tracking-[0.3em] text-[var(--color-text-secondary)] absolute bottom-8 left-6 md:left-16 animate-[fadeIn_1s_ease-out_1s_both]">
            By appointment — Karachi · Dubai · London
          </div>
        </div>

        {/* Right side */}
        <div className="w-full md:w-[45%] h-[50vh] md:h-auto md:flex-1 relative bg-[#000] border-l-0 md:border-l border-[var(--color-brand-primary)] md:border-l-[2px]">
          <Image 
            src="https://images.unsplash.com/photo-1599696848652-f0ff23bc911f?q=80&w=687&auto=format&fit=crop"
            alt="Contradiction moody interior"
            fill
            sizes="(max-width: 768px) 100vw, 50vw"
            className="object-cover opacity-90"
            priority
          />
        </div>
      </section>

      {/* Section 2 — Marquee */}
      <Marquee />

      {/* Section 3 — Editorial introduction */}
      <section className="w-full py-[120px] px-6 md:px-16 border-b border-[var(--color-border-light)] border-b-[0.5px] bg-[#FFFFFF]">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row gap-16 md:gap-24">
          <div className="w-full md:w-1/2">
            <h2 className="font-serif italic text-3xl md:text-[40px] leading-tight text-[var(--color-text-primary)]">
              "We do not make furniture. We make arguments."
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

      {/* Section 4 — Catalogue preview */}
        <section className="w-full border-b border-[var(--color-border-light)] border-b-[0.5px] bg-[#FFFFFF]">
        <div className="flex justify-between items-center px-6 md:px-16 py-8 border-b border-[var(--color-border-light)] border-b-[0.5px]">
          <span className="text-[10px] uppercase tracking-[0.3em] text-[var(--color-text-secondary)]">Current Collection</span>
          <span className="text-[10px] uppercase tracking-[0.3em] text-[var(--color-text-secondary)]">7 of 7 pieces</span>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3">
          {previewProducts.map((product, index) => (
            <Link 
              key={product.id} 
              href={`/catalogue/${product.slug}`}
              className={`relative group border-b border-[var(--color-brand-primary)] border-b-[0.5px] md:border-b-0 ${index !== previewProducts.length - 1 ? 'md:border-r border-r-[0.5px]' : ''}`}
            >
               <div className="w-full aspect-square relative overflow-hidden bg-[#FAF7F7]">
                <Image 
                  src={product.image}
                  alt={product.name}
                  fill
                  className="object-cover"
                />
                {/* Red tint overlay */}
                <div className="absolute inset-0 bg-[var(--color-brand-primary)] mix-blend-multiply opacity-0 group-hover:opacity-15 transition-opacity duration-500" />
                {/* Hover red slide in at 8% */}
                <div className="absolute inset-0 bg-[var(--color-brand-primary)] opacity-0 group-hover:opacity-[0.08] transform -translate-x-full group-hover:translate-x-0 transition-transform duration-700 ease-out" />
              </div>
              <div className="p-6 border-t border-[var(--color-brand-primary)] border-t-[0.5px] h-[120px] flex flex-col justify-between">
                <div>
                  <h3 className="font-serif text-[18px] text-[var(--color-text-primary)] group-hover:text-[var(--color-brand-primary)] transition-colors duration-300">{product.name}</h3>
                  <div className="flex justify-between items-center mt-1">
                    <p className="text-[10px] uppercase tracking-[0.2em] text-[var(--color-text-secondary)]">{product.material}</p>
                    <p className="text-[10px] text-[var(--color-text-secondary)]">{product.year}</p>
                  </div>
                </div>
                <div className="text-[var(--color-brand-primary)] text-[10px] uppercase tracking-[0.3em] opacity-0 group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0 transition-all duration-500 ease-out">
                  View Piece →
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Section 5 — A single featured piece */}
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

      {/* Section 6 — The Numbers */}
      <section className="w-full grid grid-cols-2 md:grid-cols-4 border-b border-[var(--color-border-light)] border-b-[0.5px] bg-[#FFFFFF]">
        {[
          { number: "7", label: "Pieces made per year, maximum" },
          { number: "14", label: "Months average commission duration" },
          { number: "11", label: "Countries with installations" },
          { number: "Closed", label: "Current waitlist status" }
        ].map((stat, i) => (
          <div key={i} className={`p-12 flex flex-col items-center justify-center border-b border-[var(--color-border-light)] border-b-[0.5px] md:border-b-0 ${i !== 3 ? 'md:border-r border-r-[0.5px]' : ''}`}>
            <span className="text-[64px] font-serif text-[var(--color-text-primary)] mb-2">{stat.number}</span>
            <span className="text-[10px] uppercase tracking-[0.3em] text-[var(--color-text-secondary)] text-center">{stat.label}</span>
          </div>
        ))}
      </section>

      {/* Section 7 — Materials & Craft */}
      <section className="w-full border-b border-[var(--color-border-light)] border-b-[0.5px] bg-[#FFFFFF]">
        <div className="p-6 md:p-16 flex flex-col md:flex-row gap-16">
          <div className="w-full md:w-1/2">
            <h2 className="text-[32px] font-serif text-[var(--color-text-primary)] mb-8">What things are made of.</h2>
            <p className="text-[16px] text-[var(--color-text-primary)] leading-[1.9]">
              We do not use veneers. We do not use composites. If a piece looks like stone, it is stone. If it is heavy, it is solid. We source Carrara travertine, oxidised brass, hand-poured concrete, smoked glass, ebonised oak, reclaimed teak, raw linen, and vegetable-tanned leather. The material is the first argument we make.
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

      {/* Section 8 — Journal preview */}
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

      {/* Section 9 — Atelier teaser */}
      <section className="w-full py-32 px-6 bg-[#0D0D0D] text-white flex flex-col items-center justify-center text-center">
        <h2 className="font-serif italic text-4xl md:text-[56px] leading-tight mb-8 max-w-4xl">
          "The work happens in Karachi.<br/>The silence happens in the piece."
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
    </div>
  );
}
