"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";

const navLinks = [
  { href: "/#commercial-opportunities", label: "Commercial Opportunities" },
  { href: "/events", label: "Events" },
  { href: "/#services", label: "Services" },
  { href: "/#contact", label: "Contact" },
];

export default function NavBar() {
  const [open, setOpen] = useState(false);
  const firstLinkRef = useRef<HTMLAnchorElement>(null);

  // Accessibility: ESC to close
  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", handleEsc);
    return () => window.removeEventListener("keydown", handleEsc);
  }, []);

  // Focus first link on open
  useEffect(() => {
    if (open) {
      setTimeout(() => firstLinkRef.current?.focus(), 100);
    }
  }, [open]);

  return (
    <nav className="sticky top-0 z-50 bg-white border-b border-gray-200 shadow-sm py-4">
      <div className="max-w-7xl mx-auto flex justify-between items-center px-4 py-3">
        {/* Brand */}
        <Link href="/" className="text-xl font-bold text-blue-900 tracking-wide">
        FWC Marketing Group
        </Link>

        {/* Desktop Nav */}
        <ul className="hidden md:flex gap-8 items-center">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="text-blue-900 font-semibold hover:text-blue-600 transition-colors"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        {/* Hamburger */}
        <button
          onClick={() => setOpen(true)}
          className="md:hidden text-blue-900"
          aria-label="Open menu"
        >
          <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor"
            strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <line x1="3" y1="6" x2="21" y2="6" />
            <line x1="3" y1="12" x2="21" y2="12" />
            <line x1="3" y1="18" x2="21" y2="18" />
          </svg>
        </button>
      </div>

      {/* Overlay */}
      <div
        onClick={() => setOpen(false)}
        className={`fixed inset-0 bg-black/50 z-40 transition-opacity duration-300 ${
          open ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
        aria-hidden="true"
      />

      {/* Slide-In Mobile Nav */}
      <aside
        className={`fixed top-0 right-0 h-full w-5/6 max-w-sm bg-white z-50 shadow-lg transform transition-transform duration-300 ${
          open ? "translate-x-0" : "translate-x-full"
        }`}
        role="dialog"
        aria-modal="true"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close button */}
        <button
          onClick={() => setOpen(false)}
          className="absolute top-5 right-5 text-blue-900 hover:text-blue-600"
          aria-label="Close menu"
        >
          <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor"
            strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <line x1="18" y1="6" x2="6" y2="18" />
            <line x1="6" y1="6" x2="18" y2="18" />
          </svg>
        </button>

        <nav className="flex flex-col mt-20 px-6 gap-4">
          {navLinks.map((link, i) => (
            <a
              key={link.href}
              href={link.href}
              ref={i === 0 ? firstLinkRef : undefined}
              onClick={() => setOpen(false)}
              className="text-blue-900 text-lg font-semibold hover:text-blue-600 transition-colors rounded-md py-2"
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
