import { useRef, useState } from "react";
import { ArrowUpRight, Menu, Search, X } from "lucide-react";
import { Link, NavLink } from "react-router-dom";
import { navigation, secondaryNavigation } from "../data/site";
import Logo from "./Logo";

export default function Header() {
  const [open, setOpen] = useState(false);
  const toggle = useRef(null);
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
          {[...navigation, ...secondaryNavigation].map(([path, title]) => (
            <NavLink
              key={path}
              to={path}
              end={path === "/"}
              className={({ isActive }) =>
                [
                  isActive ? "active" : "",
                  secondaryNavigation.some(([item]) => item === path)
                    ? "mobile-nav-link"
                    : "",
                ]
                  .filter(Boolean)
                  .join(" ")
              }
              onClick={() => setOpen(false)}
            >
              {title}
            </NavLink>
          ))}
        </nav>
        <div className="header-actions">
          <Link to="/cursos" className="icon-button" aria-label="Buscar cursos">
            <Search size={21} />
          </Link>
          <Link to="/cursos" className="button button-small">
            Ver cursos <ArrowUpRight size={17} />
          </Link>
        </div>
      </div>
    </header>
  );
}
