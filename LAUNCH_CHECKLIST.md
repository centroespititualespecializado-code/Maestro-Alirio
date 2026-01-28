# 📋 Checklist Pre-Lanzamiento

## ✅ Antes del Despliegue

### Configuración General
- [ ] Dominio comprado (maestroalirio.mx recomendado)
- [ ] Certificado SSL (automático en Vercel/Netlify)
- [ ] Email de contacto configurado
- [ ] Políticas de privacidad redactadas
- [ ] Términos y condiciones redactados

### Contenido
- [ ] Fotos profesionales en `assets/photos/`
  - [ ] img1.jpeg
  - [ ] img3.webp
  - [ ] img4.jpg
  - [ ] maestro.jpg
  - [ ] hero.jpg
- [ ] Testimonios de clientes reales
- [ ] Descripción del maestro completa
- [ ] Servicios verificados y correctos

### SEO & Marketing
- [ ] Meta descripción optimizada
- [ ] Keywords investigadas para México
- [ ] Google Search Console configurado
- [ ] Bing Webmaster Tools configurado
- [ ] Google Analytics ID agregado a .env
- [ ] Sitemap.xml verificado
- [ ] Robots.txt verificado
- [ ] Schema JSON-LD validado (schema.org)

### Técnico
- [ ] `npm install` ejecutado
- [ ] `npm run build` sin errores
- [ ] `npm run preview` funciona
- [ ] Variables de entorno configuradas
  - [ ] VITE_SUPABASE_URL
  - [ ] VITE_SUPABASE_KEY
  - [ ] VITE_GA_ID (opcional)
- [ ] Supabase configurado (si usas base de datos)
- [ ] Base de datos "contacts" creada (si usas formulario)
- [ ] Cors configurado en Supabase

### Performance
- [ ] Imágenes optimizadas (<500KB cada una)
- [ ] Build size < 500KB
- [ ] Lighthouse score > 90
- [ ] PageSpeed Insights > 90
- [ ] Mobile speed > 50

### Funcionalidad
- [ ] WhatsApp links funcionan
- [ ] Modal de contacto funciona
- [ ] Acordeones funcionan
- [ ] Enlaces internos correctos
- [ ] Links externos abren en nueva pestaña
- [ ] Responsive en móvil
- [ ] Responsive en tablet
- [ ] Compatible con todos los navegadores principales

### Seguridad
- [ ] HTTPS habilitado
- [ ] Claves de API no expuestas
- [ ] .env ignorado en git
- [ ] Rate limiting en formularios (si aplica)
- [ ] CORS configurado correctamente

## 🚀 Despliegue

### Opción: Vercel
```bash
# 1. Instalar CLI
npm install -g vercel

# 2. Deploy
vercel

# 3. Configurar dominio en Vercel Dashboard
# 4. Agregar variables de entorno en Settings > Environment Variables
```

### Opción: Netlify
```bash
# 1. Conectar repo en netlify.com
# 2. Deploy automático en push a main
# 3. Configurar dominio
# 4. Agregar variables de entorno
```

## 📊 Post-Lanzamiento

- [ ] Testear sitio completo en producción
- [ ] Verificar enlaces en Search Console
- [ ] Monitorear Google Analytics
- [ ] Responder comentarios/testimonios
- [ ] Backup configurado
- [ ] SSL renovación automática
- [ ] Actualizaciones de seguridad programadas

## 📞 Contacto & Soporte

**WhatsApp:** +52 5537188949
**Email:** [tu-email]
**Horario:** [horario de atención]

---

**Última actualización:** 28 de enero de 2026
**Estado:** ✅ Listo para Producción
