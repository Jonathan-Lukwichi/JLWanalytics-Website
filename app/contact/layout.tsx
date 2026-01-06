import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Us",
  description:
    "Get in touch with JLWanalytics for a free consultation. Based in Pretoria, South Africa, serving clients across Africa and worldwide. Email: info@jlwanalytics.com | Phone: +27 84 731 4600",
  openGraph: {
    title: "Contact Us | JLWanalytics",
    description:
      "Ready to refine your data? Contact JLWanalytics for a free consultation. 24hr response time. Serving all of Africa and remote clients worldwide.",
  },
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
