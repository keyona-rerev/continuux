

# Plan: Reframe Pricing Page to Eliminate Confusion

## The Problem
Currently, the pricing page has conflicting messages:
- Hero says "Family Accounts Are **Free** During This Time of Crisis"
- Below that, a big "$99/year" pricing card appears
- Then there's a separate "Apply for Free Account" section

Users are confused: Is it free or $99? Do I need to apply?

## The Solution
Reframe the pricing card as "What You're Getting (Normally $99/year)" to show the value they're receiving for free, while making the current free offer the primary focus.

---

## Changes to `src/pages/Pricing.tsx`

### 1. Reframe the Pricing Card Header
Change from showing "$99" as the main price to showing it's **FREE NOW** with the normal value crossed out

**Current:**
```
Complete Protection
$99/year
Just $8.25/month • Free for early users
```

**New:**
```
What You're Getting — Free
$99/year (crossed out) → $0 Today
A $99/year value, yours free during this time of crisis
```

### 2. Update the Card Badge
- Change "Complete Protection" badge to "Free During Crisis" or "Limited Time: Free"

### 3. Visual Treatment for Original Price
- Show "$99/year" with a strikethrough style
- Add large "$0" or "FREE" as the prominent price
- Add context line: "Normally $99/year — free for families who need it now"

### 4. Remove the Separate "Apply for Free Account" Section
Since everyone is getting it free during the crisis, the hardship application section is redundant and adds confusion. Remove it entirely.

### 5. Update CTA Button Text
Keep "Start Your Vault - It's Free" which already works well

### 6. Update FAQs
Add/modify FAQs to address:
- "How long is it free?" → "During this time of crisis, we're offering free accounts to all families. When the offer ends, you'll be notified in advance."
- "Will I be charged later?" → "No automatic charges. When the free period ends, you'll have the option to continue at $99/year or export your data."

---

## Visual Layout (After Changes)

```
┌─────────────────────────────────────────────────┐
│            FREE DURING CRISIS (badge)           │
│                                                 │
│     ~~$99/year~~  →  $0 TODAY                  │
│                                                 │
│  A $99/year value, yours free while families   │
│           need protection most                  │
│                                                 │
│  ✓ Unlimited document storage                   │
│  ✓ Up to 5 trusted contacts                     │
│  ✓ Bank-level encryption                        │
│  ... (all features)                             │
│                                                 │
│  [  Start Your Vault - It's Free  →  ]          │
│                                                 │
│  No credit card required                        │
└─────────────────────────────────────────────────┘
```

---

## Updated FAQ Section

| Question | Answer |
|----------|--------|
| How long is it free? | During this time of crisis, we're offering free accounts to all families. We'll notify you well in advance if this changes. |
| Will I be charged automatically? | No. We will never charge you without your consent. If the free period ends, you choose whether to continue. |
| What happens to my data if I don't upgrade? | Your data is always yours. You can export everything at any time, and we give 30 days notice before any changes. |

---

## Files to Modify
1. `src/pages/Pricing.tsx` — Reframe pricing card, remove hardship application, update FAQs

---

## Result
Users will clearly understand:
- It's FREE right now (no confusion)
- The normal value is $99/year (so they know it's a good deal)
- No hidden charges or surprises
- Simple, single path to sign up

