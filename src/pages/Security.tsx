import { Layout } from "@/components/layout/Layout";
import { DarkHeroSection } from "@/components/ui/dark-hero-section";
import { SectionWrapper } from "@/components/ui/section-wrapper";
import { SectionHeader } from "@/components/ui/section-header";
import { Shield, Lock, Server, Eye, FileCheck, CheckCircle, RefreshCw, Zap } from "lucide-react";

const Security = () => {
  return (
    <Layout>
      <DarkHeroSection
        badge={{
          icon: Shield,
          text: "Bank-Level Protection"
        }}
        headline={{
          line1: "Your Family's Documents",
          line3: "Security"
        }}
        highlightedText="Deserve Bank-Level"
        subtitle="We protect your most sensitive information with the same encryption technology trusted by financial institutions worldwide. Your data is yours, always."
        gridType="features"
        gridItems={[
          {
            icon: Lock,
            title: "256-Bit Encryption",
            description: "Military-grade encryption protects every document you upload, in transit and at rest"
          },
          {
            icon: Shield,
            title: "Zero-Knowledge Architecture",
            description: "We can't access your documents—only you and people you authorize can view them"
          },
          {
            icon: Eye,
            title: "Multi-Factor Authentication",
            description: "Additional verification layers ensure only you can access your account"
          },
          {
            icon: RefreshCw,
            title: "Automatic Backups",
            description: "Your documents are backed up continuously across secure servers worldwide"
          },
          {
            icon: FileCheck,
            title: "Audit Logs",
            description: "Track every access to your documents—know exactly who viewed what and when"
          },
          {
            icon: Zap,
            title: "99.9% Uptime",
            description: "Your documents are always accessible when you need them, from any device"
          }
        ]}
        gridColumns={3}
      />

      <SectionWrapper background="muted" animation="radial-glow">
        <div className="container-wide max-w-3xl">
          <SectionHeader title="Your Data, Your Control" description="We believe privacy is a fundamental right. Here's our commitment to you." />
          <div className="mt-12 space-y-6">
            <div className="p-6 rounded-[20px] bg-card border border-border">
              <h3 className="font-semibold text-foreground">We never sell your data</h3>
              <p className="mt-2 text-muted-foreground">Your information is never sold, shared, or used for advertising. Period.</p>
            </div>
            <div className="p-6 rounded-[20px] bg-card border border-border">
              <h3 className="font-semibold text-foreground">You can export anytime</h3>
              <p className="mt-2 text-muted-foreground">Download all your documents and data whenever you want. No lock-in.</p>
            </div>
            <div className="p-6 rounded-[20px] bg-card border border-border">
              <h3 className="font-semibold text-foreground">Right to deletion</h3>
              <p className="mt-2 text-muted-foreground">Request complete deletion of your account and all associated data at any time.</p>
            </div>
          </div>
        </div>
      </SectionWrapper>

      <SectionWrapper background="default" animation="dot-pulse">
        <div className="container-wide">
          <SectionHeader badge="Certifications" title="Industry-leading compliance" />
          <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="p-6 rounded-[20px] bg-card border border-border shadow-soft">
              <Server className="h-10 w-10 text-secondary mb-4" />
              <h3 className="font-semibold text-foreground">SOC 2 Type II Certified</h3>
              <p className="mt-2 text-sm text-muted-foreground leading-relaxed">Our security practices are independently audited and verified annually.</p>
            </div>
            <div className="p-6 rounded-[20px] bg-card border border-border shadow-soft">
              <FileCheck className="h-10 w-10 text-secondary mb-4" />
              <h3 className="font-semibold text-foreground">GDPR Compliant</h3>
              <p className="mt-2 text-sm text-muted-foreground leading-relaxed">Full compliance with global data protection regulations including GDPR and CCPA.</p>
            </div>
            <div className="p-6 rounded-[20px] bg-card border border-border shadow-soft">
              <CheckCircle className="h-10 w-10 text-secondary mb-4" />
              <h3 className="font-semibold text-foreground">Regular Penetration Testing</h3>
              <p className="mt-2 text-sm text-muted-foreground leading-relaxed">Third-party security experts regularly test our systems for vulnerabilities.</p>
            </div>
          </div>
        </div>
      </SectionWrapper>
    </Layout>
  );
};

export default Security;
