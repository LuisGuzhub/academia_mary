import { contactMessages } from "../data/site";
import {
  Megaphone,
  Presentation,
  Handshake,
  Users,
  TrendingUp,
  CheckCircle2,
} from "lucide-react";
import { Link } from "react-router-dom";
import WhatsAppButton from "../components/WhatsAppButton";
import { roomPhotos } from "../data/spaces";
import flyer from "../assets/images/spaces/facilitadores-alianzas-cgi.jpeg";

const advantages = [
  [
    Megaphone,
    "Más visibilidad",
    "Promocionamos tus talleres en nuestras redes y canales.",
  ],
  [
    Presentation,
    "Espacios cómodos",
    "Sala equipada, moderna y lista para ofrecer una mejor experiencia.",
  ],
  [
    Handshake,
    "Alianza flexible",
    "Acuerdos claros y adaptados a las necesidades de cada propuesta.",
  ],
  [
    Users,
    "Crecemos juntos",
    "Trabajamos en equipo para ampliar nuestras comunidades.",
  ],
  [
    TrendingUp,
    "Impacto positivo",
    "Ayuda a más personas a aprender y desarrollarse.",
  ],
];
const amenities = [
  "Proyector y pantalla",
  "Wi-Fi de alta velocidad",
  "Mesas y sillas cómodas",
  "Aire acondicionado",
  "Área de break / coffee break",
];

export default function FacilitatorsPage() {
  return (
    <>
      <section className="section container about-section facilitator-intro">
        <div className="about-copy">
          <p className="eyebrow">FACILITADORES Y ALIANZAS</p>
          <h1>Buscamos facilitadores</h1>
          <p>
            Si tienes conocimiento, pasión por enseñar y deseas compartir tus
            habilidades, esta es tu oportunidad.
          </p>
          <WhatsAppButton message={contactMessages.facilitator}>
            Quiero ser facilitador
          </WhatsAppButton>
          <a
            className="text-link"
            href={flyer}
            target="_blank"
            rel="noopener noreferrer"
          >
            Ver convocatoria
          </a>
        </div>
        <img
          className="room-photo"
          src={roomPhotos[0].src}
          alt={roomPhotos[0].alt}
        />
      </section>
      <section className="section soft-section">
        <div className="container">
          <div className="section-heading">
            <h2>¿Por qué aliarte con nosotros?</h2>
          </div>
          <div className="alliance-grid">
            {advantages.map(([Icon, title, copy]) => (
              <article className="blog-card" key={title}>
                <Icon className="icon-accent" size={30} aria-hidden="true" />
                <h3>{title}</h3>
                <p>{copy}</p>
              </article>
            ))}
          </div>
        </div>
      </section>
      <section className="section container about-section">
        <div className="about-emblem">
          <Handshake size={60} strokeWidth={1.2} />
          <strong>Tu conocimiento puede ser la inspiración de otros.</strong>
        </div>
        <div>
          <h2>¿A quién buscamos?</h2>
          <ul className="check-list">
            {[
              "Profesionales y expertos en diversas áreas.",
              "Emprendedores y especialistas con propuestas de valor.",
              "Personas dinámicas, responsables y comprometidas con la enseñanza.",
            ].map((item) => (
              <li key={item}>
                <CheckCircle2 size={19} />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>
      <section className="section soft-section">
        <div className="container">
          <div className="section-heading">
            <div>
              <p className="eyebrow">
                ESPACIOS QUE EDUCAN, ALIANZAS QUE TRANSFORMAN
              </p>
              <h2>Nuestra sala de capacitación</h2>
            </div>
            <Link className="text-link" to="/ubicacion">
              Dónde estamos →
            </Link>
          </div>
          <div className="room-gallery">
            {roomPhotos.map((photo) => (
              <a
                key={photo.src}
                href={photo.src}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`Ampliar: ${photo.alt}`}
              >
                <img
                  className="room-photo"
                  src={photo.src}
                  alt={photo.alt}
                  loading="lazy"
                />
              </a>
            ))}
          </div>
          <ul className="check-list amenities">
            {amenities.map((item) => (
              <li key={item}>
                <CheckCircle2 size={18} />
                <span>{item}</span>
              </li>
            ))}
          </ul>
          <div className="room-cta">
            <p>
              Un espacio para tus talleres, capacitaciones y nuevas alianzas.
            </p>
            <WhatsAppButton message={contactMessages.room}>
              Consultar disponibilidad
            </WhatsAppButton>
          </div>
        </div>
      </section>
    </>
  );
}
