# Tareas — business-landing
Fecha: 2026-03-28
Total: 20 tareas | Tiempo estimado: ~900 min (15h)
Stack: Vite + React 18 + Tailwind CSS 3 + Framer Motion
Estructura: single-repo

## Gaps identificados
- Ninguno. La spec es clara: landing estatica conversion-focused con 9 secciones, sin backend.

---

## Fase 2 — Arquitectura

### T-01: CSS Foundation y sistema de layout
- **Agente**: ux-architect
- **Descripcion**: Definir la CSS foundation completa: paleta de colores (CSS custom properties), tipografia (font scale, line-heights), spacing system (8px grid), breakpoints (mobile-first: 640, 768, 1024, 1280), max-width de contenedores, y patron de layout con `max()` para secciones full-width. Definir la jerarquia de animaciones (Tier 1 CSS transitions para hover/focus, Tier 2 Framer Motion para scroll-reveal y stagger). Documentar todo en el cajon `business-landing/css-foundation`.
- **Archivos esperados**: Engram cajon `business-landing/css-foundation`
- **Criterio de aceptacion**:
  - [ ] Paleta definida con al menos: primary, secondary, accent, neutral (50-900), background, foreground
  - [ ] Font scale con 6+ tamaños (xs a 4xl) con line-heights
  - [ ] Spacing system basado en 8px grid
  - [ ] 4 breakpoints mobile-first documentados
  - [ ] Patron de animacion Tier 1 vs Tier 2 especificado
  - [ ] Guardado en Engram `business-landing/css-foundation`
- **Dependencias**: ninguna

### T-02: Design system y componentes UI
- **Agente**: ui-designer
- **Descripcion**: Definir el design system completo: botones (primary, secondary, ghost — 3 tamaños), cards (feature card, testimonial card, pricing card), badges, secciones (hero, content, CTA), navbar, footer. Cada componente con estados (default, hover, focus, disabled). Especificar el accordion para FAQ. Documentar en `business-landing/design-system`.
- **Archivos esperados**: Engram cajon `business-landing/design-system`
- **Criterio de aceptacion**:
  - [ ] Botones: 3 variantes x 3 tamaños con estados hover/focus/disabled
  - [ ] Cards: feature, testimonial, pricing — con layout y spacing
  - [ ] Navbar: logo + links + CTA, sticky, con mobile hamburger
  - [ ] Footer: multi-columna con social icons
  - [ ] FAQ accordion: expand/collapse con animacion
  - [ ] Pricing cards: 3 tiers con highlight en el recomendado
  - [ ] Guardado en Engram `business-landing/design-system`
- **Dependencias**: T-01

### T-03: Security headers y configuracion
- **Agente**: security-engineer
- **Descripcion**: Definir los security headers para Vercel deployment (CSP, X-Frame-Options, X-Content-Type-Options, Referrer-Policy, Permissions-Policy). Definir `vercel.json` con headers de seguridad y caching. No hay backend ni auth — solo hardening de headers para sitio estatico.
- **Archivos esperados**: Engram cajon `business-landing/security-spec`
- **Criterio de aceptacion**:
  - [ ] vercel.json template con security headers completos
  - [ ] Cache-Control headers para assets estaticos (max-age=604800 para assets, 3600 para JS/CSS)
  - [ ] Permissions-Policy restrictivo (camera=(), microphone=(), geolocation=())
  - [ ] Guardado en Engram `business-landing/security-spec`
- **Dependencias**: ninguna (paralelo con T-02)

---

## Fase 2B — Assets visuales

### T-04: Identidad de marca (brand.json)
- **Agente**: brand-agent
- **Descripcion**: Generar `assets/brand/brand.json` con identidad visual completa para una corporate landing premium: nombre placeholder "NexaCorp", paleta corporativa (alineada con CSS foundation), tipografia, tono de voz (profesional, confiable, innovador), keywords visuales. El usuario aprobara antes de continuar.
- **Archivos esperados**: `business-landing/assets/brand/brand.json`
- **Criterio de aceptacion**:
  - [ ] brand.json creado con paleta, tipografia, tono, keywords
  - [ ] Paleta alineada con la CSS foundation de T-01
  - [ ] Guardado en Engram `business-landing/branding`
  - [ ] PAUSA para aprobacion del usuario
- **Dependencias**: T-01

### T-05: Generacion de logos
- **Agente**: logo-agent
- **Descripcion**: Generar logos basados en brand.json: primary (SVG + PNG), horizontal, icon (favicon), monochrome. Estilo corporativo minimalista.
- **Archivos esperados**: `business-landing/assets/logos/` (primary.svg, primary.png, horizontal.svg, icon.svg, monochrome.svg)
- **Criterio de aceptacion**:
  - [ ] 4 variantes de logo generadas (primary, horizontal, icon, monochrome)
  - [ ] SVG + PNG para primary, SVG para el resto
  - [ ] Estilo coherente con brand.json
  - [ ] Guardado en Engram `business-landing/creative-assets` (seccion logos)
