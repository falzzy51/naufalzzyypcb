import { CircuitBoard, ArrowUpRight } from "lucide-react";
import { siteConfig } from "@/lib/site-config";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="mt-auto border-t border-white/5 bg-pcb-surface/60">
      <div className="mx-auto w-full max-w-6xl px-6 py-14">
        <div className="grid gap-10 md:grid-cols-[1.4fr_1fr_1fr]">
          {/* Brand */}
          <div>
            <a
              href="#top"
              className="group inline-flex items-center gap-2.5"
              aria-label="Back to top"
            >
              <span className="flex h-9 w-9 items-center justify-center rounded-lg border border-pcb-green/25 bg-pcb-green/10 text-pcb-green">
                <CircuitBoard className="h-5 w-5" aria-hidden="true" />
              </span>
              <span className="font-display text-lg font-semibold tracking-tight">
                falzzy
                <span className="font-mono text-pcb-green">.circuits</span>
              </span>
            </a>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-muted-foreground">
              PCB design &amp; fabrication — 1, 2 &amp; 4-layer boards, from
              schematic to a board that works.
            </p>
            <p className="mt-4 font-mono text-xs text-muted-foreground">
              Available worldwide via{" "}
              <a
                href={siteConfig.fiverr.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-pcb-green transition-colors hover:text-pcb-emerald"
              >
                Fiverr
              </a>
            </p>
          </div>

          {/* Navigate */}
          <nav aria-label="Footer navigation">
            <h3 className="font-mono text-xs uppercase tracking-[0.25em] text-muted-foreground">
              Explore
            </h3>
            <ul className="mt-4 space-y-2.5">
              {siteConfig.navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-sm text-muted-foreground transition-colors hover:text-pcb-green"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          {/* Services */}
          <div>
            <h3 className="font-mono text-xs uppercase tracking-[0.25em] text-muted-foreground">
              Services
            </h3>
            <ul className="mt-4 space-y-2.5">
              {["1-Layer PCB", "2-Layer PCB", "4-Layer PCB"].map((s) => (
                <li key={s}>
                  <a
                    href="#services"
                    className="text-sm text-muted-foreground transition-colors hover:text-pcb-green"
                  >
                    {s}
                  </a>
                </li>
              ))}
              <li>
                <a
                  href={siteConfig.fiverr.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-sm font-medium text-pcb-green transition-colors hover:text-pcb-emerald"
                >
                  Start an order
                  <ArrowUpRight className="h-3.5 w-3.5" aria-hidden="true" />
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-3 border-t border-white/5 pt-7 sm:flex-row">
          <p className="text-xs text-muted-foreground">
            © {year} {siteConfig.name}. All rights reserved.
          </p>
          <p className="font-mono text-xs text-muted-foreground">
            Designed with precision — like every board.
          </p>
        </div>
      </div>
    </footer>
  );
}
