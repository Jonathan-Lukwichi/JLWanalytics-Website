"use client";

import { Layers, ArrowUpRight } from "lucide-react";
import { motion } from "framer-motion";
import { Container } from "../layout/Container";
import { Card } from "../ui/Card";

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

export function Metrics() {
  return (
    <section className="pt-10">
      <Container>
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 lg:grid-cols-3 gap-6"
        >
          <motion.div variants={itemVariants}>
            <Card className="p-7 h-full">
              <div className="mb-3 grid h-12 w-12 place-items-center rounded-full bg-primary/15 border border-white/10">
                <Layers className="h-5 w-5 text-primary" />
              </div>
              <h3 className="text-lg font-bold">End-to-End Support</h3>
              <p className="mt-2 text-sm text-muted">
                We support you from data strategy to deployment and beyond.
              </p>
              <a
                className="mt-4 inline-flex items-center gap-2 text-primary text-sm font-semibold hover:underline"
                href="#services"
              >
                Learn More <ArrowUpRight className="h-4 w-4" />
              </a>
            </Card>
          </motion.div>

          <motion.div variants={itemVariants}>
            <Card className="p-7 h-full">
              <div className="text-5xl font-extrabold text-primary">99%</div>
              <div className="mt-2 text-lg font-bold">Client Satisfaction Rate</div>
              <p className="mt-2 text-sm text-muted">
                Consistently delivering analytics solutions that exceed expectations.
              </p>
            </Card>
          </motion.div>

          <motion.div variants={itemVariants}>
            <Card className="p-7 h-full">
              <div className="text-5xl font-extrabold text-primary">100+</div>
              <div className="mt-2 text-lg font-bold">Dashboards Built</div>
              <p className="mt-2 text-sm text-muted">
                Custom analytics dashboards deployed across industries worldwide.
              </p>
            </Card>
          </motion.div>
        </motion.div>
      </Container>
    </section>
  );
}
