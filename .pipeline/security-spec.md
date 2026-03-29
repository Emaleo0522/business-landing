# Security Spec — business-landing

Fecha: 2026-03-28
Tipo: Landing estatica (Vite + React 18 + Tailwind CSS 3)
Deploy: Vercel
Backend: Ninguno
Auth: Ninguna

---

## 1. Threat Model (STRIDE) — Sitio Estatico

| Amenaza | Componente | Riesgo | Mitigacion |
|---------|-----------|--------|------------|
| **Spoofing** — Tab-nabbing via links externos | `<a target="_blank">` | MEDIO | `rel="noopener noreferrer"` obligatorio en todo link externo |
| **Spoofing** — Clickjacking (embed en iframe malicioso) | Pagina completa | MEDIO | `X-Frame-Options: SAMEORIGIN` + `frame-ancestors 'none'` en CSP |
| **Tampering** — Inyeccion de scripts via CDN comprometido | Dependencias externas (Google Fonts) | BAJO | CSP restrictiva, solo whitelist de origenes conocidos |
| **Tampering** — Supply-chain attack en lockfile | package-lock.json | BAJO | `lockfile-lint` en CI: `npx lockfile-lint --allowed-hosts npm --allowed-schemes https: --type npm --path package-lock.json` |
| **Repudiation** — N/A | Sin backend | NINGUNO | No aplica (sitio estatico sin acciones de usuario) |
| **Info Disclosure** — Source maps expuestos | `*.map` files en produccion | MEDIO | Vite: `build.sourcemap: false` (default). Verificar que no se suban `.map` files |
| **Info Disclosure** — Headers que revelan tecnologia | Server headers | BAJO | Vercel no expone version de server por defecto. Headers custom no revelan stack |
| **DoS** — Sin rate limiting | Assets estaticos | BAJO | Vercel Edge Network absorbe DDoS basico. Sin backend propio, superficie minima |
| **Elevation of Privilege** — N/A | Sin auth ni backend | NINGUNO | No aplica |

**Amenazas criticas: 0** — El perfil de riesgo de una landing estatica sin backend es inherentemente bajo.

---

## 2. Security Headers (vercel.json)

```json
{
  "headers": [
    {
      "source": "/(.*)",
      "headers": [
        { "key": "X-Content-Type-Options", "value": "nosniff" },
        { "key": "X-Frame-Options", "value": "SAMEORIGIN" },
        { "key": "Referrer-Policy", "value": "strict-origin-when-cross-origin" },
        { "key": "Permissions-Policy", "value": "camera=(), microphone=(), geolocation=()" },
        { "key": "X-XSS-Protection", "value": "0" },
        { "key": "Content-Security-Policy", "value": "default-src 'self'; script-src 'self' 'unsafe-inline'; style-src 'self' 'unsafe-inline' https://fonts.googleapis.com; font-src 'self' https://fonts.gstatic.com; img-src 'self' https://picsum.photos https://fastly.picsum.photos https://images.unsplash.com data:; connect-src 'self'; frame-ancestors 'none'" }
      ]
    },
    {
      "source": "/assets/(.*)",
      "headers": [
        { "key": "Cache-Control", "value": "public, max-age=604800, immutable" }
      ]
    },
    {
      "source": "/(.*)\\.js",
      "headers": [
        { "key": "Cache-Control", "value": "public, max-age=3600" }
      ]
    },
    {
      "source": "/(.*)\\.css",
      "headers": [
        { "key": "Cache-Control", "value": "public, max-age=3600" }
      ]
    }
  ]
}
```

### Notas sobre CSP
- `'unsafe-inline'` en script-src: necesario para Vite/React hydration. Si se migra a nonces, eliminar.
- `'unsafe-inline'` en style-src: necesario para Tailwind CSS inline styles y Google Fonts.
- `frame-ancestors 'none'`: refuerza X-Frame-Options, previene clickjacking.
- `img-src` incluye picsum.photos, fastly.picsum.photos, images.unsplash.com y data: para placeholders e imagenes externas.

---

## 3. OWASP Top 10 — Aplicabilidad

| # | Vulnerabilidad | Aplica | Mitigacion |
|---|---------------|--------|------------|
| A01 | Broken Access Control | NO | Sin backend ni auth |
| A02 | Cryptographic Failures | NO | Sin datos sensibles ni crypto |
| A03 | Injection | PARCIAL | Sin backend, pero XSS client-side posible si se renderiza HTML dinamico. React escapa por defecto. No usar `dangerouslySetInnerHTML`. |
| A04 | Insecure Design | SI | Threat model definido arriba |
| A05 | Security Misconfiguration | SI | Headers configurados en vercel.json. CORS no aplica (sin API). Source maps deshabilitados. |
| A06 | Vulnerable Components | SI | Audit de dependencias: `npm audit` periodico. `lockfile-lint` para supply-chain. |
| A07 | Auth Failures | NO | Sin autenticacion |
| A08 | Data Integrity | PARCIAL | Verificar integridad de dependencias via lockfile. GitHub Actions pinned a SHA (recomendacion CI/CD). |
| A09 | Logging Failures | NO | Sin backend ni eventos que loggear |
| A10 | SSRF | NO | Sin fetch server-side |

**OWASP aplicable: A03 (parcial), A04, A05, A06, A08 (parcial)**

---

## 4. Reglas de Validacion de Input

Para sitio estatico sin formularios backend:
- **React escapa JSX por defecto** — no usar `dangerouslySetInnerHTML` bajo ninguna circunstancia
- Si se agrega formulario de contacto (mailto/terceros): validar client-side con Zod, pero el procesamiento real lo hace el servicio externo
- Todo `<a target="_blank">` DEBE llevar `rel="noopener noreferrer"`

---

## 5. Seguridad Client-Side y Supply Chain

### Tab-nabbing
- Todo `<a target="_blank">` sin `rel="noopener noreferrer"` permite al sitio externo acceder a `window.opener`
- Riesgo: Spoofing — redirigir la pestana original
- Fix: agregar `rel="noopener noreferrer"` a todos los links externos

### Source maps
- Verificar que `vite.config.ts` NO tenga `build.sourcemap: true`
- Verificar post-build que no existan archivos `*.map` en `dist/`

### lockfile-lint
```bash
npx lockfile-lint --allowed-hosts npm --allowed-schemes https: --type npm --path package-lock.json
```

### CI/CD Hardening (recomendacion para orquestador)
- GitHub Actions: pinear a SHA, no tags (`uses: actions/checkout@8e8c483...`)
- CodeQL SAST: `github/codeql-action/analyze@v3` para deteccion automatica de XSS, path traversal

---

## 6. Resumen Ejecutivo

- **Superficie de ataque**: Minima (HTML/CSS/JS estatico servido por Vercel Edge)
- **Sin backend**: elimina A01, A02, A07, A09, A10 de OWASP
- **Riesgos reales**: XSS via dangerouslySetInnerHTML (evitar), clickjacking (mitigado con headers), supply-chain (mitigado con lockfile-lint)
- **Headers**: 6 security headers + cache headers configurados en vercel.json
- **No hay secrets**: nada que proteger en .env (sitio 100% publico)
