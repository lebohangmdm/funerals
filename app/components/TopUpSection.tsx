"use client";

import Image from "next/image";
import Link from "next/link";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { ArrowRight, CheckCircle2 } from "lucide-react";

import cow from "@/public/cow.jpg";
import stocks from "@/public/tops-image.png";

type Plan = {
  plan: string;
  age: string;
  topUp: string;
  standalone: string;
};

type TopUpProduct = {
  id: string;
  label: string;
  title: string;
  description: string;
  image: string;
  plans: Plan[];
  note?: string;
};

const products: TopUpProduct[] = [
  {
    id: "goat-sheep-cow",
    label: "Goat OR Sheep",
    title: "Inkomo + FREE Goat OR Sheep Plan",
    description:
      "Add valuable livestock benefits to your existing cover and give your family even more support when it matters most.",
    image: "/images/goat-sheep-cover.jpg",
    plans: [
      {
        plan: "Single Member",
        age: "16–64 years",
        topUp: "R70 pm",
        standalone: "R130 pm",
      },
      {
        plan: "Single Member",
        age: "65–84 years",
        topUp: "R130 pm",
        standalone: "R210 pm",
      },
      {
        plan: "Single Member",
        age: "85–99 years",
        topUp: "R175 pm",
        standalone: "R250 pm",
      },
      {
        plan: "Couple",
        age: "16–64 years",
        topUp: "R95 pm",
        standalone: "R175 pm",
      },
    ],
    note: "* Children under the age of 21 years.",
  },

  {
    id: "tombstone",
    label: "Tombstone",
    title: "Inkomo + Tombstone Plan",
    description:
      "Provide your family with additional support towards a meaningful memorial.",
    image: "/images/tombstone.jpg",
    plans: [
      {
        plan: "Single Member",
        age: "16–64 years",
        topUp: "R80 pm",
        standalone: "R150 pm",
      },
      {
        plan: "Single Member",
        age: "65–84 years",
        topUp: "R140 pm",
        standalone: "R220 pm",
      },
    ],
  },

  {
    id: "grave",
    label: "Grave",
    title: "Inkomo + Grave Plan",
    description:
      "Extra protection designed to help your family with burial-related expenses.",
    image: "/images/grave.jpg",
    plans: [
      {
        plan: "Single Member",
        age: "16–64 years",
        topUp: "R75 pm",
        standalone: "R140 pm",
      },
      {
        plan: "Single Member",
        age: "65–84 years",
        topUp: "R125 pm",
        standalone: "R200 pm",
      },
    ],
  },

  {
    id: "catering",
    label: "Catering",
    title: "Inkomo + Catering Plan",
    description:
      "Additional assistance with catering costs during a difficult time.",
    image: "/images/catering.jpg",
    plans: [
      {
        plan: "Single Member",
        age: "16–64 years",
        topUp: "R60 pm",
        standalone: "R120 pm",
      },
      {
        plan: "Single Member",
        age: "65–84 years",
        topUp: "R110 pm",
        standalone: "R180 pm",
      },
    ],
  },

  {
    id: "groceries",
    label: "Groceries",
    title: "Inkomo + Groceries Plan",
    description:
      "Help your family manage essential household expenses when they need it most.",
    image: "/images/groceries.jpg",
    plans: [
      {
        plan: "Single Member",
        age: "16–64 years",
        topUp: "R65 pm",
        standalone: "R125 pm",
      },
      {
        plan: "Single Member",
        age: "65–84 years",
        topUp: "R115 pm",
        standalone: "R190 pm",
      },
    ],
  },

  {
    id: "accidental-death",
    label: "Accidental Death",
    title: "Accidental Death Cover",
    description:
      "Extend your protection with additional accidental death benefits for greater peace of mind.",
    image: "/images/accidental-death.jpg",
    plans: [
      {
        plan: "Single Member",
        age: "16–64 years",
        topUp: "R50 pm",
        standalone: "R100 pm",
      },
      {
        plan: "Single Member",
        age: "65–84 years",
        topUp: "R90 pm",
        standalone: "R160 pm",
      },
    ],
  },
];

