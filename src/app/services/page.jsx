import AboutUsSection from '@/components/about-section';
import ServiceCTA from '@/components/service-cta';
import ServicesGrid from '@/components/services-grid';
import Testimonials from '@/components/testimonial';
import React from 'react'

const ServicePage = () => {
  return (
    <div>
      <section className="relative h-[300px] bg-[#F8E1E1] w-full overflow-hidden">
        {/* Centered Content */}
        <div className="relative z-10 flex h-full flex-col items-center text-[#2C3E50] justify-center text-center">
          <h1 className="text-4xl font-bold">Services</h1>
          <p className="mt-2 text-lg">Home / Services</p>
        </div>
      </section>
      <ServicesGrid />
      <AboutUsSection />
      <ServiceCTA />
      <Testimonials />
    </div>
  );
}

export default ServicePage