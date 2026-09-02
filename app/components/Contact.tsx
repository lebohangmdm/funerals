import React from "react";
import ContactForm from "./ContactForm";
import Link from "next/link";
import { FaFacebook, FaInstagram } from "react-icons/fa";

const Contact = () => {
  return (
    <section id="contact" className="py-12 md:py-16 lg:py-20 xl:py-24">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 xl:px-12">
        <div className="grid grid-cols-1 md:grid-cols-[30%_70%] lg:grid-cols-[40%_60%] gap-12 lg:gap-16">
          <div className="bg-blue-600 p-8 md:p-12 rounded-lg text-white">
            <h2 className="text-2xl font-bold text-white sm:text-3xl lg:text-4xl mb-4">
              Contact Details
            </h2>

            <div className="space-y-4">
              <div className="space-y-1">
                <p className="text-lg md:text-xl font-semibold text-white">
                  Head Office
                </p>
                <address className="not-italic text-base md:text-lg max-w-xs">
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

              <div>
                <p className="text-lg md:text-xl font-semibold">Tel:</p>
                <Link
                  href="tel:27827821233"
                  className="text-base md:text-lg font-medium hover:text-blue-200 transition-all"
                >
                  0827821233
                </Link>
              </div>

              <div className="">
                <p className="text-lg md:text-xl font-semibold">
                  Emergency Calls:
                </p>
                <Link
                  href="tel:27737821234"
                  className="text-base md:text-lg font-medium hover:text-blue-200 transition-all"
                >
                  0737821234
                </Link>
              </div>

              <div>
                <p className="text-lg md:text-xl font-semibold">Email:</p>
                <div className="flex flex-col">
                  <Link
                    href="mailto:info@funeral.co.za"
                    className="text-base md:text-lg font-medium hover:text-blue-200 transition-all"
                  >
                    info@funeral.co.za
                  </Link>
                  <Link
                    href="mailto:info@funeral.co.za"
                    className="text-base md:text-lg font-medium hover:text-blue-200 transition-all"
                  >
                    info@funeral.co.za
                  </Link>
                </div>
              </div>

              <div className="flex items-center gap-2 lg:gap-3">
                <FaFacebook className="w-8 h-8" />
                <FaInstagram className="w-8 h-8" />
              </div>
            </div>
          </div>

          <ContactForm />
        </div>
      </div>
    </section>
  );
};

export default Contact;
