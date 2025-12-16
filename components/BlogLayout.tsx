// components/BlogLayout.tsx
export default function BlogLayout({ children }: { children: React.ReactNode }) {
  return (
    <main className="prose prose-lg max-w-3xl mx-auto px-4 py-12 prose-headings:font-mono prose-headings:text-foreground prose-p:text-secondary prose-a:text-foreground prose-a:border-b prose-a:border-foreground hover:prose-a:text-accent prose-code:font-mono prose-code:bg-surface prose-code:text-foreground">
      {children}
    </main>
  );
}

