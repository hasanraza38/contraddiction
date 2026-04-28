"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";

const links = [
  { name: "Catalogue", href: "/catalogue" },
  { name: "Atelier", href: "/atelier" },
  { name: "Philosophy", href: "/philosophy" },
  { name: "Journal", href: "/journal" },
  { name: "Inquire", href: "/inquire" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    
    handleScroll();
    
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <nav
        className={`fixed top-0 w-full z-50 transition-colors duration-300 ${scrolled ? "bg-[#FFFFFF] border-b border-[var(--color-border-light)] border-b-[0.5px]" : "bg-transparent border-b-transparent"
          }`}
      >
        <div className="pl-[24px] pr-6 md:pl-[80px] py-4 flex justify-between items-center">
          <Link href="/" className="flex items-center">
            {/* <Image src="/contra-logo-v2.png" alt="Contradiction Logo" width={1023} height={168} className="w-[150px] md:w-[180px] h-auto object-contain" priority /> */}
            <Image src="/logo-contradictions.png" alt="Contradiction Logo" width={1023} height={168} className="w-[150px] md:w-[180px] h-auto object-contain" priority loading="eager" />
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-4 text-[10px] uppercase tracking-[0.3em] text-[var(--color-text-secondary)]">
            {links.map((link, index) => {
              const isActive = pathname === link.href || (pathname.startsWith(link.href) && link.href !== '/');
              return (
                <div key={link.name} className="flex items-center gap-4">
                  <Link
                    href={link.href}
                    className={`relative group ${isActive ? "text-[var(--color-text-primary)]" : "hover:text-[var(--color-text-primary)] transition-colors duration-300"}`}
                  >
                    {link.name}
                    <span className="absolute -bottom-1 left-0 w-full h-[0.5px] bg-[var(--color-brand-primary)] origin-left scale-x-0 transition-transform duration-200 ease-out group-hover:scale-x-100"></span>
                    {isActive && (
                      <span className="absolute -bottom-1 left-0 w-full h-[0.5px] bg-[var(--color-brand-primary)]"></span>
                    )}
                  </Link>
                  {index < links.length - 1 && <span className="text-[var(--color-border-light)]">·</span>}
                </div>
              );
            })}
          </div>

          {/* Mobile Nav Toggle */}
          <button
            className="md:hidden text-[10px] uppercase tracking-[0.3em]"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? "Close" : "Menu"}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 bg-[#FFFFFF] z-40 p-6 pt-24 flex flex-col gap-8 md:hidden">
          {links.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className="text-4xl font-serif italic text-[var(--color-text-primary)] border-b border-[var(--color-border-light)] border-b-[0.5px] pb-4"
            >
              {link.name}
            </Link>
          ))}
        </div>
      )}
    </>
  );
}
