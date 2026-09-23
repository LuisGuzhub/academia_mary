import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import Hero from "../components/Hero";
import SearchBar from "../components/SearchBar";
import Categories from "../components/Categories";
import CourseGrid from "../components/CourseGrid";
import Benefits from "../components/Benefits";
import CTA from "../components/CTA";
import { courses } from "../data/courses";
import { emptyFilters, filterCourses, filtersToParams } from "../data/catalog";

export default function HomePage() {
  const [filters, setFilters] = useState(emptyFilters);
  const navigate = useNavigate();
  const filtered = Object.values(filters).some(Boolean);
  const visibleCourses = filterCourses(
    filtered ? courses : courses.filter((course) => course.featured),
    filters,
  );
  return (
    <>
      <Hero />
      <section
        id="cursos"
        className="catalog container"
        aria-labelledby="courses-heading"
      >
        <SearchBar
          filters={filters}
          setFilters={setFilters}
          onSearch={() => navigate(`/cursos?${filtersToParams(filters)}`)}
        />
        <Categories selected={filters.category} />
        <div className="catalog-heading">
          <div>
            <p className="eyebrow">ELIGE LO QUE TE MUEVE</p>
            <h2 id="courses-heading">
              {filtered ? "Encuentra tu próximo curso" : "Cursos destacados"}
            </h2>
          </div>
          <Link className="text-link" to="/cursos">
            Ver todos los cursos <ArrowRight size={17} />
          </Link>
        </div>
        <CourseGrid
          courses={visibleCourses}
          category={filters.category}
          onReset={() => navigate("/cursos")}
        />
        <Benefits />
      </section>
      <CTA />
    </>
  );
}
