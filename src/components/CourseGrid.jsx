import { SearchX } from "lucide-react";
import CourseCard from "./CourseCard";
import { categories } from "../data/categories";
import { courses as catalog } from "../data/courses";

export default function CourseGrid({ courses, onReset, category }) {
  const upcomingCategory = categories.find(
    (item) =>
      item.id &&
      item.id === category &&
      !catalog.some((course) => course.category === item.id),
  );
  return (
    <>
      <p className="sr-only" role="status" aria-live="polite">
        {courses.length} cursos encontrados
      </p>
      {courses.length ? (
        <div className="courses-grid">
          {courses.map((course) => (
            <CourseCard key={course.id} course={course} />
          ))}
        </div>
      ) : (
        <div className="empty-state">
          <SearchX size={35} />
          <h3>
            {upcomingCategory
              ? `Próximamente en ${upcomingCategory.name}`
              : "No encontramos cursos con estos filtros"}
          </h3>
          <p>
            {upcomingCategory
              ? `Próximamente incorporaremos nuevas capacitaciones en ${upcomingCategory.name}.`
              : "Prueba con otra búsqueda o explora el catálogo completo."}
          </p>
          <button className="button" onClick={onReset}>
            Ver todos los cursos
          </button>
        </div>
      )}
    </>
  );
}
