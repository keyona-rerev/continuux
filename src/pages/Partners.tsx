import { Layout } from "@/components/layout/Layout";
import { SectionHeader } from "@/components/ui/section-header";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Users, BarChart3, Shield, Handshake, ArrowRight, CheckCircle } from "lucide-react";

const benefits = [
  { icon: Users, title: "Client Management", description: "Help clients organize their documents and access their vaults when needed." },
  { icon: BarChart3, title: "Dashboard Analytics", description: "Track client engagement and document completeness at a glance." },
  { icon: Shield, title: "Secure Collaboration", description: "Share documents securely with proper access controls and audit trails." },
  { icon: Handshake, title: "Referral Program", description: "Earn commissions for every client you bring to Continuux." },
];

const Partners = () => {
  return (
    <Layout>
      <section className="pt-32 pb-16 hero-gradient">
        <div className="container-wide text-center text-white">
          <h1 className="font-serif text-4xl font-bold sm:text-5xl lg:text-6xl">Partner with Continuux</h1>
          <p className="mt-6 text-lg text-white/80 max-w-2xl mx-auto">Help your clients protect their legacy while growing your practice</p>
        </div>
      </section>

      <section className="section-padding bg-background">
        <div className="container-wide">
          <SectionHeader badge="For Advisors" title="Why partner with us?" description="Continuux gives financial advisors, attorneys, and estate planners powerful tools to serve their clients better." />
          <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {benefits.map((b) => (
              <div key={b.title} className="p-6 rounded-xl bg-card border border-border">
                <b.icon className="h-10 w-10 text-primary mb-4" />
                <h3 className="font-semibold text-foreground">{b.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{b.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding bg-muted/50">
        <div className="container-wide">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <SectionHeader badge="Advisor Dashboard" title="A preview of your toolkit" align="left" />
              <div className="mt-8 space-y-4">
                {["View all client vaults at a glance", "Get notified when clients need assistance", "Generate compliance reports instantly", "Secure document sharing with clients"].map((item) => (
                  <div key={item} className="flex items-center gap-3">
                    <CheckCircle className="h-5 w-5 text-secondary shrink-0" />
                    <span className="text-foreground">{item}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="rounded-2xl bg-card border border-border p-8 shadow-soft">
              <div className="h-64 bg-muted rounded-lg flex items-center justify-center">
                <p className="text-muted-foreground">Dashboard Preview Coming Soon</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding bg-background">
        <div className="container-wide max-w-2xl">
          <SectionHeader badge="Get Started" title="Become a Partner" description="Fill out the form below and our partnerships team will be in touch within 48 hours." />
          <form className="mt-12 space-y-6 p-8 rounded-2xl bg-card border border-border">
            <div className="grid sm:grid-cols-2 gap-4">
              <Input placeholder="First Name" />
              <Input placeholder="Last Name" />
            </div>
            <Input placeholder="Company / Firm Name" />
            <Input type="email" placeholder="Work Email" />
            <Input placeholder="Phone Number" />
            <Textarea placeholder="Tell us about your practice and how you'd like to use Continuux" rows={4} />
            <Button type="submit" size="lg" className="w-full">Submit Application <ArrowRight className="ml-2 h-5 w-5" /></Button>
          </form>
        </div>
      </section>
    </Layout>
  );
};

export default Partners;
