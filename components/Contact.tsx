import { ArrowUpRight } from "lucide-react";
import CopyEmail from "./CopyEmail";
import { profile } from "@/lib/content";

const elsewhere = [
  { label: "LinkedIn", href: profile.linkedin },
  { label: "GitHub", href: profile.github },
  { label: "Résumé", href: profile.resume },
];

const Contact = ({ index }: { index: string }) => (
  <section id="contact" className="border-t border-line">
    <div className="mx-auto max-w-6xl px-4 py-24 sm:px-6 md:py-36 lg:px-8">
      <div className="flex items-center gap-3 font-mono text-xs uppercase tracking-[0.18em] text-faint">
        <span className="text-accent">{index}</span>
        <span className="h-px w-8 bg-line" />
        <span>Contact</span>
      </div>

      <h2 className="mt-5 max-w-4xl font-serif text-5xl leading-[1] tracking-tight md:text-7xl lg:text-8xl">
        Need a backend engineer? <em className="text-accent">Let&apos;s talk.</em>
      </h2>

      <p className="mt-8 max-w-xl text-lg leading-relaxed text-muted">
        I&apos;m open to conversations about backend and platform roles, as well as API and performance
        work. Email is the fastest way to reach me.
      </p>

      <div className="mt-12 flex flex-col items-start gap-5 sm:flex-row sm:items-center">
        <a
          href={`mailto:${profile.email}`}
          className="group inline-flex items-center gap-3 font-serif text-3xl tracking-tight sm:text-4xl md:text-5xl"
        >
          <span className="border-b-2 border-accent pb-1 transition-colors group-hover:text-accent">
            {profile.email}
          </span>
          <ArrowUpRight className="h-7 w-7 text-accent transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
        </a>
        <CopyEmail email={profile.email} />
      </div>

      <ul className="mt-16 flex flex-wrap gap-x-8 gap-y-3 border-t border-line pt-8">
        {elsewhere.map((link) => (
          <li key={link.label}>
            <a
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-1 text-sm text-muted transition-colors hover:text-ink"
            >
              {link.label}
              <ArrowUpRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>
          </li>
        ))}
      </ul>
    </div>
  </section>
);

export default Contact;
