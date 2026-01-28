# 🏗️ Arquitectura del Proyecto

## Stack Tecnológico

```
Frontend:
├── React 19.2.4
├── Vite 7.3.1
├── JavaScript/JSX
└── CSS3 (Flexbox/Grid)

Backend/Database (Opcional):
└── Supabase (PostgreSQL + Auth)

Deployment:
├── Vercel (Recomendado)
└── Netlify (Alternativa)

Herramientas:
├── Node.js 18+
├── npm
└── Git
```

## Estructura de Carpetas

```
maestro-alirio/
├── public/
│   ├── robots.txt
│   ├── sitemap.xml
│   └── webmaster-verification.json
├── src/
│   ├── components/
│   │   ├── Header.jsx          # Navegación superior
│   │   ├── Hero.jsx            # Banner principal
│   │   ├── MaestroStory.jsx   # Historia del maestro
│   │   ├── Services.jsx        # Servicios (acordeón)
│   │   ├── Benefits.jsx        # Beneficios (acordeón)
│   │   ├── Gallery.jsx         # Galería de fotos
│   │   ├── Testimonials.jsx   # Testimonios de clientes
│   │   ├── ContactModal.jsx   # Modal de contacto
│   │   ├── WhatsAppCTA.jsx    # Botón flotante WhatsApp
│   │   ├── Footer.jsx          # Pie de página
│   │   ├── SEOSchema.jsx       # Schema JSON-LD
│   │   └── Analytics.jsx       # Google Analytics
│   ├── config/
│   │   └── supabase-config.js # Configuración Supabase
│   ├── styles/
│   │   └── index.css           # Estilos globales
│   ├── App.jsx                 # Componente raíz
│   └── main.jsx                # Punto de entrada
├── assets/
│   ├── icons/                  # Iconos SVG
│   └── photos/                 # Imágenes
├── index.html                  # HTML principal
├── vite.config.js             # Config Vite
├── vercel.json                # Config Vercel
├── netlify.toml               # Config Netlify
├── package.json
├── .env.example               # Template variables
├── .env.production.example    # Template producción
├── README.md                  # Documentación
├── DEPLOYMENT.md              # Guía despliegue
└── LAUNCH_CHECKLIST.md        # Checklist lanzamiento
```

## Flujo de Datos

```
App.jsx (Root)
├── SEOSchema (Meta tags)
├── Analytics (Google Analytics)
├── Header (Nav + Modal trigger)
├── Hero (CTA Principal)
├── MaestroStory (Biografía)
├── Main
│   ├── Services (Acordeón)
│   ├── Benefits (Acordeón)
│   └── Gallery (Fotos)
├── Testimonials (Reviews)
├── ContactModal (Formulario)
├── WhatsAppCTA (Botón flotante)
└── Footer (Copyright)
```

## Estados & Hooks

### App.jsx
- `showModal` - Control de visibilidad del modal

### Services.jsx
- `expandedId` - ID del servicio expandido
- Estado local (sin API por defecto)

### Benefits.jsx
- `expandedId` - ID del beneficio expandido
- Estado local

### Testimonials.jsx
- Estado local de testimonios (array)

### ContactModal.jsx
- `formData` - Datos del formulario
- `status` - Estado de envío
- `loading` - Indicador de carga

## Integración con APIs

### Supabase (Opcional)
```javascript
// Tabla: contacts
{
  id: UUID
  name: string
  phone: string
  message: text
  created_at: timestamp
}
```

### Google Analytics
```javascript
// Eventos personalizados
gtag('event', 'contact_click')
gtag('event', 'service_view', { service: name })
```

## Estilos CSS

### Estructura CSS
```css
:root {} /* Variables */
* {} /* Reset */
body {} /* Base */

/* Layout */
.container {}
.hero {}
.modules {}
.cards {}
.accordion {}

/* Componentes */
.btn-primary {}
.btn-green {}
.card {}
.modal {}

/* Responsive */
@media (max-width: 980px) {}
@media (max-width: 760px) {}
```

### Paleta de Colores
- `--purple-900`: #0b0427 (Fondo)
- `--purple-800`: #1a0a36 (Fondo alt)
- `--purple-600`: #4b1260 (Acentos)
- `--purple-500`: #6d1b7b (Gradientes)
- `--accent`: #ff8a00 (Naranja - CTA)
- `--green`: #25d366 (Verde WhatsApp)
- `--muted`: #b4a8c9 (Texto secundario)

## Performance Optimizations

1. **Code Splitting** - Vite automático
2. **Image Optimization** - WebP/JPEG comprimidas
3. **Lazy Loading** - Imágenes con `loading="lazy"`
4. **CSS Minification** - Vite automático
5. **Tree Shaking** - Vite automático
6. **Caching Headers** - Netlify/Vercel
7. **CDN** - Automático en Vercel/Netlify

## SEO Strategy

1. **Meta Tags** - Descripción, keywords, OG
2. **Schema.org** - JSON-LD (LocalBusiness)
3. **Sitemap** - XML generado
4. **Robots.txt** - Indexación controlada
5. **Structured Data** - Breadcrumbs, ratings
6. **Alt Text** - Todas las imágenes
7. **Responsive** - Mobile-first

## Seguridad

1. **HTTPS** - Automático en plataformas
2. **CORS** - Configurado en Supabase
3. **Rate Limiting** - En formularios
4. **Environment Variables** - Claves no expuestas
5. **SQL Injection** - Prevenido por Supabase
6. **XSS Protection** - React escapa por defecto

## Maintenance

### Actualizaciones
```bash
npm outdated        # Ver paquetes desactualizados
npm update          # Actualizar menor versión
npm install [pkg]@latest  # Mayor versión
```

### Testing
```bash
npm run build       # Build de producción
npm run preview     # Preview local
```

### Monitoring
- Google Analytics dashboard
- Vercel/Netlify Analytics
- Error tracking (Sentry - opcional)
- Uptime monitoring (pingdom - opcional)

---

**Última actualización:** 28 de enero de 2026
