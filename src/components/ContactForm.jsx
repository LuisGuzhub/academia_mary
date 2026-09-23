import { useState } from "react";
import { ArrowRight } from "lucide-react";
import { validateContact, contactFormUrl } from "../data/contact";

export default function ContactForm({ message, setMessage }) {
  const [errors, setErrors] = useState({});
  const [preparedUrl, setPreparedUrl] = useState("");
  function handleSubmit(event) {
    event.preventDefault();
    const form = event.currentTarget;
    const values = Object.fromEntries(new FormData(form));
    const nextErrors = validateContact(values);
    setErrors(nextErrors);
    setPreparedUrl("");
    if (Object.keys(nextErrors).length) {
      form.elements.namedItem(Object.keys(nextErrors)[0]).focus();
      return;
    }
    const url = contactFormUrl(values);
    setPreparedUrl(url);
    window.open(url, "_blank", "noopener,noreferrer");
  }
  return (
    <form
      className="contact-form"
      noValidate
      onChange={(event) => {
        setPreparedUrl("");
        setErrors((current) => ({
          ...current,
          [event.target.name]: undefined,
        }));
      }}
      onSubmit={handleSubmit}
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
            aria-invalid={Boolean(errors.name)}
            aria-describedby={errors.name ? "contact-name-error" : undefined}
          />
          {errors.name && (
            <small id="contact-name-error" className="form-error">
              {errors.name}
            </small>
          )}
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
            aria-invalid={Boolean(errors.email)}
            aria-describedby={errors.email ? "contact-email-error" : undefined}
          />
          {errors.email && (
            <small id="contact-email-error" className="form-error">
              {errors.email}
            </small>
          )}
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
          aria-invalid={Boolean(errors.message)}
          aria-describedby={
            errors.message ? "contact-message-error" : undefined
          }
        />
        {errors.message && (
          <small id="contact-message-error" className="form-error">
            {errors.message}
          </small>
        )}
      </label>
      <div className="form-footer">
        <small>Se abrirá WhatsApp para que revises y confirmes el envío.</small>
        <button className="button" type="submit">
          Enviar <ArrowRight size={18} />
        </button>
      </div>
      <div role="status" aria-live="polite">
        {preparedUrl && (
          <div className="form-ready">
            <p>Mensaje preparado. Confirma el envío en WhatsApp.</p>
            <a
              className="text-link"
              href={preparedUrl}
              target="_blank"
              rel="noopener noreferrer"
            >
              Si no se abrió, abrir WhatsApp →
            </a>
          </div>
        )}
      </div>
    </form>
  );
}
