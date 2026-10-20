"use client";

import { motion } from "framer-motion";
import { Layers, Check, ArrowUpRight, Star } from "lucide-react";
import { services, siteConfig } from "@/lib/site-config";
import { SectionHeading } from "@/components/section-heading";
import { cn } from "@/lib/utils";

export function Services() {
  return (
    <section id="services" className="relative scroll-mt-20 py-24 md:py-32">
      {/* Ambient glow */}
      <div
        className="pointer-events-none absolute left-1/2 top-0 h-72 w-[640px] -translate-x-1/2 rounded-full bg-pcb-green/6 blur-[140px]"
        aria-hidden="true"
      />

      <div className="relative mx-auto w-full max-w-6xl px-6">
        <SectionHeading
          eyebrow="services"
          title="PCB work, from simple to complex"
          description="Fixed-scope packages with transparent pricing. Every order includes a design review and fabrication-ready files — no surprises."
        />

        <div className="grid gap-6 md:grid-cols-3 lg:gap-8">
          {services.map((service, idx) => (
            <motion.article
              key={service.code}
              initial={{ opacity: 0, y: 32 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{
                duration: 0.7,
                delay: idx * 0.12,
                ease: [0.22, 1, 0.36, 1],
              }}
              className={cn(
                "group relative flex flex-col rounded-2xl border bg-card p-7 transition-all duration-300 hover:-translate-y-1.5 md:p-8",
                service.featured
                  ? "border-pcb-green/40 shadow-[0_0_48px_-16px_rgba(52,211,153,0.45)]"
                  : "border-white/8 hover:border-pcb-green/25 hover:shadow-[0_16px_48px_-24px_rgba(52,211,153,0.4)]"
              )}
            >
              {service.featured && (
                <span className="absolute -top-3.5 left-1/2 flex -translate-x-1/2 items-center gap-1.5 whitespace-nowrap rounded-full bg-pcb-green px-3.5 py-1 font-mono text-[11px] font-semibold uppercase tracking-wider text-primary-foreground">
                  <Star className="h-3 w-3" aria-hidden="true" />
                  Most popular
                </span>
              )}

              {/* Top row */}
              <div className="flex items-start justify-between">
                <span
                  className={cn(
                    "flex h-12 w-12 items-center justify-center rounded-xl border transition-colors",
                    service.featured
                      ? "border-pcb-green/30 bg-pcb-green/15 text-pcb-green"
                      : "border-white/8 bg-white/[0.04] text-muted-foreground group-hover:border-pcb-green/25 group-hover:text-pcb-green"
                  )}
                >
                  <Layers className="h-5 w-5" aria-hidden="true" />
                </span>
                <span
                  className="font-mono text-5xl font-semibold leading-none text-white/8 transition-colors group-hover:text-pcb-green/15"
                  aria-hidden="true"
                >
                  {service.code}
                </span>
              </div>

              <p className="mt-6 font-mono text-[11px] uppercase tracking-[0.25em] text-pcb-gold">
                {service.layer}
              </p>
              <h3 className="mt-2 font-display text-xl font-semibold tracking-tight">
                {service.title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                {service.description}
              </p>

              {/* Features */}
              <ul className="mb-8 mt-6 space-y-2.5">
                {service.features.map((feature) => (
                  <li
                    key={feature}
                    className="flex items-start gap-2.5 text-sm text-foreground/85"
                  >
                    <Check
                      className="mt-0.5 h-4 w-4 shrink-0 text-pcb-green"
                      aria-hidden="true"
                    />
                    {feature}
                  </li>
                ))}
              </ul>

              {/* Footer */}
              <div className="mt-auto flex items-end justify-between border-t border-white/5 pt-6 [margin-top:auto]">
                <div>
                  <p className="text-xs text-muted-foreground">Starting at</p>
                  <p className="mt-1 font-display text-2xl font-semibold tracking-tight text-pcb-gold">
                    {service.price}
                  </p>
                </div>
                <a
                  href={siteConfig.fiverr.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={cn(
                    "inline-flex items-center gap-1.5 self-end rounded-lg px-4 py-2.5 text-sm font-medium transition-all",
                    service.featured
                      ? "bg-pcb-green text-primary-foreground hover:bg-pcb-emerald"
                      : "border border-pcb-green/30 bg-pcb-green/10 text-pcb-green hover:bg-pcb-green/20"
                  )}
                >
                  Order
                  <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
                </a>
              </div>
            </motion.article>
          ))}
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="mt-10 text-center font-mono text-xs text-muted-foreground"
        >
          * Prices are starting points — final quote depends on board size,
          complexity and quantity.
        </motion.p>
      </div>
    </section>
  );
}
