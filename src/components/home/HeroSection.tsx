import { Link } from "react-router-dom";
import { ArrowRight, Shield, Lock, Users, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { TrustBadge } from "@/components/ui/trust-badge";

export function HeroSection() {
  return (
    <section className="relative min-h-[90vh] flex items-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 hero-gradient" />
      <div className="absolute inset-0 bg-[url('/placeholder.svg')] opacity-5 bg-cover bg-center" />
      
      {/* Decorative elements */}
      <div className="absolute top-1/4 right-10 w-72 h-72 bg-white/5 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 left-10 w-96 h-96 bg-secondary/10 rounded-full blur-3xl" />

      <div className="container-wide relative z-10 pt-24 pb-16 lg:pt-32 lg:pb-24">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Content */}
          <div className="text-center lg:text-left stagger-children">
            {/* Trust badges */}
            <div className="flex flex-wrap justify-center lg:justify-start gap-3 mb-6">
              <TrustBadge 
                icon={Shield} 
                text="Bank-Level Security" 
                variant="success" 
                className="!bg-white/20 !text-white"
              />
              <TrustBadge 
                icon={Lock} 
                text="256-bit Encryption" 
                variant="success" 
                className="!bg-white/20 !text-white"
              />
            </div>

            <h1 className="font-serif text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl xl:text-7xl">
              Secure Your
              <span className="block text-secondary">Digital Legacy</span>
            </h1>
            
            <p className="mt-6 text-lg text-white/80 max-w-xl mx-auto lg:mx-0 lg:text-xl">
              Organize your important documents, protect your family's future, and 
              gain peace of mind with our secure digital vault. Estate planning made simple.
            </p>

            {/* CTAs */}
            <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button size="lg" className="bg-white text-primary hover:bg-white/90 text-base px-8" asChild>
                <Link to="/pricing">
                  Start Your Vault
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" className="border-white/30 text-white hover:bg-white/10 text-base" asChild>
                <Link to="/how-it-works">See How It Works</Link>
              </Button>
            </div>

            {/* Social proof */}
            <div className="mt-10 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-6 text-white/70">
              <div className="flex items-center gap-2">
                <Users className="h-5 w-5" />
                <span className="text-sm">Join 10,000+ families</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="h-5 w-5 text-secondary" />
                <span className="text-sm">14-day free trial</span>
              </div>
            </div>
          </div>

          {/* Hero Image / Mockup */}
          <div className="relative lg:pl-8">
            <div className="relative mx-auto max-w-lg lg:max-w-none">
              {/* Main card */}
              <div className="relative rounded-2xl bg-white/10 backdrop-blur-xl border border-white/20 p-6 lg:p-8 shadow-2xl">
                <div className="absolute -top-4 -right-4 bg-secondary text-secondary-foreground rounded-full px-4 py-1 text-sm font-medium shadow-lg">
                  Secure
                </div>
                
                {/* Mock vault interface */}
                <div className="space-y-4">
                  <div className="flex items-center gap-3 p-3 rounded-lg bg-white/10">
                    <div className="h-10 w-10 rounded-lg bg-primary/20 flex items-center justify-center">
                      <Shield className="h-5 w-5 text-white" />
                    </div>
                    <div className="flex-1">
                      <div className="h-3 w-24 bg-white/40 rounded" />
                      <div className="mt-1 h-2 w-16 bg-white/20 rounded" />
                    </div>
                    <CheckCircle className="h-5 w-5 text-secondary" />
                  </div>
                  
                  <div className="flex items-center gap-3 p-3 rounded-lg bg-white/10">
                    <div className="h-10 w-10 rounded-lg bg-accent/20 flex items-center justify-center">
                      <Lock className="h-5 w-5 text-white" />
                    </div>
                    <div className="flex-1">
                      <div className="h-3 w-32 bg-white/40 rounded" />
                      <div className="mt-1 h-2 w-20 bg-white/20 rounded" />
                    </div>
                    <CheckCircle className="h-5 w-5 text-secondary" />
                  </div>
                  
                  <div className="flex items-center gap-3 p-3 rounded-lg bg-white/10">
                    <div className="h-10 w-10 rounded-lg bg-secondary/20 flex items-center justify-center">
                      <Users className="h-5 w-5 text-white" />
                    </div>
                    <div className="flex-1">
                      <div className="h-3 w-28 bg-white/40 rounded" />
                      <div className="mt-1 h-2 w-14 bg-white/20 rounded" />
                    </div>
                    <CheckCircle className="h-5 w-5 text-secondary" />
                  </div>
                </div>

                <div className="mt-6 pt-4 border-t border-white/10">
                  <div className="flex items-center justify-between text-white/70 text-sm">
                    <span>Documents protected</span>
                    <span className="font-semibold text-white">247</span>
                  </div>
                </div>
              </div>

              {/* Floating elements */}
              <div className="absolute -bottom-6 -left-6 rounded-xl bg-white p-4 shadow-elevated animate-float">
                <div className="flex items-center gap-3">
                  <div className="h-10 w-10 rounded-full bg-secondary/10 flex items-center justify-center">
                    <CheckCircle className="h-5 w-5 text-secondary" />
                  </div>
                  <div>
                    <p className="text-sm font-medium text-foreground">Backup Complete</p>
                    <p className="text-xs text-muted-foreground">All documents synced</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
