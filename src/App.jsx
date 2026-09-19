import { useState } from "react";
import { ArrowRight, SearchX } from "lucide-react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import SearchBar from "./components/SearchBar";
import Categories from "./components/Categories";
import CourseCard from "./components/CourseCard";
import Benefits from "./components/Benefits";
import CTA from "./components/CTA";
import Footer from "./components/Footer";
import About from "./sections/About";
import Instructors from "./sections/Instructors";
import Blog from "./sections/Blog";
import Contact from "./sections/Contact";
import { courses } from "./data/courses";
import { emptyFilters, filterCourses } from "./data/catalog";

export default function App() {
  const [filters, setFilters] = useState(emptyFilters);
  const [message, setMessage] = useState("");
  const visibleCourses = filterCourses(courses, filters);
  const filtered = Object.values(filters).some(Boolean);
  const reset = () => setFilters({ ...emptyFilters });
  return (
    <>
      <a className="skip-link" href="#contenido">
        Saltar al contenido
      </a>
      <div id="inicio">
        <Header />
        <main id="contenido">
          <Hero />
          <section
            id="cursos"
            className="catalog container"
            aria-labelledby="courses-heading"
          >
            <SearchBar
              filters={filters}
              setFilters={setFilters}
              onSearch={() =>
                document
                  .getElementById("courses-heading")
                  .scrollIntoView({
                    behavior: window.matchMedia(
                      "(prefers-reduced-motion: reduce)",
                    ).matches
                      ? "instant"
                      : "smooth",
                    block: "start",
                  })
              }
            />
            <Categories
              selected={filters.category}
              onSelect={(category) =>
                category
                  ? setFilters((current) => ({ ...current, category }))
                  : reset()
              }
            />
            <div className="catalog-heading">
              <div>
                <p className="eyebrow">ELIGE LO QUE TE MUEVE</p>
                <h2 id="courses-heading">
                  {filtered
                    ? "Encuentra tu próximo curso"
                    : "Cursos destacados"}
                </h2>
              </div>
              <button type="button" className="text-link" onClick={reset}>
                Ver todos los cursos <ArrowRight size={17} />
              </button>
            </div>
            <p className="sr-only" role="status" aria-live="polite">
              {visibleCourses.length} cursos encontrados
            </p>
            {visibleCourses.length ? (
              <div className="courses-grid">
                {visibleCourses.map((course) => (
                  <CourseCard
                    key={course.id}
                    course={course}
                    onEnquire={(title) =>
                      setMessage(
                        `Hola, me gustaría recibir información sobre el curso ${title}.`,
                      )
                    }
                  />
                ))}
              </div>
            ) : (
              <div className="empty-state">
                <SearchX size={35} />
                <h3>No encontramos cursos con estos filtros</h3>
                <p>Prueba con otra búsqueda o explora el catálogo completo.</p>
                <button className="button" onClick={reset}>
                  Ver todos los cursos
                </button>
              </div>
            )}
            <Benefits />
          </section>
          <CTA />
          <About />
          <Instructors />
          <Blog />
          <Contact message={message} setMessage={setMessage} />
        </main>
        <Footer />
      </div>
    </>
  );
}
