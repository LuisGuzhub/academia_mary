import { useEffect, useRef, useState } from "react";
import { ArrowUpRight, Menu, Search, X } from "lucide-react";
import Logo from "./Logo";

const links = [
  ["inicio", "Inicio"],
  ["cursos", "Cursos"],
  ["nosotros", "Nosotros"],
  ["instructores", "Instructores"],
  ["blog", "Blog"],
  ["contacto", "Contacto"],
];

export default function Header() {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("inicio");
  const toggle = useRef(null);
  useEffect(() => {
    const updateActive = () => {
      const threshold =
        document.querySelector(".site-header").offsetHeight + 60;
      const current = [...links]
        .reverse()
        .find(
          ([id]) =>
            document.getElementById(id)?.getBoundingClientRect().top <=
            threshold,
        );
      setActive(current?.[0] ?? "inicio");
    };
    updateActive();
    window.addEventListener("scroll", updateActive, { passive: true });
    window.addEventListener("resize", updateActive);
    return () => {
      window.removeEventListener("scroll", updateActive);
      window.removeEventListener("resize", updateActive);
    };
  }, []);
  function closeOnEscape(event) {
    if (event.key === "Escape") {
      setOpen(false);
      toggle.current?.focus();
    }
  }
  return (
    <header className="site-header" onKeyDown={closeOnEscape}>
      <div className="container header-inner">
        <Logo />
        <button
          ref={toggle}
          className="icon-button menu-toggle"
          aria-label={open ? "Cerrar menú" : "Abrir menú"}
          aria-expanded={open}
          aria-controls="main-navigation"
          onClick={() => setOpen(!open)}
        >
          {open ? <X /> : <Menu />}
        </button>
        <nav
          id="main-navigation"
          className={`main-nav ${open ? "is-open" : ""}`}
          aria-label="Navegación principal"
        >
          {links.map(([id, title]) => (
            <a
              key={id}
              href={`#${id}`}
              className={active === id ? "active" : ""}
              aria-current={active === id ? "location" : undefined}
              onClick={() => {
                setActive(id);
                setOpen(false);
              }}
            >
              {title}
            </a>
          ))}
        </nav>
        <div className="header-actions">
          <a
            href="#buscador"
            className="icon-button"
            aria-label="Buscar cursos"
          >
            <Search size={21} />
          </a>
          <a href="#cursos" className="button button-small">
            Ver cursos <ArrowUpRight size={17} />
          </a>
        </div>
      </div>
    </header>
  );
}
