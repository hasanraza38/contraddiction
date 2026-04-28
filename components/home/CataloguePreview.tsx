import { products } from '@/lib/data';
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const CataloguePreview = () => {
    const previewProducts = products.slice(0, 6);
  return (
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
  )
}

export default CataloguePreview