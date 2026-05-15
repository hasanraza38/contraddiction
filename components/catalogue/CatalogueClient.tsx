"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, Variants } from "framer-motion";
import { NormalizedCatalogue } from "@/lib/graphql-types";

// Define container variants
const containerVariants: Variants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.05,
    },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

interface CatalogueClientProps {
  products: NormalizedCatalogue[];
  fetchedCategories?: string[];
}

export default function CatalogueClient({ products, fetchedCategories = [] }: CatalogueClientProps) {
  // Use fetched categories if provided, otherwise derive from products
  const dynamicCategories = ["All", ...Array.from(new Set(fetchedCategories.length > 0 ? fetchedCategories : products.map(p => p.category).filter(Boolean)))];

  const [activeFilter, setActiveFilter] = useState<string>("All");
  const [currentPage, setCurrentPage] = useState<number>(1);

  // Filter based on category
  const filteredProducts = activeFilter === "All" 
    ? products 
    : products.filter(p => p.category === activeFilter);

  // Pagination Logic
  const ITEMS_PER_PAGE = 6;
  const totalPages = Math.ceil(filteredProducts.length / ITEMS_PER_PAGE);
  const paginatedProducts = filteredProducts.slice(
    (currentPage - 1) * ITEMS_PER_PAGE,
    currentPage * ITEMS_PER_PAGE
  );

  return (
    <div className="flex flex-col w-full bg-[#FFFFFF]">
      {/* Top Editorial Intro */}
      <div className="py-24 md:py-32 flex flex-col items-center border-b border-[var(--color-brand-primary)] border-b-[0.5px]">
        <h1 className="text-3xl md:text-5xl font-serif italic text-[var(--color-text-primary)] text-center leading-relaxed">
          Seven pieces.<br/>
          Each made once.<br/>
          None available.
        </h1>
      </div>

      {/* Filter Bar */}
      <div className="px-6 py-8 border-b border-[var(--color-brand-primary)] border-b-[0.5px] flex justify-center">
        <div className="flex flex-wrap justify-center gap-6 md:gap-12">
          {dynamicCategories.map((cat, i) => (
            <div key={cat} className="flex items-center gap-6 md:gap-12">
              <button
                onClick={() => {
                  setActiveFilter(cat);
                  setCurrentPage(1);
                }}
                className={`relative text-[10px] uppercase tracking-[0.3em] transition-colors duration-300 ${activeFilter === cat ? 'text-[var(--color-text-primary)]' : 'text-[var(--color-text-secondary)] hover:text-[var(--color-text-primary)]'}`}
              >
                {cat}
                {activeFilter === cat && (
                  <span className="absolute -bottom-1 left-0 w-full h-[0.5px] bg-[var(--color-brand-primary)]"></span>
                )}
              </button>
              {i < dynamicCategories.length - 1 && <span className="text-[var(--color-border-light)] text-[10px]">·</span>}
            </div>
          ))}
        </div>
      </div>

      {/* Grid */}
      <motion.div 
        variants={containerVariants}
        initial="hidden"
        animate="show"
        key={activeFilter}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 bg-[var(--color-brand-primary)] gap-[0.5px] border-b border-[var(--color-brand-primary)] border-b-[0.5px]"
      >
        {paginatedProducts.map((product) => (
          <motion.div variants={itemVariants} key={product.id} className="bg-[#FFFFFF]">
            <Link 
              href={`/catalogue/${product.slug}`}
              className="block group h-full flex flex-col"
            >
              <div className="w-full aspect-square relative overflow-hidden bg-[#FAF7F7]">
                <Image 
                  src={product.image}
                  alt={product.name}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className="object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
                />
                <div className="absolute inset-0 bg-[var(--color-brand-primary)] mix-blend-multiply opacity-0 group-hover:opacity-10 transition-opacity duration-500" />
              </div>
              <div className="p-6 flex flex-col justify-between flex-grow min-h-[140px]">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h3 className="font-serif text-[18px] text-[var(--color-text-primary)] group-hover:text-[var(--color-brand-primary)] transition-colors duration-300">{product.name}</h3>
                    {/* <div className="flex gap-4 mt-2">
                      <p className="text-[10px] uppercase tracking-[0.2em] text-[var(--color-text-secondary)]">{product.material}</p>
                      <p className="text-[10px] text-[var(--color-text-secondary)]">{product.year}</p>
                    </div> */}
                  </div>
                </div>
                <div className="text-[var(--color-brand-primary)] text-[10px] uppercase tracking-[0.3em] opacity-100 md:opacity-0 group-hover:opacity-100 transform translate-y-0 md:translate-y-2 group-hover:translate-y-0 transition-all duration-500 ease-out">
                  View →
                </div>
              </div>
            </Link>
          </motion.div>
        ))}
        {/* Fill empty cells to maintain grid lines */}
        {Array.from({ length: (3 - (paginatedProducts.length % 3)) % 3 }).map((_, i) => (
          <div key={`empty-${i}`} className="bg-[#FFFFFF] hidden lg:block"></div>
        ))}
      </motion.div>

      {/* Pagination Controls */}
      {totalPages > 1 && (
        <div className="w-full flex justify-center items-center py-12 gap-8 bg-[#FFFFFF] border-b border-[var(--color-brand-primary)] border-b-[0.5px]">
          <button 
            onClick={() => {
              setCurrentPage(prev => Math.max(prev - 1, 1));
              window.scrollTo({ top: 300, behavior: 'smooth' });
            }}
            disabled={currentPage === 1}
            className="text-[10px] uppercase tracking-[0.3em] transition-colors duration-300 disabled:opacity-30 hover:text-[var(--color-brand-primary)]"
          >
            ← Prev
          </button>
          <div className="flex gap-4">
            {Array.from({ length: totalPages }).map((_, i) => (
              <button
                key={i}
                onClick={() => {
                  setCurrentPage(i + 1);
                  window.scrollTo({ top: 300, behavior: 'smooth' });
                }}
                className={`text-[10px] uppercase tracking-[0.3em] transition-colors duration-300 ${currentPage === i + 1 ? 'text-[var(--color-text-primary)] font-bold' : 'text-[var(--color-text-secondary)] hover:text-[var(--color-brand-primary)]'}`}
              >
                {i + 1}
              </button>
            ))}
          </div>
          <button 
            onClick={() => {
              setCurrentPage(prev => Math.min(prev + 1, totalPages));
              window.scrollTo({ top: 300, behavior: 'smooth' });
            }}
            disabled={currentPage === totalPages}
            className="text-[10px] uppercase tracking-[0.3em] transition-colors duration-300 disabled:opacity-30 hover:text-[var(--color-brand-primary)]"
          >
            Next →
          </button>
        </div>
      )}

      {/* Bottom Band */}
      <div className="w-full py-24 px-6 flex flex-col items-center justify-center text-center gap-6 border-b border-[var(--color-border-light)] border-b-[0.5px]">
        <p className="text-[14px] text-[var(--color-text-secondary)]">
          {`Not what you're looking for? Contradiction accepts one bespoke commission per quarter.`}
        </p>
        <Link href="/inquire" className="text-[var(--color-brand-primary)] text-[10px] uppercase tracking-[0.3em] hover:text-[var(--color-brand-hover)] transition-colors">
          Begin a conversation →
        </Link>
      </div>
    </div>
  );
}
