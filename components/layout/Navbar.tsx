"use client";

import { useState } from "react";
import { usePathname } from "next/navigation";
import { ArrowUpRight, Menu, X, Fuel } from "lucide-react";
import { TransitionLink } from "../transitions";

export function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About" },
    { href: "/services", label: "Services" },
    { href: "/contact", label: "Contact" },
  ];

  const isActive = (href: string) => {
    if (href === "/") return pathname === "/";
    return pathname.startsWith(href);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-navy-deep/90 backdrop-blur-xl border-b border-white/5">
      {/* Full-width inner container */}
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <TransitionLink href="/" className="flex items-center gap-3 group">
            <div className="h-10 w-10 rounded-lg bg-gradient-to-br from-gold/20 to-gold/5 border border-gold/20 grid place-items-center transition-all group-hover:border-gold/40 group-hover:shadow-glow">
              <Fuel className="h-5 w-5 text-gold" />
            </div>
            <div className="text-base font-bold tracking-tight">
              <span className="text-white">JLW</span>
              <span className="text-gold">analytics</span>
            </div>
          </TransitionLink>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8 text-sm">
            {navLinks.map((link) => (
              <TransitionLink
                key={link.href}
                href={link.href}
                className={`relative py-2 transition-colors ${
                  isActive(link.href)
                    ? "text-gold font-medium"
                    : "text-white/70 hover:text-white"
                }`}
              >
                {link.label}
                {isActive(link.href) && (
                  <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-gold rounded-full" />
                )}
              </TransitionLink>
            ))}
          </nav>

          {/* Desktop CTA */}
          <div className="hidden md:flex items-center gap-3">
            <TransitionLink
              href="/contact"
              className="btn-gold inline-flex items-center gap-2 text-sm"
            >
              Start Refining
              <ArrowUpRight className="h-4 w-4" />
            </TransitionLink>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 text-white/70 hover:text-gold transition-colors"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu - Full width */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-navy-deep/95 backdrop-blur-xl border-t border-white/5">
          <div className="max-w-7xl mx-auto px-6 py-4">
            <div className="flex flex-col gap-2">
              {navLinks.map((link) => (
                <TransitionLink
                  key={link.href}
                  href={link.href}
                  className={`text-sm py-3 px-4 rounded-lg transition-all ${
                    isActive(link.href)
                      ? "text-gold bg-gold/10 font-medium"
                      : "text-white/70 hover:text-white hover:bg-white/5"
                  }`}
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {link.label}
                </TransitionLink>
              ))}
              <TransitionLink
                href="/contact"
                className="btn-gold text-center mt-3 text-sm"
                onClick={() => setMobileMenuOpen(false)}
              >
                Start Refining
              </TransitionLink>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
