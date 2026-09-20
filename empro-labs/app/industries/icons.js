const stroke = {
  fill: "none",
  stroke: "currentColor",
  strokeWidth: "1.7",
  strokeLinecap: "round",
  strokeLinejoin: "round",
};

export const tradeIcon = {
  roofing: (
    <svg viewBox="0 0 24 24" {...stroke}>
      <path d="M3 11l9-7 9 7" />
      <path d="M5 10v10h14V10" />
    </svg>
  ),
  "hvac-heating": (
    <svg viewBox="0 0 24 24" {...stroke}>
      <path d="M12 3v18M4.2 7.5l15.6 9M4.2 16.5l15.6-9" />
    </svg>
  ),
  plumbing: (
    <svg viewBox="0 0 24 24" {...stroke}>
      <path d="M14.7 6.3a4 4 0 0 0-5.4 5.4L3 18l3 3 6.3-6.3a4 4 0 0 0 5.4-5.4l-2.5 2.5-2.5-.5-.5-2.5 2.5-2.5Z" />
    </svg>
  ),
  electrical: (
    <svg viewBox="0 0 24 24" {...stroke}>
      <path d="M13 2L4 14h7l-1 8 9-12h-7l1-8Z" />
    </svg>
  ),
  remodeling: (
    <svg viewBox="0 0 24 24" {...stroke}>
      <path d="M12.5 6.5L17 11M5 19l8-8" />
      <path d="M14 4l6 6-3 3-6-6 3-3Z" />
    </svg>
  ),
};

export const plusIcon = (
  <svg viewBox="0 0 24 24" {...stroke}>
    <circle cx="12" cy="12" r="8.5" />
    <path d="M12 8.5v7M8.5 12h7" />
  </svg>
);

export const pieceIcon = {
  Website: (
    <svg viewBox="0 0 24 24" {...stroke}>
      <rect x="3" y="4" width="18" height="16" rx="2" />
      <path d="M3 9h18M7 6.5h.01M10 6.5h.01" />
    </svg>
  ),
  "Local SEO": (
    <svg viewBox="0 0 24 24" {...stroke}>
      <circle cx="10.5" cy="10.5" r="6.5" />
      <path d="M20 20L15.2 15.2" />
    </svg>
  ),
  "Paid ads": (
    <svg viewBox="0 0 24 24" {...stroke}>
      <path d="M4 10V14C4 14.55 4.45 15 5 15H7L10 19V5L7 9H5C4.45 9 4 9.45 4 10Z" />
      <path d="M14 9C15 9.8 15.6 10.85 15.6 12C15.6 13.15 15 14.2 14 15" />
    </svg>
  ),
  "CRM & automation": (
    <svg viewBox="0 0 24 24" {...stroke}>
      <path d="M3 5h18l-7 8.2V20l-4-2.2v-4.6L3 5Z" />
    </svg>
  ),
};

export const painIcons = [
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" key="p1">
    <path d="M4 6C4 4.9 4.9 4 6 4h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2h-8l-4 3.5V16a2 2 0 0 1-2-2V6Z" strokeLinejoin="round" />
    <path className="icon-slash" d="M3 3L21 21" strokeLinecap="round" />
  </svg>,
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" key="p2">
    <path d="M4 12a8 8 0 1 1 3 6.2" strokeLinecap="round" />
    <path d="M4 19v-4h4" strokeLinecap="round" strokeLinejoin="round" />
    <path className="icon-blink" d="M12 8v4l3 2" strokeLinecap="round" />
  </svg>,
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" key="p3">
    <rect x="4" y="3.5" width="16" height="17" rx="2" />
    <path d="M8 9h8M8 13h5" strokeLinecap="round" />
    <path className="icon-slash" d="M7.5 17.5h9" strokeLinecap="round" />
  </svg>,
];
