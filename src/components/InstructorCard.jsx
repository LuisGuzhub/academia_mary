import { UserRound } from "lucide-react";
import { Link } from "react-router-dom";
export default function InstructorCard({ instructor }) {
  return (
    <article className="instructor-card">
      <div className="instructor-avatar" aria-hidden="true">
        <UserRound size={36} />
      </div>
      <div>
        <p className="eyebrow">{instructor.specialty}</p>
        <h3>{instructor.name}</h3>
        <p>{instructor.description}</p>
        <Link className="text-link" to={`/cursos/${instructor.courseSlug}`}>
          Ver taller
        </Link>
      </div>
    </article>
  );
}
