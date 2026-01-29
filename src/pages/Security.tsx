import { Layout } from "@/components/layout/Layout";
import { SectionWrapper } from "@/components/ui/section-wrapper";
import { SectionHeader } from "@/components/ui/section-header";
import { CTASection } from "@/components/home/CTASection";
import { Shield, Lock, Server, Eye, FileCheck, CheckCircle, RefreshCw, Zap } from "lucide-react";

const securityFeatures = [
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
];

const Security = () => {
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
              <Shield className="w-4 h-4" />
              Bank-Level Protection
            </div>

            <h1 
              className="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight tracking-tight text-white mb-8"
              style={{ letterSpacing: "-1px" }}
            >
              Your Family's Documents{" "}
              <span 
                className="bg-clip-text text-transparent"
                style={{
                  backgroundImage: "linear-gradient(135deg, #6366f1 0%, #a855f7 100%)",
                }}
              >
                Deserve Bank-Level
              </span>
              {" "}Security
            </h1>

            <p 
              className="text-lg md:text-xl leading-relaxed max-w-3xl mx-auto"
              style={{ color: "#c7c7c7" }}
            >
              We protect your most sensitive information with the same encryption technology trusted by financial institutions worldwide. Your data is yours, always.
            </p>
          </div>
        </div>
      </section>

      {/* Security Features Section */}
      <SectionWrapper background="muted" animation="gradient-sweep">
        <div className="container-wide">
          <SectionHeader badge="Security Features" title="Enterprise-grade protection for your family" />
          <div className="mt-12 grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {securityFeatures.map((feature) => (
              <div
                key={feature.title}
                className="p-6 rounded-[20px] bg-card border border-border"
              >
                <feature.icon className="h-10 w-10 text-primary mb-4" />
                <h3 className="text-lg font-bold text-foreground mb-2">
                  {feature.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </SectionWrapper>

      <SectionWrapper background="default" animation="radial-glow">
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

      <SectionWrapper background="muted" animation="dot-pulse">
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

      {/* CTA Section */}
      <CTASection />
    </Layout>
  );
};

export default Security;
