import { FileX, Clock, Users, AlertTriangle, ArrowRight, CheckCircle, Heart } from "lucide-react";

const problems = [
  {
    icon: FileX,
    title: "Documents Scattered Everywhere",
    description: "Important papers in filing cabinets, desks, safe deposit boxes, and digital folders—impossible to find in an emergency",
  },
  {
    icon: Clock,
    title: "No Plan for Emergencies",
    description: "Family left scrambling if something happens—no access to critical information, no instructions",
  },
  {
    icon: Users,
    title: "Communication Gaps",
    description: "Loved ones don't know where to find what they need when every second counts",
  },
  {
    icon: AlertTriangle,
    title: "Security Risks",
    description: "Sensitive data spread across emails, cloud drives, and physical locations—vulnerable and unprotected",
  },
];

const solutions = [
  "One secure vault for all your documents",
  "Trusted contacts get access when needed",
  "Accessible from anywhere, on any device",
  "Bank-level encryption protection",
];

export function ProblemSolutionSection() {
  return (
    <section className="section-padding bg-background">
      <div className="container-wide">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Problem Side */}
          <div>
            <div className="inline-flex items-center rounded-full bg-destructive/10 px-4 py-2 text-sm font-semibold text-destructive mb-6">
              The Challenge
            </div>
            <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl lg:text-[2.75rem] leading-tight mb-6">
              Family separation can happen without warning
            </h2>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              When families face unexpected separation, having the right documents accessible 
              can make the difference between resolution and prolonged uncertainty.
            </p>
            
            <div className="space-y-4">
              {problems.map((problem) => (
                <div
                  key={problem.title}
                  className="flex items-start gap-4 p-4 rounded-xl bg-destructive/5 border border-destructive/10"
                >
                  <div className="h-10 w-10 shrink-0 rounded-lg bg-destructive/10 flex items-center justify-center">
                    <problem.icon className="h-5 w-5 text-destructive" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground">{problem.title}</h3>
                    <p className="text-sm text-muted-foreground mt-1">{problem.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Solution Side */}
          <div className="relative">
            {/* Arrow connector (hidden on mobile) */}
            <div className="hidden lg:block absolute -left-10 top-1/2 -translate-y-1/2">
              <ArrowRight className="h-8 w-8 text-primary" />
            </div>
            
            <div className="bg-card rounded-[20px] border border-border p-8 lg:p-10 shadow-elevated">
              <div className="inline-flex items-center rounded-full bg-secondary/10 px-4 py-2 text-sm font-semibold text-secondary mb-6">
                The Solution
              </div>
              <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl lg:text-[2.75rem] leading-tight mb-6">
                Continuux keeps your family connected
              </h2>
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                A secure digital vault that ensures your loved ones have instant access 
                to every document they need—no matter what happens.
              </p>
              
              <div className="space-y-4">
                {solutions.map((solution) => (
                  <div key={solution} className="flex items-center gap-3">
                    <div className="h-6 w-6 shrink-0 rounded-full bg-secondary/10 flex items-center justify-center">
                      <CheckCircle className="h-4 w-4 text-secondary" />
                    </div>
                    <span className="text-foreground font-medium">{solution}</span>
                  </div>
                ))}
              </div>

              <div className="mt-8 pt-6 border-t border-border">
                <div className="flex items-center gap-4">
                  <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center">
                    <Heart className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <p className="font-semibold text-foreground">Peace of mind, guaranteed</p>
                    <p className="text-sm text-muted-foreground">Your family protected, your legacy secure</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}