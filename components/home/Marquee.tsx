export default function Marquee() {
  const text = "BESPOKE LUXURY FURNITURE · CRAFTED FOR YOUR SPACE · HANDCRAFTED IN KARACHI · LUXURY FURNITURE PAKISTAN · SOURCED FROM ITALY · UK · FRANCE · ARGENTINA · CUSTOM LUXURY COMMISSION · 0 CNC MACHINES · 8 MASTER CRAFTSPEOPLE · BESPOKE FURNITURE ATELIER · NO WAITLIST · NO SHOWROOM · NO COMPROMISE · ";
  const repeatedText = Array(10).fill(text).join("");

  return (
    <div className="w-full overflow-hidden whitespace-nowrap py-2 border-y border-[var(--color-border-light)] border-y-[0.5px] bg-[#FFFFFF]">
      <div
        className="inline-block text-[10px] uppercase tracking-[0.3em] text-[var(--color-brand-primary)] animate-[scroll_200s_linear_infinite]"
      >
        {repeatedText}
      </div>
      <div
        className="inline-block text-[10px] uppercase tracking-[0.3em] text-[var(--color-brand-primary)] animate-[scroll_200s_linear_infinite]"
      >
        {repeatedText}
      </div>
    </div>
  );
}
