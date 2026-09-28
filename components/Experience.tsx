import { ArrowUpRight } from "lucide-react";
import SectionHeading from "./SectionHeading";
import { experience, profile } from "@/lib/content";

const Experience = () => (
  <section id="experience" className="mx-auto max-w-6xl px-4 py-24 sm:px-6 md:py-32 lg:px-8">
    <SectionHeading
      index="01"
      label="Experience"
      title={
        <>
          Six years of shipping services that <em className="text-accent">other teams</em> build on.
        </>
      }
    />

    <ol className="border-t border-line">
      {experience.map((role) => (
        <li
          key={role.company}
          className="grid gap-6 border-b border-line py-10 md:grid-cols-[14rem_1fr] md:gap-12 md:py-12 lg:grid-cols-[18rem_1fr]"
        >
          <div className="md:pt-1.5">
            <div className="flex items-center gap-2 font-mono text-xs text-faint">
              {role.current && <span className="live-dot h-1.5 w-1.5 rounded-full bg-accent" />}
              <span>
                {role.start} — {role.end}
              </span>
            </div>
            <div className="mt-3 font-medium">{role.company}</div>
            <div className="text-sm text-muted">{role.location}</div>
          </div>

          <div>
            <h3 className="font-serif text-3xl leading-tight tracking-tight md:text-4xl">{role.title}</h3>
            <ul className="mt-5 max-w-2xl space-y-3 text-muted">
              {role.points.map((point) => (
                <li key={point} className="relative pl-5 leading-relaxed">
                  <span className="absolute top-[0.7em] left-0 h-px w-2.5 bg-accent" />
                  {point}
                </li>
              ))}
            </ul>
            <ul className="mt-6 flex flex-wrap gap-2" aria-label="Technologies">
              {role.tech.map((t) => (
                <li key={t} className="rounded-full border border-line px-3 py-1 font-mono text-[11px] text-muted">
                  {t}
                </li>
              ))}
            </ul>
          </div>
        </li>
      ))}
    </ol>

    <a
      href={profile.resume}
      target="_blank"
      rel="noopener noreferrer"
      className="group mt-10 inline-flex items-center gap-2 text-sm font-medium"
    >
      <span className="border-b border-ink/30 pb-0.5 transition-colors group-hover:border-accent group-hover:text-accent">
        Full résumé (PDF)
      </span>
      <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
    </a>
  </section>
);

export default Experience;
