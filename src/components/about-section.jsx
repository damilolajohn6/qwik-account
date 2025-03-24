const AboutUsSection = () => {
  return (
    <section className="bg-gray-50 py-16 px-4">
      <div className="max-w-7xl mx-auto container">
        <h2 className="text-2xl md:text-3xl font-bold text-slate-800 text-center mb-12">
          About us
        </h2>

        <div className="flex flex-col md:flex-row gap-8 items-start justify-between">
          {/* Left Text Column */}
          <div className="md:w-1/2 space-y-6">
            <p className="text-gray-800 text-lg">
              Brookadcont helps client in auditing and managing of their account
            </p>
            <p className="text-gray-700">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et
              massa mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien
              fringilla, mattis ligula consectetur, ultrices mauris. Maecenas
              vitae mattis tellus.
            </p>
            <p className="text-gray-700">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et
              massa mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien
              fringilla, mattis ligula consectetur, ultrices mauris. Maecenas
              vitae mattis tellus.
            </p>
            <button className="bg-[#8AB399] text-white px-4 py-2 rounded hover:bg-green-500 transition">
              Learn More
            </button>
          </div>

          {/* Right Cards Column */}
          <div className="md:w-1/2 flex gap-8 items-center justify-center">
            {/* Card 1 - Text Box */}
            <div className="bg-[#8AB399] text-white p-6 rounded w-[250px] flex-shrink-0">
              <h3 className="text-lg font-bold mb-2">Explore our Believe</h3>
              <p className="text-sm leading-relaxed">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et
                massa mi. Aliquam in hendrerit urna. Pellentesque sit amet
                sapien fringilla, mattis ligula consectetur, ultrices mauris.
                Maecenas vitae mattis tellus. Nullam quis imperdiet augue.
              </p>
            </div>

            {/* Vertical Text Cards */}
            <div className="flex md:flex-row gap-8">
              <div className="bg-[#8AB399] text-white w-12 md:w-20 h-80 md:h-80 rounded-full flex items-center justify-center">
                <p className="transform rotate-90 text-sm font-medium text-center">
                  Find out why BrookAdcocount
                </p>
              </div>
              <div className="bg-[#8AB399] text-white w-12 md:w-20 h-80 md:h-80 rounded-full flex items-center justify-center">
                <p className="transform rotate-90 text-sm font-medium text-center">
                  Our Strategies are The Best
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUsSection;
