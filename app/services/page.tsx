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
  Check,
  ArrowUpRight,
  Fuel,
  GraduationCap,
  Sparkles,
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

const services = [
  {
    id: "digitalization",
    icon: Database,
    title: "Data Digitalization",
    subtitle: "From Paper to Power",
    description:
      "Transform your manual records, paper files, and scattered spreadsheets into structured, searchable digital data.",
    features: [
      "Document scanning & OCR processing",
      "Data entry & validation",
      "Database design & migration",
      "Legacy system integration",
      "Cloud storage solutions",
    ],
    color: "gold",
  },
  {
    id: "analytics",
    icon: BarChart3,
    title: "Advanced Analytics",
    subtitle: "Insights That Drive Action",
    description:
      "Uncover hidden patterns, trends, and opportunities in your data. Turn raw numbers into actionable intelligence.",
    features: [
      "Exploratory data analysis",
      "KPI development & tracking",
      "Trend analysis & forecasting",
      "Customer segmentation",
      "Performance optimization",
    ],
    color: "cyan",
  },
  {
    id: "ai-ml",
    icon: Brain,
    title: "AI & Machine Learning",
    subtitle: "Intelligence at Scale",
    description:
      "Build predictive models that automate decisions and forecast future trends. We make AI accessible.",
    features: [
      "Predictive modeling",
      "Customer churn prediction",
      "Demand forecasting",
      "Anomaly detection",
      "Recommendation engines",
    ],
    color: "gold",
  },
  {
    id: "dashboards",
    icon: Layout,
    title: "Custom Dashboards",
    subtitle: "Real-Time Visibility",
    description:
      "Interactive dashboards that tell your data story with beautiful, easy-to-understand visualizations.",
    features: [
      "Custom dashboard design",
      "Real-time data updates",
      "Mobile-responsive views",
      "Automated reporting",
      "User access management",
    ],
    color: "cyan",
  },
  {
    id: "training",
    icon: GraduationCap,
    title: "Training Academy",
    subtitle: "Build Internal Capability",
    description:
      "Empower your team with data skills. Our training programs create self-sufficient data analysts.",
    features: [
      "Data literacy workshops",
      "Tool-specific training",
      "Best practices coaching",
      "Hands-on projects",
      "Ongoing support",
    ],
    color: "gold",
  },
];

const platforms = [
  { name: "Yellowfin", category: "Enterprise BI" },
  { name: "Metabase", category: "Open Source" },
  { name: "Power BI", category: "Microsoft" },
  { name: "Apache Superset", category: "Open Source" },
  { name: "Grafana", category: "Monitoring" },
  { name: "Google Looker", category: "Cloud BI" },
];

const pricingTiers = [
  {
    name: "Starter",
    price: "R35,000",
    period: "per project",
    description: "Essential analytics for small teams",
    features: [
      "Basic data analysis",
      "Up to 3 dashboards",
      "1 data source integration",
      "Email support",
      "30-day delivery",
    ],
    popular: false,
    color: "gold",
  },
  {
    name: "Growth",
    price: "R85,000",
    period: "per project",
    description: "Comprehensive BI for growing businesses",
    features: [
      "Advanced analytics",
      "Up to 10 dashboards",
      "3 data source integrations",
      "Priority support",
      "Training included",
    ],
    popular: true,
    color: "cyan",
  },
  {
    name: "Professional",
    price: "R180,000",
    period: "per project",
    description: "Full-stack analytics solution",
    features: [
      "AI/ML model development",
      "Unlimited dashboards",
      "Unlimited integrations",
      "Dedicated support",
      "On-site training",
    ],
    popular: false,
    color: "gold",
  },
  {
    name: "Enterprise",
    price: "R350,000+",
    period: "custom",
    description: "Custom enterprise deployment",
    features: [
      "Full digital transformation",
      "Custom AI solutions",
      "Enterprise integrations",
      "24/7 support",
      "Ongoing maintenance",
    ],
    popular: false,
    color: "cyan",
  },
];

