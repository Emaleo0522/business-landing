# CSS Foundation — business-landing

**Stack**: Vite + React 18 + Tailwind CSS 3 + Framer Motion
**Tipo**: Corporate landing page premium (portfolio template)
**Theme**: Light only (con preparacion para dark mode futuro)
**Font**: Inter (Google Fonts)

---

## 1. Paleta de colores

### CSS Custom Properties

```css
:root {
  /* === PRIMARY — Azul corporativo profundo === */
  --color-primary-50:  #eff6ff;
  --color-primary-100: #dbeafe;
  --color-primary-200: #bfdbfe;
  --color-primary-300: #93c5fd;
  --color-primary-400: #60a5fa;
  --color-primary-500: #3b82f6;
  --color-primary-600: #2563eb;
  --color-primary-700: #1d4ed8;
  --color-primary-800: #1e40af;
  --color-primary-900: #1e3a8a;
  --color-primary-950: #172554;

  /* RGB companions para alpha compositing */
  --color-primary-500-rgb: 59, 130, 246;
  --color-primary-600-rgb: 37, 99, 235;
  --color-primary-700-rgb: 29, 78, 216;
  --color-primary-900-rgb: 30, 58, 138;

  /* === SECONDARY — Slate (profesional, neutro-frio) === */
  --color-secondary-50:  #f8fafc;
  --color-secondary-100: #f1f5f9;
  --color-secondary-200: #e2e8f0;
  --color-secondary-300: #cbd5e1;
  --color-secondary-400: #94a3b8;
  --color-secondary-500: #64748b;
  --color-secondary-600: #475569;
  --color-secondary-700: #334155;
  --color-secondary-800: #1e293b;
  --color-secondary-900: #0f172a;
  --color-secondary-950: #020617;

  /* === ACCENT — Amber calido (CTAs, highlights) === */
  --color-accent-400: #fbbf24;
  --color-accent-500: #f59e0b;
  --color-accent-600: #d97706;
  --color-accent-500-rgb: 245, 158, 11;

  /* === NEUTRAL — Gray scale para textos y fondos === */
  --color-neutral-50:  #fafafa;
  --color-neutral-100: #f5f5f5;
  --color-neutral-200: #e5e5e5;
  --color-neutral-300: #d4d4d4;
  --color-neutral-400: #a3a3a3;
  --color-neutral-500: #737373;
  --color-neutral-600: #525252;
  --color-neutral-700: #404040;
  --color-neutral-800: #262626;
  --color-neutral-900: #171717;
  --color-neutral-950: #0a0a0a;

  /* === ESTADOS === */
  --color-success-500: #22c55e;
  --color-success-600: #16a34a;
  --color-warning-500: #f59e0b;
  --color-warning-600: #d97706;
  --color-error-500:   #ef4444;
  --color-error-600:   #dc2626;

  /* === SEMANTICOS (three-layer body colors) === */
  --bg-primary:    #ffffff;
  --bg-secondary:  #f8fafc;
  --bg-tertiary:   #f1f5f9;
  --text-primary:   #0f172a;
  --text-secondary: #475569;
  --text-tertiary:  #94a3b8;
  --text-emphasis:  #1e3a8a;
  --border-color:   #e2e8f0;

  /* === Z-INDEX NAMED SCALE === */
  --z-dropdown:  1000;
  --z-sticky:    1020;
  --z-fixed:     1030;
  --z-backdrop:  1040;
  --z-modal:     1050;
  --z-popover:   1060;
  --z-tooltip:   1070;
  --z-toast:     1090;
}
```

### Tailwind Config Extension

