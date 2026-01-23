import { Shield, FolderLock, Users, Bell, Smartphone, Key } from "lucide-react";
import { SectionHeader } from "@/components/ui/section-header";
import { FeatureCard } from "@/components/ui/feature-card";

const features = [
  {
    icon: FolderLock,
    title: "Secure Document Storage",
    description:
      "Upload and organize wills, insurance policies, property deeds, and any important documents with military-grade encryption.",
  },
  {
    icon: Users,
    title: "Trusted Contacts",
    description:
      "Designate family members, attorneys, or advisors who can access your vault when you need them to—on your terms.",
  },
  {
    icon: Bell,
    title: "Smart Notifications",
    description:
      "Automated reminders for document renewals, policy expirations, and important dates you shouldn't miss.",
  },
  {
    icon: Key,
    title: "Legacy Access",
    description:
      "Set up secure protocols for what happens to your digital assets in case of emergency or passing.",
  },
  {
    icon: Smartphone,
    title: "Access Anywhere",
    description:
      "View and manage your vault from any device with our secure mobile app and web platform.",
  },
  {
    icon: Shield,
    title: "Audit Trail",
    description:
      "Complete activity logs show who accessed what and when, giving you full transparency and control.",
  },
];

export function FeaturesSection() {
  return (
    <section className="section-padding bg-muted/50">
      <div className="container-wide">
        <SectionHeader
          badge="Features"
          title="Everything you need to protect your legacy"
          description="Powerful tools designed with simplicity in mind. Organize, protect, and share your most important documents."
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
