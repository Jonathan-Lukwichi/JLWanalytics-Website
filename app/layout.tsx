import "./globals.css";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "JLWanalytics - Data-Driven Solutions",
  description:
    "Transform your business with cutting-edge analytics, web development, and AI solutions. From dashboards to predictive models, we bring your data to life.",
  keywords: [
    "data analytics",
    "web development",
    "AI solutions",
    "machine learning",
    "business intelligence",
    "custom software",
  ],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-vignette antialiased`}>
        {children}
      </body>
    </html>
  );
}
