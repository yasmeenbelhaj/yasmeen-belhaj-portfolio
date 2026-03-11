import AboutHero from "../../components/about/AboutHero";
import PhilosophySection from "../../components/about/PhilosophySection";
import SignatureSection from "../../components/about/SignatureSection";
import SkillsSection from "../../components/about/SkillsSection";
import JourneySection from "../../components/about/JourneySection";
import AboutCTA from "../../components/about/AboutCTA";

export default function AboutPage() {
  return (
    <main className="bg-brand-cream text-brand-black">
      <AboutHero />
      <PhilosophySection />
      <SignatureSection />
      <SkillsSection />
      <JourneySection />
      <AboutCTA />
    </main>
  );
}