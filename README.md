# Maestro-Alirio — Centro Espiritual

**Descripción**

Sitio web simple para el *Centro Espiritual - Maestro Alirio*. Proporciona información sobre los servicios (ceremonias de protección espiritual, limpieza de amor, limpieza energética, etc.), los beneficios que ofrecen y una galería de imágenes. Incluye un botón de contacto/publicidad que abre WhatsApp al número +57 3249704916.

## Características

- Página estática con módulos desplegables para **Servicios** y **Beneficios**
- Iconos SVG para cada módulo
- Galería de fotos (placeholders SVG incluidos)
- Botón CTA flotante que abre WhatsApp con mensaje prellenado
- Diseño responsive y accesible (atributos `aria` para el acordeón)

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