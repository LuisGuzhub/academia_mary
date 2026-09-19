import { ArrowRight } from "lucide-react";
import banner from "../assets/images/banner.png";

export default function Hero() {
  return (
    <section className="hero" aria-labelledby="hero-title">
      <h1 id="hero-title" className="sr-only">
        Tus habilidades también crean grandes historias
      </h1>
      <div className="hero-frame">
        <img
          className="hero-image"
          src={banner}
          width="2172"
          height="724"
          fetchPriority="high"
          alt="Cursos prácticos, con expertos, para que aprendas, emprendas y transformes tu futuro. Crea, aprende, emprende. Formación real para un futuro extraordinario."
        />
        <a className="button hero-button" href="#cursos">
          Explorar cursos <ArrowRight size={19} />
        </a>
      </div>
    </section>
  );
}
