"use client";

import { BarChart3, Database, Brain, LineChart, GraduationCap } from "lucide-react";
import { motion } from "framer-motion";
import { Container } from "../layout/Container";
import { Card } from "../ui/Card";
import { Accent } from "../ui/Accent";
import { SectionHeader } from "../ui/SectionHeader";

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const services = [
  {
    icon: <Database className="h-5 w-5 text-primary" />,
    title: "Data Digitalization",
    desc: "Transform paper-based operations into structured digital assets.",
    bullets: ["Document Scanning & OCR", "Database Design & Migration"],
  },
  {
    icon: <BarChart3 className="h-5 w-5 text-primary" />,
    title: "Advanced Analytics",
    desc: "Descriptive, diagnostic, predictive, and prescriptive analysis.",
    bullets: ["Interactive Dashboards", "Root Cause Analysis"],
  },
  {
    icon: <Brain className="h-5 w-5 text-primary" />,
    title: "AI & ML Forecasting",
    desc: "State-of-the-art algorithms for business prediction.",
    bullets: ["Demand Forecasting", "Churn Prediction Models"],
  },
  {
    icon: <LineChart className="h-5 w-5 text-primary" />,
    title: "Dashboard Solutions",
    desc: "Stunning visualizations using industry-leading BI platforms.",
    bullets: ["Metabase & Superset", "Looker & Grafana"],
  },
  {
    icon: <GraduationCap className="h-5 w-5 text-primary" />,
    title: "Training Academy",
    desc: "Build your team's data capabilities with practical skills.",
    bullets: ["AI-Assisted Coding", "No-Code Analytics"],
  },
];

export function Services() {
  return (
    <section id="services" className="pt-24">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center"
        >
          <SectionHeader centered>OUR SERVICES</SectionHeader>
          <h2 className="mt-4 text-4xl lg:text-5xl font-extrabold">
            End-to-end <Accent>data intelligence</Accent> ecosystem
          </h2>
          <p className="mt-4 text-muted max-w-2xl mx-auto">
            From paper-based chaos to AI-powered clarity — we handle your entire data journey.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6"
        >
          {services.map((s) => (
            <motion.div key={s.title} variants={itemVariants}>
              <Card className="p-7 h-full">
                <div className="mb-4 grid h-11 w-11 place-items-center rounded-full bg-white/5 border border-white/10">
                  {s.icon}
                </div>
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
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mt-10 text-center text-sm text-white/70"
        >
          Ready to bring your data to life?{" "}
          <a
            className="text-primary font-semibold underline underline-offset-4 hover:text-primaryHover transition-colors"
            href="#contact"
          >
            Let's Start Building Today.
          </a>
        </motion.div>
      </Container>
    </section>
  );
}
