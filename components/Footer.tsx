const Footer = () => (
  <footer className="border-t border-line">
    <div className="mx-auto flex max-w-6xl flex-col gap-2 px-4 py-8 font-mono text-xs text-faint sm:flex-row sm:items-center sm:justify-between sm:px-6 lg:px-8">
      <span>© {new Date().getFullYear()} Akap Azmon</span>
      <a href="#top" className="transition-colors hover:text-ink">
        Back to top ↑
      </a>
    </div>
  </footer>
);

export default Footer;
