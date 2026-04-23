import Link from "next/link";
import Image from "next/image";

const links = [
  { name: "Catalogue", href: "/catalogue" },
  { name: "Atelier", href: "/atelier" },
  { name: "Philosophy", href: "/philosophy" },
  { name: "Journal", href: "/journal" },
  { name: "Inquire", href: "/inquire" },
];

export default function Footer() {
  return (
    <footer className="w-full bg-[#FFFFFF]">
      {/* Main Footer Area */}
      <div className="grid grid-cols-1 md:grid-cols-3 border-t border-[var(--color-border-light)] border-t-[0.5px]">
        {/* Left Column */}
        <div className="p-8 md:p-12 border-b md:border-b-0 md:border-r border-[var(--color-border-light)] border-r-[0.5px] flex flex-col justify-between">
          <div>
            <Image src="/contra-logo-v2.png" alt="Contradiction Logo" width={1023} height={168} className="w-[150px] md:w-[180px] h-auto object-contain mb-4" />
            <p className="font-serif italic text-xl text-[var(--color-text-secondary)]">
              Objects that resist explanation
            </p>
          </div>
          <div className="mt-16 text-[10px] uppercase tracking-[0.3em] text-[var(--color-text-secondary)]">
            Karachi · Dubai · London
          </div>
        </div>

        {/* Center Column */}
        <div className="p-8 md:p-12 border-b md:border-b-0 md:border-r border-[var(--color-border-light)] border-r-[0.5px] flex flex-col justify-center items-start gap-4">
          {links.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="text-[10px] uppercase tracking-[0.3em] text-[var(--color-text-secondary)] hover:text-[var(--color-text-primary)] transition-colors duration-300"
            >
              {link.name}
            </Link>
          ))}
        </div>

        {/* Right Column (Empty to satisfy 3 columns if needed, or something else? 
            "3 columns divided by 0.5px lines: Left: Logo... Center: Nav... Bottom strip...")
            Wait, the prompt says "3 columns... Left, Center, Bottom strip" 
            Actually, maybe the 3rd column is something else? Or the prompt meant 3 parts of the footer?
            "3 columns divided by 0.5px lines: 
             Left: Logo + tagline...
             Center: Navigation links stacked vertically...
             Bottom strip..."
            If there is no "Right", maybe it's just 2 columns + bottom strip? Let's make it 2 columns for the main part, or 3 columns and leave right empty, or distribute it. I will leave the third column empty or maybe make it 2 columns.
            Let's make it 2 columns if only Left and Center were specified. Actually, I will make it 3 columns and leave the right one empty for balance.
        */}
        <div className="hidden md:block p-8 md:p-12">
           {/* Intentional empty space */}
        </div>
      </div>

      {/* Bottom Strip */}
      <div className="border-t border-[var(--color-border-light)] border-t-[0.5px] p-6 md:px-12 flex flex-col md:flex-row justify-between items-center gap-4">
        <div className="text-[10px] uppercase tracking-[0.3em] text-[var(--color-text-secondary)] text-center md:text-left">
          © Contradiction. No resale permitted. All commissions are final.
        </div>
        <Link 
          href="/inquire" 
          className="text-[10px] uppercase tracking-[0.3em] text-[var(--color-brand-primary)] hover:text-[var(--color-brand-hover)] transition-colors duration-300"
        >
          Inquire Privately →
        </Link>
      </div>
    </footer>
  );
}
