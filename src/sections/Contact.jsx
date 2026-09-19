import { MessageCircle, ArrowDownRight } from "lucide-react";
import ContactForm from "../components/ContactForm";

export default function Contact({ message, setMessage }) {
  return (
    <section id="contacto" className="section soft-section">
      <div className="container contact-layout">
        <div className="contact-copy">
          <MessageCircle size={35} strokeWidth={1.4} />
          <p className="eyebrow">HABLEMOS DE TU PRÓXIMO PASO</p>
          <h2>
            Estamos para
            <br />
            acompañarte.
          </h2>
          <p>
            ¿Tienes dudas sobre un curso?
            <br />
            Cuéntanos qué buscas y cómo podemos ayudarte a comenzar.
          </p>
          <ArrowDownRight className="contact-arrow" size={65} strokeWidth={1} />
        </div>
        <ContactForm message={message} setMessage={setMessage} />
      </div>
    </section>
  );
}