```js
// tailwind.config.js
/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          50:  '#eff6ff',
          100: '#dbeafe',
          200: '#bfdbfe',
          300: '#93c5fd',
          400: '#60a5fa',
          500: '#3b82f6',
          600: '#2563eb',
          700: '#1d4ed8',
          800: '#1e40af',
          900: '#1e3a8a',
          950: '#172554',
        },
        secondary: {
          50:  '#f8fafc',
          100: '#f1f5f9',
          200: '#e2e8f0',
          300: '#cbd5e1',
          400: '#94a3b8',
          500: '#64748b',
          600: '#475569',
          700: '#334155',
          800: '#1e293b',
          900: '#0f172a',
          950: '#020617',
        },
        accent: {
          400: '#fbbf24',
          500: '#f59e0b',
          600: '#d97706',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
      },
      fontSize: {
        'xs':   ['0.75rem',  { lineHeight: '1rem' }],
        'sm':   ['0.875rem', { lineHeight: '1.25rem' }],
        'base': ['1rem',     { lineHeight: '1.5rem' }],
        'lg':   ['1.125rem', { lineHeight: '1.75rem' }],
        'xl':   ['1.25rem',  { lineHeight: '1.75rem' }],
        '2xl':  ['1.5rem',   { lineHeight: '2rem' }],
        '3xl':  ['1.875rem', { lineHeight: '2.25rem' }],
        '4xl':  ['2.25rem',  { lineHeight: '2.5rem' }],
        '5xl':  ['3rem',     { lineHeight: '1.15' }],
        '6xl':  ['4rem',     { lineHeight: '1.1' }],
      },
      spacing: {
        '18': '4.5rem',
        '88': '22rem',
        '128': '32rem',
      },
      maxWidth: {
        'container': '1280px',
      },
      boxShadow: {
        'elevation-sm': '0 1px 2px 0 rgba(0, 0, 0, 0.05)',
        'elevation-md': '0 4px 6px -1px rgba(0, 0, 0, 0.07), 0 2px 4px -2px rgba(0, 0, 0, 0.05)',
        'elevation-lg': '0 20px 25px -5px rgba(0, 0, 0, 0.08), 0 8px 10px -6px rgba(0, 0, 0, 0.04)',
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-out forwards',
        'slide-up': 'slideUp 0.5s ease-out forwards',
        'fade-in-up': 'fadeInUp 0.6s ease-out forwards',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        fadeInUp: {
          '0%': { transform: 'translateY(30px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
      },
      transitionDuration: {
        '150': '150ms',
        '200': '200ms',
        '300': '300ms',
      },
    },
  },
  plugins: [],
}
```

---

## 2. Tipografia

**Font**: Inter (Google Fonts) — clean, profesional, excelente legibilidad en pantalla.

### Carga optimizada
```html
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap" rel="stylesheet">
```

### Escala tipografica

| Token | Size | Line-height | Uso |
|-------|------|-------------|-----|
| xs | 12px / 0.75rem | 16px / 1rem | Labels, captions, badges |
| sm | 14px / 0.875rem | 20px / 1.25rem | Secondary text, nav links |
| base | 16px / 1rem | 24px / 1.5rem | Body text, paragraphs |
| lg | 18px / 1.125rem | 28px / 1.75rem | Lead paragraphs, card descriptions |
| xl | 20px / 1.25rem | 28px / 1.75rem | Section subtitles |
| 2xl | 24px / 1.5rem | 32px / 2rem | Card titles, h4 |
| 3xl | 30px / 1.875rem | 36px / 2.25rem | Section titles, h3 |
| 4xl | 36px / 2.25rem | 40px / 2.5rem | Page subtitles, h2 |
| 5xl | 48px / 3rem | 1.15 | Hero subtitle, h1 secondary |
| 6xl | 64px / 4rem | 1.1 | Hero headline, h1 main |

### Font weights

| Weight | Token | Uso |
|--------|-------|-----|
| 400 | `font-normal` | Body text, descriptions |
| 500 | `font-medium` | Nav links, buttons, labels |
| 600 | `font-semibold` | Card titles, section subtitles |
| 700 | `font-bold` | Headlines, hero text, CTAs |

### Tipografia fluida (headings)

```css
/* Fluida para headings grandes — mobile a desktop */
.heading-hero {
  font-size: clamp(2.25rem, 1.5rem + 3vw, 4rem);     /* 36px -> 64px */
  line-height: 1.1;
  font-weight: 700;
  letter-spacing: -0.02em;
}

.heading-section {
  font-size: clamp(1.875rem, 1.5rem + 1.5vw, 2.25rem); /* 30px -> 36px */
  line-height: 1.2;
  font-weight: 700;
  letter-spacing: -0.01em;
}

.heading-card {
  font-size: clamp(1.25rem, 1.1rem + 0.5vw, 1.5rem);   /* 20px -> 24px */
  line-height: 1.35;
  font-weight: 600;
}
```

---

## 3. Spacing System (8px grid)

| Token | Value | Tailwind | Uso tipico |
|-------|-------|----------|-----------|
| 1 | 4px | `p-1` | Micro spacing (icon gaps) |
| 2 | 8px | `p-2` | Tight padding (badges, tags) |
| 3 | 12px | `p-3` | Button padding-y, small gaps |
| 4 | 16px | `p-4` | Card padding, input padding |
| 6 | 24px | `p-6` | Card internal spacing |
| 8 | 32px | `p-8` | Section internal spacing |
| 12 | 48px | `py-12` | Section padding mobile |
| 16 | 64px | `py-16` | Medium section spacing |
| 20 | 80px | `py-20` | Section padding desktop |
| 24 | 96px | `py-24` | Large section spacing |
| 32 | 128px | `py-32` | Hero vertical spacing |

