import Link from "next/link";
import Image from "next/image";
import UnderlineText from "@/components/ui/UnderlineText";
import Timeline from "@/components/Timeline";

export default function Philosophy() {
  const sections = [
    {
      num: "01",
      title: "On beauty that argues back — and why luxury furniture should never disappear into a room",
      content: [
        "Most luxury furniture design seeks to eliminate friction. It aims to make a space smoother, easier, quieter to accommodate you so perfectly that the object vanishes into the room. This is the prevailing logic of high-end interior design, and we believe it is fundamentally mistaken.",
        "When a piece of bespoke furniture is perfectly comfortable, it disappears. When a room is perfectly harmonious, you stop seeing it. True luxury should not soothe you into a state of unconsciousness. It should wake you up present a minor, ongoing challenge remind you that you are alive and in the presence of something that required genuine intention to exist.",
        "Our handcrafted furniture is designed to argue with its surroundings. The materials are raw and unmediated cast iron, rough-hewn stone, ebonised hardwood the weight is deliberate, the angles unforgiving. Each commission is built to demand that you reckon with it every time you enter the room. In an era of mass-produced luxury goods and algorithmically optimised interiors, that refusal to be ignored is, we believe, the only honest definition of enduring value."
      ]


      
    },
    {
      num: "02",
      title: "On the problem with heirlooms — and what handmade furniture owes the future",
      content: [
        "There is a quiet arrogance embedded in the idea of the heirloom. It assumes that the physical burden of your memories will constitute a gift to the next generation that the objects you commissioned, chose, and lived with will carry their meaning forward intact. It is a romantic idea, and it is one we find fundamentally dishonest.",
        "We build to outlast. Our materials solid cast iron, natural stone, centuries-hardened ebonised wood are chosen precisely because they do not age in the conventional sense. They do not soften, fade, or conform. They endure on their own terms. But we do not build them to be passed down as vessels of sentiment. We build them to be entirely complete in the present moment for the person who commissioned them, in the space for which they were made",
        "If a Contradiction piece survives its original owner and most will it should stand as an independent object for whoever encounters it next. It should need no context, no story, no ghost in the room to give it weight. The finest custom-made furniture does not derive its value from provenance. It derives it from the integrity of the object itself. That is the only permanence worth building toward."
      ]
    },
    {
      num: "03",
      title: "On who commissions Contradiction — and who does not",
      content: [
        "Contradiction is not for the collector who wants to signal taste to arriving guests. It is not for the interior designer completing a mood board for a client who has approved a budget. It is not for the luxury hotel lobby in search of a statement piece that photographs well and offends no one.",
        "It is for the individual who has arrived at a point of complete clarity about what they want to live with. The person who understands that genuine luxury furniture is not defined by ease of acquisition, recognisable branding, or the comfort of social validation — but by intent, by the quality of the making, and by the honesty of the material. It is for those who are willing to inhabit a difficult presence in their home because they recognise, without needing to be told, that the difficulty is precisely the point.",
        "Our bespoke furniture commissions are accepted by private inquiry. There is no off-the-shelf configuration, no showroom pressure, and no standard specification — only a direct conversation about what you need, the space it will inhabit, and the standard to which it will be built. We work with residential clients, private collectors, and interior architects across Karachi, Dubai, London, and internationally, on projects where the ambition of the brief matches the quality of the outcome.",
        ""
      ]
    },
    {
      num: "04",
      title: "On craft without compromise — and why we will never trade process for volume",
      content: [
        "There is a version of luxury furniture making that looks like ours from a distance. It uses the same words — handmade, bespoke, artisan — and charges accordingly. But somewhere in its history, it made a decision: to let efficiency substitute for time, to let machines complete what hands began, to let the language of craft outlast the practice of it. The result is product. It is not what we do.",
        "Every Contradiction piece is built through a process that cannot be shortened without being broken. The material selection, the structural decisions, the finishing — each stage demands the full attention of the people doing it, for as long as it takes to do it correctly. We do not optimise this process. We do not introduce steps that reduce labour at the cost of resolution. We do not allow the ambition of the commission to exceed the integrity of its execution.",
        "This means we work at the pace that the work demands. It means that every client who commissions a piece receives something that was made with the same standard of attention regardless of scale, timeline pressure, or the number of other projects underway. Craft at this level is not a constraint on how much we can do — it is the definition of what we do. And it is, we believe, the only position in luxury furniture making that is worth occupying."
      ]
    }
  ];

  return (
    <div className="flex flex-col w-full bg-[#FFFFFF]">
      {/* Top Header */}
      <div className="pt-32 pb-24 px-6 flex flex-col items-center text-center">
        <span className="text-[10px] uppercase tracking-[0.3em] text-[var(--color-brand-primary)] mb-8">
          Our Philosophy
        </span>
        <h1 className="font-serif text-[56px] md:text-[72px] text-[var(--color-text-primary)] leading-[1.1] max-w-4xl">
          <UnderlineText text="Craftsmanship" /> that refuses to compromise.
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
          <div className="relative z-10 max-w-4xl text-center">
            <blockquote className="font-serif italic text-3xl md:text-[56px] text-[#FFFFFF] leading-relaxed mb-8">
              {`"A room is not a container for comfort. It is a stage for the deliberate. Every object within it is either a decision or an accident."`}
            </blockquote>
            <p className="text-[10px] uppercase tracking-[0.3em] text-[#FFFFFF] opacity-80">
              — The Contradictions
            </p>
          </div>
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
       <Timeline/>
  
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
