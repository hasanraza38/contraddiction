import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { fetchGraphQL } from "@/lib/fetchGraphQL";
import { GET_FEATURED_COLLECTION } from "@/graphql/queries";
import { transformCatalogue } from "@/lib/graphql-types";

// Force ISR in case it's used directly
export const revalidate = 1800;

export default async function CataloguePreview() {
  const collectionsResponse = await fetchGraphQL(GET_FEATURED_COLLECTION);

  const featuredCollection = collectionsResponse.data?.catalogueCategories?.nodes
    ?.filter((cat: any) => cat.catalogues.nodes.length > 0)
    .map((cat: any) => ({
      category: cat.name,
      categorySlug: cat.slug,
      item: transformCatalogue(cat.catalogues.nodes[0]),
    })) || [];

  const FEATURED_CATEGORIES_MAPPING = [
    { slug: "bed" },
    { slug: "sofa" },
    { slug: "dining-table" },
    { slug: "decor-and-art" },
    { slug: "tv-console" },
    { slug: "dressing-table" },
    { slug: "lighting" }
  ];

  let products = FEATURED_CATEGORIES_MAPPING.map(mapping => {
    const found = featuredCollection.find((c: any) => c.categorySlug === mapping.slug);
    return found ? found.item : null;
  }).filter(Boolean);

  const gridProducts = products.slice(0, 6);
  const singleProduct = products[6]; // the 7th product for single featured product

  return (
    <>
    <section className="w-full border-b border-[var(--color-border-light)] border-b-[0.5px] bg-[#FFFFFF]">
      <div className="flex justify-between items-center px-6 md:px-16 py-8 border-b border-[var(--color-border-light)] border-b-[0.5px]">
        <span className="text-[10px] uppercase tracking-[0.3em] text-[var(--color-text-secondary)]">Feature Collection</span>
        <span className="text-[10px] uppercase tracking-[0.3em] text-[var(--color-text-secondary)]">{gridProducts.length} pieces</span>
      </div>
      <div className="grid grid-cols-1 gap-[4px] px-[4px] md:grid-cols-3">
        {gridProducts.map((product: any, index: number) => (
          <Link
            key={product.id}
            href={`/catalogue/${product.slug}`}
            className={`relative group border border-[var(--color-brand-primary)] border-[0.5px] block overflow-hidden`}
          >
            <div className="w-full aspect-square relative bg-[#FAF7F7]">
              <Image
                src={product.image}
                alt={product.name}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />
              {/* Red tint overlay */}
              <div className="absolute inset-0 bg-[var(--color-brand-primary)] mix-blend-multiply opacity-0 group-hover:opacity-15 transition-opacity duration-500" />
              {/* Hover red slide in at 8% */}
              <div className="absolute inset-0 bg-[var(--color-brand-primary)] opacity-0 group-hover:opacity-[0.08] transform -translate-x-full group-hover:translate-x-0 transition-transform duration-700 ease-out" />
              
              {/* Hover Content Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-6 md:p-8">
                <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                  <h3 className="font-serif text-[24px] text-white leading-[1.2] mb-3">{product.name}</h3>
                  <p className="text-[10px] uppercase tracking-[0.1em] text-white/80 leading-[1.8] line-clamp-3 mb-6">
                    {product.argument || product.material}
                  </p>
                  <div className="border-t border-white/20 pt-4 flex justify-between items-center">
                    <span className="text-[10px] uppercase tracking-[0.2em] text-white/60 truncate pr-4">{product.material}</span>
                    <span className="text-[10px] uppercase tracking-[0.3em] text-white flex items-center gap-2 flex-shrink-0">
                      View <span className="text-[14px]">→</span>
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </section>

    
    {/* single featured product */}
    {singleProduct && (
      <section className="w-full flex flex-col md:flex-row border-b border-[var(--color-border-light)] border-b-[0.5px] bg-[#FFFFFF]">
           <div className="w-full md:w-[60%] aspect-square md:aspect-auto relative border-b md:border-b-0 md:border-r border-[var(--color-border-light)] border-r-[0.5px]">
             <Image 
               src={singleProduct.image}
               alt={singleProduct.name}
               fill
               sizes="(max-width: 768px) 100vw, 60vw"
               className="object-cover"
               priority
             />
           </div>
           <div className="w-full lg:w-[40%] flex flex-col">
             <div className="flex-grow p-6 md:p-12 lg:p-16 flex flex-col">
               <span className="text-[10px] uppercase tracking-[0.3em] text-[var(--color-brand-primary)] mb-8">Featured Commission</span>
               
               <h2 className="font-serif text-[48px] md:text-[56px] text-[var(--color-text-primary)] leading-[1.1] mb-12">
                 {singleProduct.name}
               </h2>
               
               {/* The Argument */}
               <div className="mb-16">
                 <h3 className="text-[10px] uppercase tracking-[0.3em] text-[var(--color-brand-primary)] mb-6">The Argument</h3>
                 <div className="flex flex-col gap-4 text-[16px] text-[var(--color-text-primary)] leading-[1.9] whitespace-pre-wrap">
                   {singleProduct.argument}
                 </div>
               </div>

               {/* Materials Table */}
               <div className="mb-16">
                 <h3 className="text-[10px] uppercase tracking-[0.3em] text-[var(--color-text-secondary)] mb-6">Materials</h3>
                 <div className="flex flex-col">
                   <div className="py-4 border-b border-[var(--color-border-light)] border-b-[0.5px] flex justify-between text-[10px] uppercase tracking-[0.2em]">
                     <span className="text-[var(--color-text-secondary)]">Material</span>
                     <span className="text-[var(--color-text-primary)]">{singleProduct.material}</span>
                   </div>
                   <div className="py-4 border-b border-[var(--color-border-light)] border-b-[0.5px] flex justify-between text-[10px] uppercase tracking-[0.2em]">
                     <span className="text-[var(--color-text-secondary)]">Origin</span>
                     <span className="text-[var(--color-text-primary)]">{singleProduct.origin}</span>
                   </div>
                   <div className="py-4 border-b border-[var(--color-border-light)] border-b-[0.5px] flex justify-between text-[10px] uppercase tracking-[0.2em]">
                     <span className="text-[var(--color-text-secondary)]">Treatment</span>
                     <span className="text-[var(--color-text-primary)]">{singleProduct.treatment}</span>
                   </div>
                 </div>
               </div>

               {/* Craft Note */}
               <div className="mb-16">
                 <p className="font-serif italic text-[18px] text-[var(--color-text-secondary)] leading-relaxed">
                   {`"${singleProduct.craftNote}"`}
                 </p>
               </div>
             </div>

             {/* View Full Piece Button */}
             <Link 
               href={`/catalogue/${singleProduct.slug}`} 
               className="w-full bg-[var(--color-brand-primary)] text-white text-center py-6 text-[10px] uppercase tracking-[0.3em] hover:bg-[var(--color-brand-hover)] transition-colors"
             >
               View full piece →
             </Link>
           </div>
      </section>
    )}
    </>
  )
}