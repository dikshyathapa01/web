import type { Metadata } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { FloatingWhatsApp } from "@/components/FloatingWhatsApp";
import { StickyCTA } from "@/components/StickyCTA";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://pahadi.com";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const spaceGrotesk = Space_Grotesk({ subsets: ["latin"], variable: "--font-space" });

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "Pahadi | Modern Websites That Convert",
  description: "Fast, polished websites and landing pages designed to build trust, generate leads, and grow your business.",
  icons: {
    icon: "/paha.jpg",
    shortcut: "/paha.jpg",
    apple: "/paha.jpg",
  },
  openGraph: {
    title: "Pahadi | Modern Websites That Convert",
    description: "Fast, polished websites and landing pages designed to build trust, generate leads, and grow your business.",
    images: [
      {
        url: "/paha.jpg",
        width: 512,
        height: 512,
        alt: "Pahadi icon",
      },
    ],
  },
  twitter: {
    card: "summary",
    title: "Pahadi | Modern Websites That Convert",
    description: "Fast, polished websites and landing pages designed to build trust, generate leads, and grow your business.",
    images: ["/paha.jpg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark" data-scroll-behavior="smooth">
      <body
        className={`${inter.variable} ${spaceGrotesk.variable} antialiased min-h-screen flex flex-col`}
      >
        <Navbar />
        <main className="flex-1 pt-16">
          {children}
        </main>
        <Footer />
        <FloatingWhatsApp />
        <StickyCTA />
      </body>
    </html>
  );
}
