import Image from "next/image";
import Link from "next/link";
import { client } from "@/lib/apolloClient";
import { GET_CATALOGUE_ITEMS_LIMITED, GET_JOURNAL_LIMITED } from "@/graphql/queries";
import { transformCatalogue, CatalogueNode, transformJournal, JournalNode } from "@/lib/graphql-types";
import EditorialIntro from "@/components/home/EditorialIntro";
import Hero from "@/components/home/Hero";
import Marquee from "@/components/home/Marquee";
import CataloguePreview from "@/components/home/CataloguePreview";
import SingleFeaturedProduct from "@/components/home/SingleFeaturedProduct";
import Stats from "@/components/home/Stats";
import MaterialsAndCraft from "@/components/home/MaterialsAndCraft";
import JournalPreview from "@/components/home/JournalPreview";
import AtelierTeaser from "@/components/home/AtelierTeaser";

export default async function Home() {
  const [catalogueResponse, journalResponse] = await Promise.all([
    client.query<{ catalogues: { nodes: CatalogueNode[] } }>({
      query: GET_CATALOGUE_ITEMS_LIMITED,
      variables: { first: 7 },
    }),
    client.query<{ journals: { nodes: JournalNode[] } }>({
      query: GET_JOURNAL_LIMITED,
      variables: { first: 3 },
    })
  ]);

  const products = catalogueResponse.data?.catalogues?.nodes.map(transformCatalogue) || [];
  const previewProducts = products.slice(0, 6);
  const featuredProduct = products[6];

  const articles = journalResponse.data?.journals?.nodes.map(transformJournal) || [];

  return (
    <div className="flex flex-col w-full">
      {/* Section 1 — Hero */}
      <Hero />

      {/* Section 2 — Marquee */}
      <Marquee />

      {/* Section 3 — Editorial introduction */}
     <EditorialIntro />

      {/* Section 4 — Catalogue preview */}
      <CataloguePreview products={previewProducts} />

      {/* Section 5 — Single featured product */}
      <SingleFeaturedProduct product={featuredProduct} />

      {/* Section 6 — The Numbers */}
      <Stats/>

      {/* Section 7 — Materials & Craft */}
      <MaterialsAndCraft/>

      {/* Section 8 — Journal preview */}
      <JournalPreview articles={articles} />

      {/* Section 9 — Atelier teaser */}
      <AtelierTeaser/>

      
    </div>
  );
}
