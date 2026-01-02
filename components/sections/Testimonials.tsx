"use client";

import { motion } from "framer-motion";
import { Container } from "../layout/Container";
import { Card } from "../ui/Card";
import { Accent } from "../ui/Accent";
import { SectionHeader } from "../ui/SectionHeader";

const testimonials = [
  {
    name: "Dr. Nomsa Mthembu",
    role: "Clinical Psychologist, Pretoria",
    text: "Their analytics dashboard transformed how we track patient outcomes. Data-driven insights have improved our clinical decisions significantly.",
  },
  {
    name: "Mme Grace MK",
    role: "Director, Training Dept, DRC",
    text: "They transformed our training management system with powerful analytics. Operations improved and engagement metrics increased massively.",
  },
  {
    name: "Thabo Molefe",
    role: "CEO, TechStart SA",
    text: "The custom web application exceeded expectations. Their attention to detail and scalable architecture was outstanding.",
  },
  {
    name: "Sarah Mukeba",
    role: "Operations Manager",
    text: "The business intelligence solution they built helps us make data-driven decisions every day. Couldn't run our business without it.",
  },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, x: 20 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.5 } },
};

export function Testimonials() {
  return (
    <section className="pt-24">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <SectionHeader>OUR TESTIMONIALS</SectionHeader>
            <h2 className="mt-4 text-4xl lg:text-5xl font-extrabold">
              Hear from clients who trust our{" "}
              <Accent>analytics expertise</Accent>
            </h2>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-sm text-muted leading-relaxed"
          >
            See how businesses, organizations, and entrepreneurs leverage our
            data analytics and software solutions to transform operations and
            achieve their goals.
          </motion.p>
        </div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="mt-10 flex gap-6 overflow-x-auto pb-4 hide-scrollbar"
        >
          {testimonials.map((t) => (
            <motion.div
              key={t.name}
              variants={itemVariants}
              className="min-w-[320px] max-w-[360px] shrink-0"
            >
              <Card className="p-7 h-full">
                <div className="text-primary font-bold">★★★★★</div>
                <p className="mt-4 text-sm text-white/85 leading-relaxed">
                  "{t.text}"
                </p>
                <div className="mt-6 border-t border-white/10 pt-4">
                  <div className="font-semibold">{t.name}</div>
                  <div className="text-xs text-muted mt-1">{t.role}</div>
                </div>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </Container>
    </section>
  );
}
