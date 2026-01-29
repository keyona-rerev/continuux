import { Link } from "react-router-dom";
import { ArrowRight, Shield, Lock, Users, CheckCircle, Check } from "lucide-react";
import { Button } from "@/components/ui/button";

export function HeroSection() {
  return (
    <section className="relative min-h-[90vh] flex items-center overflow-hidden">
      {/* Background - Gradient with subtle purple tint overlay */}
      <div className="absolute inset-0 hero-gradient" />
      
      {/* Subtle animated overlay */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-white/5 rounded-full blur-3xl animate-float-slow" />
        <div className="absolute bottom-1/4 right-1/4 w-72 h-72 bg-primary/10 rounded-full blur-3xl animate-float-delayed" />
        <div className="absolute top-1/2 right-1/3 w-48 h-48 bg-secondary/10 rounded-full blur-2xl animate-float" />
      </div>

      <div className="container-wide relative z-10 py-24 lg:py-32">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Content - Left Side */}
          <div className="text-center lg:text-left stagger-children">
            {/* Trust Badge */}
            <div className="inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm font-semibold mb-8 bg-white/10 border border-white/20 text-white">
              <Shield className="h-4 w-4" />
              <span>Protecting Families Since 2024</span>
            </div>

            {/* Headline - Per brand spec: 64px, weight 800, line-height 1.1 */}
            <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl xl:text-[4rem] leading-[1.1]">
              Your Family's
              <span className="block text-primary brightness-125">Lifeline</span>
              <span className="block">When It Matters Most</span>
            </h1>
            
            {/* Subheadline - Per brand spec: 20px, weight 400, line-height 1.6 */}
            <p className="mt-8 text-lg lg:text-xl text-white/80 max-w-xl mx-auto lg:mx-0 leading-relaxed">
              Keep your critical documents secure and instantly accessible. Because when families 
              face separation, having the right information at the right time can change everything.
            </p>

            {/* Trust Indicators */}
            <div className="mt-8 flex flex-wrap justify-center lg:justify-start gap-x-6 gap-y-3 text-white/90">
              <div className="flex items-center gap-2">
                <Check className="h-5 w-5 text-secondary" />
                <span className="text-sm font-medium">Bank-Level Security</span>
              </div>
              <div className="flex items-center gap-2">
                <Check className="h-5 w-5 text-secondary" />
                <span className="text-sm font-medium">10,000+ Families Protected</span>
              </div>
              <div className="flex items-center gap-2">
                <Check className="h-5 w-5 text-secondary" />
                <span className="text-sm font-medium">Free Forever for Early Users</span>
              </div>
            </div>

            {/* CTAs - Per brand spec: 18px 40px padding, 12px radius */}
            <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button 
                size="lg" 
                className="bg-primary hover:bg-primary/90 text-primary-foreground text-lg px-10 py-6 rounded-xl font-bold shadow-glow hover:shadow-glow-hover transition-all duration-200 hover:-translate-y-0.5" 
                asChild
              >
                <Link to="/signup">
                  Start Your Vault - It's Free
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="border-2 border-white/30 bg-transparent text-white hover:border-primary hover:text-primary hover:bg-white/5 text-lg px-10 py-6 rounded-xl font-medium transition-all duration-200" 
                asChild
              >
                <Link to="/how-it-works">See How It Works</Link>
              </Button>
            </div>
          </div>

          {/* Hero Visual - Right Side - Interface Mockup */}
          <div className="relative lg:pl-8">
            <div className="relative mx-auto max-w-lg lg:max-w-none">
              {/* Main Card - Per brand spec: 20px radius, white bg, elevated shadow */}
              <div className="relative rounded-[20px] bg-white p-8 shadow-elevated">
                {/* Header */}
                <div className="flex items-center justify-between mb-6">
                  <h3 className="text-lg font-semibold text-foreground">My Family Vault</h3>
                  <div className="flex items-center gap-2 rounded-full px-3 py-1 text-xs font-semibold bg-secondary/10 text-secondary">
                    <CheckCircle className="h-3 w-3" />
                    All Synced
                  </div>
                </div>
                
                {/* Document List - Per brand spec: light gray bg, 12px radius */}
                <div className="space-y-3">
                  <div className="flex items-center gap-4 p-4 rounded-xl bg-muted">
                    <div className="h-10 w-10 rounded-lg bg-primary/10 flex items-center justify-center">
                      <Shield className="h-5 w-5 text-primary" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-sm font-medium text-foreground">Emergency Documents</p>
                      <p className="text-xs text-muted-foreground">3 files • Shared with 2 contacts</p>
                    </div>
                    <CheckCircle className="h-5 w-5 text-secondary shrink-0" />
                  </div>
                  
                  <div className="flex items-center gap-4 p-4 rounded-xl bg-muted">
                    <div className="h-10 w-10 rounded-lg bg-primary/10 flex items-center justify-center">
                      <Lock className="h-5 w-5 text-primary" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-sm font-medium text-foreground">Identity Documents</p>
                      <p className="text-xs text-muted-foreground">5 files • Accessible anywhere</p>
                    </div>
                    <CheckCircle className="h-5 w-5 text-secondary shrink-0" />
                  </div>
                  
                  <div className="flex items-center gap-4 p-4 rounded-xl bg-muted">
                    <div className="h-10 w-10 rounded-lg bg-primary/10 flex items-center justify-center">
                      <Users className="h-5 w-5 text-primary" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-sm font-medium text-foreground">Emergency Contacts</p>
                      <p className="text-xs text-muted-foreground">8 contacts • Instantly notifiable</p>
                    </div>
                    <CheckCircle className="h-5 w-5 text-secondary shrink-0" />
                  </div>
                </div>

                {/* Footer Stats */}
                <div className="mt-6 pt-4 border-t border-border">
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-muted-foreground">Documents protected</span>
                    <span className="font-semibold text-foreground">247</span>
                  </div>
                </div>
              </div>

              {/* Floating Confirmation Card */}
              <div className="absolute -bottom-6 -left-6 rounded-2xl bg-white p-4 shadow-elevated animate-float border border-border">
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