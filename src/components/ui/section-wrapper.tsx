import { cn } from "@/lib/utils";

type SectionAnimation = "none" | "subtle-grain" | "gradient-sweep" | "dot-pulse" | "diagonal-lines" | "radial-glow";

interface SectionWrapperProps {
  children: React.ReactNode;
  className?: string;
  animation?: SectionAnimation;
  background?: "default" | "muted" | "card";
}

export function SectionWrapper({ 
  children, 
  className,
  animation = "none",
  background = "default"
}: SectionWrapperProps) {
  const bgClass = {
    default: "bg-background",
    muted: "bg-muted/50",
    card: "bg-card"
  }[background];

  return (
    <section className={cn(
      "relative section-padding overflow-hidden",
      bgClass,
      className
    )}>
      {/* Animation overlays */}
      {animation === "subtle-grain" && (
        <div className="absolute inset-0 opacity-[0.02] pointer-events-none">
          <div className="absolute inset-0 bg-noise animate-grain" />
        </div>
      )}
      
      {animation === "gradient-sweep" && (
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <div className="absolute -top-1/2 -left-1/2 w-full h-full bg-gradient-radial from-primary/3 to-transparent animate-sweep" />
        </div>
      )}
      
      {animation === "dot-pulse" && (
        <div className="absolute inset-0 pointer-events-none opacity-30">
          <div className="absolute inset-0 bg-[radial-gradient(circle,hsl(var(--primary)/0.1)_1px,transparent_1px)] bg-[size:32px_32px] animate-dot-pulse" />
        </div>
      )}
      
      {animation === "diagonal-lines" && (
        <div className="absolute inset-0 pointer-events-none opacity-[0.03]">
          <div className="absolute inset-0 bg-[repeating-linear-gradient(45deg,hsl(var(--foreground))_0,hsl(var(--foreground))_1px,transparent_0,transparent_50%)] bg-[size:20px_20px]" />
        </div>
      )}
      
      {animation === "radial-glow" && (
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[150%] h-[150%] bg-gradient-radial from-accent/5 via-transparent to-transparent animate-radial-pulse" />
        </div>
      )}

      <div className="relative z-10">
        {children}
      </div>
    </section>
  );
}
