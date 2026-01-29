import { Link } from "react-router-dom";
import { Check, ArrowRight, Gift } from "lucide-react";
import { Button } from "@/components/ui/button";
import { SectionHeader } from "@/components/ui/section-header";

const features = [
  "Unlimited document storage",
  "Up to 5 trusted contacts",
  "Mobile app access",
  "Smart notifications & reminders",
  "Activity audit trail",
  "Emergency access protocols",
  "24/7 customer support",
  "Bank-level encryption",
];

export function PricingPreviewSection() {
  return (
    <section className="section-padding bg-muted/50">
      <div className="container-wide">
        <SectionHeader
          badge="Simple Pricing"
          title="One plan. Everything included."
          description="No hidden fees, no complicated tiers. Just complete protection for your family."
        />

        <div className="mt-12 lg:mt-16 max-w-2xl mx-auto">
          <div className="relative rounded-[20px] bg-card border-2 border-primary shadow-elevated p-8 lg:p-10">
            {/* Popular badge */}
            <div className="absolute -top-4 left-1/2 -translate-x-1/2">
              <div className="bg-primary text-primary-foreground rounded-full px-6 py-2 text-sm font-semibold shadow-glow">
                Complete Protection
              </div>
            </div>

            <div className="text-center mb-8 pt-2">
              <h3 className="text-2xl font-bold text-foreground mb-2">
                Family Vault
              </h3>
              <div className="flex items-baseline justify-center gap-2">
                <span className="text-5xl font-extrabold text-foreground">$99</span>
                <span className="text-muted-foreground">/year</span>
              </div>
              <p className="text-sm text-muted-foreground mt-2">
                Just $8.25/month billed annually
              </p>
            </div>

            <div className="grid sm:grid-cols-2 gap-3 mb-8">
              {features.map((feature) => (
                <div key={feature} className="flex items-center gap-2">
                  <Check className="h-5 w-5 text-secondary shrink-0" />
                  <span className="text-sm text-foreground">{feature}</span>
                </div>
              ))}
            </div>

            <div className="space-y-3">
              <Button 
                size="lg" 
                className="w-full text-lg py-6 rounded-xl font-bold shadow-glow hover:shadow-glow-hover transition-all duration-200 hover:-translate-y-0.5" 
                asChild
              >
                <Link to="/pricing">
                  Start Your Vault - It's Free
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <p className="text-center text-sm text-muted-foreground">
                No credit card required • Free forever for early users
              </p>
            </div>

            {/* Free account option */}
            <div className="mt-8 pt-6 border-t border-border">
              <div className="flex items-center gap-3 p-4 rounded-xl bg-primary/5 border border-primary/20">
                <Gift className="h-6 w-6 text-primary shrink-0" />
                <div className="flex-1">
                  <p className="text-sm font-medium text-foreground">
                    Need financial assistance?
                  </p>
                  <p className="text-xs text-muted-foreground">
                    We offer free accounts for qualifying families
                  </p>
                </div>
                <Link
                  to="/pricing#free-account"
                  className="text-sm font-semibold text-primary hover:underline whitespace-nowrap"
                >
                  Apply →
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}