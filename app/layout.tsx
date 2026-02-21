import "./globals.css";
import type { Metadata } from "next";
import Nav from "../components/Nav";
import Footer from "../components/Footer";

export const metadata: Metadata = {
  title: "Yasmeen Belhaj",
  description: "Creative Technologist — web, real-time systems, AR/XR.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="h-full">
      <body className="min-h-full bg-white text-zinc-950 antialiased dark:bg-zinc-950 dark:text-zinc-50">
        <Nav />
        {children}
        <Footer />
      </body>
    </html>
  );
}