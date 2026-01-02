"use client";

import { BadgeCheck, Shield, TrendingUp } from "lucide-react";
import { motion } from "framer-motion";
import { Container } from "../layout/Container";
import { SectionHeader } from "../ui/SectionHeader";
import { PillButton } from "../ui/PillButton";

export function About() {
  return (
    <section id="about" className="pt-20">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          {/* Image Area */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="rounded-lg2 border border-white/10 overflow-hidden glass-card">
              <div className="h-[340px] bg-gradient-to-br from-primary/10 via-purple2/20 to-transparent flex items-center justify-center">
                <div className="text-center">
                  <div className="text-6xl font-extrabold text-primary/30">JLW</div>
                  <div className="text-sm text-muted mt-2">Analytics Excellence</div>
                </div>
              </div>
            </div>

            {/* Rating Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="absolute top-8 right-6 glass-card rounded-lg2 px-6 py-4"
            >
              <div className="text-sm font-bold text-yellow-400">★★★★★</div>
              <div className="text-xs text-muted mt-1">150 Reviews (4.9)</div>
            </motion.div>
          </motion.div>

          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <SectionHeader>ABOUT US</SectionHeader>

            <h2 className="mt-4 text-3xl lg:text-5xl font-extrabold leading-tight">
              A data-driven company dedicated to transforming insights into powerful
              digital solutions that make a real{" "}
              <span className="text-white/40">difference</span>
            </h2>

            <div className="mt-8 space-y-4">
              <div className="flex items-start gap-3">
                <div className="mt-1 grid h-10 w-10 place-items-center rounded-full bg-primary/15 border border-white/10 shrink-0">
                  <BadgeCheck className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <div className="font-semibold">Data-First Approach</div>
                  <div className="text-sm text-muted mt-1">
                    We help you move fast from raw data → insights → actionable decisions.
                  </div>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="mt-1 grid h-10 w-10 place-items-center rounded-full bg-primary/15 border border-white/10 shrink-0">
                  <Shield className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <div className="font-semibold">Full-Stack Excellence</div>
                  <div className="text-sm text-muted mt-1">
                    Modern architecture, strong QA, and solutions built to last.
                  </div>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="mt-1 grid h-10 w-10 place-items-center rounded-full bg-primary/15 border border-white/10 shrink-0">
                  <TrendingUp className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <div className="font-semibold">Measurable Results</div>
                  <div className="text-sm text-muted mt-1">
                    Track ROI with clear metrics and transparent reporting.
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-8">
              <PillButton variant="primary" href="#contact">
                More About Us
              </PillButton>
            </div>
          </motion.div>
        </div>
      </Container>
    </section>
  );
}
