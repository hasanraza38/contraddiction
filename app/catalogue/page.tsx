"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, Variants } from "framer-motion";
import { products, Category } from "@/lib/data";

const categories: (Category | "All")[] = ["All", "Seating", "Tables", "Storage", "Objects"];

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
  hidden: { opacity: 0, y: 10 },
  show: { opacity: 1, y: 0, transition: { duration: 0.4, ease: "easeOut" } },
};

export default function Catalogue() {
  const [activeFilter, setActiveFilter] = useState<Category | "All">("All");

  const filteredProducts = activeFilter === "All" 
    ? products 
    : products.filter(p => p.category === activeFilter);

  return (
    <div className="flex flex-col w-full min-h-screen bg-[#FFFFFF]">
      {/* Header & Filters */}
      <div className="px-6 py-12 md:py-20 flex flex-col items-center border-b border-[var(--color-border-light)] border-b-[0.5px]">
        <h1 className="text-4xl md:text-5xl font-serif text-[var(--color-text-primary)] mb-12">
          The <i className="text-[var(--color-brand-primary)]">Catalogue</i>
        </h1>
        
        <div className="flex flex-wrap justify-center gap-8 md:gap-16">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveFilter(cat)}
              className="relative text-[10px] uppercase tracking-[0.3em] text-[var(--color-text-secondary)] hover:text-[var(--color-text-primary)] transition-colors duration-300 pb-1"
            >
              {cat}
              {activeFilter === cat && (
                <span className="absolute bottom-0 left-0 w-full h-[0.5px] bg-[var(--color-brand-primary)]"></span>
              )}
            </button>
          ))}
        </div>
      </div>

      {/* Grid */}
      <motion.div 
        variants={containerVariants}
        initial="hidden"
        animate="show"
        key={activeFilter} // Re-trigger animation on filter change
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3"
      >
        {filteredProducts.map((product, index) => (
          <motion.div variants={itemVariants} key={product.id}>
            <Link 
              href={`/catalogue/${product.slug}`}
              className="block group border-b lg:border-b-0 border-[var(--color-border-light)] lg:border-r border-b-[0.5px] lg:border-r-[0.5px]"
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
              <div className="p-6 border-t border-[var(--color-border-light)] border-t-[0.5px] flex justify-between items-start">
                <div>
                  <h3 className="font-serif text-2xl mb-2 text-[var(--color-text-primary)] group-hover:text-[var(--color-brand-primary)] transition-colors duration-300">{product.name}</h3>
                  <p className="text-[10px] uppercase tracking-[0.2em] text-[var(--color-text-secondary)]">{product.material}</p>
                </div>
                
                {/* Availability Dot */}
                <div 
                  className={`w-2.5 h-2.5 mt-2 rounded-full border border-[var(--color-brand-primary)] border-[0.5px] ${product.isCommissioned ? 'bg-[var(--color-brand-primary)]' : 'bg-transparent'}`}
                  title={product.isCommissioned ? 'Commissioned' : 'Open'}
                />
              </div>
            </Link>
          </motion.div>
        ))}
        {/* Fill empty cells to maintain grid borders if needed, though standard flex/grid will handle it. */}
      </motion.div>
    </div>
  );
}
