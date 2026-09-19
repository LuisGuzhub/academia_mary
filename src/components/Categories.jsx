import { categories } from "../data/categories";
import Icon from "./Icon";

export default function Categories({ selected, onSelect }) {
  return (
    <div className="categories" role="group" aria-label="Filtrar por categoría">
      {categories.map((category) => (
        <button
          key={category.id}
          type="button"
          className={`category ${selected === category.id ? "selected" : ""}`}
          aria-pressed={selected === category.id}
          onClick={() => onSelect(category.id)}
        >
          <Icon
            name={category.icon}
            className={`category-icon ${category.id === "electricidad" ? "icon-accent" : ""}`}
          />
          <span>{category.name}</span>
        </button>
      ))}
    </div>
  );
}
