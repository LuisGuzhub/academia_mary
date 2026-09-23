import { site, whatsappUrl } from "./site.js";

export function validateContact(values) {
  const errors = {};
  if (!values.name?.trim()) errors.name = "Ingresa tu nombre.";
  if (!values.email?.trim()) errors.email = "Ingresa tu correo electrónico.";
  else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email.trim()))
    errors.email =
      "Ingresa un correo electrónico válido, por ejemplo: nombre@correo.com.";
  if (!values.message?.trim())
    errors.message = "Escribe el mensaje que deseas consultar.";
  return errors;
}

export function contactFormUrl(values) {
  const message = [
    `Hola, ${site.brandName}.`,
    "Me gustaría solicitar información.",
    `Nombre: ${values.name.trim()}`,
    `Correo electrónico: ${values.email.trim()}`,
    `Teléfono: ${values.phone?.trim() || "No proporcionado"}`,
    `Mensaje: ${values.message.trim()}`,
    "Quedo atento a su respuesta. ¡Gracias!",
  ].join("\n\n");
  return whatsappUrl(message, site.contactFormRecipient);
}
