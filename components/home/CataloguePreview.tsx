import React from 'react'
import { fetchGraphQL } from "@/lib/fetchGraphQL";
import { GET_FEATURED_COLLECTION } from "@/graphql/queries";
import { transformCatalogue, CatalogueNode, NormalizedCatalogue } from "@/lib/graphql-types";
import ProductCard from "@/components/catalogue/ProductCard";

// Force ISR in case it's used directly
export const revalidate = 1800;

interface FeaturedCategory {
  category: string;
  categorySlug: string;
  item: NormalizedCatalogue;
}

export default async function CataloguePreview() {
  const collectionsResponse = await fetchGraphQL(GET_FEATURED_COLLECTION);

  const featuredCollection: FeaturedCategory[] = collectionsResponse.data?.catalogueCategories?.nodes
    ?.filter((cat: { catalogues: { nodes: CatalogueNode[] } }) => cat.catalogues.nodes.length > 0)
    .map((cat: { name: string; slug: string; catalogues: { nodes: CatalogueNode[] } }) => ({
      category: cat.name,
      categorySlug: cat.slug,
      item: transformCatalogue(cat.catalogues.nodes[0] as CatalogueNode),
    })) || [];

  const FEATURED_CATEGORIES_MAPPING = [
    { slug: "bed" },
    { slug: "sofa" },
    { slug: "dining-table" },
    { slug: "wall-decor-and-accessories" },
    { slug: "tv-units" },
    { slug: "dressing-table" },
    { slug: "lighting" }
  ];

  const products: NormalizedCatalogue[] = FEATURED_CATEGORIES_MAPPING.map(mapping => {
    const found = featuredCollection.find((c: FeaturedCategory) => c.categorySlug === mapping.slug);
    return found ? found.item : null;
  }).filter(Boolean) as NormalizedCatalogue[];

  console.log("Product", products);
  
  const gridProducts = products.slice(0, 6);
  // const singleProduct = products[6]; // the 7th product for single featured product

  console.log("gridProducts: ", gridProducts);
  // console.log("singleProduct: ", singleProduct);

  return (
    <>
    <section className="w-full border-b border-[var(--color-border-light)] border-b-[0.5px] bg-[#FFFFFF]">
      <div className="flex justify-between items-center px-6 md:px-16 py-8 border-b border-[var(--color-border-light)] border-b-[0.5px]">
        <span className="text-[10px] uppercase tracking-[0.3em] text-[var(--color-text-secondary)]">Feature Collection</span>
        <span className="text-[10px] uppercase tracking-[0.3em] text-[var(--color-text-secondary)]">{gridProducts.length} pieces</span>
      </div>
      <div className="grid grid-cols-1 gap-[4px] px-[4px] md:grid-cols-3">
        {gridProducts.map((product: NormalizedCatalogue) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </section>

    
    {/* single featured product */}
    {/* {singleProduct && (
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
               
               <div className="mb-16">
                 <h3 className="text-[10px] uppercase tracking-[0.3em] text-[var(--color-brand-primary)] mb-6">The Argument</h3>
                 <div className="flex flex-col gap-4 text-[16px] text-[var(--color-text-primary)] leading-[1.9] whitespace-pre-wrap">
                   {singleProduct.argument}
                 </div>
               </div>

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

               <div className="mb-16">
                 <p className="font-serif italic text-[18px] text-[var(--color-text-secondary)] leading-relaxed">
                   {`"${singleProduct.craftNote}"`}
                 </p>
               </div>
             </div>

             <Link 
               href={`/catalogue/${singleProduct.slug}`} 
               className="w-full bg-[var(--color-brand-primary)] text-white text-center py-6 text-[10px] uppercase tracking-[0.3em] hover:bg-[var(--color-brand-hover)] transition-colors"
             >
               View full piece →
             </Link>
           </div>
      </section>
    )} */}
    </>
  )
}