import CallToAction from "@/components/CallToAction";
import ComparisonSection from "@/components/Comparison";
import Features from "@/components/Features";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import Pricing from "@/components/Pricing";
export default function Home() {
  return (
    <div className="min-h-screen bg-[#EDE8E4] text-black">
      <Navbar />
      <Hero />
      <ComparisonSection />
      <Features />
      <Pricing />
      <CallToAction />
      <Footer />
    </div>
  );
}
