"use client";

import { motion } from "framer-motion";
import { MapPin, Clock, Check, ArrowUpRight, BadgeCheck } from "lucide-react";
import { siteConfig } from "@/lib/site-config";
import { SectionHeading } from "@/components/section-heading";
import { CircuitTraces } from "@/components/circuit-art";

const strengths = [
  "KiCad, EasyEDA & Altium workflow",
  "DFM / DRC review on every design",
  "Gerber, BOM & pick-and-place files",
  "Fab-ready for JLCPCB & PCBWay",
  "English & Indonesian communication",
  "Revisions until the board works",
];

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] as const },
  },
};

export function About() {
  return (
    <section id="about" className="relative scroll-mt-20 overflow-hidden py-24 md:py-32">
      <CircuitTraces className="absolute -right-24 top-10 h-80 w-[560px] rotate-180 text-pcb-green/8" />

      <div className="relative mx-auto grid w-full max-w-6xl gap-12 px-6 lg:grid-cols-[360px_1fr] lg:gap-16">
        {/* Profile card */}
        <motion.aside
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="lg:sticky lg:top-28"
        >
          <div className="rounded-2xl border border-white/8 bg-pcb-surface/80 p-8 backdrop-blur">
            {/* Monogram avatar */}
            <div className="relative inline-flex">
              <div
                className="absolute -inset-1 rounded-2xl bg-gradient-to-br from-pcb-green/40 via-transparent to-pcb-gold/40 blur-sm"
                aria-hidden="true"
              />
              <div className="relative flex h-24 w-24 items-center justify-center rounded-2xl border border-pcb-green/30 bg-gradient-to-br from-pcb-green/15 to-pcb-gold/10">
                <span className="font-display text-3xl font-semibold tracking-tight text-pcb-green">
                  AP
                </span>
              </div>
              <span
                className="absolute -bottom-1.5 -right-1.5 flex h-7 w-7 items-center justify-center rounded-full border-4 border-background bg-pcb-green"
                aria-hidden="true"
              >
                <BadgeCheck className="h-3.5 w-3.5 text-primary-foreground" />
              </span>
            </div>

            <h3 className="mt-6 font-display text-xl font-semibold tracking-tight">
              {siteConfig.name}
            </h3>
            <p className="mt-1 text-sm text-muted-foreground">
              {siteConfig.role}
            </p>

            <dl className="mt-6 space-y-3.5 border-t border-white/5 pt-6 text-sm">
              <div className="flex items-center gap-2.5 text-muted-foreground">
                <MapPin
                  className="h-4 w-4 shrink-0 text-pcb-green"
                  aria-hidden="true"
                />
                <dt className="sr-only">Location</dt>
                <dd>{siteConfig.location}</dd>
              </div>
              <div className="flex items-center gap-2.5 text-muted-foreground">
                <Clock
                  className="h-4 w-4 shrink-0 text-pcb-green"
                  aria-hidden="true"
                />
                <dt className="sr-only">Response time</dt>
                <dd>Replies within 24 hours</dd>
              </div>
              <div className="flex flex-wrap items-center gap-2 pt-1">
                <dt className="sr-only">Languages</dt>
                {siteConfig.languages.map((lang) => (
                  <dd
                    key={lang}
                    className="rounded-md border border-white/8 bg-white/[0.04] px-2.5 py-1 font-mono text-[11px] text-muted-foreground"
                  >
                    {lang}
                  </dd>
                ))}
              </div>
            </dl>

            <div className="mt-6 rounded-xl border border-pcb-green/20 bg-pcb-green/10 px-4 py-3">
              <p className="flex items-center gap-2 text-xs font-medium text-pcb-green">
                <span className="relative flex h-2 w-2" aria-hidden="true">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-pcb-green opacity-60" />
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-pcb-green" />
                </span>
                Open for orders this month
              </p>
            </div>
          </div>
        </motion.aside>

        {/* Copy */}
        <div>
          <SectionHeading
            align="left"
            eyebrow="about me"
            title="A fresh engineer, obsessed with clean boards"
          />

          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-80px" }}
            transition={{ staggerChildren: 0.1 }}
            className="space-y-5 text-base leading-relaxed text-muted-foreground md:text-lg"
          >
            <motion.p variants={fadeUp}>
              Hi, I&apos;m {siteConfig.firstName} — a PCB designer from
              Indonesia with{" "}
              <span className="font-medium text-foreground">
                one year of full-time, hands-on experience
              </span>{" "}
              a PCB design enthusiast specializing in PCB layout and routing using KiCad. I can help turn your existing schematic into a clean and well-organized PCB layout, including component placement, trace routing, ground planes, and basic design rule checks
            </motion.p>
            <motion.p variants={fadeUp}>
              My focus is on creating PCB layouts that are neat, practical, and easy to manufacture. If you already have a schematic and need someone to handle the PCB layout and routing, feel free to contact me. Let's turn your schematic into a ready-to-manufacture PCB!
            </motion.p>
            <motion.p variants={fadeUp}>
              Every board I deliver is DFM-checked, documented and versioned.
              My goal is simple:{" "}
              <span className="font-medium text-foreground">
                a board that works the first time
              </span>
              , and a client who comes back for the next one.
            </motion.p>
          </motion.div>

          {/* Strengths checklist */}
          <motion.ul
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-60px" }}
            transition={{ staggerChildren: 0.06 }}
            className="mt-10 grid gap-x-8 gap-y-3.5 sm:grid-cols-2"
          >
            {strengths.map((s) => (
              <motion.li
                key={s}
                variants={fadeUp}
                className="flex items-start gap-3 text-sm text-foreground/90"
              >
                <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full border border-pcb-green/30 bg-pcb-green/10">
                  <Check
                    className="h-3 w-3 text-pcb-green"
                    aria-hidden="true"
                  />
                </span>
                {s}
              </motion.li>
            ))}
          </motion.ul>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-10"
          >
            <a
              href={siteConfig.fiverr.url}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 border-b border-pcb-green/40 pb-1 font-mono text-sm text-pcb-green transition-colors hover:border-pcb-green hover:text-pcb-emerald"
            >
              Discuss your project on Fiverr
              <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
