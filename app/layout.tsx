import "./globals.css";
import type { Metadata } from "next";
import Nav from "../components/Nav";
import Footer from "../components/Footer";
import { Source_Sans_3 } from "next/font/google";
import ScrollToTop from "../components/ScrollToTop";

export const metadata: Metadata = {
  title: "Yasmeen Belhaj",
  description: "Creative Technologist — web, real-time systems, AR/XR.",
};

const sourceSans = Source_Sans_3({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-body",
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`h-full ${sourceSans.variable}`}>
      <head>
        {/* Helps Safari connect earlier (optional but good) */}
        <link rel="preconnect" href="https://use.typekit.net" crossOrigin="anonymous" />
        <link rel="preconnect" href="https://p.typekit.net" crossOrigin="anonymous" />

        {/* Your Adobe kit (The Seasons) */}
        <link rel="stylesheet" href="https://use.typekit.net/dpt5drr.css" />
      </head>

      <body className="min-h-full bg-white font-[var(--font-body)] text-zinc-950 antialiased dark:bg-zinc-950 dark:text-zinc-50">
        <Nav />
        {children}
        <ScrollToTop/>
        <Footer />
      </body>
    </html>
  );
}