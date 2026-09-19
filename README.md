# CGL Capacitaciones

Primera versión responsive en React + Vite, basada en la referencia visual proporcionada. Se utilizó la carpeta existente `D:\Proyectos_paginas\academia_pagina`, donde estaba el banner original. No había código anterior que sobrescribir.

## Ejecutar

Requiere Node.js 20.19+ o 22.12+ (verificado con Node.js 24).

```powershell
cd D:\Proyectos_paginas\academia_pagina
npm install
npm run dev
```

Abrir la dirección local que muestra Vite, normalmente http://localhost:5173.

```powershell
npm run build    # Genera dist/
npm run preview  # Revisa la versión compilada
npm test         # Pruebas de búsqueda, filtros y precios
```

## Implementado

- Header fijo con navegación por secciones, indicador activo, menú móvil y cierre con Escape.
- Banner original como imagen; botón HTML superpuesto con desplazamiento al catálogo. El archivo original `banner_img.png` no se modificó.
- Búsqueda inmediata que ignora tildes y mayúsculas; filtros combinables por categoría, modalidad y nivel; restablecimiento y estado sin resultados.
- Siete categorías y cinco tarjetas dinámicas con precios en dólares y dos decimales.
- Beneficios y CTA inferior, Nosotros, tres perfiles de instructores, tres artículos expandibles y Contacto.
- Enlaces de consulta de curso que completan el mensaje del formulario.
- Formulario con validación del navegador y confirmación local. No envía ni conserva información.
- Etiquetas accesibles, navegación por teclado, enlace para saltar al contenido, textos alternativos y respeto por movimiento reducido.
- Diseño de escritorio con cinco tarjetas por fila, tablet con tres y móvil con tarjetas horizontales en una columna.

## Archivos y organización

Todos los archivos de aplicación son nuevos. El único archivo preexistente era `banner_img.png`, que se conservó intacto.

```text
index.html                Metadatos y entrada HTML
vite.config.js            Configuración de React y Vite
package.json              Dependencias y comandos
package-lock.json         Versiones reproducibles
public/favicon.svg        Icono provisional de la marca
src/
  App.jsx                 Composición de la página y estado compartido
  main.jsx                Entrada de React
  components/             Header, Logo, Hero, SearchBar, Categories,
                          CourseCard, Benefits, CTA, InstructorCard,
                          BlogCard, ContactForm, Footer e Icon
  sections/               About, Instructors, Blog y Contact
  data/                   courses, categories, instructors, blogPosts,
                          catalog y sus pruebas
  styles/                 variables.css, globals.css, catalog.css,
                          sections.css
  assets/images/          Imágenes locales y guía de reemplazo
```

## Personalizar

- **Imágenes:** consultar `src/assets/images/IMAGENES.md`. Reemplazar los archivos manteniendo sus nombres o actualizar las importaciones en los archivos de datos.
- **Cursos, precios y valoraciones:** `src/data/courses.js`. Los datos son provisionales, no valoraciones verificadas de alumnos reales.
- **Categorías:** `src/data/categories.js`. Cursos Digitales está preparada, pero aún no tiene cursos. Todos los cursos actuales son en línea; seleccionar Presencial muestra el estado sin resultados.
- **Nivel:** los cursos marcados como "todos" aparecen también al elegir Inicial o Intermedio. "Todos los niveles" selecciona específicamente cursos con esa cobertura; la opción "Nivel" elimina el filtro.
- **Instructores:** `src/data/instructors.js`. Nombres, especialidades y fotografías son perfiles ilustrativos; sustituir por el equipo real.
- **Blog:** `src/data/blogPosts.js`, con contenido editorial de muestra.
- **Identidad y medidas:** `src/styles/variables.css` centraliza colores, contenedor, bordes y sombras.
- **Logo:** `src/components/Logo.jsx` contiene una aproximación tipográfica y gráfica. Sustituir por el logo oficial cuando esté disponible.

El banner entregado es horizontal (2172 × 724). En móvil se muestra un recorte mediante CSS que prioriza el texto, sin deformar ni editar el PNG. Para reproducir también la persona del hero móvil de la referencia, se puede incorporar un banner vertical definitivo mediante `<picture>` en `Hero.jsx`.

## Segunda fase

No se implementaron login, registro, pagos, carrito, panel de alumno, backend ni base de datos. La separación de datos, componentes y formulario permite conectar servicios reales más adelante, sin que esta versión incluya conexiones simuladas ni promesas de entrega de mensajes.

Antes de usar el sitio comercialmente, sustituir las fotos provisionales por imágenes propias o con licencia confirmada, y validar precios, beneficios y equipo docente.
