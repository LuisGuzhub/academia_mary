import { ArrowUpRight, BookOpen, BriefcaseBusiness } from "lucide-react";
import { Link } from "react-router-dom";
import { formatPrice } from "../data/catalog";
import { categories } from "../data/categories";

export default function CourseCard({ course }) {
  return (
    <article className="course-card">
      <Link
        to={`/cursos/${course.slug}`}
        className={`course-image image-${course.id}`}
        aria-label={`Ver imagen de ${course.title}`}
      >
        {course.image ? (
          <img
            src={course.image}
            alt={course.imageAlt}
            loading="lazy"
            width="1080"
            height="1350"
          />
        ) : (
          <div className="course-placeholder">
            <BriefcaseBusiness size={36} aria-hidden="true" />
            <span>Formaliza tu negocio</span>
          </div>
        )}
      </Link>
      <div className="course-content">
        <span className="course-format">
          {categories.find(({ id }) => id === course.category)?.name}
        </span>
        <h3>
          <Link to={`/cursos/${course.slug}`}>{course.title}</Link>
        </h3>
        <p className="course-description">{course.shortDescription}</p>
        <div className="course-meta">
          <span>
            <BookOpen size={13} />
            {course.modality === "presencial"
              ? "Presencial"
              : "Consultar modalidad"}
          </span>
          {course.level === "inicial" && <span>Nivel inicial</span>}
        </div>
        <div className="course-bottom">
          <span className="price price-consult">
            {formatPrice(course.price)}
          </span>
          <Link
            to={`/cursos/${course.slug}`}
            className="course-link"
            aria-label={`Ver curso: ${course.title}`}
          >
            Ver curso <ArrowUpRight size={16} />
          </Link>
        </div>
      </div>
    </article>
  );
}
