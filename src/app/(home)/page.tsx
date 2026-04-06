import HeroSection from "./_components/HeroSection";
import StudioProjects from "./_components/StudioProjects";
import ChatSection from "./_components/ChatSection";
import StudioServicesSection from "./_components/StudioServicesSection";
import StudioPricingSection from "./_components/StudioPricingSection";
import StudioWhyUsBentoSection from "./_components/StudioWhyUsBentoSection";
import StudioFAQSection from "./_components/StudioFAQSection";
import StudioCTASection from "./_components/StudioCTASection";

const page = () => {
  return (
    <div>
      <HeroSection />
      <ChatSection />
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
