import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { products } from "@/lib/data";

export default async function ProductDetail({ params }: { params: Promise<{ slug: string }> }) {
  const resolvedParams = await params;
  const product = products.find(p => p.slug === resolvedParams.slug);

  if (!product) {
    notFound();
  }

  return (
    <div className="flex flex-col w-full bg-[#FFFFFF]">
      <div className="flex flex-col lg:flex-row w-full min-h-[calc(100vh-53px)]">
        {/* Left Panel - Sticky */}
        <div className="w-full lg:w-[60%] lg:h-[calc(100vh-53px)] lg:sticky top-[53px] relative bg-[#000] aspect-square lg:aspect-auto">
          <Image 
            src={product.image} 
            fill 
            className="object-cover opacity-95" 
            alt={product.name} 
            priority
          />
          {/* Subtle red tint */}
          <div className="absolute inset-0 bg-[var(--color-brand-primary)] mix-blend-multiply opacity-[0.03]" />
        </div>
        
        {/* Right Panel - Scrolling */}
        <div className="w-full lg:w-[40%] flex flex-col justify-between p-6 md:p-12 lg:p-20 lg:border-l border-[var(--color-border-light)] lg:border-l-[0.5px]">
          <div>
            <h1 className="font-serif text-5xl md:text-7xl mb-12 text-[var(--color-text-primary)] leading-[1.1]">{product.name}</h1>
            
            <p className="font-serif italic text-xl md:text-2xl text-[var(--color-text-secondary)] leading-relaxed mb-16 max-w-md">
              {product.description}
            </p>

            {/* Material List vertical ruled table */}
            <div className="flex flex-col border-y border-[var(--color-border-light)] border-y-[0.5px]">
              <div className="flex justify-between py-6 border-b border-[var(--color-border-light)] border-b-[0.5px]">
                <span className="text-[10px] uppercase tracking-[0.3em] text-[var(--color-text-secondary)]">Material</span>
                <span className="text-xs uppercase tracking-[0.1em] text-[var(--color-text-primary)]">{product.material}</span>
              </div>
              <div className="flex justify-between py-6 border-b border-[var(--color-border-light)] border-b-[0.5px]">
                <span className="text-[10px] uppercase tracking-[0.3em] text-[var(--color-text-secondary)]">Craftsperson</span>
                <span className="text-xs italic text-[var(--color-text-primary)]">{product.craftsperson}</span>
              </div>
              <div className="flex justify-between py-6">
                <span className="text-[10px] uppercase tracking-[0.3em] text-[var(--color-text-secondary)]">Year</span>
                <span className="text-xs text-[var(--color-text-primary)]">{product.year}</span>
              </div>
            </div>
          </div>

          <div className="mt-32 pt-12 border-t border-[var(--color-border-light)] border-t-[0.5px]">
            <Link 
              href="/inquire" 
              className="text-xs uppercase tracking-[0.2em] text-[var(--color-brand-primary)] hover:text-[var(--color-brand-hover)] transition-colors duration-300 block w-fit"
            >
              Begin a conversation →
            </Link>
          </div>
        </div>
      </div>

      {/* Making Of Section */}
      {product.makingOfImages && product.makingOfImages.length > 0 && (
        <section className="w-full px-6 py-24 md:py-32 border-t border-[var(--color-border-light)] border-t-[0.5px]">
          <h2 className="text-[10px] uppercase tracking-[0.3em] text-[var(--color-text-secondary)] mb-16">The Making Of</h2>
          <div className="flex flex-col md:flex-row gap-6 md:gap-12">
            {product.makingOfImages.map((img, i) => (
              <div key={i} className="flex-1 group">
                <div className="w-full aspect-[4/3] relative bg-[#FAF7F7] mb-6 overflow-hidden">
                  <Image 
                    src={img.url} 
                    fill 
                    className="object-cover grayscale group-hover:grayscale-0 transition-all duration-700" 
                    alt={img.caption} 
                  />
                  <div className="absolute inset-0 bg-[var(--color-brand-primary)] mix-blend-multiply opacity-0 group-hover:opacity-[0.05] transition-opacity duration-500" />
                </div>
                <p className="text-xs text-[var(--color-text-secondary)] lowercase">{img.caption}</p>
              </div>
            ))}
          </div>
        </section>
      )}
    </div>
  );
}
