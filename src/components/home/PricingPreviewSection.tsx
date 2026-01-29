import { Link } from "react-router-dom";
import { Check, ArrowRight } from "lucide-react";
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
          badge="Limited Time Offer"
          title="Family accounts are free during this time of crisis"
          description="For a limited time, we're offering full family protection at no cost. Every family deserves security and peace of mind—especially now."
        />

        <div className="mt-12 lg:mt-16 max-w-2xl mx-auto">
          <div className="relative rounded-[20px] bg-card border-2 border-primary shadow-elevated p-8 lg:p-10">
            {/* Free badge */}
            <div className="absolute -top-4 left-1/2 -translate-x-1/2">
              <div className="bg-secondary text-secondary-foreground rounded-full px-6 py-2 text-sm font-semibold shadow-glow">
                Free During Crisis
              </div>
            </div>

            <div className="text-center mb-8 pt-4">
              <div className="flex items-baseline justify-center gap-3">
                <span className="text-2xl text-muted-foreground line-through">$99/year</span>
                <span className="text-5xl font-extrabold text-primary">$0</span>
                <span className="text-muted-foreground">today</span>
              </div>
              <p className="text-sm text-muted-foreground mt-3">
                A $99/year value, yours free while families need protection most
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
                <a href="https://app.getprismm.com/signup/new">
                  Start Your Vault - It's Free
                  <ArrowRight className="ml-2 h-5 w-5" />
                </a>
              </Button>
              <p className="text-center text-sm text-muted-foreground">
                No credit card required
              </p>
            </div>
          </div>

          <div className="mt-8 text-center">
            <Link 
              to="/pricing" 
              className="text-sm font-medium text-primary hover:underline"
            >
              View full pricing details →
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}