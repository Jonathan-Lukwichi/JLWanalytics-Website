"use client";

import { BadgeCheck, Shield, TrendingUp, Globe2 } from "lucide-react";
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
              <div className="h-[340px] bg-gradient-to-br from-primary/10 via-purple2/20 to-transparent flex items-center justify-center p-8">
                <div className="text-center">
                  <div className="w-24 h-24 mx-auto rounded-full bg-gradient-to-br from-primary/30 to-purple2/30 border border-white/20 flex items-center justify-center mb-4">
                    <span className="text-3xl font-extrabold text-primary">JL</span>
                  </div>
                  <div className="text-xl font-bold">Jonathan Lukwichi</div>
                  <div className="text-sm text-primary mt-1">Founder & CEO</div>
                  <div className="text-xs text-muted mt-3 space-y-1">
                    <div>MSc Industrial Engineering</div>
                    <div>Machine Learning Specialist</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Languages Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="absolute top-8 right-6 glass-card rounded-lg2 px-5 py-3"
            >
              <div className="flex items-center gap-2 text-sm font-semibold">
                <Globe2 className="h-4 w-4 text-primary" />
                <span>3 Languages</span>
              </div>
              <div className="text-xs text-muted mt-1">English • French • Swahili</div>
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
              Bridging the gap between data abundance and{" "}
              <span className="text-white/40">data utilization</span> across Africa
            </h2>

            <p className="mt-4 text-sm text-muted">
              JLWanalytics exists to democratize data analytics across Africa —
              from township SMEs to continental enterprises.
            </p>

            <div className="mt-8 space-y-4">
              <div className="flex items-start gap-3">
                <div className="mt-1 grid h-10 w-10 place-items-center rounded-full bg-primary/15 border border-white/10 shrink-0">
                  <BadgeCheck className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <div className="font-semibold">Local African Expertise</div>
                  <div className="text-sm text-muted mt-1">
                    We understand load shedding, connectivity challenges, and local business culture.
                  </div>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="mt-1 grid h-10 w-10 place-items-center rounded-full bg-primary/15 border border-white/10 shrink-0">
                  <Shield className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <div className="font-semibold">Platform Agnostic</div>
                  <div className="text-sm text-muted mt-1">
                    Expertise across Yellowfin, Metabase, Superset, Grafana, Sisense, and Looker.
                  </div>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="mt-1 grid h-10 w-10 place-items-center rounded-full bg-primary/15 border border-white/10 shrink-0">
                  <TrendingUp className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <div className="font-semibold">Knowledge Transfer Focus</div>
                  <div className="text-sm text-muted mt-1">
                    We don't create dependency — we build client capability for long-term independence.
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
