import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Link } from "react-router-dom";
import { Check, ArrowRight, Shield, Gift, HelpCircle } from "lucide-react";
import { useState } from "react";

const features = [
  "Unlimited document storage", "Up to 5 trusted contacts", "Mobile app access (iOS & Android)", "Smart notifications & reminders",
  "Complete activity audit trail", "Legacy access protocols", "24/7 priority support", "256-bit AES encryption",
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
      <section className="pt-32 pb-16 hero-gradient">
        <div className="container-wide text-center text-white">
          <h1 className="font-serif text-4xl font-bold sm:text-5xl lg:text-6xl">Simple, Transparent Pricing</h1>
          <p className="mt-6 text-lg text-white/80 max-w-2xl mx-auto">One plan with everything you need. No hidden fees, no surprises.</p>
        </div>
      </section>

      <section className="section-padding bg-background -mt-16">
        <div className="container-wide">
          <div className="max-w-2xl mx-auto">
            <div className="relative rounded-3xl bg-card border-2 border-primary shadow-elevated p-8 lg:p-10">
              <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-primary text-primary-foreground rounded-full px-6 py-2 text-sm font-semibold">Complete Vault</div>
              <div className="text-center mb-8 pt-4">
                <div className="flex items-baseline justify-center gap-2">
                  <span className="text-5xl font-bold text-foreground">$99</span>
                  <span className="text-muted-foreground">/year</span>
                </div>
                <p className="text-sm text-muted-foreground mt-2">Just $8.25/month • 14-day free trial</p>
              </div>
              <div className="grid sm:grid-cols-2 gap-3 mb-8">
                {features.map((f) => (
                  <div key={f} className="flex items-center gap-2"><Check className="h-5 w-5 text-secondary shrink-0" /><span className="text-sm text-foreground">{f}</span></div>
                ))}
              </div>
              <Button size="lg" className="w-full text-base">Start 14-Day Free Trial <ArrowRight className="ml-2 h-5 w-5" /></Button>
              <p className="text-center text-sm text-muted-foreground mt-3">No credit card required • 30-day money-back guarantee</p>
            </div>

            <div id="free-account" className="mt-12 rounded-2xl bg-accent/10 border border-accent/20 p-8">
              <div className="flex items-start gap-4">
                <Gift className="h-8 w-8 text-accent shrink-0" />
                <div className="flex-1">
                  <h3 className="font-serif text-xl font-semibold text-foreground">Apply for a Free Account</h3>
                  <p className="text-muted-foreground mt-2">We believe everyone deserves to protect their legacy. If you're facing financial hardship, we offer free accounts on a case-by-case basis.</p>
                  {!showFreeForm ? (
                    <Button variant="outline" className="mt-4" onClick={() => setShowFreeForm(true)}>Apply Now</Button>
                  ) : (
                    <form className="mt-6 space-y-4">
                      <Input placeholder="Your full name" />
                      <Input type="email" placeholder="Email address" />
                      <Textarea placeholder="Please briefly explain your situation (optional)" rows={4} />
                      <Button type="submit" className="w-full">Submit Application</Button>
                      <p className="text-xs text-muted-foreground text-center">We typically respond within 48 hours</p>
                    </form>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding bg-muted/50">
        <div className="container-wide max-w-3xl">
          <h2 className="font-serif text-2xl font-bold text-foreground text-center mb-8">Frequently Asked Questions</h2>
          <div className="space-y-4">
            {faqs.map((faq) => (
              <div key={faq.q} className="p-6 rounded-xl bg-card border border-border">
                <h3 className="font-semibold text-foreground flex items-center gap-2"><HelpCircle className="h-5 w-5 text-primary" />{faq.q}</h3>
                <p className="mt-2 text-muted-foreground">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Pricing;
