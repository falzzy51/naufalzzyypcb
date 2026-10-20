"use client";

import { motion } from "framer-motion";
import { Inbox, PenTool, FileCheck2, Wrench } from "lucide-react";
import { processSteps } from "@/lib/site-config";
import { SectionHeading } from "@/components/section-heading";

const icons = [Inbox, PenTool, FileCheck2, Wrench];

export function Process() {
  return (
    <section id="process" className="relative scroll-mt-20 py-24 md:py-32">
      <div className="relative mx-auto w-full max-w-6xl px-6">
        <SectionHeading
          eyebrow="how it works"
          title="From your idea to a working board"
          description="A simple, transparent four-step process — you always know exactly where your project stands."
        />

        <div className="relative grid gap-6 md:grid-cols-4 lg:gap-7">
          {/* Connector line (desktop) */}
          <div
            className="absolute left-0 right-0 top-[52px] hidden border-t border-dashed border-pcb-green/20 md:block"
            aria-hidden="true"
          />

          {processSteps.map((step, idx) => {
            const Icon = icons[idx];
            return (
              <motion.div
                key={step.step}
                initial={{ opacity: 0, y: 32 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{
                  duration: 0.7,
                  delay: idx * 0.12,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="relative rounded-2xl border border-white/8 bg-card p-6 transition-all duration-300 hover:-translate-y-1 hover:border-pcb-gold/30 md:p-7"
              >
                <div className="flex items-center justify-between">
                  <span className="relative z-10 flex h-12 w-12 items-center justify-center rounded-xl border border-pcb-gold/25 bg-pcb-gold/10 text-pcb-gold">
                    <Icon className="h-5 w-5" aria-hidden="true" />
                  </span>
                  <span
                    className="font-mono text-4xl font-semibold leading-none text-white/8"
                    aria-hidden="true"
                  >
                    {step.step}
                  </span>
                </div>
                <h3 className="mt-6 font-display text-base font-semibold tracking-tight md:text-lg">
                  {step.title}
                </h3>
                <p className="mt-2.5 text-sm leading-relaxed text-muted-foreground">
                  {step.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
