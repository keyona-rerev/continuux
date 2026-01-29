import { Layout } from "@/components/layout/Layout";
import { SectionWrapper } from "@/components/ui/section-wrapper";
import { SectionHeader } from "@/components/ui/section-header";
import { CTASection } from "@/components/home/CTASection";
import { Shield, Heart, Lock, Users, Eye, Sparkles } from "lucide-react";

const values = [
  { icon: Shield, title: "Security First", description: "Your data protection is our top priority. We use bank-level encryption." },
  { icon: Heart, title: "Compassion", description: "We understand the emotional weight of family preparedness and treat it with care." },
  { icon: Lock, title: "Privacy", description: "Your information is yours. We never sell or share your data." },
  { icon: Users, title: "Family Focus", description: "Built for real families facing real challenges, not just tech enthusiasts." },
  { icon: Eye, title: "Transparency", description: "Clear pricing, clear policies, clear communication. No surprises." },
  { icon: Sparkles, title: "Simplicity", description: "Powerful features wrapped in an interface anyone can use." },
];

const About = () => {
  return (
    <Layout>
      {/* Hero Section */}
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
              <Heart className="w-4 h-4" />
              Our Mission
            </div>

            <h1 
              className="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight tracking-tight text-white mb-8"
              style={{ letterSpacing: "-1px" }}
            >
              Give People and Families a{" "}
              <span 
                className="bg-clip-text text-transparent"
                style={{
                  backgroundImage: "linear-gradient(135deg, #6366f1 0%, #a855f7 100%)",
                }}
              >
                Single Place
              </span>
              {" "}for Their Most Important Documents
            </h1>

            <p 
              className="text-lg md:text-xl leading-relaxed max-w-3xl mx-auto"
              style={{ color: "#c7c7c7" }}
            >
              No matter what age you are, if you've ever had a friend or family member pass away without a will, you know the process of accessing their accounts and assets can be a literal nightmare.
            </p>
          </div>
        </div>
      </section>

      {/* Why We Built This Section */}
      <SectionWrapper background="default" animation="gradient-sweep">
        <div className="container-wide max-w-4xl">
          <SectionHeader badge="Why We Built This" title="We've been there" />
          <div className="mt-10 space-y-6 text-lg text-muted-foreground leading-relaxed">
            <p>
              In the midst of trying to grieve, you're forced to put aside your emotions to deal with unending red tape, phone calls, and paperwork—which can take a toll on your job, relationships, and health.
            </p>
            <p>
              We've been there, which is why we created Prismm. A simple, secure, and affordable online service that provides designated assignees quick access to the information they need.
            </p>
            <p>
              Our system is built to move the right information to the right people as quickly as possible—so beneficiaries can receive what's rightfully theirs in a timely manner, experience an easier probate process, and have the space to grieve without drowning in logistics.
            </p>
          </div>
        </div>
      </SectionWrapper>

      <SectionWrapper background="muted" animation="dot-pulse">
        <div className="container-wide">
          <SectionHeader badge="Our Values" title="What we stand for" />
          <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {values.map((v) => (
              <div key={v.title} className="p-6 rounded-[20px] bg-card border border-border">
                <v.icon className="h-10 w-10 text-primary mb-4" />
                <h3 className="font-semibold text-foreground">{v.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{v.description}</p>
              </div>
            ))}
          </div>
        </div>
      </SectionWrapper>
      {/* CTA Section */}
      <CTASection />
    </Layout>
  );
};

export default About;
