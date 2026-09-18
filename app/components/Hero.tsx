import Image from "next/image";
import React from "react";
import HeroImage from "@/public/hero-2.png";
import Link from "next/link";

const Hero = () => {
  return (
    <section
      id="/"
      className="min-h-[calc(100dvh-4rem)] py-12 md:py-16 lg:py-20 xl:py-24"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6 md:px-8 lg:px-12">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Content */}
          <div>
            <h1 className="mb-4 text-4xl font-bold text-orange-500 md:text-5xl lg:mb-6 lg:text-6xl">
              Supporting Your Family, Always
            </h1>

            <p className="mb-6 max-w-2xl text-base md:text-lg lg:mb-8 lg:text-xl">
              We understand that saying goodbye to a loved one is never easy.
              Our compassionate and professional funeral services are designed
              to support you and your family through every step, providing
              guidance, dignity, and care when you need it most.
            </p>

            <div className="flex items-center gap-4 sm:gap-6">
              <Link
                href="/funeral-plans"
                className="min-h-11 rounded-lg bg-orange-500 px-4 py-2 font-semibold text-white transition-all duration-150 hover:bg-orange-600 sm:px-6 lg:min-h-12 lg:px-8 lg:text-lg"
              >
                View Plans
              </Link>

              <Link
                href="#funeral-covers"
                className="min-h-11 rounded-lg bg-gray-200 px-4 py-2 font-semibold text-gray-800 transition-all duration-150 hover:bg-gray-300 sm:px-6 lg:min-h-12 lg:px-8 lg:text-lg"
              >
                Get Cover
              </Link>
            </div>
          </div>

          {/* Image */}
          <div className="flex w-full justify-center lg:justify-end">
            <Image
              src={HeroImage}
              alt="Family together"
              priority
              className="
                h-auto
                w-[85%]
                max-w-sm
                object-contain
                sm:w-[75%]
                md:max-w-md
                lg:w-full
                lg:max-w-lg
                xl:max-w-xl
              "
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
