import { cn } from "@/lib/utils";

interface PageHeroProps {
  title: string;
  subtitle?: string;
  className?: string;
  children?: React.ReactNode;
}

export function PageHero({ 
  title, 
  subtitle, 
  className,
  children 
}: PageHeroProps) {
  return (
    <section className={cn(
      "relative min-h-[70vh] flex items-center justify-center overflow-hidden",
      className
    )}>
      {/* Base gradient */}
      <div className="absolute inset-0 hero-gradient" />
      
      {/* Particle Field Animation - unified across all pages */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Large particles */}
        <div className="absolute top-[10%] left-[15%] w-4 h-4 bg-white/30 rounded-full blur-sm animate-particle-drift-1" />
        <div className="absolute top-[30%] left-[70%] w-3 h-3 bg-white/25 rounded-full blur-sm animate-particle-drift-2" />
        <div className="absolute top-[60%] left-[25%] w-5 h-5 bg-white/20 rounded-full blur-sm animate-particle-drift-3" />
        <div className="absolute top-[80%] left-[60%] w-4 h-4 bg-white/30 rounded-full blur-sm animate-particle-drift-1" style={{ animationDelay: '2s' }} />
        <div className="absolute top-[20%] left-[45%] w-3 h-3 bg-accent/30 rounded-full blur-sm animate-particle-drift-2" style={{ animationDelay: '1s' }} />
        {/* Small particles */}
        <div className="absolute top-[45%] left-[80%] w-2 h-2 bg-white/40 rounded-full animate-particle-drift-3" style={{ animationDelay: '3s' }} />
        <div className="absolute top-[70%] left-[10%] w-2 h-2 bg-white/35 rounded-full animate-particle-drift-1" style={{ animationDelay: '4s' }} />
        <div className="absolute top-[15%] left-[85%] w-2 h-2 bg-secondary/30 rounded-full animate-particle-drift-2" style={{ animationDelay: '2.5s' }} />
        <div className="absolute top-[55%] left-[50%] w-3 h-3 bg-white/25 rounded-full blur-[1px] animate-particle-drift-3" style={{ animationDelay: '1.5s' }} />
        <div className="absolute top-[85%] left-[35%] w-2 h-2 bg-accent/25 rounded-full animate-particle-drift-1" style={{ animationDelay: '3.5s' }} />
      </div>

      {/* Content - Apple-style frosted glass card */}
      <div className="relative z-10 flex items-center justify-center px-4">
        <div className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-3xl px-8 py-12 sm:px-16 sm:py-16 max-w-3xl text-center shadow-2xl">
          <h1 className="text-4xl font-extrabold text-white sm:text-5xl lg:text-6xl tracking-tight">
            {title}
          </h1>
          {subtitle && (
            <p className="mt-6 text-lg sm:text-xl text-white/80 leading-relaxed max-w-2xl mx-auto">
              {subtitle}
            </p>
          )}
          {children}
        </div>
      </div>
    </section>
  );
}
