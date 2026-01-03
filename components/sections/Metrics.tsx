"use client";

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
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          <motion.div variants={itemVariants}>
            <Card className="p-7 h-full">
              <div className="text-5xl font-extrabold text-primary">23x</div>
              <div className="mt-2 text-lg font-bold">Customer Acquisition</div>
              <p className="mt-2 text-sm text-muted">
                Data-driven companies are 23x more likely to acquire customers.
              </p>
              <div className="mt-3 text-xs text-white/50">McKinsey Global Institute</div>
            </Card>
          </motion.div>

          <motion.div variants={itemVariants}>
            <Card className="p-7 h-full">
              <div className="text-5xl font-extrabold text-primary">19x</div>
              <div className="mt-2 text-lg font-bold">Profitability Boost</div>
              <p className="mt-2 text-sm text-muted">
                Analytics-driven organizations are 19x more likely to be profitable.
              </p>
              <div className="mt-3 text-xs text-white/50">McKinsey Global Institute</div>
            </Card>
          </motion.div>

          <motion.div variants={itemVariants}>
            <Card className="p-7 h-full">
              <div className="text-5xl font-extrabold text-primary">5x</div>
              <div className="mt-2 text-lg font-bold">Faster Decisions</div>
              <p className="mt-2 text-sm text-muted">
                Data-driven decision-making is 5x faster than intuition-based approaches.
              </p>
              <div className="mt-3 text-xs text-white/50">BARC Research</div>
            </Card>
          </motion.div>

          <motion.div variants={itemVariants}>
            <Card className="p-7 h-full">
              <div className="text-5xl font-extrabold text-primary">775%</div>
              <div className="mt-2 text-lg font-bold">Churn Prediction ROI</div>
              <p className="mt-2 text-sm text-muted">
                Customer churn prediction models deliver 775% ROI in the first year.
              </p>
              <div className="mt-3 text-xs text-white/50">Industry Research</div>
            </Card>
          </motion.div>
        </motion.div>
      </Container>
    </section>
  );
}
