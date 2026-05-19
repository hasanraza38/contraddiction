"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { NormalizedCatalogue } from "@/lib/graphql-types";

interface ProductDetailClientProps {
  product: NormalizedCatalogue;
  relatedProducts: NormalizedCatalogue[];
}

export default function ProductDetailClient({ product, relatedProducts }: ProductDetailClientProps) {
  const allImages = [product.image, ...product.photoGallery.map(m => m.url)];
  const [activeImage, setActiveImage] = useState<string>(allImages[0] || "");

  return (
    <div className="flex flex-col w-full bg-[#FFFFFF]">
      <div className="flex flex-col lg:flex-row w-full min-h-[calc(100vh-53px)] relative">
        {/* Left Panel - Sticky */}
        <div className="w-full lg:w-[60%] h-[60vh] lg:h-[calc(100vh-53px)] lg:sticky top-[53px] flex flex-col border-b lg:border-b-0 lg:border-r border-[var(--color-border-light)] lg:border-r-[0.5px]">
          <div className="flex-grow relative bg-[#FAF7F7]">
            {activeImage && (
              <Image 
                src={activeImage} 
                fill 
                sizes="(max-width: 1024px) 100vw, 60vw"
                className="object-cover transition-opacity duration-500" 
                alt={product.name} 
                priority
              />
            )}
          </div>
          
          <div className="h-[120px] flex items-center overflow-x-auto justify-between px-6 border-t border-[var(--color-border-light)] border-t-[0.5px]">
            <div className="flex gap-4 h-full py-4">
              {allImages.slice(0, 4).map((img, idx) => (
                <button 
                  key={idx}
                  onClick={() => setActiveImage(img)}
                  className={`relative h-full aspect-square bg-[#FAF7F7] overflow-hidden border ${activeImage === img ? 'border-[var(--color-brand-primary)]' : 'border-transparent'}`}
                >
                  <Image src={img} fill sizes="120px" className="object-cover grayscale" alt={`Thumbnail ${idx}`} />
                </button>
              ))}
            </div>
            <div className="hidden md:block text-[10px] uppercase tracking-[0.3em] text-[var(--color-text-secondary)]">
              No. 00{product.id}
            </div>
          </div>
        </div>
        
        {/* Right Panel - Scrolling */}
        <div className="w-full lg:w-[40%] flex flex-col">
          <div className="flex-grow p-6 md:p-12 lg:p-16 flex flex-col">
            {/* Breadcrumb */}
            <div className="flex flex-wrap gap-2 text-[10px] uppercase tracking-[0.2em] text-[var(--color-text-secondary)] mb-12">
              <Link href="/catalogue" className="hover:text-[var(--color-text-primary)]">Catalogue</Link>
              <span className="text-[var(--color-brand-primary)]">/</span>
              <span className="hover:text-[var(--color-text-primary)] cursor-pointer">{product.category}</span>
              <span className="text-[var(--color-brand-primary)]">/</span>
              <span className="text-[var(--color-text-primary)]">{product.name}</span>
            </div>

            <h1 className="font-serif text-[48px] md:text-[56px] text-[var(--color-text-primary)] leading-[1.1] mb-6">
              {product.name}
            </h1>
            
            {/* <div className="flex justify-between items-center pb-6 border-b border-[var(--color-border-light)] border-b-[0.5px] mb-12 text-[10px] uppercase tracking-[0.2em] text-[var(--color-text-secondary)]">
              <span>{product.year}</span>
            </div> */}

            {/* The Argument */}
            <div className="mb-16">
              <h3 className="text-[10px] uppercase tracking-[0.3em] text-[var(--color-brand-primary)] mb-6">The Argument</h3>
              <div className="flex flex-col gap-4 text-[16px] text-[var(--color-text-primary)] leading-[1.9] whitespace-pre-wrap">
                {product.argument}
              </div>
            </div>

            {/* Materials Table */}
            <div className="mb-16">
              <h3 className="text-[10px] uppercase tracking-[0.3em] text-[var(--color-text-secondary)] mb-6">Materials</h3>
              <div className="flex flex-col">
                <div className="py-4 border-b border-[var(--color-border-light)] border-b-[0.5px] flex justify-between text-[10px] uppercase tracking-[0.2em]">
                  <span className="text-[var(--color-text-secondary)]">Material</span>
                  <span className="text-[var(--color-text-primary)]">{product.material}</span>
                </div>
                <div className="py-4 border-b border-[var(--color-border-light)] border-b-[0.5px] flex justify-between text-[10px] uppercase tracking-[0.2em]">
                  <span className="text-[var(--color-text-secondary)]">Origin</span>
                  <span className="text-[var(--color-text-primary)]">{product.origin}</span>
                </div>
                <div className="py-4 border-b border-[var(--color-border-light)] border-b-[0.5px] flex justify-between text-[10px] uppercase tracking-[0.2em]">
                  <span className="text-[var(--color-text-secondary)]">Treatment</span>
                  <span className="text-[var(--color-text-primary)]">{product.treatment}</span>
                </div>
              </div>
            </div>

            {/* Craft Note */}
            <div className="mb-16">
              <p className="font-serif italic text-[18px] text-[var(--color-text-secondary)] leading-relaxed">
                {`"${product.craftNote}"`}
              </p>
            </div>
          </div>
          
          {/* Begin Conversation Button */}
          <Link 
            href="/inquire" 
            className="w-full bg-[var(--color-brand-primary)] text-white text-center py-6 text-[10px] uppercase tracking-[0.3em] hover:bg-[var(--color-brand-hover)] transition-colors"
          >
            Begin a conversation →
          </Link>
        </div>
      </div>

      {/* The Making */}
      <section className="w-full py-32 px-6 md:px-16 border-t border-[var(--color-border-light)] border-t-[0.5px]">
        <h2 className="text-[10px] uppercase tracking-[0.3em] text-[var(--color-text-secondary)] mb-16 text-center">The Making</h2>
        <div className="flex flex-col gap-16 max-w-6xl mx-auto">
          {product.photoGallery.map((img, i) => (
            <motion.div 
              key={i} 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="flex flex-col gap-4"
            >
              <div className="w-full aspect-[21/9] relative bg-[#FAF7F7]">
                <Image src={img.url} fill sizes="100vw" className="object-cover grayscale" alt={`Making of ${product.name} ${i+1}`} />
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Other Pieces */}
      <section className="w-full border-t border-[var(--color-border-light)] border-t-[0.5px]">
        <div className="px-6 md:px-16 py-8 border-b border-[var(--color-border-light)] border-b-[0.5px]">
          <span className="text-[10px] uppercase tracking-[0.3em] text-[var(--color-text-secondary)]">Other Pieces</span>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3">
          {relatedProducts.map((p, index) => (
            <Link 
              key={p.id} 
              href={`/catalogue/${p.slug}`}
              className={`relative group border-b border-[var(--color-brand-primary)] border-b-[0.5px] md:border-b-0 ${index !== relatedProducts.length - 1 ? 'md:border-r border-r-[0.5px]' : ''}`}
            >
              <div className="w-full aspect-square relative overflow-hidden bg-[#FAF7F7]">
                <Image src={p.image} alt={p.name} fill sizes="(max-width: 768px) 100vw, 33vw" className="object-cover grayscale group-hover:grayscale-0 transition-all duration-700" />
                <div className="absolute inset-0 bg-[var(--color-brand-primary)] mix-blend-multiply opacity-0 group-hover:opacity-[0.08] transition-opacity duration-500 ease-out" />
              </div>
              <div className="p-6 border-t border-[var(--color-brand-primary)] border-t-[0.5px] flex justify-between">
                <div>
                  <h3 className="font-serif text-[18px] text-[var(--color-text-primary)] group-hover:text-[var(--color-brand-primary)] transition-colors duration-300">{p.name}</h3>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Closing Quote */}
      <section className="w-full py-32 px-6 flex justify-center border-t border-[var(--color-border-light)] border-t-[0.5px]">
        <h2 className="font-serif italic text-3xl md:text-[48px] text-[var(--color-text-primary)] text-center max-w-4xl leading-relaxed">
          {`"You don't buy a Contradiction piece. You inherit the argument."`}
        </h2>
      </section>
    </div>
  );
}
