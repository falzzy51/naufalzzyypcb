"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { projects, siteConfig } from "@/lib/site-config";
import { SectionHeading } from "@/components/section-heading";

export function Projects() {
  return (
    <section
      id="projects"
      className="relative scroll-mt-20 border-t border-white/5 bg-pcb-surface/40 py-24 md:py-32"
    >
      <div className="relative mx-auto w-full max-w-6xl px-6">
        <SectionHeading
          eyebrow="portfolio"
          title="PCB projects I have delivered"
          description="A selection of boards that left my desk and came back from fabrication working. Each one designed, reviewed and documented end-to-end."
        />

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 lg:gap-7">
          {projects.map((project, idx) => (
            <motion.article
              key={project.title}
              initial={{ opacity: 0, y: 32 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{
                duration: 0.7,
                delay: (idx % 3) * 0.1,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="group relative flex flex-col overflow-hidden rounded-2xl border border-white/8 bg-card transition-all duration-300 hover:-translate-y-1.5 hover:border-pcb-green/30 hover:shadow-[0_20px_56px_-28px_rgba(52,211,153,0.5)]"
            >
              {/* Image */}
              <div className="relative aspect-[16/10] overflow-hidden">
                <Image
                  src={project.image}
                  alt={`${project.title} — ${project.layers} PCB project`}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                />
                <div
                  className="absolute inset-0 bg-gradient-to-t from-card via-transparent to-transparent"
                  aria-hidden="true"
                />
                <span className="absolute left-4 top-4 rounded-full border border-white/10 bg-black/55 px-3 py-1 font-mono text-[11px] font-medium text-white backdrop-blur">
                  {project.layers}
                </span>
                <span className="absolute right-4 top-4 rounded-full border border-pcb-gold/30 bg-black/55 px-3 py-1 font-mono text-[11px] font-medium text-pcb-gold backdrop-blur">
                  {project.category}
                </span>
              </div>

              {/* Body */}
              <div className="flex flex-1 flex-col p-6">
                <h3 className="font-display text-lg font-semibold tracking-tight transition-colors group-hover:text-pcb-green">
                  {project.title}
                </h3>
                <p className="mt-2.5 text-sm leading-relaxed text-muted-foreground">
                  {project.description}
                </p>

                <div className="mb-6 mt-4 flex flex-wrap gap-2">
                  {project.specs.map((spec) => (
                    <span
                      key={spec}
                      className="rounded-md border border-white/8 bg-white/[0.03] px-2 py-1 font-mono text-[11px] text-muted-foreground"
                    >
                      {spec}
                    </span>
                  ))}
                </div>

                <div className="mt-auto flex items-center justify-between border-t border-white/5 pt-4">
                  <span className="font-mono text-xs text-muted-foreground">
                    {project.year}
                  </span>
                  <a
                    href={siteConfig.fiverr.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 font-mono text-xs text-pcb-green/70 transition-colors group-hover:text-pcb-green"
                    aria-label={`Order a board similar to ${project.title} on Fiverr`}
                  >
                    Order similar
                    <ArrowUpRight className="h-3.5 w-3.5" aria-hidden="true" />
                  </a>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
