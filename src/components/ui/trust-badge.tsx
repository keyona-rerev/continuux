import { LucideIcon } from "lucide-react";
import { cn } from "@/lib/utils";

interface TrustBadgeProps {
  icon: LucideIcon;
  text: string;
  variant?: "default" | "success" | "muted";
  className?: string;
}

export function TrustBadge({
  icon: Icon,
  text,
  variant = "default",
  className,
}: TrustBadgeProps) {
  return (
    <div
      className={cn(
        "inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm font-semibold border",
        {
          "bg-primary/10 border-primary/20 text-primary": variant === "default",
          "bg-secondary/10 border-secondary/20 text-secondary": variant === "success",
          "bg-muted border-border text-muted-foreground": variant === "muted",
        },
        className
      )}
    >
      <Icon className="h-4 w-4" />
      <span>{text}</span>
    </div>
  );
}