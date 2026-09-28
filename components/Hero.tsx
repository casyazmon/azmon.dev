import { ArrowDown, ArrowUpRight } from "lucide-react";
import Trace from "./Trace";
import { profile } from "@/lib/content";

const Hero = () => (
  <section className="relative overflow-hidden">
    {/* Soft accent glow */}
    <div
      aria-hidden="true"
      className="pointer-events-none absolute -top-40 right-[-10%] h-[520px] w-[520px] rounded-full bg-accent-soft blur-3xl"
    />

    <div className="relative mx-auto grid max-w-6xl items-center gap-14 px-4 pt-16 pb-20 sm:px-6 md:pt-24 lg:grid-cols-[1.1fr_1fr] lg:gap-16 lg:px-8 lg:pt-28 lg:pb-28">
      <div>
        <div className="rise flex items-center gap-2.5 text-sm text-muted">
          <span className="live-dot h-2 w-2 rounded-full bg-accent" />
          {profile.role} · {profile.location}
        </div>

        <h1
          className="rise mt-7 font-serif text-[3.25rem] leading-[0.98] tracking-tight sm:text-7xl lg:text-[5.5rem]"
          style={{ animationDelay: "80ms" }}
        >
          Backend systems that stay <em className="text-accent">fast</em> under load.
        </h1>

        <p
          className="rise mt-7 max-w-xl text-lg leading-relaxed text-muted"
          style={{ animationDelay: "160ms" }}
        >
          I&apos;m Akap, a backend engineer with 6+ years building Java and Spring Boot microservices,
          REST APIs and event-driven systems on AWS. Currently at{" "}
          <span className="text-ink">Intact Financial</span>, working on API performance, Kafka-based
          integration and service contracts that other teams can rely on.
        </p>

        <div className="rise mt-10 flex flex-wrap items-center gap-3" style={{ animationDelay: "240ms" }}>
          <a
            href={`mailto:${profile.email}`}
            className="group inline-flex items-center gap-2 rounded-full bg-ink px-6 py-3 text-sm font-medium text-bg transition-transform hover:-translate-y-0.5"
          >
            Get in touch
            <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </a>
          <a
            href="#experience"
            className="group inline-flex items-center gap-2 rounded-full px-5 py-3 text-sm text-muted transition-colors hover:text-ink"
          >
            See my work
            <ArrowDown className="h-4 w-4 transition-transform group-hover:translate-y-0.5" />
          </a>
        </div>
      </div>

      <div className="rise" style={{ animationDelay: "320ms" }}>
        <Trace />
      </div>
    </div>
  </section>
);

export default Hero;
