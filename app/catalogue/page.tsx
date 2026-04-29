"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, Variants } from "framer-motion";
import { useQuery } from "@apollo/client/react";
import { GET_CATALOGUE_ITEMS, GET_CATALOGUES_BY_CATEGORY } from "@/graphql/queries";
import { transformCatalogue, CatalogueNode } from "@/lib/graphql-types";

const categories = ["All", "Seating", "Table", "Furniture", "Objects", "Lighting"];

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

export default function Catalogue() {
  const [activeFilter, setActiveFilter] = useState<string>("All");

  const queryToUse = activeFilter === "All" ? GET_CATALOGUE_ITEMS : GET_CATALOGUES_BY_CATEGORY;
  
  // Note: we use any for data here because the response shape differs between the two queries
  const { loading, error, data } = useQuery<any>(queryToUse, {
    variables: activeFilter === "All" ? undefined : { categorySlug: activeFilter.toLowerCase() }
  });

  if (loading) {
    return (
      <div className="flex flex-col w-full bg-[#FFFFFF]">
        <style>{`
          @keyframes shimmer {
            0% { background-position: -600px 0; }
            100% { background-position: 600px 0; }
          }
          .skeleton-shimmer {
            background: linear-gradient(90deg, #f0f0f0 25%, #e0e0e0 50%, #f0f0f0 75%);
            background-size: 600px 100%;
            animation: shimmer 1.6s infinite linear;
          }
        `}</style>

        {/* Header skeleton */}
        <div className="py-24 md:py-32 flex flex-col items-center gap-4 border-b border-[var(--color-brand-primary)] border-b-[0.5px]">
          <div className="skeleton-shimmer h-6 w-48 rounded-none" />
          <div className="skeleton-shimmer h-6 w-40 rounded-none" />
          <div className="skeleton-shimmer h-6 w-36 rounded-none" />
        </div>

        {/* Filter bar skeleton */}
        <div className="px-6 py-8 border-b border-[var(--color-brand-primary)] border-b-[0.5px] flex justify-center">
          <div className="flex items-center gap-8">
            {[80, 64, 56, 72, 60, 72].map((w, i) => (
              <div key={i} className="skeleton-shimmer h-2 rounded-none" style={{ width: w }} />
            ))}
          </div>
        </div>

        {/* Grid skeleton */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 bg-[var(--color-brand-primary)] gap-[0.5px] border-b border-[var(--color-brand-primary)] border-b-[0.5px]">
          {Array.from({ length: 6 }).map((_, i) => (
            <div key={i} className="bg-[#FFFFFF] flex flex-col">
              {/* Image area */}
              <div className="w-full aspect-square skeleton-shimmer" />
              {/* Info area */}
              <div className="p-6 flex flex-col gap-3 min-h-[140px]">
                <div className="skeleton-shimmer h-4 w-3/5 rounded-none" />
                <div className="flex gap-4">
                  <div className="skeleton-shimmer h-2 w-24 rounded-none" />
                  <div className="skeleton-shimmer h-2 w-10 rounded-none" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }

  const rawNodes: CatalogueNode[] = activeFilter === "All" 
    ? data?.catalogues?.nodes 
    : data?.catalogueCategory?.catalogues?.nodes;

  const products = rawNodes ? rawNodes.map(transformCatalogue) : [];
  
  // We no longer need local filtering since the GraphQL API handles it for us
  const filteredProducts = products;

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
          {categories.map((cat, i) => (
            <div key={cat} className="flex items-center gap-6 md:gap-12">
              <button
                onClick={() => setActiveFilter(cat)}
                className={`relative text-[10px] uppercase tracking-[0.3em] transition-colors duration-300 ${activeFilter === cat ? 'text-[var(--color-text-primary)]' : 'text-[var(--color-text-secondary)] hover:text-[var(--color-text-primary)]'}`}
              >
                {cat}
                {activeFilter === cat && (
                  <span className="absolute -bottom-1 left-0 w-full h-[0.5px] bg-[var(--color-brand-primary)]"></span>
                )}
              </button>
              {i < categories.length - 1 && <span className="text-[var(--color-border-light)] text-[10px]">·</span>}
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
        {filteredProducts.map((product) => (
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
                    <div className="flex gap-4 mt-2">
                      <p className="text-[10px] uppercase tracking-[0.2em] text-[var(--color-text-secondary)]">{product.material}</p>
                      <p className="text-[10px] text-[var(--color-text-secondary)]">{product.year}</p>
                    </div>
                  </div>
                  
                  {/* Availability Square (strict no border-radius) */}
                  {/* <div 
                    className={`w-2.5 h-2.5 mt-1 border border-[var(--color-brand-primary)] border-[1px] ${product.isCommissioned ? 'bg-[var(--color-brand-primary)]' : 'bg-transparent'}`}
                    title={product.isCommissioned ? 'Commissioned' : 'Open'}
                  /> */}
                </div>
                <div className="text-[var(--color-brand-primary)] text-[10px] uppercase tracking-[0.3em] opacity-0 group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0 transition-all duration-500 ease-out">
                  View →
                </div>
              </div>
            </Link>
          </motion.div>
        ))}
        {/* Fill empty cells to maintain grid lines */}
        {Array.from({ length: (3 - (filteredProducts.length % 3)) % 3 }).map((_, i) => (
          <div key={`empty-${i}`} className="bg-[#FFFFFF] hidden lg:block"></div>
        ))}
      </motion.div>

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
