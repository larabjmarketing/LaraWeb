# Web de Lara Borrego (web completa)

Web estática de 43 páginas (HTML, CSS y JS sin compilación), con fuentes alojadas en el propio sitio.
Estructura de servicios: `/paid-media/`, `/desarrollo-web-ux-ui/`, `/branding/`, `/crm/` y `/social-media/`.

## Publicar con GitHub Pages
Sube el contenido de esta carpeta a la carpeta `docs` de la raíz del repositorio y en Settings > Pages elige `main` / `/docs`.
Todas las direcciones (canonical, datos estructurados, sitemap, llms.txt) apuntan a `https://larabjmarketing.github.io/LaraWeb`.
Si compras un dominio propio, sustituye esa dirección en todos los archivos.

## Pendiente de completar
1. `[TU NIF]` y `[TU DOMICILIO PROFESIONAL]` en `aviso-legal/` y `politica-de-privacidad/` (revisar con un profesional).
2. Enlace de reserva de llamada: `BOOKING_URL` en el generador o sustituir los enlaces "Reservar llamada".
3. WhatsApp: el teléfono es el de tu CV. Cambia o elimina los botones si no quieres mostrarlo.
4. Fotos: `assets/lara.jpg` y `assets/lara.webp` son de 320 px. Sustitúyelas por otras de mayor resolución.
5. Si añades GA4 o GTM: banner de cookies y actualizar la política de cookies.

## Después de publicar
Search Console: alta y envío de `sitemap.xml`. Perfil de Empresa de Google como negocio de área de servicio.

## Formulario
Guarda los mensajes en la tabla `contactos` de Supabase (proyecto `web-lara-borrego`), con la página de origen en `origen`. La clave de `assets/main.js` es la pública (publishable).
