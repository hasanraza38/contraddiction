export type Category = 'Seating' | 'Tables' | 'Storage' | 'Objects' | 'Lighting';

export interface Product {
  id: string;
  slug: string;
  name: string;
  category: Category;
  material: string;
  origin: string;
  treatment: string;
  year: number;
  argument: string;
  craftNote: string;
  image: string;
  makingOfImages: { url: string; caption: string }[];
}

export const journalArticles = [
  {
    slug: "hotels",
    date: "OCTOBER 12, 2024",
    title: "Why we stopped taking commissions from hotels.",
    excerpt: "A public space demands a compromise we are no longer willing to make. The quiet required for these pieces cannot be legislated in a lobby.",
    readTime: "4 MIN READ",
    content: "When we began, we believed that placing our work in high-traffic, luxury environments was the ultimate validation. We were wrong.\n\nA piece of furniture in a hotel lobby is fundamentally a servant. It exists to accommodate, to endure, and ultimately, to be ignored. It cannot demand attention; it must only facilitate comfort. \n\nBut a Contradiction piece is not a servant. It is an argument.\n\nThree years ago, we installed seven pieces in a prominent brutalist hotel in Berlin. Within six months, they had been moved, adjusted, and 'softened' with throw pillows by well-meaning management. The tension was destroyed. The silence was filled with the noise of accommodation.\n\nWe bought them back. We do not design for passing bodies. We design for individuals who are willing to live with the difficult presence of a singular object. \n\nA hotel wants to make you feel at home. We want to remind you that you are not."
  },
  {
    slug: "heirloom",
    date: "AUGUST 04, 2024",
    title: "On the death of the heirloom.",
    excerpt: "We build things to outlast us, not to be passed down. The idea of the heirloom is sentimental, and sentimentality is the enemy of presence.",
    readTime: "6 MIN READ",
    content: "The concept of an heirloom assumes that the next generation will want the physical burden of your memories. They do not.\n\nWe build pieces using materials that will exist long after the original owner is gone—bronze, stone, ebonized wood—but we do not build them so they can be inherited. We build them to be complete in the present moment.\n\nIf a piece survives you, it should stand as a completely independent entity for whoever finds it next. It should not need your ghost to give it meaning."
  },
  {
    slug: "sit-differently",
    date: "JANUARY 22, 2024",
    title: "A chair should make you sit differently.",
    excerpt: "Comfort is the absence of awareness. If you are entirely comfortable in a chair, the chair has ceased to exist.",
    readTime: "3 MIN READ",
    content: "We are obsessed with ergonomics, but ergonomics is merely the science of forgetting your body. \n\nA truly great piece of seating does not let you forget it. It demands a posture. It requires you to sit with intention. The Hollow Chair, for instance, does not invite lounging. It forces you upright. It makes you aware of your spine, of the weight of your arms, of the room around you. \n\nYou do not relax into it. You engage with it. And in doing so, you remain entirely present."
  }
];

