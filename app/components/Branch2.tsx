"use client";

import { useMemo, useState } from "react";
import Image from "next/image";
import {
  Search,
  MapPin,
  Clock3,
  Phone,
  Mail,
  Navigation,
  ArrowRight,
  Headphones,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";

type Branch = {
  id: number;
  name: string;
  city: string;
  province: string;
  address: string;
  phone: string;
  email: string;
  hours: string;
  image: string;
  position: {
    top: string;
    left: string;
  };
};

const branches: Branch[] = [
  {
    id: 1,
    name: "Johannesburg Branch",
    city: "Johannesburg",
    province: "Gauteng",
    address: "123 Rivonia Road, Sandton, Gauteng",
    phone: "011 123 4567",
    email: "jhb@company.co.za",
    hours: "Mon – Fri: 08:00 – 17:00",
    image: "/images/branches/johannesburg.jpg",
    position: {
      top: "43%",
      left: "53%",
    },
  },
  {
    id: 2,
    name: "Pretoria Branch",
    city: "Pretoria",
    province: "Gauteng",
    address: "45 Church Street, Pretoria",
    phone: "012 234 5678",
    email: "pta@company.co.za",
    hours: "Mon – Fri: 08:00 – 17:00",
    image: "/images/branches/pretoria.jpg",
    position: {
      top: "25%",
      left: "58%",
    },
  },
  {
    id: 3,
    name: "Cape Town Branch",
    city: "Cape Town",
    province: "Western Cape",
    address: "78 Long Street, Cape Town",
    phone: "021 345 6789",
    email: "cpt@company.co.za",
    hours: "Mon – Fri: 08:00 – 17:00",
    image: "/images/branches/cape-town.jpg",
    position: {
      top: "82%",
      left: "25%",
    },
  },
  {
    id: 4,
    name: "Durban Branch",
    city: "Durban",
    province: "KwaZulu-Natal",
    address: "250 Umhlanga Rocks Drive",
    phone: "031 456 7890",
    email: "dbn@company.co.za",
    hours: "Mon – Fri: 08:00 – 17:00",
    image: "/images/branches/durban.jpg",
    position: {
      top: "58%",
      left: "75%",
    },
  },
];

export default function FindBranch() {
  const [search, setSearch] = useState("");
  const [selectedBranch, setSelectedBranch] = useState(branches[0]);

  const filteredBranches = useMemo(() => {
    const query = search.toLowerCase().trim();

    if (!query) {
      return branches;
    }

    return branches.filter((branch) =>
      [branch.name, branch.city, branch.province, branch.address]
        .join(" ")
        .toLowerCase()
        .includes(query),
    );
  }, [search]);

  return (
    <section className="bg-white py-16 sm:py-20 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* ------------------------------------------------
            HEADER
        ------------------------------------------------ */}
        <div className="mx-auto max-w-3xl text-center">
          <div className="mb-4 flex items-center justify-center gap-2">
            <MapPin className="h-5 w-5 text-[#3B82F6]" />

            <span className="text-sm font-semibold uppercase tracking-widest text-[#3B82F6]">
              Our Locations
            </span>
          </div>

          <h2 className="text-3xl font-bold tracking-tight text-gray-950 sm:text-4xl lg:text-5xl">
            Find a Branch
          </h2>

          <p className="mt-4 text-base leading-7 text-gray-500 sm:text-lg">
            Find the branch closest to you and get directions, contact details
            and opening hours.
          </p>
        </div>

        {/* ------------------------------------------------
            SEARCH
        ------------------------------------------------ */}
        <div className="mx-auto mt-8 max-w-3xl">
          <div className="relative">
            <Search className="absolute left-5 top-1/2 z-10 h-5 w-5 -translate-y-1/2 text-gray-400" />

            <Input
              type="text"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search by city, suburb or branch..."
              className="
                h-14
                rounded-2xl
                border-gray-200
                bg-white
                pl-13
                pr-28
                shadow-sm
                focus-visible:border-[#3B82F6]
                focus-visible:ring-[#3B82F6]
              "
            />

            <Button
              type="button"
              onClick={() => {}}
              className="
                absolute
                right-1.5
                top-1.5
                h-11
                rounded-xl
                bg-[#3B82F6]
                px-5
                hover:bg-[#2563EB]
              "
            >
              Search
            </Button>
          </div>
        </div>

        {/* ------------------------------------------------
            LOCATOR
        ------------------------------------------------ */}
        <div
          className="
            mt-10
            grid
            overflow-hidden
            rounded-3xl
            border
            border-gray-200
            bg-white
            shadow-xl
            lg:grid-cols-[390px_1fr]
          "
        >
          {/* ==================================================
              LEFT — BRANCH LIST
          ================================================== */}
          <div className="flex min-h-0 flex-col">
            {/* Branch header */}
            <div className="flex items-center justify-between border-b border-gray-100 px-5 py-5 sm:px-6">
              <h3 className="text-lg font-bold text-gray-950">Branches</h3>

              <Badge
                variant="secondary"
                className="rounded-full bg-blue-50 px-3 py-1 text-[#3B82F6]"
              >
                {filteredBranches.length} locations
              </Badge>
            </div>

            {/* Branches */}
            <div className="max-h-[650px] overflow-y-auto">
              {filteredBranches.length > 0 ? (
                filteredBranches.map((branch) => {
                  const isSelected = selectedBranch.id === branch.id;

                  return (
                    <button
                      key={branch.id}
                      type="button"
                      onClick={() => setSelectedBranch(branch)}
                      className={`
                        w-full
                        border-b
                        border-gray-100
                        p-5
                        text-left
                        transition
                        duration-200
                        hover:bg-gray-50
                        sm:p-6
                        ${isSelected ? "bg-blue-50/60" : "bg-white"}
                      `}
                    >
                      <div className="flex gap-4">
                        {/* Image */}
                        <div className="relative h-24 w-24 shrink-0 overflow-hidden rounded-xl sm:h-28 sm:w-28">
                          <Image
                            src={branch.image}
                            alt={branch.name}
                            fill
                            sizes="112px"
                            className="object-cover"
                          />
                        </div>

                        {/* Details */}
                        <div className="min-w-0 flex-1">
                          <div className="flex items-start justify-between gap-2">
                            <h4
                              className={`
                                text-base
                                font-bold
                                ${
                                  isSelected
                                    ? "text-[#3B82F6]"
                                    : "text-gray-900"
                                }
                              `}
                            >
                              {branch.name}
                            </h4>

                            {isSelected && (
                              <Badge className="shrink-0 bg-[#3B82F6] text-white hover:bg-[#3B82F6]">
                                Selected
                              </Badge>
                            )}
                          </div>

                          <div className="mt-2 space-y-1.5">
                            <div className="flex items-start gap-2 text-sm text-gray-500">
                              <MapPin className="mt-0.5 h-4 w-4 shrink-0" />
                              <span>
                                {branch.city}, {branch.province}
                              </span>
                            </div>

                            <div className="flex items-start gap-2 text-sm text-gray-500">
                              <MapPin className="mt-0.5 h-4 w-4 shrink-0" />
                              <span>{branch.address}</span>
                            </div>

                            <div className="flex items-center gap-2 text-sm text-gray-500">
                              <Clock3 className="h-4 w-4 shrink-0" />
                              <span>{branch.hours}</span>
                            </div>
                          </div>
                        </div>

                        <ArrowRight
                          className={`
                            mt-1
                            hidden
                            h-5
                            w-5
                            shrink-0
                            sm:block
                            ${isSelected ? "text-[#3B82F6]" : "text-gray-400"}
                          `}
                        />
                      </div>
                    </button>
                  );
                })
              ) : (
                <div className="px-6 py-16 text-center">
                  <MapPin className="mx-auto h-10 w-10 text-gray-300" />

                  <h4 className="mt-4 font-semibold text-gray-900">
                    No branches found
                  </h4>

                  <p className="mt-1 text-sm text-gray-500">
                    Try another city or branch name.
                  </p>
                </div>
              )}
            </div>

            {/* Help */}
            <div className="m-4 rounded-2xl bg-blue-50 p-4 sm:m-5">
              <div className="flex gap-3">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-white text-[#3B82F6]">
                  <Headphones className="h-5 w-5" />
                </div>

                <div>
                  <p className="font-semibold text-gray-900">Need help?</p>

                  <p className="mt-1 text-sm text-gray-500">
                    Call our head office
                  </p>

                  <a
                    href="tel:0861234567"
                    className="text-sm font-semibold text-[#3B82F6]"
                  >
                    086 123 4567
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* ==================================================
              RIGHT — MAP
          ================================================== */}
          <div className="relative min-h-[600px] bg-[#eef3f7]">
            {/* 
              Replace this background with your actual map
              provider such as Google Maps or Mapbox.
            */}
            <div
              className="
                absolute
                inset-0
                bg-[url('/images/map-background.jpg')]
                bg-cover
                bg-center
              "
            >
              {/* Light map overlay */}
              <div className="absolute inset-0 bg-white/10" />

              {/* ==================================================
                  MAP MARKERS
              ================================================== */}
              {branches.map((branch) => {
                const isSelected = selectedBranch.id === branch.id;

                return (
                  <button
                    key={branch.id}
                    type="button"
                    onClick={() => setSelectedBranch(branch)}
                    aria-label={`Select ${branch.name}`}
                    style={{
                      top: branch.position.top,
                      left: branch.position.left,
                    }}
                    className={`
                      absolute
                      z-20
                      -translate-x-1/2
                      -translate-y-1/2
                      transition-all
                      duration-200
                      ${isSelected ? "scale-125" : "hover:scale-110"}
                    `}
                  >
                    <span
                      className={`
                        flex
                        h-11
                        w-11
                        items-center
                        justify-center
                        rounded-full
                        bg-[#3B82F6]
                        text-white
                        shadow-lg
                        ring-4
                        ring-white
                      `}
                    >
                      <MapPin className="h-5 w-5" fill="currentColor" />
                    </span>
                  </button>
                );
              })}

              {/* ==================================================
                  SELECTED BRANCH CARD
              ================================================== */}
              <div
                className="
                  absolute
                  bottom-5
                  left-5
                  right-5
                  z-30
                  sm:bottom-6
                  sm:left-auto
                  sm:right-6
                  sm:w-[370px]
                "
              >
                <div className="overflow-hidden rounded-2xl bg-white shadow-2xl">
                  {/* Branch image */}
                  <div className="relative h-44">
                    <Image
                      src={selectedBranch.image}
                      alt={selectedBranch.name}
                      fill
                      sizes="370px"
                      className="object-cover"
                    />

                    <Badge
                      className="
                        absolute
                        left-4
                        top-4
                        bg-white
                        text-gray-900
                        shadow-sm
                        hover:bg-white
                      "
                    >
                      Selected branch
                    </Badge>
                  </div>

                  {/* Branch details */}
                  <div className="p-5">
                    <h3 className="text-xl font-bold text-[#3B82F6]">
                      {selectedBranch.name}
                    </h3>

                    <div className="mt-4 space-y-3">
                      <div className="flex gap-3 text-sm text-gray-600">
                        <MapPin className="mt-0.5 h-5 w-5 shrink-0 text-gray-400" />

                        <span>{selectedBranch.address}</span>
                      </div>

                      <div className="flex gap-3 text-sm text-gray-600">
                        <Clock3 className="h-5 w-5 shrink-0 text-gray-400" />

                        <span>{selectedBranch.hours}</span>
                      </div>

                      <div className="flex gap-3 text-sm text-gray-600">
                        <Phone className="h-5 w-5 shrink-0 text-gray-400" />

                        <span>{selectedBranch.phone}</span>
                      </div>

                      <div className="flex gap-3 text-sm text-gray-600">
                        <Mail className="h-5 w-5 shrink-0 text-gray-400" />

                        <span className="break-all">
                          {selectedBranch.email}
                        </span>
                      </div>
                    </div>

                    <Button
                      className="
                        mt-5
                        h-12
                        w-full
                        rounded-xl
                        bg-[#3B82F6]
                        text-base
                        font-semibold
                        hover:bg-[#2563EB]
                      "
                    >
                      <a
                        href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
                          selectedBranch.address,
                        )}`}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Navigation className="mr-2 h-5 w-5" />
                        Get Directions
                      </a>
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
