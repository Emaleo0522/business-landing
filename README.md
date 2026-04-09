# Business Landing

Landing page de negocio conversion-focused con 9 secciones completas. Template estático sin backend, listo para adaptar a cualquier cliente. Construido con el pipeline de vibecoding.

## Secciones

1. **Hero** — CTA principal con headline y subheadline
2. **Social Proof** — Logos o métricas de credibilidad
3. **Services** — Grilla de servicios con iconos
4. **About** — Historia / propuesta de valor
5. **Testimonials** — Cards de testimonios de clientes
6. **Pricing** — Tabla de precios con planes
7. **FAQ** — Preguntas frecuentes (accordion)
8. **Contact** — Formulario de contacto
9. **Navbar + Footer** — Navegación fija y pie de página

## Stack

| Capa | Tech |
|------|------|
| Framework | Vite + React 19 + TypeScript |
| Estilos | Tailwind CSS 4 |
| Animaciones | Framer Motion (scroll-reveal, stagger) |
| Icons | lucide-react |
| Linting | ESLint + eslint-plugin-jsx-a11y |
| Deploy | Vercel (estático) |

## Instalación

```bash
npm install
npm run dev
```

## Build y deploy

```bash
npm run build
# Subir dist/ a Vercel o cualquier host estático
```

## Accesibilidad

- Skip-nav link (`#main-content`) como primer elemento del DOM
- jsx-a11y en ESLint — errores de a11y detectados en build time
- Semántica HTML correcta en todas las secciones

## Estructura

```
business-landing/
├── src/
│   ├── sections/     # Hero, Services, About, Pricing, FAQ, Contact...
│   ├── components/   # Navbar, Footer
│   ├── hooks/        # Custom hooks
│   └── lib/          # Helpers y utilidades
├── assets/           # Imágenes y recursos
├── public/           # Assets públicos
└── vercel.json       # Configuración de deploy
```

## Uso como template

Editar los textos y datos directamente en cada archivo de `src/sections/`. Los colores y tipografía están en `src/index.css` como custom properties CSS.
