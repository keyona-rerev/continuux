import { cn } from "@/lib/utils";

interface StatsCardProps {
  value: string;
  label: string;
  className?: string;
}

export function StatsCard({ value, label, className }: StatsCardProps) {
  return (
    <div className={cn("text-center", className)}>
      <div className="font-serif text-4xl font-bold text-foreground lg:text-5xl">
        {value}
      </div>
      <p className="mt-2 text-muted-foreground">{label}</p>
    </div>
  );
}
