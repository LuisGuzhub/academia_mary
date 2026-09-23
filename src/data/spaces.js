import { site } from "./site.js";
import room1 from "../assets/images/spaces/sala-capacitacion-1.jpeg";
import room2 from "../assets/images/spaces/sala-capacitacion-2.jpeg";
import room3 from "../assets/images/spaces/sala-capacitacion-3.jpeg";
export const roomPhotos = [
  {
    src: room1,
    alt: `Sala de capacitación de ${site.brandName} con mesas en U y aire acondicionado`,
  },
  {
    src: room2,
    alt: `Mesas y sillas de la sala de ${site.brandName} vistas desde el puesto del facilitador`,
  },
  { src: room3, alt: `Vista general de la sala de capacitación de ${site.brandName}` },
];
