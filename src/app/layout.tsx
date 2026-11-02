import type { Metadata, Viewport } from "next";
import { Bricolage_Grotesque, Fragment_Mono, Instrument_Serif } from "next/font/google";
import "./globals.css";

const bricolage = Bricolage_Grotesque({
  variable: "--font-bricolage",
  subsets: ["latin"],
  display: "swap",
});

const fragment = Fragment_Mono({
  variable: "--font-fragment",
  subsets: ["latin"],
  weight: "400",
  display: "swap",
});

const instrument = Instrument_Serif({
  variable: "--font-instrument",
  subsets: ["latin"],
  weight: "400",
  style: "italic",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Mayur Rishi — Full-Stack & AI Developer",
  description:
    "Portfolio of Mayur Rishi: full-stack and AI developer building secure, production-ready products with Python, FastAPI, Next.js and LLM workflows.",
  openGraph: {
    title: "Mayur Rishi — Full-Stack & AI Developer",
    description:
      "Full-stack and AI products that blend clean code, creativity, and clear communication.",
    type: "website",
  },
};

export const viewport: Viewport = {
  themeColor: "#FDFBF7",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body
        className={`${bricolage.variable} ${fragment.variable} ${instrument.variable} bg-cream font-sans text-ink antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
