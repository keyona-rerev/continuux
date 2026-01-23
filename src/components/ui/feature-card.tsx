import { LucideIcon } from "lucide-react";
import { cn } from "@/lib/utils";
import { CSSProperties } from "react";

interface FeatureCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  className?: string;
  style?: CSSProperties;
}

export function FeatureCard({
  icon: Icon,
  title,
  description,
  className,
  style,
}: FeatureCardProps) {
  return (
    <div
      className={cn(
        "group relative rounded-2xl bg-card p-6 shadow-soft transition-all duration-300 hover:shadow-elevated hover:-translate-y-1 border border-border",
        className
      )}
      style={style}
    >
      <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
        <Icon className="h-6 w-6" />
      </div>
      <h3 className="text-xl font-semibold text-foreground mb-2">
        {title}
      </h3>
      <p className="text-muted-foreground leading-relaxed">{description}</p>
    </div>
  );
}
