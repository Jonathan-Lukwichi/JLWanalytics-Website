import { Navbar, Footer } from "@/components/layout";
import {
  Hero,
  FeatureCards,
  About,
  WhyChooseUs,
  Metrics,
  Services,
  Process,
  Testimonials,
} from "@/components/sections";

export default function Page() {
  return (
    <>
      <Navbar />
      <Hero />
      <FeatureCards />
      <About />
      <WhyChooseUs />
      <Metrics />
      <Services />
      <Process />
      <Testimonials />
      <Footer />
    </>
  );
}
