"use client";

import { Smartphone, Mail, MapPin, ArrowUpRight, Fuel, Linkedin, Twitter } from "lucide-react";
import { Container } from "./Container";
import { TransitionLink } from "../transitions";

export function Footer() {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About" },
    { href: "/services", label: "Services" },
    { href: "/contact", label: "Contact" },
  ];

  const services = [
    { href: "/services#digitalization", label: "Data Digitalization" },
    { href: "/services#analytics", label: "Advanced Analytics" },
    { href: "/services#ai-ml", label: "AI & Machine Learning" },
    { href: "/services#dashboards", label: "Custom Dashboards" },
    { href: "/services#training", label: "Training Academy" },
  ];

  return (
    <footer className="pt-20 pb-10">
      <Container>
        {/* Main Footer Content */}
        <div className="bento-feature rounded-2xl p-8 lg:p-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
            {/* Brand Column */}
            <div className="lg:col-span-1">
              <TransitionLink href="/" className="flex items-center gap-3 group">
                <div className="h-10 w-10 rounded-lg bg-gradient-to-br from-gold/20 to-gold/5 border border-gold/20 grid place-items-center transition-all group-hover:border-gold/40 group-hover:shadow-glow">
                  <Fuel className="h-5 w-5 text-gold" />
                </div>
                <div className="text-base font-bold tracking-tight">
                  <span className="text-white">JLW</span>
                  <span className="text-gold">analytics</span>
                </div>
              </TransitionLink>

              <p className="mt-4 text-sm text-muted leading-relaxed">
                From Data to Decisions. From Insights to Impact.
              </p>

              {/* Tagline */}
              <div className="mt-4 p-3 rounded-lg bg-gradient-to-r from-gold/10 to-cyan/10 border border-gold/10">
                <p className="text-xs font-medium">
                  <span className="text-gold">&quot;Data</span> is the New <span className="text-cyan">Petrol</span>. We <span className="text-gold">Refine</span> It.&quot;
                </p>
              </div>

              {/* Social Links */}
              <div className="flex gap-3 mt-6">
                <a
                  href="https://linkedin.com/company/jlwanalytics"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="h-9 w-9 rounded-lg bg-cyan/10 border border-cyan/20 grid place-items-center text-cyan hover:bg-cyan/20 hover:border-cyan/30 transition-all"
                >
                  <Linkedin className="h-4 w-4" />
                </a>
                <a
                  href="https://twitter.com/jlwanalytics"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="h-9 w-9 rounded-lg bg-gold/10 border border-gold/20 grid place-items-center text-gold hover:bg-gold/20 hover:border-gold/30 transition-all"
                >
                  <Twitter className="h-4 w-4" />
                </a>
              </div>
            </div>

            {/* Quick Links */}
            <div className="text-sm">
              <div className="text-cyan font-semibold mb-4 text-xs uppercase tracking-wider">
                Navigation
              </div>
              <ul className="space-y-3 text-white/70">
                {quickLinks.map((link, index) => (
                  <li key={link.href}>
                    <TransitionLink
                      href={link.href}
                      className={`hover:${index % 2 === 0 ? 'text-gold' : 'text-cyan'} transition-colors inline-flex items-center gap-1 group`}
                    >
                      {link.label}
                      <ArrowUpRight className="h-3 w-3 opacity-0 -translate-y-0.5 translate-x-0.5 group-hover:opacity-100 transition-all" />
                    </TransitionLink>
                  </li>
                ))}
              </ul>
            </div>

            {/* Services */}
            <div className="text-sm">
              <div className="text-gold font-semibold mb-4 text-xs uppercase tracking-wider">
                Services
              </div>
              <ul className="space-y-3 text-white/70">
                {services.map((link, index) => (
                  <li key={link.href}>
                    <TransitionLink
                      href={link.href}
                      className={`hover:${index % 2 === 0 ? 'text-gold' : 'text-cyan'} transition-colors inline-flex items-center gap-1 group`}
                    >
                      {link.label}
                      <ArrowUpRight className="h-3 w-3 opacity-0 -translate-y-0.5 translate-x-0.5 group-hover:opacity-100 transition-all" />
                    </TransitionLink>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact Info */}
            <div className="text-sm">
              <div className="text-gold font-semibold mb-4 text-xs uppercase tracking-wider">
                Contact
              </div>
              <div className="space-y-4">
                <a
                  href="tel:+27847314600"
                  className="flex items-center gap-3 group"
                >
                  <div className="h-9 w-9 rounded-lg bg-gold/10 border border-gold/20 grid place-items-center text-gold shrink-0 group-hover:bg-gold/15 transition-all">
                    <Smartphone className="h-4 w-4" />
                  </div>
                  <div>
                    <div className="text-white/70 group-hover:text-gold transition-colors">
                      +27 84 731 4600
                    </div>
                  </div>
                </a>

                <a
                  href="mailto:info@jlwanalytics.com"
                  className="flex items-center gap-3 group"
                >
                  <div className="h-9 w-9 rounded-lg bg-cyan/10 border border-cyan/20 grid place-items-center text-cyan shrink-0 group-hover:bg-cyan/15 transition-all">
                    <Mail className="h-4 w-4" />
                  </div>
                  <div>
                    <div className="text-white/70 group-hover:text-cyan transition-colors text-xs">
                      info@jlwanalytics.com
                    </div>
                  </div>
                </a>

                <div className="flex items-center gap-3">
                  <div className="h-9 w-9 rounded-lg bg-gold/10 border border-gold/20 grid place-items-center text-gold shrink-0">
                    <MapPin className="h-4 w-4" />
                  </div>
                  <div>
                    <div className="text-white/70">
                      Pretoria, South Africa
                    </div>
                  </div>
                </div>
              </div>

              {/* CTA */}
              <TransitionLink
                href="/contact"
                className="btn-gold inline-flex items-center gap-2 mt-6 text-sm w-full justify-center"
              >
                Start Refining
                <ArrowUpRight className="h-4 w-4" />
              </TransitionLink>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="mt-10 pt-6 border-t border-white/10 flex flex-col sm:flex-row justify-between items-center gap-4 text-xs text-muted">
            <span>
              © {currentYear} JLWanalytics (Pty) Ltd. All Rights Reserved.
            </span>
            <div className="flex items-center gap-4">
              <span className="px-3 py-1 rounded-full bg-gold/10 border border-gold/20 text-gold">Serving Africa & Beyond</span>
            </div>
          </div>
        </div>
      </Container>
    </footer>
  );
}
