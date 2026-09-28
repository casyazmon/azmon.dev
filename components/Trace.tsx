"use client";
import { useState } from "react";
import { RotateCcw } from "lucide-react";

/**
 * An illustrative distributed-trace waterfall: one request fanning out across
 * services, finishing inside a 100 ms budget. Bars grow in on mount; "replay"
 * remounts the rows to run it again.
 */
type Span = {
  name: string;
  depth: number;
  start: number;
  duration: number;
  async?: boolean;
};

const BUDGET = 100;
const MS = 14; // animation delay per simulated millisecond

const spans: Span[] = [
  { name: "api-gateway", depth: 0, start: 0, duration: 84 },
  { name: "auth-service", depth: 1, start: 2, duration: 9 },
  { name: "quote-service", depth: 1, start: 12, duration: 66 },
  { name: "pg.query", depth: 2, start: 15, duration: 14 },
  { name: "pricing", depth: 2, start: 31, duration: 27 },
  { name: "redis.set", depth: 2, start: 60, duration: 3 },
  { name: "kafka.publish", depth: 2, start: 64, duration: 5, async: true },
];

const total = spans[0].duration;

const Trace = () => {
  const [run, setRun] = useState(0);

  return (
    <figure className="overflow-hidden rounded-2xl border border-line bg-surface/60 shadow-[0_1px_0_0_var(--line),0_30px_60px_-30px_rgb(0_0_0/0.25)]">
      <div className="flex items-center justify-between gap-3 border-b border-line px-4 py-3 font-mono text-xs sm:px-5">
        <div className="flex min-w-0 items-center gap-2">
          <span className="rounded bg-accent-soft px-1.5 py-0.5 font-medium text-accent">POST</span>
          <span className="truncate">/v1/quotes</span>
        </div>
        <div className="flex shrink-0 items-center gap-3 text-muted">
          <span className="hidden sm:inline">200 OK</span>
          <span className="text-ink">{total} ms</span>
          <button
            type="button"
            onClick={() => setRun((r) => r + 1)}
            className="grid h-6 w-6 place-items-center rounded-full transition-colors hover:bg-line hover:text-ink"
            aria-label="Replay trace animation"
          >
            <RotateCcw className="h-3.5 w-3.5" />
          </button>
        </div>
      </div>

      <div key={run} className="px-4 pt-4 pb-3 sm:px-5">
        {/* Time axis */}
        <div className="grid grid-cols-[8rem_1fr] gap-3 font-mono text-[10px] text-faint sm:grid-cols-[10rem_1fr]">
          <span>span</span>
          <div className="relative h-4">
            {[0, 25, 50, 75].map((t) => (
              <span key={t} className="absolute -translate-x-1/2 first:translate-x-0" style={{ left: `${t}%` }}>
                {t}
              </span>
            ))}
            <span className="absolute right-0 text-accent">{BUDGET}ms</span>
          </div>
        </div>

        <ul className="mt-2 space-y-1.5">
          {spans.map((span) => (
            <li
              key={span.name}
              className="grid grid-cols-[8rem_1fr] items-center gap-3 font-mono text-[11px] sm:grid-cols-[10rem_1fr] sm:text-xs"
            >
              <span className="truncate text-muted" style={{ paddingLeft: `${span.depth * 0.7}rem` }}>
                {span.depth > 0 && <span className="text-faint">└ </span>}
                {span.name}
              </span>
              <div className="relative h-6">
                {/* Gridlines + budget line */}
                {[25, 50, 75].map((t) => (
                  <span key={t} className="absolute inset-y-0 w-px bg-line/70" style={{ left: `${t}%` }} />
                ))}
                <span className="absolute inset-y-0 right-0 border-r border-dashed border-accent/60" />
                <span
                  className={`trace-bar absolute top-1 bottom-1 rounded-[3px] ${
                    span.depth === 0 ? "bg-ink" : span.async ? "border border-dashed border-accent bg-accent-soft" : "bg-accent"
                  }`}
                  style={{
                    left: `${(span.start / BUDGET) * 100}%`,
                    width: `${Math.max((span.duration / BUDGET) * 100, 1.5)}%`,
                    animationDelay: `${span.start * MS}ms`,
                    animationDuration: `${Math.max(span.duration * MS, 250)}ms`,
                  }}
                />
                <span
                  className="trace-fade absolute top-1/2 -translate-y-1/2 pl-1.5 text-[10px] text-faint"
                  style={{
                    left: `${((span.start + span.duration) / BUDGET) * 100}%`,
                    animationDelay: `${(span.start + span.duration) * MS}ms`,
                  }}
                >
                  {span.duration < 30 && `${span.duration}`}
                </span>
              </div>
            </li>
          ))}
        </ul>
      </div>

      <figcaption className="flex items-center justify-between gap-4 border-t border-line px-4 py-3 text-xs text-faint sm:px-5">
        <span>An illustrative request trace: the path I spend my days making shorter.</span>
        <span className="hidden shrink-0 items-center gap-1.5 font-mono sm:flex">
          <span className="inline-block h-2 w-3 rounded-[2px] border border-dashed border-accent bg-accent-soft" />
          async
        </span>
      </figcaption>
    </figure>
  );
};

export default Trace;
