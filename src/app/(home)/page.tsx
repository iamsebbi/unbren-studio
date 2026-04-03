import HeroSection from "./_components/HeroSection";
import StudioProjects from "./_components/StudioProjects";
import TextRevealSection from "./_components/TextRevealSection";
import StudioServicesSection from "./_components/StudioServicesSection";
import StudioPricingSection from "./_components/StudioPricingSection";
import StudioWhyUsBentoSection from "./_components/StudioWhyUsBentoSection";
import StudioFAQSection from "./_components/StudioFAQSection";
import StudioCTASection from "./_components/StudioCTASection";

const page = () => {
  return (
    <div>
      <HeroSection />
      <TextRevealSection />
      <StudioProjects />
      <StudioServicesSection />
      <StudioWhyUsBentoSection />
      <StudioPricingSection />
      <StudioFAQSection />
      <StudioCTASection />
    </div>
  );
};

export default page;
