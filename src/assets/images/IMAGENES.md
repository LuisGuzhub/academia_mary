# Imágenes de CGL

Todos los recursos se sirven localmente; la página no depende de servidores de fotos externos durante la navegación.

| Archivo                       | Uso                   | Estado                                           |
| ----------------------------- | --------------------- | ------------------------------------------------ |
| `banner.png`                  | Hero principal        | Copia exacta del `banner_img.png` proporcionado  |
| `electricidad.jpg`            | Curso de electricidad | Foto provisional                                 |
| `globos.jpg`                  | Curso de decoración   | Foto provisional                                 |
| `alambrismo.webp`             | Curso de alambrismo   | Foto provisional                                 |
| `velas.jpeg`                  | Curso de velas        | Foto provisional                                 |
| `nomina.webp`                 | Curso de nómina       | Foto provisional                                 |
| `instructora-creatividad.jpg` | Perfil ilustrativo    | Retrato de muestra; no identifica al equipo real |
| `instructor-tecnico.jpg`      | Perfil ilustrativo    | Retrato de muestra; no identifica al equipo real |
| `instructora-negocios.jpg`    | Perfil ilustrativo    | Foto de muestra; no identifica al equipo real    |

## Reemplazo

Reemplaza cada archivo manteniendo su nombre y extensión, o modifica su importación en `src/data/courses.js` o `src/data/instructors.js`. Las imágenes de curso se adaptan con `object-fit: cover`. Se recomienda 800 × 500 px, JPG o WebP, con el motivo principal centrado. Para retratos, usar imágenes verticales o cuadradas de al menos 400 px.

El banner se importa en `src/components/Hero.jsx`. Mantener su proporción 3:1 conserva la ubicación del botón. Para un banner con distinta composición hay que ajustar `.hero-button` en `src/styles/globals.css`. El logo provisional está en `Logo.jsx` y el favicon en `public/favicon.svg`.

## Procedencia de las imágenes provisionales

Las fuentes se registran para trazabilidad; no se ha confirmado licencia comercial de las fotos de sitios de terceros. Reemplazar por recursos propios/licenciados antes de una publicación comercial.

- Electricidad: [Carré Diagnostics](https://www.carre-diagnostics.fr/diagnostic-electricite-i5.html).
- Globos: [MyBBShowerShop](https://www.mybbshowershop.com/kit-arche-de-ballons-organiques-rose-et-dore-chrome-5286).
- Alambrismo: [Tejas Beads](https://www.tejasbeads.com/blogs/the-jewelry-maker/everything-you-need-to-know-about-jewelry-wire).
- Velas: [Vava Flame](https://vava-flame.ru/blog/tpost/22e3pge3g1-kak-otkrit-oflain-magazin-svechei-ruchno).
- Nómina: [Near / fotografía de Microsoft 365](https://www.hirewithnear.com/blog/how-to-hire-offshore-payroll-manager).
- Retratos de muestra de Unsplash: imágenes `photo-1580489944761-15a19d654956`, `photo-1500648767791-00dcc994a43e` y `photo-1580894908361-967195033215` servidas por images.unsplash.com.
