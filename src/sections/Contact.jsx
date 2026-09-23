import { useState } from "react";
import ContactDetails from "../components/ContactDetails";
import { MessageCircle } from "lucide-react";
import ContactForm from "../components/ContactForm";

export default function Contact() {
  const [message, setMessage] = useState("");
  return (
    <section id="contacto" className="section soft-section">
      <div className="container contact-layout">
        <div className="contact-copy">
          <MessageCircle size={35} strokeWidth={1.4} />
          <p className="eyebrow">HABLEMOS DE TU PRÓXIMO PASO</p>
          <h1 className="section-title">
            Estamos para
            <br />
            acompañarte.
          </h1>
          <p>
            ¿Tienes dudas sobre un curso?
            <br />
            Cuéntanos qué buscas y cómo podemos ayudarte a comenzar.
          </p>
          <ContactDetails />
        </div>
        <ContactForm message={message} setMessage={setMessage} />
      </div>
    </section>
  );
}
