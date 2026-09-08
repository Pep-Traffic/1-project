export const industries = [
  {
    slug: "roofing",
    name: "Roofing",
    headline: "The roofing company website, SEO & ads system that books more jobs.",
    lede: "A GHL or WordPress website, local SEO, and ad campaigns built around roof repairs and replacements — installed and run by one team, not a rotating cast of freelancers.",
    bullets: [
      "A website built to convert roof-leak and replacement searches into booked estimates",
      "Local SEO for \"roofing company near me\" and city-specific service terms",
      "Google Ads and Local Services Ads managed around cost per booked job",
      "GHL or WordPress CRM with missed-call text-back and review request automations",
    ],
    caseStudy: {
      name: "Northline Roofing",
      stat: "1.8s",
      statLabel: "page load time after rebuild",
      note: "Rebuilt a legacy WordPress site from the ground up — replaced a slow, outdated theme that was costing organic rankings.",
    },
    faqs: [
      {
        q: "Do you work with roofing companies already on GHL or WordPress?",
        a: "Yes — we rebuild on your existing platform when it's salvageable, or migrate when it isn't. We tell you honestly which one fits before quoting anything.",
      },
      {
        q: "How fast can a roofing website and ad campaign go live?",
        a: "Most roofing engagements start with an audit inside a week, with a working site or campaign live within two to four weeks depending on scope.",
      },
    ],
  },
  {
    slug: "hvac-heating",
    name: "HVAC & Heating",
    headline: "The HVAC & heating website, SEO & ads system that books more jobs.",
    lede: "A GHL funnel or WordPress site, local SEO, and ad campaigns built around emergency repairs, installs, and maintenance plans — with a CRM that answers every lead within seconds.",
    bullets: [
      "A GHL funnel or WordPress site built around emergency-repair and installation searches",
      "Local SEO for \"HVAC repair near me\" and seasonal service terms",
      "Google Ads and Local Services Ads tuned for cost per booked job, not just clicks",
      "Missed-call text-back and automated review requests wired into your CRM",
    ],
    caseStudy: {
      name: "Bayview Heating",
      stat: "GHL",
      statLabel: "multi-step funnel + missed-call automation",
      note: "Built a multi-step GHL funnel with missed-call text-back automation so no emergency call goes unanswered.",
    },
    faqs: [
      {
        q: "Can you connect ads directly into our HVAC dispatch or CRM?",
        a: "Yes — we wire conversion tracking into whatever your dispatch or CRM runs on, so cost per lead and cost per booked job are measured against real jobs, not just ad-platform estimates.",
      },
      {
        q: "Do you handle seasonal campaign changes (AC vs. heating season)?",
        a: "Yes, budget and creative are reallocated seasonally as part of ongoing ads management — it's not a set-and-forget campaign.",
      },
    ],
  },
  {
    slug: "plumbing",
    name: "Plumbing",
    headline: "The plumbing company website, SEO & ads system that books more jobs.",
    lede: "A website, local SEO, and ad campaigns built around emergency plumbing searches — connected to a CRM that responds to every call and text in seconds, not hours.",
    bullets: [
      "A website built around emergency-plumbing and drain-service searches",
      "Local SEO for \"plumber near me\" and 24/7 emergency service terms",
      "Google Ads and Local Services Ads managed for cost per booked job",
      "GHL or WordPress CRM with instant lead response and review automations",
    ],
    caseStudy: null,
    faqs: [
      {
        q: "Can you handle 24/7 emergency lead response for plumbers?",
        a: "Yes — missed-call text-back and instant lead routing are standard parts of the CRM setup for emergency service businesses like plumbing.",
      },
      {
        q: "Do you build the website, or just run ads?",
        a: "Both, and everything in between — most plumbing clients come to us needing the whole system connected, not just one piece.",
      },
    ],
  },
  {
    slug: "electrical",
    name: "Electrical",
    headline: "The electrician website, SEO & ads system that books more jobs.",
    lede: "A website, local SEO, and ad campaigns built around residential and commercial electrical searches — with a CRM that turns every inquiry into a scheduled job.",
    bullets: [
      "A website built around panel-upgrade, wiring, and emergency-electrical searches",
      "Local SEO for \"electrician near me\" and licensed-electrician trust signals",
      "Google Ads and Local Services Ads managed around cost per booked job",
      "GHL or WordPress CRM with automated scheduling and review requests",
    ],
    caseStudy: null,
    faqs: [
      {
        q: "Do you help with licensing and trust signals on the website?",
        a: "Yes — license numbers, insurance, and certifications are built into the site structure and schema markup, which matters for both trust and local SEO.",
      },
      {
        q: "What if we're only spending on ads right now, no real website?",
        a: "We'll tell you honestly if a weak landing page is capping your ad performance — it usually is — and scope a fix from there.",
      },
    ],
  },
  {
    slug: "remodeling",
    name: "Remodeling",
    headline: "The remodeling contractor website, SEO & ads system that books more jobs.",
    lede: "A website, local SEO, and ad campaigns built around kitchen, bath, and whole-home remodeling searches — connected to a CRM that keeps every estimate moving.",
    bullets: [
      "A website with a portfolio structure built to showcase real project results",
      "Local SEO for \"remodeling contractor near me\" and project-specific search terms",
      "Google Ads and social campaigns tuned for high-ticket estimate requests",
      "GHL or WordPress CRM with estimate follow-up and review automations",
    ],
    caseStudy: null,
    faqs: [
      {
        q: "Can you showcase our past remodeling projects effectively?",
        a: "Yes — a strong project portfolio with real photos and outcomes is usually the single biggest conversion lever for remodeling sites, and we build the site structure around it.",
      },
      {
        q: "Our sales cycle is long — does that change how ads are managed?",
        a: "Yes. For high-ticket, long-cycle remodeling leads we track cost per qualified estimate, not just cost per lead, and adjust targeting accordingly.",
      },
    ],
  },
];

export function getIndustryBySlug(slug) {
  return industries.find((i) => i.slug === slug);
}
