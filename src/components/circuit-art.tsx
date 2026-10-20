import { cn } from "@/lib/utils";

/**
 * Decorative PCB trace artwork (pure SVG, currentColor).
 * Use with low-opacity text color classes, e.g. `text-pcb-green/10`.
 */
export function CircuitTraces({ className }: { className?: string }) {
  return (
    <svg
      className={cn("pointer-events-none", className)}
      viewBox="0 0 800 420"
      fill="none"
      aria-hidden="true"
    >
      <g stroke="currentColor" strokeWidth="1.5">
        <path d="M0 60 H180 L220 100 H392" />
        <path d="M0 140 H120 L160 180 H352 L400 228 H612" />
        <path d="M800 80 H640 L600 120 H468" />
        <path d="M800 200 H700 L660 240 H548" />
        <path d="M60 420 V320 L100 280 H232" />
        <path d="M800 330 H720 L680 290 H600" />
      </g>
      <g fill="currentColor">
        <circle cx="400" cy="100" r="4" />
        <circle cx="620" cy="228" r="4" />
        <circle cx="460" cy="120" r="4" />
        <circle cx="240" cy="280" r="4" />
        <circle cx="540" cy="240" r="4" />
        <circle cx="592" cy="290" r="4" />
      </g>
      <g fill="none" stroke="currentColor" strokeWidth="1.5">
        <circle cx="400" cy="100" r="8" />
        <circle cx="620" cy="228" r="8" />
        <circle cx="460" cy="120" r="8" />
      </g>
    </svg>
  );
}

/**
 * Animated dashed traces — signals "flowing" via CSS `animate-flow`.
 * Example usage: <FlowingTraces className="text-pcb-green/25" />
 */
export function FlowingTraces({ className }: { className?: string }) {
  return (
    <svg
      className={cn("pointer-events-none", className)}
      viewBox="0 0 1200 160"
      fill="none"
      preserveAspectRatio="none"
      aria-hidden="true"
    >
      <g stroke="currentColor" strokeWidth="1.5" fill="none">
        <path
          d="M0 40 H300 L340 80 H700 L740 120 H1200"
          strokeDasharray="6 10"
          className="animate-flow"
        />
        <path
          d="M0 110 H220 L260 70 H560 L600 30 H1200"
          strokeDasharray="6 10"
          className="animate-flow"
          style={{ animationDelay: "-1.2s" }}
        />
      </g>
      <g fill="currentColor">
        <circle cx="700" cy="80" r="3.5" />
        <circle cx="560" cy="70" r="3.5" />
      </g>
    </svg>
  );
}
