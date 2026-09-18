import React from "react";
import AccordionFaq from "./AccordionFaq";

const Faq = () => {
  return (
    <section id="faqs" className="bg-slate-100 py-12 sm:py-16 lg:py-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-[35%_65%]  gap-12">
          <div className="flex flex-col gap-6">
            <h2 className="text-3xl font-bold text-gray-900 md:text-4xl lg:text-5xl">
              Frequently Asked Questions
            </h2>
            <p className="text-base lg:text-lg  text-slate-600">
              If there’s anything else you want to know, let’s talk. Give our
              Customer Service Centre a call on{" "}
              <a
                href="tel:0860225246"
                className="text-orange-500 hover:text-orange-700 block"
              >
                086 022 5246
              </a>
              .
            </p>
          </div>
          <AccordionFaq />
        </div>
      </div>
    </section>
  );
};

export default Faq;
