import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Meet Jonathan Lukwichi, founder of JLWanalytics. A Data Analyst & Business Intelligence Specialist with expertise in Yellowfin BI, Power BI, and advanced analytics. Serving Africa's data future.",
  openGraph: {
    title: "About Us | JLWanalytics",
    description:
      "Meet the team behind Africa's Premier Data Refinery. Data Analysts, BI Specialists, and AI Experts transforming businesses across the continent.",
  },
};

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
