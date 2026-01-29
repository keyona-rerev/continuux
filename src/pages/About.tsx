import { Layout } from "@/components/layout/Layout";
import { DarkHeroSection } from "@/components/ui/dark-hero-section";
import { SectionWrapper } from "@/components/ui/section-wrapper";
import { SectionHeader } from "@/components/ui/section-header";
import { Shield, Heart, Lock, Users, Eye, Sparkles } from "lucide-react";

const values = [
  { icon: Shield, title: "Security First", description: "Your data protection is our top priority. We use bank-level encryption." },
  { icon: Heart, title: "Compassion", description: "We understand the emotional weight of family preparedness and treat it with care." },
  { icon: Lock, title: "Privacy", description: "Your information is yours. We never sell or share your data." },
  { icon: Users, title: "Family Focus", description: "Built for real families facing real challenges, not just tech enthusiasts." },
  { icon: Eye, title: "Transparency", description: "Clear pricing, clear policies, clear communication. No surprises." },
  { icon: Sparkles, title: "Simplicity", description: "Powerful features wrapped in an interface anyone can use." },
];

const timeline = [
  { year: "2023", event: "Continuux founded with a mission to help families stay connected" },
  { year: "2024", event: "Launched beta with 1,000 founding families, achieved SOC 2 certification" },
  { year: "2025", event: "Reached 10,000 families protected, expanded partnerships nationwide" },
];

const About = () => {
  return (
    <Layout>
      <DarkHeroSection
        badge={{
          icon: Heart,
          text: "Our Mission"
        }}
        headline={{
          line1: "Built to",
          line3: "Families Like Yours"
        }}
        highlightedText="Protect"
        subtitle="We believe every family deserves the peace of mind that comes from being prepared. Continuux was created to give families facing uncertainty the one thing they need most: control."
        gridType="stats"
        gridItems={[
          { number: "10,000+", label: "Families Protected" },
          { number: "50,000+", label: "Documents Secured" },
          { number: "24/7", label: "Always Accessible" }
        ]}
        gridColumns={3}
      />

      <SectionWrapper background="muted" animation="dot-pulse">
        <div className="container-wide">
          <SectionHeader badge="Our Values" title="What we stand for" />
          <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {values.map((v) => (
              <div key={v.title} className="p-6 rounded-[20px] bg-card border border-border">
                <v.icon className="h-10 w-10 text-primary mb-4" />
                <h3 className="font-semibold text-foreground">{v.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{v.description}</p>
              </div>
            ))}
          </div>
        </div>
      </SectionWrapper>

      <SectionWrapper background="default" animation="diagonal-lines">
        <div className="container-wide max-w-3xl">
          <SectionHeader badge="Our Journey" title="Company timeline" />
          <div className="mt-12 space-y-6">
            {timeline.map((item, i) => (
              <div key={i} className="flex gap-6 items-start">
                <div className="text-2xl font-bold text-primary">{item.year}</div>
                <div className="flex-1 pb-6 border-b border-border"><p className="text-foreground">{item.event}</p></div>
              </div>
            ))}
          </div>
        </div>
      </SectionWrapper>
    </Layout>
  );
};

export default About;
