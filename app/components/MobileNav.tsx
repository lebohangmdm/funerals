"use client";

import Link from "next/link";
import { Menu } from "lucide-react";

import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { useRouter } from "next/navigation";

const navigation = [
  {
    label: "Home",
    href: "/",
  },
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

export function MobileNav() {
  const router = useRouter();

  return (
    <div className="md:hidden">
      <Sheet>
        <SheetTrigger
          type="button"
          aria-label="Open navigation menu"
          className="
            inline-flex
            size-10
            items-center
            justify-center
            rounded-md
            transition-colors
            hover:bg-accent
            hover:text-accent-foreground
          "
        >
          <Menu className="size-6" />
        </SheetTrigger>

        <SheetContent
          side="right"
          className="
            w-[50vw]
            max-w-sm
            border-l
            bg-background
            px-6
            py-8
          "
        >
          <SheetHeader className="border-b px-0 pb-6">
            <SheetTitle className="text-left text-xl font-semibold">
              Menu
            </SheetTitle>
          </SheetHeader>

          <nav aria-label="Mobile navigation" className="mt-8 flex flex-col">
            {navigation.map((item) => (
              <SheetClose key={item.href}>
                <Link
                  href={item.href}
                  className="
                    flex
                    min-h-12
                    items-center
                    border-b
                    border-orange-400
                    text-base
                    font-semibold
                    text-foreground
                    transition-colors
                    hover:text-orange-600
                  "
                >
                  {item.label}
                </Link>
              </SheetClose>
            ))}
          </nav>

          <div className="mt-auto pt-8">
            <SheetClose onClick={() => router.push("/#funeral-covers")}>
              <Link
                href="/#funeral-covers"
                className="
                  flex
                  min-h-11
                  w-full
                  items-center
                  justify-center
                  rounded-lg
                  bg-orange-500
                  px-5
                  text-sm
                  font-semibold
                  text-white
                  transition-colors
                  hover:bg-orange-600
                "
              >
                Get Cover
              </Link>
            </SheetClose>
          </div>
        </SheetContent>
      </Sheet>
    </div>
  );
}
