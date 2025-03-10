import type { Metadata } from "next";
import { Geist, Geist_Mono, Orbitron, Teko, Satisfy } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const orbitron = Orbitron({
  variable: "--font-geist-orbitron",
  subsets: ["latin"],
});

const teko = Teko({
  variable: "--font-geist-teko",
});

const satisfy = Satisfy({
  variable: "--font-geist-satisfy",
  subsets: ["latin"],
  weight: "400",
});

export const metadata: Metadata = {
  title: "Mike The Lengend - Digital Marketer",
  description:
    "Learn how to achieve financial freedom through digital marketing, work from your comfort zone. It's as easy as getting the Algorithm.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${satisfy.variable} ${teko.variable} ${orbitron.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
