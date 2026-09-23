import { site } from "./site.js";
import electricity from "../assets/images/courses/electricidad-cgi.jpeg";
import balloons from "../assets/images/courses/decoracion-globos-cgi.jpeg";
import wire from "../assets/images/courses/alambrismo-cgi.jpeg";
import candles from "../assets/images/courses/velas-cgi.jpeg";
import payroll from "../assets/images/courses/nomina-cgi.jpeg";
import makeup from "../assets/images/courses/maquillaje-cgi.jpeg";

// Información de los flyers de CGL. Omitir datos que aún no estén confirmados.
export const courses = [
  {
    id: "electricidad",
    slug: "electricidad-basica",
    title: "Curso Básico de Electricidad",
    category: "electricidad",
    image: electricity,
    imageAlt: `Flyer del Curso Básico de Electricidad de ${site.brandName}`,
    shortDescription: "Aprende desde cero y desarrolla nuevas oportunidades.",
    modality: "presencial",
    level: "inicial",
    featured: true,
    includes: [
      "Materiales incluidos",
      "Formación teórico-práctica",
      "Asesoría para emprender",
      "Aulas equipadas y grupos reducidos",
    ],
    topics: [
      "Conceptos básicos de electricidad",
      "Tipos de corriente y voltaje",
      "Uso seguro de herramientas",
      "Instalaciones y cableado básico",
      "Solución de fallas comunes",
    ],
    certification: "Certificado de participación",
  },
  {
    id: "globos",
    slug: "decoracion-con-globos",
    title: "Curso Básico de Decoración con Globos",
    category: "globos",
    image: balloons,
    imageAlt:
      "Flyer de Decoración con Globos, en colaboración con Globos Cometa",
    shortDescription:
      "Aprende desde cero y convierte tu creatividad en ingresos.",
    modality: "presencial",
    level: "inicial",
    featured: true,
    includes: [
      "Materiales incluidos",
      "Prácticas 100% presenciales",
      "Guía digital con técnicas",
      "Asesoría para emprender",
      "Aulas equipadas, grupos reducidos y atención personalizada",
    ],
    audience: "Emprendedores, decoradores, amas de casa y público en general.",
  },
  {
    id: "alambrismo",
    slug: "alambrismo-basico",
    title: "Taller de Alambrismo Básico",
    category: "alambrismo",
    image: wire,
    imageAlt: "Flyer de Alambrismo Básico en colaboración con Michelle López",
    shortDescription:
      "Crea, aprende y emprende elaborando accesorios hechos a mano.",
    level: "inicial",
    featured: true,
    includes: [
      "Materiales incluidos",
      "Taller práctico",
      "Técnicas profesionales",
      "Asesoría para emprender",
    ],
    topics: ["Aretes de flor", "Aretes doble flor", "Argollas entorchadas"],
    audience: "No necesitas experiencia previa.",
    instructor: "Michelle López",
  },
  {
    id: "velas",
    slug: "velas-para-emprender",
    title: "Curso Básico de Velas para Emprender",
    category: "velas",
    image: candles,
    imageAlt: "Flyer de Velas para Emprender, en colaboración con CeraVel",
    shortDescription:
      "Aprende a elaborar velas y conviértete en creadora de momentos únicos.",
    level: "inicial",
    featured: true,
    includes: [
      "Materiales incluidos",
      "Clases prácticas",
      "Recetario digital",
      "Asesoría para emprender",
    ],
    certification: "Certificado de participación",
  },
  {
    id: "nomina",
    slug: "escuela-de-nomina",
    title: "Escuela de Nómina",
    category: "nomina",
    image: payroll,
    imageAlt: `Flyer del programa Escuela de Nómina de ${site.brandName}`,
    shortDescription:
      "Aprende a elaborar una nómina correctamente y desarrolla habilidades profesionales para organizaciones.",
    featured: true,
    includes: [
      "Práctica con acompañamiento de expertos",
      "Herramientas prácticas y casos reales",
    ],
    topics: [
      "Conceptos básicos y componentes de la nómina",
      "Cálculo de ingresos, descuentos y beneficios",
      "Aportes al IESS",
      "Fondos de reserva",
      "Impuestos",
      "Liquidación y prestaciones laborales",
    ],
  },
  {
    id: "maquillaje",
    slug: "maquillaje",
    title: "Curso de Maquillaje",
    category: "maquillaje",
    image: makeup,
    imageAlt: `Flyer del Curso de Maquillaje de ${site.brandName}`,
    shortDescription: "Realza tu belleza y potencia tu talento.",
    modality: "presencial",
    includes: [
      "Técnicas profesionales",
      "Práctica en modelos",
      "Kit de materiales incluido",
      "Aulas equipadas, grupos reducidos y atención personalizada",
    ],
    topics: [
      "Preparación de la piel",
      "Técnicas de corrección de rostro",
      "Tendencias y estilos actuales",
    ],
    certification: "Certificación al finalizar",
  },
  {
    id: "emprendimiento",
    slug: "formaliza-tu-negocio",
    title: "Formaliza tu Negocio",
    category: "emprendimiento",
    shortDescription:
      "Da el siguiente paso: organiza tu emprendimiento, crece con seguridad y formaliza tu negocio.",
    description:
      "Consulta con nuestro equipo para conocer los detalles y la disponibilidad de este programa.",
  },
];
