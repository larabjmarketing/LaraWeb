# Web de Lara Borrego (web completa)

Web estática de 25 páginas (HTML, CSS y JS sin compilación) con fuentes alojadas en el propio sitio.

## ANTES DE PUBLICAR
1. **Dominio:** sustituye `https://TUDOMINIO.com` por tu dirección real en todos los archivos (canonical, datos estructurados, sitemap y robots).
2. **Textos legales:** completa `[TU NIF]` y `[TU DOMICILIO PROFESIONAL]` en `aviso-legal/` y `politica-de-privacidad/`, y revísalos con un profesional.
3. **Reserva de llamada:** si tienes Calendly o TidyCal, pon el enlace en `BOOKING_URL` (en el generador) o sustituye los enlaces "Reservar llamada". Mientras tanto llevan a `/contacto/`.
4. **WhatsApp:** los botones usan el teléfono de tu CV. Cámbialo o elimínalo si no quieres mostrarlo.
5. **Fotos:** solo hay una (320 px). Sustitúyela por una de mayor resolución en `assets/lara.jpg`.
6. **Ejemplos ilustrativos:** son datos hipotéticos y así se indica. No los presentes como casos de clientes.

## Publicar con GitHub Pages
Sube el contenido de esta carpeta a la raíz de un repositorio público. Settings > Pages > Deploy from a branch > `main` / `(root)`.
Dominio propio: Settings > Pages > Custom domain. DNS: cuatro registros A a `185.199.108.153`, `185.199.109.153`, `185.199.110.153` y `185.199.111.153`, y un CNAME de `www` a `TU-USUARIO.github.io`.

## Después de publicar
Alta en Google Search Console y envío de `sitemap.xml`. Perfil de Empresa de Google como negocio de área de servicio. Si añades GA4 o GTM, añade también un banner de cookies y actualiza la política de cookies.

## Formulario
Guarda los mensajes en la tabla `contactos` de Supabase (proyecto `web-lara-borrego`), con la página de origen en la columna `origen`. La clave de `assets/main.js` es la pública (publishable).
