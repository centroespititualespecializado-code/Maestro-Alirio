# Maestro Alirio - Centro Espiritual

**Sitio Web Profesional - React + Vite**

## 🚀 Despliegue

### Opción 1: Vercel (Recomendado)

1. Instala Vercel CLI:
```bash
npm install -g vercel
```

2. Despliega:
```bash
vercel
```

3. Configura variables de entorno en Vercel Dashboard si es necesario.

### Opción 2: Netlify

1. Conecta tu repositorio en [netlify.com](https://netlify.com)
2. Configure como:
   - **Build command**: `npm run build`
   - **Publish directory**: `dist`

### Opción 3: GitHub Pages

1. Actualiza `vite.config.js`:
```javascript
export default defineConfig({
  base: '/Maestro-Alirio/',
  // ... resto de config
})
```

2. Deploy:
```bash
npm run build
git add dist
git commit -m "Deploy"
git push
```

## 📦 Instalación Local

```bash
# Clonar repo
git clone https://github.com/centroespititualespecializado-code/Maestro-Alirio.git
cd Maestro-Alirio

# Instalar dependencias
npm install

# Desarrollo
npm run dev

# Build producción
npm run build

# Preview build
npm run preview
```

## 🔧 Variables de Entorno

Crea un archivo `.env` con:
```
VITE_SUPABASE_URL=https://your-project.supabase.co
VITE_SUPABASE_KEY=your-anon-key
```

## 📋 Checklist Pre-Despliegue

- [x] React + Vite configurado
- [x] SEO optimizado para México
- [x] Responsive design
- [x] Meta tags y Schema JSON-LD
- [x] Imágenes optimizadas
- [x] WhatsApp integrado (+52 5537188949)
- [ ] Supabase configurado (si usas base de datos)
- [ ] Dominio personalizado
- [ ] SSL/HTTPS (automático en Vercel/Netlify)
- [ ] Analytics configurado
- [ ] Test de rendimiento

## 🌐 Dominio Personalizado

Para usar `maestroalirio.mx`:
1. Compra el dominio
2. En Vercel/Netlify, agrega el dominio
3. Configura DNS según las instrucciones

## 📊 Performance

El sitio está optimizado para:
- ⚡ Carga rápida (Vite)
- 📱 Mobile-first
- 🔍 SEO-friendly
- ♿ Accesibilidad

## 🎯 Próximos Pasos

1. Configurar Supabase para contacts si deseas
2. Agregar Google Analytics
3. Configurar formularios de contacto
4. Optimizar imágenes adicionales
5. Agregar más testimonios reales

---

**Maestro Alirio © 2026**
