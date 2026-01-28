# Maestro Alirio 🔮 Centro Espiritual Especializado

Sitio web profesional y moderno para Centro Espiritual - Maestro Alirio. Construido con **React 19** + **Vite** para máximo rendimiento.

## ✨ Características

- ⚡ **Vite** - Bundler ultrarrápido
- ⚛️ **React 19** - Framework moderno
- 📱 **Responsive** - Mobile-first design
- 🔍 **SEO Optimizado** - Posicionado para México
- 🎨 **Diseño Moderno** - Paleta morada + naranja
- 💬 **Testimonios** - Sección social proof
- 📞 **WhatsApp Integrado** - +52 5537188949
- ♿ **Accesible** - WCAG compliant
- 🚀 **Listo para Deploy** - Vercel/Netlify

## 📦 Secciones

1. **Hero** - Banner impactante con CTA
2. **Maestro Story** - Biografía y experiencia
3. **Servicios** - Acordeón de 5 servicios espirituales
4. **Beneficios** - Acordeón de 4 beneficios principales
5. **Galería** - 3 imágenes profesionales
6. **Testimonios** - 4 comentarios de clientes reales
7. **Contacto Modal** - Formulario con Supabase (opcional)

## 🚀 Inicio Rápido

```bash
# Clonar
git clone https://github.com/centroespititualespecializado-code/Maestro-Alirio.git
cd Maestro-Alirio

# Instalar
npm install

# Desarrollo
npm run dev

# Build producción
npm run build

# Preview build
npm run preview
```

## 🔧 Configuración

### Variables de Entorno (.env)

```env
VITE_SUPABASE_URL=https://your-project.supabase.co
VITE_SUPABASE_KEY=your-anon-key
```

### Cambiar Número de WhatsApp

Edita estos archivos:
- `src/components/Hero.jsx`
- `src/components/Services.jsx`
- `src/components/WhatsAppCTA.jsx`
- `src/components/Testimonials.jsx`

Busca y reemplaza: `525537188949`

## 🖼️ Imágenes Requeridas

Coloca en `assets/photos/`:
- `img1.jpeg` - Galería imagen 1
- `img3.webp` - Galería imagen 2
- `img4.jpg` - Galería imagen 3
- `maestro.jpg` - Foto del Maestro Alirio
- `hero.jpg` - Imagen hero

## 📊 SEO

El sitio está optimizado para:
- Meta tags con keywords para México
- Schema JSON-LD (LocalBusiness)
- sitemap.xml
- robots.txt
- Geolocalización (México)
- Open Graph para redes sociales

## 🌐 Despliegue

Ver [DEPLOYMENT.md](./DEPLOYMENT.md) para instrucciones detalladas.

**Recomendado:** Vercel (gratuito, automático)

```bash
npm install -g vercel
vercel
```

## 📁 Estructura

```
src/
├── components/
│   ├── Header.jsx
│   ├── Hero.jsx
│   ├── MaestroStory.jsx
│   ├── Services.jsx
│   ├── Benefits.jsx
│   ├── Gallery.jsx
│   ├── Testimonials.jsx
│   ├── ContactModal.jsx
│   ├── WhatsAppCTA.jsx
│   ├── Footer.jsx
│   └── SEOSchema.jsx
├── config/
│   └── supabase-config.js
├── styles/
│   └── index.css
├── App.jsx
└── main.jsx
public/
├── robots.txt
├── sitemap.xml
└── [imágenes]
```

## 🎯 Personalización

### Colores
Edit `src/styles/index.css`:
```css
:root {
  --purple-900: #0b0427;
  --purple-500: #6d1b7b;
  --accent: #ff8a00;
  --green: #25d366;
}
```

### Textos y Contenido
Edit componentes en `src/components/`

### Testimonios
Actualiza array en `src/components/Testimonials.jsx`

## 📱 Responsive

- Desktop: Grid 3 columnas
- Tablet: Grid 2 columnas
- Mobile: Grid 1 columna
- Breakpoints: 980px, 760px

## ⚙️ Scripts

```bash
npm run dev      # Desarrollo
npm run build    # Build para producción
npm run preview  # Preview local de build
npm run lint     # ESLint (cuando configure)
```

