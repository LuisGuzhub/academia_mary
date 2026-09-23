import { WhatsAppIcon } from "./SocialLinks";
import { whatsappUrl } from "../data/site";

export default function WhatsAppButton({
  message,
  children = "Solicitar información",
}) {
  return (
    <a
      className="button"
      href={whatsappUrl(message)}
      target="_blank"
      rel="noopener noreferrer"
    >
      {children}
      <WhatsAppIcon />
    </a>
  );
}
