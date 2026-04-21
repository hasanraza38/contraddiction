export type Category = 'Seating' | 'Tables' | 'Storage' | 'Objects';

export interface Product {
  id: string;
  slug: string;
  name: string;
  category: Category;
  material: string;
  year: number;
  craftsperson: string;
  isCommissioned: boolean;
  description: string;
  image: string;
  makingOfImages: { url: string; caption: string }[];
}

export const products: Product[] = [
  {
    id: "1",
    slug: "monolith-chair",
    name: "Monolith Chair",
    category: "Seating",
    material: "BURNT ASH / CAST IRON",
    year: 2024,
    craftsperson: "A. L. Sterling",
    isCommissioned: true,
    description: "An inquiry into weight. The Monolith chair does not invite rest, but demands presence. The burnt ash absorbs light, while the cast iron base anchors it irrefutably to the earth. A tension between the organic and the industrial.",
    image: "https://images.unsplash.com/photo-1506439773649-6e0eb8cfb237?q=80&w=1000&auto=format&fit=crop",
    makingOfImages: [
      { url: "https://images.unsplash.com/photo-1533090481720-856c6e3c1fdc?q=80&w=800&auto=format&fit=crop", caption: "scorching the ash to reveal grain" },
      { url: "https://images.unsplash.com/photo-1544457070-4cd773b4d71e?q=80&w=800&auto=format&fit=crop", caption: "iron casting in the foundry" }
    ]
  },
  {
    id: "2",
    slug: "void-table",
    name: "Void Table",
    category: "Tables",
    material: "TRAVERTINE / OBSIDIAN",
    year: 2023,
    craftsperson: "E. V. Black",
    isCommissioned: false,
    description: "A surface interrupted. The void at the center is not empty, but heavy with implication. The raw travertine speaks of ancient geological time, while the polished obsidian inlay reflects the immediate present.",
    image: "https://images.unsplash.com/photo-1604074131665-7a4b13870ab4?q=80&w=1000&auto=format&fit=crop",
    makingOfImages: [
      { url: "https://images.unsplash.com/photo-1589939705384-5185137a7f0f?q=80&w=800&auto=format&fit=crop", caption: "selecting the stone" },
      { url: "https://images.unsplash.com/photo-1589939705384-5185137a7f0f?q=80&w=800&auto=format&fit=crop", caption: "polishing the obsidian inlay" }
    ]
  },
  {
    id: "3",
    slug: "brutal-credenza",
    name: "Brutal Credenza",
    category: "Storage",
    material: "RAW STEEL / WALNUT",
    year: 2024,
    craftsperson: "J. H. Richter",
    isCommissioned: false,
    description: "Storage as an act of concealment. The Brutal Credenza offers no handles, no obvious entry points. It is a fortress of raw steel, guarding the delicate warmth of its internal walnut construction.",
    image: "https://images.unsplash.com/photo-1595428774223-ef52624120d2?q=80&w=1000&auto=format&fit=crop",
    makingOfImages: [
      { url: "https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?q=80&w=800&auto=format&fit=crop", caption: "welding the steel shell" }
    ]
  },
  {
    id: "4",
    slug: "silence-vessel",
    name: "Silence Vessel",
    category: "Objects",
    material: "UNGLAZED PORCELAIN",
    year: 2023,
    craftsperson: "M. T. Kael",
    isCommissioned: true,
    description: "A container for nothing. The Silence Vessel is impossibly thin, teetering on the edge of collapse. Its unglazed surface absorbs the surrounding acoustics, creating a localized quiet.",
    image: "https://images.unsplash.com/photo-1610701596007-11502861dcfa?q=80&w=1000&auto=format&fit=crop",
    makingOfImages: [
      { url: "https://images.unsplash.com/photo-1610701596007-11502861dcfa?q=80&w=800&auto=format&fit=crop", caption: "throwing on the wheel" },
      { url: "https://images.unsplash.com/photo-1610701596007-11502861dcfa?q=80&w=800&auto=format&fit=crop", caption: "post-firing inspection" }
    ]
  },
  {
    id: "5",
    slug: "tension-bench",
    name: "Tension Bench",
    category: "Seating",
    material: "CONCRETE / LEATHER",
    year: 2025,
    craftsperson: "A. L. Sterling",
    isCommissioned: false,
    description: "Suspended weight. A brutal slab of concrete rests uneasily upon a delicate web of taut black leather. The piece asks the sitter to trust in the unseen strength of the bindings.",
    image: "https://images.unsplash.com/photo-1519947486511-46149fa0a254?q=80&w=1000&auto=format&fit=crop",
    makingOfImages: [
      { url: "https://images.unsplash.com/photo-1589939705384-5185137a7f0f?q=80&w=800&auto=format&fit=crop", caption: "pouring the concrete form" }
    ]
  },
  {
    id: "6",
    slug: "shadow-plinth",
    name: "Shadow Plinth",
    category: "Tables",
    material: "EBONIZED OAK",
    year: 2024,
    craftsperson: "E. V. Black",
    isCommissioned: true,
    description: "To elevate without celebrating. The Shadow Plinth is entirely light-absorbent, functioning almost as a two-dimensional hole in space. Whatever is placed upon it appears to float.",
    image: "https://images.unsplash.com/photo-1533090161767-e6ffed986c88?q=80&w=1000&auto=format&fit=crop",
    makingOfImages: [
      { url: "https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?q=80&w=800&auto=format&fit=crop", caption: "the ebonizing process" }
    ]
  }
];
