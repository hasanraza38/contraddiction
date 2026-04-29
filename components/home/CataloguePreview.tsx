"use client";

import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { useQuery } from "@apollo/client/react";
import { GET_CATALOGUE_ITEMS_LIMITED } from "@/graphql/queries";
import { transformCatalogue, CatalogueNode } from "@/lib/graphql-types";

const CataloguePreview = () => {
  const { loading, error, data } = useQuery<{ catalogues: { nodes: CatalogueNode[] } }>(GET_CATALOGUE_ITEMS_LIMITED, {
    variables: { first: 6 },
  });

  if (loading) {
    return (
      <section className="w-full border-b border-[var(--color-border-light)] border-b-[0.5px] bg-[#FFFFFF]">
        <style>{`
          @keyframes shimmer {
            0%   { background-position: -700px 0; }
            100% { background-position: 700px 0; }
          }
          .sk {
            background: linear-gradient(90deg, #f0f0f0 25%, #e4e4e4 50%, #f0f0f0 75%);
            background-size: 700px 100%;
            animation: shimmer 1.6s infinite linear;
          }
        `}</style>

        {/* Header Bar Skeleton */}
        <div className="flex justify-between items-center px-6 md:px-16 py-8 border-b border-[var(--color-border-light)] border-b-[0.5px]">
          <div className="sk h-3 w-32 rounded-none" />
          <div className="sk h-3 w-16 rounded-none" />
        </div>

        {/* Grid Skeleton */}
        <div className="grid grid-cols-1 md:grid-cols-3">
          {Array.from({ length: 6 }).map((_, index) => (
            <div 
              key={index} 
              className={`relative border-b border-[var(--color-brand-primary)] border-b-[0.5px] md:border-b-0 ${index !== 5 ? 'md:border-r border-r-[0.5px]' : ''}`}
            >
              <div className="w-full aspect-square sk" />
              <div className="p-6 border-t border-[var(--color-brand-primary)] border-t-[0.5px] h-[120px] flex flex-col gap-3">
                <div className="sk h-4 w-3/4 rounded-none" />
                <div className="flex justify-between items-center mt-1">
                  <div className="sk h-2 w-20 rounded-none" />
                  <div className="sk h-2 w-10 rounded-none" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    );
  }

  const previewProducts = data ? data.catalogues.nodes.map(transformCatalogue) : [];

  return (
     <section className="w-full border-b border-[var(--color-border-light)] border-b-[0.5px] bg-[#FFFFFF]">
        <div className="flex justify-between items-center px-6 md:px-16 py-8 border-b border-[var(--color-border-light)] border-b-[0.5px]">
          <span className="text-[10px] uppercase tracking-[0.3em] text-[var(--color-text-secondary)]">Current Collection</span>
          <span className="text-[10px] uppercase tracking-[0.3em] text-[var(--color-text-secondary)]">{previewProducts.length} pieces</span>
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