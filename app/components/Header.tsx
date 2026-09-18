import React from "react";
import { MobileMenu } from "./MobileMenu";
import { MobileNav } from "./MobileNav";
import Link from "next/link";

type Navigation = {
  label: string;
  href: string;
};

const navigation: Navigation[] = [
  {
    label: "About",
    href: "/#about",
  },
  {
    label: "Services",
    href: "/services",
  },
  {
    label: "Funeral Plans",
    href: "/funeral-plans",
  },
  {
    label: "Contact",
    href: "/#contact",
  },
];

const Header = () => {
  return (
    <header className="sticky top-0 z-50  shadow-[0_4px_8px_-6px_rgba(0,0,0,0.5)] bg-orange-50/50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 md:px-8 lg:px-12">
        <nav className="flex items-center justify-between h-16">
          <div>
            <Link href={"/"} className="text-xl lg:text-2xl font-bold">
              LOGO
            </Link>
          </div>

          <ul className="hidden lg:flex items-center lg:gap-x-12 xl:gap-x-14 ">
            {navigation.map((link) => (
              <li key={link.label}>
                <Link
                  href={link.href}
                  className="md:text-base lg:text-lg font-semibold transition-all duration-150 text-gray-900 hover:text-orange-500"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>

          {/* <MobileMenu /> */}
          <MobileNav />
        </nav>
      </div>
    </header>
  );
};

export default Header;
