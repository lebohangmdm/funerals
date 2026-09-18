import type { Metadata } from "next";
import { Playfair_Display } from "next/font/google";
import "./globals.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { Inter } from "next/font/google";
import WhatsAppButton from "./components/WhatsAppButton";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://yourdomain.com"),

  title: {
    default: "Funeral - Funeral Covers",
    template: "%s | Funeral",
  },

  description: "Supporting Your Family, Always",

  keywords: [
    "Funeral Covers",
    "Funeral Services",
    "Inkomo + free goat and sheep",
    "Dignified Farewells",
    "Exhumation and Cremation Services",
  ],

  authors: [{ name: "SynthCreations" }],

  creator: "SynthCreations",

  openGraph: {
    type: "website",
    locale: "en_ZA",
    url: "https://funerals-eight.vercel.app/",
    siteName: "SynthCreations",
    title: "Funeral Cover - Supporting Your Family, Always",
    description: "Supporting Your Family, Always",
    images: [
      {
        url: "/hero-2.png",
        width: 1200,
        height: 630,
      },
    ],
  },

  icons: {
    icon: "/favicon.ico",
  },

  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${playfair.variable} h-full antialiased scroll-smooth`}
    >
      <body className="">
        <Header />
        {children}
        <Footer />
        <WhatsAppButton
          phoneNumber="27788931861"
          message="Hello 👋 I need help with your services"
        />
      </body>
    </html>
  );
}