- **Dependencias**: T-04 (+ aprobacion usuario)

### T-06: Generacion de imagenes hero y secciones
- **Agente**: image-agent
- **Descripcion**: Generar imagen hero (1920x1080) y imagenes secundarias para about/stats section. Estilo corporativo, profesional. Si no hay API keys disponibles, usar placeholders de `picsum.photos` o `unsplash.com`.
- **Archivos esperados**: `business-landing/assets/images/` (hero.png, about.png)
- **Criterio de aceptacion**:
  - [ ] hero.png generado o placeholder configurado (1920x1080)
  - [ ] about.png generado o placeholder (800x600)
  - [ ] Imagenes coherentes con brand.json
  - [ ] Guardado en Engram `business-landing/creative-assets` (seccion images)
- **Dependencias**: T-04 (+ aprobacion usuario, paralelo con T-05)

### T-07: Video hero con fallback CSS
- **Agente**: video-agent
- **Descripcion**: Generar video corto (5s loop) para hero background, o fallback CSS con gradient animado si la API no esta disponible. El fallback SIEMPRE se entrega.
- **Archivos esperados**: `business-landing/assets/video/` (hero.mp4 o fallback.css)
- **Criterio de aceptacion**:
  - [ ] Video hero.mp4 generado O fallback.css con gradient animado
  - [ ] fallback.css SIEMPRE presente (independiente del video)
  - [ ] Guardado en Engram `business-landing/creative-assets` (seccion video)
- **Dependencias**: T-06

---

## Fase 3 — Desarrollo

### T-08: Setup proyecto Vite + React + Tailwind
- **Agente**: frontend-developer
- **Descripcion**: Inicializar proyecto con Vite + React 18 + TypeScript. Instalar y configurar Tailwind CSS 3 con la paleta de la CSS foundation. Instalar Framer Motion. Configurar estructura de carpetas: `src/components/`, `src/sections/`, `src/assets/`, `src/hooks/`, `src/lib/`. Crear `App.tsx` con layout base y scroll-smooth. Configurar ESLint + eslint-plugin-jsx-a11y.
- **Archivos esperados**: `business-landing/package.json`, `business-landing/vite.config.ts`, `business-landing/tailwind.config.js`, `business-landing/src/App.tsx`, `business-landing/.eslintrc.cjs`
- **Criterio de aceptacion**:
  - [ ] `npm run dev` arranca sin errores
  - [ ] Tailwind funcional con custom colors de la CSS foundation
  - [ ] Framer Motion importable
  - [ ] ESLint + jsx-a11y configurados
  - [ ] Estructura de carpetas creada
- **Dependencias**: T-01, T-02, T-03

### T-09: Navbar responsive + skip-nav
- **Agente**: frontend-developer
- **Descripcion**: Implementar navbar sticky con: logo (de assets/logos), links de navegacion (smooth scroll a secciones), boton CTA "Get Started". Mobile: hamburger menu con Framer Motion animacion de apertura. Skip-nav link como primer hijo del body. Focus visible en todos los links.
- **Archivos esperados**: `src/components/Navbar.tsx`, `src/components/MobileMenu.tsx`
- **Criterio de aceptacion**:
  - [ ] Navbar visible y sticky al hacer scroll
  - [ ] Logo renderizado desde assets
  - [ ] Links navegan smooth a cada seccion (href="#section-id")
  - [ ] Mobile: hamburger visible en <768px, menu animado con Framer Motion
  - [ ] Skip-nav link presente y funcional (Tab lo muestra, Enter salta al main)
  - [ ] CTA boton "Get Started" visible en desktop
- **Dependencias**: T-08, T-05

### T-10: Hero section con CTA
- **Agente**: frontend-developer
- **Descripcion**: Implementar hero section full-viewport con: headline (h1), subheadline, 2 botones CTA (primary "Get Started", secondary "Learn More"), background image/video con overlay. Animaciones Framer Motion: fade-in + slide-up para texto, stagger para botones. Responsive: texto centrado en mobile.
- **Archivos esperados**: `src/sections/Hero.tsx`
- **Criterio de aceptacion**:
  - [ ] Hero ocupa 100vh con background (imagen o video+fallback)
  - [ ] h1 con headline, parrafo con subheadline
  - [ ] 2 botones CTA con estilos primary y secondary
  - [ ] Animaciones de entrada (fade-in, slide-up) con Framer Motion
  - [ ] Responsive: stack vertical en mobile, texto centrado
  - [ ] Preload de imagen hero en <head> (LCP optimization)
- **Dependencias**: T-08, T-06, T-07

