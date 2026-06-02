import React from 'react'

const Timeline = () => {

    const timeline = [
        { stage: "The Showroom Experience", duration: "Initial Visit", desc: "Experience the physical presence, the weight, and the unyielding materials of our collection in person." },
        { stage: "Private Consultation", duration: "1–2 Weeks", desc: "A dialogue about your space. We don't take orders; we begin a conversation about architecture and intent." },
        { stage: "Material Sourcing", duration: "3–6 Weeks", desc: "We seek out specific veins of stone, exact ages of timber, and uncompromised raw materials." },
        { stage: "The Atelier", duration: "12–20 Weeks", desc: "The physical labor begins in Karachi. No CNC machines. Every piece is carved, joined, and finished by hand." },
        { stage: "White-Glove Transit", duration: "1–3 Weeks", desc: "Secure, climate-controlled transportation from our workshop directly to your residence." },
        { stage: "To The Home", duration: "Installation", desc: "The piece is placed in its final environment. We leave the room, and the object begins its lifetime." }
    ];
    return (
        <section className="w-full py-32 md:py-48 px-6 md:px-24 lg:px-32 border-b border-[var(--color-border-light)] border-b-[0.5px] flex flex-col md:flex-row gap-16 md:gap-32">
            <div className="w-full md:w-1/3">
                <h2 className="font-serif text-[40px] md:text-[56px] text-[var(--color-text-primary)] sticky top-32">
                    From Creation to<br /> Your Doorstep
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
        </section>)
}

export default Timeline