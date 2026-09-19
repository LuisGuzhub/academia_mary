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
export const formatPrice = (price) => `$${price.toFixed(2)}`;