### T-11: Social proof / logos de clientes
- **Agente**: frontend-developer
- **Descripcion**: Implementar seccion de logos de clientes con texto "Trusted by leading companies". Grid de 5-6 logos placeholder (SVG simples o de picsum.photos). Animacion scroll-reveal con Framer Motion. Grayscale por defecto, color en hover.
- **Archivos esperados**: `src/sections/SocialProof.tsx`
- **Criterio de aceptacion**:
  - [ ] Seccion con titulo "Trusted by..." o similar
  - [ ] 5-6 logos placeholder visibles
  - [ ] Logos en grayscale, color en hover (CSS filter transition)
  - [ ] Scroll-reveal animacion al entrar en viewport
  - [ ] Responsive: grid adapta columnas en mobile
- **Dependencias**: T-08

### T-12: Features / Services cards
- **Agente**: frontend-developer
- **Descripcion**: Implementar seccion de features con 4 cards en grid. Cada card: icono (Lucide React), titulo, descripcion. Grid 2x2 en desktop, stack en mobile. Animaciones stagger con Framer Motion al hacer scroll. Hover: elevacion sutil con sombra.
- **Archivos esperados**: `src/sections/Features.tsx`, `src/components/FeatureCard.tsx`
- **Criterio de aceptacion**:
  - [ ] 4 feature cards con icono + titulo + descripcion
  - [ ] Grid 2x2 desktop, 1 columna mobile
  - [ ] Stagger animation al scroll (cada card entra con delay)
  - [ ] Hover: shadow elevation + scale sutil
  - [ ] Iconos de Lucide React
- **Dependencias**: T-08

### T-13: About / Stats section
- **Agente**: frontend-developer
- **Descripcion**: Implementar seccion split: izquierda imagen (about.png o placeholder), derecha texto + stats (4 counters: "10+ Years", "500+ Clients", "99% Satisfaction", "24/7 Support"). Counter animation con Framer Motion (numero sube de 0 al valor). Layout 50/50 en desktop, stack en mobile.
- **Archivos esperados**: `src/sections/About.tsx`, `src/components/StatCounter.tsx`
- **Criterio de aceptacion**:
  - [ ] Layout split: imagen izquierda, texto+stats derecha
  - [ ] 4 stats con counter animation (0 → valor final)
  - [ ] Counter se activa al entrar en viewport (useInView)
  - [ ] Responsive: stack vertical en mobile
  - [ ] Imagen con aspect-ratio correcto
- **Dependencias**: T-08, T-06

### T-14: Testimonials section
- **Agente**: frontend-developer
- **Descripcion**: Implementar seccion de testimonials con 3 cards. Cada card: foto avatar (picsum.photos placeholder), quote, nombre, cargo. Layout 3 columnas desktop, carousel o stack en mobile. Animacion scroll-reveal.
- **Archivos esperados**: `src/sections/Testimonials.tsx`, `src/components/TestimonialCard.tsx`
- **Criterio de aceptacion**:
  - [ ] 3 testimonial cards con avatar, quote, nombre, cargo
  - [ ] Avatares con placeholder de picsum.photos
  - [ ] Grid 3 columnas desktop, stack en mobile
  - [ ] Scroll-reveal animacion
  - [ ] Quotes con tipografia italica y comillas decorativas
- **Dependencias**: T-08

### T-15: Pricing section (3 tiers)
- **Agente**: frontend-developer
- **Descripcion**: Implementar seccion de pricing con 3 tiers: Starter, Professional (highlighted), Enterprise. Cada tier: nombre, precio, lista de features (check/x icons), boton CTA. Tier central destacado con borde/sombra/badge "Most Popular". Responsive: stack en mobile.
- **Archivos esperados**: `src/sections/Pricing.tsx`, `src/components/PricingCard.tsx`
- **Criterio de aceptacion**:
  - [ ] 3 pricing cards con nombre, precio, features, CTA
  - [ ] Tier central (Professional) visualmente destacado (scale, border, badge)
  - [ ] Features con iconos check (incluido) y x (no incluido)
  - [ ] Scroll-reveal con stagger
  - [ ] Responsive: stack vertical en mobile
- **Dependencias**: T-08

### T-16: FAQ accordion
- **Agente**: frontend-developer
- **Descripcion**: Implementar seccion FAQ con 5-6 preguntas en accordion. Click expande/colapsa con animacion Framer Motion (AnimatePresence + height auto). Solo un item abierto a la vez. Iconos +/- rotan en transicion. Accesible: role, aria-expanded, keyboard navigation.
- **Archivos esperados**: `src/sections/FAQ.tsx`, `src/components/AccordionItem.tsx`
- **Criterio de aceptacion**:
  - [ ] 5-6 preguntas con respuestas
  - [ ] Click expande/colapsa con animacion suave
  - [ ] Solo 1 item abierto a la vez
  - [ ] Icono +/- con rotacion animada
  - [ ] aria-expanded, role="button", keyboard Enter/Space funcional
  - [ ] Contenido FAQ coincidira con JSON-LD FAQPage (para SEO)
