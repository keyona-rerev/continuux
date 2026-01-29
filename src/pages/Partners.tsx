import { Layout } from "@/components/layout/Layout";
import { PageHero } from "@/components/ui/page-hero";
import { SectionWrapper } from "@/components/ui/section-wrapper";
import { SectionHeader } from "@/components/ui/section-header";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Users, BarChart3, Shield, Handshake, ArrowRight, CheckCircle } from "lucide-react";

const benefits = [
  { icon: Users, title: "Client Management", description: "Help clients organize their documents and access their vaults when needed." },
  { icon: BarChart3, title: "Dashboard Analytics", description: "Track client engagement and document completeness at a glance." },
  { icon: Shield, title: "Secure Collaboration", description: "Share documents securely with proper access controls and audit trails." },
  { icon: Handshake, title: "Referral Program", description: "Earn commissions for every family you help protect with Continuux." },
];

const Partners = () => {
  return (
    <Layout>
      <PageHero 
        title="Partner with Continuux"
        subtitle="Help families protect what matters most while growing your practice"
        animation="network-pulse"
      />

      <SectionWrapper background="default" animation="dot-pulse">
        <div className="container-wide">
          <SectionHeader badge="For Advocates" title="Why partner with us?" description="Continuux gives immigration attorneys, social service organizations, and family advocates powerful tools to serve their clients better." />
          <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {benefits.map((b) => (
              <div key={b.title} className="p-6 rounded-[20px] bg-card border border-border">
                <b.icon className="h-10 w-10 text-primary mb-4" />
                <h3 className="font-semibold text-foreground">{b.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{b.description}</p>
              </div>
            ))}
          </div>
        </div>
      </SectionWrapper>

      <SectionWrapper background="muted" animation="radial-glow">
        <div className="container-wide">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <SectionHeader badge="Partner Dashboard" title="A preview of your toolkit" align="left" />
              <div className="mt-8 space-y-4">
                {["View all client vaults at a glance", "Get notified when clients need assistance", "Generate compliance reports instantly", "Secure document sharing with clients"].map((item) => (
                  <div key={item} className="flex items-center gap-3">
                    <CheckCircle className="h-5 w-5 text-secondary shrink-0" />
                    <span className="text-foreground">{item}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="rounded-[20px] bg-card border border-border p-8 shadow-soft">
              <div className="h-64 bg-muted rounded-xl flex items-center justify-center">
                <p className="text-muted-foreground">Dashboard Preview Coming Soon</p>
              </div>
            </div>
          </div>
        </div>
      </SectionWrapper>

      <SectionWrapper background="default" animation="gradient-sweep">
        <div className="container-wide max-w-2xl">
          <SectionHeader badge="Get Started" title="Become a Partner" description="Fill out the form below and our partnerships team will be in touch within 48 hours." />
          <form className="mt-12 space-y-6 p-8 rounded-[20px] bg-card border border-border">
            <div className="grid sm:grid-cols-2 gap-4">
              <Input placeholder="First Name" className="rounded-xl" />
              <Input placeholder="Last Name" className="rounded-xl" />
            </div>
            <Input placeholder="Organization Name" className="rounded-xl" />
            <Input type="email" placeholder="Work Email" className="rounded-xl" />
            <Input placeholder="Phone Number" className="rounded-xl" />
            <Textarea placeholder="Tell us about your organization and how you'd like to use Continuux" rows={4} className="rounded-xl" />
            <Button type="submit" size="lg" className="w-full rounded-xl font-bold">Submit Application <ArrowRight className="ml-2 h-5 w-5" /></Button>
          </form>
        </div>
      </SectionWrapper>
    </Layout>
  );
};

export default Partners;