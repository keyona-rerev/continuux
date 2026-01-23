import { cn } from "@/lib/utils";

type AnimationVariant = "gradient-shift" | "floating-orbs" | "mesh-grid" | "wave-pulse" | "aurora";

interface PageHeroProps {
  title: string;
  subtitle?: string;
  animation?: AnimationVariant;
  className?: string;
  children?: React.ReactNode;
}

export function PageHero({ 
  title, 
  subtitle, 
  animation = "gradient-shift",
  className,
  children 
}: PageHeroProps) {
  return (
    <section className={cn(
      "relative pt-32 pb-20 min-h-[320px] overflow-hidden",
      className
    )}>
      {/* Base gradient */}
      <div className="absolute inset-0 hero-gradient" />
      
      {/* Animation overlays */}
      {animation === "gradient-shift" && (
        <div className="absolute inset-0 opacity-30">
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent animate-gradient-shift" />
        </div>
      )}
      
      {animation === "floating-orbs" && (
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-white/5 rounded-full blur-3xl animate-float-slow" />
          <div className="absolute bottom-1/4 right-1/4 w-48 h-48 bg-accent/10 rounded-full blur-2xl animate-float-delayed" />
          <div className="absolute top-1/2 right-1/3 w-32 h-32 bg-secondary/10 rounded-full blur-xl animate-float" />
        </div>
      )}
      
      {animation === "mesh-grid" && (
        <div className="absolute inset-0 opacity-20">
          <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:60px_60px] animate-mesh-drift" />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-white/5 to-transparent animate-pulse-slow" />
        </div>
      )}
      
      {animation === "wave-pulse" && (
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white/5 to-transparent animate-wave-1" />
          <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-white/3 to-transparent animate-wave-2" />
          <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-accent/5 to-transparent animate-wave-3" />
        </div>
      )}
      
      {animation === "aurora" && (
        <div className="absolute inset-0 overflow-hidden opacity-40">
          <div className="absolute -top-1/2 -left-1/4 w-full h-full bg-gradient-conic from-accent/20 via-secondary/10 to-primary/20 blur-3xl animate-aurora-1" />
          <div className="absolute -bottom-1/2 -right-1/4 w-3/4 h-full bg-gradient-conic from-secondary/15 via-accent/10 to-transparent blur-3xl animate-aurora-2" />
        </div>
      )}

      {/* Content */}
      <div className="container-wide relative z-10 text-center text-white">
        <h1 className="text-4xl font-bold sm:text-5xl lg:text-6xl tracking-tight">
          {title}
        </h1>
        {subtitle && (
          <p className="mt-6 text-lg text-white/80 max-w-2xl mx-auto">
            {subtitle}
          </p>
        )}
        {children}
      </div>
    </section>
  );
}
