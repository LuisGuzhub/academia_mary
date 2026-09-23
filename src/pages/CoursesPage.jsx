import { useSearchParams } from "react-router-dom";
import SearchBar from "../components/SearchBar";
import Categories from "../components/Categories";
import CourseGrid from "../components/CourseGrid";
import { courses } from "../data/courses";
import {
  emptyFilters,
  filterCourses,
  filtersFromParams,
  filtersToParams,
} from "../data/catalog";

export default function CoursesPage() {
  const [params, setParams] = useSearchParams();
  const filters = filtersFromParams(params);
  const setFilters = (update) =>
    setParams(
      (current) =>
        filtersToParams(
          typeof update === "function"
            ? update(filtersFromParams(current))
            : update,
        ),
      { replace: true },
    );
  const reset = () => setParams({});
  const visibleCourses = filterCourses(courses, filters);
  return (
    <section
      className="section container courses-page"
      aria-labelledby="catalog-title"
    >
      <div className="page-heading">
        <p className="eyebrow">APRENDE. CREA. EMPRENDE.</p>
        <h1 id="catalog-title">Nuestros cursos</h1>
        <p>
          Aprende nuevas habilidades, desarrolla tu talento y crea nuevas
          oportunidades.
        </p>
      </div>
      <SearchBar
        filters={filters}
        setFilters={setFilters}
        onSearch={() => document.getElementById("course-results").focus()}
      />
      <Categories
        selected={filters.category}
        onSelect={(category) =>
          setParams(
            filtersToParams(category ? { ...filters, category } : emptyFilters),
          )
        }
      />
      <div className="catalog-heading">
        <h2 id="course-results" tabIndex={-1}>
          {visibleCourses.length}{" "}
          {visibleCourses.length === 1
            ? "curso disponible"
            : "cursos disponibles"}
        </h2>
        {Object.values(filters).some(Boolean) && (
          <button className="text-link" onClick={reset}>
            Limpiar filtros
          </button>
        )}
      </div>
      <CourseGrid courses={visibleCourses} onReset={reset} category={filters.category} />
    </section>
  );
}
