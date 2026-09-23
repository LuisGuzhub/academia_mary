import test from "node:test";
import assert from "node:assert/strict";
import {
  emptyFilters,
  filterCourses,
  formatPrice,
  filtersFromParams,
  filtersToParams,
} from "./catalog.js";
import { site, whatsappUrl } from "./site.js";

const sample = [
  {
    title: "Escuela de Nómina Paso a Paso",
    category: "nominas",
    modality: "online",
    level: "inicial",
  },
  {
    title: "Taller de Alambrismo Creativo",
    category: "alambrismo",
    modality: "online",
    level: "todos",
  },
];
test("encuentra títulos sin distinguir tildes, mayúsculas ni espacios externos", () => {
  assert.equal(
    filterCourses(sample, { ...emptyFilters, query: " NOMINA " }).length,
    1,
  );
});
test("combina categoría, modalidad y nivel", () => {
  assert.equal(
    filterCourses(sample, {
      ...emptyFilters,
      category: "nominas",
      modality: "online",
      level: "inicial",
    }).length,
    1,
  );
  assert.equal(
    filterCourses(sample, {
      ...emptyFilters,
      category: "nominas",
      modality: "presencial",
    }).length,
    0,
  );
});
test("un curso para todos los niveles aparece para estudiantes intermedios", () => {
  assert.equal(
    filterCourses(sample, { ...emptyFilters, level: "intermedio" })[0].category,
    "alambrismo",
  );
});
test("restablecer filtros recupera el catálogo completo", () => {
  assert.equal(filterCourses(sample, emptyFilters).length, 2);
});
test("los precios usan dólares y dos decimales", () => {
  assert.equal(formatPrice(74.9), "$74.90");
});

test("no presenta precios inventados cuando no hay un importe confirmado", () => {
  for (const value of [undefined, null, NaN, "89.90"])
    assert.equal(formatPrice(value), "Consultar precio");
  assert.equal(formatPrice(0), "$0.00");
});

test("los filtros sobreviven a compartir y recargar la dirección del catálogo", () => {
  const filters = {
    query: "Nómina & beneficios",
    category: "nomina",
    modality: "presencial",
    level: "inicial",
  };
  assert.deepEqual(
    filtersFromParams(new URLSearchParams(filtersToParams(filters).toString())),
    filters,
  );
  assert.deepEqual(filtersFromParams(new URLSearchParams()), emptyFilters);
  assert.equal(filtersToParams(emptyFilters).toString(), "");
});

test("un curso sin modalidad o nivel confirmados no se incluye en esos filtros", () => {
  const course = [
    { title: "Formaliza tu Negocio", category: "emprendimiento" },
  ];
  assert.equal(filterCourses(course, emptyFilters).length, 1);
  assert.equal(
    filterCourses(course, { ...emptyFilters, modality: "presencial" }).length,
    0,
  );
  assert.equal(
    filterCourses(course, { ...emptyFilters, level: "inicial" }).length,
    0,
  );
});

test("WhatsApp conserva el mensaje del curso y utiliza el contacto centralizado", () => {
  const message =
    "Hola, quiero información sobre Escuela de Nómina & horarios.";
  const url = new URL(whatsappUrl(message));
  assert.equal(url.hostname, "wa.me");
  assert.equal(url.pathname, `/${site.whatsapp}`);
  assert.equal(url.searchParams.get("text"), message);
});
