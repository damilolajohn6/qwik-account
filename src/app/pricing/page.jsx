import FAQGrid from '@/components/faq-grid';
import PricingTable from '@/components/pricing-table';
import { Button } from '@/components/ui/button';
import React from 'react'

const PricingPage = () => {
  return (
    <div>
      <section className="relative h-[300px] bg-[#F8E1E1] w-full overflow-hidden">
        <div className="relative z-10 flex h-full flex-col items-center text-[#2C3E50] justify-center text-center">
          <h1 className="text-4xl font-bold">
            We have Pricing that Scales with you !
          </h1>
        </div>
      </section>
      {/* <div className="relative container bg-[#ffffff] w-full overflow-hidden">
        <div className="relative z-10 flex h-full items-center text-[#2C3E50] justify-center text-center">
          <h1 className="text-1xl font-bold">We Have Flexible Plan</h1>
          <div className="flex"></div>
        </div>
      </div> */}
      <PricingTable />
      <FAQGrid />
      <div className="relative h-[100px] bg-[#ffffff] w-full overflow-hidden">
        <div className="relative z-10 flex h-full items-center text-[#2C3E50] justify-center text-center">
          <h1 className="text-1xl font-bold">
            Still Have Unanswereded Questions?
          </h1>
          <Button className="bg-transparent text-[#2C3E50] font-bold hover:bg-[#2C3E50] hover:text-white">
            Get in touch
          </Button>
        </div>
      </div>
    </div>
  );
}

export default PricingPage