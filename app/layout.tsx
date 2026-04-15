import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://1885.ai"),
  title: {
    default: "1885.ai — Dealership intelligence, built by dealers",
    template: "%s — 1885.ai",
  },
  description:
    "A Business Intelligence layer and CRM for powersports dealerships, built on top of your Lightspeed DMS.",
  openGraph: {
    title: "1885.ai — Dealership intelligence, built by dealers",
    description:
      "A Business Intelligence layer and CRM for powersports dealerships, built on top of your Lightspeed DMS.",
    url: "https://1885.ai",
    siteName: "1885.ai",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "1885.ai — Dealership intelligence, built by dealers",
    description:
      "A Business Intelligence layer and CRM for powersports dealerships, built on top of your Lightspeed DMS.",
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-white text-black">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
