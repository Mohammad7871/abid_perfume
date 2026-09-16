import Navbar from "./components/Navbar";
import { MotionConfig } from "framer-motion";
import Hero from "./components/Hero";
import SocialProof from "./components/SocialProof";
import Features from "./components/Features";
import ProductShowcase from "./components/ProductShowcase";
import Benefits from "./components/Benefits";
import Testimonials from "./components/Testimonials";
import FAQ from "./components/FAQ";
import CallToAction from "./components/CallToAction";
import Footer from "./components/Footer";

export default function App() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "ABID Fragrances",
    description:
      "Premium fragrances crafted for the modern man with refined ingredients and lasting performance.",
    email: "hello@abid.co",
    telephone: "+1-800-123-4567",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Dubai",
      addressCountry: "AE",
    },
    image: "/images/hero-perfume.jpg",
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "ABID Fragrance Collection",
      itemListElement: ["Noir Essence", "Azure Spirit", "Heritage Gold"].map(
        (name, position) => ({
          "@type": "ListItem",
          position: position + 1,
          item: {
            "@type": "Product",
            name,
            brand: "ABID Fragrances",
            category: "Men's fragrance",
          },
        }),
      ),
    },
  };

  return (
    <MotionConfig reducedMotion="user">
      <script type="application/ld+json">
        {JSON.stringify(structuredData)}
      </script>
      <div
        id="top"
        className="min-h-screen overflow-x-clip bg-noir-950 text-noir-50 font-body relative"
      >
        {/* Ambient background gradient */}
        <div className="ambient-surface fixed inset-0 bg-gradient-to-b from-noir-950 via-noir-900/80 to-noir-950 pointer-events-none z-0" />

        {/* Main content */}
        <div className="relative z-10">
          <Navbar />
          <main>
            <Hero />
            <SocialProof />
            <Features />
            <ProductShowcase />
            <Benefits />
            <Testimonials />
            <FAQ />
            <CallToAction />
          </main>
          <Footer />
        </div>
      </div>
    </MotionConfig>
  );
}
