import Image from "next/image";

export default function Atelier() {
  const timeline = [
    { stage: "Commission confirmed", duration: "1 week", desc: "The agreement is finalized and the argument is set." },
    { stage: "Material sourcing", duration: "4–12 weeks", desc: "We seek specific veins of stone, specific ages of wood." },
    { stage: "Prototype (refused)", duration: "6–8 weeks", desc: "The first attempt is built entirely to find its flaws, then discarded." },
    { stage: "Final prototype", duration: "4 weeks", desc: "A scale-accurate study of tension and weight." },
    { stage: "Making begins", duration: "12–24 weeks", desc: "The physical labor. No CNC machines. Hand pouring, hand joining." },
    { stage: "Installation", duration: "1 week", desc: "The piece is placed in its final environment." },
    { stage: "Handover", duration: "1 day", desc: "We leave the piece. It belongs to the room now." }
  ];

  const craftspeople = [
    { name: "A. L. Sterling", title: "MASTER OF WEIGHT", quote: "If it doesn't fight back, it isn't finished.", img: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=400&auto=format&fit=crop" },
    { name: "E. V. Black", title: "SURFACE & STONE", quote: "The material knows what it wants. You just have to force it.", img: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=400&auto=format&fit=crop" },
    { name: "J. H. Richter", title: "JOINERY & TENSION", quote: "A joint should look like it is barely holding on.", img: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=400&auto=format&fit=crop" }
  ];

  return (
    <div className="flex flex-col w-full bg-[#FFFFFF]">
      {/* Top Visual Statement */}
      <div className="w-full flex flex-col md:flex-row border-b border-[var(--color-border-light)] border-b-[0.5px]">
        <div className="w-full md:w-1/2 p-12 md:p-24 border-b md:border-b-0 md:border-r border-[var(--color-border-light)] border-r-[0.5px] flex items-center justify-center">
          <h1 className="font-serif text-[48px] md:text-[72px] text-[var(--color-text-primary)]">The work.</h1>
        </div>
        <div className="w-full md:w-1/2 p-12 md:p-24 flex items-center justify-center">
          <h1 className="font-serif text-[48px] md:text-[72px] text-[var(--color-text-primary)]">The silence.</h1>
        </div>
      </div>

      {/* 2-column layout */}
      <div className="w-full flex flex-col-reverse md:flex-row border-b border-[var(--color-border-light)] border-b-[0.5px]">
        {/* Left: Stacked images */}
        <div className="w-full md:w-[40%] flex flex-col border-r border-[var(--color-border-light)] border-r-[0.5px]">
          {[
            "https://images.unsplash.com/photo-1589939705384-5185137a7f0f?q=80&w=800&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?q=80&w=800&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1533090481720-856c6e3c1fdc?q=80&w=800&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1544457070-4cd773b4d71e?q=80&w=800&auto=format&fit=crop"
          ].map((img, i) => (
            <div key={i} className={`w-full aspect-[3/4] relative ${i !== 3 ? 'border-b border-[var(--color-border-light)] border-b-[0.5px]' : ''}`}>
              <Image src={img} fill sizes="(max-width: 768px) 100vw, 50vw" className="object-cover grayscale" alt="Atelier detail" />
            </div>
          ))}
        </div>
        
        {/* Right: Editorial text */}
        <div className="w-full md:w-[60%] p-6 md:p-16 lg:p-24 flex flex-col justify-center">
          <div className="max-w-xl text-[16px] text-[var(--color-text-primary)] leading-[1.9] flex flex-col gap-6">
            <p>
              The physical atelier is located in an unmarked warehouse in Karachi. It is deliberately difficult to find. There are no showrooms, no receptionists, and no public tours.
            </p>
            <p>
              Inside, eight craftspeople work in near-total silence. The noise of creation is present—the grinding of stone, the strike of a hammer on hot iron, the slow tearing of thick leather—but there is no unnecessary conversation. The focus is singular and absolute.
            </p>
            <p>
              We refuse to use CNC machines or mass-produced hardware. If a piece requires a bolt, we machine the bolt. If it requires a hinge, we forge the hinge. This is not out of nostalgia for old-world craft; it is out of a need for total control. A machine cannot feel the tension in a piece of wood just before it splits.
            </p>
            <p>
              A normal day here sounds like violence and patience in equal measure. A single commission can take up to fourteen months to build. Most of that time is spent waiting—waiting for concrete to cure, for wood to acclimatize, for iron to oxidize. We do not rush the material.
            </p>
          </div>
        </div>
      </div>

      {/* Timeline Section */}
      <section className="w-full py-32 px-6 md:px-24 border-b border-[var(--color-border-light)] border-b-[0.5px] flex flex-col md:flex-row gap-16">
        <div className="w-full md:w-1/3">
          <h2 className="font-serif text-[40px] text-[var(--color-text-primary)] sticky top-32">
            The Process
          </h2>
        </div>
        <div className="w-full md:w-2/3 relative">
          <div className="absolute top-0 bottom-0 left-[4.5px] w-[0.5px] bg-[var(--color-brand-primary)]"></div>
          <div className="flex flex-col gap-16">
            {timeline.map((item, i) => (
              <div key={i} className="relative pl-12">
                <div className="absolute left-0 top-1.5 w-2.5 h-2.5 rounded-none bg-[var(--color-brand-primary)]"></div>
                <div className="flex flex-col md:flex-row md:items-baseline gap-2 md:gap-6 mb-2">
                  <h3 className="font-serif text-[24px] text-[var(--color-text-primary)]">{item.stage}</h3>
                  <span className="text-[10px] uppercase tracking-[0.2em] text-[var(--color-text-secondary)]">{item.duration}</span>
                </div>
                <p className="font-serif italic text-[18px] text-[var(--color-text-secondary)]">"{item.desc}"</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Craftspeople Section */}
      <section className="w-full py-32 px-6 border-b border-[var(--color-border-light)] border-b-[0.5px] bg-[#FFFFFF]">
        <div className="max-w-6xl mx-auto">
          <h2 className="font-serif text-[40px] text-[var(--color-text-primary)] mb-16 text-center">Those who make.</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8">
            {craftspeople.map((person, i) => (
              <div key={i} className="flex flex-col items-center text-center">
                {/* The only circles on the site */}
                <div className="w-32 h-32 relative rounded-full overflow-hidden mb-8 border border-[var(--color-border-light)] border-[0.5px]">
                  <Image src={person.img} fill sizes="128px" className="object-cover grayscale" alt={person.name} />
                </div>
                <h3 className="font-serif text-[24px] text-[var(--color-text-primary)] mb-2">{person.name}</h3>
                <span className="text-[10px] uppercase tracking-[0.3em] text-[var(--color-text-secondary)] mb-6">{person.title}</span>
                <p className="font-serif italic text-[16px] text-[var(--color-text-secondary)] max-w-[250px]">
                  "{person.quote}"
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* End section */}
      <section className="w-full bg-[var(--color-brand-primary)] text-white py-48 px-6 flex justify-center text-center">
        <h2 className="font-serif italic text-[48px] md:text-[64px] leading-tight max-w-4xl">
          "Every piece leaves this room once."
        </h2>
      </section>
    </div>
  );
}
