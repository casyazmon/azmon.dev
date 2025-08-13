import type { Metadata } from "next";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import "./../styles/globals.css";
import ThemeProvider from "@/components/ThemeProvider";


export const metadata: Metadata = {
  title: "Akap Azmon",
  description: "Software Engineer",
};

export default function RootLayout({   children, }: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="bg-white text-gray-900 dark:bg-gray-900 dark:text-gray-100">
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem={true}
          disableTransitionOnChange={true}>
          <Header/>
          <main className=" mx-auto min-h-screen">
            {children}
          </main>
          <Footer/>
        </ThemeProvider>
      </body>
      
    </html>
  );
}
