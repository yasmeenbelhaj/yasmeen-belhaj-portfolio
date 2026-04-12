import "./globals.css";
import type { Metadata, Viewport } from "next";
import Nav from "../components/Nav";
import Footer from "../components/Footer";
import { Source_Sans_3 } from "next/font/google";
import ScrollToTop from "../components/ScrollToTop";

export const metadata: Metadata = {
  title: "Yasmeen Belhaj",
  description: "Creative Technologist — web, real-time systems, AR/XR.",
  //icons: {
    //icon: '/icon-v2.png',
    //apple: '/apple-icon.png',
  //},
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
  themeColor: "#000000",
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
    <html lang="en" className={`h-full bg-brand-black ${sourceSans.variable}`}>
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

      <body className="flex min-h-[100dvh] flex-col bg-brand-black font-[var(--font-body)] text-white antialiased">
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