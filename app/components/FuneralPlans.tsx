"use client";

import Image from "next/image";
import { Check, Download } from "lucide-react";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { cn } from "@/lib/utils";

import { Button } from "@/components/ui/button";

type Plan = {
  id: string;
  name: string;
  cover: string;
  features: string[];
  preFuneralFund: string;
  casketOffering: string[];
  premiums: {
    age: string;
    individual: string;
    family: string;
  }[];
  image?: string;
};

const plans: Plan[] = [
  {
    id: "executive",
    name: "Executive Plan",
    cover: "R18,000 Cover",

    features: [
      "Removal and storage (within a radius of 100km).",
      "Registration of death.",
      "Society Casket (for Main member and spouse).",
      "Hearse and two (2) Family cars.",
      "Cemetery preparations.",
      "Church Preparations.",
      "Church truck.",
      "Night Vigil Screen.",
      "Coffin spray.",
      "Catering team service & catering equipment (food warmer excluded).",
      "Grave Fee Included.",
      "Tent, 60 chairs, 6 tables and an easy loo toilet.",
    ],

    preFuneralFund:
      "Money paid to the policy holder within 48 hours after a claim has been submitted. Grave Fee is included.",

    casketOffering: [
      "14–21 years @ 3 Tier Coffin",
      "6–13 years @ Flat Lid Coffin",
      "0–5 years @ Baby Coffin",
    ],

    premiums: [
      {
        age: "18–50",
        individual: "R180",
        family: "R230",
      },
      {
        age: "51–60",
        individual: "R220",
        family: "R245",
      },
      {
        age: "61–65",
        individual: "R235",
        family: "R280",
      },
      {
        age: "18–65",
        individual: "Up to 4 EXT. Family",
        family: "R200",
      },
    ],
    image: "/caskets/casket-1.webp",
  },

  {
    id: "classic",
    name: "Classic Plan",
    cover: "R15,000 Cover",

    features: [
      "Removal and storage within 100km.",
      "Registration of death.",
      "Standard Society Casket.",
      "Hearse and one family car.",
      "Cemetery preparations.",
      "Church preparations.",
      "Night Vigil Screen.",
      "Coffin spray.",
    ],

    preFuneralFund:
      "Money paid to the policy holder within 48 hours after a claim has been submitted.",

    casketOffering: [
      "14–21 years @ 3 Tier Coffin",
      "6–13 years @ Flat Lid Coffin",
      "0–5 years @ Baby Coffin",
    ],

    premiums: [
      {
        age: "18–50",
        individual: "R150",
        family: "R200",
      },
      {
        age: "51–60",
        individual: "R190",
        family: "R220",
      },
      {
        age: "61–65",
        individual: "R210",
        family: "R250",
      },
    ],
    image: "/caskets/casket-2.webp",
  },

  {
    id: "elegance",
    name: "Elegance Plan",
    cover: "R25,000 Cover",

    features: [
      "Removal and storage within 150km.",
      "Registration of death.",
      "Premium Society Casket.",
      "Hearse and two family cars.",
      "Cemetery preparations.",
      "Church preparations.",
      "Church truck.",
      "Night Vigil Screen.",
      "Coffin spray.",
      "Catering equipment.",
    ],

    preFuneralFund:
      "Money paid to the policy holder within 48 hours after a claim has been submitted.",

    casketOffering: [
      "14–21 years @ Premium Casket",
      "6–13 years @ Flat Lid Casket",
      "0–5 years @ Baby Casket",
    ],

    premiums: [
      {
        age: "18–50",
        individual: "R220",
        family: "R280",
      },
      {
        age: "51–60",
        individual: "R260",
        family: "R310",
      },
      {
        age: "61–65",
        individual: "R290",
        family: "R350",
      },
    ],
  },

  {
    id: "exclusive",
    name: "Exclusive Plan 2",
    cover: "R35,000 Cover",

    features: [
      "Removal and storage within 200km.",
      "Registration of death.",
      "Exclusive Society Casket.",
      "Hearse and two family cars.",
      "Cemetery preparations.",
      "Church preparations.",
      "Church truck.",
      "Night Vigil Screen.",
      "Catering team service.",
      "Tent, chairs and tables.",
      "Grave Fee Included.",
    ],

    preFuneralFund:
      "Money paid to the policy holder within 48 hours after a claim has been submitted.",

    casketOffering: [
      "14–21 years @ Exclusive Casket",
      "6–13 years @ Premium Casket",
      "0–5 years @ Baby Casket",
    ],

    premiums: [
      {
        age: "18–50",
        individual: "R280",
        family: "R350",
      },
      {
        age: "51–60",
        individual: "R330",
        family: "R390",
      },
      {
        age: "61–65",
        individual: "R370",
        family: "R430",
      },
    ],
  },

  {
    id: "senior-1",
    name: "Senior Citizen Plan 1",
    cover: "R15,000 Cover",

    features: [
      "Removal and storage.",
      "Registration of death.",
      "Society Casket.",
      "Hearse service.",
      "Cemetery preparations.",
      "Church preparations.",
      "Night Vigil Screen.",
      "Coffin spray.",
    ],

    preFuneralFund:
      "Pre-funeral assistance is available after a valid claim has been submitted.",

    casketOffering: [
      "14–21 years @ 3 Tier Coffin",
      "6–13 years @ Flat Lid Coffin",
      "0–5 years @ Baby Coffin",
    ],

    premiums: [
      {
        age: "60–65",
        individual: "R200",
        family: "R250",
      },
      {
        age: "66–70",
        individual: "R230",
        family: "R280",
      },
    ],
  },

  {
    id: "senior-2",
    name: "Senior Citizen Plan 2",
    cover: "R20,000 Cover",

    features: [
      "Removal and storage.",
      "Registration of death.",
      "Premium Society Casket.",
      "Hearse service.",
      "Cemetery preparations.",
      "Church preparations.",
      "Night Vigil Screen.",
      "Coffin spray.",
      "Catering equipment.",
    ],

    preFuneralFund:
      "Pre-funeral assistance is available after a valid claim has been submitted.",

    casketOffering: [
      "14–21 years @ Premium Casket",
      "6–13 years @ Flat Lid Casket",
      "0–5 years @ Baby Casket",
    ],

    premiums: [
      {
        age: "60–65",
        individual: "R240",
        family: "R300",
      },
      {
        age: "66–70",
        individual: "R280",
        family: "R340",
      },
    ],
  },

  {
    id: "masakhane",
    name: "Masakhane",
    cover: "R10,000 Cover",

    features: [
      "Removal and storage.",
      "Registration of death.",
      "Standard Casket.",
      "Hearse service.",
      "Cemetery preparations.",
      "Church preparations.",
      "Night Vigil Screen.",
    ],

    preFuneralFund:
      "Pre-funeral assistance is available after a valid claim has been submitted.",

    casketOffering: [
      "14–21 years @ Standard Coffin",
      "6–13 years @ Flat Lid Coffin",
      "0–5 years @ Baby Coffin",
    ],

    premiums: [
      {
        age: "18–50",
        individual: "R120",
        family: "R160",
      },
      {
        age: "51–60",
        individual: "R150",
        family: "R190",
      },
    ],
  },
];

