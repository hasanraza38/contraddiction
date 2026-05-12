export default function Marquee() {
  const text = "BESPOKE LUXURY FURNITURE · MADE ONCE · FOR ONE SPACE · NEVER REPEATED · HANDCRAFTED IN KARACHI · COMMISSION BY INVITATION · 7 PIECES PER YEAR · NO EXCEPTIONS · LUXURY FURNITURE PAKISTAN · SOURCED FROM ITALY · UK · FRANCE · ARGENTINA · EACH PIECE IS MADE ONCE · CUSTOM LUXURY COMMISSION · 0 CNC MACHINES · 8 MASTER CRAFTSPEOPLE · BESPOKE FURNITURE ATELIER · NO WAITLIST · NO SHOWROOM · NO COMPROMISE · ";
  const repeatedText = Array(10).fill(text).join("");

  return (
    <div className="w-full overflow-hidden whitespace-nowrap py-2 border-y border-[var(--color-border-light)] border-y-[0.5px] bg-[#FFFFFF]">
      <div
        className="inline-block text-[10px] uppercase tracking-[0.3em] text-[var(--color-brand-primary)] animate-[scroll_90s_linear_infinite]"
      >
        {repeatedText}
      </div>
      <div
        className="inline-block text-[10px] uppercase tracking-[0.3em] text-[var(--color-brand-primary)] animate-[scroll_90s_linear_infinite]"
      >
        {repeatedText}
      </div>
    </div>
  );
}
