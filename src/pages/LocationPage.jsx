import { MapPin, ExternalLink } from "lucide-react";
import { Link } from "react-router-dom";
import { site, contactMessages } from "../data/site";
import { roomPhotos } from "../data/spaces";
import WhatsAppButton from "../components/WhatsAppButton";
import SocialLinks from "../components/SocialLinks";

export default function LocationPage() {
  return (
    <section className="section container">
      <div className="page-heading">
        <p className="eyebrow">{site.brandName} · {site.city}</p>
        <h1>Dónde estamos</h1>
        <p>Conoce nuestro espacio para aprender, crear y compartir.</p>
      </div>
      <div className="about-section">
        <div className="info-panel location-info">
          <MapPin size={34} />
          <h2>{site.address}</h2>
          <p>
            {site.landmark}
            <br />
            {site.city}
          </p>
          <a
            className="button"
            href={site.mapsUrl}
            target="_blank"
            rel="noopener noreferrer"
          >
            Ver ubicación en Google Maps <ExternalLink size={16} />
          </a>
          <div className="location-contact">
            <WhatsAppButton message={contactMessages.visit}>Consultar por WhatsApp</WhatsAppButton>
          </div>
          <SocialLinks message={contactMessages.visit} />
        </div>
        <div>
          <img
            className="room-photo"
            src={roomPhotos[2].src}
            alt={roomPhotos[2].alt}
          />
          <Link className="text-link" to="/facilitadores">
            Conoce nuestra sala y las opciones de alianza →
          </Link>
        </div>
      </div>
    </section>
  );
}
