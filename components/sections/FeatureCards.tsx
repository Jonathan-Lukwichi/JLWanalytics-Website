"use client";

import { Layers } from "lucide-react";
import { motion } from "framer-motion";
import { Container } from "../layout/Container";
import { Card } from "../ui/Card";
import { Accent } from "../ui/Accent";
import { PillButton } from "../ui/PillButton";

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

export function FeatureCards() {
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
              <h3 className="text-lg font-bold">Data That Scales</h3>
              <p className="mt-2 text-sm text-muted">
                Whether you're a startup or enterprise, we build analytics solutions
                that grow with your business.
              </p>
              <ul className="mt-4 space-y-2 text-sm text-white/80">
                <li className="flex items-center gap-3">
                  <span className="h-1.5 w-1.5 rounded-full bg-primary" />
                  Scalable Data Pipelines
                </li>
                <li className="flex items-center gap-3">
                  <span className="h-1.5 w-1.5 rounded-full bg-primary" />
                  Future-Proof Architecture
                </li>
              </ul>
              <div className="mt-6">
                <PillButton variant="primary" href="#services">
                  Learn More
                </PillButton>
              </div>
            </Card>
          </motion.div>

          <motion.div variants={itemVariants}>
            <Card className="p-7 flex items-center justify-center text-center relative overflow-hidden h-full">
              <div className="absolute inset-0 opacity-25 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.06),transparent_55%)]" />
              <div className="relative">
                <div className="mx-auto mb-3 grid h-12 w-12 place-items-center rounded-full bg-primary/20 border border-white/10">
                  <Layers className="h-5 w-5 text-primary" />
                </div>
                <h3 className="text-xl font-extrabold">
                  Your All-In-One <br />
                  <Accent>Analytics</Accent> <br />
                  <Accent>Partner</Accent>
                </h3>
                <p className="mt-3 text-sm text-muted">
                  From data collection to actionable insights — we handle it all.
                </p>
              </div>
            </Card>
          </motion.div>

          <motion.div variants={itemVariants}>
            <Card className="p-7 h-full">
              <h3 className="text-lg font-bold">From Data to Decisions</h3>
              <p className="mt-2 text-sm text-muted">
                We turn your raw data into powerful insights that drive real business
                impact.
              </p>
              <div className="mt-6 flex items-center gap-3">
                <span className="h-2 w-2 rounded-full bg-primary" />
                <span className="text-primary font-semibold text-sm">
                  99% Client Satisfaction Rate
                </span>
              </div>
            </Card>
          </motion.div>
        </motion.div>
      </Container>
    </section>
  );
}
