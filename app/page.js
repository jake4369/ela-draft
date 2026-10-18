import Hero from "./components/home/Hero";
import ServicesOverview from "./components/home/ServiceOverview";
import BeforeAfterShowcase from "./components/home/BeforeAfterShowcase";
import WhyChooseELA from "./components/home/WhyChooseELA";
import TrustStrip from "./components/home/TrustStrip";
import Testimonials from "./components/Testimonials";
import AreasWeCover from "./components/home/AreasWeCover";
import FAQs from "./components/home/FAQs";
import FinalCTA from "./components/home/FinalCTA";

export default function Home() {
  return (
    <main>
      <Hero />
      <ServicesOverview />
      <BeforeAfterShowcase />
      <WhyChooseELA />
      <TrustStrip />
      <Testimonials />
      <AreasWeCover />
      <FAQs />
      <FinalCTA />
    </main>
  );
}
