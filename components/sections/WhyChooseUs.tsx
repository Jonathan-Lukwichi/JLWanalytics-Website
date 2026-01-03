"use client";

import { motion } from "framer-motion";
import { Container } from "../layout/Container";
import { Card } from "../ui/Card";
import { Chip } from "../ui/Chip";
import { Accent } from "../ui/Accent";
import { SectionHeader } from "../ui/SectionHeader";
import { PillButton } from "../ui/PillButton";

export function WhyChooseUs() {
  const industries = [
    "Healthcare",
    "Mining",
    "Banking & Finance",
    "Law Firms",
    "Retail",
    "Education",
    "Government",
    "SMEs",
  ];

  const techStack = [
    "Python",
    "Prophet",
    "XGBoost",
    "SQL",
    "Metabase",
    "Superset",
  ];

  return (
    <section className="pt-20">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <SectionHeader>WHY CHOOSE US</SectionHeader>

            <h2 className="mt-4 text-4xl lg:text-5xl font-extrabold leading-tight">
              Serving <Accent>8 key industries</Accent> across Africa
            </h2>

            <p className="mt-4 text-sm text-muted">
              From healthcare to mining, banking to retail — we deliver data solutions
              tailored to your industry's unique challenges.
            </p>

            <div className="mt-6 flex flex-wrap gap-2">
              {industries.map((industry) => (
                <Chip key={industry}>{industry}</Chip>
              ))}
            </div>

            <div className="mt-7">
              <PillButton variant="primary" href="#contact">
                Contact Us Today
              </PillButton>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <Card className="p-7">
              <h3 className="text-lg font-bold">Cost-Effective Solutions</h3>
              <p className="mt-2 text-sm text-muted">
                Access enterprise-grade analytics without enterprise budgets. We leverage
                open-source platforms to make BI accessible to African SMEs.
              </p>

              <div className="mt-4 pt-4 border-t border-white/10">
                <div className="text-xs text-white/60 mb-3">OUR TECH STACK</div>
                <div className="flex flex-wrap gap-2">
                  {techStack.map((tech) => (
                    <Chip key={tech}>{tech}</Chip>
                  ))}
                </div>
              </div>

              <div className="mt-6 p-4 rounded-lg bg-primary/10 border border-primary/20">
                <div className="text-2xl font-extrabold text-primary">$340M → $500M</div>
                <div className="text-xs text-muted mt-1">
                  Africa BI market growth by 2029 (8% CAGR)
                </div>
              </div>
            </Card>
          </motion.div>
        </div>
      </Container>
    </section>
  );
}
