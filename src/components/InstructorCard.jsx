export default function InstructorCard({ instructor }) {
  return (
    <article className="instructor-card">
      <img
        src={instructor.image}
        alt={`Retrato ilustrativo del perfil de ${instructor.name}`}
        loading="lazy"
        width="320"
        height="320"
      />
      <div>
        <p className="eyebrow">{instructor.specialty}</p>
        <h3>{instructor.name}</h3>
        <p>{instructor.description}</p>
      </div>
    </article>
  );
}
