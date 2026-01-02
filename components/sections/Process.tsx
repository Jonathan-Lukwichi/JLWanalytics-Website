"use client";

import { motion } from "framer-motion";
import { Container } from "../layout/Container";
import { Card } from "../ui/Card";
import { Accent } from "../ui/Accent";
import { SectionHeader } from "../ui/SectionHeader";

const steps = [
  {
    label: "STEP 01",
    title: "Discover & Analyze",
    desc: "We start by understanding your data landscape and business goals.",
    bullets: ["Data assessment", "Goal definition"],
    active: true,
  },
  {
    label: "STEP 02",
    title: "Design & Build",
    desc: "Our team builds scalable analytics solutions with modern tools.",
    bullets: ["Dashboard design", "Model development"],
    active: false,
  },
  {
    label: "STEP 03",
    title: "Test & Deploy",
    desc: "We thoroughly validate and deploy your analytics solution.",
    bullets: ["Quality assurance", "Production deployment"],
    active: false,
  },
  {
    label: "STEP 04",
    title: "Monitor & Scale",
    desc: "Post-launch, we provide support and continuous improvements.",
    bullets: ["Performance monitoring", "Feature enhancements"],
    active: false,
  },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

export function Process() {
  return (
    <section className="pt-24">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center"
        >
          <SectionHeader centered>HOW IT WORKS</SectionHeader>
          <h2 className="mt-4 text-4xl lg:text-5xl font-extrabold">
            Our step-by-step process to <Accent>analytics</Accent> success
          </h2>
        </motion.div>

        {/* Timeline */}
        <div className="relative mt-10">
          {/* Connection line - hidden on mobile */}
          <div className="absolute left-0 right-0 top-6 h-px bg-white/10 hidden md:block" />

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="grid grid-cols-1 md:grid-cols-4 gap-6"
          >
            {steps.map((s) => (
              <motion.div key={s.title} variants={itemVariants}>
                <div className="text-xs text-primary font-semibold text-center">
                  {s.label}
                </div>
                <div className="mx-auto mt-3 h-3 w-3 rounded-full bg-primary hidden md:block" />
                <Card className={`mt-6 p-7 ${s.active ? "card-active" : ""}`}>
                  <h3 className="text-lg font-bold">{s.title}</h3>
                  <p className="mt-2 text-sm text-muted">{s.desc}</p>
                  <div className="mt-5 border-t border-white/10 pt-4 space-y-2 text-sm text-white/80">
                    {s.bullets.map((b) => (
                      <div key={b} className="flex items-center gap-3">
                        <span className="h-1.5 w-1.5 rounded-full bg-primary" />
                        {b}
                      </div>
                    ))}
                  </div>
                </Card>
              </motion.div>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="mt-10 text-center text-sm text-white/70"
          >
            <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2">
              Free Consultation
            </span>{" "}
            Let's make something great together.{" "}
            <a
              className="text-primary font-semibold underline underline-offset-4 hover:text-primaryHover transition-colors"
              href="#contact"
            >
              Get Free Quote
            </a>
          </motion.div>
        </div>
      </Container>
    </section>
  );
}