export default function ServicesPage() {
  return (
    <>
      <Navbar />

      {/* Hero Section */}
      <section className="relative pt-24 pb-16 overflow-hidden">
        <div className="absolute inset-0 hero-gradient" />
        <FloatingShapes variant="mixed" density="low" />

        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
            {/* Hero Content */}
            <div className="lg:col-span-8 min-h-[280px] bento-card-gold flex flex-col justify-center p-8 lg:p-10 rounded-2xl relative z-10">
              <span className="section-label">
                Our Services
              </span>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight mt-4 mb-6 text-white">
                The <span className="text-gold">Refinery</span> Processes
              </h1>
              <p className="text-lg text-muted leading-relaxed max-w-xl">
                From raw data to refined intelligence — comprehensive data solutions designed for African businesses.
              </p>
            </div>

            {/* Robot Mascot */}
            <div className="lg:col-span-4 min-h-[280px] bento-card-cyan hidden lg:flex items-center justify-center rounded-2xl">
              <DataRobot size="md" variant="cyan" />
            </div>
          </div>
        </Container>
      </section>

      {/* Services Bento Grid */}
      <section className="py-20">
        <Container>
          <div className="bento-grid">
            {services.map((service, index) => (
              <motion.div
                key={service.id}
                id={service.id}
                className={`${index < 2 ? "bento-half" : "bento-md"} ${
                  service.color === "cyan" ? "bento-card-cyan" : "bento-card-gold"
                } p-6 lg:p-8`}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <div className={`inline-flex items-center gap-2 px-3 py-1.5 rounded-full ${
                  service.color === "cyan"
                    ? "bg-cyan/10 border-cyan/20 text-cyan"
                    : "bg-gold/10 border-gold/20 text-gold"
                } border text-xs font-medium mb-4`}>
                  <service.icon className="h-3.5 w-3.5" />
                  {service.subtitle}
                </div>

                <h3 className="text-2xl font-bold mb-3">{service.title}</h3>
                <p className="text-muted leading-relaxed mb-5 text-sm">
                  {service.description}
                </p>

                <ul className="space-y-2 mb-6">
                  {service.features.slice(0, 4).map((feature) => (
                    <li key={feature} className="flex items-center gap-2">
                      <div className={`h-4 w-4 rounded-full ${
                        service.color === "cyan" ? "bg-cyan/10" : "bg-gold/10"
                      } grid place-items-center shrink-0`}>
                        <Check className={`h-2.5 w-2.5 ${
                          service.color === "cyan" ? "text-cyan" : "text-gold"
                        }`} />
                      </div>
                      <span className="text-xs text-white/70">{feature}</span>
                    </li>
                  ))}
                </ul>

                <TransitionLink
                  href="/contact"
                  className={`inline-flex items-center gap-2 text-sm font-medium ${
                    service.color === "cyan"
                      ? "text-cyan hover:text-cyan-light"
                      : "text-gold hover:text-gold-light"
                  } transition-colors`}
                >
                  Get Started
                  <ArrowUpRight className="h-4 w-4" />
                </TransitionLink>
              </motion.div>
            ))}

            {/* Analytics Chart Card */}
            <motion.div
              className="bento-md bento-card p-6 hidden md:block"
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
            >
              <h4 className="text-sm font-medium text-muted mb-2">Data-Driven Results</h4>
              <AnalyticsChart variant="mixed" />
            </motion.div>
          </div>
        </Container>
      </section>

      {/* Platforms Section */}
      <section className="py-20 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-gold/5 to-transparent" />
        <Container>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={stagger}
            className="text-center mb-12"
          >
            <motion.span variants={fadeUp} className="section-label">
              The Refinery Tools
            </motion.span>
            <motion.h2
              variants={fadeUp}
              className="text-3xl md:text-4xl font-bold mt-3"
            >
              Platforms We <span className="text-gold">Work With</span>
            </motion.h2>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={stagger}
            className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4"
          >
            {platforms.map((platform, index) => (
              <motion.div
                key={platform.name}
                variants={fadeUp}
                className={`${
                  index % 2 === 0 ? "bento-card-gold" : "bento-card-cyan"
                } rounded-xl p-4 text-center transition-all`}
              >
                <div className="font-semibold text-sm mb-1">{platform.name}</div>
                <div className="text-xs text-muted">{platform.category}</div>
              </motion.div>
            ))}
          </motion.div>
        </Container>
      </section>

      {/* Pricing Section - Bento */}
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
              Investment
            </motion.span>
            <motion.h2
              variants={fadeUp}
              className="text-3xl md:text-4xl font-bold mt-3"
            >
              Refinery <span className="text-gold">Packages</span>
            </motion.h2>
            <motion.p variants={fadeUp} className="text-muted mt-4 max-w-2xl mx-auto">
              Transparent pricing for businesses of all sizes.
            </motion.p>
          </motion.div>

          <div className="bento-grid">
            {pricingTiers.map((tier, index) => (
              <motion.div
                key={tier.name}
                className={`bento-sm ${
                  tier.popular ? "bento-card-cyan" : tier.color === "cyan" ? "bento-card-cyan" : "bento-card-gold"
                } rounded-2xl p-6 transition-all relative`}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                {tier.popular && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-1 rounded-full bg-cyan text-bg text-xs font-semibold">
                    Most Popular
                  </div>
                )}
                <div className="text-lg font-semibold mb-1">{tier.name}</div>
                <div className="flex items-baseline gap-1 mb-2">
                  <span className={`text-2xl font-bold font-display ${
                    tier.color === "cyan" ? "text-cyan" : "text-gold"
                  }`}>
                    {tier.price}
                  </span>
                  <span className="text-xs text-muted">/{tier.period}</span>
                </div>
                <p className="text-xs text-muted mb-4">{tier.description}</p>
                <ul className="space-y-2 mb-4">
                  {tier.features.slice(0, 4).map((feature) => (
                    <li key={feature} className="flex items-center gap-2 text-xs">
                      <Check className={`h-3 w-3 ${
                        tier.color === "cyan" ? "text-cyan" : "text-gold"
                      } shrink-0`} />
                      <span className="text-white/70">{feature}</span>
                    </li>
                  ))}
                </ul>
                <TransitionLink
                  href="/contact"
                  className={`block w-full text-center text-sm py-2 rounded-lg ${
                    tier.popular
                      ? "bg-cyan text-bg font-semibold hover:bg-cyan-light"
                      : tier.color === "cyan"
                      ? "border border-cyan/30 text-cyan hover:bg-cyan/10"
                      : "border border-gold/30 text-gold hover:bg-gold/10"
                  } transition-all`}
                >
                  Get Started
                </TransitionLink>
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
            All prices in South African Rand (ZAR). Custom quotes available.
          </motion.p>
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
              <Sparkles className="h-10 w-10 text-gold mx-auto mb-6" />
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Ready to <span className="text-gold">Start</span> Your Refinery?
              </h2>
              <p className="text-muted max-w-xl mx-auto mb-8">
                Let&apos;s discuss your data challenges and transform them into business opportunities.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <TransitionLink
                  href="/contact"
                  className="btn-gold inline-flex items-center gap-2"
                >
                  Get a Free Consultation
                  <ArrowRight className="h-5 w-5" />
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
