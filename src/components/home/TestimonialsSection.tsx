import { SectionHeader } from "@/components/ui/section-header";
import { TestimonialCard } from "@/components/ui/testimonial-card";

const testimonials = [
  {
    quote:
      "After my father passed unexpectedly, we spent months searching for important documents. With Continuux, my family will never face that chaos. It's given me real peace of mind.",
    author: "Margaret L.",
    role: "Retired Teacher, California",
    rating: 5,
  },
  {
    quote:
      "As a financial advisor, I recommend Continuux to all my clients. It's the missing piece in estate planning—secure, organized, and accessible when it matters most.",
    author: "David K.",
    role: "Certified Financial Planner",
    rating: 5,
  },
  {
    quote:
      "Setting up our family vault took less than an hour. Now my wife and I both know exactly where everything is, and our kids can access what they need if something happens.",
    author: "James & Sarah M.",
    role: "Small Business Owners, Texas",
    rating: 5,
  },
];

export function TestimonialsSection() {
  return (
    <section className="section-padding bg-background">
      <div className="container-wide">
        <SectionHeader
          badge="Testimonials"
          title="Trusted by families everywhere"
          description="See why thousands of families trust Continuux to protect their most important documents and memories."
        />

        <div className="mt-12 lg:mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <TestimonialCard
              key={index}
              quote={testimonial.quote}
              author={testimonial.author}
              role={testimonial.role}
              rating={testimonial.rating}
            />
          ))}
        </div>

        {/* Trust indicators */}
        <div className="mt-12 lg:mt-16 pt-8 border-t border-border">
          <div className="flex flex-wrap items-center justify-center gap-8 lg:gap-16 opacity-60">
            <div className="text-center">
              <p className="text-2xl font-bold text-foreground">10,000+</p>
              <p className="text-sm text-muted-foreground">Families Protected</p>
            </div>
            <div className="text-center">
              <p className="text-2xl font-bold text-foreground">500,000+</p>
              <p className="text-sm text-muted-foreground">Documents Secured</p>
            </div>
            <div className="text-center">
              <p className="text-2xl font-bold text-foreground">99.9%</p>
              <p className="text-sm text-muted-foreground">Uptime</p>
            </div>
            <div className="text-center">
              <p className="text-2xl font-bold text-foreground">4.9/5</p>
              <p className="text-sm text-muted-foreground">Customer Rating</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
