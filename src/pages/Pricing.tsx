import { Layout } from "@/components/layout/Layout";
import { DarkHeroSection } from "@/components/ui/dark-hero-section";
import { SectionWrapper } from "@/components/ui/section-wrapper";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Check, ArrowRight, HelpCircle, CreditCard, Shield, ArrowUpDown, CheckCircle } from "lucide-react";
import { useState } from "react";

const features = [
  "Unlimited document storage", "Up to 5 trusted contacts", "Mobile app access (iOS & Android)", "Smart notifications & reminders",
  "Complete activity audit trail", "Emergency access protocols", "24/7 priority support", "Bank-level encryption",
  "SOC 2 Type II certified", "GDPR compliant", "Automatic backups", "Document version history",
];

const faqs = [
  { q: "How long is it free?", a: "During this time of crisis, we're offering free accounts to all families. We'll notify you well in advance if this changes." },
  { q: "Will I be charged automatically?", a: "No. We will never charge you without your consent. If the free period ends, you choose whether to continue at $99/year or export your data." },
  { q: "What happens to my data?", a: "Your data is always yours. You can export everything at any time, and we give 30 days notice before any changes." },
];

const Pricing = () => {
  return (
    <Layout>
      <DarkHeroSection
        badge={{
          icon: CheckCircle,
          text: "Limited Time Offer"
        }}
        headline={{
          line1: "Family Accounts Are",
          line3: "During This Time of Crisis"
        }}
        highlightedText="Free"
        subtitle="For a limited time, we're offering full family protection accounts at no cost. Every family deserves security and peace of mind—especially now."
        gridType="features"
        gridItems={[
          {
            icon: CreditCard,
            title: "No Credit Card Required",
            description: "Start protecting your family today without entering payment information"
          },
          {
            icon: Shield,
            title: "Bank-Level Security Included",
            description: "Every plan includes 256-bit encryption and the same security banks use"
          },
          {
            icon: ArrowUpDown,
            title: "Upgrade Anytime",
            description: "Need more storage or features? Switch plans with one click whenever you're ready"
          }
        ]}
        gridColumns={3}
      />

      <SectionWrapper background="default" animation="gradient-sweep">
        <div className="container-wide">
          <div className="max-w-2xl mx-auto">
            <div className="relative rounded-[20px] bg-card border-2 border-primary shadow-elevated p-8 lg:p-10">
              <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-secondary text-secondary-foreground rounded-full px-6 py-2 text-sm font-semibold shadow-glow">Free During Crisis</div>
              <div className="text-center mb-8 pt-4">
                <div className="flex items-baseline justify-center gap-3">
                  <span className="text-2xl text-muted-foreground line-through">$99/year</span>
                  <span className="text-5xl font-extrabold text-primary">$0</span>
                  <span className="text-muted-foreground">today</span>
                </div>
                <p className="text-sm text-muted-foreground mt-3">A $99/year value, yours free while families need protection most</p>
              </div>
              <div className="grid sm:grid-cols-2 gap-3 mb-8">
                {features.map((f) => (
                  <div key={f} className="flex items-center gap-2"><Check className="h-5 w-5 text-secondary shrink-0" /><span className="text-sm text-foreground">{f}</span></div>
                ))}
              </div>
              <Button size="lg" className="w-full text-lg py-6 rounded-xl font-bold shadow-glow hover:shadow-glow-hover transition-all duration-200 hover:-translate-y-0.5" asChild><Link to="/signup">Start Your Vault - It's Free <ArrowRight className="ml-2 h-5 w-5" /></Link></Button>
              <p className="text-center text-sm text-muted-foreground mt-3">No credit card required</p>
            </div>
          </div>
        </div>
      </SectionWrapper>

      <SectionWrapper background="muted" animation="diagonal-lines">
        <div className="container-wide max-w-3xl">
          <h2 className="text-2xl font-bold text-foreground text-center mb-8">Frequently Asked Questions</h2>
          <div className="space-y-4">
            {faqs.map((faq) => (
              <div key={faq.q} className="p-6 rounded-xl bg-card border border-border">
                <h3 className="font-semibold text-foreground flex items-center gap-2"><HelpCircle className="h-5 w-5 text-primary" />{faq.q}</h3>
                <p className="mt-2 text-muted-foreground">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </SectionWrapper>
    </Layout>
  );
};

export default Pricing;
