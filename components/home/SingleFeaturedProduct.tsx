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
           <div className="w-full md:w-[40%] p-6 md:p-16 flex flex-col justify-center">
             <span className="text-[10px] uppercase tracking-[0.3em] text-[var(--color-brand-primary)] mb-8">Featured Commission</span>
             <h2 className="text-[48px] md:text-[64px] font-serif leading-tight text-[var(--color-text-primary)] mb-8">
               {product.name}
             </h2>
             <div className="text-[16px] text-[var(--color-text-primary)] leading-[1.9] flex flex-col gap-4 mb-12 whitespace-pre-wrap">
               {product.argument}
             </div>
             
             <div className="w-full border-t border-[var(--color-border-light)] border-t-[0.5px] mb-8">
               <div className="py-4 border-b border-[var(--color-border-light)] border-b-[0.5px] flex justify-between text-[10px] uppercase tracking-[0.2em] text-[var(--color-text-secondary)]">
                 <span>Material</span>
                 <span className="text-[var(--color-text-primary)]">{product.material}</span>
               </div>
               <div className="py-4 border-b border-[var(--color-border-light)] border-b-[0.5px] flex justify-between text-[10px] uppercase tracking-[0.2em] text-[var(--color-text-secondary)]">
                 <span>Craft Note</span>
                 <span className="text-[var(--color-text-primary)]">{product.craftNote || product.treatment}</span>
               </div>
               {/* <div className="py-4 border-b border-[var(--color-border-light)] border-b-[0.5px] flex justify-between text-[10px] uppercase tracking-[0.2em] text-[var(--color-text-secondary)]">
                 <span>Year</span>
                 <span className="text-[var(--color-text-primary)]">{product.year}</span>
               </div> */}
             </div>
   
             <Link href={`/catalogue/${product.slug}`} className="text-[var(--color-brand-primary)] text-[10px] uppercase tracking-[0.3em] hover:text-[var(--color-brand-hover)] transition-colors">
               See full piece →
             </Link>
           </div>
         </section>
  )
}