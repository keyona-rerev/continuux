import { Star } from "lucide-react";
import { cn } from "@/lib/utils";

interface TestimonialCardProps {
  quote: string;
  author: string;
  role: string;
  avatar?: string;
  rating?: number;
  className?: string;
}

export function TestimonialCard({
  quote,
  author,
  role,
  avatar,
  rating = 5,
  className,
}: TestimonialCardProps) {
  return (
    <div
      className={cn(
        "relative rounded-2xl bg-card p-6 lg:p-8 shadow-soft border border-border",
        className
      )}
    >
      {/* Rating */}
      <div className="flex gap-1 mb-4">
        {Array.from({ length: rating }).map((_, i) => (
          <Star
            key={i}
            className="h-5 w-5 fill-accent text-accent"
          />
        ))}
      </div>

      {/* Quote */}
      <blockquote className="text-foreground text-lg leading-relaxed mb-6">
        "{quote}"
      </blockquote>

      {/* Author */}
      <div className="flex items-center gap-4">
        <div className="h-12 w-12 rounded-full bg-muted flex items-center justify-center overflow-hidden">
          {avatar ? (
            <img src={avatar} alt={author} className="h-full w-full object-cover" />
          ) : (
            <span className="font-medium text-muted-foreground">
              {author.charAt(0)}
            </span>
          )}
        </div>
        <div>
          <p className="font-semibold text-foreground">{author}</p>
          <p className="text-sm text-muted-foreground">{role}</p>
        </div>
      </div>
    </div>
  );
}
