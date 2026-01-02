"use client";

import { BarChart3, Globe, Brain, Code } from "lucide-react";
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
    icon: <BarChart3 className="h-5 w-5 text-primary" />,
    title: "Data Analytics",
    desc: "Business intelligence and dashboards that drive decisions.",
    bullets: ["Interactive Dashboards", "KPI Tracking & Reporting"],
  },
  {
    icon: <Globe className="h-5 w-5 text-primary" />,
    title: "Web Development",
    desc: "Fullstack web applications with modern frameworks.",
    bullets: ["React & Next.js", "Cloud Deployment"],
  },
  {
    icon: <Brain className="h-5 w-5 text-primary" />,
    title: "AI & Machine Learning",
    desc: "Predictive models and intelligent automation.",
    bullets: ["Forecasting Models", "Natural Language Processing"],
  },
  {
    icon: <Code className="h-5 w-5 text-primary" />,
    title: "Custom Software",
    desc: "Tailored solutions for your unique business needs.",
    bullets: ["Mobile Applications", "API Integrations"],
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
          <SectionHeader centered>WHAT WE DO</SectionHeader>
          <h2 className="mt-4 text-4xl lg:text-5xl font-extrabold">
            From data to deployment — we build <Accent>solutions</Accent> that work
          </h2>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
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
