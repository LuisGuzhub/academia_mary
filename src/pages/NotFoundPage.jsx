import { site } from "../data/site";
import { Link } from "react-router-dom";
export default function NotFoundPage({ course = false }) {
  return (
    <section className="section container">
      <div className="empty-state">
        <p className="eyebrow">{site.brandName}</p>
        <h1>{course ? "Curso no encontrado" : "Página no encontrada"}</h1>
        <p>
          {course
            ? "Este curso no está disponible en el catálogo."
            : "La dirección que buscas no existe."}
        </p>
        <Link className="button" to="/cursos">
          Ver todos los cursos
        </Link>
      </div>
    </section>
  );
}
