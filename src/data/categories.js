const registeredCategories = [
  { id: "electricidad", name: "Electricidad", icon: "electricity" },
  { id: "globos", name: "Decoración con Globos", icon: "balloons" },
  { id: "alambrismo", name: "Accesorios y Alambrismo", icon: "pliers" },
  { id: "velas", name: "Velas Artesanales", icon: "candle" },
  { id: "nomina", name: "Nóminas", icon: "file" },
  { id: "digitales", name: "Cursos Digitales", icon: "laptop" },
  { id: "maquillaje", name: "Maquillaje", icon: "makeup" },
  { id: "emprendimiento", name: "Emprendimiento", icon: "business" },
  { id: "marketing-digital", name: "Marketing Digital", icon: "marketing" },
  {
    id: "seguridad-salud-ocupacional",
    name: "Seguridad y Salud Ocupacional",
    icon: "safety",
  },
  { id: "", name: "Todos los cursos", icon: "grid" },
];

export function sortCategories(items) {
  return [
    ...items
      .filter((item) => item.id)
      .sort((a, b) =>
        a.name.localeCompare(b.name, "es", { sensitivity: "base" }),
      ),
    ...items.filter((item) => !item.id),
  ];
}

export const categories = sortCategories(registeredCategories);
