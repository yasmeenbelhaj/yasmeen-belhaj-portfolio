import "./globals.css";
import type { Metadata, Viewport } from "next";
import Nav from "../components/Nav";
import Footer from "../components/Footer";
import { Source_Sans_3 } from "next/font/google";
import ScrollToTop from "../components/ScrollToTop";

const siteUrl = "https://yasmeenbelhaj.com";
const siteDescription =
  "Portfolio of Yasmeen Belhaj, a front-end engineer and interactive systems designer building responsive React applications and data-driven spatial experiences.";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default:
      "Yasmeen Belhaj | Front-End Engineer & Interactive Systems Designer",
    template: "%s | Yasmeen Belhaj",
  },
  description: siteDescription,
  applicationName: "Yasmeen Belhaj Portfolio",
  authors: [{ name: "Yasmeen Belhaj", url: siteUrl }],
  creator: "Yasmeen Belhaj",
  publisher: "Yasmeen Belhaj",
  keywords: [
    "Yasmeen Belhaj",
    "front-end engineer",
    "interactive systems designer",
    "UI engineer",
    "React developer",
    "Next.js developer",
    "TypeScript",
    "Unity",
    "spatial UX",
    "data visualisation",
    "creative technology",
  ],
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    url: siteUrl,
    title:
      "Yasmeen Belhaj | Front-End Engineer & Interactive Systems Designer",
    description: siteDescription,
    siteName: "Yasmeen Belhaj Portfolio",
    locale: "en_GB",
    images: [
      {
        url: "/opengraph-image",
        width: 1200,
        height: 630,
        alt: "Yasmeen Belhaj, Front-End Engineer and Interactive Systems Designer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title:
      "Yasmeen Belhaj | Front-End Engineer & Interactive Systems Designer",
    description: siteDescription,
    images: ["/opengraph-image"],
  },
  icons: {
    icon: "/favicon-2026.png",
    apple: "/apple-icon.png",
  },
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
  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Person",
        "@id": `${siteUrl}/#person`,
        name: "Yasmeen Belhaj",
        url: siteUrl,
        image: `${siteUrl}/images/about-portrait.jpg`,
        jobTitle: [
          "Front-End Engineer",
          "Interactive Systems Designer",
        ],
        address: {
          "@type": "PostalAddress",
          addressLocality: "Bristol",
          addressCountry: "GB",
        },
        sameAs: [
          "https://github.com/yasmeenbelhaj",
          "https://www.linkedin.com/in/yasmeenbelhaj",
        ],
        knowsAbout: [
          "Front-End Engineering",
          "React",
          "Next.js",
          "TypeScript",
          "Interactive Systems",
          "Unity",
          "Spatial UX",
          "Data Visualisation",
          "Information Design",
        ],
      },
      {
        "@type": "WebSite",
        "@id": `${siteUrl}/#website`,
        url: siteUrl,
        name: "Yasmeen Belhaj Portfolio",
        description: siteDescription,
        inLanguage: "en-GB",
        author: {
          "@id": `${siteUrl}/#person`,
        },
      },
    ],
  };

  return (
    <html lang="en" className={`h-full bg-brand-black ${sourceSans.variable}`}>
      <head>
        <link rel="icon" href="/favicon-2026.png?v=2" type="image/png" />
        <link rel="apple-touch-icon" href="/apple-icon.png?v=2" />
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
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
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
