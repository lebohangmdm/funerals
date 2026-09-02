import { Mail, MapPin, Phone } from "lucide-react";
import Link from "next/link";
import React from "react";
import { FaFacebook, FaInstagram, FaWhatsapp } from "react-icons/fa";

const Footer = () => {
  return (
    <section className="py-12 md:py-16 lg:py-20 xl:py-24 bg-blue-600 text-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 xl:px-12">
        <div className="grid grid-cols-2 items-start md:grid-cols-3 lg:grid-cols-[1.5fr_1fr_1fr_1.5fr] gap-8 lg:gap-12">
          <div className="flex flex-col justify-between gap-4 ">
            <h1 className="text-2xl md:text-3xl">Logo</h1>
            <p className="text-sm lg:text-lg">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Deserunt, error modi possimus magnam hic autem repellendus?
              Incidunt natus harum alias laudantium ullam, explicabo quae
              ad.{" "}
            </p>

            <div className="flex items-center gap-2">
              <FaFacebook className="w-8 h-8" />
              <FaInstagram className="w-8 h-8" />
            </div>
          </div>

          <div className="space-y-4">
            <h3 className="text-xl md:text-2xl font-semibold">Quick Links</h3>

            <ul className="space-y-2">
              <li>
                <Link
                  href="/#about"
                  className="transition-colors hover:text-blue-200 md:text-lg"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  href="/#faqs"
                  className="transition-colors hover:text-blue-200 md:text-lg"
                >
                  FAQs
                </Link>
              </li>
              <li>
                <Link
                  href="/#branch"
                  className="transition-colors hover:text-blue-200 md:text-lg"
                >
                  Branch Locations
                </Link>
              </li>
              <li>
                <Link
                  href="/#contact"
                  className="transition-colors hover:text-blue-200 md:text-lg"
                >
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>
          <div className="space-y-4">
            <p className="text-xl md:text-2xl font-semibold">Services`</p>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/funeral-plans"
                  className="transition-colors  hover:text-blue-200 md:text-lg"
                >
                  Funeral Plans
                </Link>
              </li>
              <li>
                <Link
                  href="/services"
                  className="transition-colors hover:text-blue-200 md:text-lg"
                >
                  Services
                </Link>
              </li>
              <li>
                <Link
                  href="/#top-ups"
                  className="transition-colors hover:text-blue-200 md:text-lg"
                >
                  Top Ups
                </Link>
              </li>
            </ul>
          </div>
          <div className="space-y-4">
            <p className="text-xl md:text-2xl font-semibold">Contact Details</p>

            <div className="space-y-2">
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4" />
                <Link
                  href="tel:0781233495"
                  className="text-base md:text-lg font-medium hover:text-blue-500 transition-colors"
                >
                  078 123 3495
                </Link>
              </div>

              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4" />
                <Link
                  href="mailto:info@funeral.co.za"
                  className="text-base md:text-lg font-medium"
                >
                  info@funeral.co.za
                </Link>
              </div>

              <div className="flex items-center gap-2">
                <FaWhatsapp className="h-4 w-4" />
                <a
                  href="https://wa.me/27721234782"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-base md:text-lg font-medium transition-all hover:text-blue-200"
                >
                  072 123 4782
                </a>
              </div>
            </div>

            <div className="space-y-2">
              <p className="text-lg md:text-xl font-semibold">Head Office</p>
              <div className="flex gap-2">
                <MapPin className="w-8 h-8" />
                <address className="not-italic text-base md:text-lg">
                  <a
                    href="https://www.google.com/maps/search/?api=1&query=123+Palm+Spring+Street,+Orange+Farm,+Johannesburg+2194"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-blue-200 transition-colors"
                  >
                    123 Palm Spring Street, Orange Farm, Johannesburg 2194
                  </a>
                </address>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Footer;
