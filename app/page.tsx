import { BenefitsSection } from "@/components/landing/benefits-section";
import { ClosingSection } from "@/components/landing/closing-section";
import { FaqSection } from "@/components/landing/faq-section";
import { HeroSection } from "@/components/landing/hero-section";
import { MatchingSection } from "@/components/landing/matching-section";
import { PlatformSection } from "@/components/landing/platform-section";
import { ProcessSection } from "@/components/landing/process-section";
import { SiteFooter } from "@/components/landing/site-footer";
import { SiteHeader } from "@/components/landing/site-header";
import { SubjectsSection } from "@/components/landing/subjects-section";

export default function HomePage() {
  return (
    <>
      <a
        href="#main-content"
        className="sr-only z-50 rounded-md bg-primary px-4 py-3 text-primary-foreground focus:fixed focus:left-4 focus:top-4 focus:not-sr-only"
      >
        Skip to content
      </a>
      <SiteHeader />
      <main id="main-content">
        <HeroSection />
        <SubjectsSection />
        <MatchingSection />
        <ProcessSection />
        <BenefitsSection />
        <PlatformSection />
        <FaqSection />
        <ClosingSection />
      </main>
      <SiteFooter />
    </>
  );
}
