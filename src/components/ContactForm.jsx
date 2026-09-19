import { useState } from "react";
import { ArrowRight, CheckCircle2 } from "lucide-react";

export default function ContactForm({ message, setMessage }) {
  const [sent, setSent] = useState(false);
  return (
    <form
      className="contact-form"
      onChange={() => setSent(false)}
      onSubmit={(event) => {
        event.preventDefault();
        setSent(true);
      }}
    >
      <div className="form-row">
        <label htmlFor="contact-name">
          Nombre
          <input
            id="contact-name"
            name="name"
            autoComplete="name"
            placeholder="Tu nombre"
            required
            maxLength={100}
          />
        </label>
        <label htmlFor="contact-email">
          Correo electrónico
          <input
            id="contact-email"
            name="email"
            type="email"
            autoComplete="email"
            placeholder="tucorreo@ejemplo.com"
            required
          />
        </label>
      </div>
      <label htmlFor="contact-phone">
        Teléfono <span>(opcional)</span>
        <input
          id="contact-phone"
          name="phone"
          type="tel"
          autoComplete="tel"
          placeholder="Tu número de contacto"
          maxLength={30}
        />
      </label>
      <label htmlFor="contact-message">
        Mensaje
        <textarea
          id="contact-message"
          name="message"
          value={message}
          onChange={(event) => setMessage(event.target.value)}
          placeholder="Cuéntanos qué te gustaría aprender…"
          rows={4}
          required
          maxLength={3000}
        />
      </label>
      <div className="form-footer">
        <small>
          Formulario de demostración. Tus datos no se envían ni se guardan.
        </small>
        <button className="button" type="submit">
          Enviar <ArrowRight size={18} />
        </button>
      </div>
      <div role="status" aria-live="polite">
        {sent && (
          <p className="form-success">
            <CheckCircle2 size={20} />
            Gracias por contactarnos. Esta es una demostración; no se ha enviado
            ningún mensaje.
          </p>
        )}
      </div>
    </form>
  );
}
