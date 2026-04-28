import Image from "next/image";
import Link from "next/link";
import { products, journalArticles } from "@/lib/data";
import EditorialIntro from "@/components/home/EditorialIntro";
import Hero from "@/components/home/Hero";
import Marquee from "@/components/home/Marquee";
import CataloguePreview from "@/components/home/CataloguePreview";
import SingleFeaturedProduct from "@/components/home/SingleFeaturedProduct";
import Stats from "@/components/home/Stats";
import MaterialsAndCraft from "@/components/home/MaterialsAndCraft";
import JournalPreview from "@/components/home/JournalPreview";
import AtelierTeaser from "@/components/home/AtelierTeaser";

export default function Home() {
  const previewProducts = products.slice(0, 6);

  return (
    <div className="flex flex-col w-full">
      {/* Section 1 — Hero */}
      <Hero />

      {/* Section 2 — Marquee */}
      <Marquee />

      {/* Section 3 — Editorial introduction */}
     <EditorialIntro />

      {/* Section 4 — Catalogue preview */}
       <CataloguePreview/>

      {/* Section 5 — A single featured piece */}
      <SingleFeaturedProduct/>

      {/* Section 6 — The Numbers */}
      <Stats/>

      {/* Section 7 — Materials & Craft */}
      <MaterialsAndCraft/>

      {/* Section 8 — Journal preview */}
      <JournalPreview/>

      {/* Section 9 — Atelier teaser */}
      <AtelierTeaser/>

      
    </div>
  );
}
