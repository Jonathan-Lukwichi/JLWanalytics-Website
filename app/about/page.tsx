"use client";

import { Navbar, Footer, Container } from "@/components/layout";
import { TransitionLink } from "@/components/transitions";
import { motion } from "framer-motion";
import {
  Target,
  Heart,
  Lightbulb,
  Shield,
  Globe,
  BookOpen,
  Star,
  Check,
  ArrowRight,
  Fuel,
  TrendingUp,
  Users,
  Award,
  Zap,
} from "lucide-react";
import { DataRobot, AnalyticsChart, FloatingShapes } from "@/components/illustrations";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 },
};

const stagger = {
  visible: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const coreValues = [
  {
    icon: Target,
    title: "IMPACT",
    description: "Every insight must matter. We deliver measurable business value, not just reports.",
    color: "gold",
  },
  {
    icon: Lightbulb,
    title: "INNOVATION",
    description: "Constantly evolving solutions. We adopt cutting-edge technologies to stay ahead.",
    color: "cyan",
  },
  {
    icon: Shield,
    title: "INTEGRITY",
    description: "Honest data, honest advice. We handle client data with the highest ethical standards.",
    color: "gold",
  },
  {
    icon: Globe,
    title: "INCLUSION",
    description: "Analytics accessible to all. Data intelligence shouldn't be exclusive to large corporations.",
    color: "cyan",
  },
  {
    icon: BookOpen,
    title: "EMPOWERMENT",
    description: "Building local expertise. We transfer knowledge so clients become self-sufficient.",
    color: "gold",
  },
  {
    icon: Star,
    title: "EXCELLENCE",
    description: "World-class standards. Every dashboard and model reflects our commitment to quality.",
    color: "cyan",
  },
];

const expertise = [
  "Machine Learning",
  "Data Analytics",
  "Python",
  "Time Series Forecasting",
  "Business Intelligence",
  "SQL & Databases",
  "Next.js & React",
  "AI/ML Implementation",
];

const milestones = [
  { year: "2025", event: "Founded", icon: Zap },
  { year: "SA", event: "Based", icon: Globe },
  { year: "Pan-African", event: "Reach", icon: Users },
];

export default function AboutPage() {
  return (
    <>
      <Navbar />

      {/* Hero Section - Bento Grid */}
      <section className="relative pt-24 pb-16 overflow-hidden">
        <div className="absolute inset-0 hero-gradient" />
        <FloatingShapes variant="mixed" density="low" />

        <Container>
          <div className="bento-grid">
            {/* Hero Content - Large Card */}
            <motion.div
              className="bento-lg bento-medium bento-feature flex flex-col justify-center p-8 lg:p-10"
              initial="hidden"
              animate="visible"
              variants={stagger}
            >
              <motion.span variants={fadeUp} className="section-label">
                About Us
              </motion.span>
              <motion.h1
                variants={fadeUp}
                className="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight mt-4 mb-6"
              >
                Refining Africa&apos;s <span className="text-gold">Data Future</span>
              </motion.h1>
              <motion.p variants={fadeUp} className="text-lg text-muted leading-relaxed max-w-xl">
                JLWanalytics bridges the gap between data abundance and data utilization.
                We transform African businesses from data-blind to data-driven.
              </motion.p>
            </motion.div>

            {/* Robot Mascot */}
            <motion.div
              className="bento-md bento-medium bento-card-cyan hidden lg:flex items-center justify-center"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.3 }}
            >
              <DataRobot size="md" variant="cyan" />
            </motion.div>

            {/* Milestones Row */}
            {milestones.map((milestone, index) => (
              <motion.div
                key={milestone.event}
                className={`bento-md bento-short ${
                  index % 2 === 0 ? "bento-card-gold" : "bento-card-cyan"
                } p-6 flex flex-col justify-center items-center text-center`}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 + index * 0.1 }}
              >
                <milestone.icon className={`h-6 w-6 mb-3 ${index % 2 === 0 ? "text-gold" : "text-cyan"}`} />
                <div className={`text-2xl font-bold font-display ${index % 2 === 0 ? "text-gold" : "text-cyan"}`}>
                  {milestone.year}
                </div>
                <div className="text-sm text-muted">{milestone.event}</div>
              </motion.div>
            ))}
          </div>
        </Container>
      </section>

      {/* Mission & Vision - Bento */}
      <section className="py-20">
        <Container>
          <div className="bento-grid">
            {/* Vision Card */}
            <motion.div
              className="bento-half bento-medium bento-card-gold p-8"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <div className="h-12 w-12 rounded-xl bg-gold/10 border border-gold/20 grid place-items-center mb-6">
                <Target className="h-6 w-6 text-gold" />
              </div>
              <h2 className="text-2xl font-bold mb-4">Our Vision</h2>
              <p className="text-muted leading-relaxed">
                To become <span className="text-white font-medium">Africa&apos;s leading data intelligence company</span>,
                empowering every organization—from township SMEs to continental enterprises—to harness the
                transformative power of data.
              </p>
            </motion.div>

            {/* Mission Card */}
            <motion.div
              className="bento-half bento-medium bento-card-cyan p-8"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
            >
              <div className="h-12 w-12 rounded-xl bg-cyan/10 border border-cyan/20 grid place-items-center mb-6">
                <Heart className="h-6 w-6 text-cyan" />
              </div>
              <h2 className="text-2xl font-bold mb-4">Our Mission</h2>
              <p className="text-muted leading-relaxed">
                To <span className="text-white font-medium">democratize data analytics across Africa</span> by
                providing accessible, affordable, and actionable intelligence solutions that transform
                organizations from data-blind to data-driven.
              </p>
            </motion.div>

            {/* Tagline Card - Full Width */}
            <motion.div
              className="bento-full bento-feature p-10 md:p-12 text-center relative overflow-hidden"
              initial={{ opacity: 0, scale: 0.98 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
            >
              <div className="absolute top-0 left-1/4 w-96 h-96 bg-gold/10 rounded-full blur-3xl" />
              <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-cyan/10 rounded-full blur-3xl" />
              <div className="relative z-10">
                <Fuel className="h-10 w-10 text-gold mx-auto mb-6" />
                <blockquote className="text-2xl md:text-3xl lg:text-4xl font-bold leading-tight mb-6">
                  &quot;<span className="text-gold">Data</span> is the New <span className="text-cyan">Petrol</span>.
                  <br />
                  We <span className="text-gold">Refine</span> It.&quot;
                </blockquote>
                <p className="text-muted max-w-lg mx-auto">
                  Africa generates more data than ever before, yet most businesses lack the expertise
                  to extract value. We&apos;re changing that.
                </p>
              </div>
            </motion.div>
          </div>
        </Container>
      </section>

      {/* Founder Section - Bento Grid */}
      <section className="py-20 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-cyan/5 to-transparent" />
        <Container>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={stagger}
            className="text-center mb-12"
          >
            <motion.span variants={fadeUp} className="section-label">
              Leadership
            </motion.span>
            <motion.h2
              variants={fadeUp}
              className="text-3xl md:text-4xl font-bold mt-3"
            >
              Meet the <span className="text-gold">Master Refiner</span>
            </motion.h2>
          </motion.div>

          <div className="bento-grid">
            {/* Founder Profile Card */}
            <motion.div
              className="bento-md bento-tall bento-card-gold p-8 flex flex-col items-center justify-center text-center"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <div className="w-28 h-28 rounded-full bg-gradient-to-br from-gold/30 to-gold/10 border-2 border-gold/30 flex items-center justify-center mb-6">
                <span className="text-3xl font-bold text-gold">JL</span>
              </div>
              <h3 className="text-2xl font-bold">Jonathan Lukwichi</h3>
              <p className="text-gold font-medium mb-4">Founder & CEO</p>

              <div className="flex flex-wrap justify-center gap-2">
                <span className="px-3 py-1 rounded-full bg-gold/10 border border-gold/20 text-gold text-xs font-medium">
                  MSc Industrial Engineering
                </span>
                <span className="px-3 py-1 rounded-full bg-cyan/10 border border-cyan/20 text-cyan text-xs font-medium">
                  EN / FR / SW
                </span>
              </div>
            </motion.div>

            {/* Bio Cards */}
            <motion.div
              className="bento-lg bento-tall flex flex-col gap-6"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              {/* Intro */}
              <div className="bento-card-cyan rounded-2xl p-6 flex-1">
                <p className="text-muted leading-relaxed">
                  With deep technical expertise and local African market understanding,
                  Jonathan Lukwichi founded JLWanalytics to bridge the data gap across the continent.
                  His vision: <span className="text-white font-medium">making data intelligence accessible to every African business</span>.
                </p>
              </div>

              {/* Credentials Grid */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {[
                  {
                    icon: Award,
                    title: "Academic Excellence",
                    desc: "MSc Industrial Engineering (University of Pretoria)",
                    color: "gold",
                  },
                  {
                    icon: Zap,
                    title: "Technical Expertise",
                    desc: "Machine Learning, Data Analytics, Python, AI/ML",
                    color: "cyan",
                  },
                  {
                    icon: Globe,
                    title: "Multilingual",
                    desc: "English, French (Native), Swahili — serving all of Africa",
                    color: "gold",
                  },
                ].map((item, index) => (
                  <motion.div
                    key={item.title}
                    className={`${item.color === "cyan" ? "bento-card-cyan" : "bento-card-gold"} rounded-xl p-4`}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <item.icon className={`h-5 w-5 mb-2 ${item.color === "cyan" ? "text-cyan" : "text-gold"}`} />
                    <div className="font-medium text-sm">{item.title}</div>
                    <div className="text-xs text-muted mt-1">{item.desc}</div>
                  </motion.div>
                ))}
              </div>

              {/* Expertise Tags */}
              <div className="bento-card rounded-2xl p-6">
                <div className="text-sm font-semibold mb-3 text-gold">Technical Expertise</div>
                <div className="flex flex-wrap gap-2">
                  {expertise.map((skill, index) => (
                    <span
                      key={skill}
                      className={`px-3 py-1.5 rounded-full ${
                        index % 2 === 0
                          ? "bg-gold/10 border border-gold/20 text-gold"
                          : "bg-cyan/10 border border-cyan/20 text-cyan"
                      } text-xs font-medium`}
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </Container>
      </section>

      {/* Core Values - Bento Grid */}
      <section className="py-20">
        <Container>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={stagger}
            className="text-center mb-12"
          >
            <motion.span variants={fadeUp} className="section-label">
              Our Values
            </motion.span>
            <motion.h2
              variants={fadeUp}
              className="text-3xl md:text-4xl font-bold mt-3"
            >
              The <span className="text-gold">Refinery</span> Principles
            </motion.h2>
          </motion.div>

          <div className="bento-grid">
            {coreValues.map((value, index) => (
              <motion.div
                key={value.title}
                className={`bento-md bento-short ${
                  value.color === "cyan" ? "bento-card-cyan" : "bento-card-gold"
                } p-6`}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.08 }}
              >
                <div className={`h-10 w-10 rounded-lg ${
                  value.color === "cyan" ? "bg-cyan/10 border-cyan/20" : "bg-gold/10 border-gold/20"
                } border grid place-items-center mb-4`}>
                  <value.icon className={`h-5 w-5 ${value.color === "cyan" ? "text-cyan" : "text-gold"}`} />
                </div>
                <h3 className="text-lg font-bold mb-2">{value.title}</h3>
                <p className="text-sm text-muted">{value.description}</p>
              </motion.div>
            ))}

            {/* Analytics Chart Card */}
            <motion.div
              className="bento-half bento-short bento-card p-6 hidden md:block"
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
            >
              <h4 className="text-sm font-medium text-muted mb-2">Values-Driven Results</h4>
              <AnalyticsChart variant="mixed" />
            </motion.div>
          </div>
        </Container>
      </section>

      {/* Market Opportunity - Bento */}
      <section className="py-20 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-gold/5 to-transparent" />
        <FloatingShapes variant="gold" density="low" />

        <Container>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={stagger}
            className="text-center mb-12"
          >
            <motion.span variants={fadeUp} className="section-label">
              The Opportunity
            </motion.span>
            <motion.h2
              variants={fadeUp}
              className="text-3xl md:text-4xl font-bold mt-3"
            >
              Africa&apos;s <span className="text-cyan">Data Paradox</span>
            </motion.h2>
            <motion.p variants={fadeUp} className="text-muted mt-4 max-w-2xl mx-auto">
              African businesses generate more data than ever, yet remain data-poor—not because
              they lack data, but because they lack the tools and expertise.
            </motion.p>
          </motion.div>

          <div className="bento-grid">
            {[
              {
                stat: "$340M → $500M",
                label: "Africa BI Market",
                desc: "Growth by 2029",
                color: "gold",
                icon: TrendingUp,
              },
              {
                stat: "70%+",
                label: "SMEs on Paper",
                desc: "Massive opportunity",
                color: "cyan",
                icon: Users,
              },
              {
                stat: "8.02%",
                label: "Annual CAGR",
                desc: "Market growth rate",
                color: "gold",
                icon: Zap,
              },
            ].map((item, index) => (
              <motion.div
                key={item.label}
                className={`bento-md bento-short ${
                  item.color === "cyan" ? "bento-card-cyan" : "bento-card-gold"
                } p-6 text-center flex flex-col justify-center`}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <item.icon className={`h-6 w-6 mx-auto mb-3 ${
                  item.color === "cyan" ? "text-cyan" : "text-gold"
                }`} />
                <div className={`text-3xl md:text-4xl font-bold font-display mb-2 ${
                  item.color === "cyan" ? "text-cyan" : "text-gold"
                }`}>
                  {item.stat}
                </div>
                <div className="font-medium">{item.label}</div>
                <div className="text-sm text-muted">{item.desc}</div>
              </motion.div>
            ))}

            {/* Robot Card */}
            <motion.div
              className="bento-sm bento-short bento-card-cyan hidden lg:flex items-center justify-center"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
            >
              <DataRobot size="sm" variant="cyan" />
            </motion.div>
          </div>
        </Container>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <Container>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            className="bento-feature rounded-2xl p-10 md:p-16 text-center relative overflow-hidden"
          >
            <div className="absolute top-0 left-1/4 w-96 h-96 bg-gold/10 rounded-full blur-3xl" />
            <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-cyan/10 rounded-full blur-3xl" />

            <div className="relative z-10">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Ready to Join the <span className="text-gold">Data Revolution</span>?
              </h2>
              <p className="text-muted max-w-xl mx-auto mb-8">
                Whether you&apos;re a startup beginning your data journey or an enterprise
                seeking AI transformation, we&apos;re here to help.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <TransitionLink
                  href="/contact"
                  className="btn-gold inline-flex items-center gap-2"
                >
                  Get in Touch
                  <ArrowRight className="h-5 w-5" />
                </TransitionLink>
                <TransitionLink
                  href="/services"
                  className="btn-gold-outline inline-flex items-center gap-2"
                >
                  Explore Services
                </TransitionLink>
              </div>
            </div>
          </motion.div>
        </Container>
      </section>

      <Footer />
    </>
  );
}
