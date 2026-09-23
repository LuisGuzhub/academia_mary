import { site } from "../data/site";
import { Link } from "react-router-dom";
import { useId } from "react";
import logo from "../assets/images/branding/logo-cgi-original.png";

export default function Logo() {
  const backgroundFilterId = useId();
  return (
    <Link className="brand" to="/" aria-label={`${site.brandName}, inicio`}>
      <span className="brand-logo-frame">
        <svg width="0" height="0" aria-hidden="true" focusable="false" className="brand-logo-filter">
          <defs>
            <filter id={backgroundFilterId} colorInterpolationFilters="sRGB" x="0" y="0" width="100%" height="100%">
              {/* Remove the blue background while retaining the original gold and white artwork. */}
              <feColorMatrix type="matrix" values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  8 0 -2 0 -0.12" />
            </filter>
          </defs>
        </svg>
        <img className="brand-logo" style={{ filter: `url(#${backgroundFilterId})` }} src={logo} width="2508" height="627" alt={`${site.brandName} · ${site.institutionName}`} />
      </span>
    </Link>
  );
}
