type Props = {
  index: string;
  label: string;
  title: React.ReactNode;
};

const SectionHeading = ({ index, label, title }: Props) => (
  <div className="mb-12 md:mb-16">
    <div className="flex items-center gap-3 font-mono text-xs uppercase tracking-[0.18em] text-faint">
      <span className="text-accent">{index}</span>
      <span className="h-px w-8 bg-line" />
      <span>{label}</span>
    </div>
    <h2 className="mt-5 max-w-3xl font-serif text-4xl leading-[1.05] tracking-tight md:text-6xl">
      {title}
    </h2>
  </div>
);

export default SectionHeading;
