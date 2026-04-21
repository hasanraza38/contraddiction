import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="w-full border-t border-[var(--color-border-light)] border-t-[0.5px] py-8 px-6 bg-[#FFFFFF]">
      <div className="flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="flex items-center">
          <Image src="/contra-logo-v2.png" alt="Contradiction Logo" width={300} height={40} className="h-6 md:h-8 w-auto object-contain" />
        </div>
        
        <div className="text-[10px] uppercase tracking-[0.3em] text-[var(--color-text-secondary)] text-center">
          By appointment only — Karachi · Dubai · London
        </div>

        <Link 
          href="/inquire" 
          className="text-xs text-[var(--color-brand-primary)] hover:text-[var(--color-brand-hover)] transition-colors duration-300"
        >
          Inquire Privately →
        </Link>
      </div>
    </footer>
  );
}
