export const emptyFilters = {
  query: "",
  category: "",
  modality: "",
  level: "",
};
export const normalize = (value) =>
  value
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase()
    .trim();
export const filterCourses = (courses, filters) =>
  courses.filter(
    (course) =>
      normalize(course.title).includes(normalize(filters.query)) &&
      (!filters.category || course.category === filters.category) &&
      (!filters.modality || course.modality === filters.modality) &&
      (!filters.level ||
        course.level === filters.level ||
        course.level === "todos"),
  );
export const formatPrice = (price) =>
  Number.isFinite(price) ? `$${price.toFixed(2)}` : "Consultar precio";

const filterParams = {
  query: "q",
  category: "categoria",
  modality: "modalidad",
  level: "nivel",
};

export function filtersFromParams(params) {
  return Object.fromEntries(
    Object.entries(filterParams).map(([key, param]) => [
      key,
      params.get(param) || "",
    ]),
  );
}

export function filtersToParams(filters) {
  const params = new URLSearchParams();
  for (const [key, param] of Object.entries(filterParams)) {
    if (filters[key]) params.set(param, filters[key]);
  }
  return params;
}
