import { Shield, FolderLock, Users, Bell, Smartphone, Key } from "lucide-react";
import { SectionHeader } from "@/components/ui/section-header";
import { FeatureCard } from "@/components/ui/feature-card";

const features = [
  {
    icon: FolderLock,
    title: "Secure Document Storage",
    description:
      "Upload and organize birth certificates, ID documents, medical records, and emergency information with bank-level encryption.",
  },
  {
    icon: Users,
    title: "Trusted Contacts",
    description:
      "Designate family members, attorneys, or advocates who can access your vault instantly when you need them to.",
  },
  {
    icon: Bell,
    title: "Smart Notifications",
    description:
      "Automated reminders for document renewals, ID expirations, and important dates you can't afford to miss.",
  },
  {
    icon: Key,
    title: "Emergency Access",
    description:
      "Set up secure protocols so the right people have access to the right information at the right time.",
  },
  {
    icon: Smartphone,
    title: "Access Anywhere",
    description:
      "View and share your documents from any device—your vault travels with you, accessible 24/7.",
  },
  {
    icon: Shield,
    title: "Complete Privacy",
    description:
      "Your data stays private. We never sell your information and you control who sees what, always.",
  },
];

export function FeaturesSection() {
  return (
    <section className="section-padding bg-muted/50">
      <div className="container-wide">
        <SectionHeader
          badge="Features"
          title="Everything your family needs to stay protected"
          description="Simple, powerful tools designed for real families facing real challenges. Set up in minutes, access forever."
        />

        <div className="mt-12 lg:mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((feature, index) => (
            <FeatureCard
              key={feature.title}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
              className="animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` } as React.CSSProperties}
            />
          ))}
        </div>
      </div>
    </section>
  );
}