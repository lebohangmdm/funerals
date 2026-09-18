import React from "react";
import { funeralPlans } from "@/lib/data";
import FuneralCoverCard from "./FuneralCoverCard";
import { Button } from "@/components/ui/button";
import { Download } from "lucide-react";
import Link from "next/link";

const FuneralCovers = () => {
  return (
    <section id="funeral-covers" className="py-12 md:py-16 lg:py-20 xl:py-24 ">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 md:px-8 lg:px-12">
        <p className="text-sm md:text-base lg:text-lg font-bold text-orange-700">
          Our Funeral Covers
        </p>
        <h3 className="text-xl lg:text-2xl font-semibold text-orange-500 mb-4 md:mb-12 lg:mb-16">
          Funeral Plans Designed Around Family Support
        </h3>
        <div className=" xl:mt-20 grid gap-6 md:grid-cols-2 lg:grid-cols-3 ">
          {funeralPlans.map((plan) => (
            <FuneralCoverCard key={plan.name} {...plan} />
          ))}
        </div>

        <div className="mt-8 flex flex-col md:flex-row items-center justify-center gap-4 sm:mt-10 sm:gap-4 lg:gap-6">
          <Link
            href="/funeral-plans"
            className="
            flex
            h-11
            w-62
            items-center
            justify-center
            rounded-md
            bg-orange-500
            px-4
            text-sm
            font-semibold
            text-white
            transition-colors
            duration-300
            hover:bg-orange-600
            sm:h-12
          
            sm:px-6
            sm:text-base
            lg:text-lg
          "
          >
            View All Packages
          </Link>

          <Link
            href="/brochure.pdf"
            className="
            flex
            h-11
            w-62
            items-center
            justify-center
            gap-2
            rounded-md
            border-2
            border-orange-500
            bg-transparent
            px-4
            text-sm
            font-semibold
            text-orange-500
            transition-colors
            duration-300
            hover:border-orange-600
            hover:bg-orange-600
            hover:text-white
            sm:h-12

            sm:px-6
            sm:text-base
            lg:text-lg
    "
          >
            <Download className="w-4 h-4 shrink-0" />
            <span>Download Brochure</span>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default FuneralCovers;
