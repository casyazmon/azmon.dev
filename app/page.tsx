import About from "@/components/About";
import Contact from "@/components/Contact";
import Experience from "@/components/Experience";
import Hero from "@/components/Hero";
import Impact from "@/components/Impact";
import JsonLd from "@/components/JsonLd";
import Writing from "@/components/Writing";
import { education, experience, profile, skills } from "@/lib/content";
import { getAllPosts } from "@/lib/posts";

const person = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: profile.name,
  jobTitle: profile.role,
  url: "https://azmon.dev",
  email: `mailto:${profile.email}`,
  sameAs: [profile.linkedin, profile.github],
  address: { "@type": "PostalAddress", addressRegion: "ON", addressCountry: "CA" },
  worksFor: experience
    .filter((role) => role.current)
    .map((role) => ({ "@type": "Organization", name: role.company })),
  alumniOf: { "@type": "CollegeOrUniversity", name: education[0].school },
  knowsAbout: skills.flatMap((s) => s.items),
};

export default function HomePage() {
  const posts = getAllPosts();
  const hasPosts = posts.length > 0;

  return (
    <>
      <JsonLd data={person} />
      <Hero />
      <Impact />
      <Experience />
      <About />
      {hasPosts && <Writing posts={posts} index="03" />}
      <Contact index={hasPosts ? "04" : "03"} />
    </>
  );
}
