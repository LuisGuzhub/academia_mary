const brandName = "CGL Capacitaciones";
const whatsappContacts = [
  { number: "593985161076", label: "098 516 1076" },
  { number: "593989888985", label: "+593 98 988 8985" },
];

export const site = {
  brandName,
  institutionName: "Centro de Gestión Integral — Soluciones 360°",
  description: `Aprende, crea y emprende con ${brandName}. Cursos prácticos de electricidad, decoración, alambrismo, velas y nóminas.`,
  domain: "cgicapacitaciones.com",
  whatsappContacts,
  whatsapp: whatsappContacts[0].number,
  phoneLabel: whatsappContacts[0].label,
  contactFormRecipient: whatsappContacts[0].number,
  instagram: "https://www.instagram.com/cglcapacitaciones/",
  instagramLabel: "@cglcapacitaciones",
  address: "Quisquis 712 y Av. Quito",
  landmark: 'Diagonal al "Lotus" Perfumería',
  city: "Guayaquil",
  mapsUrl: "https://maps.app.goo.gl/4wtntcQiTR9Z17qV9",
};

export const contactMessages = {
  general: `Hola, quiero información sobre ${site.brandName}.`,
  facilitator: `Hola, quiero ser facilitador y conocer las alianzas con ${site.brandName}.`,
  room: `Hola, quiero consultar la disponibilidad de la sala de capacitación de ${site.brandName}.`,
  visit: `Hola, quiero información para visitar ${site.brandName} en ${site.address}.`,
  course: (title) =>
    `Hola, ${site.brandName}. Quiero información sobre el ${title}.`,
};
export const whatsappUrl = (
  message = contactMessages.general,
  recipient = site.whatsapp,
) => `https://wa.me/${recipient}?text=${encodeURIComponent(message)}`;

export const navigation = [
  ["/", "Inicio"],
  ["/cursos", "Cursos"],
  ["/nosotros", "Nosotros"],
  ["/instructores", "Instructores"],
  ["/blog", "Blog"],
  ["/contacto", "Contacto"],
];
export const secondaryNavigation = [
  ["/facilitadores", "Facilitadores y alianzas"],
  ["/ubicacion", "Dónde estamos"],
];
