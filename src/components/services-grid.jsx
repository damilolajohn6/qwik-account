import Image from "next/image";

const services = [
  {
    title: "Book Keeping",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi. Aliquam in hendrerit urna.",
    image: "/assets/ser1.jpg",
  },
  {
    title: "Payroll Management",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi. Aliquam in hendrerit urna.",
    image: "/assets/ser2.jpg",
  },
  {
    title: "Consulting",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi. Aliquam in hendrerit urna.",
    image: "/assets/ser3.jpg",
  },
  {
    title: "Book Keeping",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi. Aliquam in hendrerit urna.",
    image: "/assets/ser1.jpg",
  },
  {
    title: "Payroll Management",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi. Aliquam in hendrerit urna.",
    image: "/assets/ser2.jpg",
  },
  {
    title: "Tax Preparation",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi. Aliquam in hendrerit urna.",
    image: "/assets/ser4.jpg",
  },
];

const ServicesGrid = () => {
  return (
    <section className="bg-white container ">
      <div className="flex flex-col items-center py-4 gap-2">
        <h2 className="text-2xl md:text-3xl font-bold text-slate-800 mb-2">
          Our Services
        </h2>
        <p className="text-gray-600 mb-10">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </p>
      </div>
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {services.map((service, index) => (
          <div
            key={index}
            className="border border-gray-200 rounded-lg overflow-hidden shadow-sm hover:shadow-md transition"
          >
            <div className="relative w-full h-48">
              <Image
                src={service.image}
                alt={service.title}
                fill
                className="object-cover"
              />
            </div>
            <div className="p-4 text-center">
              <h3 className="text-lg font-semibold text-[#1C2434] mb-2">
                {service.title}
              </h3>
              <p className="text-sm text-[#475569] mb-4">
                {service.description}
              </p>
              <button className="bg-[#A4B8A6] text-white font-medium px-4 py-2 rounded hover:bg-[#94a797] transition">
                Book Now
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ServicesGrid;
