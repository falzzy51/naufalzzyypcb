import { marqueeItems } from "@/lib/site-config";

export function Marquee() {
  const doubled = [...marqueeItems, ...marqueeItems];
  return (
    <div
      className="marquee-group relative overflow-hidden border-y border-white/5 bg-pcb-surface/60 py-5"
      aria-label="Tools and capabilities"
    >
      {/* Edge fades */}
      <div
        className="pointer-events-none absolute inset-y-0 left-0 z-10 w-24 bg-gradient-to-r from-background to-transparent"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute inset-y-0 right-0 z-10 w-24 bg-gradient-to-l from-background to-transparent"
        aria-hidden="true"
      />

      <div className="flex w-max animate-marquee items-center gap-10">
        {doubled.map((item, i) => (
          <div key={`${item}-${i}`} className="flex items-center gap-10">
            <span className="whitespace-nowrap font-mono text-sm tracking-wide text-muted-foreground">
              {item}
            </span>
            <span
              className="h-1.5 w-1.5 rounded-full bg-pcb-gold/50"
              aria-hidden="true"
            />
          </div>
        ))}
      </div>

      {/* Screen-reader friendly static list */}
      <ul className="sr-only">
        {marqueeItems.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </div>
  );
}
