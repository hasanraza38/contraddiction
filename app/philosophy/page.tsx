import Link from "next/link";
import Image from "next/image";

export default function Philosophy() {
  const sections = [
    {
      num: "01",
      title: "On beauty that argues back",
      content: [
        "Most luxury design seeks to eliminate friction. It aims to make life smoother, easier, and less demanding. It wants to accommodate you perfectly. We believe that a life without friction is a life without presence.",
        "When an object is perfectly comfortable, it disappears. When a room is perfectly harmonious, you stop seeing it. True beauty should not soothe you into a state of unconsciousness. It should wake you up. It should present a minor, ongoing challenge.",
        "Our pieces are designed to argue with their surroundings. The materials are raw, the weight is excessive, the angles are unforgiving. They demand that you reckon with them every time you enter the room. They refuse to be ignored."
      ]
    },
    {
      num: "02",
      title: "On the problem with heirlooms",
      content: [
        "There is an arrogance in the idea of the heirloom. It assumes that the physical burden of your memories will be a gift to the next generation. It is a romantic idea, but it is fundamentally flawed.",
        "We build things to outlast us—we use cast iron, solid stone, and ebonised wood—but we do not build them so they can be passed down. We build them so they can be entirely complete in the present moment.",
        "If one of our pieces survives you, it should stand as an independent entity for whoever finds it next. It should not need your ghost to give it meaning. It is not a vessel for your legacy; it is an object with its own."
      ]
    },
    {
      num: "03",
      title: "On who this is for (and who it isn't)",
      content: [
        "Contradiction is not for the collector who wants to signal taste. It is not for the interior designer trying to complete a mood board. It is certainly not for the hotel lobby looking for a statement piece.",
        "It is for the individual who has stopped needing to justify what they own. The person who understands that true luxury is not about ease, but about intent. It is for those who are willing to live with a difficult presence in their home because they recognize that the difficulty is the point.",
        "If you are looking for something that will blend in, or something that will immediately impress a casual visitor, you are in the wrong place."
      ]
    },
    {
      num: "04",
      title: "On why we will never scale",
      content: [
        "Scale is the enemy of intent. The moment you begin to optimize for volume, you begin to compromise on the process. You start using machines to do the work of hands. You start substituting time for efficiency.",
        "We accept a maximum of seven commissions per year. This is not an artificial scarcity tactic; it is the physical limit of our atelier. Every piece requires months of labor, failure, and refinement.",
        "We will never expand. We will never introduce a 'diffusion line'. When the current artisans can no longer do the work, Contradiction will simply cease to exist. That is the only honest way to end an argument."
      ]
    }
  ];

  return (
    <div className="flex flex-col w-full bg-[#FFFFFF]">
      {/* Top Header */}
      <div className="pt-32 pb-24 px-6 flex flex-col items-center text-center">
        <span className="text-[10px] uppercase tracking-[0.3em] text-[var(--color-brand-primary)] mb-8">
          The Contradiction Position
        </span>
        <h1 className="font-serif text-[64px] md:text-[80px] text-[var(--color-text-primary)] leading-[1.1] max-w-4xl">
          Why we make what nobody needs.
        </h1>
      </div>

      {/* Body Sections */}
      <div className="w-full">
        {/* Section 01 */}
        <div className="w-full border-t border-[var(--color-brand-primary)] border-t-[0.5px]">
          <div className="max-w-3xl mx-auto py-24 px-6">
            <span className="text-[10px] text-[var(--color-brand-primary)] mb-4 block">
              {sections[0].num}
            </span>
            <h2 className="font-serif text-[28px] text-[var(--color-text-primary)] mb-8">
              {sections[0].title}
            </h2>
            <div className="flex flex-col gap-6 text-[16px] text-[var(--color-text-primary)] leading-[1.9]">
              {sections[0].content.map((p, i) => <p key={i}>{p}</p>)}
            </div>
          </div>
        </div>

        {/* Section 02 */}
        <div className="w-full border-t border-[var(--color-brand-primary)] border-t-[0.5px]">
          <div className="max-w-3xl mx-auto py-24 px-6">
            <span className="text-[10px] text-[var(--color-brand-primary)] mb-4 block">
              {sections[1].num}
            </span>
            <h2 className="font-serif text-[28px] text-[var(--color-text-primary)] mb-8">
              {sections[1].title}
            </h2>
            <div className="flex flex-col gap-6 text-[16px] text-[var(--color-text-primary)] leading-[1.9]">
              {sections[1].content.map((p, i) => <p key={i}>{p}</p>)}
            </div>
          </div>
        </div>

        {/* Midway Image Band */}
        <div className="w-full h-[60vh] md:h-[80vh] relative bg-[#0D0D0D] flex items-center justify-center p-6">
          <Image 
            src="https://images.unsplash.com/photo-1599696848652-f0ff23bc911f?q=80&w=1600&auto=format&fit=crop"
            alt="Contradiction philosophy"
            fill
            className="object-cover opacity-30"
          />
          <blockquote className="relative z-10 font-serif italic text-3xl md:text-[56px] text-[#FFFFFF] text-center max-w-4xl leading-relaxed">
            {`"A room is not a container for comfort. It is a stage for the deliberate."`}
          </blockquote>
        </div>

        {/* Section 03 */}
        <div className="w-full">
          <div className="max-w-3xl mx-auto py-24 px-6">
            <span className="text-[10px] text-[var(--color-brand-primary)] mb-4 block">
              {sections[2].num}
            </span>
            <h2 className="font-serif text-[28px] text-[var(--color-text-primary)] mb-8">
              {sections[2].title}
            </h2>
            <div className="flex flex-col gap-6 text-[16px] text-[var(--color-text-primary)] leading-[1.9]">
              {sections[2].content.map((p, i) => <p key={i}>{p}</p>)}
            </div>
          </div>
        </div>

        {/* Section 04 */}
        <div className="w-full border-t border-[var(--color-brand-primary)] border-t-[0.5px]">
          <div className="max-w-3xl mx-auto py-24 px-6">
            <span className="text-[10px] text-[var(--color-brand-primary)] mb-4 block">
              {sections[3].num}
            </span>
            <h2 className="font-serif text-[28px] text-[var(--color-text-primary)] mb-8">
              {sections[3].title}
            </h2>
            <div className="flex flex-col gap-6 text-[16px] text-[var(--color-text-primary)] leading-[1.9]">
              {sections[3].content.map((p, i) => <p key={i}>{p}</p>)}
            </div>
          </div>
        </div>
      </div>

      {/* End CTA */}
      <div className="w-full py-32 border-t border-[var(--color-border-light)] border-t-[0.5px] flex justify-center">
        <Link 
          href="/inquire" 
          className="text-[var(--color-brand-primary)] text-[10px] uppercase tracking-[0.3em] hover:text-[var(--color-brand-hover)] transition-colors"
        >
          If this resonated — Inquire →
        </Link>
      </div>
    </div>
  );
}
