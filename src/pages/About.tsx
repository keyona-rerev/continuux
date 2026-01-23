import { Layout } from "@/components/layout/Layout";
import { SectionHeader } from "@/components/ui/section-header";
import { Shield, Heart, Lock, Users, Eye, Sparkles } from "lucide-react";

const team = [
  { name: "Sarah Chen", role: "CEO & Co-Founder", bio: "Former estate planning attorney with 15 years experience" },
  { name: "Michael Torres", role: "CTO & Co-Founder", bio: "Security expert, previously led infrastructure at a major bank" },
  { name: "Emily Watson", role: "Head of Product", bio: "Passionate about making complex tools simple and accessible" },
  { name: "David Kim", role: "Head of Customer Success", bio: "Dedicated to helping families protect what matters most" },
];

const values = [
  { icon: Shield, title: "Security First", description: "Your data protection is our top priority. We use bank-level encryption." },
  { icon: Heart, title: "Empathy", description: "We understand the emotional weight of legacy planning and treat it with care." },
  { icon: Lock, title: "Privacy", description: "Your information is yours. We never sell or share your data." },
  { icon: Users, title: "Family Focus", description: "Built for real families with real needs, not just tech enthusiasts." },
  { icon: Eye, title: "Transparency", description: "Clear pricing, clear policies, clear communication. No surprises." },
  { icon: Sparkles, title: "Simplicity", description: "Powerful features wrapped in an interface anyone can use." },
];

const timeline = [
  { year: "2021", event: "Continuux founded with a mission to democratize estate planning" },
  { year: "2022", event: "Launched beta with 1,000 founding families" },
  { year: "2023", event: "Reached 10,000 families, achieved SOC 2 certification" },
  { year: "2024", event: "Expanded partnerships with financial advisors nationwide" },
];

const About = () => {
  return (
    <Layout>
      <section className="pt-32 pb-16 hero-gradient">
        <div className="container-wide text-center text-white">
          <h1 className="font-serif text-4xl font-bold sm:text-5xl lg:text-6xl">About Continuux</h1>
          <p className="mt-6 text-lg text-white/80 max-w-2xl mx-auto">On a mission to help every family secure their digital legacy</p>
        </div>
      </section>

      <section className="section-padding bg-background">
        <div className="container-wide">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="font-serif text-3xl font-bold text-foreground">Our Mission</h2>
            <p className="mt-6 text-lg text-muted-foreground leading-relaxed">
              We believe that protecting your family's future shouldn't require expensive lawyers or complicated software. 
              Continuux was born from a simple idea: everyone deserves a secure, organized place for their most important documents—
              and a clear plan for what happens to them.
            </p>
          </div>
        </div>
      </section>

      <section className="section-padding bg-muted/50">
        <div className="container-wide">
          <SectionHeader badge="Our Values" title="What we stand for" />
          <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {values.map((v) => (
              <div key={v.title} className="p-6 rounded-xl bg-card border border-border">
                <v.icon className="h-10 w-10 text-primary mb-4" />
                <h3 className="font-semibold text-foreground">{v.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{v.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding bg-background">
        <div className="container-wide">
          <SectionHeader badge="Leadership" title="Meet the team" />
          <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {team.map((member) => (
              <div key={member.name} className="text-center p-6 rounded-xl bg-card border border-border">
                <div className="h-24 w-24 mx-auto rounded-full bg-muted flex items-center justify-center text-2xl font-bold text-muted-foreground">{member.name.charAt(0)}</div>
                <h3 className="mt-4 font-semibold text-foreground">{member.name}</h3>
                <p className="text-sm text-primary">{member.role}</p>
                <p className="mt-2 text-sm text-muted-foreground">{member.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding bg-muted/50">
        <div className="container-wide max-w-3xl">
          <SectionHeader badge="Our Journey" title="Company timeline" />
          <div className="mt-12 space-y-6">
            {timeline.map((item, i) => (
              <div key={i} className="flex gap-6 items-start">
                <div className="text-2xl font-bold text-primary">{item.year}</div>
                <div className="flex-1 pb-6 border-b border-border"><p className="text-foreground">{item.event}</p></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="careers" className="section-padding hero-gradient">
        <div className="container-wide text-center text-white">
          <h2 className="font-serif text-3xl font-bold">Join Our Team</h2>
          <p className="mt-4 text-white/80 max-w-xl mx-auto">We're always looking for talented people who share our mission. Check back soon for open positions.</p>
        </div>
      </section>
    </Layout>
  );
};

export default About;
