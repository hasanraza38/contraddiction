import Image from "next/image";
import Link from "next/link";
import Marquee from "@/components/Marquee";
import { products } from "@/lib/data";

export default function Home() {
  const previewProducts = products.slice(0, 3);

  return (
    <div className="flex flex-col w-full">
      {/* Hero Section */}
      <section className="relative w-full h-[calc(100vh-53px)] flex flex-col md:flex-row border-b border-[var(--color-border-light)] border-b-[0.5px]">
        {/* Left Half */}
        <div className="w-full md:w-1/2 h-full flex flex-col justify-center px-6 md:px-16 border-b md:border-b-0 md:border-r border-[var(--color-brand-primary)] md:border-r-[0.5px]">
          <h1 className="text-5xl md:text-7xl font-serif leading-[1.1] text-[var(--color-text-primary)] mb-8">
            <span className="block animate-[fadeIn_1s_ease-out_0.1s_both]">Beauty in</span>
            <span className="block animate-[fadeIn_1s_ease-out_0.4s_both]">
              absolute <i className="text-[var(--color-brand-primary)]">tension</i>
            </span>
            <span className="block animate-[fadeIn_1s_ease-out_0.7s_both]">and constraint.</span>
          </h1>
          
          <p className="text-xs uppercase tracking-[0.2em] text-[var(--color-text-secondary)] mb-12 animate-[fadeIn_1s_ease-out_1s_both]">
            Uncompromising design for the obsessive.
          </p>

          <Link 
            href="/catalogue"
            className="self-start px-8 py-3 border border-[var(--color-brand-primary)] text-[var(--color-brand-primary)] uppercase tracking-[0.2em] text-xs hover:bg-[var(--color-brand-primary)] hover:text-white transition-colors duration-500 animate-[fadeIn_1s_ease-out_1.3s_both]"
          >
            View the Catalogue
          </Link>
        </div>

        {/* Right Half */}
        <div className="w-full md:w-1/2 h-full relative bg-[#000]">
          <Image 
            src="https://images.unsplash.com/photo-1599696848652-f0ff23bc911f?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="Contradiction moody interior"
            fill
            className="object-cover opacity-90"
            priority
          />
          {/* A thin vertical red line divides the two halves. (Already handled by border-r on the left half) */}
        </div>
      </section>

      {/* Marquee */}
      <Marquee />

      {/* Catalogue Preview Grid */}
      <section className="w-full border-b border-[var(--color-border-light)] border-b-[0.5px]">
        <div className="grid grid-cols-1 md:grid-cols-3">
          {previewProducts.map((product, index) => (
            <Link 
              key={product.id} 
              href={`/catalogue/${product.slug}`}
              className={`relative group border-b md:border-b-0 ${index !== previewProducts.length - 1 ? 'md:border-r border-[var(--color-brand-primary)] border-r-[0.5px]' : ''}`}
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
              <div className="p-6 flex justify-between items-end border-t border-[var(--color-brand-primary)] border-t-[0.5px]">
                <div>
                  <h3 className="font-serif text-2xl mb-2 text-[var(--color-text-primary)] group-hover:text-[var(--color-brand-primary)] transition-colors duration-300">{product.name}</h3>
                  <p className="text-[10px] uppercase tracking-[0.2em] text-[var(--color-text-secondary)]">{product.material}</p>
                </div>
                <div className="text-[var(--color-brand-primary)] opacity-0 group-hover:opacity-100 transform translate-x-2 group-hover:translate-x-0 transition-all duration-500 ease-out">
                  →
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Philosophy Strip */}
      <section className="w-full py-32 px-6 flex justify-center items-center bg-[#FFFFFF]">
        <blockquote className="max-w-4xl text-center border-y border-[var(--color-brand-primary)] border-y-[0.5px] py-12">
          <p className="font-serif italic text-3xl md:text-5xl leading-tight text-[var(--color-text-primary)]">
            "A room is not a container for comfort. It is a stage for the deliberate."
          </p>
        </blockquote>
      </section>
    </div>
  );
}