export default function TopUpSection() {
  return (
    <section
      id="top-ups"
      className="w-full overflow-hidden bg-blue-500 py-12 sm:py-16 lg:py-24"
    >
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <div className="mx-auto mb-8 max-w-3xl text-center sm:mb-10 lg:mb-12">
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-blue-100 sm:text-sm">
            Extend your protection
          </p>

          <h2 className="text-3xl font-bold font-[--font-playfair] tracking-tight text-white  md:text-5xl lg:text-6xl">
            Top-Ups
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-sm leading-6 text-blue-50 sm:text-base sm:leading-7">
            Add extra benefits to your existing cover and give your family
            additional support when they need it most.
          </p>
        </div>

        <Tabs defaultValue="goat-sheep-cow" className="w-full">
          {/* =========================
              RESPONSIVE TABS
          ========================== */}
          <div className="relative w-full overflow-x-auto overscroll-x-contain overflow-y-hidden">
            <TabsList
              className="
              flex h-auto w-max max-w-48
              justify-start gap-1
              rounded-none p-0
              sm:gap-2
              bg-transparent
          
            "
            >
              {products.map((product) => (
                <TabsTrigger
                  key={product.id}
                  value={product.id}
                  className="
                    min-h-12
                    shrink-0
                    whitespace-nowrap
                    rounded-t-xl rounded-b-none
                    border border-transparent
                    bg-blue-400
                    px-4
                    text-xs
                    font-medium
                    text-white
                    shadow-none
                    transition-all
                    duration-300
                    rounded-r-full
                    rounded-br-full


                    hover:bg-white
                    hover:text-slate-900

                    data-[state=active]:border-white
                    data-[state=active]:bg-white
                    data-[state=active]:text-slate-950
                    data-[state=active]:shadow-none

                    
                    sm:min-h-14
                    sm:px-5
                    sm:text-sm
                    lg:px-7
                  "
                >
                  {product.label}
                </TabsTrigger>
              ))}
            </TabsList>
          </div>

          {/* =========================
              TAB CONTENT
          ========================== */}
          {products.map((product) => (
            <TabsContent
              key={product.id}
              value={product.id}
              className="mt-0 w-full focus-visible:outline-none"
            >
              <Card
                className="
                  w-full
                  overflow-hidden
                  rounded-b-2xl
                  rounded-t-none
                  border-0
                  bg-white
                  shadow-2xl
                  sm:rounded-b-3xl
                "
              >
                <div
                  className="
                    grid
                    w-full
                    grid-cols-1
                    lg:grid-cols-[1.15fr_0.85fr]
                  "
                >
                  {/* =========================
                      CONTENT
                  ========================== */}
                  <div
                    className="
                      order-2
                      min-w-0
                      p-5
                      sm:p-7
                      md:p-8
                      lg:order-1
                      lg:p-10
                      xl:p-12
                    "
                  >
                    <CardHeader className="p-0">
                      <div className="mb-3 flex items-center gap-2">
                        <CheckCircle2 className="size-5 shrink-0 text-blue-500" />

                        <span className="text-sm font-semibold text-blue-600">
                          Premiums
                        </span>
                      </div>

                      <CardTitle
                        className="
                          max-w-3xl
                          text-2xl
                          font-bold
                          tracking-tight
                          text-slate-950
                          sm:text-3xl
                          lg:text-4xl
                          xl:text-[2.5rem]
                        "
                      >
                        {product.title}
                      </CardTitle>
                    </CardHeader>

                    <CardContent className="p-0">
                      <p
                        className="
                          mt-4
                          max-w-2xl
                          text-sm
                          leading-6
                          text-slate-600
                          sm:text-base
                          sm:leading-7
                        "
                      >
                        {product.description}
                      </p>

                      {/* =========================
                          PRICING TABLE
                      ========================== */}
                      <div className="mt-6 w-full overflow-hidden rounded-xl border border-slate-200 sm:mt-8">
                        <div className="w-full overflow-x-auto">
                          <Table className="min-w-[620px] ">
                            <caption className="sr-only">
                              Pricing options for {product.title}
                            </caption>

                            <TableHeader>
                              <TableRow className="bg-slate-50 hover:bg-slate-50">
                                <TableHead className="h-12 whitespace-nowrap px-3 text-xs font-semibold text-slate-950 sm:h-14 sm:px-4 sm:text-sm">
                                  Plan
                                </TableHead>

                                <TableHead className="h-12 whitespace-nowrap px-3 text-xs font-semibold text-slate-950 sm:h-14 sm:px-4 sm:text-sm">
                                  Age Range
                                </TableHead>

                                <TableHead className="h-12 whitespace-nowrap px-3 text-xs font-semibold text-slate-950 sm:h-14 sm:px-4 sm:text-sm">
                                  Top-Up
                                  <span className="block text-[10px] font-normal text-slate-500 sm:text-xs">
                                    Existing policy
                                  </span>
                                </TableHead>

                                <TableHead className="h-12 whitespace-nowrap px-3 text-xs font-semibold text-slate-950 sm:h-14 sm:px-4 sm:text-sm">
                                  Standalone
                                  <span className="block text-[10px] font-normal text-slate-500 sm:text-xs">
                                    Plan only
                                  </span>
                                </TableHead>
                              </TableRow>
                            </TableHeader>

                            <TableBody>
                              {product.plans.map((plan) => (
                                <TableRow
                                  key={`${plan.plan}-${plan.age}`}
                                  className="transition-colors hover:bg-blue-50"
                                >
                                  <TableCell className="whitespace-nowrap px-3 py-3 text-xs font-medium text-slate-900 sm:px-4 sm:py-4 sm:text-sm">
                                    {plan.plan}
                                  </TableCell>

                                  <TableCell className="whitespace-nowrap px-3 py-3 text-xs text-slate-600 sm:px-4 sm:py-4 sm:text-sm">
                                    {plan.age}
                                  </TableCell>

                                  <TableCell className="whitespace-nowrap px-3 py-3 text-xs font-semibold text-slate-900 sm:px-4 sm:py-4 sm:text-sm">
                                    {plan.topUp}
                                  </TableCell>

                                  <TableCell className="whitespace-nowrap px-3 py-3 text-xs font-semibold text-slate-900 sm:px-4 sm:py-4 sm:text-sm">
                                    {plan.standalone}
                                  </TableCell>
                                </TableRow>
                              ))}
                            </TableBody>
                          </Table>
                        </div>
                      </div>

                      {/* Note */}
                      {product.note && (
                        <p className="mt-3 text-xs italic text-slate-500 sm:mt-4 sm:text-sm">
                          {product.note}
                        </p>
                      )}

                      {/* Button */}
                      <Button
                        size="lg"
                        className="
                          mt-6
                          min-h-11
                          w-full
                          rounded-md
                          bg-blue-500
                          px-5
                          py-3
                          font-semibold
                          text-white
                          transition-colors
                          duration-200
                          hover:bg-blue-600
                          sm:mt-8
                          sm:w-52
                        "
                      >
                        <Link
                          href="/get-cover"
                          className="flex items-center justify-center gap-2"
                        >
                          Get Cover
                          <ArrowRight className="size-4" />
                        </Link>
                      </Button>
                    </CardContent>
                  </div>

                  {/* =========================
                      IMAGE
                  ========================== */}
                  <div
                    className="
                      order-1
                      min-w-0
                      p-3
                      sm:p-4
                      lg:order-2
                      lg:p-6
                    "
                  >
                    <div
                      className="
                        relative
                        min-h-[360px]
                        w-full
                        overflow-hidden
                        rounded-xl
                        bg-slate-100
                        sm:rounded-2xl
                        md:min-h-[420px]
                        lg:h-full
                        lg:min-h-[600px]
                      "
                    >
                      <Image
                        src={product.id === "goat-sheep-cow" ? stocks : cow}
                        alt={product.label}
                        fill
                        sizes="
                          (max-width: 640px) 100vw,
                          (max-width: 1024px) 100vw,
                          40vw
                        "
                        className="
                          object-cover
                          transition-transform
                          duration-700
                          hover:scale-[1.02]
                        "
                        priority={product.id === "goat-sheep-cow"}
                      />

                      {/* Overlay */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent" />

                      <div className="absolute inset-x-0 bottom-0 p-5 sm:p-6">
                        <p className="text-sm font-medium text-white sm:text-base">
                          Extra protection. Greater peace of mind.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </Card>
            </TabsContent>
          ))}
        </Tabs>
      </div>
    </section>
  );
}
