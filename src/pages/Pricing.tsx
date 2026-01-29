import { Layout } from "@/components/layout/Layout";
import { PageHero } from "@/components/ui/page-hero";
import { SectionWrapper } from "@/components/ui/section-wrapper";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Link } from "react-router-dom";
import { Check, ArrowRight, Gift, HelpCircle } from "lucide-react";
import { useState } from "react";

const features = [
  "Unlimited document storage", "Up to 5 trusted contacts", "Mobile app access (iOS & Android)", "Smart notifications & reminders",
  "Complete activity audit trail", "Emergency access protocols", "24/7 priority support", "Bank-level encryption",
  "SOC 2 Type II certified", "GDPR compliant", "Automatic backups", "Document version history",
];

const faqs = [
  { q: "Can I cancel anytime?", a: "Yes! You can cancel your subscription at any time. You'll retain access until the end of your billing period." },
  { q: "Is there a money-back guarantee?", a: "Absolutely. If you're not satisfied within 30 days, we'll refund your payment in full." },
  { q: "What payment methods do you accept?", a: "We accept all major credit cards, PayPal, and bank transfers for annual plans." },
];

const Pricing = () => {
  const [showFreeForm, setShowFreeForm] = useState(false);

  return (
    <Layout>
      <PageHero 
        title="Simple, Transparent Pricing"
        subtitle="One plan with everything your family needs. No hidden fees, no surprises."
        animation="floating-orbs"
      />

      <SectionWrapper background="default" animation="gradient-sweep" className="-mt-16">
        <div className="container-wide">
          <div className="max-w-2xl mx-auto">
            <div className="relative rounded-[20px] bg-card border-2 border-primary shadow-elevated p-8 lg:p-10">
              <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-primary text-primary-foreground rounded-full px-6 py-2 text-sm font-semibold shadow-glow">Complete Protection</div>
              <div className="text-center mb-8 pt-4">
                <div className="flex items-baseline justify-center gap-2">
                  <span className="text-5xl font-extrabold text-foreground">$99</span>
                  <span className="text-muted-foreground">/year</span>
                </div>
                <p className="text-sm text-muted-foreground mt-2">Just $8.25/month • Free for early users</p>
              </div>
              <div className="grid sm:grid-cols-2 gap-3 mb-8">
                {features.map((f) => (
                  <div key={f} className="flex items-center gap-2"><Check className="h-5 w-5 text-secondary shrink-0" /><span className="text-sm text-foreground">{f}</span></div>
                ))}
              </div>
              <Button size="lg" className="w-full text-lg py-6 rounded-xl font-bold shadow-glow hover:shadow-glow-hover transition-all duration-200 hover:-translate-y-0.5" asChild><a href="https://app.getprismm.com/signup/new">Start Your Vault - It's Free <ArrowRight className="ml-2 h-5 w-5" /></a></Button>
              <p className="text-center text-sm text-muted-foreground mt-3">No credit card required • 30-day money-back guarantee</p>
            </div>

            <div id="free-account" className="mt-12 rounded-[20px] bg-primary/5 border border-primary/20 p-8">
              <div className="flex items-start gap-4">
                <Gift className="h-8 w-8 text-primary shrink-0" />
                <div className="flex-1">
                  <h3 className="text-xl font-semibold text-foreground">Apply for a Free Account</h3>
                  <p className="text-muted-foreground mt-2">We believe every family deserves protection. If you're facing financial hardship, we offer free accounts on a case-by-case basis.</p>
                  {!showFreeForm ? (
                    <Button variant="outline" className="mt-4 rounded-xl" onClick={() => setShowFreeForm(true)}>Apply Now</Button>
                  ) : (
                    <form className="mt-6 space-y-4">
                      <Input placeholder="Your full name" className="rounded-xl" />
                      <Input type="email" placeholder="Email address" className="rounded-xl" />
                      <Textarea placeholder="Please briefly explain your situation (optional)" rows={4} className="rounded-xl" />
                      <Button type="submit" className="w-full rounded-xl font-semibold">Submit Application</Button>
                      <p className="text-xs text-muted-foreground text-center">We typically respond within 48 hours</p>
                    </form>
                  )}
                </div>
              </div>
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