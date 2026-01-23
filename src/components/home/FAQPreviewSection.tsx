import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { SectionHeader } from "@/components/ui/section-header";
import { cn } from "@/lib/utils";

const faqs = [
  {
    question: "How secure is my data with Continuux?",
    answer:
      "Your data is protected with 256-bit AES encryption—the same standard used by banks and government agencies. We're SOC 2 Type II certified, which means our security practices are independently audited. Your documents are encrypted both in transit and at rest, and we never have access to your unencrypted data.",
  },
  {
    question: "What happens to my vault if something happens to me?",
    answer:
      "You can designate trusted contacts who will receive access to your vault under conditions you specify. This could be immediately, after a period of inactivity, or upon receiving proper documentation. You're always in control of who can access what and when.",
  },
  {
    question: "Can I try Continuux before committing?",
    answer:
      "Absolutely! We offer a 14-day free trial with full access to all features. No credit card required to start. If you decide Continuux isn't right for you, simply don't continue—there's no obligation.",
  },
  {
    question: "What types of documents can I store?",
    answer:
      "You can store any digital document—wills, trusts, insurance policies, property deeds, medical directives, photos, videos, passwords, and more. We support all common file formats including PDF, Word, images, and videos up to 100MB each.",
  },
  {
    question: "How do I qualify for a free account?",
    answer:
      "We believe everyone deserves to protect their legacy. If you're facing financial hardship, we offer free accounts on a case-by-case basis. Simply fill out our application form on the pricing page, and we'll review your request within 48 hours.",
  },
];

export function FAQPreviewSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="section-padding bg-background">
      <div className="container-wide">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20">
          <div>
            <SectionHeader
              badge="FAQ"
              title="Common questions, answered"
              description="Everything you need to know about securing your digital legacy with Continuux."
              align="left"
            />
            <p className="mt-8 text-muted-foreground">
              Can't find what you're looking for?{" "}
              <a href="#" className="text-primary font-medium hover:underline">
                Contact our support team
              </a>
            </p>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="rounded-xl border border-border bg-card overflow-hidden"
              >
                <button
                  onClick={() => setOpenIndex(openIndex === index ? null : index)}
                  className="flex w-full items-center justify-between p-5 text-left"
                >
                  <span className="font-medium text-foreground pr-4">
                    {faq.question}
                  </span>
                  <ChevronDown
                    className={cn(
                      "h-5 w-5 text-muted-foreground transition-transform shrink-0",
                      openIndex === index && "rotate-180"
                    )}
                  />
                </button>
                {openIndex === index && (
                  <div className="px-5 pb-5 pt-0">
                    <p className="text-muted-foreground leading-relaxed">
                      {faq.answer}
                    </p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
