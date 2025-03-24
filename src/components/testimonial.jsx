import Image from "next/image";
import { Button } from "./ui/button";
import { Input } from "./ui/input";

const Testimonials = () => {
  return (
    <section className="bg-white py-12 px-4 md:px-8 lg:px-16">
      {/* Heading */}
      <h2 className="text-2xl md:text-3xl font-semibold text-center text-[#2C3E50] mb-4">
        Why Business Prefer Us
      </h2>
      <p className="text-center mb-10 font-medium text-[#2C3E50] text-sm md:text-base max-w-xl mx-auto">
        See why thousands of business owners and personal users trust
        BrooksAccount
      </p>

      {/* Testimonial Cards */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">
        {[1, 2].map((item) => (
          <div
            key={item}
            className="bg-[#FDFDFD] border border-[#E4E4E4] rounded-lg p-6 md:p-8"
          >
            <p className="text-[#1C2434] text-sm md:text-base leading-relaxed mb-6">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et
              massa mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien
              fringilla, mattis ligula consectetur, ultrices mauris. Maecenas
              vitae mattis tellus. Nullam quis imperdiet augue. Vestibulum
              auctor ornare leo, non suscipit magna interdum eu. Curabitur
              pellentesque nibh nibh, at maximus ante fermentum sit amet.
              Pellentesque commodo lacus at sodales.
            </p>

            {/* User Info */}
            <div className="flex items-center gap-4">
              <Image
                src="/assets/avatar.jpg"
                alt="Amanda Lee"
                width={64}
                height={64}
                className="rounded-full border-[3px] border-[#DE9FA3] object-cover"
              />
              <div>
                <p className="text-[#1C2434] font-semibold text-base md:text-lg leading-none">
                  Amanda Lee
                </p>
                <p className="text-[#64748B] text-sm mt-1">
                  E-Commerce Store Owner
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Signup Section */}
      <div className="bg-[#1C2434] mt-16 py-10 px-4 md:px-8 rounded-lg">
        <div className="max-w-2xl mx-auto text-center">
          <p className="text-sm md:text-base text-white mb-6">
            Sign-up to get our free e-book on{" "}
            <span className="font-semibold text-[#DE9FA3]">
              A Guide to Better Money Management
            </span>
            . Please add your email.
          </p>

          <form className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Input
              type="email"
              placeholder="Your email"
              className="w-full sm:w-auto flex-1 px-4 py-3 rounded bg-[#FDEDED] text-[#1C2434] placeholder:text-[#1C2434] focus:outline-none"
            />
            <Button
              type="submit"
              className="bg-[#DE9FA3] text-[#1C2434] px-6 py-3 rounded font-semibold hover:bg-[#e4a8ac] transition"
            >
              Submit
            </Button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
