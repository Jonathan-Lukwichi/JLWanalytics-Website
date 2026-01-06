import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Our 5 Pillars of Data Excellence: Data Digitalization, Advanced Analytics & BI, AI & Machine Learning, Custom Dashboards, and Training Academy. Transform your business with JLWanalytics.",
  openGraph: {
    title: "Services | JLWanalytics",
    description:
      "Our 5 Pillars of Data Excellence: Digitalization, Analytics, AI/ML, Dashboards, and Training. Transform your raw data into refined intelligence.",
  },
};

export default function ServicesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
