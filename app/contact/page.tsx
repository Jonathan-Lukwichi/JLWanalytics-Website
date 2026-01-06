"use client";

import { Navbar, Footer, Container } from "@/components/layout";
import { ContactForm } from "@/components/forms";
import { motion } from "framer-motion";
import {
  Mail,
  Phone,
  MapPin,
  MessageSquare,
  Calendar,
  Globe,
  Clock,
  Users,
  Zap,
  HelpCircle,
} from "lucide-react";
import { DataRobot, FloatingShapes } from "@/components/illustrations";

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

const faqs = [
  {
    q: "How long does a typical project take?",
    a: "Project timelines vary based on complexity. A Starter package typically completes in 2-3 weeks, while Enterprise solutions may take 2-3 months for full implementation.",
    color: "gold",
  },
  {
    q: "Do you work with companies outside South Africa?",
    a: "Absolutely! We serve clients across Africa and internationally. Our remote delivery capabilities allow us to work with businesses anywhere in the world.",
    color: "cyan",
  },
  {
    q: "What if we don't have any data infrastructure yet?",
    a: "That's where we excel! Our Data Digitalization service takes you from paper-based operations to a fully structured digital data ecosystem.",
    color: "cyan",
  },
  {
    q: "Do you provide training for our team?",
    a: "Yes! Knowledge transfer is core to our approach. Every engagement includes training components through our JLWanalytics Academy program.",
    color: "gold",
  },
];

