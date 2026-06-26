import type { SVGProps } from "react";

const base = {
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.6,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
  viewBox: "0 0 24 24",
};

export function IconFactory(p: SVGProps<SVGSVGElement>) {
  return (
    <svg {...base} {...p}>
      <path d="M3 21h18M5 21V10l5 3V10l5 3V7l4 2v12" />
      <path d="M9 21v-4h2v4" />
    </svg>
  );
}

export function IconCold(p: SVGProps<SVGSVGElement>) {
  return (
    <svg {...base} {...p}>
      <path d="M12 3v18M3 12h18M5.5 5.5l13 13M18.5 5.5l-13 13" />
      <path d="M12 5l2-2-2 0-2 0 2 2zM12 19l-2 2 2 0 2 0-2-2z" />
    </svg>
  );
}

export function IconTruck(p: SVGProps<SVGSVGElement>) {
  return (
    <svg {...base} {...p}>
      <path d="M3 7h11v9H3zM14 10h4l3 3v3h-7" />
      <circle cx="7" cy="18" r="2" />
      <circle cx="17" cy="18" r="2" />
    </svg>
  );
}

export function IconNetwork(p: SVGProps<SVGSVGElement>) {
  return (
    <svg {...base} {...p}>
      <circle cx="12" cy="5" r="2.2" />
      <circle cx="5" cy="19" r="2.2" />
      <circle cx="19" cy="19" r="2.2" />
      <path d="M12 7.2 6.5 16.8M12 7.2l5.5 9.6M7 19h10" />
    </svg>
  );
}

export function IconExport(p: SVGProps<SVGSVGElement>) {
  return (
    <svg {...base} {...p}>
      <path d="M12 16V4M8 8l4-4 4 4" />
      <path d="M4 14v4a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-4" />
    </svg>
  );
}

export function IconImport(p: SVGProps<SVGSVGElement>) {
  return (
    <svg {...base} {...p}>
      <path d="M12 4v12M8 12l4 4 4-4" />
      <path d="M4 14v4a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-4" />
    </svg>
  );
}

export function IconShield(p: SVGProps<SVGSVGElement>) {
  return (
    <svg {...base} {...p}>
      <path d="M12 3l7 3v5c0 4.5-3 8.5-7 10-4-1.5-7-5.5-7-10V6l7-3z" />
      <path d="M9 12l2 2 4-4" />
    </svg>
  );
}

export function IconLink(p: SVGProps<SVGSVGElement>) {
  return (
    <svg {...base} {...p}>
      <path d="M9 12h6" />
      <path d="M10 8H8a4 4 0 0 0 0 8h2M14 8h2a4 4 0 0 1 0 8h-2" />
    </svg>
  );
}

export function IconGlobe(p: SVGProps<SVGSVGElement>) {
  return (
    <svg {...base} {...p}>
      <circle cx="12" cy="12" r="9" />
      <path d="M3 12h18M12 3c3 3.5 3 14.5 0 18M12 3c-3 3.5-3 14.5 0 18" />
    </svg>
  );
}

export function IconFlex(p: SVGProps<SVGSVGElement>) {
  return (
    <svg {...base} {...p}>
      <path d="M4 12a8 8 0 0 1 14-5M20 12a8 8 0 0 1-14 5" />
      <path d="M18 4v3h-3M6 20v-3h3" />
    </svg>
  );
}

export function IconPhone(p: SVGProps<SVGSVGElement>) {
  return (
    <svg {...base} {...p}>
      <path d="M5 4h4l2 5-2.5 1.5a11 11 0 0 0 5 5L20 13l-1 4-2 1c-7 0-12-5-12-12z" />
    </svg>
  );
}

export function IconMail(p: SVGProps<SVGSVGElement>) {
  return (
    <svg {...base} {...p}>
      <rect x="3" y="5" width="18" height="14" rx="2" />
      <path d="M3 7l9 6 9-6" />
    </svg>
  );
}

export function IconPin(p: SVGProps<SVGSVGElement>) {
  return (
    <svg {...base} {...p}>
      <path d="M12 21c5-5 7-8 7-11a7 7 0 1 0-14 0c0 3 2 6 7 11z" />
      <circle cx="12" cy="10" r="2.5" />
    </svg>
  );
}

export function IconClock(p: SVGProps<SVGSVGElement>) {
  return (
    <svg {...base} {...p}>
      <circle cx="12" cy="12" r="9" />
      <path d="M12 7v5l3 2" />
    </svg>
  );
}

export function IconDoc(p: SVGProps<SVGSVGElement>) {
  return (
    <svg {...base} {...p}>
      <path d="M6 3h8l4 4v14H6z" />
      <path d="M14 3v4h4M9 13h6M9 17h6" />
    </svg>
  );
}

export function IconWhatsApp(p: SVGProps<SVGSVGElement>) {
  return (
    <svg {...base} {...p}>
      <path d="M12 3a9 9 0 0 0-7.74 13.6L3 21l4.5-1.18A9 9 0 1 0 12 3z" />
      <path d="M8.6 8.1c-.3 0-.6.1-.8.4-.3.3-.9.9-.9 2.1 0 1.2.9 2.4 1 2.6.1.2 1.7 2.8 4.3 3.8 2.1.8 2.6.7 3 .6.5-.1 1.5-.6 1.7-1.2.2-.6.2-1.1.1-1.2-.1-.1-.3-.2-.6-.3l-1.4-.7c-.2-.1-.4-.1-.6.1l-.6.8c-.1.2-.3.2-.5.1-.7-.3-1.4-.7-2-1.5-.2-.2-.1-.4 0-.5l.4-.5c.1-.2.1-.3 0-.5l-.6-1.5c-.2-.5-.4-.5-.6-.5z" />
    </svg>
  );
}

export function IconClose(p: SVGProps<SVGSVGElement>) {
  return (
    <svg {...base} {...p}>
      <path d="M6 6l12 12M18 6L6 18" />
    </svg>
  );
}

export function IconArrow(p: SVGProps<SVGSVGElement>) {
  return (
    <svg {...base} {...p}>
      <path d="M5 12h14M13 6l6 6-6 6" />
    </svg>
  );
}

export const serviceIcons = [
  IconFactory,
  IconCold,
  IconTruck,
  IconNetwork,
  IconExport,
  IconImport,
];

export const advantageIcons = [IconLink, IconNetwork, IconGlobe, IconFlex];
