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
        <link
          rel="preconnect"
          href="https://use.typekit.net"
          crossOrigin="anonymous"
        />
        <link
          rel="preconnect"
          href="https://p.typekit.net"
          crossOrigin="anonymous"
        />
        <link rel="stylesheet" href="https://use.typekit.net/dpt5drr.css" />
      </head>

      <body className="flex min-h-screen flex-col bg-brand-black font-[var(--font-body)] text-white antialiased">
        <Nav />

        <main className="relative z-10 flex-1">{children}</main>

        <ScrollToTop />

        <div className="relative z-10">
          <Footer />
        </div>
      </body>
    </html>
  );
}