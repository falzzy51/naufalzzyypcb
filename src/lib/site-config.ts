// ============================================================
// SITE CONFIG — Edit this file to customize your portfolio.
// ⚠️ Replace `fiverr.url` with YOUR real Fiverr gig/profile URL.
// ⚠️ Replace `name` with your real name.
// ============================================================

export const siteConfig = {
  name: "Gilang Muhammad Naufal",
  firstName: "Gilang",
  brand: "naufalzzyy.pcb",
  role: "PCB Design & Fabrication Specialist",
  tagline: "From schematic to a board that works.",
  location: "Indonesia · GMT+7",
  languages: ["English", "Bahasa Indonesia"],

  // ⚠️ TODO: replace with your real Fiverr URL
  fiverr: {
    url: "https://www.fiverr.com/naufalzzyy",
    label: "Order on Fiverr",
  },

  email: "gilangnaufal85@gmail.com", // optional — not displayed by default

  stats: [
    { value: "1+", label: "Year of hands-on PCB experience" },
    { value: "15+", label: "Boards designed" },
    { value: "1–4", label: "Layer stack-up support" },
    { value: "<24h", label: "Average response time" },
  ],

  navLinks: [
    { href: "#about", label: "About" },
    { href: "#services", label: "Services" },
    { href: "#projects", label: "Projects" },
    { href: "#process", label: "Process" },
    { href: "#contact", label: "Contact" },
  ],
};

export type NavLink = (typeof siteConfig.navLinks)[number];

// ---------------- Services ----------------

export interface Service {
  code: string; // big mono label, e.g. "1L"
  layer: string; // badge, e.g. "1-Layer"
  title: string;
  tagline: string;
  description: string;
  price: string;
  features: string[];
  featured?: boolean;
}

export const services: Service[] = [
  {
    code: "1L",
    layer: "1-Layer",
    title: "Simple PCB",
    tagline: "Simple & cost-effective",
    description:
      "Ideal for cost-sensitive projects: LED drivers, power supplies, breakout adapters and simple control boards.",
    price: "$5",
    features: [
      "Single copper layer, optimized routing",
      "Schematic capture & netlist review",
      "DFM / DRC check before export",
      "Gerber + drill files",
      "Typical turnaround: 3 days",
    ],
  },
  {
    code: "2L",
    layer: "2-Layer",
    title: "Standard PCB",
    tagline: "The versatile workhorse",
    description:
      "The best fit for most projects: MCU boards, IoT nodes, motor drivers and audio boards — reliable and affordable.",
    price: "$15",
    features: [
      "Double-sided routing with vias",
      "Ground pour & signal-integrity care",
      "Silkscreen on both sides",
      "50 components",
      "Typical turnaround: 5 days",
    ],
    featured: true,
  },
  {
    code: "4L",
    layer: "4-Layer",
    title: "Complex PCB",
    tagline: "Advanced & high-density",
    description:
      "For dense, high-speed designs that need dedicated power planes, impedance control and fine-pitch parts.",
    price: "$30",
    features: [
      "Inner power & ground planes",
      "Impedance-controlled routing",
      "75 components",
      "Stack-up planning with your fab",
      "Typical turnaround: 7 days",
    ],
  },
];

// ---------------- Projects ----------------

export interface Project {
  title: string;
  category: string;
  layers: string;
  year: string;
  image: string;
  description: string;
  specs: string[];
}

export const projects: Project[] = [
  {
    title: "ESP32 Environmental Sensor Node",
    category: "IoT",
    layers: "4-Layer",
    year: "2026",
    image: "/images/ESP32_C3_V1.png",
    description:
      "This 3D model shows a compact ESP32_C3_V1 development board featuring a RISC-V based ESP32-C3 microcontroller module with Wi-Fi and Bluetooth LE, a modern USB Type-C port for power and programming, physical RESET and BOOT buttons, status components, and side pin headers for easy hardware prototyping.",
    specs: ["ESP32 C3", "USB-C", "Deep sleep"],
  },
  {
    title: "ESP8266 Custom Dev Board",
    category: "IoT",
    layers: "2-Layer",
    year: "2026",
    image: "/images/esp8266.png",
    description:
      "This 3D model features a custom ESP8266-based development board designed for IoT applications, integrating an ESP-12 module for Wi-Fi connectivity, a Micro-USB port with a USB-to-UART bridge for programming, an onboard voltage regulator, auto-reset circuitry, and dual breakout pin headers for easy interfacing with external sensors and components.",
    specs: ["Wi-Fi connectivity, Micro-USB, Auto-Reset"],
  },
  {
    title: "Traffic Lights",
    category: "Embedded",
    layers: "2-Layer",
    year: "2026",
    image: "/images/trafficlights.png",
    description:
      "This **DIY Traffic Light PCB module is an entry-level embedded system designed for learning basic electronics and timing circuits, built around classic hardware like the IC 555 timer and CD4017 decade counter to automatically cycle through Red, Yellow, and Green LEDs without requiring microcontroller programming or Wi-Fi connectivity.",
    specs: ["NE555, CD4017"],
  },
  {
    title: "DC 12V to 5V",
    category: "Lighting",
    layers: "2-Layer",
    year: "2026",
    image: "/images/psu12to5v.png",
    description:
      "This module is designed to function as both a rectifier and a voltage regulator. It features a full-wave bridge rectifier (comprising four diodes), an electrolytic capacitor for voltage filtering, a linear regulator (such as an IC from the 7805 series in a TO-220 package), a power indicator LED (D5) with a current-limiting resistor (R1), and two screw terminal blocks (J1 and J2) to facilitate easy connection for the input (AC/DC) and output (DC).",
    specs: ["Constant current", "5V", "Cost-optimized"],
  },
];

// ---------------- Process ----------------

export const processSteps = [
  {
    step: "01",
    title: "Send Your Requirements",
    description:
      "Share your schematic, an idea, or even a napkin sketch. I confirm scope, stack-up, price and timeline.",
  },
  {
    step: "02",
    title: "Design & Review",
    description:
      "I lay out the board with clean routing, proper planes and DFM checks. You review renders before anything goes to fab.",
  },
  {
    step: "03",
    title: "Fab-Ready Files",
    description:
      "You receive Gerber, drill and assembly files verified for JLCPCB, PCBWay or your preferred fabricator.",
  },
  {
    step: "04",
    title: "Support Until It Works",
    description:
      "Board back from the fab? I help debug bring-up and handle reasonable revisions until you are satisfied.",
  },
];

// ---------------- Why Me ----------------

export const whyMe = [
  {
    title: "Fresh, Current Skills",
    description:
      "One year in, every project uses the latest tooling and fab capabilities — modern workflow, no legacy habits.",
  },
  {
    title: "Direct Communication",
    description:
      "You talk to the designer — no middlemen, no account managers. Most messages get a reply within 24 hours.",
  },
  {
    title: "Fair, Transparent Pricing",
    description:
      "Building my reputation means sharp prices while you still get senior-level care on every single board.",
  },
  {
    title: "Revisions Until It Fits",
    description:
      "Reasonable revisions are included with every order — we iterate together until the board is right.",
  },
];

// ---------------- Marquee ----------------

export const marqueeItems = [
  "KiCad",,
  "EasyEDA",,
  "Gerber",
  "BOM & Pick-and-Place",
  "DFM / DRC Review",
  "JLCPCB Ready",
  "PCBWay Ready",
  "Impedance Control",
];
