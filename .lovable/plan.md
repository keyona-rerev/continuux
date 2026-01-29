
# Plan: Standin Logo + Full-Size Hero Sections with Unique Overlays

## Overview
This plan addresses two issues: the current logo is too small in the header, and the subpage hero sections (How It Works, Pricing, Security, Partners, About) are "chopped" compared to the homepage hero. We'll create a larger standin logo and expand all `PageHero` sections to match the homepage's dramatic `min-h-[90vh]` sizing, each with a unique animated overlay for you to compare.

---

## Changes

### 1. Standin Logo for Header
Replace the current small uploaded logo with a styled text-based standin logo that's larger and more visible.

**File:** `src/components/layout/Header.tsx`
- Replace the `<img>` logo with a styled text treatment:
  - "Continuux" in bold indigo (#6366f1) at 24px
  - "powered by Prismm" in smaller muted text below or inline
  - Shield icon accent for brand recognition
- This ensures visibility while awaiting the final logo asset

---

### 2. Expand PageHero Component
Make all subpage heroes full-viewport height with centered content.

**File:** `src/components/ui/page-hero.tsx`
- Change `min-h-[320px]` to `min-h-[90vh]` with `flex items-center`
- Increase title size to match homepage (`text-5xl lg:text-6xl xl:text-[4rem]`)
- Add more dramatic, unique animation overlays

---

### 3. Five Unique Animation Overlays (One Per Page)
Each page gets a distinct CSS-only animated background for comparison:

| Page | Animation Name | Effect Description |
|------|----------------|-------------------|
| **How It Works** | `particle-field` | Multiple small dots floating and drifting in different directions |
| **Pricing** | `ripple-pulse` | Concentric circles expanding outward from center |
| **Security** | `shield-matrix` | Subtle grid lines with scanning beam effect |
| **About** | `aurora-waves` | Flowing color bands like northern lights |
| **Partners** | `network-pulse` | Interconnected nodes with pulsing connections |

**File:** `tailwind.config.ts`
- Add 5 new keyframe animations
- Add corresponding animation utility classes

**File:** `src/components/ui/page-hero.tsx`
- Add 5 new animation variant options
- Implement each overlay with layered CSS elements

---

### 4. Update Each Page to Use New Animations

| File | New Animation |
|------|---------------|
| `src/pages/HowItWorks.tsx` | `particle-field` |
| `src/pages/Pricing.tsx` | `ripple-pulse` |
| `src/pages/Security.tsx` | `shield-matrix` |
| `src/pages/About.tsx` | `aurora-waves` |
| `src/pages/Partners.tsx` | `network-pulse` |

---

## Technical Details

### Standin Logo Styling
```text
+----------------------------------+
| [Shield Icon] Continuux          |
|              powered by Prismm   |
+----------------------------------+
```
- Main text: `text-2xl font-bold text-primary`
- Subtitle: `text-xs text-muted-foreground`

### Animation Keyframes (added to Tailwind)
- `particle-drift-1/2/3`: Random floating motion paths
- `ripple-expand`: Scale from 0 to 200% with fade
- `scan-beam`: Vertical sweep with glow
- `aurora-flow`: Horizontal color wave motion
- `node-pulse`: Opacity pulse for network nodes

### Hero Section Structure
```text
+-----------------------------------------------+
|                                               |
|          [Animated Background Overlay]        |
|                                               |
|               PAGE TITLE                      |
|           Subtitle description                |
|                                               |
|                                               |
+-----------------------------------------------+
Height: 90vh (matches homepage)
```

---

## Files to Modify
1. `src/components/layout/Header.tsx` - Standin logo
2. `src/components/ui/page-hero.tsx` - Expanded hero + new animations
3. `tailwind.config.ts` - New keyframes and animation utilities
4. `src/pages/HowItWorks.tsx` - Use `particle-field`
5. `src/pages/Pricing.tsx` - Use `ripple-pulse`
6. `src/pages/Security.tsx` - Use `shield-matrix`
7. `src/pages/About.tsx` - Use `aurora-waves`
8. `src/pages/Partners.tsx` - Use `network-pulse`
9. `src/components/layout/Footer.tsx` - Update logo treatment to match header

---

## Result
After implementation, you'll be able to visit each page and see:
- A clear, visible standin logo in the header
- Full-viewport hero sections that aren't "chopped"
- Five distinct animated overlays to compare and choose from
