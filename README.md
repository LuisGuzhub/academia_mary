# CGL Capacitaciones

Sitio multipágina sobre el proyecto existente de React + Vite. React Router gestiona las rutas y un layout comparte Header y Footer. Se conservan el banner original, logo, paleta, tipografía, estilos base, buscador, tarjetas, beneficios y CTA.

## Ejecutar

Requiere Node.js 20.19+ o 22.12+.

```powershell
npm install
npm run dev
npm run build
npm run preview
npm test
```

## Rutas

- Inicio: `/`
- Catálogo: `/cursos`
- Nosotros: `/nosotros`
- Instructores: `/instructores`
- Blog: `/blog`
- Contacto: `/contacto`
- Facilitadores y alianzas: `/facilitadores`
- Dónde estamos: `/ubicacion`
- Detalle reutilizable: `/cursos/:slug`
- Direcciones o cursos inexistentes: pantalla de recuperación con enlace al catálogo.

| Curso | Ruta |
| --- | --- |
| Curso Básico de Electricidad | /cursos/electricidad-basica |
| Curso Básico de Decoración con Globos | /cursos/decoracion-con-globos |
| Taller de Alambrismo Básico | /cursos/alambrismo-basico |
| Curso Básico de Velas para Emprender | /cursos/velas-para-emprender |
| Escuela de Nómina | /cursos/escuela-de-nomina |
| Curso de Maquillaje | /cursos/maquillaje |
| Formaliza tu Negocio | /cursos/formaliza-tu-negocio |

El catálogo conserva los filtros en la URL: `categoria`, `q`, `modalidad` y `nivel`. Ejemplo: `/cursos?categoria=nomina`. La búsqueda ignora tildes y mayúsculas. Cursos Digitales conserva su categoría sin inventar cursos. Inicio muestra cinco destacados; al buscar también encuentra los otros programas.

## Datos e imágenes

- `src/data/courses.js`: única fuente de cursos para Home, catálogo y detalle. Los campos no confirmados se omiten; nunca se inventan precios, valoraciones, fechas ni duración.
- `src/data/categories.js`: categorías.
- `src/data/site.js`: WhatsApp, Instagram, dirección y navegación. Los enlaces de consulta incorporan el nombre del curso.
- `src/data/instructors.js`: Michelle López, colaboradora del Taller de Alambrismo Básico. Se usa un icono neutro porque no se proporcionó un retrato.
- `src/data/spaces.js`: las tres fotografías de la sala.
- `src/data/blogPosts.js`: artículos locales existentes, conservados sin cambios.
- `src/assets/images/courses/`: seis flyers reales, con nombres terminados en `-cgi.jpeg`.
- `src/assets/images/spaces/`: tres fotos reales y la convocatoria de facilitadores.

Las diez imágenes se movieron desde Descargas sin sobrescribir archivos existentes. Las fotos provisionales anteriores permanecen en la carpeta original por trazabilidad, pero ya no se usan. El banner no se modificó. Ver `src/assets/images/IMAGENES.md` para la correspondencia de nombres.

## Archivos modificados

- `package.json`, `package-lock.json`: React Router.
- `src/App.jsx`, `src/main.jsx`: rutas y estilos adicionales.
- `src/components/Header.jsx`, `Footer.jsx`, `Logo.jsx`, `Hero.jsx`, `CTA.jsx`, `Categories.jsx`: navegación real y contacto.
- `src/components/CourseCard.jsx`, `InstructorCard.jsx`, `Benefits.jsx`, `Icon.jsx`: información real conservando los estilos.
- `src/sections/About.jsx`, `Instructors.jsx`, `Blog.jsx`, `Contact.jsx`: se reutilizan como páginas independientes, evitando duplicar componentes.
- `src/data/courses.js`, `categories.js`, `instructors.js`, `catalog.js`, `catalog.test.js`.
- Este README y la guía de imágenes.

## Archivos creados

- `src/layouts/MainLayout.jsx`.
- `src/pages/HomePage.jsx`, `CoursesPage.jsx`, `CourseDetailPage.jsx`, `FacilitatorsPage.jsx`, `LocationPage.jsx`, `NotFoundPage.jsx`.
- `src/components/CourseGrid.jsx`, `WhatsAppButton.jsx`, `ContactDetails.jsx`.
- `src/data/site.js`, `spaces.js`.
- `src/styles/pages.css`: estilos de las nuevas páginas y ajustes puntuales. Los cuatro CSS originales permanecen intactos.
- Diez imágenes en las subcarpetas `courses` y `spaces`.

## Pendientes de información real

