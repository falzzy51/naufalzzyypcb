import type { Metadata, Viewport } from "next";
import { Space_Grotesk, Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";
import { siteConfig } from "@/lib/site-config";

const display = Space_Grotesk({
  variable: "--font-space",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const mono = JetBrains_Mono({
  variable: "--font-jetbrains",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});

export const metadata: Metadata = {
  title: `${siteConfig.name} — PCB Design & Fabrication | 1, 2 & 4-Layer`,
  description:
    "Custom PCB design and fabrication services: 1, 2 & 4-layer boards. Clean layouts, DFM-checked, fabrication-ready Gerber files. Order fast via Fiverr.",
  keywords: [
    "PCB design",
    "PCB fabrication",
    "PCB layout",
    "4 layer PCB",
    "2 layer PCB",
    "KiCad",
    "Gerber files",
    "Fiverr PCB designer",
  ],
  authors: [{ name: siteConfig.name }],
  icons: {
    icon: "/favicon.svg",
  },
  openGraph: {
    title: `${siteConfig.name} — PCB Design & Fabrication`,
    description:
      "From schematic to a board that works. 1, 2 & 4-layer PCB design with fab-ready files, delivered via Fiverr.",
    siteName: siteConfig.brand,
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: `${siteConfig.name} — PCB Design & Fabrication`,
    description:
      "From schematic to a board that works. 1, 2 & 4-layer PCB design via Fiverr.",
  },
};

export const viewport: Viewport = {
  themeColor: "#0a0e0b",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${display.variable} ${inter.variable} ${mono.variable} antialiased bg-background text-foreground`}
      >
        {children}
        <Toaster />
      </body>
    </html>
  );
}
