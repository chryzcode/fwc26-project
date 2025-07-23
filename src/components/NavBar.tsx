"use client";
import Link from "next/link";
import { useState, useEffect, useRef } from "react";

const navLinks = [
  { href: "#opportunity", label: "Market Opportunity" },
  { href: "#services", label: "Services" },
  { href: "#contact", label: "Contact" },
];

export default function NavBar() {
  const [open, setOpen] = useState(false);
  const firstLinkRef = useRef<HTMLAnchorElement | null>(null);

  // Prevent body scroll when menu is open
  useEffect(() => {
    if (open) {
      // Focus first nav link for accessibility
      setTimeout(() => {
        firstLinkRef.current?.focus();
      }, 200);
    }
    // Do not set overflow hidden, allow scrolling
    return () => {};
  }, [open]);

  // Close on ESC key
  useEffect(() => {
    if (!open) return;
    const handler = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [open]);

  return (
    <nav className="sticky top-0 z-50 bg-white shadow-lg border-b border-blue-100 animate-fade-in py-4">
      <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between px-4 py-2">
        <Link href="#home" className="flex items-center gap-2 group scroll-smooth">
          <span className="text-2xl font-extrabold text-blue-900 tracking-wide bg-gradient-to-r from-blue-900 via-blue-600 to-accent bg-clip-text text-transparent animate-gradient-x">FWC 2026</span>
        </Link>
        {/* Hamburger/Close button */}
        <button
          className="md:hidden text-blue-900 focus:outline-none relative w-10 h-10 flex items-center justify-center"
          onClick={() => setOpen((o) => !o)}
          aria-label={open ? "Close menu" : "Open menu"}
        >
          <span className="sr-only">{open ? "Close main menu" : "Open main menu"}</span>
          <svg
            className="w-8 h-8 transition-all duration-300"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <line
              x1="4"
              y1="6"
              x2="20"
              y2="6"
              className={`transition-all duration-300 ${open ? 'translate-y-[6px] rotate-45' : ''}`}
            />
            <line
              x1="4"
              y1="12"
              x2="20"
              y2="12"
              className={`transition-all duration-300 ${open ? 'opacity-0' : ''}`}
            />
            <line
              x1="4"
              y1="18"
              x2="20"
              y2="18"
              className={`transition-all duration-300 ${open ? '-translate-y-[6px] -rotate-45' : ''}`}
            />
          </svg>
        </button>
        <ul className="hidden md:flex gap-8 items-center">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="text-blue-900 font-semibold hover:text-accent transition-colors px-3 py-2 rounded-lg hover:bg-blue-50 focus:outline-none focus:ring-2 focus:ring-accent scroll-smooth"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
      {/* Overlay */}
      <div
        className={`md:hidden fixed inset-0 z-40 bg-black/50 transition-opacity duration-300 ${open ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}
        onClick={() => setOpen(false)}
        aria-hidden="true"
      />
      {/* Mobile nav panel - solid white background only */}
      <aside
        className={`md:hidden fixed top-0 left-0 w-full h-full z-50 flex flex-col transition-transform duration-300 bg-white ${open ? 'translate-x-0' : 'translate-x-full'}`}
        onClick={e => e.stopPropagation()}
        role="dialog"
        aria-modal="true"
        tabIndex={-1}
      >
        {/* Close button */}
        <button
          className="absolute top-5 right-5 text-blue-900 hover:text-accent focus:outline-none bg-white rounded-full p-2 shadow-md transition-colors z-50"
          aria-label="Close menu"
          onClick={() => setOpen(false)}
        >
          <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <line x1="18" y1="6" x2="6" y2="18" />
            <line x1="6" y1="6" x2="18" y2="18" />
          </svg>
        </button>
        {/* Unified nav links, no floating cards */}
        <nav className="flex-1 flex flex-col justify-center items-stretch gap-2 px-6">
          {navLinks.map((link, i) => (
            <a
              key={link.href}
              href={link.href}
              ref={i === 0 ? firstLinkRef : undefined}
              className="block text-blue-900 font-extrabold py-4 w-full text-center hover:bg-blue-100 hover:text-accent transition-colors text-xl focus:outline-none focus:ring-2 focus:ring-accent scroll-smooth"
              onClick={() => setOpen(false)}
              tabIndex={open ? 0 : -1}
            >
              {link.label}
            </a>
          ))}
        </nav>
      </aside>
    </nav>
  );
}
