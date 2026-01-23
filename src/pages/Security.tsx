import { Layout } from "@/components/layout/Layout";
import { SectionHeader } from "@/components/ui/section-header";
import { Shield, Lock, Server, Eye, FileCheck, CheckCircle } from "lucide-react";

const securityFeatures = [
  { icon: Lock, title: "256-bit AES Encryption", description: "Your documents are encrypted using the same standard used by banks and government agencies." },
  { icon: Server, title: "Secure Data Centers", description: "Data stored in SOC 2 certified facilities with 24/7 monitoring and redundant backups." },
  { icon: Shield, title: "SOC 2 Type II Certified", description: "Our security practices are independently audited and verified annually." },
  { icon: Eye, title: "Zero-Knowledge Architecture", description: "We never have access to your unencrypted data. Only you control your encryption keys." },
  { icon: FileCheck, title: "GDPR Compliant", description: "Full compliance with global data protection regulations including GDPR and CCPA." },
  { icon: CheckCircle, title: "Regular Penetration Testing", description: "Third-party security experts regularly test our systems for vulnerabilities." },
];

const Security = () => {
  return (
    <Layout>
      <section className="pt-32 pb-16 hero-gradient">
        <div className="container-wide text-center text-white">
          <h1 className="font-serif text-4xl font-bold sm:text-5xl lg:text-6xl">Security & Trust</h1>
          <p className="mt-6 text-lg text-white/80 max-w-2xl mx-auto">Your security is our foundation. Here's how we protect your most sensitive information.</p>
        </div>
      </section>

      <section className="section-padding bg-background">
        <div className="container-wide">
          <SectionHeader badge="Protection" title="How we keep your data safe" />
          <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {securityFeatures.map((f) => (
              <div key={f.title} className="p-6 rounded-xl bg-card border border-border shadow-soft">
                <f.icon className="h-10 w-10 text-secondary mb-4" />
                <h3 className="font-semibold text-foreground">{f.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{f.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding bg-muted/50">
        <div className="container-wide max-w-3xl">
          <SectionHeader title="Your Data, Your Control" description="We believe privacy is a fundamental right. Here's our commitment to you." />
          <div className="mt-12 space-y-6">
            <div className="p-6 rounded-xl bg-card border border-border">
              <h3 className="font-semibold text-foreground">We never sell your data</h3>
              <p className="mt-2 text-muted-foreground">Your information is never sold, shared, or used for advertising. Period.</p>
            </div>
            <div className="p-6 rounded-xl bg-card border border-border">
              <h3 className="font-semibold text-foreground">You can export anytime</h3>
              <p className="mt-2 text-muted-foreground">Download all your documents and data whenever you want. No lock-in.</p>
            </div>
            <div className="p-6 rounded-xl bg-card border border-border">
              <h3 className="font-semibold text-foreground">Right to deletion</h3>
              <p className="mt-2 text-muted-foreground">Request complete deletion of your account and all associated data at any time.</p>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Security;