- Precios, fechas, horarios, duración y disponibilidad de todos los cursos; tarifas y condiciones de uso de la sala.
- Modalidad de Alambrismo, Velas, Nómina y Formaliza tu Negocio; se ofrece consulta donde el flyer no la especifica.
- Flyer, temario y demás detalles de Formaliza tu Negocio.
- Fotos, biografías y nombres de los demás instructores.
- Textos institucionales oficiales y futuros artículos del blog.

Contacto valida nombre, correo y mensaje, y prepara la consulta para WhatsApp. El teléfono es opcional. El visitante confirma el envío en WhatsApp; la web no almacena los datos ni afirma que se hayan enviado. El destinatario se configura mediante `site.contactFormRecipient` en `src/data/site.js`. No requiere backend ni base de datos.

## Recarga de rutas al publicar

Vite y su vista previa resuelven directamente las rutas y su recarga. `public/.htaccess` se copia al build e incluye la reescritura para BrowserRouter en Hostinger/Apache, conservando la entrega normal de archivos estáticos. La publicación corresponde al propietario; no se modificaron alojamiento ni DNS.

## Verificación

- Compilación de producción y quince pruebas del catálogo, filtros, validación, mensajes de WhatsApp, destinatarios y orden de categorías.
- Navegación de las ocho páginas y siete detalles, más páginas no encontradas.
- Filtros combinados, búsqueda sin tildes, estado vacío y limpieza de filtros.
- Revisión de escritorio, tablet y móvil (320, 390, 768, 1024 y 1440 px), menú móvil y enlaces externos seguros.

## Identidad y ubicación actualizadas

La marca visible es CGL Capacitaciones y el nombre institucional es Centro de Gestión Integral — Soluciones 360°. El logo original está en `src/assets/images/branding/logo-cgi-original.png`; el encuadre CSS y el filtro SVG de `Logo.jsx` integran el emblema con el encabezado y el pie, conservando el PNG. Los nombres técnicos de archivos y el dominio `cgicapacitaciones.com` permanecen sin cambios.

Google Maps: https://maps.app.goo.gl/4wtntcQiTR9Z17qV9, centralizado en `src/data/site.js`. El enlace anterior se eliminó. El destino de Instagram sigue siendo la cuenta facilitada en los flyers; no se ha inventado una cuenta nueva por el cambio de siglas.

## Correcciones del 23 de septiembre de 2026

- Identidad, metadatos, mensajes y contactos centralizados en `src/data/site.js`. WhatsApp: 098 516 1076 y +593 98 988 8985, con enlaces independientes. Instagram: @cglcapacitaciones.
- `src/data/contact.js` y `src/components/ContactForm.jsx`: validación en español, codificación de todos los campos y apertura de WhatsApp; enlace alternativo si el navegador bloquea la ventana.
- `src/data/categories.js`: orden alfabético español compartido, Todos los cursos al final, Accesorios y Alambrismo, Marketing Digital y Seguridad y Salud Ocupacional. Los cursos oficiales mantienen sus nombres.
- `src/components/Categories.jsx`, `Icon.jsx`, `CourseGrid.jsx`, `src/pages/HomePage.jsx` y `CoursesPage.jsx`: iconos existentes, Velas Artesanales en dos líneas y estados de próximas capacitaciones sin cursos ficticios.
- `src/components/SocialLinks.jsx`, `ContactDetails.jsx`, `Footer.jsx`, `WhatsAppButton.jsx`: iconos SVG accesibles y enlaces seguros. Reutilizados en Nosotros, Ubicación y detalle de curso.
- Textos de marca actualizados en `Logo.jsx`, `Benefits.jsx`, `src/layouts/MainLayout.jsx`, `src/sections/About.jsx`, `Blog.jsx`, `src/pages/CourseDetailPage.jsx`, `FacilitatorsPage.jsx`, `LocationPage.jsx`, `NotFoundPage.jsx`, `src/data/courses.js`, `instructors.js` y `spaces.js`.
- `index.html` y `vite.config.js`: título y descripción generados desde la configuración compartida. `src/styles/pages.css`: ajustes puntuales de categorías, enlaces y validación; se conservan los cuatro CSS originales y el banner.
- `src/data/contact.test.js` y el comando de pruebas de `package.json`: cobertura del formulario, contactos y categorías. README y guía de imágenes actualizados.
- `public/.htaccess`: soporte de recarga de rutas al publicar en Apache.

### Archivos para publicar

- Build: `D:\Proyectos_paginas\academia_pagina\dist`.
- ZIP: `D:\Proyectos_paginas\academia_pagina\cgl-capacitaciones-hostinger.zip`.
- El ZIP contiene directamente `index.html`, `.htaccess` y los recursos de producción, sin carpeta `dist` adicional, fuentes, archivos privados ni `node_modules`.
- No se subieron archivos a Hostinger ni se cambió el dominio, el alojamiento o el DNS.
