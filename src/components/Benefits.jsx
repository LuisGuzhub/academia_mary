import { site } from "../data/site";
import { Award, Monitor, Play, Users, Smartphone, Trophy } from "lucide-react";

const benefits = [
  [Award, "Talleres con materiales incluidos"],
  [Monitor, "Aulas equipadas para aprender"],
  [Play, "Formación práctica paso a paso"],
  [Users, "Acompañamiento de expertos"],
  [Smartphone, "Atención personalizada"],
  [Trophy, "Aprende y emprende con nosotros"],
];
export default function Benefits() {
  return (
    <div className="benefits" aria-label={`Beneficios de aprender con ${site.brandName}`}>
      {benefits.map(([Icon, text]) => (
        <div className="benefit" key={text}>
          <Icon size={31} strokeWidth={1.6} aria-hidden="true" />
          <span>{text}</span>
        </div>
      ))}
    </div>
  );
}
