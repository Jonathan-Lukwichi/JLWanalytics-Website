"use client";

import { useState } from "react";
import { Navbar, Footer, Container } from "@/components/layout";
import { motion } from "framer-motion";
import {
  Mail,
  Phone,
  MapPin,
  Send,
  Fuel,
  CheckCircle2,
  Loader2,
  MessageSquare,
  Calendar,
  Globe,
  ChevronDown,
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

// Service options for the form
const serviceOptions = [
  { value: "data-digitalization", label: "Data Digitalization" },
  { value: "analytics", label: "Advanced Analytics & BI" },
  { value: "ai-ml", label: "AI & Machine Learning" },
  { value: "dashboards", label: "Custom Dashboards" },
  { value: "training", label: "Training Academy" },
  { value: "consultation", label: "Free Consultation" },
  { value: "other", label: "Other" },
];

// Budget ranges
const budgetOptions = [
  { value: "under-35k", label: "Under R 35,000" },
  { value: "35k-85k", label: "R 35,000 - R 85,000" },
  { value: "85k-180k", label: "R 85,000 - R 180,000" },
  { value: "180k-350k", label: "R 180,000 - R 350,000" },
  { value: "350k-plus", label: "R 350,000+" },
  { value: "not-sure", label: "Not sure yet" },
];

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
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    phone: "",
    service: "",
    budget: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError("");

    // Construct mailto link with form data
    const subject = encodeURIComponent(
      `[JLWanalytics] Service Request: ${
        serviceOptions.find((s) => s.value === formData.service)?.label || "General Inquiry"
      }`
    );

    const body = encodeURIComponent(
      `Name: ${formData.name}
Email: ${formData.email}
Company: ${formData.company || "Not specified"}
Phone: ${formData.phone || "Not specified"}
Service Requested: ${serviceOptions.find((s) => s.value === formData.service)?.label || "Not selected"}
Budget Range: ${budgetOptions.find((b) => b.value === formData.budget)?.label || "Not specified"}

Message:
${formData.message}

---
Sent from JLWanalytics website contact form`
    );

    // Open email client
    const mailtoLink = `mailto:info@jlwanalytics.com?subject=${subject}&body=${body}`;

    // Simulate a brief delay for UX
    await new Promise((resolve) => setTimeout(resolve, 800));

    window.location.href = mailtoLink;

    setIsSubmitting(false);
    setIsSubmitted(true);
  };

  return (
    <>
      <Navbar />

      {/* Hero Section - Bento Grid */}
      <section className="relative pt-24 pb-16 overflow-hidden">
        <div className="absolute inset-0 hero-gradient" />
        <FloatingShapes variant="mixed" density="low" />

        <Container>
          <div className="bento-grid">
            {/* Hero Content */}
            <motion.div
              className="bento-lg bento-medium bento-feature flex flex-col justify-center p-8 lg:p-10"
              initial="hidden"
              animate="visible"
              variants={stagger}
            >
              <motion.span variants={fadeUp} className="section-label">
                Contact Us
              </motion.span>
              <motion.h1
                variants={fadeUp}
                className="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight mt-4 mb-6"
              >
                Let&apos;s <span className="text-gold">Refine</span> Your Data
              </motion.h1>
              <motion.p variants={fadeUp} className="text-lg text-muted leading-relaxed max-w-xl">
                Ready to transform your raw data into refined business intelligence?
                Get in touch for a free consultation.
              </motion.p>
            </motion.div>

            {/* Robot Mascot */}
            <motion.div
              className="bento-md bento-medium bento-card-gold hidden lg:flex items-center justify-center"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.3 }}
            >
              <DataRobot size="md" variant="gold" />
            </motion.div>

            {/* Quick Info Cards */}
            {[
              { icon: Clock, text: "24hr Response", color: "gold" },
              { icon: Users, text: "Free Consultation", color: "cyan" },
              { icon: Zap, text: "Quick Onboarding", color: "gold" },
            ].map((item, index) => (
              <motion.div
                key={item.text}
                className={`bento-md bento-short ${
                  item.color === "cyan" ? "bento-card-cyan" : "bento-card-gold"
                } p-6 flex flex-col justify-center items-center text-center`}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 + index * 0.1 }}
              >
                <item.icon className={`h-6 w-6 mb-2 ${item.color === "cyan" ? "text-cyan" : "text-gold"}`} />
                <span className="text-sm font-medium">{item.text}</span>
              </motion.div>
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
              <div className="flex items-center gap-3 mb-2">
                <div className="h-10 w-10 rounded-xl bg-gold/10 border border-gold/20 grid place-items-center">
                  <Fuel className="h-5 w-5 text-gold" />
                </div>
                <h2 className="text-2xl font-bold">Start Your Refining Journey</h2>
              </div>
              <p className="text-muted text-sm mb-8">
                Fill out the form below and we&apos;ll get back to you within 24 hours.
              </p>

              {isSubmitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="text-center py-12"
                >
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gold/20 border border-gold/30 mb-6">
                    <CheckCircle2 className="h-8 w-8 text-gold" />
                  </div>
                  <h3 className="text-xl font-bold mb-2">Email Client Opened!</h3>
                  <p className="text-muted max-w-md mx-auto">
                    Your email client should have opened with your message. If it didn&apos;t, please email us
                    directly at{" "}
                    <a
                      href="mailto:info@jlwanalytics.com"
                      className="text-gold underline hover:text-gold-light transition-colors"
                    >
                      info@jlwanalytics.com
                    </a>
                  </p>
                  <button
                    onClick={() => setIsSubmitted(false)}
                    className="mt-6 text-sm text-gold underline hover:text-gold-light transition-colors"
                  >
                    Send another message
                  </button>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Name & Email Row */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium mb-2">
                        Full Name <span className="text-gold">*</span>
                      </label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        placeholder="John Doe"
                        className="input-gold w-full"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-2">
                        Email Address <span className="text-gold">*</span>
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        placeholder="john@company.com"
                        className="input-gold w-full"
                      />
                    </div>
                  </div>

                  {/* Company & Phone Row */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium mb-2">Company Name</label>
                      <input
                        type="text"
                        name="company"
                        value={formData.company}
                        onChange={handleChange}
                        placeholder="Your Company"
                        className="input-gold w-full"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-2">Phone Number</label>
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="+27 84 731 4600"
                        className="input-gold w-full"
                      />
                    </div>
                  </div>

                  {/* Service & Budget Row */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium mb-2">
                        Service Interested In <span className="text-gold">*</span>
                      </label>
                      <div className="relative">
                        <select
                          name="service"
                          value={formData.service}
                          onChange={handleChange}
                          required
                          className="select-gold w-full"
                        >
                          <option value="">Select a service</option>
                          {serviceOptions.map((option) => (
                            <option key={option.value} value={option.value}>
                              {option.label}
                            </option>
                          ))}
                        </select>
                        <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 h-4 w-4 text-muted pointer-events-none" />
                      </div>
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-2">Budget Range</label>
                      <div className="relative">
                        <select
                          name="budget"
                          value={formData.budget}
                          onChange={handleChange}
                          className="select-gold w-full"
                        >
                          <option value="">Select budget range</option>
                          {budgetOptions.map((option) => (
                            <option key={option.value} value={option.value}>
                              {option.label}
                            </option>
                          ))}
                        </select>
                        <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 h-4 w-4 text-muted pointer-events-none" />
                      </div>
                    </div>
                  </div>

                  {/* Message */}
                  <div>
                    <label className="block text-sm font-medium mb-2">
                      Your Message <span className="text-gold">*</span>
                    </label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={5}
                      placeholder="Tell us about your data challenges and what you hope to achieve..."
                      className="input-gold w-full resize-none"
                    />
                  </div>

                  {error && (
                    <div className="text-danger text-sm bg-danger/10 px-4 py-2 rounded-lg border border-danger/20">
                      {error}
                    </div>
                  )}

                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full btn-gold inline-flex items-center justify-center gap-3 disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? (
                      <>
                        <Loader2 className="h-5 w-5 animate-spin" />
                        Opening Email Client...
                      </>
                    ) : (
                      <>
                        <Send className="h-5 w-5" />
                        Send Message
                      </>
                    )}
                  </button>
                </form>
              )}
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
          <div className="bento-grid">
            <motion.div
              className="bento-lg bento-feature p-10 md:p-12 text-center relative overflow-hidden"
              initial={{ opacity: 0, scale: 0.98 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
            >
              <div className="absolute top-0 left-1/4 w-96 h-96 bg-gold/10 rounded-full blur-3xl" />
              <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-cyan/10 rounded-full blur-3xl" />
              <div className="relative z-10">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gold/10 border border-gold/20 mb-6">
                  <Globe className="h-8 w-8 text-gold" />
                </div>
                <h2 className="text-3xl md:text-4xl font-bold mb-4">
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
            </motion.div>

            {/* Robot Card */}
            <motion.div
              className="bento-md bento-card-cyan hidden lg:flex items-center justify-center p-6"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
            >
              <DataRobot size="md" variant="cyan" />
            </motion.div>
          </div>
        </Container>
      </section>

      <Footer />
    </>
  );
}
