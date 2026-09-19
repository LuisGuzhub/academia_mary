import { Award, Monitor, Play, Users, Smartphone, Trophy } from "lucide-react";

const benefits = [
  [Award, "Certificado de finalización"],
  [Monitor, "Acceso inmediato y de por vida"],
  [Play, "Clases en video paso a paso"],
  [Users, "Acompañamiento de expertos"],
  [Smartphone, "Soporte en línea"],
  [Trophy, "Aprende y emprende con nosotros"],
];
export default function Benefits() {
  return (
    <div className="benefits" aria-label="Beneficios de aprender con CGL">
      {benefits.map(([Icon, text]) => (
        <div className="benefit" key={text}>
          <Icon size={31} strokeWidth={1.6} aria-hidden="true" />
          <span>{text}</span>
        </div>
      ))}
    </div>
  );
}
