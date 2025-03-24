import Image from "next/image";

const WhyChooseUs = () => {
  return (
    <section className="bg-pink-100 py-16 px-4">
        <div className="container">

      <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-8 items-center">
        {/* Left Content */}
        <div className="md:w-2/2 space-y-6">
          {[
            {
              title: "Personalized Service",
              desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi. Aliquam in hendrerit urna.",
            },
            {
              title: "Personalized Service",
              desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi. Aliquam in hendrerit urna.",
            },
            {
              title: "Trust and Transparency",
              desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi. Aliquam in hendrerit urna.",
            },
            {
              title: "Proactive approach",
              desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi. Aliquam in hendrerit urna.",
            },
          ].map((item, index) => (
            <div key={index} className="flex items-start gap-3">
              {/* Checkmark Box */}
              <div className="bg-slate-800 text-white p-1 rounded-sm">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M5 13l4 4L19 7"
                  />
                </svg>
              </div>
              {/* Text */}
              <div>
                <h4 className="text-lg font-bold text-slate-800">
                  {item.title}
                </h4>
                <p className="text-sm text-gray-700">{item.desc}</p>
              </div>
            </div>
          ))}

          {/* Button */}
          <button className="bg-green-400 text-white px-4 py-2 rounded hover:bg-green-500 transition">
            Learn More
          </button>
        </div>

        {/* Right Image */}
        <div className="md:w-1/3">
          <Image
            src="/assets/hero1.jpg"
            alt="Finance Tools"
            width={600}
            height={400}
            className="object-contain rounded-lg"
            priority
          />
        </div>
      </div>
        </div>
    </section>
  );
};

export default WhyChooseUs;
