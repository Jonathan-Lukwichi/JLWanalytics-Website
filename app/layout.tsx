import "./compiled.css";
import { Inter, Space_Grotesk } from "next/font/google";
import { Metadata } from "next";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://jlwanalytics.com"),
  title: {
    default: "JLWanalytics | Africa's Premier Data Refinery",
    template: "%s | JLWanalytics",
  },
  description:
    "Data is the new petrol. We refine it. Transform raw data into actionable intelligence with JLWanalytics - Africa's leading data analytics, AI/ML, and business intelligence consultancy.",
  keywords: [
    "data analytics South Africa",
    "business intelligence Africa",
    "AI solutions Pretoria",
    "machine learning consulting",
    "data visualization",
    "Power BI dashboards",
    "data digitalization",
    "analytics training",
    "JLWanalytics",
  ],
  authors: [{ name: "Jonathan Lukwichi", url: "https://jlwanalytics.com" }],
  creator: "JLWanalytics (Pty) Ltd",
  publisher: "JLWanalytics",
  openGraph: {
    type: "website",
    locale: "en_ZA",
    url: "https://jlwanalytics.com",
    siteName: "JLWanalytics",
    title: "JLWanalytics | Africa's Premier Data Refinery",
    description:
      "Data is the new petrol. We refine it. Transform raw data into actionable intelligence with Africa's leading data analytics consultancy.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "JLWanalytics - Data Refinery",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "JLWanalytics | Africa's Premier Data Refinery",
    description:
      "Data is the new petrol. We refine it. Transform raw data into actionable intelligence.",
    images: ["/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon-16x16.png",
    apple: "/apple-touch-icon.png",
  },
  manifest: "/site.webmanifest",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} ${spaceGrotesk.variable}`}>
      <body className={`${inter.className} bg-bg-primary antialiased`}>
        {children}
      </body>
    </html>
  );
}
