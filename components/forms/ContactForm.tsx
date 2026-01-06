"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { motion } from "framer-motion";
import { Send, Loader2, CheckCircle2, Fuel } from "lucide-react";
import { Input, Label, Textarea, Select, Button } from "@/components/ui";

// Zod schema for form validation
const contactSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email address"),
  company: z.string().optional(),
  phone: z.string().optional(),
  service: z.string().min(1, "Please select a service"),
  budget: z.string().optional(),
  message: z.string().min(10, "Message must be at least 10 characters"),
});

type ContactFormData = z.infer<typeof contactSchema>;

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

export function ContactForm() {
  const [isSubmitted, setIsSubmitted] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      name: "",
      email: "",
      company: "",
      phone: "",
      service: "",
      budget: "",
      message: "",
    },
  });

  const onSubmit = async (data: ContactFormData) => {
    // Construct mailto link with form data
    const subject = encodeURIComponent(
      `[JLWanalytics] Service Request: ${
        serviceOptions.find((s) => s.value === data.service)?.label || "General Inquiry"
      }`
    );

    const body = encodeURIComponent(
      `Name: ${data.name}
Email: ${data.email}
Company: ${data.company || "Not specified"}
Phone: ${data.phone || "Not specified"}
Service Requested: ${serviceOptions.find((s) => s.value === data.service)?.label || "Not selected"}
Budget Range: ${budgetOptions.find((b) => b.value === data.budget)?.label || "Not specified"}

Message:
${data.message}

---
Sent from JLWanalytics website contact form`
    );

    // Open email client
    const mailtoLink = `mailto:info@jlwanalytics.com?subject=${subject}&body=${body}`;

    // Simulate a brief delay for UX
    await new Promise((resolve) => setTimeout(resolve, 800));

    window.location.href = mailtoLink;
    setIsSubmitted(true);
  };

  if (isSubmitted) {
    return (
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
          onClick={() => {
            setIsSubmitted(false);
            reset();
          }}
          className="mt-6 text-sm text-gold underline hover:text-gold-light transition-colors"
        >
          Send another message
        </button>
      </motion.div>
    );
  }

  return (
    <>
      <div className="flex items-center gap-3 mb-2">
        <div className="h-10 w-10 rounded-xl bg-gold/10 border border-gold/20 grid place-items-center">
          <Fuel className="h-5 w-5 text-gold" />
        </div>
        <h2 className="text-2xl font-bold">Start Your Refining Journey</h2>
      </div>
      <p className="text-muted text-sm mb-8">
        Fill out the form below and we&apos;ll get back to you within 24 hours.
      </p>

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
        {/* Name & Email Row */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-2">
            <Label htmlFor="name">
              Full Name <span className="text-gold">*</span>
            </Label>
            <Input
              id="name"
              placeholder="John Doe"
              {...register("name")}
              className={errors.name ? "border-danger" : ""}
            />
            {errors.name && (
              <p className="text-danger text-xs mt-1">{errors.name.message}</p>
            )}
          </div>
          <div className="space-y-2">
            <Label htmlFor="email">
              Email Address <span className="text-gold">*</span>
            </Label>
            <Input
              id="email"
              type="email"
              placeholder="john@company.com"
              {...register("email")}
              className={errors.email ? "border-danger" : ""}
            />
            {errors.email && (
              <p className="text-danger text-xs mt-1">{errors.email.message}</p>
            )}
          </div>
        </div>

        {/* Company & Phone Row */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-2">
            <Label htmlFor="company">Company Name</Label>
            <Input
              id="company"
              placeholder="Your Company"
              {...register("company")}
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="phone">Phone Number</Label>
            <Input
              id="phone"
              type="tel"
              placeholder="+27 84 731 4600"
              {...register("phone")}
            />
          </div>
        </div>

        {/* Service & Budget Row */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-2">
            <Label htmlFor="service">
              Service Interested In <span className="text-gold">*</span>
            </Label>
            <Select
              id="service"
              {...register("service")}
              className={errors.service ? "border-danger" : ""}
            >
              <option value="">Select a service</option>
              {serviceOptions.map((option) => (
                <option key={option.value} value={option.value}>
                  {option.label}
                </option>
              ))}
            </Select>
            {errors.service && (
              <p className="text-danger text-xs mt-1">{errors.service.message}</p>
            )}
          </div>
          <div className="space-y-2">
            <Label htmlFor="budget">Budget Range</Label>
            <Select id="budget" {...register("budget")}>
              <option value="">Select budget range</option>
              {budgetOptions.map((option) => (
                <option key={option.value} value={option.value}>
                  {option.label}
                </option>
              ))}
            </Select>
          </div>
        </div>

        {/* Message */}
        <div className="space-y-2">
          <Label htmlFor="message">
            Your Message <span className="text-gold">*</span>
          </Label>
          <Textarea
            id="message"
            rows={5}
            placeholder="Tell us about your data challenges and what you hope to achieve..."
            {...register("message")}
            className={errors.message ? "border-danger" : ""}
          />
          {errors.message && (
            <p className="text-danger text-xs mt-1">{errors.message.message}</p>
          )}
        </div>

        {/* Submit Button */}
        <Button
          type="submit"
          disabled={isSubmitting}
          className="w-full"
          size="lg"
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
        </Button>
      </form>
    </>
  );
}
