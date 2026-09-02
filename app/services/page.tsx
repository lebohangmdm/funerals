import {
  ClipboardCheck,
  Flame,
  Flower2,
  MapPin,
  Phone,
  Plane,
  Shovel,
  User,
} from "lucide-react";
import Image from "next/image";
import React from "react";
import ServiceCard from "../components/ServiceCard";
import TopUpSection from "../components/TopUpSection";
import Contact from "../components/Contact";

type Service = {
  name: string;
  image: string;
  description: string;
  list: string[];
  icon?: React.ReactNode;
};

const services: Service[] = [
  {
    name: "Exhumation Services",
    image: "/services/exhuman.png",
    description:
      "Assisting families with the relocation and reburial of their loved ones, while providing guidance throughout the process.",
    list: [
      "Exhumation & Reburial Services",
      "Documentation & Permit Assistance",
      "Cemetery & Municipal Coordination",
      "Compassionate Family Support",
    ],
    icon: <Shovel className="size-8 text-blue-500" />,
  },

  {
    name: "Funeral Service",
    image: "/services/funeral-service.jpg",
    description:
      "Professional funeral arrangements handled with dignity, compassion, and respectful support tailored to every family’s needs",
    list: [
      "Collection, Storage & Preparation",
      "Hearses & Family Transport",
      "Funeral Setup",
      "Gravesite Support Services",
    ],
    icon: <Flower2 className="size-8 text-blue-500" />,
  },
  {
    name: "Cremation Service",
    image: "/services/cremation.png",
    description:
      "Respectful cremation services supported by compassionate guidance and professional family assistance throughout the process.",
    list: [
      "Dignified Cremation Support",
      "Memorial Service Options",
      "Compassionate Family Guidance",
      "Professional Funeral Assistance",
    ],
    icon: <Flame className="size-8 text-blue-500" />,
  },
  {
    name: "Claims Assistance",
    image: "/services/claims.jpg",
    description:
      "Fast and compassionate claims support designed to help families receive assistance quickly and professionally",
    list: [
      "24-Hour Claims Processing",
      "Claims Submission Support",
      "Professional Family Assistance",
      "Dedicated Support Team",
    ],
    icon: <ClipboardCheck className="size-8 text-blue-500" />,
  },

  {
    name: "SADC Funeral Support",
    image: "/services/cross-border.jpg",
    description:
      "Cross-border funeral cover and repatriation assistance tailored for families and loved ones across Southern Africa.",
    list: [
      "Cross-Border Funeral Services",
      "SADC Repatriation Assistance",
      "Family Transport Coordination",
      "Compassionate Support Services",
    ],
    icon: <User className="size-8 text-blue-500" />,
  },

  {
    name: "Repatriation Services",
    image: "/services/repatriation.jpg",
    description:
      "Reliable nationwide funeral transportation and repatriation support designed to assist families across Africa",
    list: [
      "Transport Support & Services",
      "Funeral Logistics Assistance",
      "Professional Coordination",
      "Family Support Services",
    ],
    icon: <Plane className="size-8 text-blue-500" />,
  },
];

const page = () => {
  return (
    <>
      <section className="py-12 md:py-16 lg:py-20 xl:py-24">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl ">
            <p className="text-sm md:text-base lg:text-lg font-bold text-blue-700">
              Funeral Services
            </p>

            <h2 className="mt- text-3xl md:text-4xl lg:text-5xl font-bold text-blue-500">
              Dignified Farewells and Honouring lives
            </h2>
          </div>

          <div>
            {/* <div className="flex flex-col gap-4"> */}
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 md:gap-8 lg:gap-12 mt-8 md:mt-12 lg:mt-16">
              {services.map((service) => (
                <ServiceCard key={service.name} {...service} />
              ))}
            </div>
          </div>
        </div>
      </section>
      <TopUpSection />
      <Contact />
    </>
  );
};

export default page;
