import Stats from "@/app/components/Stats";
import Link from "next/link";

const About = () => {
  return (
    <section id="about" className="py-12 md:py-16 lg:py-20 xl:py-24 bg-blue-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 md:px-8 lg:px-12">
        <div className="flex flex-col md:flex-row md:items-center gap-8 md:gap-12 lg:gap-16">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <p className="text-sm md:text-base  lg:text-lg font-bold text-orange-700 ">
                About Us
              </p>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-orange-500 mb-4 lg:mb-6 ">
                We offer affordable funeral services for all in your care.
              </h2>
              <p className="text-base  md:text-lg xl:text-xl max-w-2xl lg:mb-4">
                We are a dedicated team of professionals committed to providing
                compassionate and personalized funeral services. Our mission is
                to support families during their time of loss, ensuring that
                every farewell is handled with dignity, respect, and care.
              </p>

              <Link
                href="#contact"
                className="
                    mt-4
                    inline-flex
                    items-center
                    justify-center
                    rounded-lg
                    bg-orange-500
                    px-4
                    min-h-11
                    font-semibold
                    text-white
                    transition-colors
                    duration-150
                    hover:bg-orange-600
                    focus-visible:outline-none
                    focus-visible:ring-2
                    focus-visible:ring-orange-500
                    focus-visible:ring-offset-2
                    sm:px-6 
                    lg:px-8 lg:text-lg
  "
              >
                Join Us
              </Link>
            </div>
            <Stats />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
