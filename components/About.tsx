import Image from "next/image";
import SectionHeading from "./SectionHeading";
import { education, skills } from "@/lib/content";

const About = () => (
  <section id="about" className="border-t border-line bg-surface/50">
    <div className="mx-auto max-w-6xl px-4 py-24 sm:px-6 md:py-32 lg:px-8">
      <SectionHeading
        index="02"
        label="About"
        title={
          <>
            Clear contracts, boring deploys,{" "}
            <em className="text-accent">quick</em> responses.
          </>
        }
      />

      <div className="grid gap-14 lg:grid-cols-[18rem_1fr] lg:gap-16">
        <div>
          <div className="relative aspect-square w-48 overflow-hidden rounded-2xl border border-line sm:w-56 lg:w-full">
            <Image
              src="/akap.jpeg"
              alt="Portrait of Akap Azmon"
              fill
              sizes="(min-width: 1024px) 288px, 224px"
              className="object-cover"
            />
          </div>
          <p className="mt-6 max-w-sm leading-relaxed text-muted">
            I care about the parts of a system people only notice when they
            break: API contracts, data access, messaging and latency. I like
            well-documented services, test-driven changes and code reviews that
            leave everyone sharper.
          </p>
        </div>

        <div className="space-y-14">
          <div>
            <h3 className="font-mono text-xs uppercase tracking-[0.18em] text-faint">
              Toolbox
            </h3>
            <dl className="mt-6 grid gap-x-10 gap-y-8 sm:grid-cols-2">
              {skills.map((s) => (
                <div key={s.group} className="border-t border-line pt-4">
                  <dt className="text-sm font-medium">{s.group}</dt>
                  <dd className="mt-2 leading-relaxed text-muted">
                    {s.items.join(" · ")}
                  </dd>
                </div>
              ))}
            </dl>
          </div>

          <div>
            <h3 className="font-mono text-xs uppercase tracking-[0.18em] text-faint">
              Education
            </h3>
            <ul className="mt-6 grid gap-x-10 gap-y-8 sm:grid-cols-2">
              {education.map((e) => (
                <li key={e.title} className="border-t border-line pt-4">
                  <div className="font-serif text-2xl leading-tight">
                    {e.title}
                  </div>
                  <div className="mt-1 text-sm text-muted">
                    {e.school} ·{" "}
                    <span className="font-mono text-xs">{e.years}</span>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default About;