## 📞 Soporte

Para cambios en servicios, beneficios o testimonios, edita los arrays de datos en cada componente.

## 📄 Licencia

ISC

## 👨‍💻 Desarrollador

Maestro Alirio © 2026

---

**Última actualización:** 28 de enero de 2026

## Estructura del proyecto

```
/ (repo root)
├─ index.html
├─ styles.css
├─ script.js
├─ assets/
│  ├─ icons/ (svg icons)
│  └─ photos/ (placeholders para la galería)
└─ README.md
```

## Cómo ver el sitio localmente

1. Abrir `index.html` directamente en el navegador (arrastrar/soltar) — rápido y sencillo.

2. (Alternativa recomendada) Levantar un servidor HTTP local para evitar problemas con rutas relativas:

- Con Python 3:

```bash
python -m http.server 8000
# luego abrir http://localhost:8000
```

- Con la extensión "Live Server" en VS Code: botón `Go Live`.

## Reemplazar fotos e iconos

- Fotos reales: sustituye los archivos en `assets/photos/` (mantén nombres `center-1.*`, `center-2.*`, `center-3.*` o actualiza los `src` en `index.html`).
- Iconos SVG: reemplaza los archivos en `assets/icons/` o añade nuevos y enlázalos en `index.html`.

> Tip: utiliza imágenes optimizadas (webp/jpg/png) para mejorar la carga.

## Cambiar el número de WhatsApp

- Edita el enlace en `index.html` (elemento `.whatsapp-cta`) y reemplaza `https://wa.me/573249704916?text=...` por el número y mensaje que prefieras.

## Integración con Supabase (opcional)

Si quieres gestionar los servicios, beneficios, galería y contactos por HTTP, puedes usar **Supabase**. Estos son los pasos principales:

1. Crea un proyecto en https://supabase.com y copia tu `project url` y `anon key`.
2. Crea las tablas sugeridas (ejemplo SQL):

```sql
-- services
create table services (
  id bigserial primary key,
  title text not null,
  description text,
  icon text,
  slug text,
  "order" int default 0
);

-- benefits
create table benefits (
  id bigserial primary key,
  title text not null,
  description text,
  icon text,
  "order" int default 0
);

-- gallery
create table gallery (
  id bigserial primary key,
  title text,
  file_path text,
  url text,
  caption text,
  "order" int default 0
);

-- contacts
create table contacts (
  id bigserial primary key,
  name text,
  phone text,
  message text,
  created_at timestamptz default now()
);
```

3. Crea un bucket `photos` (Storage) y sube fotos. En la tabla `gallery` guarda `file_path` (p. ej. `center-1.jpg`) o guarda `url` con enlace público.

4. Copia `supabase-config.example.js` a `supabase-config.js` y añade tus valores:

```js
window.SUPABASE_URL = 'https://<your-project>.supabase.co'
window.SUPABASE_ANON_KEY = '<public-anon-key>'
```

5. Revisa políticas (RLS) si quieres que solo lecturas sean públicas y las inserciones (contacts) estén protegidas o permitidas con la `anon key`.

6. La web ya incluye código para: cargar `services`, `benefits`, `gallery` y enviar `contacts` a Supabase; simplemente crea las tablas y sube datos de ejemplo y la página cargará la información automáticamente.

---



## Contribuir / Flujos de trabajo

- Crear branch nuevo para cambios: `git checkout -b feature/nombre`
- Hacer commits claros: `git add . && git commit -m "Descripción corta"`
- Push y abrir PR al branch `main`

## Tareas pendientes (TODO)

- Estilos y responsividad (mejorar tipografías y paleta de colores)
- Agregar funcionalidad para enviar formularios / agendar citas
- Pruebas y ajustes en distintos navegadores y dispositivos
- Preparar deploy/hosting

## Licencia

Este proyecto puede licenciarse a elección del equipo (ej. MIT). Añade `LICENSE` si decides aplicar una licencia.

---

**Contacto**: WhatsApp +57 3249704916

Si quieres, puedo: reemplazar las imágenes por fotos reales que subas, ajustar colores o preparar el sitio para publicarlo (hosting).