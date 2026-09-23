import test from "node:test";
import assert from "node:assert/strict";
import { validateContact, contactFormUrl } from "./contact.js";
import { site, whatsappUrl } from "./site.js";
import { categories, sortCategories } from "./categories.js";

test("valida obligatorios incluso si solo contienen espacios", () => {
  assert.deepEqual(
    Object.keys(validateContact({ name: " ", email: "", message: "\n" })),
    ["name", "email", "message"],
  );
});

test("valida correo y acepta el teléfono opcional", () => {
  const fields = {
    name: "María",
    email: "maria+curso@example.com",
    message: "Información",
  };
  assert.deepEqual(validateContact(fields), {});
  for (const email of [
    "sin-arroba.com",
    "a@",
    "a@correo",
    "a b@correo.com",
    "a@@correo.com",
  ]) {
    assert.ok(validateContact({ ...fields, email }).email);
  }
});

test("el mensaje conserva datos, saltos y caracteres especiales sin alterar la URL", () => {
  const values = {
    name: " María & José ",
    email: "consulta+curso@example.com",
    phone: " 0987654321 ",
    message: "Quiero nómina & velas.\n¿Horarios? #1 + 2 = 3",
  };
  const url = new URL(contactFormUrl(values));
  assert.equal(url.origin, "https://wa.me");
  assert.equal(url.pathname, `/${site.contactFormRecipient}`);
  assert.equal(url.hash, "");
  assert.equal([...url.searchParams].length, 1);
  assert.equal(
    url.searchParams.get("text"),
    `Hola, ${site.brandName}.\n\nMe gustaría solicitar información.\n\nNombre: María & José\n\nCorreo electrónico: consulta+curso@example.com\n\nTeléfono: 0987654321\n\nMensaje: ${values.message}\n\nQuedo atento a su respuesta. ¡Gracias!`,
  );
});

test("sin teléfono indica No proporcionado y permite cambiar destinatario desde configuración", () => {
  const original = site.contactFormRecipient;
  try {
    site.contactFormRecipient = site.whatsappContacts[1].number;
    const url = new URL(
      contactFormUrl({
        name: "Ana",
        email: "ana@example.com",
        phone: " ",
        message: "Información",
      }),
    );
    assert.equal(url.pathname, `/${site.whatsappContacts[1].number}`);
    assert.match(url.searchParams.get("text"), /Teléfono: No proporcionado/);
  } finally {
    site.contactFormRecipient = original;
  }
});

test("ambos contactos conservan su destinatario y el contexto del mensaje", () => {
  assert.deepEqual(
    site.whatsappContacts.map((contact) => contact.number),
    ["593985161076", "593989888985"],
  );
  for (const contact of site.whatsappContacts) {
    const url = new URL(whatsappUrl("Consulta de inscripción", contact.number));
    assert.equal(url.pathname, `/${contact.number}`);
    assert.equal(url.searchParams.get("text"), "Consulta de inscripción");
  }
  assert.equal(site.domain, "cgicapacitaciones.com");
});

test("ordena en español sin mutar los datos y mantiene Todos al final", () => {
  const items = [
    { id: "", name: "Todos" },
    { id: "z", name: "Zeta" },
    { id: "a", name: "Árbol" },
    { id: "n", name: "Ñandú" },
  ];
  const original = structuredClone(items);
  assert.deepEqual(
    sortCategories(items).map((item) => item.name),
    ["Árbol", "Ñandú", "Zeta", "Todos"],
  );
  assert.deepEqual(items, original);
  assert.equal(categories.at(-1).name, "Todos los cursos");
  assert.deepEqual(
    categories.filter((item) => item.id).map((item) => item.name),
    [
      "Accesorios y Alambrismo",
      "Cursos Digitales",
      "Decoración con Globos",
      "Electricidad",
      "Emprendimiento",
      "Maquillaje",
      "Marketing Digital",
      "Nóminas",
      "Seguridad y Salud Ocupacional",
      "Velas Artesanales",
    ],
  );
});
