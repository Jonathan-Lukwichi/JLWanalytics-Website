"use client";

import { motion } from "framer-motion";
import { Container } from "../layout/Container";
import { Card } from "../ui/Card";
import { Chip } from "../ui/Chip";
import { Accent } from "../ui/Accent";
import { SectionHeader } from "../ui/SectionHeader";
import { PillButton } from "../ui/PillButton";

export function WhyChooseUs() {
  const techChips = [
    "Python",
    "React",
    "Node.js",
    "TensorFlow",
    "Power BI",
    "PostgreSQL",
    "AWS",
    "Docker",
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
              Data solutions built around your{" "}
              <Accent>business</Accent> <Accent>goals</Accent>
            </h2>

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
              <h3 className="text-lg font-bold">Technical Excellence</h3>
              <p className="mt-2 text-sm text-muted">
                Streamlined delivery using agile workflows, modern frameworks,
                automated testing, and scalable data architecture.
              </p>

              <div className="mt-6 flex flex-wrap gap-3">
                {techChips.map((chip) => (
                  <Chip key={chip}>{chip}</Chip>
                ))}
              </div>
            </Card>
          </motion.div>
        </div>
      </Container>
    </section>
  );
}
