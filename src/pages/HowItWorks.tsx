import { Layout } from "@/components/layout/Layout";
import { PageHero } from "@/components/ui/page-hero";
import { SectionWrapper } from "@/components/ui/section-wrapper";
import { SectionHeader } from "@/components/ui/section-header";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Upload, FolderOpen, Users, Shield, Bell, ArrowRight, Smartphone, Building, Scale } from "lucide-react";

const steps = [
  { icon: Upload, title: "Upload Your Documents", description: "Securely upload wills, insurance policies, deeds, and any important files. We support all common formats." },
  { icon: FolderOpen, title: "Organize Your Vault", description: "Use our intuitive folders and tags to keep everything organized. Find any document in seconds." },
  { icon: Users, title: "Add Trusted Contacts", description: "Designate family members, attorneys, or advisors who can access your vault when needed." },
  { icon: Shield, title: "Set Access Rules", description: "Control who sees what and when. Set up legacy protocols for emergencies." },
  { icon: Bell, title: "Stay Notified", description: "Get reminders for renewals, expirations, and important dates. Never miss a deadline." },
];

const integrations = [
  { icon: Building, name: "Banks & Financial Institutions" },
  { icon: Scale, name: "Law Firms & Attorneys" },
  { icon: Users, name: "Financial Advisors" },
  { icon: Smartphone, name: "Mobile Apps" },
];

const HowItWorks = () => {
  return (
    <Layout>
      <PageHero 
        title="How Prismm Works"
        subtitle="Secure your digital legacy in five simple steps"
        animation="mesh-grid"
      />

      <SectionWrapper background="default" animation="dot-pulse">
        <div className="container-wide">
          <div className="max-w-4xl mx-auto space-y-8">
            {steps.map((step, index) => (
              <div key={step.title} className="flex gap-6 items-start p-6 rounded-2xl bg-card border border-border shadow-soft">
                <div className="flex flex-col items-center">
                  <div className="h-14 w-14 rounded-xl bg-primary text-primary-foreground flex items-center justify-center font-bold text-xl">{index + 1}</div>
                  {index < steps.length - 1 && <div className="w-0.5 h-12 bg-border mt-4" />}
                </div>
                <div className="flex-1 pt-2">
                  <h3 className="text-xl font-semibold text-foreground">{step.title}</h3>
                  <p className="mt-2 text-muted-foreground">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </SectionWrapper>

      <SectionWrapper background="muted" animation="radial-glow">
        <div className="container-wide">
          <SectionHeader badge="Integrations" title="Works with your existing ecosystem" description="Prismm integrates seamlessly with the services you already use" />
          <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {integrations.map((item) => (
              <div key={item.name} className="flex flex-col items-center p-6 rounded-xl bg-card border border-border text-center">
                <item.icon className="h-10 w-10 text-primary mb-4" />
                <p className="font-medium text-foreground">{item.name}</p>
              </div>
            ))}
          </div>
        </div>
      </SectionWrapper>

      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 hero-gradient" />
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-white/5 rounded-full blur-3xl animate-float-slow" />
          <div className="absolute bottom-1/4 right-1/4 w-48 h-48 bg-accent/10 rounded-full blur-2xl animate-float-delayed" />
        </div>
        <div className="container-wide relative z-10 text-center">
          <h2 className="text-3xl font-bold text-white sm:text-4xl">Ready to secure your legacy?</h2>
          <div className="mt-8 flex justify-center gap-4">
            <Button size="lg" className="bg-accent text-foreground hover:bg-accent/90 font-semibold" asChild>
              <Link to="/pricing">Start Free Trial <ArrowRight className="ml-2 h-5 w-5" /></Link>
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default HowItWorks;
