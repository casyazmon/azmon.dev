import { stats } from "@/lib/content";

const Impact = () => (
  <section aria-label="Impact at a glance" className="border-y border-line">
    <div className="mx-auto grid max-w-6xl grid-cols-2 lg:grid-cols-4">
      {stats.map((stat, i) => (
        <div
          key={stat.label}
          className={`px-4 py-8 sm:px-6 md:py-10 lg:px-8 ${i % 2 === 1 ? "border-l border-line" : ""} ${
            i > 1 ? "border-t border-line lg:border-t-0" : ""
          } ${i === 2 ? "lg:border-l" : ""}`}
        >
          <div>
            <div className="font-serif text-5xl leading-none tracking-tight md:text-6xl">
              {stat.value}
              <span className="ml-1 font-mono text-base text-accent md:text-lg">{stat.unit}</span>
            </div>
            <p className="mt-3 max-w-[16rem] text-sm leading-snug text-muted">{stat.label}</p>
          </div>
        </div>
      ))}
    </div>
  </section>
);

export default Impact;
