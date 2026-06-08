import Link from "next/link";
import Image from "next/image";

const links = [
  { name: "Catalogue", href: "/catalogue" },
  { name: "Philosophy", href: "/philosophy" },
  { name: "Journal", href: "/journal" },
  { name: "Inquire", href: "/inquire" },
];

const socialLinks = [
  {
    name: "instagram",
    href: "https://www.instagram.com/contradictionspk/",
    label: "@contradictionspk",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
        <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
        <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
      </svg>
    )
  },
  {
    name: "facebook",
    href: "https://www.facebook.com/ContradictionsinPK/",
    label: "@contradictionspk",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">
        <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
      </svg>
    )
  },
  {
    name: "linkedin",
    href: "https://www.linkedin.com/company/perception-groups/",
    label: "@perceptiongroups",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">
        <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
        <rect x="2" y="9" width="4" height="12"></rect>
        <circle cx="4" cy="4" r="2"></circle>
      </svg>
    )
  },
  {
    name: "phone",
    href: "#",
    label: "021-35246912-15",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">
        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
      </svg>
    )
  }
];


export default function Footer() {
  return (
    <footer className="w-full bg-[#FAF9F6]">
      {/* Main Footer Area */}
      <div className="grid grid-cols-1 md:grid-cols-3 border-t border-[var(--color-border-light)] border-t-[0.5px]">
        {/* Left Column */}
        <div className="p-8 md:p-12 border-b md:border-b-0 md:border-r border-[var(--color-border-light)] border-r-[0.5px] flex flex-col justify-between">
          <div>
           <Image src="/logo-contradictionsv2.png" alt="Contradiction Logo" width={1023} height={168} className="w-[150px] md:w-[180px] h-auto object-contain mb-4" /> 
            {/* <h1 className="font-grand_hotel uppercase font-extrabold text-4xl md:text-3xl font-extrabold tracking-tight text-[var(--color-brand-primary)] mb-4">Contradictions.</h1> */}
            <p className="font-serif italic text-xl text-[var(--color-text-secondary)]">
              Objects that resist explanation
            </p>
          </div>
          <div className="mt-16 text-[10px] uppercase tracking-[0.3em] text-[var(--color-text-secondary)] py-05">
            9C, Khayaban e Ittehad, lane #10. Phase 6, D.H.A, Karachi, Pakistan
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
          {socialLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              target={link.href.startsWith("http") ? "_blank" : undefined}
              rel={link.href.startsWith("http") ? "noopener noreferrer" : undefined}
              className="flex items-center gap-4 text-[10px] lowercase tracking-[0.3em] text-[var(--color-text-secondary)] hover:text-[var(--color-text-primary)] transition-colors duration-300"
            >
              {link.icon}
              {link.label}
            </a>
          ))}
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
