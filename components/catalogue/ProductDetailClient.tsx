"use client";

import { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { NormalizedCatalogue } from "@/lib/graphql-types";
import ProtectedImage from "@/components/common/ProtectedImage";
import ProductCard from "./ProductCard";

interface ProductDetailClientProps {
  product: NormalizedCatalogue;
  relatedProducts: NormalizedCatalogue[];
}

export default function ProductDetailClient({ product, relatedProducts }: ProductDetailClientProps) {
  const allImages = product.photoGallery.map(m => m.url);
  // Fallback to the featured image if there are no images in the gallery
  if (allImages.length === 0) allImages.push(product.image);
  
  const [activeImage, setActiveImage] = useState<string>(allImages[0] || "");

  return (
    <div className="flex flex-col w-full bg-[#FFFFFF]">
      <div className="flex flex-col lg:flex-row w-full min-h-[calc(100vh-53px)] relative">
        {/* Left Panel - Sticky */}
        <div className="w-full lg:w-[60%] lg:sticky top-[53px] flex flex-col border-b lg:border-b-0 lg:border-r border-[var(--color-border-light)] lg:border-r-[0.5px] self-start">
          <div className="relative bg-[#FAF7F7] w-full h-[70vh] lg:h-[calc(100vh-173px)] flex items-center justify-center overflow-hidden">
            {activeImage && (
              <ProtectedImage 
                src={activeImage} 
                width={1600}
                height={1600}
                sizes="(max-width: 1024px) 100vw, 60vw"
                className="w-full h-auto max-h-[70vh] lg:max-h-[calc(100vh-173px)] object-contain p-4 md:p-8"
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
                  <ProtectedImage src={img} fill sizes="120px" className="object-cover grayscale" alt={`Thumbnail ${idx}`} />
                </button>
              ))}
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
              <span className="text-[var(--color-brand-primary)] ">{product.name}</span>
            </div>

            <h1 className="font-serif text-[48px] md:text-[56px] text-[var(--color-text-primary)] leading-[1.1] mb-6">
              {product.name}
            </h1>
            {/* The Argument */}
            <div className="mb-12">
              <h3 className="text-[10px] uppercase tracking-[0.3em] text-[var(--color-brand-primary)] mb-4 font-semibold">The Argument</h3>
              <div className="flex flex-col gap-4 text-[20px] text-[var(--color-text-primary)] leading-[1.8] whitespace-pre-wrap font-light">
                {product.argument}
              </div>
            </div>

            {/* Spacer to push Craft Note & Button to bottom, resolving the leftover gap */}
            <div className="flex-grow min-h-[10px]" />

            {/* Craft Note */}
            {product.craftNote && (
              <div className="mb-12 pt-8 border-t border-[var(--color-border-light)] border-t-[0.5px]">
                <h3 className="text-[10px] uppercase tracking-[0.3em] text-[var(--color-brand-primary)] mb-4 font-semibold">The Craft</h3>
                <p className="font-serif italic text-[30px] text-[var(--color-text-secondary)] leading-relaxed">
                  <span className="text-[var(--color-brand-primary)] font-serif not-italic mr-1">“</span>
                  {product.craftNote}
                  <span className="text-[var(--color-brand-primary)] font-serif not-italic ml-1">”</span>
                </p>
              </div>
            )}
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


      {/* Other Pieces */}
      <section className="w-full border-t border-[var(--color-border-light)] border-t-[0.5px]">
        <div className="px-6 md:px-16 py-8 border-b border-[var(--color-border-light)] border-b-[0.5px]">
          <span className="text-[10px] uppercase tracking-[0.3em] text-[var(--color-brand-primary)]">Related Products</span>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3">
          {relatedProducts.map((p, index) => (
             <ProductCard key={p.id} product={p} />
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
