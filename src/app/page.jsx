import AboutUsSection from "@/components/about-section";
import HeroSection from "@/components/home-hero";
import ServicesSection from "@/components/service-section";
import Testimonials from "@/components/testimonial";
import WhyChooseUs from "@/components/why-choose-us";

export default function Home() {
  return (
    <div className="">
      <HeroSection />
      <ServicesSection />
      <AboutUsSection />
      <WhyChooseUs />
      <Testimonials />
    </div>
  );
}
