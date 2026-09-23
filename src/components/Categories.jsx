import { categories } from "../data/categories";
import Icon from "./Icon";
import { Link } from "react-router-dom";

export default function Categories({ selected, onSelect }) {
  return (
    <div className="categories" role="group" aria-label="Filtrar por categoría">
      {categories.map((category) => (
        <Link
          key={category.id}
          to={category.id ? `/cursos?categoria=${category.id}` : "/cursos"}
          className={`category ${selected === category.id ? "selected" : ""}`}
          aria-current={selected === category.id ? "true" : undefined}
          onClick={
            onSelect
              ? (event) => {
                  event.preventDefault();
                  onSelect(category.id);
                }
              : undefined
          }
        >
          <Icon
            name={category.icon}
            className={`category-icon ${category.id === "electricidad" ? "icon-accent" : ""}`}
          />
          <span className="category-label">
            {category.id === "velas" ? (
              <>
                Velas
                <br />
                Artesanales
              </>
            ) : (
              category.name
            )}
          </span>
        </Link>
      ))}
    </div>
  );
}