export default function FuneralPlans() {
  return (
    <section className="w-full bg-white py-12 sm:py-16 lg:py-20">
      <div className="mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8">
        <Tabs defaultValue={plans[0].id} className="w-full overflow-y-hidden">
          {/* Plan navigation */}
          <div className="scrollbar-hide w-full overflow-x-auto overflow-y-hidden">
            <TabsList className="h-auto min-w-max justify-start gap-2 rounded-none bg-transparent p-0">
              {plans.map((plan) => (
                <TabsTrigger
                  key={plan.id}
                  value={plan.id}
                  className={`
          rounded-none border-none bg-transparent px-4 py-3 text-sm font-medium whitespace-nowrap text-gray-700 shadow-none transition-colors
          hover:text-blue-600
          focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2
          data-[state=active]:bg-transparent data-[state=active]:text-blue-600 data-[state=active]:shadow-none
          sm:px-6 sm:text-base
        `}
                >
                  {plan.name}
                </TabsTrigger>
              ))}
            </TabsList>
          </div>
          {/* Plan content */}
          {plans.map((plan) => (
            <TabsContent
              key={plan.id}
              value={plan.id}
              className="mt-0 focus-visible:outline-none"
            >
              <div className="grid items-start gap-8 pt-10 lg:grid-cols-[1fr_420px] lg:gap-12 lg:pt-16">
                {/* Left content */}
                <div className="min-w-0">
                  <div className="mb-8">
                    <p className="mb-2 text-xl font-medium text-blue-600 sm:text-2xl">
                      {plan.name}
                    </p>

                    <h2 className="text-4xl font-semibold tracking-tight text-blue-500 sm:text-5xl">
                      {plan.cover}
                    </h2>
                  </div>

                  <div className="grid gap-8 md:grid-cols-2">
                    {/* Features */}
                    <div>
                      <ul className="space-y-5">
                        {plan.features.map((feature, index) => (
                          <li
                            key={`${plan.id}-feature-${index}`}
                            className="flex items-start gap-4 text-base leading-7 text-gray-800 sm:text-lg"
                          >
                            <Check
                              className="mt-1 h-5 w-5 shrink-0 text-blue-600"
                              strokeWidth={2}
                            />

                            <span>{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Additional information */}
                    <div className="space-y-8">
                      <div>
                        <h3 className="mb-2 text-lg font-bold text-gray-900">
                          Pre-funeral Fund
                        </h3>

                        <p className="text-base leading-7 text-gray-700 sm:text-lg">
                          {plan.preFuneralFund}
                        </p>
                      </div>

                      <div>
                        <h3 className="mb-2 text-lg font-bold text-gray-900">
                          Casket Offering
                        </h3>

                        <ul className="space-y-2 text-base leading-7 text-gray-700 sm:text-lg">
                          {plan.casketOffering.map((item, index) => (
                            <li key={`${plan.id}-casket-${index}`}>– {item}</li>
                          ))}
                        </ul>
                      </div>

                      {/* Casket image */}
                      <div className="relative hidden md:h-72 w-full md:block">
                        <Image
                          src={plan.image || "/images/casket-1.webp"}
                          alt="Casket included with the funeral plan"
                          fill
                          className="object-contain"
                          sizes="(max-width: 768px) 0px, 400px"
                        />
                      </div>
                    </div>
                  </div>
                </div>

                {/* Premium card */}
                <aside className="rounded-[2rem] bg-blue-600 p-5 lg:p-7 text-white shadow-sm sm:p-9 lg:sticky lg:top-24">
                  <div className="flex min-h-[520px] flex-col">
                    <div>
                      <h3 className="text-4xl font-medium tracking-tight sm:text-5xl">
                        Premiums
                      </h3>

                      <p className="mt-5 max-w-xs text-base leading-7 text-white/90 sm:text-lg">
                        Always be prepared with affordable funeral plans.
                      </p>
                    </div>

                    {/* Premium table */}
                    <div className="mt-12 flex-1 min-w-0">
                      <table className="w-full min-w-[350px] border-collapse">
                        <thead>
                          <tr className="text-left text-sm font-bold sm:text-base">
                            <th className="pb-6 pr-4">Age</th>
                            <th className="pb-6 pr-4">Individual</th>
                            <th className="pb-6">Family</th>
                          </tr>
                        </thead>

                        <tbody>
                          {plan.premiums.map((premium, index) => (
                            <tr
                              key={`${plan.id}-premium-${index}`}
                              className="align-top"
                            >
                              <td className="py-4 pr-4 text-sm leading-7 text-white/95 sm:text-base">
                                {premium.age}
                              </td>

                              <td className="py-4 pr-4 text-sm leading-7 text-white/95 sm:text-base">
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

                    <Button
                      type="button"
                      className="
                        group
                        mt-8
                        h-12
                        w-full
                        rounded-full
                        bg-white
                        px-6
                        text-base
                        font-medium
                        text-blue-700
                        transition-all
                        duration-300
                        hover:border-transparent
                        hover:bg-blue-700
                        hover:text-white
                        cursor-pointer  
                         "
                    >
                      <Download className="size-4 text-blue-600 transition-colors duration-300 group-hover:text-white" />
                      Download Brochure
                    </Button>
                  </div>
                </aside>
              </div>
            </TabsContent>
          ))}
        </Tabs>
      </div>
    </section>
  );
}
