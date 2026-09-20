// Locally hosted screenshots of the live portfolio sites.
//
// These replace the s0.wp.com/mshots service, which generates screenshots on
// demand: the first request for an uncached URL hangs for 30s or more and
// renders nothing, so visitors — and Googlebot, which will not wait — saw
// empty boxes.
//
// The files are served through Next's image optimizer rather than directly,
// so the large PNG sources are delivered as compressed WebP/AVIF at the size
// actually displayed.
const SHOTS = {
  "jflowersinsurance.com": "/work/jflowers-insurance.png",
  "pracforge.com": "/work/pracforge.png",
  "corepowerpeptide.com": "/work/corepower-peptide.png",
  "aimtn.org": "/work/aimtn.png",
  "motscbuy.com": "/work/motscbuy.png",
  "whatarepeptides.us": "/work/what-are-peptides.png",
};

// mangoholicae.com is absent on purpose: the site does not finish loading
// within 180 seconds, so no screenshot could be captured. Its card falls back
// to initials until the site itself is fixed.

function normalize(url) {
  return String(url || "")
    .replace(/^https?:\/\//, "")
    .replace(/^www\./, "")
    .replace(/\/.*$/, "")
    .toLowerCase();
}

// w must be one of Next's default deviceSizes/imageSizes.
export function shotFor(url, w = 828) {
  const file = SHOTS[normalize(url)];
  if (!file) return null;
  return `/_next/image?url=${encodeURIComponent(file)}&w=${w}&q=72`;
}

export function initialsFor(name) {
  return String(name || "").slice(0, 2).toUpperCase();
}
