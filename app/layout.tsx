import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/Components/Navbar";
import Footer from "@/Components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
icons: {
    icon: "/favicon.ico",
  },
  title: {
    default: "Fairmont Education Consultancy",
    template: "%s | Fairmont Education Consultancy",
  },
  description:
    "Your trusted partner for global education opportunities. We guide students to study in Japan, Australia, UK, and more. Offering test preparations for IELTS, PTE, and language courses.",
  keywords: [
    "study abroad",
    "education consultancy Nepal",
    "study in South Korea",
    "consultancy in lalitpur",
    "consultancy in kumaripati",
    "consultancy in kathmandu",
    "consultancy in pokhara",
    "consultancy in butwal",
    "consultancy in biratnagar",
    "consultancy in boudhanath",
    "consultancy in jawalakhel",
    "consultancy in pulchowk",
    "consultancy in new road",
    "consultancy in tripureshwor",
    "consultancy in thamel",
    "consultancy in putalisadak",
    "consultancy in sinamangal",
    "consultancy in baluwatar",
    "consultancy in jawalakhel",
    "consultancy in lagankhel",
    "consultancy in mahendrapool",
    "consultancy in prithvi chowk",
    "Joeun Education Consultancy",
    "study in Japan",
    "study in Australia",
    "IELTS preparation",
    "Korean language course",
    "visa assistance",
    "Joeun Education Consultancy",
    "study abroad consultants",
  ],
  authors: [{ name: "Fairmont Education Consultancy" }],
  metadataBase: new URL("https://www.fairmont.edu.np"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Fairmont Education Consultancy | Study Abroad Consultants",
    description:
      "Your trusted partner for global education opportunities with offices in Kathmandu, Nepal",
    url: "https://www.fairmont.edu.np",
    siteName: "Fairmont Education Consultancy",
    images: [
      {
        url: "/logo.png",
        width: 1200,
        height: 630,
        alt: "Joeun Education Consultancy Logo",
      },
    ],
    locale: "en_US",
    type: "website",
    emails: ["fairmonteducation4@gmail.com"],
    phoneNumbers: ["+977-9841615934", "+977-9851332465"],
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
