"use client";

import Link from "next/link";
import { MessageCircle } from "lucide-react";
import { BsWhatsapp } from "react-icons/bs";

type WhatsAppButtonProps = {
  phoneNumber: string;
  message?: string;
};

export default function WhatsAppButton({
  phoneNumber,
  message = "Hi, I would like more information.",
}: WhatsAppButtonProps) {
  const formattedMessage = encodeURIComponent(message);

  const href = `https://wa.me/${phoneNumber}?text=${formattedMessage}`;

  return (
    <Link
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat on WhatsApp"
      className="
        fixed bottom-5 right-5 z-50
        flex items-center justify-center
        h-14 w-14 md:h-16 md:w-16
        rounded-full
        bg-green-500 hover:bg-green-600
        text-white
        shadow-lg
        transition-transform duration-200
        hover:scale-110 active:scale-95
      "
    >
      <BsWhatsapp className="h-6 w-6 md:h-7 md:w-7" />
    </Link>
  );
}
