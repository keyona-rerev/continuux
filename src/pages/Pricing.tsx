import { Layout } from "@/components/layout/Layout";
import { SectionWrapper } from "@/components/ui/section-wrapper";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Check, ArrowRight, HelpCircle, CreditCard, Shield, ArrowUpDown, CheckCircle } from "lucide-react";

const features = [
  "Unlimited document storage", "Up to 5 trusted contacts", "Mobile app access (iOS & Android)", "Smart notifications & reminders",
  "Complete activity audit trail", "Emergency access protocols", "24/7 priority support", "Bank-level encryption",
  "SOC 2 Type II certified", "GDPR compliant", "Automatic backups", "Document version history",
];

const highlights = [
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
];

const faqs = [
  { q: "How long is it free?", a: "During this time of crisis, we're offering free accounts to all families. We'll notify you well in advance if this changes." },
  { q: "Will I be charged automatically?", a: "No. We will never charge you without your consent. If the free period ends, you choose whether to continue at $99/year or export your data." },
  { q: "What happens to my data?", a: "Your data is always yours. You can export everything at any time, and we give 30 days notice before any changes." },
];

const Pricing = () => {
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
              <CheckCircle className="w-4 h-4" />
              Limited Time Offer
            </div>

            <h1 
              className="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight tracking-tight text-white mb-8"
              style={{ letterSpacing: "-1px" }}
            >
              Family Accounts Are{" "}
              <span 
                className="bg-clip-text text-transparent"
                style={{
                  backgroundImage: "linear-gradient(135deg, #6366f1 0%, #a855f7 100%)",
                }}
              >
                Free
              </span>
              {" "}During This Time of Crisis
            </h1>

            <p 
              className="text-lg md:text-xl leading-relaxed max-w-3xl mx-auto"
              style={{ color: "#c7c7c7" }}
            >
              For a limited time, we're offering full family protection accounts at no cost. Every family deserves security and peace of mind—especially now.
            </p>
          </div>
        </div>
      </section>

      {/* Highlights Section */}
      <SectionWrapper background="muted" animation="gradient-sweep">
        <div className="container-wide">
          <div className="grid md:grid-cols-3 gap-6 md:gap-8">
            {highlights.map((item) => (
              <div
                key={item.title}
                className="p-8 rounded-[20px] bg-card border border-border text-center"
              >
                <div className="w-14 h-14 rounded-xl flex items-center justify-center mx-auto mb-5 bg-primary/10">
                  <item.icon className="w-7 h-7 text-primary" />
                </div>
                <h3 className="text-lg font-bold text-foreground mb-3">
                  {item.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </SectionWrapper>

      {/* Pricing Card Section */}
      <SectionWrapper background="default" animation="radial-glow">
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
              <Button size="lg" className="w-full text-lg py-6 rounded-xl font-bold shadow-glow hover:shadow-glow-hover transition-all duration-200 hover:-translate-y-0.5" asChild>
                <a href="https://app.getprismm.com/signup/new">Start Your Vault - It's Free <ArrowRight className="ml-2 h-5 w-5" /></a>
              </Button>
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
