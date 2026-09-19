import Logo from "./Logo";

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
        <a href="#inicio">Volver al inicio ↑</a>
      </div>
      <div className="container footer-bottom">
        <span>© {new Date().getFullYear()} CGL Capacitaciones.</span>
        <span>Aprende · Crea · Emprende</span>
      </div>
    </footer>
  );
}
