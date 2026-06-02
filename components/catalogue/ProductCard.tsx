import Link from 'next/link'
import React from 'react'
import { NormalizedCatalogue } from '@/lib/graphql-types';
import ProtectedImage from '@/components/common/ProtectedImage';

interface ProductCardProps {
  product: NormalizedCatalogue;
}

export default function ProductCard({ product }: ProductCardProps) {
  const hasSecondaryImage = (product.photoGallery?.length || 0) > 1;
  const hoverImage = hasSecondaryImage
    ? (product.photoGallery.find(img => img.url && img.url !== product.image)?.url || product.photoGallery[1]?.url)
    : undefined;
  const showHoverImage = !!hoverImage;

  return (
    <Link
      href={`/catalogue/${product.slug}`}
      className={`relative group border border-[var(--color-brand-primary)] border-[0.5px] block overflow-hidden`}
    >
      <div className="w-full aspect-square relative bg-[#FAF7F7]">
        {/* Default Image */}
        <ProtectedImage
          src={product.image}
          alt={product.name}
          fill
          className={`object-cover transition-all duration-700 group-hover:scale-105 ${
            showHoverImage ? "opacity-100 group-hover:opacity-0" : ""
          }`}
        />

        {/* Hover/Secondary Image */}
        {showHoverImage && (
          <ProtectedImage
            src={hoverImage}
            alt={`${product.name} alternate`}
            fill
            className="object-cover absolute inset-0 opacity-0 group-hover:opacity-100 transition-all duration-700 group-hover:scale-105"
          />
        )}
        {/* Red tint overlay */}
        <div className="absolute inset-0 bg-[var(--color-brand-primary)] mix-blend-multiply opacity-0 group-hover:opacity-15 transition-opacity duration-500" />
        {/* Hover red slide in at 8% */}
        <div className="absolute inset-0 bg-[var(--color-brand-primary)] opacity-0 group-hover:opacity-[0.08] transform -translate-x-full group-hover:translate-x-0 transition-transform duration-700 ease-out" />
        
        {/* Hover/Mobile Content Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent opacity-100 lg:opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-4 md:p-8">
          <div className="transform translate-y-0 lg:translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
            <h3 className="font-serif text-[20px] md:text-[24px] text-white leading-[1.2] mb-2 md:mb-3">{product.name}</h3>
            <p className="text-[10px] uppercase tracking-[0.1em] text-white/80 leading-[1.8] line-clamp-2 md:line-clamp-3 mb-4 md:mb-6">
              {product.argument || product.material}
            </p>
            <div className="border-t border-white/20 pt-3 md:pt-4 flex justify-between items-center">
              <span className="text-[10px] uppercase tracking-[0.2em] text-white/60 truncate pr-4">{product.material}</span>
              <span className="text-[10px] uppercase tracking-[0.3em] text-white flex items-center gap-2 flex-shrink-0">
                View <span className="text-[14px]">→</span>
              </span>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
}
