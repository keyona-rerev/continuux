import { Layout } from "@/components/layout/Layout";
import { HeroSection } from "@/components/home/HeroSection";
import { ProblemSolutionSection } from "@/components/home/ProblemSolutionSection";
import { FeaturesSection } from "@/components/home/FeaturesSection";
import { PricingPreviewSection } from "@/components/home/PricingPreviewSection";
import { FAQPreviewSection } from "@/components/home/FAQPreviewSection";
import { CTASection } from "@/components/home/CTASection";

const Index = () => {
  return (
    <Layout>
      <HeroSection />
      <ProblemSolutionSection />
      <FeaturesSection />
      <PricingPreviewSection />
      <FAQPreviewSection />
      <CTASection />
    </Layout>
  );
};

export default Index;
