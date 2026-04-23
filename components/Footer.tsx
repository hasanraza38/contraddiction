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
            <Image src="/logo-contradictions.png" alt="Contradiction Logo" width={1023} height={168} className="w-[150px] md:w-[180px] h-auto object-contain mb-4" />
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

        
        <div className="p-8 md:p-12 flex flex-col justify-center items-start gap-6 border-t md:border-t-0 border-[var(--color-border-light)] border-t-[0.5px]">
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 text-[10px] lowercase tracking-[0.3em] text-[var(--color-text-secondary)] hover:text-[var(--color-text-primary)] transition-colors duration-300">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">
              <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
              <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
              <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
            </svg>
            @contradictionspk
          </a>
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 text-[10px] lowercase tracking-[0.3em] text-[var(--color-text-secondary)] hover:text-[var(--color-text-primary)] transition-colors duration-300">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">
              <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
            </svg>
            @contradictionspk
          </a>
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
