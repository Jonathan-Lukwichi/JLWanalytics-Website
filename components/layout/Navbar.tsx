"use client";

import { useState } from "react";
import { ArrowUpRight, Menu, X } from "lucide-react";
import { Container } from "./Container";

export function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { href: "#home", label: "Home" },
    { href: "#about", label: "About Us" },
    { href: "#services", label: "Services" },
    { href: "#contact", label: "Contact Us" },
  ];

  return (
    <Container>
      <div className="pt-8">
        <div className="glass-card rounded-full px-6 py-4">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <div className="flex items-center gap-3">
              <div className="h-9 w-9 rounded-full bg-gradient-to-br from-primary/30 to-purple2/30 border border-white/10 grid place-items-center">
                <span className="text-primary font-bold text-sm">JL</span>
              </div>
              <div className="text-sm font-semibold">
                JLW<span className="text-primary">ANALYTICS</span>
              </div>
            </div>

            {/* Desktop Nav */}
            <nav className="hidden md:flex items-center gap-10 text-sm text-white/75">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  className="hover:text-white transition-colors"
                  href={link.href}
                >
                  {link.label}
                </a>
              ))}
            </nav>

            {/* Desktop CTA */}
            <div className="hidden md:flex items-center gap-3">
              <a
                href="#contact"
                className="inline-flex items-center gap-3 rounded-full bg-primary px-5 py-2.5 text-sm font-semibold hover:bg-primaryHover transition-all hover:shadow-glow group"
              >
                Get Started
                <span className="grid h-8 w-8 place-items-center rounded-full bg-white text-black transition-transform group-hover:scale-105">
                  <ArrowUpRight className="h-4 w-4" />
                </span>
              </a>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden p-2 text-white/75 hover:text-white transition-colors"
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

          {/* Mobile Menu */}
          {mobileMenuOpen && (
            <div className="md:hidden mt-4 pt-4 border-t border-white/10">
              <nav className="flex flex-col gap-4">
                {navLinks.map((link) => (
                  <a
                    key={link.href}
                    className="text-sm text-white/75 hover:text-white transition-colors py-2"
                    href={link.href}
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {link.label}
                  </a>
                ))}
                <a
                  href="#contact"
                  className="inline-flex items-center justify-center gap-3 rounded-full bg-primary px-5 py-3 text-sm font-semibold hover:bg-primaryHover transition-all mt-2"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Get Started
                  <ArrowUpRight className="h-4 w-4" />
                </a>
              </nav>
            </div>
          )}
        </div>
      </div>
    </Container>
  );
}
