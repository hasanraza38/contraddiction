import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { fetchGraphQL } from "@/lib/fetchGraphQL";
import { GET_CATALOGUE_ITEMS_LIMITED } from "@/graphql/queries";
import { transformCatalogue } from "@/lib/graphql-types";

// Force ISR in case it's used directly
export const revalidate = 1800;

export default async function SingleFeaturedProduct() {
  const response = await fetchGraphQL(GET_CATALOGUE_ITEMS_LIMITED, { first: 7 });
  const products = response.data?.catalogues?.nodes?.map(transformCatalogue) || [];
  const product = products[6]; // Grab the 7th item as per original logic

  if (!product) return null;

  return (
   <section className="w-full flex flex-col md:flex-row border-b border-[var(--color-border-light)] border-b-[0.5px] bg-[#FFFFFF]">
           <div className="w-full md:w-[60%] aspect-square md:aspect-auto relative border-b md:border-b-0 md:border-r border-[var(--color-border-light)] border-r-[0.5px]">
             <Image 
               src={product.image}
               alt={product.name}
               fill
               sizes="(max-width: 768px) 100vw, 60vw"
               className="object-cover grayscale"
               priority
             />
           </div>
           <div className="w-full lg:w-[40%] flex flex-col">
             <div className="flex-grow p-6 md:p-12 lg:p-16 flex flex-col">
               <span className="text-[10px] uppercase tracking-[0.3em] text-(--color-brand-primary) mb-8">Featured Commission</span>
               
               <h2 className="font-serif text-[48px] md:text-[56px] text-(--color-text-primary) leading-[1.1] mb-12">
                 {product.name}
               </h2>
               
               {/* The Argument */}
               <div className="mb-16">
                 <h3 className="text-[10px] uppercase tracking-[0.3em] text-(--color-brand-primary) mb-6">The Argument</h3>
                 <div className="flex flex-col gap-4 text-[16px] text-(--color-text-primary) leading-[1.9] whitespace-pre-wrap">
                   {product.argument}
                 </div>
               </div>

               {/* Materials Table */}
               <div className="mb-16">
                 <h3 className="text-[10px] uppercase tracking-[0.3em] text-(--color-text-secondary) mb-6">Materials</h3>
                 <div className="flex flex-col">
                   <div className="py-4 border-b border-(--color-border-light) border-b-[0.5px] flex justify-between text-[10px] uppercase tracking-[0.2em]">
                     <span className="text-(--color-text-secondary)">Material</span>
                     <span className="text-(--color-text-primary)">{product.material}</span>
                   </div>
                   <div className="py-4 border-b border-(--color-border-light) border-b-[0.5px] flex justify-between text-[10px] uppercase tracking-[0.2em]">
                     <span className="text-(--color-text-secondary)">Origin</span>
                     <span className="text-(--color-text-primary)">{product.origin}</span>
                   </div>
                   <div className="py-4 border-b border-(--color-border-light) border-b-[0.5px] flex justify-between text-[10px] uppercase tracking-[0.2em]">
                     <span className="text-(--color-text-secondary)">Treatment</span>
                     <span className="text-(--color-text-primary)">{product.treatment}</span>
                   </div>
                 </div>
               </div>

               {/* Craft Note */}
               <div className="mb-16">
                 <p className="font-serif italic text-[18px] text-(--color-text-secondary) leading-relaxed">
                   {`"${product.craftNote}"`}
                 </p>
               </div>
             </div>

             {/* View Full Piece Button */}
             <Link 
               href={`/catalogue/${product.slug}`} 
               className="w-full bg-(--color-brand-primary) text-white text-center py-6 text-[10px] uppercase tracking-[0.3em] hover:bg-(--color-brand-hover) transition-colors"
             >
               View full piece →
             </Link>
           </div>
         </section>
  )
}