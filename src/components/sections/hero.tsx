"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowUpRight, ChevronDown, Sparkles } from "lucide-react";
import { siteConfig } from "@/lib/site-config";
import { FlowingTraces } from "@/components/circuit-art";

const container = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.12, delayChildren: 0.15 },
  },
};

const item = {
  hidden: { opacity: 0, y: 28 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] as const },
  },
};

export function Hero() {
  return (
    <section
      id="top"
      className="relative flex min-h-[100svh] items-center overflow-hidden"
    >
      {/* Background layers */}
      <div className="absolute inset-0" aria-hidden="true">
        <Image
          src="/images/hero-pcb.png"
          alt=""
          fill
          priority
          sizes="100vw"
          className="object-cover opacity-40"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/75 via-background/60 to-background" />
        <div className="absolute inset-0 bg-gradient-to-r from-background/80 via-transparent to-background/60" />
        <div className="absolute inset-0 bg-grid-pcb [mask-image:radial-gradient(ellipse_at_center,black_30%,transparent_75%)]" />
      </div>

      {/* Ambient glows */}
      <div
        className="pointer-events-none absolute -left-44 top-1/4 h-96 w-96 rounded-full bg-pcb-green/10 blur-[130px]"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute -right-44 bottom-1/4 h-96 w-96 rounded-full bg-pcb-gold/10 blur-[130px]"
        aria-hidden="true"
      />

      {/* Flowing traces at bottom */}
      <FlowingTraces className="absolute bottom-24 left-0 h-32 w-full text-pcb-green/20 md:bottom-16" />

      <div className="relative mx-auto w-full max-w-6xl px-6 pb-28 pt-32 md:pt-40">
        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="max-w-3xl"
        >
          {/* Availability badge */}
          <motion.div variants={item}>
            <span className="inline-flex items-center gap-2.5 rounded-full border border-pcb-green/25 bg-pcb-green/10 px-4 py-1.5 text-xs font-medium text-pcb-green">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-pcb-green opacity-60" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-pcb-green" />
              </span>
              Available for new projects on Fiverr
            </span>
          </motion.div>

          {/* Headline */}
          <motion.h1
            variants={item}
            className="mt-7 font-display text-4xl font-semibold leading-[1.08] tracking-tight sm:text-5xl md:text-6xl lg:text-7xl"
          >
            From schematic to a{" "}
            <span className="bg-gradient-to-r from-pcb-green via-pcb-emerald to-pcb-gold bg-clip-text text-transparent">
              board that works.
            </span>
          </motion.h1>

          {/* Subheadline */}
          <motion.p
            variants={item}
            className="mt-6 max-w-xl text-base leading-relaxed text-muted-foreground md:text-lg"
          >
            I design and prepare{" "}
            <span className="font-medium text-foreground">
              1, 2 &amp; 4-layer PCBs
            </span>{" "}
            for hobbyists, startups and engineers — clean layouts, DFM-checked
            files and fabrication-ready Gerbers, delivered fast and fairly.
          </motion.p>

          {/* CTAs */}
          <motion.div
            variants={item}
            className="mt-9 flex flex-wrap items-center gap-4"
          >
            <a
              href={siteConfig.fiverr.url}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-xl bg-pcb-green px-6 py-3.5 text-sm font-semibold text-primary-foreground shadow-[0_0_36px_-10px_rgba(52,211,153,0.8)] transition-all hover:-translate-y-0.5 hover:bg-pcb-emerald hover:shadow-[0_0_44px_-8px_rgba(52,211,153,1)]"
            >
              {siteConfig.fiverr.label}
              <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
            </a>
            <a
              href="#projects"
              className="inline-flex items-center gap-2 rounded-xl border border-white/12 bg-white/[0.03] px-6 py-3.5 text-sm font-medium text-foreground backdrop-blur transition-all hover:border-pcb-green/40 hover:bg-white/[0.06]"
            >
              <Sparkles className="h-4 w-4 text-pcb-gold" aria-hidden="true" />
              View my projects
            </a>
          </motion.div>

          {/* Stats */}
          <motion.dl
            variants={item}
            className="mt-16 grid grid-cols-2 gap-x-6 gap-y-8 border-t border-white/8 pt-8 md:grid-cols-4"
          >
            {siteConfig.stats.map((stat) => (
              <div key={stat.label} className="flex flex-col">
                <dt className="order-2 mt-1.5 text-xs leading-relaxed text-muted-foreground md:text-sm">
                  {stat.label}
                </dt>
                <dd className="order-1 font-display text-3xl font-semibold tracking-tight text-foreground md:text-4xl">
                  <span className="bg-gradient-to-r from-pcb-green to-pcb-gold bg-clip-text text-transparent">
                    {stat.value}
                  </span>
                </dd>
              </div>
            ))}
          </motion.dl>
        </motion.div>
      </div>

      {/* Scroll cue */}
      <motion.a
        href="#about"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.4, duration: 0.8 }}
        className="absolute bottom-6 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-1 text-muted-foreground transition-colors hover:text-pcb-green md:flex"
        aria-label="Scroll to about section"
      >
        <span className="font-mono text-[10px] uppercase tracking-[0.3em]">
          scroll
        </span>
        <motion.span
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
        >
          <ChevronDown className="h-4 w-4" aria-hidden="true" />
        </motion.span>
      </motion.a>
    </section>
  );
}
