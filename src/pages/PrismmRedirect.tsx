import { useEffect, useState } from "react";
import { Shield, ArrowRight, ExternalLink } from "lucide-react";

const PrismmRedirect = () => {
  const [countdown, setCountdown] = useState(3);
  const [redirecting, setRedirecting] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => {
      setCountdown((prev) => {
        if (prev <= 1) {
          clearInterval(timer);
          setRedirecting(true);
          // Redirect after animation
          setTimeout(() => {
            window.location.href = "https://app.getprismm.com/signup/new";
          }, 300);
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-primary via-primary/90 to-accent flex items-center justify-center relative overflow-hidden">
      {/* Animated background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-white/10 rounded-full blur-3xl animate-float-slow" />
        <div className="absolute bottom-1/4 right-1/4 w-48 h-48 bg-white/5 rounded-full blur-2xl animate-float-delayed" />
        <div className="absolute top-1/2 right-1/3 w-32 h-32 bg-secondary/20 rounded-full blur-xl animate-float" />
      </div>

      {/* Content */}
      <div className={`relative z-10 text-center px-6 max-w-xl transition-all duration-500 ${redirecting ? 'opacity-0 scale-95' : 'opacity-100 scale-100'}`}>
        {/* Logo mark */}
        <div className="flex justify-center mb-8">
          <div className="relative">
            <div className="w-20 h-20 rounded-2xl bg-white/20 backdrop-blur-sm flex items-center justify-center border border-white/30">
              <Shield className="w-10 h-10 text-white" />
            </div>
            <div className="absolute -bottom-2 -right-2 w-8 h-8 rounded-lg bg-secondary flex items-center justify-center">
              <ArrowRight className="w-4 h-4 text-secondary-foreground" />
            </div>
          </div>
        </div>

        {/* Main message */}
        <h1 className="text-3xl sm:text-4xl font-bold text-white mb-4">
          You're being redirected to Prismm
        </h1>
        
        <p className="text-lg text-white/80 mb-6 leading-relaxed">
          <span className="font-semibold text-white">Continuux is powered by Prismm</span> — the secure digital vault platform. 
          You'll create your account on Prismm's secure signup page.
        </p>

        {/* Info box */}
        <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 mb-8 border border-white/20">
          <div className="flex items-start gap-4 text-left">
            <ExternalLink className="w-6 h-6 text-secondary shrink-0 mt-0.5" />
            <div>
              <p className="text-white font-medium">Secure Signup at getprismm.com</p>
              <p className="text-white/70 text-sm mt-1">
                Your Continuux vault is built on Prismm's trusted infrastructure with bank-level encryption.
              </p>
            </div>
          </div>
        </div>

        {/* Countdown */}
        <div className="flex flex-col items-center gap-3">
          <div className="text-5xl font-bold text-white tabular-nums">
            {countdown}
          </div>
          <p className="text-white/60 text-sm">
            Redirecting in {countdown} second{countdown !== 1 ? 's' : ''}...
          </p>
        </div>

        {/* Manual link */}
        <a 
          href="https://app.getprismm.com/signup/new"
          className="inline-flex items-center gap-2 mt-8 text-white/70 hover:text-white transition-colors text-sm underline underline-offset-4"
        >
          Click here if you're not redirected automatically
          <ArrowRight className="w-4 h-4" />
        </a>
      </div>
    </div>
  );
};

export default PrismmRedirect;
