const PIECE_META = [
  { label: "Website", href: "/services/web-development" },
  { label: "Local SEO", href: "/services/seo" },
  { label: "Paid ads", href: "/services/ads-management" },
  { label: "CRM & automation", href: "/services/gohighlevel" },
];

const makePieces = (texts) => PIECE_META.map((p, i) => ({ ...p, text: texts[i] }));

export const industries = [
  {
    slug: "roofing",
    name: "Roofing",
    shortName: "roofing",
    metaTitle: "Roofing Marketing Agency — Websites, SEO & Ads",
    metaDescription:
      "A roofing marketing agency handling your website, roofing SEO and ads. Built for storm weeks, insurance jobs and booked inspections. Get a free quote.",
    headline: "The roofing company website, SEO & ads system that books more jobs.",
    lede: "A GHL or WordPress website, local SEO, and ad campaigns built around roof repairs and replacements — installed and run by one team, not a rotating cast of freelancers.",
    edge: "Storm weeks bury you, then it goes quiet for a month. The system has to hold both.",
    painLede:
      "Storm season triples the call volume for three weeks and then drops off a cliff. Most of what goes wrong in roofing is a capacity problem wearing a marketing problem's clothes.",
    pains: [
      {
        title: "Storm calls all land at once",
        body: "Two days of the phone never stopping, one person to answer it, and the ones you miss go to whoever picks up. The week you most need the system is the week it breaks.",
      },
      {
        title: "Insurance jobs stall in the gap",
        body: "Adjuster dates, supplements, “I'm still waiting to hear back.” The job is neither won nor lost, and nothing is chasing it.",
      },
      {
        title: "You're buying leads, not customers",
        body: "Shared-lead marketplaces sell the same roof-leak enquiry to several contractors at once. You win it on speed or you win it on price.",
      },
    ],
    mechLede:
      "Repair and replacement are two different sales, and insurance work is a third. The intake has to sort them in the first ten seconds, before anybody picks up a phone.",
    intake: [
      "Repair or full replacement?",
      "Is this storm or insurance related?",
      "Roof age and material",
      "Address and best number for a text",
    ],
    sms: "Hi — {{business_name}} here, sorry we missed you. Is this a leak that needs looking at today, or a replacement quote? Reply here and we'll get you on the schedule.",
    stages: ["New lead", "Inspection booked", "Estimate sent", "Insurance / adjuster", "Job scheduled"],
    buildCols: [
      "We look at what storm season does to your call volume, then scope the site, the intake and the follow-up around the peak rather than the average.",
      "Repair and replacement pages, the insurance question in the form, storm-week call routing, and the follow-up sequence — built inside your accounts.",
      "Campaigns run against cost per booked inspection. Each month we cut what isn't converting and move it to what is.",
    ],
    pills: [
      "Roof-leak landing page",
      "Repair vs replacement split",
      "Storm-week call routing",
      "Insurance follow-up sequence",
      "Review request on job close",
      "Google Business Profile service areas",
    ],
    sizes: [
      "Get the quote form and the missed-call text-back live before you spend a dollar on ads. Ads without instant response is money poured into voicemail.",
      "Run repair and replacement as separate campaigns. They cost different amounts per booked job, and mixing them hides which one is paying.",
      "One CRM, but separate pipelines and separate Google Business Profiles per city, or your reporting quietly starts lying to you.",
    ],
    pieces: makePieces([
      "A website built to convert roof-leak and replacement searches into booked estimates",
      "Local SEO for \"roofing company near me\" and city-specific service terms",
      "Google Ads and Local Services Ads managed around cost per booked job",
      "GHL or WordPress CRM with missed-call text-back and review request automations",
    ]),
    faqs: [
      {
        q: "Do you work with roofing companies already on GHL or WordPress?",
        a: "Yes — we rebuild on your existing platform when it's salvageable, or migrate when it isn't. We tell you honestly which one fits before quoting anything.",
      },
      {
        q: "How fast can a roofing website and ad campaign go live?",
        a: "Most roofing engagements start with an audit inside a week, with a working site or campaign live within two to four weeks depending on scope.",
      },
      {
        q: "What does a roofing build cost?",
        a: "The build is scoped and quoted as a fixed number in writing before any work starts. Ongoing SEO and ads are a flat monthly fee — we don't bill a percentage of your ad spend, because that pays us for spending more of your money.",
      },
      {
        q: "Who owns the site and the CRM data?",
        a: "You do, from day one. The domain, the hosting, the GoHighLevel or WordPress account, the contact list and the review history are all in your name. If you leave, you keep all of it.",
      },
      {
        q: "Do we have to buy the whole system at once?",
        a: "No. The usual starting point is the site and the missed-call text-back. SEO and ads make more sense once every lead that comes in is actually getting answered.",
      },
    ],
  },
  {
    slug: "hvac-heating",
    name: "HVAC & Heating",
    shortName: "HVAC",
    metaTitle: "HVAC Marketing Agency — Websites, SEO & Ads",
    metaDescription:
      "An HVAC marketing agency for heating and cooling contractors: website, HVAC SEO and ads tuned to both peak seasons and the quiet months between.",
    headline: "The HVAC & heating website, SEO & ads system that books more jobs.",
    lede: "A GHL funnel or WordPress site, local SEO, and ad campaigns built around emergency repairs, installs, and maintenance plans — with a CRM that answers every lead within seconds.",
    edge: "Two peak seasons, two different ad budgets, and maintenance plans to sell in the months between.",
    painLede:
      "Two peaks a year, and the quiet months between them decide whether you can keep your techs on the payroll.",
    pains: [
      {
        title: "The first hot week decides the quarter",
        body: "Everyone calls on the same Monday. Whoever picks up books weeks of work, and whoever doesn't spends the summer bidding against them.",
      },
      {
        title: "Maintenance plans get sold once and never renewed",
        body: "No reminder sequence, so plans lapse quietly and the one predictable line in your revenue disappears with them.",
      },
      {
        title: "Repair versus replace gets decided on the phone",
        body: "Nobody captures the system's age before the call, so an install-sized job gets quoted as a service call.",
      },
    ],
    mechLede:
      "Heating and cooling are two campaigns, not one, and the difference between a service call and an install usually comes down to one question asked before anybody picks up.",
    intake: [
      "Heating or cooling?",
      "Is the system running at all right now?",
      "Age of the unit, if you know it",
      "Address and best number for a text",
    ],
    sms: "Hi — {{business_name}} here, sorry we missed your call. Is the system out completely, or running badly? Reply with your address and we'll get a tech routed to you.",
    stages: ["New lead", "Diagnostic booked", "Repair or replace quote", "Install scheduled", "Maintenance plan"],
    buildCols: [
      "We look at last year's two peaks and the months in between, then scope for the season you're heading into rather than the one you just finished.",
      "Separate heating and cooling pages, the system-age question in the intake, emergency routing, and the maintenance-plan renewal sequence.",
      "Budget moves between heating and cooling as the season turns, and the tune-up reactivation list runs through the shoulder months.",
    ],
    pills: [
      "Emergency repair page",
      "Heating / cooling budget split",
      "System-age intake field",
      "Maintenance plan renewals",
      "Post-install review request",
      "Shoulder-season tune-up campaign",
    ],
    sizes: [
      "One emergency page and instant text-back will out-earn a five-page brochure site. Build that first and add pages later.",
      "Run heating and cooling as separate campaigns with separate budgets, or the season you're not in quietly eats the season you are.",
      "Tie conversion tracking to dispatch so cost per booked job is a real number instead of an ad-platform estimate.",
    ],
    pieces: makePieces([
      "A GHL funnel or WordPress site built around emergency-repair and installation searches",
      "Local SEO for \"HVAC repair near me\" and seasonal service terms",
      "Google Ads and Local Services Ads tuned for cost per booked job, not just clicks",
      "Missed-call text-back and automated review requests wired into your CRM",
    ]),
    faqs: [
      {
        q: "Can you connect ads directly into our HVAC dispatch or CRM?",
        a: "Yes — we wire conversion tracking into whatever your dispatch or CRM runs on, so cost per lead and cost per booked job are measured against real jobs, not just ad-platform estimates.",
      },
      {
        q: "Do you handle seasonal campaign changes (AC vs. heating season)?",
        a: "Yes, budget and creative are reallocated seasonally as part of ongoing ads management — it's not a set-and-forget campaign.",
      },
      {
        q: "What does an HVAC build cost?",
        a: "The build is scoped and quoted as a fixed number in writing before any work starts. Ongoing SEO and ads are a flat monthly fee — we don't bill a percentage of your ad spend, because that pays us for spending more of your money.",
      },
      {
        q: "Who owns the site, the CRM and the ad accounts?",
        a: "You do, from day one. The domain, the hosting, the GoHighLevel or WordPress account, the ad accounts, the contact list and the review history are all in your name. If you leave, you keep all of it.",
      },
      {
        q: "Do we have to buy the whole system at once?",
        a: "No. The usual starting point is the emergency-repair page and the missed-call text-back. SEO and ads make more sense once every call that comes in is actually getting answered.",
      },
    ],
  },
  {
    slug: "plumbing",
    name: "Plumbing",
    shortName: "plumbing",
    metaTitle: "Plumber Website Design, SEO & Ads — Empro Labs",
    metaDescription:
      "Plumber website design with after-hours text-back, local SEO and ads. Built so the 11pm emergency call reaches you, not the next plumber. Free quote.",
    headline: "The plumbing company website, SEO & ads system that books more jobs.",
    lede: "A website, local SEO, and ad campaigns built around emergency plumbing searches — connected to a CRM that responds to every call and text in seconds, not hours.",
    edge: "Emergencies at 11pm. Whoever answers first gets the job, and it won't be whoever calls back on Monday.",
    painLede:
      "Emergency work is won in minutes. Almost everything else you do is downstream of how fast somebody answers.",
    pains: [
      {
        title: "The second one to answer gets nothing",
        body: "A burst line doesn't wait. If the call rings out, they are already scrolling to the next result on the map.",
      },
      {
        title: "After-hours calls vanish",
        body: "Nights and weekends bring the highest-intent calls of your week, and voicemail eats them.",
      },
      {
        title: "Drain jobs never become repipe jobs",
        body: "The bigger conversation never happens, because nothing follows up once the drain is cleared and the invoice is paid.",
      },
    ],
    mechLede:
      "For plumbing the whole thing turns on the first minute after a missed call — including the part where you tell them to shut the main off before you've even left the yard.",
    intake: [
      "Is water actively leaking right now?",
      "What's affected — drain, water heater, line, or fixture?",
      "Have you shut the main off?",
      "Address and best number for a text",
    ],
    sms: "Hi — {{business_name}} here, sorry we missed you. Is water still running? If it is, shut the main off and reply with your address — we'll come straight back with our next open slot.",
    stages: ["New lead", "Dispatched", "On site", "Quote given", "Review requested"],
    buildCols: [
      "We start with what happens to a call at 11pm on a Sunday, because that call is worth more than anything the site does at 2pm on a Tuesday.",
      "A 24/7 emergency page, after-hours routing, the shut-off instruction text, and the follow-up that turns a cleared drain into a quoted repipe.",
      "Emergency and scheduled work are tracked separately, so the cheap clicks stop taking credit for the expensive jobs.",
    ],
    pills: [
      "24/7 emergency page",
      "After-hours call routing",
      "Shut-off instruction text",
      "Drain-to-repipe follow-up",
      "Review request on close",
      "Local Services Ads profile",
    ],
    sizes: [
      "After-hours text-back is the whole project. Do it before the website, before the ads, before anything else.",
      "Route by zone so the nearest van is the one that replies, and make the reply say how far out you are.",
      "Separate emergency numbers per city with one pipeline behind them, so you can see which market is actually paying.",
    ],
    pieces: makePieces([
      "A website built around emergency-plumbing and drain-service searches",
      "Local SEO for \"plumber near me\" and 24/7 emergency service terms",
      "Google Ads and Local Services Ads managed for cost per booked job",
      "GHL or WordPress CRM with instant lead response and review automations",
    ]),
    faqs: [
      {
        q: "Can you handle 24/7 emergency lead response for plumbers?",
        a: "Yes — missed-call text-back and instant lead routing are standard parts of the CRM setup for emergency service businesses like plumbing.",
      },
      {
        q: "Do you build the website, or just run ads?",
        a: "Both, and everything in between — most plumbing clients come to us needing the whole system connected, not just one piece.",
      },
      {
        q: "What does a plumbing build cost?",
        a: "The build is scoped and quoted as a fixed number in writing before any work starts. Ongoing SEO and ads are a flat monthly fee — we don't bill a percentage of your ad spend, because that pays us for spending more of your money.",
      },
      {
        q: "Who owns the site, the number and the CRM data?",
        a: "You do, from day one. The domain, the hosting, the tracking numbers, the GoHighLevel or WordPress account, the contact list and the review history are all in your name. If you leave, you keep all of it.",
      },
      {
        q: "Do we have to buy the whole system at once?",
        a: "No. The usual starting point is the emergency page and the after-hours text-back. SEO and ads make more sense once the 11pm calls are covered.",
      },
    ],
  },
  {
    slug: "electrical",
    name: "Electrical",
    shortName: "electrical",
    metaTitle: "Electrician Website Design, SEO & Ads — Empro Labs",
    metaDescription:
      "Electrician website design with license and insurance signals, job-size intake, electrician SEO and ads that survive the permit wait. Get a free quote.",
    headline: "The electrician website, SEO & ads system that books more jobs.",
    lede: "A website, local SEO, and ad campaigns built around residential and commercial electrical searches — with a CRM that turns every inquiry into a scheduled job.",
    edge: "Panel upgrades and permits slow the quote down. The follow-up has to survive the wait.",
    painLede: "Permits and inspections stretch your timeline, and the customer carries on shopping while they wait.",
    pains: [
      {
        title: "Quotes go cold during permitting",
        body: "Two weeks of silence waiting on the city is two weeks of somebody else selling to them.",
      },
      {
        title: "The license never gets shown",
        body: "The first thing a homeowner wants to know is whether you're licensed and insured, and most electrician sites never answer it above the fold.",
      },
      {
        title: "Small jobs crowd out panel work",
        body: "No question on the form separates an outlet swap from a service upgrade, so the schedule fills up with the smaller one.",
      },
    ],
    mechLede:
      "Electrical work sorts by job size and by permit, and both get decided long before anybody visits the property. The intake does the sorting.",
    intake: [
      "Residential or commercial?",
      "Panel upgrade, new wiring, EV charger, or repair?",
      "Age of the panel, if you know it",
      "Address and best number for a text",
    ],
    sms: "Hi — {{business_name}} here, sorry we missed your call. Quick one so we can quote it properly: is this a repair, or a panel or service upgrade? Reply here and we'll come back with a time.",
    stages: ["New lead", "Site visit", "Quote sent", "Permit filed", "Work scheduled"],
    buildCols: [
      "We look at the mix you actually want — service calls, panel work, EV chargers, commercial — and scope the site to bring in more of the profitable end.",
      "Panel and EV-charger pages, license and insurance on the page and in the markup, job-size routing in the form, and a follow-up that keeps running through the permit wait.",
      "Residential and commercial are tracked apart, because they carry different prices, different objections and a different cost per booked job.",
    ],
    pills: [
      "Panel upgrade page",
      "License + insurance schema",
      "Job-size intake routing",
      "Permit-wait follow-up",
      "EV charger campaign",
      "Review request on close",
    ],
    sizes: [
      "Put the license number and the job-size question on the page. It filters out the calls you don't want before they reach your phone.",
      "Separate residential and commercial funnels. Different prices, different objections, and one message can't carry both.",
      "Track cost per booked job by license area rather than by campaign, or the markets blur into one number that tells you nothing.",
    ],
    pieces: makePieces([
      "A website built around panel-upgrade, wiring, and emergency-electrical searches",
      "Local SEO for \"electrician near me\" and licensed-electrician trust signals",
      "Google Ads and Local Services Ads managed around cost per booked job",
      "GHL or WordPress CRM with automated scheduling and review requests",
    ]),
    faqs: [
      {
        q: "Do you help with licensing and trust signals on the website?",
        a: "Yes — license numbers, insurance, and certifications are built into the site structure and schema markup, which matters for both trust and local SEO.",
      },
      {
        q: "What if we're only spending on ads right now, no real website?",
        a: "We'll tell you honestly if a weak landing page is capping your ad performance — it usually is — and scope a fix from there.",
      },
      {
        q: "What does an electrical build cost?",
        a: "The build is scoped and quoted as a fixed number in writing before any work starts. Ongoing SEO and ads are a flat monthly fee — we don't bill a percentage of your ad spend, because that pays us for spending more of your money.",
      },
      {
        q: "Who owns the site and the CRM data?",
        a: "You do, from day one. The domain, the hosting, the GoHighLevel or WordPress account, the contact list and the review history are all in your name. If you leave, you keep all of it.",
      },
      {
        q: "Do we have to buy the whole system at once?",
        a: "No. The usual starting point is the site and the job-size intake. SEO and ads make more sense once the form is filtering the right work through to you.",
      },
    ],
  },
  {
    slug: "remodeling",
    name: "Remodeling",
    shortName: "remodeling",
    metaTitle: "Remodeling Marketing Agency — Websites, SEO & Ads",
    metaDescription:
      "A remodeling marketing agency for kitchen, bath and whole-home contractors. Portfolio-led sites and follow-up that survives a months-long decision.",
    headline: "The remodeling contractor website, SEO & ads system that books more jobs.",
    lede: "A website, local SEO, and ad campaigns built around kitchen, bath, and whole-home remodeling searches — connected to a CRM that keeps every estimate moving.",
    edge: "A kitchen is a months-long decision. Most of them are lost in the gap between the estimate and the signature.",
    painLede:
      "High ticket, long consideration. The lead is rarely lost on price — it's lost in the four weeks when nobody spoke to them.",
    pains: [
      {
        title: "The gap after the estimate",
        body: "Weeks pass between the walkthrough and the decision, and nothing lands in their inbox during any of it.",
      },
      {
        title: "Budget never gets asked",
        body: "You design a kitchen for somebody whose budget was a third of it, then wonder why they went quiet.",
      },
      {
        title: "The portfolio isn't doing any selling",
        body: "Photos in a gallery with no scope, no timeline and no budget range — nothing a buyer can measure their own project against.",
      },
    ],
    mechLede:
      "Remodeling is won in the weeks between the walkthrough and the signature, so the intake asks about budget and timing up front and the follow-up is built to last a month.",
    intake: [
      "Kitchen, bath, addition, or whole home?",
      "Rough budget range",
      "Target start month",
      "Address and best number for a text",
    ],
    sms: "Hi — {{business_name}} here, sorry we missed you. What are you looking to remodel, and roughly when would you want to start? Reply here and we'll set up a walkthrough.",
    stages: ["New lead", "Consult booked", "Design and estimate", "Decision follow-up", "Contract signed"],
    buildCols: [
      "We start with the portfolio, because in remodeling it does more selling than any page of copy — and most of it is sitting unused on somebody's phone.",
      "Project pages with scope, timeline and budget range attached, a budget question in the intake, and a follow-up sequence that runs for weeks rather than days.",
      "Reported on cost per qualified estimate rather than cost per lead, because half the leads were never going to be your customer.",
    ],
    pills: [
      "Project portfolio build",
      "Budget-range intake",
      "Consult booking flow",
      "Multi-week nurture sequence",
      "Before / after gallery",
      "Review request on handover",
    ],
    sizes: [
      "A portfolio with scope and budget ranges attached will out-perform any ad you can buy at this size. Start by photographing the work you've already done.",
      "Measure cost per qualified estimate, not cost per lead. Leads are cheap and mostly irrelevant at this ticket size.",
      "One pipeline, with budget ranges set per market. A bathroom budget in one city isn't the same number in another.",
    ],
    pieces: makePieces([
      "A website with a portfolio structure built to showcase real project results",
      "Local SEO for \"remodeling contractor near me\" and project-specific search terms",
      "Google Ads and social campaigns tuned for high-ticket estimate requests",
      "GHL or WordPress CRM with estimate follow-up and review automations",
    ]),
    faqs: [
      {
        q: "Can you showcase our past remodeling projects effectively?",
        a: "Yes — a strong project portfolio with real photos and outcomes is usually the single biggest conversion lever for remodeling sites, and we build the site structure around it.",
      },
      {
        q: "Our sales cycle is long — does that change how ads are managed?",
        a: "Yes. For high-ticket, long-cycle remodeling leads we track cost per qualified estimate, not just cost per lead, and adjust targeting accordingly.",
      },
      {
        q: "What does a remodeling build cost?",
        a: "The build is scoped and quoted as a fixed number in writing before any work starts. Ongoing SEO and ads are a flat monthly fee — we don't bill a percentage of your ad spend, because that pays us for spending more of your money.",
      },
      {
        q: "Who owns the site, the photos and the CRM data?",
        a: "You do, from day one. The domain, the hosting, the project photography, the GoHighLevel or WordPress account, the contact list and the review history are all in your name. If you leave, you keep all of it.",
      },
      {
        q: "Do we have to buy the whole system at once?",
        a: "No. The usual starting point is the portfolio site and the estimate follow-up sequence. Ads make more sense once the estimates you already send stop going quiet.",
      },
    ],
  },
];

export function getIndustryBySlug(slug) {
  return industries.find((i) => i.slug === slug);
}
