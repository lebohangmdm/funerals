"use client";

import Image from "next/image";
import Link from "next/link";
import { Check, Download } from "lucide-react";

import { Button } from "@/components/ui/button";

type Premium = {
  age: string;
  individual: string;
  family: string;
};

type Plan = {
  id: string;
  name: string;
  cover: string;
  features: string[];
  preFuneralFund: string;
  casketOffering: string[];
  premiums: Premium[];
  image?: string;
};
export default function FuneralPlan({
  cover: { plan },
}: {
  cover: { plan: Plan };
}) {
  return (
    <section className="w-full bg-white py-12 sm:py-16 lg:py-20">
      <div className="mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-start gap-10 pt-8 lg:grid-cols-[minmax(0,1fr)_420px] lg:gap-12 lg:pt-12">
          {/* Main content */}
          <main className="min-w-0">
            {/* Plan heading */}
            <header className="mb-8">
              <p className="mb-2 text-xl font-medium text-orange-600 sm:text-2xl">
                {plan.name}
              </p>

              <h1 className="text-4xl font-semibold tracking-tight text-orange-500 sm:text-5xl">
                {plan.cover}
              </h1>
            </header>

            <div className="grid gap-10 md:grid-cols-2">
              {/* Features */}
              <section aria-labelledby="features-heading">
                <h2 id="features-heading" className="sr-only">
                  Plan features
                </h2>

                <ul className="space-y-5">
                  {plan.features.map((feature) => (
                    <li
                      key={feature}
                      className="flex items-start gap-4 text-base leading-7 text-gray-800 sm:text-lg"
                    >
                      <Check
                        aria-hidden="true"
                        className="mt-1 h-5 w-5 shrink-0 text-orange-600"
                        strokeWidth={2}
                      />

                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </section>

              {/* Additional information */}
              <section className="space-y-8">
                {/* Pre-funeral fund */}
                <div>
                  <h2 className="mb-2 text-lg font-bold text-gray-900">
                    Pre-funeral Fund
                  </h2>

                  <p className="text-base leading-7 text-gray-700 sm:text-lg">
                    {plan.preFuneralFund}
                  </p>
                </div>

                {/* Casket offering */}
                <div>
                  <h2 className="mb-2 text-lg font-bold text-gray-900">
                    Casket Offering
                  </h2>

                  <ul className="space-y-2 text-base leading-7 text-gray-700 sm:text-lg">
                    {plan.casketOffering.map((item) => (
                      <li key={item}>– {item}</li>
                    ))}
                  </ul>
                </div>

                {/* Casket image */}
                <div className="relative hidden md:h-72 mx-auto w-full md:block">
                  <Image
                    src={plan.image || "/images/casket-1.webp"}
                    alt="Casket included with the funeral plan"
                    fill
                    sizes="(min-width: 768px) 400px"
                    className="object-contain object-center"
                  />
                </div>
              </section>
            </div>
          </main>
          {/* Premium card */}

          <aside
            aria-labelledby="premium-heading"
            className="overflow-hidden rounded-[2rem] bg-orange-600 p-7 text-white shadow-sm sm:p-9 lg:sticky lg:top-24"
          >
            <div className="flex flex-col">
              {/* Card heading */}
              <div>
                <h2
                  id="premium-heading"
                  className="text-4xl font-medium tracking-tight sm:text-5xl"
                >
                  Premiums
                </h2>

                <p className="mt-5 max-w-xs text-base leading-7 text-white/90 sm:text-lg">
                  Always be prepared with affordable funeral plans.
                </p>
              </div>

              {/* Premium table */}
              <div className="mt-12 w-full">
                <table className="w-full border-collapse table-fixed">
                  <caption className="sr-only">
                    {plan.name} premium rates by age and membership type
                  </caption>

                  <thead>
                    <tr className="border-b border-white/20 text-left text-sm font-bold sm:text-base">
                      <th scope="col" className="pb-5 pr-3">
                        Age
                      </th>

                      <th scope="col" className="pb-5 pr-3">
                        Individual
                      </th>

                      <th scope="col" className="pb-5">
                        Family
                      </th>
                    </tr>
                  </thead>

                  <tbody>
                    {plan.premiums.map((premium) => (
                      <tr
                        key={`${premium.age}-${premium.individual}-${premium.family}`}
                        className="border-b border-white/10 align-top last:border-b-0"
                      >
                        <td className="py-4 pr-3 text-sm leading-7 text-white/95 sm:text-base">
                          {premium.age}
                        </td>

                        <td className="py-4 pr-3 text-sm leading-7 text-white/95 sm:text-base">
                          {premium.individual}
                        </td>

                        <td className="py-4 text-sm leading-7 text-white/95 sm:text-base">
                          {premium.family}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              {/* Brochure button */}
              <Link
                href={`/brochures/${plan.id}.pdf`}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`Download ${plan.name} brochure`}
                className="
        group
        mt-8
        inline-flex
        h-12
        w-full
        items-center
        justify-center
        gap-2
        rounded-full
        bg-white
        px-6
        text-base
        font-medium
        text-orange-700
        transition-colors
        duration-300
        hover:bg-orange-700
        hover:text-white
        focus-visible:outline-none
        focus-visible:ring-2
        focus-visible:ring-white
        focus-visible:ring-offset-2
        focus-visible:ring-offset-orange-600
      "
              >
                <Download
                  aria-hidden="true"
                  className="size-4 shrink-0 text-orange-600 transition-colors duration-300 group-hover:text-white"
                />

                <span>Download Brochure</span>
              </Link>
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
}