export const products: Product[] = [
  {
    id: "1",
    slug: "the-hollow-chair",
    name: "The Hollow Chair",
    category: "Seating",
    material: "BURNT ASH / CAST IRON",
    origin: "SCOTLAND / GERMANY",
    treatment: "SCORCHED / RAW CAST",
    year: 2024,
    argument: "An inquiry into weight. The Hollow Chair does not invite rest, but demands presence. The burnt ash absorbs light, while the cast iron base anchors it irrefutably to the earth. A tension between the organic and the industrial.\n\nIt refuses the concept of 'lounging.' To sit here is to be entirely aware of your posture, your spine, and the space you occupy. It is a chair for waiting, for thinking, for refusing to be comfortable in the conventional sense.",
    craftNote: "The ash is scorched using a controlled blowtorch process that destroys the soft summer wood rings, leaving only the hardened winter growth. The iron is cast in a single pour and left unpolished, retaining the texture of the sand mold.",
    image: "https://images.unsplash.com/photo-1506439773649-6e0eb8cfb237?q=80&w=1000&auto=format&fit=crop",
    makingOfImages: [
      { url: "https://images.unsplash.com/photo-1533090481720-856c6e3c1fdc?q=80&w=800&auto=format&fit=crop", caption: "scorching the ash" },
      { url: "https://images.unsplash.com/photo-1544457070-4cd773b4d71e?q=80&w=800&auto=format&fit=crop", caption: "iron casting" },
      { url: "https://images.unsplash.com/photo-1610701596007-11502861dcfa?q=80&w=800&auto=format&fit=crop", caption: "final assembly" }
    ]
  },
  {
    id: "2",
    slug: "silent-table-no-3",
    name: "Silent Table No. 3",
    category: "Tables",
    material: "TRAVERTINE / OBSIDIAN",
    origin: "ITALY / MEXICO",
    treatment: "HONED / POLISHED",
    year: 2023,
    argument: "A surface interrupted. The void at the center is not empty, but heavy with implication. The raw travertine speaks of ancient geological time, while the polished obsidian inlay reflects the immediate present.\n\nWe designed this table to dominate a room. It is intentionally too heavy to be moved casually. It dictates the flow of traffic around it. It is an immovable fact.",
    craftNote: "The obsidian is sourced from volcanic deposits and polished for over forty hours until it achieves a liquid mirror finish, creating a jarring contrast against the porous, matte travertine.",
    image: "https://images.unsplash.com/photo-1604074131665-7a4b13870ab4?q=80&w=1000&auto=format&fit=crop",
    makingOfImages: [
      { url: "https://images.unsplash.com/photo-1589939705384-5185137a7f0f?q=80&w=800&auto=format&fit=crop", caption: "selecting the stone" },
      { url: "https://images.unsplash.com/photo-1589939705384-5185137a7f0f?q=80&w=800&auto=format&fit=crop", caption: "polishing obsidian" },
      { url: "https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?q=80&w=800&auto=format&fit=crop", caption: "joining" }
    ]
  },
  {
    id: "3",
    slug: "cabinet-of-weight",
    name: "Cabinet of Weight",
    category: "Storage",
    material: "RAW STEEL / WALNUT",
    origin: "JAPAN / USA",
    treatment: "OXIDISED / OILED",
    year: 2024,
    argument: "Storage as an act of concealment. The Cabinet of Weight offers no handles, no obvious entry points. It is a fortress of raw steel, guarding the delicate warmth of its internal walnut construction.\n\nIt forces you to touch the cold steel to open it. It requires physical effort. It does not yield easily, and that is precisely the point.",
    craftNote: "The steel shell is left to naturally oxidize for six weeks in a humid environment before being sealed. The internal walnut is joined entirely without metal fasteners.",
    image: "https://images.unsplash.com/photo-1595428774223-ef52624120d2?q=80&w=1000&auto=format&fit=crop",
    makingOfImages: [
      { url: "https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?q=80&w=800&auto=format&fit=crop", caption: "welding the shell" },
      { url: "https://images.unsplash.com/photo-1533090481720-856c6e3c1fdc?q=80&w=800&auto=format&fit=crop", caption: "walnut joinery" },
      { url: "https://images.unsplash.com/photo-1544457070-4cd773b4d71e?q=80&w=800&auto=format&fit=crop", caption: "oxidation process" }
    ]
  },
  {
    id: "4",
    slug: "the-refused-prototype",
    name: "The Refused Prototype",
    category: "Objects",
    material: "UNGLAZED PORCELAIN",
    origin: "JAPAN",
    treatment: "BISQUE FIRED",
    year: 2023,
    argument: "A container for nothing. The vessel is impossibly thin, teetering on the edge of collapse. Its unglazed surface absorbs the surrounding acoustics, creating a localized quiet.\n\nIt was originally designed as a base for a lamp, but we refused to add the electrical components. The form was complete. It needed nothing else. To give it a function would have ruined it.",
    craftNote: "Thrown on the wheel and fired only once. It remains porous, brittle, and highly susceptible to absorbing oils from human skin. It records its own history of being touched.",
    image: "https://images.unsplash.com/photo-1610701596007-11502861dcfa?q=80&w=1000&auto=format&fit=crop",
    makingOfImages: [
      { url: "https://images.unsplash.com/photo-1610701596007-11502861dcfa?q=80&w=800&auto=format&fit=crop", caption: "throwing on the wheel" },
      { url: "https://images.unsplash.com/photo-1610701596007-11502861dcfa?q=80&w=800&auto=format&fit=crop", caption: "post-firing inspection" },
      { url: "https://images.unsplash.com/photo-1589939705384-5185137a7f0f?q=80&w=800&auto=format&fit=crop", caption: "surface detailing" }
    ]
  },
  {
    id: "5",
    slug: "object-for-an-empty-room",
    name: "Object for an Empty Room",
    category: "Seating",
    material: "CONCRETE / LEATHER",
    origin: "UK / ARGENTINA",
    treatment: "HAND POURED / VEGETABLE TANNED",
    year: 2025,
    argument: "Suspended weight. A brutal slab of concrete rests uneasily upon a delicate web of taut black leather. The piece asks the sitter to trust in the unseen strength of the bindings.\n\nIt makes no visual sense. The concrete should tear the leather. It does not. The tension is mathematical, precise, and entirely anxiety-inducing.",
    craftNote: "The concrete is a custom ultra-high-performance mix poured entirely by hand to avoid machine vibration patterns. The leather is stretched wet and allowed to dry-shrink into permanent tension.",
    image: "https://images.unsplash.com/photo-1519947486511-46149fa0a254?q=80&w=1000&auto=format&fit=crop",
    makingOfImages: [
      { url: "https://images.unsplash.com/photo-1589939705384-5185137a7f0f?q=80&w=800&auto=format&fit=crop", caption: "pouring the concrete form" },
      { url: "https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?q=80&w=800&auto=format&fit=crop", caption: "leather stretching" },
      { url: "https://images.unsplash.com/photo-1544457070-4cd773b4d71e?q=80&w=800&auto=format&fit=crop", caption: "tensioning" }
    ]
  },
  {
    id: "6",
    slug: "the-commission-that-refused-itself",
    name: "The Commission That Refused Itself",
    category: "Tables",
    material: "EBONISED OAK",
    origin: "FRANCE",
    treatment: "IRON ACETATE REACTED",
    year: 2024,
    argument: "To elevate without celebrating. The surface is entirely light-absorbent, functioning almost as a two-dimensional hole in space. Whatever is placed upon it appears to float.\n\nA client asked for a dining table. We made this instead. They refused it. We kept it. It is arguably the most perfect thing we have ever produced.",
    craftNote: "The oak is not stained or painted. It is painted with a solution of iron acetate which reacts with the natural tannins in the wood to turn it completely black while leaving the grain perfectly visible.",
    image: "https://images.unsplash.com/photo-1533090161767-e6ffed986c88?q=80&w=1000&auto=format&fit=crop",
    makingOfImages: [
      { url: "https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?q=80&w=800&auto=format&fit=crop", caption: "the ebonizing process" },
      { url: "https://images.unsplash.com/photo-1533090481720-856c6e3c1fdc?q=80&w=800&auto=format&fit=crop", caption: "grain raising" },
      { url: "https://images.unsplash.com/photo-1610701596007-11502861dcfa?q=80&w=800&auto=format&fit=crop", caption: "final curing" }
    ]
  },
  {
    id: "7",
    slug: "no-007",
    name: "No. 007",
    category: "Lighting",
    material: "SMOKED GLASS / BRASS",
    origin: "CZECH REPUBLIC / UK",
    treatment: "HAND BLOWN / ACID ETCHED",
    year: 2025,
    argument: "Light as an obstruction. This piece does not exist to illuminate a room; it exists to interrupt the darkness in a highly specific way. The smoked glass obscures the source, forcing the light to pool at the base rather than throw outwards.\n\nIt is useless for reading. It is useless for general visibility. It is entirely useful for altering the psychological state of the room.",
    craftNote: "The glass is free-blown without a mold, resulting in minute variations in wall thickness that distort the light unpredictably. The brass is acid-etched to remove any reflective shine.",
    image: "https://images.unsplash.com/photo-1513506003901-1e6a229e2d15?q=80&w=1000&auto=format&fit=crop",
    makingOfImages: [
      { url: "https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?q=80&w=800&auto=format&fit=crop", caption: "glass blowing" },
      { url: "https://images.unsplash.com/photo-1533090481720-856c6e3c1fdc?q=80&w=800&auto=format&fit=crop", caption: "acid etching" },
      { url: "https://images.unsplash.com/photo-1610701596007-11502861dcfa?q=80&w=800&auto=format&fit=crop", caption: "assembly" }
    ]
  }
];