---

## 4. Breakpoints (mobile-first)

| Name | Min-width | Uso |
|------|-----------|-----|
| (base) | 0px | Mobile phones (320px+) |
| sm | 640px | Large phones landscape |
| md | 768px | Tablets portrait |
| lg | 1024px | Tablets landscape / small laptops |
| xl | 1280px | Desktops |
| 2xl | 1536px | Large screens |

Tailwind default breakpoints — no override needed.

---

## 5. Layout Patterns

### Container

```css
/* Patron principal de contenedor usando max() */
.section-container {
  width: 100%;
  padding-left: max(1.5rem, calc((100vw - 1280px) / 2));
  padding-right: max(1.5rem, calc((100vw - 1280px) / 2));
}
```

En Tailwind, el equivalente practico:
```jsx
<div className="mx-auto max-w-7xl px-6 lg:px-8">
  {/* contenido */}
</div>
```

`max-w-7xl` = 1280px. `px-6` = 24px lateral mobile. `lg:px-8` = 32px lateral desktop.

### Section padding vertical

```jsx
{/* Patron estandar para secciones */}
<section className="py-12 md:py-16 lg:py-20">
  <div className="mx-auto max-w-7xl px-6 lg:px-8">
    {/* contenido */}
  </div>
</section>
```

- Mobile: `py-12` (48px arriba/abajo)
- Tablet: `md:py-16` (64px)
- Desktop: `lg:py-20` (80px)

### Grid patterns

```jsx
{/* 2 columnas (servicios, features) */}
<div className="grid grid-cols-1 md:grid-cols-2 gap-8">

{/* 3 columnas (cards, testimonials) */}
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

{/* 4 columnas (stats, logos) */}
<div className="grid grid-cols-2 md:grid-cols-4 gap-6">

{/* Hero split layout */}
<div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
```

---

## 6. Animation Tiers

### Tier 1 — CSS Transitions (inline, zero-JS)

Duracion base: **150ms** hover states, **200ms** color transitions, **300ms** layout shifts.

```css
/* Hover en botones y links */
.btn-transition {
  transition: all 150ms ease;
}

/* Focus ring (accesibilidad) */
.focus-ring {
  transition: box-shadow 150ms ease;
}
:focus-visible {
  outline: 2px solid var(--color-primary-500);
  outline-offset: 2px;
}

/* Safari focus fix */
:where(button):focus:not(:focus-visible) {
  outline: 0;
}

/* Card hover elevation */
.card-hover {
  transition: transform 200ms ease, box-shadow 200ms ease;
}
.card-hover:hover {
  transform: translateY(-2px);
  box-shadow: var(--elevation-lg);
}
```

Tailwind equivalents:
```jsx
// Button hover
className="transition-all duration-150 ease-in-out hover:bg-primary-700"

// Card hover
className="transition-all duration-200 hover:-translate-y-0.5 hover:shadow-elevation-lg"

// Focus ring
className="focus-visible:outline-2 focus-visible:outline-primary-500 focus-visible:outline-offset-2"
```

### Tier 2 — Framer Motion (scroll-reveal, stagger, interactive)

```tsx
// === Scroll reveal: fade-in + slide-up ===
const fadeInUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-50px' },
  transition: { duration: 0.6, ease: 'easeOut' },
};
// Uso: <motion.div {...fadeInUp}>

// === Stagger container ===
const staggerContainer = {
  initial: {},
  whileInView: { transition: { staggerChildren: 0.05 } },
  viewport: { once: true },
};
const staggerItem = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  transition: { duration: 0.5, ease: 'easeOut' },
};
// Uso:
// <motion.div {...staggerContainer}>
//   {items.map(i => <motion.div key={i} {...staggerItem} />)}
// </motion.div>

// === Counter animation (stats section) ===
// Usar framer-motion useMotionValue + useTransform + animate
// O libreria ligera como 'countup.js' con intersection observer

// === Accordion expand/collapse ===
const accordionVariants = {
  collapsed: { height: 0, opacity: 0 },
  expanded: { height: 'auto', opacity: 1 },
};
// Uso: <motion.div variants={accordionVariants} animate={isOpen ? 'expanded' : 'collapsed'}>

// === Mobile menu ===
const mobileMenuVariants = {
  closed: { opacity: 0, y: -10 },
  open: { opacity: 1, y: 0 },
};
// NOTA: usar translateY, NUNCA translateX para evitar scroll horizontal bug
```

