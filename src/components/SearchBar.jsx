import { Search } from "lucide-react";
import { categories } from "../data/categories";

export default function SearchBar({ filters, setFilters, onSearch }) {
  const change = (event) =>
    setFilters((current) => ({
      ...current,
      [event.target.name]: event.target.value,
    }));
  return (
    <form
      id="buscador"
      className="search-panel"
      role="search"
      aria-label="Buscar cursos"
      onSubmit={(event) => {
        event.preventDefault();
        onSearch();
      }}
    >
      <div className="search-field">
        <Search size={23} aria-hidden="true" />
        <label className="sr-only" htmlFor="course-search">
          ¿Qué quieres aprender hoy?
        </label>
        <input
          id="course-search"
          name="query"
          placeholder="¿Qué quieres aprender hoy?"
          value={filters.query}
          onChange={change}
        />
        <button className="button search-submit" type="submit" aria-label="Buscar">
          <span>Buscar</span>
          <Search size={20} aria-hidden="true" />
        </button>
      </div>
      <div className="search-filters">
        <label className="sr-only" htmlFor="category-filter">
          Categoría
        </label>
        <select
          id="category-filter"
          name="category"
          value={filters.category}
          onChange={change}
        >
          <option value="">Categoría</option>
          {categories
            .filter((item) => item.id)
            .map((item) => (
              <option key={item.id} value={item.id}>
                {item.name}
              </option>
            ))}
        </select>
        <label className="sr-only" htmlFor="modality-filter">
          Modalidad
        </label>
        <select
          id="modality-filter"
          name="modality"
          value={filters.modality}
          onChange={change}
        >
          <option value="">Modalidad</option>
          <option value="online">En línea</option>
          <option value="presencial">Presencial</option>
        </select>
        <label className="sr-only" htmlFor="level-filter">
          Nivel
        </label>
        <select
          id="level-filter"
          name="level"
          value={filters.level}
          onChange={change}
        >
          <option value="">Nivel</option>
          <option value="inicial">Nivel inicial</option>
          <option value="intermedio">Intermedio</option>
          <option value="todos">Todos los niveles</option>
        </select>
      </div>
    </form>
  );
}
