"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, ShieldCheck, Clock, Globe } from "lucide-react";
import { siteConfig } from "@/lib/site-config";
import { CircuitTraces } from "@/components/circuit-art";

export function Cta() {
  return (
    <section id="contact" className="scroll-mt-20 py-24 md:py-32">
      <div className="mx-auto w-full max-w-6xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 36 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
          className="relative overflow-hidden rounded-3xl border border-pcb-green/20 bg-gradient-to-b from-pcb-surface to-background px-8 py-16 text-center md:px-16 md:py-24"
        >
          {/* Decorations */}
          <CircuitTraces className="absolute -left-16 -top-10 h-72 w-[520px] text-pcb-green/10" />
          <CircuitTraces className="absolute -bottom-10 -right-16 h-72 w-[520px] rotate-180 text-pcb-gold/8" />
          <div
            className="pointer-events-none absolute left-1/2 top-0 h-56 w-[560px] -translate-x-1/2 rounded-full bg-pcb-green/10 blur-[130px]"
            aria-hidden="true"
          />

          <div className="relative">
            <p className="font-mono text-xs uppercase tracking-[0.3em] text-pcb-green">
              {"// "}
              get started
            </p>
            <h2 className="mx-auto mt-5 max-w-2xl font-display text-3xl font-semibold leading-tight tracking-tight md:text-5xl">
              Have a board in mind?{" "}
              <span className="bg-gradient-to-r from-pcb-green to-pcb-gold bg-clip-text text-transparent">
                Let&apos;s make it real.
              </span>
            </h2>
            <p className="mx-auto mt-5 max-w-xl text-base leading-relaxed text-muted-foreground md:text-lg">
              Send your schematic, idea or requirements today — you will get a
              quote and a clear timeline within 24 hours.
            </p>

            <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
              <a
                href={siteConfig.fiverr.url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-xl bg-pcb-green px-8 py-4 text-sm font-semibold text-primary-foreground shadow-[0_0_44px_-10px_rgba(52,211,153,0.9)] transition-all hover:-translate-y-0.5 hover:bg-pcb-emerald hover:shadow-[0_0_56px_-8px_rgba(52,211,153,1)]"
              >
                {siteConfig.fiverr.label}
                <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
              </a>
              <a
                href="#services"
                className="inline-flex items-center gap-2 rounded-xl border border-white/12 bg-white/[0.03] px-8 py-4 text-sm font-medium text-foreground transition-all hover:border-pcb-green/40 hover:bg-white/[0.06]"
              >
                Compare services
              </a>
            </div>

            <ul className="mt-12 flex flex-wrap items-center justify-center gap-x-8 gap-y-3 font-mono text-xs text-muted-foreground">
              <li className="flex items-center gap-2">
                <Clock className="h-3.5 w-3.5 text-pcb-green" aria-hidden="true" />
                Quote within 24 hours
              </li>
              <li className="flex items-center gap-2">
                <ShieldCheck
                  className="h-3.5 w-3.5 text-pcb-green"
                  aria-hidden="true"
                />
                NDA friendly
              </li>
              <li className="flex items-center gap-2">
                <Globe className="h-3.5 w-3.5 text-pcb-green" aria-hidden="true" />
                English &amp; Indonesian
              </li>
            </ul>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
