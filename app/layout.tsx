import type React from "react";
import type { Metadata } from "next";
import { Playfair_Display, Source_Sans_3 } from "next/font/google";
import "./globals.css";

const playfairDisplay = Playfair_Display({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-playfair",
  weight: ["400", "600", "700"],
});

const sourceSans = Source_Sans_3({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-source-sans",
  weight: ["400", "500", "600"],
});

export const metadata: Metadata = {
  title: "AquaLux Pools - Kontraktor Kolam Renang Premium",
  description:
    "Jasa pembuatan kolam renang mewah dan eksklusif untuk hunian dan komersial. Kontraktor kolam renang terpercaya dengan kualitas premium.",
  generator: "v0.app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="id"
      className={`${playfairDisplay.variable} ${sourceSans.variable} antialiased`}
    >
      <body className="font-sans">{children}</body>
    </html>
  );
}
