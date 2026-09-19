import { instructors } from "../data/instructors";
import InstructorCard from "../components/InstructorCard";

export default function Instructors() {
  return (
    <section id="instructores" className="section soft-section">
      <div className="container">
        <div className="section-heading">
          <div>
            <p className="eyebrow">APRENDE CON ACOMPAÑAMIENTO</p>
            <h2>Personas que comparten lo que saben</h2>
          </div>
          <p className="section-note">
            Perfiles ilustrativos del equipo docente.
          </p>
        </div>
        <div className="three-column">
          {instructors.map((instructor) => (
            <InstructorCard key={instructor.name} instructor={instructor} />
          ))}
        </div>
      </div>
    </section>
  );
}
