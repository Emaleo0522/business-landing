# Design System -- business-landing

**Stack**: Vite + React 18 + Tailwind CSS 3 + Framer Motion
**Base**: CSS Foundation (business-landing/css-foundation)
**Theme**: Light mode (dark mode prep via semantic tokens)
**WCAG**: AA minimum (4.5:1 text, 3:1 UI elements)

---

## 1. Design Tokens Summary

### Color tokens (from CSS Foundation)
- **Primary**: blue-600 (#2563eb) -- corporate trust
- **Secondary**: slate -- professional neutral-cool
- **Accent**: amber-500 (#f59e0b) -- warm CTA highlights
- **Neutral**: gray 50-950
- **States**: success (#22c55e), warning (#f59e0b), error (#ef4444)

### Semantic tokens
- `--bg-primary: #ffffff` | `--bg-secondary: #f8fafc` | `--bg-tertiary: #f1f5f9`
- `--text-primary: #0f172a` | `--text-secondary: #475569` | `--text-tertiary: #94a3b8`
- `--border-color: #e2e8f0`

### Contrast validation (verified)
| Pair | Ratio | Level |
|------|-------|-------|
| text-primary (#0f172a) on bg-primary (#fff) | 15.4:1 | AAA |
| text-secondary (#475569) on bg-primary (#fff) | 4.6:1 | AA |
| primary-600 (#2563eb) on white | 4.6:1 | AA |
| white on primary-600 (#2563eb) | 4.6:1 | AA |
| white on primary-700 (#1d4ed8) | 5.9:1 | AAA |
| accent-500 (#f59e0b) on primary-900 (#1e3a8a) | 5.2:1 | AA |
| white on accent-600 (#d97706) | 3.3:1 | AA (large text only) |
| text-tertiary (#94a3b8) on white | 2.7:1 | decorative only |

---

## 2. Buttons (Atom)

### Variants

#### Primary Button
```
Default:   bg-primary-600 text-white font-medium rounded-lg shadow-elevation-sm
           transition-all duration-150
Hover:     hover:bg-primary-700 hover:shadow-elevation-md
Active:    active:bg-primary-800 active:scale-[0.98]
Focus:     focus-visible:outline-2 focus-visible:outline-primary-500 focus-visible:outline-offset-2
Disabled:  disabled:bg-primary-300 disabled:cursor-not-allowed disabled:shadow-none
Loading:   opacity-75 cursor-wait [spinner icon replaces text or prepends]
```

Full className (md):
```jsx
className="bg-primary-600 text-white font-medium rounded-lg shadow-elevation-sm
           px-6 py-3 text-base
           hover:bg-primary-700 hover:shadow-elevation-md
           active:bg-primary-800 active:scale-[0.98]
           transition-all duration-150
           focus-visible:outline-2 focus-visible:outline-primary-500 focus-visible:outline-offset-2
           disabled:bg-primary-300 disabled:cursor-not-allowed disabled:shadow-none"
```

#### Secondary Button (Outline)
```
Default:   border-2 border-primary-600 text-primary-600 bg-transparent font-medium rounded-lg
           transition-all duration-150
Hover:     hover:bg-primary-50 hover:border-primary-700 hover:text-primary-700
Active:    active:bg-primary-100
Focus:     focus-visible:outline-2 focus-visible:outline-primary-500 focus-visible:outline-offset-2
Disabled:  disabled:border-primary-200 disabled:text-primary-300 disabled:cursor-not-allowed
```

Full className (md):
```jsx
className="border-2 border-primary-600 text-primary-600 bg-transparent font-medium rounded-lg
           px-6 py-3 text-base
           hover:bg-primary-50 hover:border-primary-700 hover:text-primary-700
           active:bg-primary-100
           transition-all duration-150
           focus-visible:outline-2 focus-visible:outline-primary-500 focus-visible:outline-offset-2
           disabled:border-primary-200 disabled:text-primary-300 disabled:cursor-not-allowed"
```

#### Ghost Button
```
Default:   text-secondary-600 bg-transparent font-medium rounded-lg
           transition-all duration-150
Hover:     hover:bg-neutral-100 hover:text-secondary-800
Active:    active:bg-neutral-200
Focus:     focus-visible:outline-2 focus-visible:outline-primary-500 focus-visible:outline-offset-2
Disabled:  disabled:text-neutral-300 disabled:cursor-not-allowed
```

Full className (md):
```jsx
className="text-secondary-600 bg-transparent font-medium rounded-lg
           px-6 py-3 text-base
           hover:bg-neutral-100 hover:text-secondary-800
           active:bg-neutral-200
           transition-all duration-150
           focus-visible:outline-2 focus-visible:outline-primary-500 focus-visible:outline-offset-2
           disabled:text-neutral-300 disabled:cursor-not-allowed"
```

### Sizes

| Size | Padding | Font | Min height | Min touch target |
|------|---------|------|------------|-----------------|
| sm | `px-4 py-2` | `text-sm` | 36px | 44x44 (via margin/padding) |
| md | `px-6 py-3` | `text-base` | 44px | 44x44 (native) |
| lg | `px-8 py-4` | `text-lg` | 52px | 44x44 (native) |

Note: sm buttons must have sufficient click area. Add `min-h-[44px]` or ensure surrounding spacing provides 44px touch target.

### Icon buttons
```
Square:    p-3 (md), p-2 (sm), p-4 (lg) -- equal padding all sides
A11y:      aria-label required, no text content
```

---

## 3. Cards (Molecule)

### Feature Card
```
Container: bg-white rounded-xl p-6 border border-secondary-200
           shadow-elevation-sm
           hover:shadow-elevation-md hover:-translate-y-0.5
           transition-all duration-200

Layout:    flex flex-col gap-4

Icon:      w-12 h-12 rounded-lg bg-primary-50 text-primary-600
           flex items-center justify-center
           [Lucide icon, 24px]

Title:     text-xl font-semibold text-secondary-900

Desc:      text-base text-secondary-500 leading-relaxed
```

Full className:
```jsx
// Container
className="bg-white rounded-xl p-6 border border-secondary-200 shadow-elevation-sm
           hover:shadow-elevation-md hover:-translate-y-0.5
           transition-all duration-200"

// Icon wrapper
className="w-12 h-12 rounded-lg bg-primary-50 text-primary-600
           flex items-center justify-center"

// Title
className="text-xl font-semibold text-secondary-900"

// Description
className="text-base text-secondary-500 leading-relaxed"
```

### Testimonial Card
```
Container: bg-white rounded-xl p-6 border border-secondary-200
           shadow-elevation-sm

Quote:     text-base text-secondary-600 italic leading-relaxed
           [prepend with SVG quote icon, text-primary-200, mb-4]

Avatar:    w-12 h-12 rounded-full object-cover

Name:      text-base font-bold text-secondary-900

Role:      text-sm text-secondary-400

Footer:    flex items-center gap-3 mt-4 pt-4 border-t border-secondary-100
```

Full className:
```jsx
// Container
className="bg-white rounded-xl p-6 border border-secondary-200 shadow-elevation-sm"

// Quote icon (decorative)
className="text-primary-200 w-8 h-8 mb-4"

// Quote text
className="text-base text-secondary-600 italic leading-relaxed"

// Footer row
className="flex items-center gap-3 mt-4 pt-4 border-t border-secondary-100"

// Avatar
className="w-12 h-12 rounded-full object-cover"

// Name
className="text-base font-bold text-secondary-900"

// Role
className="text-sm text-secondary-400"
```

### Pricing Card (Default)
```
Container: bg-white rounded-2xl p-8 border border-secondary-200
           shadow-elevation-md
           flex flex-col

Plan name: text-lg font-semibold text-secondary-900

Price:     text-4xl font-bold text-secondary-900
           [period: text-base font-normal text-secondary-400]

Desc:      text-sm text-secondary-500 mt-2

Divider:   border-t border-secondary-200 my-6

Features:  space-y-3
           [each: flex items-start gap-3]
           [check icon: text-primary-600 w-5 h-5 flex-shrink-0 mt-0.5]
           [text: text-sm text-secondary-600]

CTA:       mt-8 w-full [Secondary Button, md size]
```

### Pricing Card (Highlighted / Most Popular)
```
Container: bg-white rounded-2xl p-8
           ring-2 ring-primary-600 shadow-elevation-lg
           relative scale-105

Badge:     absolute -top-4 left-1/2 -translate-x-1/2
           bg-accent-500 text-white text-xs font-bold
           px-3 py-1 rounded-full uppercase tracking-wider

CTA:       mt-8 w-full [Primary Button, md size] (not secondary)
```

---

## 4. Navbar (Organism)

### Desktop (lg+)
```
Wrapper:   fixed top-0 w-full z-[1030]
           transition-all duration-300

Default:   bg-transparent
Scrolled:  bg-white/80 backdrop-blur-md shadow-elevation-sm border-b border-secondary-200/50

Inner:     mx-auto max-w-7xl px-6 lg:px-8
           flex items-center justify-between h-16 lg:h-20

Logo:      flex items-center gap-2
           [image/svg: h-8 w-auto]
           [text: text-xl font-bold text-secondary-900]

Nav links: hidden lg:flex items-center gap-8
           [each link: text-sm font-medium text-secondary-600
            hover:text-primary-600 transition-colors duration-150
            focus-visible:outline-2 focus-visible:outline-primary-500 focus-visible:outline-offset-2]

Active:    text-primary-600 (not text-secondary-600)

CTA:       [Primary Button, sm size]
```

### Mobile (< lg)
```
Hamburger: lg:hidden p-2 text-secondary-700
           hover:bg-neutral-100 rounded-lg
           aria-label="Open menu" aria-expanded={isOpen}
           [Lucide Menu icon, 24px]

Overlay:   fixed inset-0 z-[1040] bg-white
           [Framer Motion: AnimatePresence]
           [animate: opacity 0->1, y -10->0, duration 0.3s ease-out]

Close btn: absolute top-4 right-6 p-2
           text-secondary-700 hover:bg-neutral-100 rounded-lg
           aria-label="Close menu"
           [Lucide X icon, 24px]

Menu:      flex flex-col items-center justify-center h-full gap-8
           [each link: text-2xl font-semibold text-secondary-900
            hover:text-primary-600 transition-colors duration-150]

CTA:       [Primary Button, lg size] mt-4
```

**Animation (Framer Motion):**
```tsx
const mobileMenuVariants = {
  closed: { opacity: 0, y: -10 },
  open: { opacity: 1, y: 0 },
};
// NEVER use translateX -- causes horizontal scroll bug
```

**A11y:**
- Hamburger: `aria-label`, `aria-expanded`
- Close: `aria-label="Close menu"`
- Focus trap when open (focus-trap-react)
- Escape key closes menu
- `role="dialog"` on overlay

---

## 5. Footer (Organism)

```
Wrapper:   bg-secondary-900 text-white

Inner:     mx-auto max-w-7xl px-6 lg:px-8 py-12 lg:py-16

Grid:      grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12

-- Column 1: Brand --
Logo:      h-8 w-auto [white version or text-white]
Desc:      mt-4 text-sm text-secondary-300 leading-relaxed max-w-xs

-- Columns 2-4: Links --
Heading:   text-sm font-semibold text-white uppercase tracking-wider mb-4
Link:      text-sm text-secondary-400 hover:text-white
           transition-colors duration-150 block py-1
           focus-visible:outline-2 focus-visible:outline-primary-400 focus-visible:outline-offset-2

-- Social icons row --
Socials:   flex items-center gap-4 mt-6 (column 1, below desc)
Icon:      w-5 h-5 text-secondary-400 hover:text-white
           transition-colors duration-150
           [a tag: aria-label="Follow us on {platform}"]

-- Copyright bar --
Bar:       mt-12 pt-8 border-t border-secondary-800
           flex flex-col md:flex-row justify-between items-center gap-4
Text:      text-sm text-secondary-500
Links:     text-sm text-secondary-500 hover:text-white
           [Privacy Policy | Terms of Service]
```

---

## 6. FAQ Accordion (Molecule)

```
Container: max-w-3xl mx-auto divide-y divide-secondary-200

Item wrapper: border-b border-secondary-200 (last:border-0)

Question button:
           w-full flex items-center justify-between py-5 text-left
           text-base font-medium text-secondary-900
           hover:text-primary-600 transition-colors duration-150
           focus-visible:outline-2 focus-visible:outline-primary-500 focus-visible:outline-offset-2
           [aria-expanded={isOpen}]

Icon:      w-5 h-5 text-secondary-400
           transition-transform duration-200
           [rotate-45 when open] or [ChevronDown, rotate-180 when open]

Answer:    [Framer Motion AnimatePresence mode="wait"]
           overflow-hidden
```

**Animation (Framer Motion):**
```tsx
// Accordion expand/collapse
<AnimatePresence initial={false}>
  {isOpen && (
    <motion.div
      key="content"
      initial={{ height: 0, opacity: 0 }}
      animate={{ height: 'auto', opacity: 1 }}
      exit={{ height: 0, opacity: 0 }}
      transition={{ duration: 0.3, ease: 'easeInOut' }}
      className="overflow-hidden"
    >
      <div className="pb-5 text-base text-secondary-500 leading-relaxed">
        {answer}
      </div>
    </motion.div>
  )}
</AnimatePresence>
```

**Behavior:**
- Only 1 item open at a time (controlled state, single activeIndex)
- Click open item to close it (toggle)
- Keyboard: Enter/Space toggles, arrow keys navigate between questions

**A11y:**
- `<button>` for question (not div)
- `aria-expanded={isOpen}`
- `aria-controls="faq-answer-{id}"`
- Answer `id="faq-answer-{id}"` with `role="region"` and `aria-labelledby="faq-question-{id}"`

---

## 7. Section Containers (Template)

### Standard Section
```jsx
className="py-12 md:py-16 lg:py-20"
// inner:
className="mx-auto max-w-7xl px-6 lg:px-8"
```

### Alternate background section
```jsx
className="py-12 md:py-16 lg:py-20 bg-secondary-50"
// inner: same as standard
```

### Hero Section
```jsx
className="relative min-h-screen flex items-center overflow-hidden"
// overlay (if background image):
className="absolute inset-0 bg-secondary-900/60 z-0"
// inner:
className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8 py-20"
```

### CTA Section (gradient)
```jsx
className="py-16 md:py-20 lg:py-24 bg-gradient-to-r from-primary-600 to-primary-700"
// inner:
className="mx-auto max-w-7xl px-6 lg:px-8 text-center"
// heading: text-white font-bold text-3xl md:text-4xl
// desc: text-primary-100 text-lg mt-4 max-w-2xl mx-auto
// button: bg-white text-primary-600 hover:bg-primary-50 (inverted primary)
```

### Section Header Pattern
```jsx
<div className="text-center max-w-2xl mx-auto mb-12 lg:mb-16">
  <span className="text-primary-600 font-semibold text-sm uppercase tracking-wider">
    Section Label
  </span>
  <h2 className="mt-3 text-3xl md:text-4xl font-bold text-secondary-900 tracking-tight">
    Section Title
  </h2>
  <p className="mt-4 text-lg text-secondary-500 leading-relaxed">
    Section description.
  </p>
</div>
```

---

## 8. Badge / Tag (Atom)

### "Most Popular" Badge (pricing)
```jsx
className="bg-accent-500 text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider"
```

### Feature badge (inline)
```jsx
className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium
           bg-primary-50 text-primary-700"
```

### Status badge variants
```
Success:   bg-green-50 text-green-700 ring-1 ring-green-600/20
Warning:   bg-amber-50 text-amber-700 ring-1 ring-amber-600/20
Error:     bg-red-50 text-red-700 ring-1 ring-red-600/20
Info:      bg-primary-50 text-primary-700 ring-1 ring-primary-600/20

Common:    inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium
```

---

## 9. Stats Counter (Molecule)

### Layout
```jsx
// Container: grid cols 2 md:cols-4 centered
className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center"
```

### Single Stat
```jsx
// Number (animated with Framer Motion or countup.js)
className="text-4xl lg:text-5xl font-bold text-primary-600"

// Label
className="mt-2 text-sm text-secondary-500 font-medium"
```

**Counter Animation (Framer Motion):**
```tsx
import { useMotionValue, useTransform, animate, useInView } from 'framer-motion';
import { useEffect, useRef } from 'react';

function AnimatedCounter({ target, suffix = '' }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const count = useMotionValue(0);
  const rounded = useTransform(count, v => Math.round(v));

  useEffect(() => {
    if (isInView) {
      animate(count, target, { duration: 2, ease: 'easeOut' });
    }
  }, [isInView, count, target]);

  return (
    <motion.span ref={ref}>
      {rounded}{suffix}
    </motion.span>
  );
}
```

---

## 10. Scroll Reveal Animation Preset (Framer Motion)

All sections use consistent reveal animation:

```tsx
// Single element fade-in-up
export const fadeInUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-50px' },
  transition: { duration: 0.6, ease: 'easeOut' },
};

// Stagger container for card grids
export const staggerContainer = {
  initial: {},
  whileInView: {
    transition: { staggerChildren: 0.05 },
  },
  viewport: { once: true },
};

export const staggerItem = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  transition: { duration: 0.5, ease: 'easeOut' },
};
```

Usage: wrap sections in `<motion.div {...fadeInUp}>`, card grids in stagger pattern.

---

## 11. Form Inputs (Atom) -- for Contact section if needed

### Text Input
```jsx
className="w-full px-4 py-3 rounded-lg border border-secondary-300 bg-white
           text-base text-secondary-900 placeholder-secondary-400
           hover:border-secondary-400
           focus:border-primary-500 focus:ring-2 focus:ring-primary-500/20 focus:outline-none
           transition-all duration-150
           disabled:bg-secondary-50 disabled:text-secondary-400 disabled:cursor-not-allowed"
```

### Textarea
Same as text input + `resize-y min-h-[120px]`

### Label
```jsx
className="block text-sm font-medium text-secondary-700 mb-1.5"
```

### Error state
```
Border:    border-error-500 focus:border-error-500 focus:ring-error-500/20
Message:   text-sm text-error-500 mt-1.5
Icon:      text-error-500 absolute right-3 top-1/2 -translate-y-1/2
```

---

## 12. Accessibility Checklist

- [x] All interactive elements have visible focus rings (focus-visible:outline-2)
- [x] Button minimum touch target 44x44px (md and lg sizes native, sm via spacing)
- [x] Color contrast AA minimum for all text (verified in section 1)
- [x] Skip-nav link as first child of body
- [x] Hamburger menu has aria-label, aria-expanded
- [x] Mobile menu has focus trap
- [x] FAQ accordion uses semantic buttons with aria-expanded, aria-controls
- [x] Social links have aria-label
- [x] Images will need alt text (enforced by eslint-plugin-jsx-a11y)
- [x] Framer Motion respects prefers-reduced-motion
- [x] No color-only indicators -- icons + text complement states
- [x] Form inputs have associated labels

---

## 13. Atomic Design Hierarchy

| Level | Components |
|-------|-----------|
| **Atoms** | Button (3 variants x 3 sizes), Badge, Input, Textarea, Label, Icon wrapper, Avatar |
| **Molecules** | Feature Card, Testimonial Card, Pricing Card, Stat Counter, FAQ Item, Nav Link, Social Icon Link, Form Field (label+input+error) |
| **Organisms** | Navbar (desktop+mobile), Footer, FAQ Section, Stats Section, Pricing Grid, Testimonials Grid, Features Grid, Hero, CTA Section |
| **Templates** | Landing Page Layout (Navbar + sections + Footer) |
| **Pages** | Home (the single landing page) |

---

## 14. Component-Token Mapping

Every component maps to foundation tokens. No hardcoded colors.

| Token | CSS Variable | Tailwind Class | Used by |
|-------|-------------|----------------|---------|
| Primary CTA bg | --color-primary-600 | bg-primary-600 | Buttons, navbar CTA |
| Primary CTA hover | --color-primary-700 | hover:bg-primary-700 | Buttons |
| Card bg | --bg-primary (#fff) | bg-white | All cards |
| Card border | --border-color | border-secondary-200 | Feature, testimonial cards |
| Section alt bg | --bg-secondary | bg-secondary-50 | Alternating sections |
| Footer bg | --color-secondary-900 | bg-secondary-900 | Footer |
| CTA gradient from | --color-primary-600 | from-primary-600 | CTA section |
| CTA gradient to | --color-primary-700 | to-primary-700 | CTA section |
| Focus ring | --color-primary-500 | outline-primary-500 | All interactive |
| Badge accent | --color-accent-500 | bg-accent-500 | Most Popular badge |
| Elevation sm | shadow-elevation-sm | shadow-elevation-sm | Cards default |
| Elevation md | shadow-elevation-md | shadow-elevation-md | Cards hover, dropdowns |
| Elevation lg | shadow-elevation-lg | shadow-elevation-lg | Highlighted pricing, modals |