- **Dependencias**: T-08

### T-17: CTA final + Footer
- **Agente**: frontend-developer
- **Descripcion**: Implementar CTA section final (background con gradiente, headline, boton grande). Footer multi-columna: col1 logo+descripcion, col2 links rapidos, col3 servicios, col4 contacto. Social icons (Lucide). Copyright al final. Responsive.
- **Archivos esperados**: `src/sections/CTA.tsx`, `src/components/Footer.tsx`
- **Criterio de aceptacion**:
  - [ ] CTA section con gradiente, headline, boton prominente
  - [ ] Footer 4 columnas desktop, 2 columnas tablet, stack mobile
  - [ ] Logo en footer
  - [ ] Social icons (LinkedIn, Twitter, GitHub, etc.)
  - [ ] Copyright con anno dinamico
  - [ ] Links de navegacion funcionales (smooth scroll)
- **Dependencias**: T-08, T-05

---

## Fase 4 — Certificacion

### T-18: SEO completo
- **Agente**: seo-discovery
- **Descripcion**: Implementar SEO completo: meta tags (title, description, og:*, twitter:*), JSON-LD (Organization + FAQPage), sitemap.xml, robots.txt (con AI crawlers: GPTBot, anthropic-ai, etc.), llms.txt + llms-full.txt, manifest.json, theme-color, favicon, preconnect a dominios externos. Keyword primaria: "business solutions" o similar corporativo.
- **Archivos esperados**: `index.html` (meta tags), `public/sitemap.xml`, `public/robots.txt`, `public/llms.txt`, `public/llms-full.txt`, `public/manifest.json`
- **Criterio de aceptacion**:
  - [ ] Title con keyword primaria al inicio
  - [ ] og:title, og:description, og:image configurados
  - [ ] JSON-LD Organization valido (parseable con json.tool)
  - [ ] JSON-LD FAQPage que coincide EXACTAMENTE con el FAQ visible
  - [ ] sitemap.xml con URL del sitio
  - [ ] robots.txt con AI crawlers (GPTBot, anthropic-ai, CCBot, PerplexityBot)
  - [ ] llms.txt + llms-full.txt presentes
  - [ ] manifest.json basico (name, icons, theme_color)
  - [ ] theme-color meta tag
  - [ ] Preconnect para picsum.photos/unsplash
  - [ ] SEO score >= 85/100
- **Dependencias**: T-09 a T-17 (todo el frontend completo)

### T-19: Performance + vercel.json
- **Agente**: performance-benchmarker
- **Descripcion**: Medir Core Web Vitals en build de produccion. Verificar: LCP < 2.5s, CLS < 0.1, FID < 100ms. Crear vercel.json con security headers (de T-03) + caching headers. Verificar que hero image tiene preload. Verificar bundle size (main < 250KB gzip).
- **Archivos esperados**: `business-landing/vercel.json`, reporte en Engram `business-landing/perf-report`
- **Criterio de aceptacion**:
  - [ ] LCP < 2.5s en build de produccion
  - [ ] CLS < 0.1
  - [ ] Hero image tiene `<link rel="preload">`
  - [ ] vercel.json con security headers + cache headers
  - [ ] Bundle main < 250KB gzip
  - [ ] Reporte guardado en Engram
- **Dependencias**: T-18

### T-20: Reality check final
- **Agente**: reality-checker
- **Descripcion**: Validacion final completa: axe-core 0 violaciones critical/serious, todos los links internos retornan 200, JSON-LD parseable, responsive funcional (mobile 375px, tablet 768px, desktop 1280px), animaciones no causan layout shift, FAQ accordion funcional, navbar mobile funcional, skip-nav funcional.
- **Archivos esperados**: Engram cajon `business-landing/certificacion`
- **Criterio de aceptacion**:
  - [ ] axe-core: 0 violaciones critical/serious
  - [ ] Links internos: todos 200
  - [ ] JSON-LD: todos los bloques parseables
  - [ ] Responsive: 3 breakpoints verificados visualmente
  - [ ] Animaciones: sin CLS
  - [ ] FAQ accordion: expand/collapse funcional
  - [ ] Navbar mobile: hamburger abre/cierra
  - [ ] Skip-nav: visible con Tab, funcional con Enter
  - [ ] Certificacion guardada en Engram
- **Dependencias**: T-19

---

## Fase 5 — Publicacion

Fase 5 no se descompone en tareas granulares — el orquestador coordina git + deployer con confirmacion del usuario.
- **git**: commit + push (solo tras PASS de T-20)
- **deployer**: deploy a Vercel (solo con confirmacion del usuario)
