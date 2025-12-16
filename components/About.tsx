'use client';
import React from 'react';

const About = () => {
  const skills = {
    languages: ['Go', 'Java', 'Python', 'JavaScript', 'TypeScript', 'Kotlin'],
    frameworks: ['Spring Boot', 'Django', 'Flask', 'Node.js', 'Express.js'],
    databases: ['PostgreSQL', 'MongoDB', 'MySQL', 'Redis'],
    infrastructure: ['Docker', 'Kubernetes', 'AWS', 'Firebase', 'Git'],
  };

  return (
    <section id="about" className="flex flex-col items-center justify-center py-24 px-6 md:px-16 lg:px-24 w-full bg-background">
      <div className="max-w-5xl w-full">
        {/* Section Title */}
        <h2 className="text-4xl md:text-5xl font-light mb-4 text-foreground tracking-tight font-mono">
          <span className="text-secondary">$</span> cat about.json
        </h2>
        <p className="text-secondary mb-12 font-mono text-sm">
          // Developer profile and technical stack
        </p>

        {/* Introduction */}
        <div className="max-w-3xl mb-16 text-lg md:text-xl text-secondary font-light leading-relaxed">
          <p className="mb-6">
            Passionate backend software developer with a focus on building efficient, scalable systems.
            Based in Ottawa, I specialize in crafting robust APIs, optimizing data pipelines, and designing
            clean architectures that solve real-world problems.
          </p>
          <p>
            My journey began with curiosity about how systems work under the hood, evolving into expertise
            in backend development, cloud infrastructure, and distributed systems. I value simplicity,
            clarity, and code that speaks for itself.
          </p>
        </div>

        {/* Skills as Code Block */}
        <div className="bg-surface border border-border rounded-lg p-6 md:p-8 mb-12">
          <div className="font-mono text-sm md:text-base">
            <div className="line-numbers space-y-1">
              <div className="line text-foreground">
                <span className="text-secondary">const</span> skills = &#123;
              </div>

              {/* Languages */}
              <div className="line pl-4 text-foreground">
                <span className="text-secondary">languages:</span> [
              </div>
              {skills.languages.map((lang, idx) => (
                <div key={lang} className="line pl-8 text-accent">
                  "{lang}"{idx < skills.languages.length - 1 ? ',' : ''}
                </div>
              ))}
              <div className="line pl-4 text-foreground">],</div>

              {/* Frameworks */}
              <div className="line pl-4 text-foreground">
                <span className="text-secondary">frameworks:</span> [
              </div>
              {skills.frameworks.map((fw, idx) => (
                <div key={fw} className="line pl-8 text-accent">
                  "{fw}"{idx < skills.frameworks.length - 1 ? ',' : ''}
                </div>
              ))}
              <div className="line pl-4 text-foreground">],</div>

              {/* Databases */}
              <div className="line pl-4 text-foreground">
                <span className="text-secondary">databases:</span> [
              </div>
              {skills.databases.map((db, idx) => (
                <div key={db} className="line pl-8 text-accent">
                  "{db}"{idx < skills.databases.length - 1 ? ',' : ''}
                </div>
              ))}
              <div className="line pl-4 text-foreground">],</div>

              {/* Infrastructure */}
              <div className="line pl-4 text-foreground">
                <span className="text-secondary">infrastructure:</span> [
              </div>
              {skills.infrastructure.map((infra, idx) => (
                <div key={infra} className="line pl-8 text-accent">
                  "{infra}"{idx < skills.infrastructure.length - 1 ? ',' : ''}
                </div>
              ))}
              <div className="line pl-4 text-foreground">]</div>

              <div className="line text-foreground">&#125;;</div>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <button
          className="group font-medium px-8 py-4 bg-foreground text-background hover:bg-accent transition-all duration-300 border border-foreground hover:border-accent font-mono text-sm md:text-base inline-flex items-center gap-2"
          onClick={() => window.open('/akap azmon.pdf', '_blank')}
        >
          <span>$ download_resume</span>
          <span className="transform translate-x-0 group-hover:translate-x-1 transition-transform duration-300">→</span>
        </button>
      </div>
    </section>
  );
};

export default About;

