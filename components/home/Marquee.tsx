export default function Marquee() {
  const text = "BESPOKE FURNITURE · ORIGINAL DESIGNS · SIGNATURE FORMS · IMPORTED FINISHES · REFINED TEXTURES · STATEMENT PIECES · CRAFTED TO LAST · ELEVATED LIVING ·";
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
