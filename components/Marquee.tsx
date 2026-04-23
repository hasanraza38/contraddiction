export default function Marquee() {
  const text = "EACH PIECE IS MADE ONCE · NOT FOR SALE · FOR CONSIDERATION · COMMISSION BY INVITATION · 7 PIECES PER YEAR · NO WAITLIST · NO EXCEPTIONS · ";
  const repeatedText = Array(10).fill(text).join("");

  return (
    <div className="w-full overflow-hidden whitespace-nowrap py-2 border-y border-[var(--color-border-light)] border-y-[0.5px] bg-[#FFFFFF]">
      <div
        className="inline-block text-[10px] uppercase tracking-[0.3em] text-[var(--color-brand-primary)] animate-[scroll_60s_linear_infinite]"
      >
        {repeatedText}
      </div>
      <div
        className="inline-block text-[10px] uppercase tracking-[0.3em] text-[var(--color-brand-primary)] animate-[scroll_60s_linear_infinite]"
      >
        {repeatedText}
      </div>
    </div>
  );
}
