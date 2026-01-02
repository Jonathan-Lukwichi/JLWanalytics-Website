"use client";

import { Sparkles } from "lucide-react";
import { motion } from "framer-motion";
import { Container } from "../layout/Container";
import { Accent } from "../ui/Accent";
import { PillButton } from "../ui/PillButton";

export function Hero() {
  return (
    <section id="home" className="pt-10">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="relative overflow-hidden rounded-lg2 border border-white/10 hero-gradient shadow-soft"
        >
          {/* Geometric overlay */}
          <div className="absolute inset-0 opacity-30">
            <div className="absolute -right-24 -top-24 h-80 w-80 rotate-12 rounded-3xl bg-primary/30 blur-2xl" />
            <div className="absolute left-10 top-16 h-40 w-40 rounded-3xl bg-white/5 blur-xl" />
            <div className="absolute bottom-0 right-0 h-72 w-72 rounded-tl-[80px] bg-purple1/40 blur-xl" />
          </div>

          <div className="relative grid grid-cols-1 lg:grid-cols-2 gap-8 p-8 lg:p-10 min-h-[420px]">
            {/* Left glass box */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="glass-card rounded-lg2 p-8 lg:p-10 border border-white/10"
            >
              <div className="flex items-center gap-2 text-xs tracking-[0.22em] text-white/70">
                <Sparkles className="h-4 w-4 text-white/70" />
                YOUR DATA, OUR INNOVATION
              </div>

              <h1 className="mt-4 text-4xl lg:text-5xl font-extrabold leading-tight">
                Bringing insights to life with <br />
                <Accent>cutting-edge</Accent> <br />
                <Accent>analytics</Accent>
              </h1>

              <p className="mt-4 text-sm lg:text-base text-muted max-w-xl leading-relaxed">
                From data visualization to predictive models, web applications to AI
                integration — we transform your data into actionable insights. Let's
                unlock your potential together.
              </p>

              <div className="mt-7 flex flex-wrap gap-4">
                <PillButton variant="primary" href="#contact">
                  Start Your Analytics Journey
                </PillButton>
                <PillButton variant="secondary" href="#services">
                  Explore Services
                </PillButton>
              </div>
            </motion.div>

            {/* Right art area */}
            <div className="hidden lg:block relative">
              <div className="absolute inset-0 rounded-lg2 border border-white/10 bg-gradient-to-br from-white/5 to-transparent" />
              <div className="absolute inset-0 opacity-40">
                <motion.div
                  initial={{ scale: 0.8, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ duration: 0.8, delay: 0.6 }}
                  className="absolute left-10 top-10 h-32 w-32 rounded-full border border-white/10"
                />
                <motion.div
                  initial={{ scale: 0.8, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ duration: 0.8, delay: 0.7 }}
                  className="absolute left-24 top-24 h-64 w-64 rounded-full border border-white/10"
                />
                <motion.div
                  initial={{ scale: 0.8, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ duration: 0.8, delay: 0.8 }}
                  className="absolute left-44 top-44 h-96 w-96 rounded-full border border-white/10"
                />
              </div>

              {/* Floating stats badge */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 1 }}
                className="absolute bottom-8 right-8 glass-card rounded-lg2 px-6 py-4"
              >
                <div className="text-3xl font-extrabold text-primary">100+</div>
                <div className="text-xs text-muted mt-1">Projects Delivered</div>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </Container>
    </section>
  );
}
