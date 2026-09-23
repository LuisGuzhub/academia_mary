import { site } from "../data/site";
import SocialLinks from "../components/SocialLinks";
import { Link } from "react-router-dom";
import { ArrowUpRight, GraduationCap } from "lucide-react";

export default function About() {
  return (
    <section id="nosotros" className="section about-section container">
      <div className="about-emblem">
        <GraduationCap size={72} strokeWidth={1} />
        <span>APRENDE. CREA. EMPRENDE.</span>
        <strong>
          Tu próximo paso
          <br />
          empieza contigo.
        </strong>
        <span className="emblem-bottom">{site.brandName}</span>
      </div>
      <div className="about-copy">
        <p className="eyebrow">{site.institutionName}</p>
        <h1 className="section-title">
          Formación hoy,
          <br />
          <span>oportunidades mañana.</span>
        </h1>
        <p>
          Creemos en el poder de aprender algo nuevo. Por eso acercamos
          conocimientos prácticos a personas que quieren crecer, crear y dar
          forma a sus propias oportunidades.
        </p>
        <p>
          Nuestra propuesta combina explicaciones claras, proyectos paso a paso
          y una metodología enfocada en aprender haciendo. Queremos que
          conviertas cada lección en una habilidad para tu vida.
        </p>
        <Link className="text-link" to="/cursos">
          Encuentra tu próximo aprendizaje <ArrowUpRight size={19} />
        </Link>
        <SocialLinks />
      </div>
    </section>
  );
}
