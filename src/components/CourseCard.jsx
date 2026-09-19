import {
  ArrowUpRight,
  BookOpen,
  ChartNoAxesColumnIncreasing,
  Star,
} from "lucide-react";
import { formatPrice } from "../data/catalog";

export default function CourseCard({ course, onEnquire }) {
  return (
    <article className="course-card">
      <div className={`course-image image-${course.id}`}>
        <img
          src={course.image}
          alt={course.imageAlt}
          loading="lazy"
          width="400"
          height="250"
        />
        {course.badge && (
          <span
            className={`course-badge ${course.badge === "Nuevo" ? "badge-new" : ""}`}
          >
            {course.badge}
          </span>
        )}
      </div>
      <div className="course-content">
        <span className="course-format">CURSO EN LÍNEA</span>
        <h3>{course.title}</h3>
        <div className="course-meta">
          <span>
            <BookOpen size={13} />
            {course.lessons} clases
          </span>
          <span>
            <ChartNoAxesColumnIncreasing size={13} />
            {course.level === "todos" ? "Todos los niveles" : "Nivel inicial"}
          </span>
        </div>
        <div className="rating">
          <span className="stars" aria-hidden="true">
            {Array.from({ length: 5 }, (_, i) => (
              <Star key={i} size={12} fill="currentColor" />
            ))}
          </span>
          <strong>{course.rating.toFixed(1)}</strong>
          <span>({course.reviews})</span>
          <span className="sr-only">
            Valoración de {course.rating} sobre 5, {course.reviews} valoraciones
          </span>
        </div>
        <div className="course-bottom">
          <span className="price">{formatPrice(course.price)}</span>
          <a
            href="#contacto"
            className="course-link"
            aria-label={`Consultar sobre ${course.title}`}
            onClick={() => onEnquire(course.title)}
          >
            <ArrowUpRight size={20} />
          </a>
        </div>
      </div>
    </article>
  );
}
