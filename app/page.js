import Hero from "./components/home/Hero";
import ServiceStrip from "./components/home/ServiceStrip";
import BrickworkFeature from "./components/home/BrickworkFeature";
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

      <ServiceStrip />

      <BrickworkFeature />

      <ServicesOverview />

      <BeforeAfterShowcase />

      <div
        id="why-choose"
        className="scroll-mt-24 sm:scroll-mt-28 xl:scroll-mt-32"
      >
        <WhyChooseELA />
      </div>

      <TrustStrip />

      <div
        id="customer-reviews"
        className="scroll-mt-24 sm:scroll-mt-28 xl:scroll-mt-32"
      >
        <Testimonials />
      </div>

      <div
        id="home-areas"
        className="scroll-mt-24 sm:scroll-mt-28 xl:scroll-mt-32"
      >
        <AreasWeCover />
      </div>

      <div
        id="home-faqs"
        className="scroll-mt-24 sm:scroll-mt-28 xl:scroll-mt-32"
      >
        <FAQs />
      </div>

      <FinalCTA />
    </main>
  );
}
