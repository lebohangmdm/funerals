import { branches } from "@/lib/branches";
import { LucideTimer, MapPin, Phone, Pin } from "lucide-react";
import Image from "next/image";
import React from "react";

const Branch = () => {
  return (
    <section id="branch" className="py-12 md:py-16 lg:py-20 xl:py-24 ">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 md:px-8 lg:px-12">
        <div className="max-w-2xl">
          <p className="text-sm md:text-base lg:text-lg font-bold text-blue-700">
            Our Locations
          </p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-blue-500 mb-1 lg:mb-2">
            Find a branch
          </h2>
          <p className="text-base lg:text-lg text-slate-600 max-w-xl">
            Visit one of our branches for friendly, professional assistance and
            support when you need it most.
          </p>
        </div>

        <div>
          {/* <div className="flex flex-col gap-4"> */}
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 mt-8 md:mt-12 lg:mt-16">
            {branches.map((branch) => (
              <div
                key={branch.name}
                className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition-all duration-200 hover:-translate-y-1 hover:shadow-lg"
              >
                {/* Branch Image */}
                <div className="relative aspect-[16/10] overflow-hidden">
                  <Image
                    src={branch.image}
                    alt={`${branch.name} location`}
                    fill
                    className="object-cover transition-transform duration-300 hover:scale-105"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />

                  {/* Image Overlay */}
                  <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/60 to-transparent p-4">
                    <div className="flex items-center gap-2 text-sm font-medium text-white">
                      <MapPin className="h-4 w-4" />
                      <span>{branch.name.split(",")[0]}</span>
                    </div>
                  </div>
                </div>

                {/* Branch Details */}
                <div className="flex flex-col gap-3 p-5">
                  <h3 className="text-lg font-semibold text-slate-900">
                    {branch.name}
                  </h3>

                  <a
                    href={branch.mapUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-start gap-2 text-slate-600 transition-colors hover:text-blue-600"
                  >
                    <MapPin className="mt-1 h-4 w-4 shrink-0 text-blue-500" />
                    <span>{branch.address}</span>
                  </a>

                  <a
                    href={`tel:${branch.phone.replace(/\s/g, "")}`}
                    className="flex items-center gap-2 text-slate-600 transition-colors hover:text-blue-600"
                  >
                    <Phone className="h-4 w-4 shrink-0 text-blue-500" />
                    <span>{branch.phone}</span>
                  </a>

                  <a
                    href={branch.mapUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-2 inline-flex w-fit items-center rounded-full bg-blue-500 px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-blue-600"
                  >
                    Get Directions
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      {/* </div> */}
    </section>
  );
};

export default Branch;
