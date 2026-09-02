import React from "react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import FuneralPlan from "@/app/components/FuneralPlan";

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
};

const plans: Plan[] = [
  {
    id: "exclusive-plan-1",
    name: "Exclusive Plan",
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
    id: "exclusive-plan-2",
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

const page = async ({ params }: { params: Promise<{ id: string }> }) => {
  const { id } = await params;

  const plan = plans.find((item) => item.id === id);

  if (!plan) {
    return (
      <section className="flex min-h-[50vh] items-center justify-center px-4">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-900">
            Funeral plan not found
          </h1>

          <p className="mt-2 text-gray-600">
            The funeral plan you are looking for does not exist.
          </p>

          <Button className="mt-6 rounded-full bg-blue-600">
            <Link href="/funeral-plans">View All Plans</Link>
          </Button>
        </div>
      </section>
    );
  }

  return <FuneralPlan cover={{ plan }} />;
};

export default page;
