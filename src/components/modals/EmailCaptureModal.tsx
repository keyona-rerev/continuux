import { useState, useEffect } from "react";
import { X, Gift, Shield, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

export function EmailCaptureModal() {
  const [isOpen, setIsOpen] = useState(false);
  const [email, setEmail] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);

  useEffect(() => {
    // Check if user has already seen the modal
    const hasSeenModal = localStorage.getItem("continuux-modal-seen");
    if (hasSeenModal) return;

    // Show modal after 30 seconds
    const timer = setTimeout(() => {
      setIsOpen(true);
    }, 30000);

    // Exit intent detection
    const handleMouseLeave = (e: MouseEvent) => {
      if (e.clientY <= 0 && !localStorage.getItem("continuux-modal-seen")) {
        setIsOpen(true);
      }
    };

    document.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      clearTimeout(timer);
      document.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, []);

  const handleClose = () => {
    setIsOpen(false);
    localStorage.setItem("continuux-modal-seen", "true");
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In production, this would submit to an API
    console.log("Email captured:", email);
    setIsSubmitted(true);
    setTimeout(() => {
      handleClose();
    }, 2000);
  };

  if (isSubmitted) {
    return (
      <Dialog open={isOpen} onOpenChange={handleClose}>
        <DialogContent className="sm:max-w-md">
          <div className="flex flex-col items-center justify-center py-8 text-center">
            <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-secondary/10">
              <CheckCircle className="h-8 w-8 text-secondary" />
            </div>
            <h3 className="font-serif text-2xl font-bold text-foreground mb-2">
              You're on the list!
            </h3>
            <p className="text-muted-foreground">
              Check your email for a confirmation and your free guide.
            </p>
          </div>
        </DialogContent>
      </Dialog>
    );
  }

  return (
    <Dialog open={isOpen} onOpenChange={handleClose}>
      <DialogContent className="sm:max-w-lg p-0 overflow-hidden">
        <div className="hero-gradient px-6 py-8 text-center text-primary-foreground">
          <div className="mb-3 inline-flex items-center gap-2 rounded-full bg-white/20 px-3 py-1 text-sm font-medium">
            <Gift className="h-4 w-4" />
            Free Resource
          </div>
          <DialogHeader>
            <DialogTitle className="font-serif text-2xl font-bold text-primary-foreground">
              Get Your Free Estate Planning Checklist
            </DialogTitle>
          </DialogHeader>
          <p className="mt-2 text-primary-foreground/80">
            A comprehensive guide to organizing your digital legacy
          </p>
        </div>
        
        <div className="p-6">
          <form onSubmit={handleSubmit} className="space-y-4">
            <Input
              type="email"
              placeholder="Enter your email address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="h-12"
            />
            <Button type="submit" className="w-full h-12 text-base">
              Get Free Checklist
            </Button>
          </form>
          
          <div className="mt-6 flex items-center justify-center gap-4 text-xs text-muted-foreground">
            <div className="flex items-center gap-1">
              <Shield className="h-3 w-3" />
              <span>No spam, ever</span>
            </div>
            <span>•</span>
            <span>Unsubscribe anytime</span>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
