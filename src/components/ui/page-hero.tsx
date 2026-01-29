import { cn } from "@/lib/utils";

type AnimationVariant = 
  | "gradient-shift" 
  | "floating-orbs" 
  | "mesh-grid" 
  | "wave-pulse" 
  | "aurora"
  | "particle-field"
  | "ripple-pulse"
  | "shield-matrix"
  | "aurora-waves"
  | "network-pulse";

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
      "relative min-h-[60vh] flex items-center justify-center overflow-hidden",
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

      {/* NEW: Particle Field - Multiple floating dots */}
      {animation === "particle-field" && (
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
      )}

      {/* NEW: Ripple Pulse - Concentric circles expanding */}
      {animation === "ripple-pulse" && (
        <div className="absolute inset-0 overflow-hidden flex items-center justify-center">
          <div className="absolute w-[300px] h-[300px] border-2 border-white/20 rounded-full animate-ripple-expand" />
          <div className="absolute w-[300px] h-[300px] border-2 border-white/15 rounded-full animate-ripple-expand" style={{ animationDelay: '1s' }} />
          <div className="absolute w-[300px] h-[300px] border-2 border-white/10 rounded-full animate-ripple-expand" style={{ animationDelay: '2s' }} />
          <div className="absolute w-[300px] h-[300px] border border-accent/20 rounded-full animate-ripple-expand-delayed" />
          <div className="absolute w-[300px] h-[300px] border border-secondary/15 rounded-full animate-ripple-expand-delayed" style={{ animationDelay: '1s' }} />
          {/* Center glow */}
          <div className="absolute w-32 h-32 bg-white/10 rounded-full blur-xl animate-pulse-slow" />
        </div>
      )}

      {/* NEW: Shield Matrix - Grid with scanning beam */}
      {animation === "shield-matrix" && (
        <div className="absolute inset-0 overflow-hidden">
          {/* Grid lines */}
          <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.04)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.04)_1px,transparent_1px)] bg-[size:40px_40px] animate-grid-pulse" />
          {/* Vertical scan beam */}
          <div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-transparent via-primary/20 to-transparent animate-scan-beam" />
          {/* Corner accents */}
          <div className="absolute top-8 left-8 w-24 h-24 border-l-2 border-t-2 border-white/20 rounded-tl-lg" />
          <div className="absolute top-8 right-8 w-24 h-24 border-r-2 border-t-2 border-white/20 rounded-tr-lg" />
          <div className="absolute bottom-8 left-8 w-24 h-24 border-l-2 border-b-2 border-white/20 rounded-bl-lg" />
          <div className="absolute bottom-8 right-8 w-24 h-24 border-r-2 border-b-2 border-white/20 rounded-br-lg" />
          {/* Subtle glow overlay */}
          <div className="absolute inset-0 bg-gradient-radial from-primary/5 via-transparent to-transparent" />
        </div>
      )}

      {/* NEW: Aurora Waves - Flowing color bands */}
      {animation === "aurora-waves" && (
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-1/4 left-0 right-0 h-[150%] bg-gradient-to-r from-transparent via-primary/15 to-transparent blur-3xl animate-aurora-flow" />
          <div className="absolute -top-1/4 left-0 right-0 h-[150%] bg-gradient-to-r from-transparent via-secondary/10 to-transparent blur-3xl animate-aurora-flow-reverse" />
          <div className="absolute -top-1/4 left-0 right-0 h-[150%] bg-gradient-to-r from-transparent via-accent/10 to-transparent blur-3xl animate-aurora-flow" style={{ animationDelay: '5s' }} />
          {/* Subtle vertical gradient */}
          <div className="absolute inset-0 bg-gradient-to-b from-white/5 via-transparent to-white/5" />
        </div>
      )}

      {/* NEW: Network Pulse - Interconnected nodes */}
      {animation === "network-pulse" && (
        <div className="absolute inset-0 overflow-hidden">
          {/* Nodes */}
          <div className="absolute top-[20%] left-[20%] w-3 h-3 bg-white/50 rounded-full animate-node-pulse" />
          <div className="absolute top-[30%] left-[50%] w-4 h-4 bg-white/40 rounded-full animate-node-pulse" style={{ animationDelay: '0.5s' }} />
          <div className="absolute top-[25%] left-[75%] w-3 h-3 bg-white/45 rounded-full animate-node-pulse" style={{ animationDelay: '1s' }} />
          <div className="absolute top-[50%] left-[30%] w-4 h-4 bg-accent/50 rounded-full animate-node-pulse" style={{ animationDelay: '1.5s' }} />
          <div className="absolute top-[55%] left-[65%] w-3 h-3 bg-white/35 rounded-full animate-node-pulse" style={{ animationDelay: '2s' }} />
          <div className="absolute top-[70%] left-[45%] w-4 h-4 bg-secondary/40 rounded-full animate-node-pulse" style={{ animationDelay: '0.8s' }} />
          <div className="absolute top-[75%] left-[80%] w-3 h-3 bg-white/50 rounded-full animate-node-pulse" style={{ animationDelay: '1.3s' }} />
          <div className="absolute top-[80%] left-[15%] w-3 h-3 bg-white/40 rounded-full animate-node-pulse" style={{ animationDelay: '1.8s' }} />
          {/* Connection lines (using CSS gradients) */}
          <svg className="absolute inset-0 w-full h-full opacity-20">
            <line x1="20%" y1="20%" x2="50%" y2="30%" stroke="white" strokeWidth="1" strokeDasharray="5,5" className="animate-connection-pulse" />
            <line x1="50%" y1="30%" x2="75%" y2="25%" stroke="white" strokeWidth="1" strokeDasharray="5,5" className="animate-connection-pulse" style={{ animationDelay: '0.5s' }} />
            <line x1="50%" y1="30%" x2="30%" y2="50%" stroke="white" strokeWidth="1" strokeDasharray="5,5" className="animate-connection-pulse" style={{ animationDelay: '1s' }} />
            <line x1="30%" y1="50%" x2="65%" y2="55%" stroke="white" strokeWidth="1" strokeDasharray="5,5" className="animate-connection-pulse" style={{ animationDelay: '1.5s' }} />
            <line x1="65%" y1="55%" x2="45%" y2="70%" stroke="white" strokeWidth="1" strokeDasharray="5,5" className="animate-connection-pulse" style={{ animationDelay: '2s' }} />
            <line x1="45%" y1="70%" x2="80%" y2="75%" stroke="white" strokeWidth="1" strokeDasharray="5,5" className="animate-connection-pulse" style={{ animationDelay: '2.5s' }} />
            <line x1="45%" y1="70%" x2="15%" y2="80%" stroke="white" strokeWidth="1" strokeDasharray="5,5" className="animate-connection-pulse" style={{ animationDelay: '3s' }} />
          </svg>
        </div>
      )}

      {/* Content */}
      <div className="container-wide relative z-10 text-center text-white py-20">
        <h1 className="text-5xl font-bold sm:text-6xl lg:text-[4rem] tracking-tight">
          {title}
        </h1>
        {subtitle && (
          <p className="mt-6 text-xl text-white/80 max-w-2xl mx-auto">
            {subtitle}
          </p>
        )}
        {children}
      </div>
    </section>
  );
}