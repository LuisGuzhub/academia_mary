import { ArrowRight, Lightbulb } from "lucide-react";

export default function CTA() {
  return (
    <section className="cta">
      <div className="container cta-inner">
        <div>
          <p className="eyebrow">TU CONOCIMIENTO TAMBIÉN SUMA</p>
          <h2>Invierte en ti, transforma tu futuro</h2>
          <p>
            Accede a todos nuestros cursos y desarrolla habilidades que te
            acercan a tus metas.
          </p>
        </div>
        <a className="button" href="#cursos">
          Quiero empezar ahora <ArrowRight size={18} />
        </a>
        <div className="cta-note" aria-hidden="true">
          <Lightbulb size={49} strokeWidth={1.2} />
          <span>
            Pequeñas habilidades,
            <br />
            grandes oportunidades.
          </span>
        </div>
      </div>
    </section>
  );
}
