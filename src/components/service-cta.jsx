import Image from "next/image";
import { Phone } from "lucide-react";
import { Button } from "./ui/button";

const ServiceCTA = () => {
  return (
    <section className="bg-[#FCE5E3] py-12 px-4 md:px-8 lg:px-16">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-8">
        {/* Left Side - Image */}
        <div className="w-full lg:w-1/2 relative h-[400px] md:h-[500px]">
          <Image
            src="/assets/hero1.jpg" 
            alt="Accounting Help"
            fill
            className="object-cover rounded-lg"
          />
        </div>

        {/* Right Side - Text */}
        <div className="w-full lg:w-1/2 text-center lg:text-left">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#1C2434] mb-6 leading-snug">
            Having a Problem With Accounting?
            <br />
            We’ll Fix It Today?
          </h2>
          <p className="text-[#475569] text-base md:text-lg mb-6 max-w-xl">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa
            mi. Aliquam in hendrerit urna.
          </p>

          {/* Emergency Contact */}
          <div className="flex flex-col sm:flex-row items-center  sm:items-start gap- md:gap-10">
            <div className="flex items-center gap-2">
              <Phone className="text-[#1C2434]" />
              <div>
                <span className="text-sm text-[#475569]">Emergency</span>
                <p className="text-xl font-bold text-[#1C2434]">+23441100978</p>
              </div>
            </div>

            {/* Book Now Button */}
            <Button className="bg-[#A4B8A6] text-white font-medium px-4 py-2 rounded hover:bg-[#94a797] transition">
              Book Now
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServiceCTA;
