import { LucideIcon } from "lucide-react";
import { cn } from "@/lib/utils";

interface BadgeConfig {
  icon?: LucideIcon;
  text: string;
}

interface HeadlineConfig {
  line1?: string;
  line3?: string;
}

interface StatItem {
  number: string;
  label: string;
}

interface FeatureItem {
  icon: LucideIcon;
  title: string;
  description: string;
  number?: string;
}

interface DarkHeroSectionProps {
  badge: BadgeConfig;
  headline: HeadlineConfig;
  highlightedText: string;
  subtitle: string;
  gridType: "stats" | "features";
  gridItems: StatItem[] | FeatureItem[];
  gridColumns?: 2 | 3 | 4;
  className?: string;
}

export function DarkHeroSection({
  badge,
  headline,
  highlightedText,
  subtitle,
  gridType,
  gridItems,
  gridColumns = 3,
  className,
}: DarkHeroSectionProps) {
  const BadgeIcon = badge.icon;
  
  const gridColsClass = {
    2: "md:grid-cols-2",
    3: "md:grid-cols-3",
    4: "md:grid-cols-2 lg:grid-cols-4",
  }[gridColumns];

  return (
    <section
      className={cn(
        "relative min-h-screen flex items-center overflow-hidden py-32",
        className
      )}
      style={{
        background: "linear-gradient(135deg, #1a0a2e 0%, #0f0a1e 50%, #1a0a2e 100%)",
      }}
    >
      {/* Floating gradient backgrounds */}
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

      {/* Content */}
      <div className="container mx-auto px-5 relative z-10">
        <div className="max-w-5xl mx-auto">
          {/* Badge */}
          <div className="flex justify-center mb-6">
            <div 
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-semibold"
              style={{
                backgroundColor: "rgba(99, 102, 241, 0.15)",
                borderWidth: "1px",
                borderColor: "rgba(99, 102, 241, 0.3)",
                color: "#a5b4fc",
              }}
            >
              {BadgeIcon && <BadgeIcon className="w-4 h-4" />}
              {badge.text}
            </div>
          </div>

          {/* Headline */}
          <h1 
            className="text-5xl md:text-6xl lg:text-7xl font-extrabold leading-tight tracking-tight text-white mb-8 text-center"
            style={{ letterSpacing: "-1px" }}
          >
            {headline.line1}
            {headline.line1 && <br />}
            <span 
              className="bg-clip-text text-transparent"
              style={{
                backgroundImage: "linear-gradient(135deg, #6366f1 0%, #a855f7 100%)",
              }}
            >
              {highlightedText}
            </span>
            {headline.line3 && <br />}
            {headline.line3}
          </h1>

          {/* Subtitle */}
          <p 
            className="text-lg md:text-xl lg:text-2xl leading-relaxed mb-12 text-center max-w-3xl mx-auto"
            style={{ color: "#c7c7c7" }}
          >
            {subtitle}
          </p>

          {/* Stats Grid */}
          {gridType === "stats" && (
            <div className={cn("grid grid-cols-1 gap-12 mt-20", gridColsClass)}>
              {(gridItems as StatItem[]).map((item, index) => (
                <div key={index} className="text-center">
                  <div 
                    className="text-5xl md:text-6xl font-extrabold bg-clip-text text-transparent mb-3"
                    style={{
                      backgroundImage: "linear-gradient(135deg, #6366f1 0%, #a855f7 100%)",
                    }}
                  >
                    {item.number}
                  </div>
                  <div 
                    className="text-base font-medium"
                    style={{ color: "#c7c7c7" }}
                  >
                    {item.label}
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* Features Grid */}
          {gridType === "features" && (
            <div className={cn("grid grid-cols-1 gap-6 md:gap-8 mt-20", gridColsClass)}>
              {(gridItems as FeatureItem[]).map((item, index) => {
                const ItemIcon = item.icon;
                return (
                  <div
                    key={index}
                    className="backdrop-blur-xl rounded-2xl p-8 text-center transition-all duration-300 hover:-translate-y-1"
                    style={{
                      backgroundColor: "rgba(255, 255, 255, 0.05)",
                      borderWidth: "1px",
                      borderColor: "rgba(255, 255, 255, 0.1)",
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.backgroundColor = "rgba(255, 255, 255, 0.08)";
                      e.currentTarget.style.borderColor = "rgba(99, 102, 241, 0.3)";
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.backgroundColor = "rgba(255, 255, 255, 0.05)";
                      e.currentTarget.style.borderColor = "rgba(255, 255, 255, 0.1)";
                    }}
                  >
                    <div 
                      className="w-14 h-14 rounded-xl flex items-center justify-center mx-auto mb-5"
                      style={{ backgroundColor: "rgba(99, 102, 241, 0.1)" }}
                    >
                      {item.number ? (
                        <span 
                          className="text-xl font-bold"
                          style={{ color: "#a5b4fc" }}
                        >
                          {item.number}
                        </span>
                      ) : (
                        <ItemIcon 
                          className="w-7 h-7"
                          style={{ color: "#a5b4fc" }}
                        />
                      )}
                    </div>
                    <h3 
                      className="text-lg font-bold text-white mb-3"
                    >
                      {item.title}
                    </h3>
                    <p 
                      className="text-sm leading-relaxed"
                      style={{ color: "#c7c7c7" }}
                    >
                      {item.description}
                    </p>
                  </div>
                );
              })}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
