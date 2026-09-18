import Image from "next/image";
import React from "react";
import img from "@/public/choose-us.webp";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const FuneralCover = () => {
  return (
    <section className="py-12 md:py-16 lg:py-20 xl:py-24 bg-orange-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 md:px-8 lg:px-12">
        <div className="grid md:grid-cols-2 gap-8 md:gap-12 lg:gap-14">
          <div>
            <p className="text-sm md:text-base lg:text-lg font-bold text-orange-700">
              Funeral Cover
            </p>
            <h2 className="mt-2 text-3xl md:text-4xl lg:text-5xl font-bold text-orange-500">
              Reliable, affordable Funeral Cover starting from only R180 p/m.
            </h2>

            <div className="mb-4 md:mb-6 lg:mb-8">
              <p className="mt-4 lg:mt-6 text-base md:text-lg lg:text-xl max-w-2xl">
                As one of South Africa’s most trusted funeral service providers,
                we have built an extensive network of over 36 branches
                throughout the region.
              </p>

              <p className="mt-4 lg:mt-6 text-base md:text-lg lg:text-xl max-w-2xl">
                Our reputation is built on a foundation of unwavering
                excellence, where we prioritise genuine care, utmost respect,
                and exceptional services.
              </p>
            </div>

            <Button
              size="sm"
              className="max-w-44 min-h-11 bg-orange-500 px-4 py-2 font-semibold text-white rounded-md cursor-pointer transition-colors  duration-300 hover:bg-orange-600 sm:w-52 sm:px-6 sm:py-3 lg:text-lg"
            >
              <Link href={"/#contact"}>Join Us</Link>
            </Button>
          </div>

          <div className="flex items-center justify-center">
            <Image
              src={img}
              alt="picture with a family"
              className="object-cover object-center w-full md:w-1/2 lg:w-3/4"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default FuneralCover;
