import { Link } from "react-router-dom";
import { site } from "../data/site";
import SocialLinks from "./SocialLinks";

export default function ContactDetails() {
  return (
    <address className="contact-details">
      <SocialLinks />
      <p>
        {site.address}
        <br />
        {site.landmark}
        <br />
        {site.city}
      </p>
      <Link className="text-link" to="/ubicacion">
        Dónde estamos →
      </Link>
    </address>
  );
}
