"use client";

import Link from "next/link";
import { Menu } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

export function MenuButton() {
  const navItems = [
    { label: "About Us", href: "#about" },
    { label: "Services", href: "/services" },
    { label: "funeral Plans", href: "/funeral-plans" },
    { label: "Contact Us", href: "#contact" },
  ];

  return (
    <DropdownMenu>
      <DropdownMenuTrigger>
        <Button
          variant="outline"
          size="icon"
          aria-label="Open navigation menu"
          className="md:hidden h-10 w-10 rounded-xs  shadow-none  focus-visible:ring-0 focus-visible:outline-none"
        >
          <Menu className="h-5 w-5" />
        </Button>
      </DropdownMenuTrigger>

      <DropdownMenuContent
        align="end"
        sideOffset={8}
        className="w-[calc(100vw-1rem)] mr-2 rounded-none p-2 md:hidden"
      >
        {navItems.map((item) => (
          <DropdownMenuItem
            key={item.href}
            className="cursor-pointer rounded-none px-3 py-2  text-base border-b-2 "
          >
            <Link href={item.href} className="w-full">
              {item.label}
            </Link>
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
