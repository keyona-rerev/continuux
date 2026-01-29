import { Layout } from "@/components/layout/Layout";
import { SectionWrapper } from "@/components/ui/section-wrapper";
import { SectionHeader } from "@/components/ui/section-header";
import { CTASection } from "@/components/home/CTASection";
import { Upload, FolderOpen, Users, Activity, Building, Scale, Smartphone } from "lucide-react";

const steps = [
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
];

const ecosystem = [
  { icon: Building, name: "Banks & Financial Institutions" },
  { icon: Scale, name: "Law Firms & Attorneys" },
  { icon: Users, name: "Social Service Organizations" },
  { icon: Smartphone, name: "Mobile Access" },
];

const HowItWorks = () => {
  return (
    <Layout>
      {/* Hero Section - matching About page style */}
      <section
        className="relative min-h-[70vh] flex items-center overflow-hidden py-32"
        style={{
          background: "linear-gradient(135deg, #1a0a2e 0%, #0f0a1e 50%, #1a0a2e 100%)",
        }}
      >
        <div className="absolute inset-0 pointer-events-none">
          <div 
            className="absolute top-0 left-[20%] w-[600px] h-[600px] rounded-full blur-[120px]"
            style={{ backgroundColor: "rgba(99, 102, 241, 0.1)" }}
          />
          <div 
            className="absolute top-[20%] right-[20%] w-[500px] h-[500px] rounded-full blur-[120px]"
            style={{ backgroundColor: "rgba(168, 85, 247, 0.08)" }}
          />
        </div>

        <div className="container mx-auto px-5 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div 
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-semibold mb-6"
              style={{
                backgroundColor: "rgba(99, 102, 241, 0.15)",
                borderWidth: "1px",
                borderColor: "rgba(99, 102, 241, 0.3)",
                color: "#a5b4fc",
              }}
            >
              <Activity className="w-4 h-4" />
              Simple 3-Step Setup
            </div>

            <h1 
              className="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight tracking-tight text-white mb-8"
              style={{ letterSpacing: "-1px" }}
            >
              Protection Made{" "}
              <span 
                className="bg-clip-text text-transparent"
                style={{
                  backgroundImage: "linear-gradient(135deg, #6366f1 0%, #a855f7 100%)",
                }}
              >
                Simple
              </span>
            </h1>

            <p 
              className="text-lg md:text-xl leading-relaxed max-w-3xl mx-auto"
              style={{ color: "#c7c7c7" }}
            >
              In less than 5 minutes, you can secure your family's most important documents and give them the access they need, when they need it most.
            </p>
          </div>
        </div>
      </section>

      {/* Steps Section */}
      <SectionWrapper background="muted" animation="gradient-sweep">
        <div className="container-wide">
          <SectionHeader badge="How It Works" title="Three simple steps to protect your family" />
          <div className="mt-12 grid md:grid-cols-3 gap-6 md:gap-8">
            {steps.map((step) => (
              <div
                key={step.number}
                className="p-8 rounded-[20px] bg-card border border-border text-center"
              >
                <div 
                  className="w-14 h-14 rounded-xl flex items-center justify-center mx-auto mb-5 bg-primary/10"
                >
                  <span className="text-xl font-bold text-primary">
                    {step.number}
                  </span>
                </div>
                <h3 className="text-lg font-bold text-foreground mb-3">
                  {step.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </SectionWrapper>

      {/* Ecosystem Section */}
      <SectionWrapper background="default" animation="radial-glow">
        <div className="container-wide">
          <SectionHeader title="Works with your existing ecosystem" description="Continuux integrates seamlessly with the services you already use" />
          <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {ecosystem.map((item) => (
              <div key={item.name} className="flex flex-col items-center p-6 rounded-[20px] bg-card border border-border text-center">
                <item.icon className="h-10 w-10 text-primary mb-4" />
                <p className="font-medium text-foreground">{item.name}</p>
              </div>
            ))}
          </div>
        </div>
      </SectionWrapper>

      {/* CTA Section */}
      <CTASection />
    </Layout>
  );
};

export default HowItWorks;
