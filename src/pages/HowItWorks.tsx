import { Layout } from "@/components/layout/Layout";
import { SectionHeader } from "@/components/ui/section-header";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Upload, FolderOpen, Users, Shield, Bell, ArrowRight, CheckCircle, Smartphone, Building, Scale } from "lucide-react";

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
      <section className="pt-32 pb-16 hero-gradient">
        <div className="container-wide text-center text-white">
          <h1 className="font-serif text-4xl font-bold sm:text-5xl lg:text-6xl">How Continuux Works</h1>
          <p className="mt-6 text-lg text-white/80 max-w-2xl mx-auto">Secure your digital legacy in five simple steps</p>
        </div>
      </section>

      <section className="section-padding bg-background">
        <div className="container-wide">
          <div className="max-w-4xl mx-auto space-y-8">
            {steps.map((step, index) => (
              <div key={step.title} className="flex gap-6 items-start p-6 rounded-2xl bg-card border border-border shadow-soft">
                <div className="flex flex-col items-center">
                  <div className="h-14 w-14 rounded-xl bg-primary text-primary-foreground flex items-center justify-center font-bold text-xl">{index + 1}</div>
                  {index < steps.length - 1 && <div className="w-0.5 h-12 bg-border mt-4" />}
                </div>
                <div className="flex-1 pt-2">
                  <h3 className="font-serif text-xl font-semibold text-foreground">{step.title}</h3>
                  <p className="mt-2 text-muted-foreground">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding bg-muted/50">
        <div className="container-wide">
          <SectionHeader badge="Integrations" title="Works with your existing ecosystem" description="Continuux integrates seamlessly with the services you already use" />
          <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {integrations.map((item) => (
              <div key={item.name} className="flex flex-col items-center p-6 rounded-xl bg-card border border-border text-center">
                <item.icon className="h-10 w-10 text-primary mb-4" />
                <p className="font-medium text-foreground">{item.name}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding hero-gradient">
        <div className="container-wide text-center">
          <h2 className="font-serif text-3xl font-bold text-white sm:text-4xl">Ready to secure your legacy?</h2>
          <div className="mt-8 flex justify-center gap-4">
            <Button size="lg" className="bg-white text-primary hover:bg-white/90" asChild>
              <Link to="/pricing">Start Free Trial <ArrowRight className="ml-2 h-5 w-5" /></Link>
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default HowItWorks;
