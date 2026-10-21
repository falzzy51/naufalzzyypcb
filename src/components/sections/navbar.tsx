"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence, useScroll, useSpring } from "framer-motion";
import { Menu, X, ArrowUpRight, CircuitBoard } from "lucide-react";
import { siteConfig } from "@/lib/site-config";
import { cn } from "@/lib/utils";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 30,
    restDelta: 0.001,
  });

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  /**
   * Deterministic smooth-scroll for anchor links.
   * Closing the mobile menu (AnimatePresence) at the same instant as the
   * browser's default fragment navigation can cancel the scroll in some
   * browsers — so we handle it explicitly and scroll after the state update.
   */
  const handleAnchorClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    href: string
  ) => {
    if (!href.startsWith("#")) return;
    e.preventDefault();
    setOpen(false);
    const target = document.getElementById(href.slice(1));
    if (!target) return;
    window.requestAnimationFrame(() => {
      target.scrollIntoView({ behavior: "smooth", block: "start" });
      window.history.replaceState(null, "", href);
    });
  };

  return (
    <motion.header
      initial={{ y: -72, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-colors duration-300",
        scrolled
          ? "border-b border-white/5 bg-background/80 backdrop-blur-xl"
          : "border-b border-transparent bg-transparent"
      )}
    >
      <nav
        className="mx-auto flex h-16 w-full max-w-6xl items-center justify-between px-6 md:h-[72px]"
        aria-label="Main navigation"
      >
        {/* Brand */}
        <a
          href="#top"
          onClick={(e) => handleAnchorClick(e, "#top")}
          className="group flex items-center gap-2.5"
          aria-label={`${siteConfig.name} — home`}
        >
          <span className="flex h-9 w-9 items-center justify-center rounded-lg border border-pcb-green/25 bg-pcb-green/10 text-pcb-green transition-colors group-hover:bg-pcb-green/20">
            <CircuitBoard className="h-5 w-5" aria-hidden="true" />
          </span>
          <span className="font-display text-lg font-semibold tracking-tight">
            falzzy
            <span className="font-mono text-pcb-green">.circuits</span>
          </span>
        </a>

        {/* Desktop links */}
        <ul className="hidden items-center gap-1 md:flex">
          {siteConfig.navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                onClick={(e) => handleAnchorClick(e, link.href)}
                className="rounded-md px-3.5 py-2 text-sm text-muted-foreground transition-colors hover:bg-white/5 hover:text-foreground"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        {/* Desktop CTA */}
        <div className="hidden md:block">
          <a
            href={siteConfig.fiverr.url}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 rounded-lg bg-pcb-green px-4 py-2 text-sm font-semibold text-primary-foreground shadow-[0_0_24px_-8px_rgba(52,211,153,0.7)] transition-all hover:bg-pcb-emerald hover:shadow-[0_0_32px_-6px_rgba(52,211,153,0.9)]"
          >
            {siteConfig.fiverr.label}
            <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
          </a>
        </div>

        {/* Mobile toggle */}
        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          className="flex h-10 w-10 items-center justify-center rounded-lg border border-white/10 text-foreground md:hidden"
          aria-expanded={open}
          aria-controls="mobile-menu"
          aria-label={open ? "Close menu" : "Open menu"}
        >
          {open ? (
            <X className="h-5 w-5" aria-hidden="true" />
          ) : (
            <Menu className="h-5 w-5" aria-hidden="true" />
          )}
        </button>
      </nav>

      {/* Scroll progress */}
      <motion.div
        style={{ scaleX }}
        className="absolute bottom-0 left-0 right-0 h-px origin-left bg-gradient-to-r from-pcb-green via-pcb-emerald to-pcb-gold"
        aria-hidden="true"
      />

      {/* Mobile menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            id="mobile-menu"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.28, ease: "easeInOut" }}
            className="overflow-hidden border-b border-white/5 bg-background/95 backdrop-blur-xl md:hidden"
          >
            <ul className="space-y-1 px-6 py-4">
              {siteConfig.navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    onClick={(e) => handleAnchorClick(e, link.href)}
                    className="block rounded-lg px-3 py-2.5 text-sm text-muted-foreground transition-colors hover:bg-white/5 hover:text-foreground"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
              <li className="pt-2">
                <a
                  href={siteConfig.fiverr.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => setOpen(false)}
                  className="flex items-center justify-center gap-1.5 rounded-lg bg-pcb-green px-4 py-3 text-sm font-semibold text-primary-foreground"
                >
                  {siteConfig.fiverr.label}
                  <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
                </a>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
