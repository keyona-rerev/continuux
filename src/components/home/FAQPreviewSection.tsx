import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { SectionHeader } from "@/components/ui/section-header";
import { cn } from "@/lib/utils";

const faqs = [
  {
    question: "How secure is my data with Continuux?",
    answer:
      "Your data is protected with 256-bit AES encryption—the same standard used by banks. We're SOC 2 Type II certified, meaning our security practices are independently audited. Your documents are encrypted both in transit and at rest, and we never have access to your unencrypted data.",
  },
  {
    question: "What happens to my vault if something happens to me?",
    answer:
      "You can designate trusted contacts who will receive access to your vault under conditions you specify. This could be immediately, after a period of inactivity, or upon receiving proper documentation. You're always in control of who can access what and when.",
  },
  {
    question: "Can I try Continuux before committing?",
    answer:
      "Absolutely! We're offering free accounts for early users—no credit card required. Start protecting your family today with no obligations.",
  },
  {
    question: "What types of documents can I store?",
    answer:
      "You can store any digital document—birth certificates, ID documents, medical records, emergency contacts, legal documents, photos, and more. We support all common file formats including PDF, Word, images, and videos.",
  },
  {
    question: "Is Continuux accessible from anywhere?",
    answer:
      "Yes! Access your vault from any device—phone, tablet, or computer. Your documents are always available when and where you need them, 24/7.",
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
              description="Everything you need to know about protecting your family with Continuux."
              align="left"
            />
            <p className="mt-8 text-muted-foreground">
              Can't find what you're looking for?{" "}
              <a href="#" className="text-primary font-semibold hover:underline">
                Contact our support team
              </a>
            </p>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="rounded-xl border border-border bg-card overflow-hidden transition-all duration-200 hover:border-primary/30"
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
                      "h-5 w-5 text-muted-foreground transition-transform duration-200 shrink-0",
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