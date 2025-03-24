import Image from "next/image";
import { PhoneCall } from "lucide-react";
import Link from "next/link";

const HeroSection = () => {
  return (
    <section className="w-full bg-pink-100 py-16 px-6">
      <div className="max-w-6xl mx-auto flex flex-col-reverse md:flex-row items-center gap-10">
        {/* Text Content */}
        <div className="w-full md:w-2/3  p-6 md:p-10">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4 leading-tight">
            Your Trusted Partner for Personal & Business Finances
            <br />
            <span className="block">
              guidance built on lasting relationships
            </span>
          </h1>
          <p className="text-gray-700 mb-6">
            Offering tailored financial solutions to help you achieve your
            goals.
          </p>
          <div className="flex flex-col sm:flex-row items-center gap-4">
            <Link
              href="/contact"
              className="bg-green-500 text-white px-6 py-2 rounded-md hover:bg-green-600 transition"
            >
              Get Started
            </Link>
            <div className="flex items-center text-gray-800 font-medium">
              <PhoneCall className="w-5 h-5 mr-2" />
              +5600987220
            </div>
          </div>
        </div>

        {/* Image Content */}
        <div className="w-full md:w-1/3 flex justify-center">
          <div className="relative w-[300px] h-[240px] md:w-[500px] md:h-[420px] transition-transform hover:scale-105">
            <Image
              src="/assets/hero.png"
              alt="Finance Tools"
              layout="fill"
              className="object-contain rounded-lg"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
