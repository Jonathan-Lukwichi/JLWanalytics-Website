import { Smartphone, Globe, MapPin } from "lucide-react";
import { Container } from "./Container";
import { Card } from "../ui/Card";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer id="contact" className="pt-24 pb-14">
      <Container>
        <Card className="p-10">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {/* Brand */}
            <div>
              <div className="flex items-center gap-3">
                <div className="h-9 w-9 rounded-full bg-gradient-to-br from-primary/30 to-purple2/30 border border-white/10 grid place-items-center">
                  <span className="text-primary font-bold text-sm">JL</span>
                </div>
                <div className="text-sm font-semibold">
                  JLW<span className="text-primary">ANALYTICS</span>
                </div>
              </div>
              <p className="mt-4 text-sm text-muted leading-relaxed">
                Transforming data into decisions. We deliver cutting-edge analytics,
                web development, and AI solutions that drive real business results.
              </p>
            </div>

            {/* Quick Links */}
            <div className="text-sm">
              <div className="font-semibold mb-4">Quick Links</div>
              <ul className="space-y-2 text-white/75">
                <li>
                  <a className="hover:text-white transition-colors" href="#home">
                    Home
                  </a>
                </li>
                <li>
                  <a className="hover:text-white transition-colors" href="#about">
                    About Us
                  </a>
                </li>
                <li>
                  <a className="hover:text-white transition-colors" href="#services">
                    Services
                  </a>
                </li>
                <li>
                  <a className="hover:text-white transition-colors" href="#contact">
                    Contact Us
                  </a>
                </li>
              </ul>
            </div>

            {/* Contact Info */}
            <div className="text-sm">
              <div className="font-semibold mb-4">Contact Information</div>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="mt-1 grid h-10 w-10 place-items-center rounded-full bg-primary/15 border border-white/10 text-primary shrink-0">
                    <Smartphone className="h-5 w-5" />
                  </div>
                  <div>
                    <div className="font-semibold">Phone Number</div>
                    <div className="text-muted mt-1">+27 (646) 211-860</div>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="mt-1 grid h-10 w-10 place-items-center rounded-full bg-primary/15 border border-white/10 text-primary shrink-0">
                    <Globe className="h-5 w-5" />
                  </div>
                  <div>
                    <div className="font-semibold">Email Address</div>
                    <div className="text-muted mt-1">info@jlwanalytics.com</div>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="mt-1 grid h-10 w-10 place-items-center rounded-full bg-primary/15 border border-white/10 text-primary shrink-0">
                    <MapPin className="h-5 w-5" />
                  </div>
                  <div>
                    <div className="font-semibold">Location</div>
                    <div className="text-muted mt-1">Pretoria, South Africa</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-10 border-t border-white/10 pt-6 text-xs text-white/60 flex flex-col sm:flex-row justify-between gap-4">
            <span>Copyright © {currentYear} JLWanalytics. All Rights Reserved.</span>
            <span>Your Data, Our Innovation</span>
          </div>
        </Card>
      </Container>
    </footer>
  );
}
