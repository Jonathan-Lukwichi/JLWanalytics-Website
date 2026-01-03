"use client";

import { Navbar, Footer, Container } from "@/components/layout";
import { TransitionLink } from "@/components/transitions";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Database,
  BarChart3,
  Brain,
  Layout,
  Sparkles,
  CheckCircle,
  ArrowUpRight,
  Fuel,
  TrendingUp,
  Users,
  Zap,
  Clock,
  Star,
  GraduationCap,
} from "lucide-react";
import { DataRefineryHero, DataRobot, AnalyticsChart, FloatingShapes } from "@/components/illustrations";

// Animation variants
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

const services = [
  {
    icon: Database,
    title: "Data Digitalization",
    desc: "From paper chaos to digital clarity. We transform your manual records into structured, searchable data.",
    color: "gold",
  },
  {
    icon: BarChart3,
    title: "Advanced Analytics",
    desc: "Uncover hidden patterns and trends. Turn your data into actionable business insights.",
    color: "cyan",
  },
  {
    icon: Brain,
    title: "AI & Machine Learning",
    desc: "Predictive intelligence at scale. Build models that forecast trends and automate decisions.",
    color: "gold",
  },
  {
    icon: Layout,
    title: "Custom Dashboards",
    desc: "Real-time visibility into your business. Interactive dashboards that tell your data story.",
    color: "cyan",
  },
  {
    icon: GraduationCap,
    title: "Training Academy",
    desc: "Build internal capabilities. We train your team to become self-sufficient data analysts.",
    color: "gold",
  },
];

