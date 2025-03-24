import Image from "next/image";
import { DollarSign } from "lucide-react";

const services = [
  {
    title: "Payroll Management",
    position: "top-[5%] left-1/2 -translate-x-1/2",
  },
  { title: "Tax Preparation", position: "left-[5%] top-1/2 -translate-y-1/2" },
  { title: "Consulting", position: "right-[5%] top-1/2 -translate-y-1/2" },
  { title: "Book Keeping", position: "bottom-[5%] left-1/2 -translate-x-1/2" },
];

const ServicesSection = () => {
  return (
    <section className="w-full bg-white py-16 px-4 flex justify-center items-center">
      <div className="max-w-4xl w-full text-center">
        {/* Header */}
        <h2 className="text-2xl md:text-3xl font-bold text-slate-800 mb-2">
          Our Services
        </h2>
        <p className="text-gray-600 mb-10">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </p>

        {/* Circular Layout */}
        <div className="relative w-[350px] h-[350px] md:w-[500px] md:h-[500px] mx-auto">
          {/* Center Image */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
            <Image
              src="/assets/elipse.jpg" 
              alt="Center Image"
              width={150}
              height={150}
              className="rounded-full object-cover"
            />
          </div>

          {/* Service Items */}
          {services.map((service, index) => (
            <div
              key={index}
              className={`absolute ${service.position} flex flex-col items-center`}
            >
              <DollarSign className="w-6 h-6 text-pink-400 mb-1" />
              <p className="text-green-600 font-semibold text-sm md:text-base">
                {service.title}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
