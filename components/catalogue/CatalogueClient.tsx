"use client";

import { useState, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, Variants } from "framer-motion";
import { NormalizedCatalogue } from "@/lib/graphql-types";
import { useSearchParams, useRouter } from "next/navigation";
import ProductCard from "./ProductCard";

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
  const searchParams = useSearchParams();
  const router = useRouter();

  // Use fetched categories if provided, otherwise derive from products
  const dynamicCategories = ["All", ...Array.from(new Set(fetchedCategories.length > 0 ? fetchedCategories : products.map(p => p.category).filter(Boolean)))];

  const categoryParam = searchParams.get("category");
  const initialCategory = categoryParam || "All";
  const pageParam = searchParams.get("page");
  const initialPage = pageParam ? parseInt(pageParam, 10) : 1;

  const [activeFilter, setActiveFilter] = useState<string>(initialCategory);
  const [currentPage, setCurrentPage] = useState<number>(initialPage);
  const [prevCategoryParam, setPrevCategoryParam] = useState<string | null>(categoryParam);
  const [prevPageParam, setPrevPageParam] = useState<string | null>(pageParam);

  if (categoryParam !== prevCategoryParam) {
    setPrevCategoryParam(categoryParam);
    setActiveFilter(initialCategory);
  }

  if (pageParam !== prevPageParam) {
    setPrevPageParam(pageParam);
    setCurrentPage(initialPage);
  }

  const handleFilterClick = (cat: string) => {
    setActiveFilter(cat);
    setCurrentPage(1);
    
    const params = new URLSearchParams(searchParams.toString());
    if (cat === "All") {
      params.delete("category");
    } else {
      params.set("category", cat);
    }
    params.delete("page");
    router.replace(`?${params.toString()}`, { scroll: false });
  };

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
    
    const params = new URLSearchParams(searchParams.toString());
    if (page === 1) {
      params.delete("page");
    } else {
      params.set("page", page.toString());
    }
    router.replace(`?${params.toString()}`, { scroll: false });
    
    window.scrollTo({ top: 300, behavior: 'smooth' });
  };

  // Drag to scroll logic
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);

  const handleMouseDown = (e: React.MouseEvent) => {
    if (!scrollContainerRef.current) return;
    setIsDragging(true);
    setStartX(e.pageX - scrollContainerRef.current.offsetLeft);
    setScrollLeft(scrollContainerRef.current.scrollLeft);
  };

  const handleMouseLeave = () => {
    setIsDragging(false);
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging || !scrollContainerRef.current) return;
    e.preventDefault();
    const x = e.pageX - scrollContainerRef.current.offsetLeft;
    const walk = (x - startX) * 2; // Scroll-fast
    scrollContainerRef.current.scrollLeft = scrollLeft - walk;
  };

  const scrollByAmount = (amount: number) => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: amount, behavior: "smooth" });
    }
  };

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
  const getPageNumbers = () => {
    const pages: (number | string)[] = [];
    if (totalPages <= 5) {
      for (let i = 1; i <= totalPages; i++) {
        pages.push(i);
      }
    } else {
      if (currentPage <= 2) {
        pages.push(1, 2, 3, '...', totalPages);
      } else if (currentPage >= totalPages - 1) {
        pages.push(1, '...', totalPages - 2, totalPages - 1, totalPages);
      } else {
        pages.push(1, '...', currentPage - 1, currentPage, currentPage + 1, '...', totalPages);
      }
    }
    return pages;
  };


  return (
    <div className="flex flex-col w-full bg-[#FFFFFF]">
      {/* Top Editorial Intro */}
      <div className="relative py-28 md:py-40 flex flex-col items-center justify-center border-b border-(--color-brand-primary) border-b-[0.5px] overflow-hidden">
        {/* Sketch Background */}
        <div className="absolute inset-0 md:-top-[20rem] pointer-events-none opacity-[0.48] md:opacity-[0.35] mix-blend-multiply z-0">
          <Image
            src="/sketch-21.jpeg"
            alt="Catalogue background sketch"
            fill
            className="object-cover object-center"
            priority
          />
        </div>
        {/* <h1 className="relative z-10 text-3xl bg-[#9500024d] md:text-5xl font-serif italic text-(--color-text-primary) text-center font-bold leading-relaxed px-6 underline underline-offset-[5px] decoration-[0.5px] decoration-white ">
          Form without compromise.<br/>
          Material without apology.<br/>
          The Collection.
        </h1> */}


        <h1 className="relative z-10 text-3xl bg-[#aaa7a734] md:text-5xl font-serif italic text-(--color-text-primary) text-center font-extrabold leading-relaxed px-6 underline underline-offset-[9px] decoration-[2px] decoration-white/90 ">
          Form without compromise.<br/>
          Material without apology.<br/>
         The <span className="text-[#950002] tracking-wider text-5xl md:text-7xl font-lavishly_yours">Collection.</span>
        </h1>

      </div>

      {/* Filter Bar */}
      {/* border-b border-(--color-brand-primary) border-b-[0.5px] */}
      <div className="py-6 md:py-8 w-full px-4 md:px-8">
        <div className=" mx-auto flex items-center gap-2 md:gap-4 group">
          {/* Left Arrow */}
          <button 
            onClick={() => scrollByAmount(-200)}
            className="flex shrink-0 items-center justify-center w-10 h-10 md:w-12 md:h-12 bg-white/80 backdrop-blur-sm border border-[var(--color-border-light)] shadow-sm text-gray-500 hover:text-black transition-colors"
            aria-label="Scroll left"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m15 18-6-6 6-6"/></svg>
          </button>

          <div 
            ref={scrollContainerRef}
            onMouseDown={handleMouseDown}
            onMouseLeave={handleMouseLeave}
            onMouseUp={handleMouseUp}
            onMouseMove={handleMouseMove}
            className="flex-1 flex overflow-x-auto px-2 md:px-6 py-2 gap-6 md:gap-12 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden select-none"
          >
            {dynamicCategories.map((cat, i) => (
              <div key={cat} className="flex items-center gap-6 md:gap-12  shrink-0">
                <button
                  onClick={() => handleFilterClick(cat)}
                  className={`relative pb-1 cursor-pointer whitespace-nowrap text-[10px] uppercase tracking-[0.3em] transition-colors duration-300 ${activeFilter === cat ? 'text-(--color-text-primary)' : 'text-(--color-text-secondary) hover:text-(--color-text-primary)'}`}
                >
                  {cat}
                  {activeFilter === cat && (
                    <span className="absolute bottom-0 left-0 w-full h-[1px] md:h-[0.5px] bg-(--color-brand-primary)"></span>
                  )}
                </button>
                {i < dynamicCategories.length - 1 && <span className="text-black font-bold text-[10px]">·</span>}
              </div>
            ))}
          </div>

          {/* Right Arrow */}
          <button 
            onClick={() => scrollByAmount(200)}
            className="flex shrink-0 items-center justify-center w-10 h-10 md:w-12 md:h-12 bg-white/80 backdrop-blur-sm border border-[var(--color-border-light)] shadow-sm text-gray-500 hover:text-black transition-colors"
            aria-label="Scroll right"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m9 18 6-6-6-6"/></svg>
          </button>
        </div>
      </div>

     {/* Grid */}
      <motion.div 
        variants={containerVariants}
        initial="hidden"
        animate="show"
        key={activeFilter}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 bg-white gap-[4px] px-[4px]"
        // border-b border-[var(--color-brand-primary)] border-b-[0.5px]
      >
        {paginatedProducts.map((product) => (
          <motion.div variants={itemVariants} key={product.id} className="bg-[#FFFFFF] border border-[var(--color-brand-primary)] border-[0.5px]">
            {/* <Link 
              href={`/catalogue/${product.slug}`}
              className="block group h-full flex flex-col"
            >
              <div className="w-full aspect-square relative overflow-hidden bg-[#FAF7F7]">
                <Image 
                  src={product.image}
                  alt={product.name}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className="object-cover bg-full "
                />
             
                
                 <div className="absolute inset-0 bg-[var(--color-brand-primary)] mix-blend-multiply opacity-0 group-hover:opacity-15 transition-opacity duration-500" />
                <div className="absolute inset-0 bg-[var(--color-brand-primary)] opacity-0 group-hover:opacity-[0.08] transform -translate-x-full group-hover:translate-x-0 transition-transform duration-700 ease-out" />
              </div>
              <div className="p-6 flex flex-col justify-between flex-grow min-h-[140px]">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h3 className="font-serif text-[18px] text-[var(--color-text-primary)] group-hover:text-[var(--color-brand-primary)] transition-colors duration-300">{product.name}</h3>
                    <div className="flex gap-4 mt-2">
                      <p className="text-[10px] uppercase tracking-[0.2em] text-[var(--color-text-secondary)]">{product.material}</p>
                    </div>
                  </div>
                </div>
                <div className="text-[var(--color-brand-primary)] text-[10px] uppercase tracking-[0.3em] opacity-100 md:opacity-0 group-hover:opacity-100 transform translate-y-0 md:translate-y-2 group-hover:translate-y-0 transition-all duration-500 ease-out">
                  View →
                </div>
              </div>
            </Link> */}

            <ProductCard key={product.id} product={product} />
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
            onClick={() => handlePageChange(Math.max(currentPage - 1, 1))}
            disabled={currentPage === 1}
            className="text-[10px] uppercase tracking-[0.3em] transition-colors duration-300 disabled:opacity-30 hover:text-[var(--color-brand-primary)]"
          >
            ← Prev
          </button>
          <div className="flex gap-4 items-center">
            {getPageNumbers().map((page, i) => (
              page === '...' ? (
                <span key={`ellipsis-${i}`} className="text-[10px] uppercase tracking-[0.3em] text-[var(--color-text-secondary)]">
                  ...
                </span>
              ) : (
                <button
                  key={i}
                  onClick={() => handlePageChange(page as number)}
                  className={`text-[10px] uppercase tracking-[0.3em] transition-colors duration-300 ${currentPage === page ? 'text-[var(--color-text-primary)] font-bold' : 'text-[var(--color-text-secondary)] hover:text-[var(--color-brand-primary)]'}`}
                >
                  {page}
                </button>
              )
            ))}
          </div>
          <button 
            onClick={() => handlePageChange(Math.min(currentPage + 1, totalPages))}
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