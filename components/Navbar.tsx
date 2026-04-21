"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";
import { useState } from "react";

const links = [
  { name: "Catalogue", href: "/catalogue" },
  { name: "Atelier", href: "#" },
  { name: "Philosophy", href: "#" },
  { name: "Inquire", href: "/inquire" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <>
      <nav className="fixed top-0 w-full bg-[#FFFFFF] z-50 border-b border-[var(--color-border-light)] border-b-[0.5px]">
        <div className="px-6 py-4 flex justify-between items-center">
          <Link href="/" className="flex items-center">
            <Image src="/contra-logo.png" alt="Contradiction Logo" width={300} height={40} className="h-8 md:h-10 w-auto object-contain" priority />
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex gap-8 text-xs uppercase tracking-[0.3em] text-[var(--color-text-secondary)]">
            {links.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.name}
                  href={link.href}
                  className={`relative group ${isActive ? "text-[var(--color-text-primary)]" : "hover:text-[var(--color-text-primary)] transition-colors duration-300"}`}
                >
                  {link.name}
                  <span className="absolute -bottom-1 left-0 w-full h-[0.5px] bg-[var(--color-brand-primary)] origin-left scale-x-0 transition-transform duration-400 ease-out group-hover:scale-x-100"></span>
                  {isActive && (
                    <span className="absolute -bottom-1 left-0 w-full h-[0.5px] bg-[var(--color-brand-primary)]"></span>
                  )}
                </Link>
              );
            })}
          </div>

          {/* Mobile Nav Toggle */}
          <button 
            className="md:hidden text-xs uppercase tracking-[0.3em]"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? "Close" : "Menu"}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 top-[53px] bg-[#FFFFFF] z-40 p-6 flex flex-col gap-6 md:hidden">
          {links.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className="text-lg uppercase tracking-[0.3em] border-b border-[var(--color-border-light)] border-b-[0.5px] pb-4"
            >
              {link.name}
            </Link>
          ))}
        </div>
      )}
    </>
  );
}
