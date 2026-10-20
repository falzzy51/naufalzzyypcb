"use client";

import { motion } from "framer-motion";
import { Sparkles, MessagesSquare, Wallet, RefreshCw } from "lucide-react";
import { whyMe } from "@/lib/site-config";
import { SectionHeading } from "@/components/section-heading";

const icons = [Sparkles, MessagesSquare, Wallet, RefreshCw];

export function WhyMe() {
  return (
    <section className="relative border-t border-white/5 bg-pcb-surface/40 py-24 md:py-32">
      <div className="relative mx-auto w-full max-w-6xl px-6">
        <SectionHeading
          eyebrow="why work with me"
          title="Experience you can trust, energy you will notice"
          description="I may be one year into this journey — and that is exactly why every order gets my full attention, from the first trace to the final Gerber."
        />

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {whyMe.map((item, idx) => {
            const Icon = icons[idx];
            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 32 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{
                  duration: 0.7,
                  delay: idx * 0.1,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="group rounded-2xl border border-white/8 bg-card p-7 transition-all duration-300 hover:-translate-y-1 hover:border-pcb-green/30"
              >
                <span className="flex h-11 w-11 items-center justify-center rounded-xl border border-pcb-green/25 bg-pcb-green/10 text-pcb-green transition-transform duration-300 group-hover:scale-110">
                  <Icon className="h-5 w-5" aria-hidden="true" />
                </span>
                <h3 className="mt-5 font-display text-base font-semibold tracking-tight md:text-lg">
                  {item.title}
                </h3>
                <p className="mt-2.5 text-sm leading-relaxed text-muted-foreground">
                  {item.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