export default function ContactPage() {
  return (
    <>
      <Navbar />

      {/* Hero Section - Bento Grid */}
      <section className="relative pt-24 pb-16 overflow-hidden">
        <div className="absolute inset-0 hero-gradient" />
        <FloatingShapes variant="mixed" density="low" />

        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
            {/* Hero Content */}
            <div className="lg:col-span-8 min-h-[280px] bento-card-gold flex flex-col justify-center p-8 lg:p-10 rounded-2xl relative z-10">
              <span className="section-label">
                Contact Us
              </span>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight mt-4 mb-6 text-white">
                Let&apos;s <span className="text-gold">Refine</span> Your Data
              </h1>
              <p className="text-lg text-muted leading-relaxed max-w-xl">
                Ready to transform your raw data into refined business intelligence?
                Get in touch for a free consultation.
              </p>
            </div>

            {/* Robot Mascot */}
            <div className="lg:col-span-4 min-h-[280px] bento-card-cyan hidden lg:flex items-center justify-center rounded-2xl">
              <DataRobot size="md" variant="gold" />
            </div>

            {/* Quick Info Cards */}
            {[
              { icon: Clock, text: "24hr Response", color: "gold" },
              { icon: Users, text: "Free Consultation", color: "cyan" },
              { icon: Zap, text: "Quick Onboarding", color: "gold" },
            ].map((item) => (
              <div
                key={item.text}
                className={`lg:col-span-4 ${
                  item.color === "cyan" ? "bento-card-cyan" : "bento-card-gold"
                } p-6 flex flex-col justify-center items-center text-center rounded-2xl`}
              >
                <item.icon className={`h-6 w-6 mb-2 ${item.color === "cyan" ? "text-cyan" : "text-gold"}`} />
                <span className="text-sm font-medium">{item.text}</span>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Contact Form & Info - Bento Grid */}
      <section className="py-20">
        <Container>
          <div className="bento-grid">
            {/* Contact Form - Large Card */}
            <motion.div
              className="bento-lg bento-card-gold p-8 lg:p-10"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <ContactForm />
            </motion.div>

            {/* Contact Info Cards - Sidebar */}
            <div className="bento-md flex flex-col gap-6">
              {/* Contact Information Card */}
              <motion.div
                className="bento-card-cyan rounded-2xl p-6 flex-1"
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
              >
                <h3 className="text-lg font-bold mb-6">Contact Information</h3>

                <div className="space-y-5">
                  <a
                    href="mailto:info@jlwanalytics.com"
                    className="flex items-start gap-4 group"
                  >
                    <div className="grid h-12 w-12 place-items-center rounded-xl bg-cyan/10 border border-cyan/20 group-hover:border-cyan/40 transition-all">
                      <Mail className="h-5 w-5 text-cyan" />
                    </div>
                    <div>
                      <div className="font-semibold group-hover:text-cyan transition-colors">
                        Email Us
                      </div>
                      <div className="text-sm text-muted">info@jlwanalytics.com</div>
                    </div>
                  </a>

                  <a href="tel:+27847314600" className="flex items-start gap-4 group">
                    <div className="grid h-12 w-12 place-items-center rounded-xl bg-gold/10 border border-gold/20 group-hover:border-gold/40 transition-all">
                      <Phone className="h-5 w-5 text-gold" />
                    </div>
                    <div>
                      <div className="font-semibold group-hover:text-gold transition-colors">
                        Call Us
                      </div>
                      <div className="text-sm text-muted">+27 84 731 4600</div>
                    </div>
                  </a>

                  <div className="flex items-start gap-4">
                    <div className="grid h-12 w-12 place-items-center rounded-xl bg-cyan/10 border border-cyan/20">
                      <MapPin className="h-5 w-5 text-cyan" />
                    </div>
                    <div>
                      <div className="font-semibold">Location</div>
                      <div className="text-sm text-muted">Pretoria, South Africa</div>
                      <div className="text-xs text-muted mt-1">
                        Serving Africa & Remote Clients Worldwide
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* What to Expect Card */}
              <motion.div
                className="bento-card-gold rounded-2xl p-6"
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
              >
                <h3 className="text-lg font-bold mb-4">What to Expect</h3>
                <div className="space-y-4">
                  {[
                    {
                      icon: MessageSquare,
                      title: "Quick Response",
                      desc: "We reply within 24 hours",
                      color: "gold",
                    },
                    {
                      icon: Calendar,
                      title: "Free Consultation",
                      desc: "30-minute discovery call",
                      color: "cyan",
                    },
                    {
                      icon: Globe,
                      title: "Flexible Delivery",
                      desc: "Remote & on-site options",
                      color: "gold",
                    },
                  ].map((item) => (
                    <div key={item.title} className="flex items-start gap-3">
                      <div className={`h-8 w-8 rounded-lg ${
                        item.color === "cyan" ? "bg-cyan/10" : "bg-gold/10"
                      } grid place-items-center shrink-0`}>
                        <item.icon className={`h-4 w-4 ${
                          item.color === "cyan" ? "text-cyan" : "text-gold"
                        }`} />
                      </div>
                      <div>
                        <div className="text-sm font-medium">{item.title}</div>
                        <div className="text-xs text-muted">{item.desc}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>

              {/* Languages Card */}
              <motion.div
                className="bento-card rounded-2xl p-6"
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
              >
                <h3 className="text-lg font-bold mb-4">Languages We Speak</h3>
                <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-1.5 rounded-full bg-gold/10 border border-gold/20 text-gold text-sm font-medium">
                    English
                  </span>
                  <span className="px-3 py-1.5 rounded-full bg-cyan/10 border border-cyan/20 text-cyan text-sm font-medium">
                    French (Native)
                  </span>
                  <span className="px-3 py-1.5 rounded-full bg-navy-light/50 border border-gold/10 text-white/70 text-sm">
                    Swahili
                  </span>
                </div>
                <p className="text-xs text-muted mt-3">
                  Perfectly positioned to serve both Anglophone and Francophone Africa.
                </p>
              </motion.div>
            </div>
          </div>
        </Container>
      </section>

      {/* FAQ Section - Bento Grid */}
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
              FAQ
            </motion.span>
            <motion.h2
              variants={fadeUp}
              className="text-3xl md:text-4xl font-bold mt-3"
            >
              Common <span className="text-cyan">Questions</span>
            </motion.h2>
          </motion.div>

          <div className="bento-grid">
            {faqs.map((faq, index) => (
              <motion.div
                key={faq.q}
                className={`bento-half bento-short ${
                  faq.color === "cyan" ? "bento-card-cyan" : "bento-card-gold"
                } p-6`}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <div className={`h-8 w-8 rounded-lg ${
                  faq.color === "cyan" ? "bg-cyan/10" : "bg-gold/10"
                } grid place-items-center mb-3`}>
                  <HelpCircle className={`h-4 w-4 ${
                    faq.color === "cyan" ? "text-cyan" : "text-gold"
                  }`} />
                </div>
                <h4 className="font-bold mb-3 text-white">{faq.q}</h4>
                <p className="text-sm text-muted leading-relaxed">{faq.a}</p>
              </motion.div>
            ))}
          </div>
        </Container>
      </section>

      {/* Global Reach Section - Bento */}
      <section className="py-20">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
            <div className="lg:col-span-8 bento-card-gold rounded-2xl p-10 md:p-12 text-center relative overflow-hidden">
              <div className="absolute top-0 left-1/4 w-96 h-96 bg-gold/10 rounded-full blur-3xl" />
              <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-cyan/10 rounded-full blur-3xl" />
              <div className="relative z-10">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gold/10 border border-gold/20 mb-6">
                  <Globe className="h-8 w-8 text-gold" />
                </div>
                <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">
                  Serving <span className="text-gold">All of Africa</span>
                </h2>
                <p className="text-muted max-w-xl mx-auto mb-6">
                  Based in Pretoria, South Africa, we work with clients across the continent
                  and worldwide. Whether you&apos;re in Johannesburg, Nairobi, Lagos, or anywhere
                  else - we&apos;re ready to help refine your data.
                </p>
                <div className="flex flex-wrap justify-center gap-3">
                  {[
                    { loc: "South Africa", color: "gold" },
                    { loc: "DRC", color: "cyan" },
                    { loc: "Kenya", color: "gold" },
                    { loc: "Nigeria", color: "cyan" },
                    { loc: "Remote Worldwide", color: "gold" },
                  ].map((item) => (
                    <span
                      key={item.loc}
                      className={`px-4 py-2 rounded-full ${
                        item.color === "cyan"
                          ? "bg-cyan/10 border border-cyan/20 text-cyan"
                          : "bg-gold/10 border border-gold/20 text-gold"
                      } text-sm font-medium`}
                    >
                      {item.loc}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Robot Card */}
            <div className="lg:col-span-4 bento-card-cyan hidden lg:flex items-center justify-center p-6 rounded-2xl">
              <DataRobot size="md" variant="cyan" />
            </div>
          </div>
        </Container>
      </section>

      <Footer />
    </>
  );
}
