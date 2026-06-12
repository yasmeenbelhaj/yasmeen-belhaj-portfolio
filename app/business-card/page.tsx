import BusinessCardExperience from "../../components/BusinessCardExperience";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Interactive Business Card",
  description:
    "An interactive digital business card for Yasmeen Belhaj, front-end engineer and interactive systems designer.",
  alternates: {
    canonical: "/business-card",
  },
  robots: {
    index: false,
    follow: true,
  },
  openGraph: {
    title: "Interactive Business Card | Yasmeen Belhaj",
    description:
      "An interactive digital business card for Yasmeen Belhaj, front-end engineer and interactive systems designer.",
    url: "/business-card",
  },
};

export default function BusinessCardPage() {
  return <BusinessCardExperience />;
}
