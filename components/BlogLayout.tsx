// components/BlogLayout.tsx
export default function BlogLayout({ children }: { children: React.ReactNode }) {
  return (
    <main className="prose prose-lg max-w-3xl mx-auto px-4 py-12 dark:prose-invert">
      {children}
    </main>
  );
}
