import type { Config } from "tailwindcss";

export default {
  darkMode: ["class"],
  content: ["./pages/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}", "./app/**/*.{ts,tsx}", "./src/**/*.{ts,tsx}"],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        sidebar: {
          DEFAULT: "hsl(var(--sidebar-background))",
          foreground: "hsl(var(--sidebar-foreground))",
          primary: "hsl(var(--sidebar-primary))",
          "primary-foreground": "hsl(var(--sidebar-primary-foreground))",
          accent: "hsl(var(--sidebar-accent))",
          "accent-foreground": "hsl(var(--sidebar-accent-foreground))",
          border: "hsl(var(--sidebar-border))",
          ring: "hsl(var(--sidebar-ring))",
        },
        success: {
          DEFAULT: "hsl(var(--success))",
          foreground: "hsl(var(--success-foreground))",
        },
        warning: {
          DEFAULT: "hsl(var(--warning))",
          foreground: "hsl(var(--warning-foreground))",
        },
        indigo: {
          DEFAULT: "hsl(var(--indigo))",
          deep: "hsl(var(--indigo-deep))",
        },
        emerald: "hsl(var(--emerald))",
        charcoal: "hsl(var(--charcoal))",
        slate: "hsl(var(--slate))",
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
        "xl": "1rem",
        "2xl": "1.25rem",
        "3xl": "1.5rem",
      },
      fontFamily: {
        // System font stack per brand brief - no custom fonts
        sans: [
          "-apple-system",
          "BlinkMacSystemFont",
          "'Segoe UI'",
          "Roboto",
          "Oxygen",
          "Ubuntu",
          "Cantarell",
          "'Fira Sans'",
          "'Droid Sans'",
          "'Helvetica Neue'",
          "sans-serif",
        ],
      },
      fontSize: {
        // H1: 64px per brand spec
        "hero": ["4rem", { lineHeight: "1.1", letterSpacing: "-0.025em", fontWeight: "800" }],
        // Subtitle/Lead: 20px per brand spec
        "lead": ["1.25rem", { lineHeight: "1.6", fontWeight: "400" }],
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
        "fade-in": {
          from: { opacity: "0" },
          to: { opacity: "1" },
        },
        "slide-up": {
          from: { opacity: "0", transform: "translateY(20px)" },
          to: { opacity: "1", transform: "translateY(0)" },
        },
        "slide-down": {
          from: { opacity: "0", transform: "translateY(-10px)" },
          to: { opacity: "1", transform: "translateY(0)" },
        },
        "scale-in": {
          from: { opacity: "0", transform: "scale(0.95)" },
          to: { opacity: "1", transform: "scale(1)" },
        },
        "float": {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-10px)" },
        },
        "float-slow": {
          "0%, 100%": { transform: "translateY(0) scale(1)" },
          "50%": { transform: "translateY(-20px) scale(1.05)" },
        },
        "float-delayed": {
          "0%, 100%": { transform: "translateY(0) translateX(0)" },
          "50%": { transform: "translateY(-15px) translateX(10px)" },
        },
        "gradient-shift": {
          "0%": { transform: "translateX(-100%)" },
          "100%": { transform: "translateX(100%)" },
        },
        "mesh-drift": {
          "0%": { transform: "translate(0, 0)" },
          "100%": { transform: "translate(60px, 60px)" },
        },
        "pulse-slow": {
          "0%, 100%": { opacity: "0.3" },
          "50%": { opacity: "0.6" },
        },
        "wave-1": {
          "0%, 100%": { transform: "translateY(0) scaleY(1)" },
          "50%": { transform: "translateY(-5px) scaleY(1.1)" },
        },
        "wave-2": {
          "0%, 100%": { transform: "translateY(0) scaleY(1)" },
          "50%": { transform: "translateY(-8px) scaleY(1.15)" },
        },
        "wave-3": {
          "0%, 100%": { transform: "translateY(0) scaleY(1)" },
          "50%": { transform: "translateY(-3px) scaleY(1.05)" },
        },
        "aurora-1": {
          "0%": { transform: "rotate(0deg) scale(1)" },
          "50%": { transform: "rotate(180deg) scale(1.2)" },
          "100%": { transform: "rotate(360deg) scale(1)" },
        },
        "aurora-2": {
          "0%": { transform: "rotate(360deg) scale(1.1)" },
          "50%": { transform: "rotate(180deg) scale(0.9)" },
          "100%": { transform: "rotate(0deg) scale(1.1)" },
        },
        "sweep": {
          "0%": { transform: "translate(-50%, -50%) rotate(0deg)" },
          "100%": { transform: "translate(-50%, -50%) rotate(360deg)" },
        },
        "dot-pulse": {
          "0%, 100%": { opacity: "0.2" },
          "50%": { opacity: "0.4" },
        },
        "radial-pulse": {
          "0%, 100%": { opacity: "0.3", transform: "translate(-50%, -50%) scale(1)" },
          "50%": { opacity: "0.6", transform: "translate(-50%, -50%) scale(1.1)" },
        },
        "grain": {
          "0%, 100%": { transform: "translate(0, 0)" },
          "10%": { transform: "translate(-5%, -10%)" },
          "30%": { transform: "translate(3%, -15%)" },
          "50%": { transform: "translate(12%, 9%)" },
          "70%": { transform: "translate(9%, 4%)" },
          "90%": { transform: "translate(-1%, 7%)" },
        },
        // New hero animations
        "particle-drift-1": {
          "0%, 100%": { transform: "translate(0, 0) scale(1)", opacity: "0.6" },
          "25%": { transform: "translate(50px, -30px) scale(1.2)", opacity: "0.8" },
          "50%": { transform: "translate(100px, 20px) scale(0.8)", opacity: "0.4" },
          "75%": { transform: "translate(30px, 50px) scale(1.1)", opacity: "0.7" },
        },
        "particle-drift-2": {
          "0%, 100%": { transform: "translate(0, 0) scale(1)", opacity: "0.5" },
          "33%": { transform: "translate(-40px, 60px) scale(1.3)", opacity: "0.9" },
          "66%": { transform: "translate(80px, -20px) scale(0.7)", opacity: "0.3" },
        },
        "particle-drift-3": {
          "0%, 100%": { transform: "translate(0, 0) scale(1)", opacity: "0.7" },
          "20%": { transform: "translate(70px, 40px) scale(0.9)", opacity: "0.5" },
          "40%": { transform: "translate(-30px, 80px) scale(1.4)", opacity: "0.8" },
          "60%": { transform: "translate(-60px, -10px) scale(1.1)", opacity: "0.6" },
          "80%": { transform: "translate(40px, -50px) scale(0.8)", opacity: "0.4" },
        },
        "ripple-expand": {
          "0%": { transform: "scale(0)", opacity: "0.6" },
          "50%": { opacity: "0.3" },
          "100%": { transform: "scale(2.5)", opacity: "0" },
        },
        "ripple-expand-delayed": {
          "0%": { transform: "scale(0)", opacity: "0.5" },
          "50%": { opacity: "0.25" },
          "100%": { transform: "scale(3)", opacity: "0" },
        },
        "scan-beam": {
          "0%": { transform: "translateY(-100%)", opacity: "0" },
          "10%": { opacity: "0.8" },
          "90%": { opacity: "0.8" },
          "100%": { transform: "translateY(100vh)", opacity: "0" },
        },
        "grid-pulse": {
          "0%, 100%": { opacity: "0.15" },
          "50%": { opacity: "0.25" },
        },
        "aurora-flow": {
          "0%": { transform: "translateX(-100%) rotate(-10deg) skewX(-5deg)" },
          "50%": { transform: "translateX(0%) rotate(5deg) skewX(3deg)" },
          "100%": { transform: "translateX(100%) rotate(-10deg) skewX(-5deg)" },
        },
        "aurora-flow-reverse": {
          "0%": { transform: "translateX(100%) rotate(10deg) skewX(5deg)" },
          "50%": { transform: "translateX(0%) rotate(-5deg) skewX(-3deg)" },
          "100%": { transform: "translateX(-100%) rotate(10deg) skewX(5deg)" },
        },
        "node-pulse": {
          "0%, 100%": { opacity: "0.3", transform: "scale(1)" },
          "50%": { opacity: "0.8", transform: "scale(1.5)" },
        },
        "connection-pulse": {
          "0%": { opacity: "0.1", strokeDashoffset: "100" },
          "50%": { opacity: "0.5" },
          "100%": { opacity: "0.1", strokeDashoffset: "0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        "fade-in": "fade-in 0.5s ease-out forwards",
        "slide-up": "slide-up 0.5s ease-out forwards",
        "slide-down": "slide-down 0.3s ease-out forwards",
        "scale-in": "scale-in 0.3s ease-out forwards",
        "float": "float 3s ease-in-out infinite",
        "float-slow": "float-slow 6s ease-in-out infinite",
        "float-delayed": "float-delayed 5s ease-in-out infinite 1s",
        "gradient-shift": "gradient-shift 3s ease-in-out infinite",
        "mesh-drift": "mesh-drift 20s linear infinite",
        "pulse-slow": "pulse-slow 4s ease-in-out infinite",
        "wave-1": "wave-1 4s ease-in-out infinite",
        "wave-2": "wave-2 5s ease-in-out infinite 0.5s",
        "wave-3": "wave-3 3s ease-in-out infinite 1s",
        "aurora-1": "aurora-1 20s linear infinite",
        "aurora-2": "aurora-2 25s linear infinite",
        "sweep": "sweep 30s linear infinite",
        "dot-pulse": "dot-pulse 3s ease-in-out infinite",
        "radial-pulse": "radial-pulse 6s ease-in-out infinite",
        "grain": "grain 8s steps(10) infinite",
        // New hero animations
        "particle-drift-1": "particle-drift-1 8s ease-in-out infinite",
        "particle-drift-2": "particle-drift-2 12s ease-in-out infinite",
        "particle-drift-3": "particle-drift-3 10s ease-in-out infinite",
        "ripple-expand": "ripple-expand 4s ease-out infinite",
        "ripple-expand-delayed": "ripple-expand-delayed 4s ease-out infinite 2s",
        "scan-beam": "scan-beam 6s ease-in-out infinite",
        "grid-pulse": "grid-pulse 3s ease-in-out infinite",
        "aurora-flow": "aurora-flow 15s ease-in-out infinite",
        "aurora-flow-reverse": "aurora-flow-reverse 18s ease-in-out infinite",
        "node-pulse": "node-pulse 3s ease-in-out infinite",
        "connection-pulse": "connection-pulse 4s linear infinite",
      },
      boxShadow: {
        "soft": "0 2px 15px -3px rgba(0, 0, 0, 0.07), 0 10px 20px -2px rgba(0, 0, 0, 0.04)",
        "elevated": "0 20px 60px rgba(0, 0, 0, 0.1)",
        "glow": "0 4px 20px rgba(99, 102, 241, 0.3)",
        "glow-hover": "0 6px 25px rgba(99, 102, 241, 0.4)",
      },
      spacing: {
        // Brand spec spacing scale
        "18": "4.5rem",
        "22": "5.5rem",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;