---

## 7. Elevation System

| Level | Shadow | Uso |
|-------|--------|-----|
| sm | `0 1px 2px 0 rgba(0,0,0,0.05)` | Cards planas, inputs |
| md | `0 4px 6px -1px rgba(0,0,0,0.07), 0 2px 4px -2px rgba(0,0,0,0.05)` | Cards hover, dropdowns |
| lg | `0 20px 25px -5px rgba(0,0,0,0.08), 0 8px 10px -6px rgba(0,0,0,0.04)` | Modals, floating elements |

Tailwind classes: `shadow-elevation-sm`, `shadow-elevation-md`, `shadow-elevation-lg`

---

## 8. Component Tokens (referencia para frontend-developer)

### Buttons

```jsx
// Primary CTA
className="bg-primary-600 text-white px-6 py-3 rounded-lg font-medium
           hover:bg-primary-700 active:bg-primary-800
           transition-all duration-150
           focus-visible:outline-2 focus-visible:outline-primary-500 focus-visible:outline-offset-2
           shadow-elevation-sm hover:shadow-elevation-md"

// Secondary / Outline
className="border-2 border-primary-600 text-primary-600 px-6 py-3 rounded-lg font-medium
           hover:bg-primary-50
           transition-all duration-150"

// Ghost (nav links)
className="text-secondary-600 hover:text-primary-600 font-medium
           transition-colors duration-150"
```

### Cards

```jsx
className="bg-white rounded-xl p-6 border border-secondary-200
           shadow-elevation-sm hover:shadow-elevation-md
           transition-all duration-200 hover:-translate-y-0.5"
```

### Section headers pattern

```jsx
<div className="text-center max-w-2xl mx-auto mb-12">
  <span className="text-primary-600 font-semibold text-sm uppercase tracking-wider">
    Section Label
  </span>
  <h2 className="mt-3 text-3xl md:text-4xl font-bold text-secondary-900 tracking-tight">
    Section Title
  </h2>
  <p className="mt-4 text-lg text-secondary-500">
    Section description text goes here.
  </p>
</div>
```

### Navigation

```jsx
// Navbar: fixed, glass-morphism on scroll
className="fixed top-0 w-full z-[1030] transition-all duration-300"
// On scroll: add bg-white/80 backdrop-blur-md shadow-elevation-sm
```

---

## 9. Accesibilidad

- **Skip-nav link**: primer hijo de body
  ```jsx
  <a href="#main-content" className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-[1090] focus:bg-primary-600 focus:text-white focus:px-4 focus:py-2 focus:rounded-lg">
    Skip to content
  </a>
  ```
- **Focus rings**: `focus-visible:outline-2 focus-visible:outline-primary-500 focus-visible:outline-offset-2`
- **Color contrast**: text-secondary-900 sobre bg-white = ratio 15.4:1 (AAA). text-secondary-500 sobre bg-white = ratio 4.6:1 (AA).
- **Reduced motion**: Framer Motion respeta `prefers-reduced-motion` automaticamente

---

## 10. Performance Notes

- **Preconnect**: Google Fonts (fonts.googleapis.com, fonts.gstatic.com)
- **Font display**: `swap` para evitar FOIT
- **LCP preload**: hero image debe tener `<link rel="preload" as="image">` en head
- **No PNG grandes como background**: usar WebP si hay imagenes de fondo

---

## Resumen de decisiones

| Decision | Valor | Razon |
|----------|-------|-------|
| Primary color | Blue 600 (#2563eb) | Confianza corporativa, contraste AAA |
| Accent | Amber 500 (#f59e0b) | Contraste calido con azul, alta visibilidad CTA |
| Font | Inter 400/500/600/700 | Neutral, profesional, excelente en pantalla |
| Container | 1280px max | Estandar para landing corporativa |
| Section py | 48/64/80px (mobile/tablet/desktop) | Respiracion visual sin scroll excesivo |
| Animation | CSS Tier 1 + Framer Tier 2 | Suficiente para landing premium sin GSAP overhead |
| Shadows | 3 niveles (sm/md/lg) | Profundidad sutil, estilo corporate limpio |
| Border radius | rounded-lg (8px) buttons, rounded-xl (12px) cards | Moderno sin ser infantil |
