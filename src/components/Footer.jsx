import Logo from "./Logo";
import { Link } from "react-router-dom";
import {
  navigation,
  secondaryNavigation,
  site,
} from "../data/site";
import SocialLinks from "./SocialLinks";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-top">
        <Logo />
        <p>
          Conocimiento. Habilidades. Oportunidades.
          <br />
          <strong>Un mejor futuro empieza hoy.</strong>
        </p>
        <Link to="/">Volver al inicio ↑</Link>
      </div>
      <div className="container footer-info">
        <nav aria-label="Navegación del pie de página">
          {[...navigation, ...secondaryNavigation].map(([path, label]) => (
            <Link key={path} to={path}>
              {label}
            </Link>
          ))}
        </nav>
        <address>
          <p>
            {site.address} · {site.city}
          </p>
          <SocialLinks />
        </address>
      </div>
      <div className="container footer-bottom">
        <span>© {new Date().getFullYear()} {site.brandName}.</span>
        <span>Aprende · Crea · Emprende</span>
      </div>
    </footer>
  );
}
