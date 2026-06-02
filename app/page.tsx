import EditorialIntro from "@/components/home/EditorialIntro";
import Hero from "@/components/home/Hero";
import Marquee from "@/components/home/Marquee";
import CataloguePreview from "@/components/home/CataloguePreview";
import Stats from "@/components/home/Stats";
import MaterialsAndCraft from "@/components/home/MaterialsAndCraft";
import JournalPreview from "@/components/home/JournalPreview";
import CatalogueTeaser from "@/components/home/CatalogueTeaser";

export const revalidate = 1800; // 30 minutes

export default function Home() {
  return (
    <div className="flex flex-col w-full">
      {/* Section 1 — Hero */}
      <Hero />

      {/* Section 2 — Marquee */}
      <Marquee />

      {/* Section 3 — Editorial introduction */}
      <EditorialIntro />

      {/* Section 4 & 5 — Catalogue preview and single product */}
      <CataloguePreview />

      {/* Section 6 — The Numbers */}
      <Stats />

      {/* Section 7 — Materials & Craft */}
      <MaterialsAndCraft />

      {/* Section 8 — Journal preview */}
      <JournalPreview />

      {/* Section 9 — Catalogue teaser */}
      <CatalogueTeaser/>
      


    </div>
  );
}
