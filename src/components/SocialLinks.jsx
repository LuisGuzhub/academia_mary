import { Instagram } from "lucide-react";
import { site, whatsappUrl } from "../data/site";

export function WhatsAppIcon({ size = 18 }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M20.5 11.8a8.5 8.5 0 0 1-12.7 7.4L3 20.5l1.3-4.7a8.5 8.5 0 1 1 16.2-4Z" />
      <path d="m8.3 7.5 1.3 2-1 1.2a8 8 0 0 0 4.7 4.1l1-1.2 2.2 1.1c-.3 1.7-1.6 2.1-2.9 1.7-3.8-1.1-6.5-3.8-7.1-6.2-.4-1.5.3-2.8 1.8-2.7Z" />
    </svg>
  );
}

export default function SocialLinks({ message, includeInstagram = true }) {
  return (
    <div className="social-links">
      {site.whatsappContacts.map((contact) => (
        <a
          key={contact.number}
          className="social-link"
          href={whatsappUrl(message, contact.number)}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`WhatsApp ${site.brandName}: ${contact.label}`}
        >
          <WhatsAppIcon />
          <span>{contact.label}</span>
        </a>
      ))}
      {includeInstagram && (
        <a
          className="social-link"
          href={site.instagram}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`Instagram de ${site.brandName}`}
        >
          <Instagram size={18} aria-hidden="true" />
          <span>{site.instagramLabel}</span>
        </a>
      )}
    </div>
  );
}
