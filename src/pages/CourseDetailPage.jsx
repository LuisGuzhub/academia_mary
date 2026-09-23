import { site, contactMessages } from "../data/site";
import { Link, useParams } from "react-router-dom";
import { ArrowLeft, BriefcaseBusiness, CheckCircle2 } from "lucide-react";
import { courses } from "../data/courses";
import { categories } from "../data/categories";
import { formatPrice } from "../data/catalog";
import WhatsAppButton from "../components/WhatsAppButton";
import NotFoundPage from "./NotFoundPage";
import SocialLinks from "../components/SocialLinks";

function DetailList({ title, items }) {
  if (!items?.length) return null;
  return (
    <section className="detail-block">
      <h2>{title}</h2>
      <ul className="check-list">
        {items.map((item) => (
          <li key={item}>
            <CheckCircle2 size={18} aria-hidden="true" />
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </section>
  );
}
export default function CourseDetailPage() {
  const { slug } = useParams();
  const course = courses.find((item) => item.slug === slug);
  if (!course) return <NotFoundPage course />;
  return (
    <section className="section container">
      <Link className="text-link back-link" to="/cursos">
        <ArrowLeft size={17} /> Todos los cursos
      </Link>
      <div className="course-detail-layout">
        <div className="detail-copy">
          <p className="eyebrow">
            {categories.find((item) => item.id === course.category)?.name}
          </p>
          <h1>{course.title}</h1>
          <p className="detail-intro">{course.shortDescription}</p>
          {course.description && <p>{course.description}</p>}
          <div className="detail-facts">
            <span>
              {course.modality === "presencial"
                ? "Modalidad presencial"
                : "Consultar modalidad"}
            </span>
            {course.level === "inicial" && <span>Nivel inicial</span>}
          </div>
          {course.instructor && (
            <p>
              En colaboración con{" "}
              <Link className="text-link" to="/instructores">
                {course.instructor}
              </Link>
            </p>
          )}
          <DetailList title="¿Qué incluye?" items={course.includes} />
          <DetailList title="¿Qué aprenderás?" items={course.topics} />
          {course.audience && (
            <section className="detail-block">
              <h2>¿Para quién es?</h2>
              <p>{course.audience}</p>
            </section>
          )}
          {course.certification && (
            <section className="detail-block">
              <h2>Certificación</h2>
              <p>{course.certification}</p>
            </section>
          )}
          <div className="info-panel">
            <h2>{formatPrice(course.price)}</h2>
            <p>
              Escríbenos para conocer las próximas fechas, horarios y
              disponibilidad.
            </p>
            <WhatsAppButton
              message={contactMessages.course(course.title)}
            />
            <SocialLinks includeInstagram={false} message={contactMessages.course(course.title)} />
          </div>
        </div>
        <aside
          className="detail-artwork"
          aria-label="Información promocional del curso"
        >
          {course.image ? (
            <>
              <a
                href={course.image}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`Ampliar flyer de ${course.title}`}
              >
                <img src={course.image} alt={course.imageAlt} />
              </a>
              <p>Pieza promocional de {site.brandName} · Haz clic para ampliar</p>
            </>
          ) : (
            <div className="course-placeholder">
              <BriefcaseBusiness size={64} />
              <p>Formaliza tu Negocio</p>
            </div>
          )}
        </aside>
      </div>
    </section>
  );
}
