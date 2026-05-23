import Image from "next/image";

export default function Atelier() {
  const timeline = [
    { stage: "The Showroom Experience", duration: "Initial Visit", desc: "Experience the physical presence, the weight, and the unyielding materials of our collection in person." },
    { stage: "Private Consultation", duration: "1–2 Weeks", desc: "A dialogue about your space. We don't take orders; we begin a conversation about architecture and intent." },
    { stage: "Material Sourcing", duration: "3–6 Weeks", desc: "We seek out specific veins of stone, exact ages of timber, and uncompromised raw materials." },
    { stage: "The Atelier", duration: "12–20 Weeks", desc: "The physical labor begins in Karachi. No CNC machines. Every piece is carved, joined, and finished by hand." },
    { stage: "White-Glove Transit", duration: "1–3 Weeks", desc: "Secure, climate-controlled transportation from our workshop directly to your residence." },
    { stage: "To The Home", duration: "Installation", desc: "The piece is placed in its final environment. We leave the room, and the object begins its lifetime." }
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
        <div className="w-full md:w-1/2 p-12 md:p-32 border-b border-b-[0.5px] md:border-b-0 md:border-r border-[var(--color-border-light)] md:border-r-[0.5px] flex items-center justify-center">
          <h1 className="font-serif text-[48px] md:text-[72px] lg:text-[96px] text-[var(--color-text-primary)] tracking-tight">The work.</h1>
        </div>
        <div className="w-full md:w-1/2 p-12 md:p-32 flex items-center justify-center">
          <h1 className="font-serif text-[48px] md:text-[72px] lg:text-[96px] text-[var(--color-text-primary)] tracking-tight">The silence.</h1>
        </div>
      </div>

      {/* 2-column layout */}
      <div className="w-full flex flex-col-reverse md:flex-row border-b border-[var(--color-border-light)] border-b-[0.5px]">
        {/* Left: Image grid */}
        <div className="w-full md:w-[50%] grid grid-cols-2 border-b md:border-b-0 md:border-r border-[var(--color-border-light)] md:border-r-[0.5px]">
          {[
            "/atelier1.jpg",
            "/atelier2.jpg",
            "/atelier3.jpg",
            "/atelier4.jpg"
          ].map((img, i) => (
            <div key={i} className={`w-full aspect-[4/5] md:aspect-square relative border-[var(--color-border-light)] ${i % 2 === 0 ? 'border-r border-r-[0.5px]' : ''} ${i < 2 ? 'border-b border-b-[0.5px]' : ''}`}>
              <Image src={img} fill sizes="(max-width: 768px) 100vw, 50vw" className="object-cover" alt="Atelier detail" />
            </div>
          ))}
        </div>
        
        {/* Right: Editorial text */}
        <div className="w-full md:w-[50%] p-8 md:p-16 lg:p-32 flex flex-col justify-center">
          <div className="max-w-xl mx-auto md:mx-0 text-[16px] md:text-[18px] text-[var(--color-text-primary)] leading-[1.9] flex flex-col gap-8">
            <p>
             The physical atelier is located in an unmarked space in Karachi deliberately removed from the circuits of showrooms, design districts, and trade events that define the conventional luxury furniture industry. There is no signage, no reception, and no public access. This is not a brand decision. It is a practical one. The work that happens here is not improved by an audience, and the people doing it have not asked for one.
            </p>
            <p>
              Inside, a team of specialist craftspeople work across disciplines stone cutting and finishing, iron casting and forging, hardwood joinery, leather working, and surface treatment each operating within their domain with a focus that makes ordinary conversation feel like an intrusion. 
            </p>
            <p>
              The sounds of the space are specific and deliberate: the low grind of stone against stone, the dense percussion of a hammer finding iron, the long exhale of wood being brought to its final surface. These are not incidental sounds. They are the sound of handmade luxury furniture being built at the only pace that handmade luxury furniture can honestly be built.
            </p>
            {/* <p>
              We do not use CNC machines, mass-produced hardware, or pre-fabricated components of any kind. If a commission requires a specific bolt, we machine that bolt. If it requires a hinge, we forge that hinge to the exact specification the piece demands, from the exact material the design calls for. This is not a romantic attachment to old-world craft practice. It is a requirement of total control. A machine can execute a file to tolerance. It cannot feel the tension developing in a timber joint before the wood decides to move. Our craftspeople can, and do, and adjust accordingly.
            </p> */}
            {/* <p>
             The consequence of this process is furniture of a resolution that is genuinely difficult to achieve any other way. Surface treatments that read as simple from across the room reveal, on closer inspection, a depth of decision-making that only becomes visible when you have spent time with the object. Joints that appear inevitable were, in reality, the result of multiple attempts and deliberate failure. Every piece that leaves this space has been through a process that most luxury furniture makers would consider excessive. We consider it the minimum standard of honesty.
            </p> */}
          </div>
        </div>
      </div>

      {/* Timeline Section */}
      <section className="w-full py-32 md:py-48 px-6 md:px-24 lg:px-32 border-b border-[var(--color-border-light)] border-b-[0.5px] flex flex-col md:flex-row gap-16 md:gap-32">
        <div className="w-full md:w-1/3">
          <h2 className="font-serif text-[40px] md:text-[56px] text-[var(--color-text-primary)] sticky top-32">
            From Creation to<br/> Your Doorstep
          </h2>
        </div>
        <div className="w-full md:w-2/3 relative">
          <div className="absolute top-0 bottom-0 left-[4.5px] w-[0.5px] bg-[var(--color-brand-primary)]"></div>
          <div className="flex flex-col gap-16">
            {timeline.map((item, i) => (
              <div key={i} className="relative pl-12">
                <div className="absolute left-0 top-1.5 w-2.5 h-2.5 rounded-none bg-[var(--color-brand-primary)]"></div>
                <div className="flex flex-col md:flex-row md:items-baseline gap-2 md:gap-6 mb-3">
                  <h3 className="font-serif text-[24px] md:text-[32px] text-[var(--color-text-primary)]">{item.stage}</h3>
                  <span className="text-[10px] md:text-[12px] uppercase tracking-[0.2em] text-[var(--color-text-secondary)]">{item.duration}</span>
                </div>
                <p className="font-serif italic text-[18px] md:text-[20px] text-[var(--color-text-secondary)]">{`"${item.desc}"`}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Craftspeople Section */}
     

      {/* End section */}
      <section className="w-full bg-[var(--color-brand-primary)] text-white py-48 md:py-64 px-6 flex justify-center text-center">
        <h2 className="font-serif italic text-[48px] md:text-[80px] leading-tight max-w-4xl md:max-w-6xl">
          {`"Every piece leaves this room once."`}
        </h2>
      </section>
    </div>
  );
}
