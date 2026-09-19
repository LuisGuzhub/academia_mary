import test from "node:test";
import assert from "node:assert/strict";
import { emptyFilters, filterCourses, formatPrice } from "./catalog.js";

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
