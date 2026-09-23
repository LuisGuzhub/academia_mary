import {
  Zap,
  FileText,
  Laptop,
  LayoutGrid,
  Sparkles,
  BriefcaseBusiness,
  Megaphone,
  ShieldCheck,
} from "lucide-react";

const icons = {
  electricity: Zap,
  file: FileText,
  laptop: Laptop,
  grid: LayoutGrid,
  makeup: Sparkles,
  business: BriefcaseBusiness,
  marketing: Megaphone,
  safety: ShieldCheck,
};

export default function Icon({ name, className = "" }) {
  const Component = icons[name];
  if (Component)
    return (
      <Component className={className} aria-hidden="true" strokeWidth={1.8} />
    );
  return (
    <svg
      className={className}
      viewBox="0 0 40 40"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      {name === "balloons" && (
        <>
          <ellipse cx="13" cy="14" rx="7" ry="10" />
          <ellipse cx="27" cy="13" rx="7" ry="10" className="icon-accent" />
          <path d="m13 24-2 3h4l-2-3m14-1-2 3h4l-2-3M13 27c-7 5 8 6 1 11m13-12c-7 5 3 7-2 12" />
        </>
      )}
      {name === "pliers" && (
        <>
          <path d="m14 3 2 10-3 7L6 34q-1 4 3 3l10-15m7-19-2 10 3 7 7 14q1 4-3 3L21 22M16 13l8 7m0-7-8 7" />
          <circle cx="20" cy="19" r="3" />
        </>
      )}
      {name === "candle" && (
        <>
          <path d="M12 19h18v18H12zM12 20c5 4 8-3 12 0v7M21 15c-8-3-4-8 0-12 0 5 7 9 0 12Z" />
          <path d="M21 19v-4" />
        </>
      )}
    </svg>
  );
}