export default function Page() {
  return (
    <>
      <Navbar />

      {/* Hero Section - Bento Layout */}
      <section className="relative min-h-screen pt-20 pb-12 overflow-hidden">
        {/* Background Effects */}
        <div className="absolute inset-0 hero-gradient" />
        <FloatingShapes variant="mixed" density="low" />

        <Container>
          <div className="bento-grid pt-8">
            {/* Main Hero Content - Large Card */}
            <motion.div
              className="bento-lg bento-tall bento-feature flex flex-col justify-center p-8 lg:p-12"
              initial="hidden"
              animate="visible"
              variants={stagger}
            >
              {/* Badge */}
              <motion.div variants={fadeUp} className="mb-6">
                <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gold/10 border border-gold/20 text-gold text-sm font-medium">
                  <Fuel className="h-4 w-4" />
                  Africa&apos;s Premier Data Refinery
                </span>
              </motion.div>

              {/* Main Headline */}
              <motion.h1
                variants={fadeUp}
                className="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight mb-6"
              >
                <span className="text-gold">DATA</span> IS THE NEW{" "}
                <span className="text-gold">PETROL</span>
                <br />
                <span className="text-white/90">WE REFINE IT.</span>
              </motion.h1>

              {/* Subheadline */}
              <motion.p
                variants={fadeUp}
                className="text-lg text-muted max-w-xl mb-8 leading-relaxed"
              >
                Transform your raw business data into refined intelligence that
                powers decisions and drives growth.
              </motion.p>

              {/* CTA Buttons */}
              <motion.div
                variants={fadeUp}
                className="flex flex-wrap gap-4"
              >
                <TransitionLink
                  href="/contact"
                  className="btn-gold inline-flex items-center gap-2 text-base"
                >
                  Start Refining
                  <ArrowRight className="h-5 w-5" />
                </TransitionLink>
                <TransitionLink
                  href="/services"
                  className="btn-gold-outline inline-flex items-center gap-2 text-base"
                >
                  Our Services
                </TransitionLink>
              </motion.div>
            </motion.div>

            {/* Hero Illustration - Right Side */}
            <motion.div
              className="bento-md bento-tall bento-card-cyan hidden lg:flex items-center justify-center p-6"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <DataRefineryHero />
            </motion.div>

            {/* Stats Card */}
            <motion.div
              className="bento-md bento-short bento-card-gold p-6 flex flex-col justify-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
            >
              <div className="flex items-center gap-2 mb-3">
                <Star className="h-5 w-5 text-gold" />
                <span className="text-sm font-medium text-gold">Client Satisfaction</span>
              </div>
              <div className="text-4xl font-bold text-white font-display">99%</div>
              <p className="text-sm text-muted mt-2">
                Our clients consistently rate our data solutions as transformative
              </p>
            </motion.div>

            {/* Robot Mascot Card */}
            <motion.div
              className="bento-sm bento-short bento-card hidden md:flex items-center justify-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
            >
              <DataRobot size="sm" variant="cyan" />
            </motion.div>

            {/* Trust Indicators Card */}
            <motion.div
              className="bento-md bento-short bento-card p-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
            >
              <div className="space-y-3">
                {[
                  { text: "South African Founded", icon: CheckCircle },
                  { text: "Pan-African Reach", icon: CheckCircle },
                  { text: "Enterprise Ready", icon: CheckCircle },
                ].map((item) => (
                  <div key={item.text} className="flex items-center gap-3 text-sm">
                    <item.icon className="h-4 w-4 text-gold" />
                    <span className="text-white/80">{item.text}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </Container>
      </section>

      {/* Services Section - Bento Grid */}
      <section className="py-20 relative">
        <Container>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={stagger}
            className="text-center mb-12"
          >
            <motion.span variants={fadeUp} className="section-label">
              What We Refine
            </motion.span>
            <motion.h2
              variants={fadeUp}
              className="text-3xl md:text-4xl font-bold mt-3"
            >
              Our <span className="text-gold">Refinery</span> Processes
            </motion.h2>
          </motion.div>

          <div className="bento-grid">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                className={`${index < 2 ? "bento-half" : "bento-md"} bento-medium ${
                  service.color === "cyan" ? "bento-card-cyan" : "bento-card-gold"
                } p-6 cursor-pointer group`}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <div className={`h-12 w-12 rounded-xl ${
                  service.color === "cyan"
                    ? "bg-cyan/10 border-cyan/20"
                    : "bg-gold/10 border-gold/20"
                } border grid place-items-center mb-4 group-hover:scale-110 transition-transform`}>
                  <service.icon className={`h-6 w-6 ${
                    service.color === "cyan" ? "text-cyan" : "text-gold"
                  }`} />
                </div>
                <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
                <p className="text-sm text-muted leading-relaxed">{service.desc}</p>
              </motion.div>
            ))}

            {/* CTA Card */}
            <motion.div
              className="bento-md bento-medium bento-feature flex flex-col items-center justify-center text-center p-6"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5 }}
            >
              <Sparkles className="h-10 w-10 text-gold mb-4" />
              <h3 className="text-lg font-semibold mb-2">Need Something Custom?</h3>
              <p className="text-sm text-muted mb-4">Let&apos;s discuss your unique data challenges</p>
              <TransitionLink
                href="/contact"
                className="btn-gold inline-flex items-center gap-2 text-sm"
              >
                Contact Us
                <ArrowUpRight className="h-4 w-4" />
              </TransitionLink>
            </motion.div>
          </div>
        </Container>
      </section>

      {/* Process Section */}
      <section className="py-20 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-gold/5 to-transparent" />
        <Container>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={stagger}
            className="text-center mb-16"
          >
            <motion.span variants={fadeUp} className="section-label">
              The Refinery Process
            </motion.span>
            <motion.h2
              variants={fadeUp}
              className="text-3xl md:text-4xl font-bold mt-3"
            >
              From <span className="text-gold">Raw</span> to{" "}
              <span className="text-gold">Refined</span>
            </motion.h2>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={stagger}
            className="relative"
          >
            {/* Process Line */}
            <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-gold/30 to-transparent -translate-y-1/2" />

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                { step: "01", title: "Collect", desc: "Gather your raw data from all sources", color: "gold" },
                { step: "02", title: "Clean", desc: "Structure, validate, and standardize", color: "cyan" },
                { step: "03", title: "Analyze", desc: "Extract insights and patterns", color: "gold" },
                { step: "04", title: "Deliver", desc: "Actionable dashboards and reports", color: "cyan" },
              ].map((item) => (
                <motion.div
                  key={item.step}
                  variants={fadeUp}
                  className="relative text-center"
                >
                  <div className={`relative z-10 mx-auto w-16 h-16 rounded-full bg-navy border-2 ${
                    item.color === "cyan" ? "border-cyan/30" : "border-gold/30"
                  } grid place-items-center mb-4`}>
                    <span className={`font-bold font-display text-xl ${
                      item.color === "cyan" ? "text-cyan" : "text-gold"
                    }`}>
                      {item.step}
                    </span>
                  </div>
                  <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
                  <p className="text-sm text-muted">{item.desc}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </Container>
      </section>

      {/* Metrics Section - Bento */}
      <section className="py-20 relative">
        <Container>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={stagger}
            className="text-center mb-12"
          >
            <motion.span variants={fadeUp} className="section-label">
              The Impact
            </motion.span>
            <motion.h2
              variants={fadeUp}
              className="text-3xl md:text-4xl font-bold mt-3"
            >
              Why Data <span className="text-gold">Refining</span> Matters
            </motion.h2>
          </motion.div>

          <div className="bento-grid">
            {/* Chart Card */}
            <motion.div
              className="bento-half bento-medium bento-card-gold p-6 hidden md:block"
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
            >
              <h3 className="text-lg font-semibold mb-2">Growth Analytics</h3>
              <p className="text-sm text-muted mb-4">Data-driven organizations outperform</p>
              <AnalyticsChart variant="mixed" />
            </motion.div>

            {/* Metrics Cards */}
            {[
              { icon: Users, value: "23x", label: "Customer Acquisition", desc: "Better targeting with data", color: "cyan" },
              { icon: TrendingUp, value: "775%", label: "Churn Prevention ROI", desc: "Predictive retention", color: "gold" },
              { icon: Zap, value: "5x", label: "Faster Decisions", desc: "Real-time insights", color: "cyan" },
              { icon: Clock, value: "R2.4M", label: "Annual Savings", desc: "Average client benefit", color: "gold" },
            ].map((metric, index) => (
              <motion.div
                key={metric.label}
                className={`bento-sm bento-short ${
                  metric.color === "cyan" ? "bento-card-cyan" : "bento-card-gold"
                } p-5 flex flex-col justify-center`}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <metric.icon className={`h-6 w-6 ${
                  metric.color === "cyan" ? "text-cyan" : "text-gold"
                } mb-2`} />
                <div className={`text-2xl md:text-3xl font-bold font-display ${
                  metric.color === "cyan" ? "text-cyan" : "text-gold"
                }`}>
                  {metric.value}
                </div>
                <div className="font-medium text-sm">{metric.label}</div>
                <div className="text-xs text-muted">{metric.desc}</div>
              </motion.div>
            ))}
          </div>

          <motion.p
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            className="text-center text-sm text-muted mt-8"
          >
            * Based on McKinsey Global Institute research on data-driven organizations
          </motion.p>
        </Container>
      </section>

      {/* Industries Section */}
      <section className="py-20 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-navy/50 to-transparent" />
        <Container>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={stagger}
            className="text-center mb-12"
          >
            <motion.span variants={fadeUp} className="section-label">
              Industries We Serve
            </motion.span>
            <motion.h2
              variants={fadeUp}
              className="text-3xl md:text-4xl font-bold mt-3"
            >
              Powering Growth Across <span className="text-gold">Sectors</span>
            </motion.h2>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={stagger}
            className="flex flex-wrap justify-center gap-3"
          >
            {[
              "Healthcare",
              "Mining",
              "Banking & Finance",
              "Legal",
              "Retail",
              "Education",
              "Government",
              "SMEs",
            ].map((industry, index) => (
              <motion.span
                key={industry}
                variants={fadeUp}
                className={`px-5 py-2.5 rounded-full ${
                  index % 2 === 0
                    ? "bg-gold/10 border-gold/20 hover:border-gold/40 hover:text-gold"
                    : "bg-cyan/10 border-cyan/20 hover:border-cyan/40 hover:text-cyan"
                } border text-sm font-medium text-white/80 transition-all cursor-default`}
              >
                {industry}
              </motion.span>
            ))}
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-6 max-w-2xl mx-auto"
          >
            <div className="bento-card-gold rounded-xl p-6 text-center">
              <div className="text-2xl font-bold text-gold font-display">
                $340M → $500M
              </div>
              <div className="text-sm text-muted mt-1">
                Africa BI Market Growth by 2029
              </div>
            </div>
            <div className="bento-card-cyan rounded-xl p-6 text-center">
              <div className="text-2xl font-bold text-cyan font-display">
                70%+
              </div>
              <div className="text-sm text-muted mt-1">
                African SMEs Still on Paper
              </div>
            </div>
          </motion.div>
        </Container>
      </section>

      {/* CTA Section */}
      <section className="py-20 relative">
        <Container>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            className="bento-feature rounded-2xl p-10 md:p-16 text-center relative overflow-hidden"
          >
            {/* Background glow */}
            <div className="absolute top-0 left-1/4 w-96 h-96 bg-gold/10 rounded-full blur-3xl" />
            <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-cyan/10 rounded-full blur-3xl" />

            <div className="relative z-10">
              <Sparkles className="h-10 w-10 text-gold mx-auto mb-6" />
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Ready to <span className="text-gold">Refine</span> Your Data?
              </h2>
              <p className="text-muted max-w-xl mx-auto mb-8">
                Let&apos;s discuss how we can transform your raw data into
                premium business intelligence that drives results.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <TransitionLink
                  href="/contact"
                  className="btn-gold inline-flex items-center gap-2"
                >
                  Get Started
                  <ArrowRight className="h-5 w-5" />
                </TransitionLink>
                <TransitionLink
                  href="/about"
                  className="btn-gold-outline inline-flex items-center gap-2"
                >
                  Learn About Us
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
