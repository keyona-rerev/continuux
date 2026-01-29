import { Layout } from "@/components/layout/Layout";
import { DarkHeroSection } from "@/components/ui/dark-hero-section";
import { SectionWrapper } from "@/components/ui/section-wrapper";
import { SectionHeader } from "@/components/ui/section-header";
import { Upload, FolderOpen, Users, Smartphone, Building, Scale, Activity } from "lucide-react";

const integrations = [
  { icon: Building, name: "Banks & Financial Institutions" },
  { icon: Scale, name: "Law Firms & Attorneys" },
  { icon: Users, name: "Social Service Organizations" },
  { icon: Smartphone, name: "Mobile Access" },
];

const HowItWorks = () => {
  return (
    <Layout>
      <DarkHeroSection
        badge={{
          icon: Activity,
          text: "Simple 3-Step Setup"
        }}
        headline={{
          line1: "Protection Made",
          line3: ""
        }}
        highlightedText="Simple"
        subtitle="In less than 5 minutes, you can secure your family's most important documents and give them the access they need, when they need it most."
        gridType="features"
        gridItems={[
          {
            icon: Upload,
            number: "1",
            title: "Upload Documents",
            description: "Securely add birth certificates, medical records, and emergency contacts in minutes"
          },
          {
            icon: FolderOpen,
            number: "2",
            title: "Choose Who Can Access",
            description: "Select trusted family members or legal contacts who can view your documents"
          },
          {
            icon: Users,
            number: "3",
            title: "Access Anywhere",
            description: "Your vault syncs across all devices and can be accessed instantly from anywhere"
          }
        ]}
        gridColumns={3}
      />

      <SectionWrapper background="muted" animation="radial-glow">
        <div className="container-wide">
          <SectionHeader badge="Integrations" title="Works with your existing ecosystem" description="Continuux integrates seamlessly with the services you already use" />
          <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {integrations.map((item) => (
              <div key={item.name} className="flex flex-col items-center p-6 rounded-[20px] bg-card border border-border text-center">
                <item.icon className="h-10 w-10 text-primary mb-4" />
                <p className="font-medium text-foreground">{item.name}</p>
              </div>
            ))}
          </div>
        </div>
      </SectionWrapper>
    </Layout>
  );
};

export default HowItWorks;
