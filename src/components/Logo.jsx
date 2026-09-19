import { GraduationCap } from "lucide-react";

export default function Logo() {
  return (
    <a className="brand" href="#inicio" aria-label="CGL Capacitaciones, inicio">
      <span className="brand-shield">
        <GraduationCap aria-hidden="true" />
        <span className="shield-lines">Ⅲ</span>
      </span>
      <span className="brand-type">
        <strong>CGL</strong>
        <span>CAPACITACIONES</span>
        <small>Centro de Formación Integral</small>
      </span>
    </a>
  );
}
