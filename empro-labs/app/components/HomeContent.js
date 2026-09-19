import GHLContactForm from "./GHLContactForm";

const trades = [
  { name: "Roofing", icon: "<path d=\"M3 11l9-7 9 7\"/><path d=\"M5 10v10h14V10\"/>" },
  { name: "HVAC", icon: "<path d=\"M12 3v18M4.2 7.5l15.6 9M4.2 16.5l15.6-9\"/>" },
  { name: "Plumbing", icon: "<path d=\"M14.7 6.3a4 4 0 0 0-5.4 5.4L3 18l3 3 6.3-6.3a4 4 0 0 0 5.4-5.4l-2.5 2.5-2.5-.5-.5-2.5 2.5-2.5Z\"/>" },
  { name: "Electrical", icon: "<path d=\"M13 2L4 14h7l-1 8 9-12h-7l1-8Z\"/>" },
  { name: "Landscaping", icon: "<path d=\"M5 19c0-8 5-14 15-14 0 10-6 15-14 15\"/><path d=\"M5 19l7-7\"/>" },
  { name: "Lawn Care", icon: "<path d=\"M12 21v-9\"/><path d=\"M12 12c0-4 3-6 7-6 0 4-3 6-7 6Z\"/><path d=\"M12 15c0-3-2-5-6-5 0 3 2 5 6 5Z\"/>" },
  { name: "Tree Service", icon: "<path d=\"M12 21v-6\"/><path d=\"M12 3l6 8h-3l4 6H5l4-6H6l6-8Z\"/>" },
  { name: "Windows", icon: "<rect x=\"4\" y=\"3\" width=\"16\" height=\"18\" rx=\"1.5\"/><path d=\"M12 3v18M4 12h16\"/>" },
  { name: "Fencing", icon: "<path d=\"M5 21V8l2-3 2 3v13M11 21V8l2-3 2 3v13M17 21V8l2-3 2 3v13\"/>" },
  { name: "Remodeling", icon: "<path d=\"M12.5 6.5L17 11M5 19l8-8\"/><path d=\"M14 4l6 6-3 3-6-6 3-3Z\"/>" },
  { name: "Pest Control", icon: "<rect x=\"8\" y=\"8\" width=\"8\" height=\"11\" rx=\"4\"/><path d=\"M12 8V5M4 12h4M16 12h4M5 18l3-2M19 18l-3-2M9 5l3-2 3 2\"/>" },
  { name: "Painting", icon: "<path d=\"M4 20c2 0 3-1 3-3l7-7 3 3-7 7c-2 0-4 1-6 0Z\"/><path d=\"M14 10l5-5 2 2-5 5\"/>" },
];

export default function HomeContent() {
  return (
    <>
<section className="hero">
  <div className="beam"></div>
  <div className="beam-2"></div>
  <div className="grain"></div>
  <div className="wordmark-ghost">Empro Labs</div>
  <svg className="mark-graphic" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <linearGradient id="fgrad" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#F0A059"/>
        <stop offset="100%" stopColor="#D9662B"/>
      </linearGradient>
    </defs>
    <path d="M62 20 H150 V52 H98 V88 H138 V118 H98 V148 H150 V180 H62 Z" fill="url(#fgrad)"/>
  </svg>

  <div className="hero-inner">
    <h1>The web design agency that turns <span className="accent">visitors into paying customers.</span></h1>
    <p className="lede">Empro Labs designs and builds GoHighLevel funnels, WordPress sites, and Shopify stores that load fast and convert — plus the SEO and ads to bring customers to them.</p>
    <div className="cta-row">
      <a href="#contact" className="btn btn-primary">Get a free audit</a>
      <a href="#work" className="btn btn-ghost">See our work</a>
    </div>
  </div>

</section>

<section className="trade-strip" aria-label="Trades we build websites and marketing for">
  <div className="trade-track">
    {[0, 1].map((copy) => (
      <div className="trade-set" key={copy} aria-hidden={copy === 1 ? "true" : undefined}>
        {trades.map((t) => (
          <span className="trade-item" key={t.name}>
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" dangerouslySetInnerHTML={{ __html: t.icon }} />
            {t.name}
          </span>
        ))}
      </div>
    ))}
  </div>
</section>





<section className="phases" id="leaks">
  <div className="wrap">
    <h2>Most small businesses don't have a marketing problem. They have a follow-through problem.</h2>
    <p className="section-lede">Empro Labs exists to close the gap between the website or campaign that got promised and the customers that actually show up.</p>
    <div className="leak-grid">
      <a href="#contact" className="leak-card">
        <div className="leak-icon">
          <svg viewBox="0 0 24 24" fill="none"><path d="M8 10H16M8 14H12" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"/><path d="M4 6C4 4.9 4.9 4 6 4H18C19.1 4 20 4.9 20 6V14C20 15.1 19.1 16 18 16H10L6 19.5V16H6C4.9 16 4 15.1 4 14V6Z" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round"/><path className="icon-slash" d="M3 3L21 21" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"/></svg>
        </div>
        <h3 className="leak-title">Your last web designer went quiet</h3>
        <p>The site half-launched, the freelancer moved on to the next gig, and nobody's left who can even log into WordPress or GHL to fix it.</p>
      </a>
      <a href="#contact" className="leak-card">
        <div className="leak-icon">
          <svg viewBox="0 0 24 24" fill="none"><circle cx="12" cy="12" r="8" stroke="currentColor" strokeWidth="1.8"/><path d="M12 12L15 14" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/><path className="icon-clock-hand" d="M12 12V8" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"/></svg>
        </div>
        <h3 className="leak-title">Your ad account runs on autopilot</h3>
        <p>Nobody's watching cost-per-lead, so budget keeps burning on keywords and audiences that stopped converting months ago.</p>
      </a>
      <a href="#contact" className="leak-card">
        <div className="leak-icon">
          <svg viewBox="0 0 24 24" fill="none"><path className="icon-blink" d="M12 16.5V16.51" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round"/><path d="M12 7.5C13.4 7.5 14.5 8.6 14.5 10C14.5 11.9 12 12 12 14" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/><circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="1.8"/></svg>
        </div>
        <h3 className="leak-title">Nobody owns the outcome</h3>
        <p>Your website, your ads, and your rankings all report activity, but no one can say which one is actually producing paying customers.</p>
      </a>
    </div>
  </div>
</section>


<section className="solutions">
  <div className="wrap">
    <h2>A website, visibility, and follow-up that work as one system</h2>
    <p className="section-lede">Every part below is connected: the site that captures the lead, the searches and ads that bring people in, and the follow-up that turns them into booked jobs.</p>

    <div className="solution-grid">

      <div className="solution-card">
        <span className="card-icon"><svg viewBox="0 0 24 24" fill="none" width="18" height="18" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="9"/><path d="M3 12h18M12 3c2.5 2.6 3.8 5.6 3.8 9S14.5 18.4 12 21c-2.5-2.6-3.8-5.6-3.8-9S9.5 5.6 12 3Z"/></svg></span>
        <div className="mockup">
          <div className="chrome-dots"><i></i><i></i></div>
          <div className="bar full"></div>
          <div className="bar w70"></div>
          <div className="bar w45"></div>
          <a href="#contact" className="quote-btn">Get a quote</a>
          <span className="cursor-tap"><svg viewBox="0 0 24 24" fill="none"><path d="M5 3L5 19L9.5 15L12.5 21L15 19.5L12 13.5L18 13L5 3Z" fill="#F5F1EA" stroke="#0B0906" strokeWidth="1"/></svg></span>
        </div>
        <div className="float-chip" id="notifChip">
          <div className="check"><svg viewBox="0 0 16 16" fill="none"><path d="M3 8.5L6.2 11.5L13 4.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg></div>
          <div className="chip-text"><b id="notifTitle">New quote request</b><span id="notifSub">Straight into your CRM</span></div>
          <span className="tag" id="notifTag">Lead</span>
        </div>
        <div className="solution-foot">
          <p><b>A website turns visits into opportunities.</b> Service pages, conversion paths, and tracking built around the jobs you want.</p>
          <a href="#contact" className="arrow">↗</a>
        </div>
      </div>

      <div className="solution-card">
        <span className="card-icon"><svg viewBox="0 0 24 24" fill="none" width="18" height="18" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"><path d="M12 21s7-5.6 7-11a7 7 0 1 0-14 0c0 5.4 7 11 7 11Z"/><circle cx="12" cy="10" r="2.5"/></svg></span>
        <div className="mockup mk story" data-loop="8500">
          <div className="mk-search"><svg viewBox="0 0 24 24" fill="none" width="14" height="14"><circle cx="11" cy="11" r="6.5" stroke="currentColor" strokeWidth="2"/><path d="M16 16L20 20" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/></svg><span id="typedQuery"></span><i className="mk-caret"></i></div>
          <div className="mk-map">
            <span className="mk-pin mk-pin-a" data-on="700" data-off="7800"></span>
            <span className="mk-pin mk-pin-b" data-on="1100" data-off="7800"></span>
            <span className="mk-pin mk-pin-top" data-on="1700" data-off="7800"><i>1</i></span>
          </div>
          <div className="mk-result" data-on="2900" data-off="7800"><b>Your business</b><span>Top local result</span></div>
        </div>
        <div className="solution-foot">
          <p><b>Local visibility puts you in the right searches.</b> Google Business Profile, city relevance, and review signals working together.</p>
          <a href="#contact" className="arrow">↗</a>
        </div>
      </div>

      <div className="solution-card">
        <span className="card-icon"><svg viewBox="0 0 24 24" fill="none" width="18" height="18" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"><path d="M4 10v4a1 1 0 0 0 1 1h2l6 4V5L7 9H5a1 1 0 0 0-1 1Z"/><path d="M17 9.5a4 4 0 0 1 0 5"/></svg></span>
        <div className="mockup mk">
          <div className="mk-head"><span>Campaign performance</span><em className="mk-badge"><i className="mk-live"></i>Active</em></div>
          <div className="mk-chart">
            <div className="mk-bars"><i style={{ "--h": "18%" }}></i><i style={{ "--h": "30%" }}></i><i style={{ "--h": "26%" }}></i><i style={{ "--h": "44%" }}></i><i style={{ "--h": "38%" }}></i><i style={{ "--h": "60%" }}></i><i style={{ "--h": "76%" }}></i></div>
            <svg className="mk-trend" viewBox="0 0 100 40" preserveAspectRatio="none"><path d="M4 34 L20 27 L36 30 L52 19 L68 22 L84 10 L98 3" pathLength="1"/></svg>
            <span className="mk-pop mk-pop-a">New lead</span>
            <span className="mk-pop mk-pop-b">Booked</span>
          </div>
          <div className="mk-foot2"><span>Leads</span><span>Bookings</span></div>
        </div>
        <div className="solution-foot">
          <p><b>Paid acquisition creates demand you can measure.</b> Google Ads and LSA readiness connected to the same lead journey.</p>
          <a href="#contact" className="arrow">↗</a>
        </div>
      </div>

    </div>

    <div className="solution-grid" style={{ marginTop: "22px" }}>

      <div className="solution-card">
        <span className="card-icon"><svg viewBox="0 0 24 24" fill="none" width="18" height="18" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"><rect x="5" y="8" width="14" height="11" rx="3.5"/><path d="M12 4v4M9.5 13.2v.01M14.5 13.2v.01M9.5 16h5"/></svg></span>
        <div className="mockup mk story" data-loop="11500">
          <div className="mk-head"><span><i className="mk-live"></i>Lead assistant</span></div>
          <div className="mk-thread">
            <div className="mk-bubble mk-in" data-on="400" data-off="10800">Do you repair roof leaks?</div>
            <div className="mk-bubble mk-out" data-on="1300" data-off="2600"><span className="mk-typing"><i></i><i></i><i></i></span></div>
            <div className="mk-bubble mk-out" data-on="2600" data-off="10800">Yes! What ZIP code is the property in?</div>
            <div className="mk-bubble mk-in" data-on="4400" data-off="10800">37129</div>
            <div className="mk-bubble mk-out" data-on="5200" data-off="6500"><span className="mk-typing"><i></i><i></i><i></i></span></div>
            <div className="mk-bubble mk-out" data-on="6500" data-off="10800">Got it. Want an estimate this week?</div>
            <div className="mk-alert" data-on="7900" data-off="10800"><svg viewBox="0 0 16 16" fill="none" width="12" height="12"><path d="M3 8.5L6.2 11.5L13 4.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>Lead captured, your team is alerted</div>
          </div>
        </div>
        <div className="solution-foot">
          <p><b>AI chat answers while intent is still high.</b> An immediate first response that captures job details and alerts your team.</p>
          <a href="#contact" className="arrow">↗</a>
        </div>
      </div>

      <div className="solution-card">
        <span className="card-icon"><svg viewBox="0 0 24 24" fill="none" width="18" height="18" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"><path d="M5 4h4l2 5-2.5 1.5a11 11 0 0 0 5 5L15 13l5 2v4a2 2 0 0 1-2 2C9.5 21 3 14.5 3 6a2 2 0 0 1 2-2Z"/></svg></span>
        <div className="mockup mk mk-call story" data-loop="8800">
          <div className="mk-callzone">
            <div className="mk-callstate mk-ringing" data-on="0" data-off="2900">
              <span className="mk-ico"><svg viewBox="0 0 24 24" fill="none" width="20" height="20"><path d="M5 4h4l2 5-2.5 1.5a11 11 0 0 0 5 5L15 13l5 2v4a2 2 0 0 1-2 2C9.5 21 3 14.5 3 6a2 2 0 0 1 2-2Z" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round"/></svg></span><b>Incoming call</b><span className="mk-sub">Customer · 8:42 PM</span>
            </div>
            <div className="mk-callstate" data-on="2900" data-off="8200">
              <span className="mk-ico missed"><svg viewBox="0 0 24 24" fill="none" width="20" height="20"><path d="M5 4h4l2 5-2.5 1.5a11 11 0 0 0 5 5L15 13l5 2v4a2 2 0 0 1-2 2C9.5 21 3 14.5 3 6a2 2 0 0 1 2-2Z" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round"/></svg></span><b>Missed call</b><span className="mk-sub">Customer · 8:42 PM</span>
            </div>
          </div>
          <div className="mk-bubble mk-out" data-on="4000" data-off="8200">Sorry we missed you! How can we help?</div>
          <div className="mk-sent" data-on="4900" data-off="8200"><svg viewBox="0 0 16 16" fill="none" width="12" height="12"><path d="M3 8.5L6.2 11.5L13 4.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>Text sent in seconds</div>
        </div>
        <div className="solution-foot">
          <p><b>Missed-call recovery keeps the conversation alive.</b> An instant personalized text when a call cannot be answered.</p>
          <a href="#contact" className="arrow">↗</a>
        </div>
      </div>

      <div className="solution-card">
        <span className="card-icon"><svg viewBox="0 0 24 24" fill="none" width="18" height="18" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"><path d="M12 3l2.7 5.6 6.1.9-4.4 4.3 1 6.1L12 17l-5.4 2.9 1-6.1L3.2 9.5l6.1-.9L12 3Z"/></svg></span>
        <div className="mockup mk story" data-loop="9800">
          <div className="mk-stars"><span className="mk-star" data-fill="1" data-on="1100" data-off="9000">★</span><span className="mk-star" data-fill="1" data-on="1480" data-off="9000">★</span><span className="mk-star" data-fill="1" data-on="1860" data-off="9000">★</span><span className="mk-star" data-fill="1" data-on="2240" data-off="9000">★</span><span className="mk-star" data-fill="1" data-on="2620" data-off="9000">★</span></div>
          <div className="mk-row" data-on="300" data-off="9000"><svg viewBox="0 0 24 24" fill="none" width="14" height="14"><path d="M4 12l16-8-6 16-3-7-7-1Z" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round"/></svg>Review request sent</div>
          <div className="mk-review" data-on="3300" data-off="9000">
            <span>New customer review</span>
            <i data-fill="1" data-on="3900" data-off="9000"></i>
            <i className="short" data-fill="1" data-on="4300" data-off="9000"></i>
            <em className="mk-plus" data-on="5300" data-off="9000">+1 review</em>
          </div>
        </div>
        <div className="solution-foot">
          <p><b>Reputation workflows turn completed jobs into trust.</b> Consistent review requests and private feedback follow-up after the work.</p>
          <a href="#contact" className="arrow">↗</a>
        </div>
      </div>

    </div>

    <div className="solution-grid solution-grid-centered">

      <div className="solution-card">
        <span className="card-icon"><svg viewBox="0 0 24 24" fill="none" width="18" height="18" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"><circle cx="9" cy="8" r="3.2"/><path d="M3 20c0-3.3 2.7-5.5 6-5.5s6 2.2 6 5.5M16 5.2a3.2 3.2 0 0 1 0 5.6M18 14.8c1.8.7 3 2.4 3 5.2"/></svg></span>
        <div className="mockup mk story" data-loop="9800">
          <div className="mk-head"><span>Past customers</span><span className="mk-live-txt"><i className="mk-live"></i>Reaching out</span></div>
          <div className="mk-dots"><i data-fill="1" data-on="500" data-off="9000"></i><i data-fill="1" data-on="710" data-off="9000"></i><i data-fill="1" data-on="920" data-off="9000"></i><i className="rep" data-fill="1" data-on="1130" data-off="9000"></i><i data-fill="1" data-on="1340" data-off="9000"></i><i data-fill="1" data-on="1550" data-off="9000"></i><i data-fill="1" data-on="1760" data-off="9000"></i><i data-fill="1" data-on="1970" data-off="9000"></i><i className="rep" data-fill="1" data-on="2180" data-off="9000"></i><i data-fill="1" data-on="2390" data-off="9000"></i><i data-fill="1" data-on="2600" data-off="9000"></i><i data-fill="1" data-on="2810" data-off="9000"></i><i className="rep" data-fill="1" data-on="3020" data-off="9000"></i><i data-fill="1" data-on="3230" data-off="9000"></i><i data-fill="1" data-on="3440" data-off="9000"></i><i data-fill="1" data-on="3650" data-off="9000"></i><i className="rep" data-fill="1" data-on="3860" data-off="9000"></i><i data-fill="1" data-on="4070" data-off="9000"></i></div>
          <div className="mk-progress"><i data-fill="1" data-on="500" data-off="9000"></i></div>
          <div className="mk-alert" data-on="5800" data-off="9000"><svg viewBox="0 0 16 16" fill="none" width="12" height="12"><path d="M3 8.5L6.2 11.5L13 4.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>Replies coming in</div>
        </div>
        <div className="solution-foot">
          <p><b>Reactivation brings past customers back.</b> Relevant follow-up to old opportunities and customers already in your database.</p>
          <a href="#contact" className="arrow">↗</a>
        </div>
      </div>

      <div className="solution-card">
        <span className="card-icon"><svg viewBox="0 0 24 24" fill="none" width="18" height="18" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="4" width="6" height="6" rx="1.5"/><rect x="15" y="14" width="6" height="6" rx="1.5"/><path d="M9 7h3a3 3 0 0 1 3 3v4"/></svg></span>
        <div className="mockup calendar-mockup">
          <div className="cal-head"><b>This week</b><span className="badge-pill">2 bookings</span></div>
          <div className="cal-days"><span>M</span><span>T</span><span>W</span><span>T</span><span>F</span></div>
          <div className="cal-grid" id="calGrid">
            <a href="#contact" data-day="Monday, 10:00am"></a>
            <a href="#contact" data-day="Tuesday, 11:30am"></a>
            <a href="#contact" data-day="Wednesday, 1:00pm"></a>
            <a href="#contact" data-day="Thursday, 11:00am"></a>
            <a href="#contact" data-day="Friday, 3:00pm"></a>
            <a href="#contact" data-day="Monday, 3:30pm"></a>
            <a href="#contact" className="slot-booked" id="bookedSlot" data-day="Thursday, 2:00pm">2:00</a>
            <a href="#contact" data-day="Wednesday, 4:00pm"></a>
            <a href="#contact" data-day="Tuesday, 9:00am"></a>
            <a href="#contact" data-day="Friday, 10:30am"></a>
          </div>
        </div>
        <div className="float-chip cal-chip" id="calChip">
          <div className="chip-text"><b id="calDay">Thursday, 2:00pm</b><span>Estimate booked straight onto your calendar</span></div>
          <span className="tag">Scheduled</span>
        </div>
        <div className="solution-foot">
          <p><b>One pipeline makes the next step visible.</b> Every call, form, reply, estimate, and booking in one accountable system.</p>
          <a href="#contact" className="arrow">↗</a>
        </div>
      </div>

    </div>
  </div>
</section>


<section className="hub-section">
  <div className="wrap">
    <div className="hub-layout">
      <div className="hub-text">
        <h2>One team, plugged into every tool you already run</h2>
        <p className="section-lede">We don't rip out your stack and start over. Empro Labs plugs into your website, your CRM, and your ad accounts, and keeps them working together.</p>
        <ul className="hub-points">
          <li>Works with GoHighLevel, WordPress, and Shopify</li>
          <li>No rip-and-replace, we build on what you have</li>
          <li>One accountable team instead of three vendors</li>
        </ul>
      </div>
      <div className="hub-visual">
    <svg className="hub-diagram" viewBox="0 0 640 400" role="img" aria-label="Empro Labs connects your website, CRM, and ad accounts and turns them into leads, booked jobs, reviews, and reporting">
      <defs>
        <radialGradient id="hubGlow" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#F0A059" stopOpacity="0.35" />
          <stop offset="100%" stopColor="#F0A059" stopOpacity="0" />
        </radialGradient>
      </defs>
      <text x="8" y="38" className="hub-col-title">Your tools</text>
      <text x="632" y="38" textAnchor="end" className="hub-col-title">What you get</text>
      <g className="hub-lines">
        <path className="hub-line" d="M184 92 C 230 92, 222 200, 268 200" />
        <path className="hub-line" d="M184 166 C 230 166, 222 200, 268 200" />
        <path className="hub-line" d="M184 240 C 230 240, 222 200, 268 200" />
        <path className="hub-line" d="M184 314 C 230 314, 222 200, 268 200" />
        <path className="hub-line" d="M372 200 C 418 200, 410 92, 456 92" />
        <path className="hub-line" d="M372 200 C 418 200, 410 166, 456 166" />
        <path className="hub-line" d="M372 200 C 418 200, 410 240, 456 240" />
        <path className="hub-line" d="M372 200 C 418 200, 410 314, 456 314" />
      </g>
      <circle cx="320" cy="200" r="84" fill="url(#hubGlow)" />
      <circle cx="320" cy="200" r="66" className="hub-ring hub-ring-a" />
      <circle cx="320" cy="200" r="66" className="hub-ring hub-ring-b" />
      <g>
        <g transform="translate(8 64)" className="hub-tile">
          <rect width="176" height="56" rx="14" />
          <circle cx="30" cy="28" r="17" className="hub-glyph-bg" />
          <g transform="translate(30 28)"><text x="0" y="4" textAnchor="middle" fontSize="9.5" fontWeight="800" fill="#4C8DFF" fontFamily="inherit">GHL</text></g>
          <text x="58" y="25" className="hub-label">GoHighLevel</text>
          <text x="58" y="42" className="hub-sub">CRM and funnels</text>
        </g>
        <g transform="translate(8 138)" className="hub-tile">
          <rect width="176" height="56" rx="14" />
          <circle cx="30" cy="28" r="17" className="hub-glyph-bg" />
          <g transform="translate(30 28)"><g transform="translate(-9 -9) scale(0.75)"><path fill="#6BA6D6" d="M21.469 6.825c.84 1.537 1.318 3.3 1.318 5.175 0 3.979-2.156 7.456-5.363 9.325l3.295-9.527c.615-1.54.82-2.771.82-3.864 0-.405-.026-.78-.07-1.11m-7.981.105c.647-.03 1.232-.105 1.232-.105.582-.075.514-.93-.067-.899 0 0-1.755.135-2.88.135-1.064 0-2.85-.15-2.85-.15-.585-.03-.661.855-.075.885 0 0 .54.061 1.125.09l1.68 4.605-2.37 7.08L5.354 6.9c.649-.03 1.234-.1 1.234-.1.585-.075.516-.93-.065-.896 0 0-1.746.138-2.874.138-.2 0-.438-.008-.69-.015C4.911 3.15 8.235 1.215 12 1.215c2.809 0 5.365 1.072 7.286 2.833-.046-.003-.091-.009-.141-.009-1.06 0-1.812.923-1.812 1.914 0 .89.513 1.643 1.06 2.531.411.72.89 1.643.89 2.977 0 .915-.354 1.994-.821 3.479l-1.075 3.585-3.9-11.61.001.014zM12 22.784c-1.059 0-2.081-.153-3.048-.437l3.237-9.406 3.315 9.087c.024.053.05.101.078.149-1.12.393-2.325.609-3.582.609M1.211 12c0-1.564.336-3.05.935-4.39L7.29 21.709C3.694 19.96 1.212 16.271 1.211 12M12 0C5.385 0 0 5.385 0 12s5.385 12 12 12 12-5.385 12-12S18.615 0 12 0"/></g></g>
          <text x="58" y="25" className="hub-label">WordPress</text>
          <text x="58" y="42" className="hub-sub">Custom websites</text>
        </g>
        <g transform="translate(8 212)" className="hub-tile">
          <rect width="176" height="56" rx="14" />
          <circle cx="30" cy="28" r="17" className="hub-glyph-bg" />
          <g transform="translate(30 28)"><g transform="translate(-9 -9) scale(0.75)"><path fill="#95BF47" d="M15.337 23.979l7.216-1.561s-2.604-17.613-2.625-17.73c-.018-.116-.114-.192-.211-.192s-1.929-.136-1.929-.136-1.275-1.274-1.439-1.411c-.045-.037-.075-.057-.121-.074l-.914 21.104h.023zM11.71 11.305s-.81-.424-1.774-.424c-1.447 0-1.504.906-1.504 1.141 0 1.232 3.24 1.715 3.24 4.629 0 2.295-1.44 3.76-3.406 3.76-2.354 0-3.54-1.465-3.54-1.465l.646-2.086s1.245 1.066 2.28 1.066c.675 0 .975-.545.975-.932 0-1.619-2.654-1.694-2.654-4.359-.034-2.237 1.571-4.416 4.827-4.416 1.257 0 1.875.361 1.875.361l-.945 2.715-.02.01zM11.17.83c.136 0 .271.038.405.135-.984.465-2.064 1.639-2.508 3.992-.656.213-1.293.405-1.889.578C7.697 3.75 8.951.84 11.17.84V.83zm1.235 2.949v.135c-.754.232-1.583.484-2.394.736.466-1.777 1.333-2.645 2.085-2.971.193.501.309 1.176.309 2.1zm.539-2.234c.694.074 1.141.867 1.429 1.755-.349.114-.735.231-1.158.366v-.252c0-.752-.096-1.371-.271-1.871v.002zm2.992 1.289c-.02 0-.06.021-.078.021s-.289.075-.714.21c-.423-1.233-1.176-2.37-2.508-2.37h-.115C12.135.209 11.669 0 11.265 0 8.159 0 6.675 3.877 6.21 5.846c-1.194.365-2.063.636-2.16.674-.675.213-.694.232-.772.87-.075.462-1.83 14.063-1.83 14.063L15.009 24l.927-21.166z"/></g></g>
          <text x="58" y="25" className="hub-label">Shopify</text>
          <text x="58" y="42" className="hub-sub">Online store</text>
        </g>
        <g transform="translate(8 286)" className="hub-tile">
          <rect width="176" height="56" rx="14" />
          <circle cx="30" cy="28" r="17" className="hub-glyph-bg" />
          <g transform="translate(30 28)"><g fill="none" stroke="#F0A059" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"><path d="M-7 -2v4a1 1 0 0 0 1 1h1.5l5 3.5v-13l-5 3.5H-6a1 1 0 0 0-1 1Z"/><path d="M7 -3a4 4 0 0 1 0 6"/></g></g>
          <text x="58" y="25" className="hub-label">Google Ads</text>
          <text x="58" y="42" className="hub-sub">Search campaigns</text>
        </g>
        <g transform="translate(456 64)" className="hub-tile">
          <rect width="176" height="56" rx="14" />
          <circle cx="30" cy="28" r="17" className="hub-glyph-bg" />
          <g transform="translate(30 28)"><g fill="none" stroke="#F0A059" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"><circle cx="0" cy="-3" r="3.2"/><path d="M-7 8c0-3.2 3-5 7-5s7 1.8 7 5"/></g></g>
          <text x="58" y="25" className="hub-label">New leads</text>
          <text x="58" y="42" className="hub-sub">Captured and routed</text>
        </g>
        <g transform="translate(456 138)" className="hub-tile">
          <rect width="176" height="56" rx="14" />
          <circle cx="30" cy="28" r="17" className="hub-glyph-bg" />
          <g transform="translate(30 28)"><g fill="none" stroke="#F0A059" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"><rect x="-7.5" y="-6.5" width="15" height="14" rx="2"/><path d="M-7.5 -1.5h15M-3 -9v4M3 -9v4"/></g></g>
          <text x="58" y="25" className="hub-label">Booked jobs</text>
          <text x="58" y="42" className="hub-sub">On your calendar</text>
        </g>
        <g transform="translate(456 212)" className="hub-tile">
          <rect width="176" height="56" rx="14" />
          <circle cx="30" cy="28" r="17" className="hub-glyph-bg" />
          <g transform="translate(30 28)"><g fill="none" stroke="#F0A059" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"><path d="M0 -8l2.4 5 5.4.8-3.9 3.8.9 5.4L0 4.4l-4.8 2.6.9-5.4L-7.8 -2.2l5.4-.8L0 -8Z"/></g></g>
          <text x="58" y="25" className="hub-label">Reviews</text>
          <text x="58" y="42" className="hub-sub">After every job</text>
        </g>
        <g transform="translate(456 286)" className="hub-tile">
          <rect width="176" height="56" rx="14" />
          <circle cx="30" cy="28" r="17" className="hub-glyph-bg" />
          <g transform="translate(30 28)"><g fill="none" stroke="#F0A059" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"><path d="M-7 7V-1M0 7V-7M7 7V2"/></g></g>
          <text x="58" y="25" className="hub-label">Clear reporting</text>
          <text x="58" y="42" className="hub-sub">Cost per lead, tracked</text>
        </g>
      </g>
      <circle cx="320" cy="200" r="46" className="hub-core-disc" />
      <image href="/brand/icon.png" x="296" y="176" width="48" height="48" />
      <g className="hub-pulses">
        <circle r="2.6" className="hub-pulse"><animateMotion dur="3.2s" begin="0.00s" repeatCount="indefinite" path="M184 92 C 230 92, 222 200, 268 200" /></circle>
        <circle r="2.6" className="hub-pulse"><animateMotion dur="3.2s" begin="0.55s" repeatCount="indefinite" path="M184 166 C 230 166, 222 200, 268 200" /></circle>
        <circle r="2.6" className="hub-pulse"><animateMotion dur="3.2s" begin="1.10s" repeatCount="indefinite" path="M184 240 C 230 240, 222 200, 268 200" /></circle>
        <circle r="2.6" className="hub-pulse"><animateMotion dur="3.2s" begin="1.65s" repeatCount="indefinite" path="M184 314 C 230 314, 222 200, 268 200" /></circle>
        <circle r="2.6" className="hub-pulse"><animateMotion dur="3.2s" begin="1.30s" repeatCount="indefinite" path="M372 200 C 418 200, 410 92, 456 92" /></circle>
        <circle r="2.6" className="hub-pulse"><animateMotion dur="3.2s" begin="1.85s" repeatCount="indefinite" path="M372 200 C 418 200, 410 166, 456 166" /></circle>
        <circle r="2.6" className="hub-pulse"><animateMotion dur="3.2s" begin="2.40s" repeatCount="indefinite" path="M372 200 C 418 200, 410 240, 456 240" /></circle>
        <circle r="2.6" className="hub-pulse"><animateMotion dur="3.2s" begin="2.95s" repeatCount="indefinite" path="M372 200 C 418 200, 410 314, 456 314" /></circle>
      </g>
    </svg>
    <div className="hub-mobile">
      <div className="hub-mobile-group">
        <h4>Your tools</h4>
        <ul><li>GoHighLevel</li><li>WordPress</li><li>Shopify</li><li>Google Ads</li></ul>
      </div>
      <div className="hub-mobile-node"><img src="/brand/icon.png" alt="Empro Labs" width="40" height="40" /></div>
      <div className="hub-mobile-group">
        <h4>What you get</h4>
        <ul><li>New leads</li><li>Booked jobs</li><li>Reviews</li><li>Clear reporting</li></ul>
      </div>
    </div>
      </div>
    </div>
  </div>
</section>


<section className="services" id="services">
  <div className="wrap">
    <h2>Website design, SEO, and ads — run by one accountable team</h2>
    <p className="section-lede">We don't hand off a website and disappear. Empro Labs stays on as the team behind your online presence, from the first page live to the tenth campaign.</p>

    <div className="service-list">
      <details className="service">
        <summary>
          <div className="icon"><svg viewBox="0 0 24 24" fill="none"><path d="M9 6L3 12L9 18" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/><path d="M15 6L21 12L15 18" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/></svg></div>
          <div><h3>GHL, WordPress &amp; Shopify web development</h3><p>Funnels, rebuilds, and stores — architected to handle real traffic, not just a demo.</p></div>
          <span className="chev">＋</span>
        </summary>
        <div className="service-more">
          <ul>
            <li>Custom GoHighLevel funnels built to convert, not just look good</li>
            <li>Lead Connector CRM setup — calling, texting, and review requests configured correctly</li>
            <li>WordPress rebuilds focused on speed and SEO structure</li>
            <li>Shopify storefronts built to sell, not just browse</li>
          </ul>
        </div>
      </details>

      <details className="service">
        <summary>
          <div className="icon"><svg viewBox="0 0 24 24" fill="none"><circle cx="10.5" cy="10.5" r="6.5" stroke="currentColor" strokeWidth="1.8" /><path d="M20 20L15.2 15.2" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" /></svg></div>
          <div><h3>SEO</h3><p>Technical audits, on-page fixes, and content that actually targets what your customers search for.</p></div>
          <span className="chev">＋</span>
        </summary>
        <div className="service-more">
          <ul>
            <li>Full technical and on-page audit before any changes</li>
            <li>Content built around real search volume, not guesses</li>
            <li>Local SEO for businesses that serve a city or region</li>
          </ul>
        </div>
      </details>

      <details className="service">
        <summary>
          <div className="icon"><svg viewBox="0 0 24 24" fill="none"><path d="M4 10V14C4 14.55 4.45 15 5 15H7L10 19V5L7 9H5C4.45 9 4 9.45 4 10Z" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round" /><path d="M14 9C15 9.8 15.6 10.85 15.6 12C15.6 13.15 15 14.2 14 15" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" /><path d="M16.5 6.5C18.2 7.9 19.2 9.85 19.2 12C19.2 14.15 18.2 16.1 16.5 17.5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" /></svg></div>
          <div><h3>Ads management</h3><p>Paid search and social campaigns managed by a team that reports the numbers that actually matter.</p></div>
          <span className="chev">＋</span>
        </summary>
        <div className="service-more">
          <ul>
            <li>Campaigns built around your actual sales funnel, not a generic template</li>
            <li>Weekly budget reallocation toward what's actually converting</li>
            <li>You see cost per lead and cost per booked job, not just impressions</li>
          </ul>
        </div>
      </details>

      <details className="service">
        <summary>
          <div className="icon"><svg viewBox="0 0 24 24" fill="none"><path d="M12 3L4 6.5V11C4 15.5 7.4 19.7 12 21C16.6 19.7 20 15.5 20 11V6.5L12 3Z" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round"/><path d="M9 12L11 14L15.5 9.5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/></svg></div>
          <div><h3>Ongoing support</h3><p>An SLA-backed team on call for fixes, updates, and the changes that come next.</p></div>
          <span className="chev">＋</span>
        </summary>
        <div className="service-more">
          <ul>
            <li>Guaranteed response times, in writing</li>
            <li>The same specialists who built it — no re-explaining your business</li>
            <li>Monthly capacity for new pages and campaigns, not just fixes</li>
          </ul>
        </div>
      </details>
    </div>
  </div>
</section>


<section className="process3" id="process">
  <div className="wrap">
    <h2>Three steps from a leaky site to booked jobs</h2>
    <p className="section-lede">One audit, one build, then ongoing tuning. Here is how every project moves through.</p>

    <div className="p3-board">
      <div className="p3-cols">
        <div className="p3-col">
          <div className="p3-numrow"><span className="p3-num">1</span></div>
          <h3>The audit</h3>
          <p>We map where your website, SEO, and ad spend are leaking customers. You get the plan either way, and it's free.</p>
        </div>
        <div className="p3-col">
          <div className="p3-numrow"><span className="p3-num">2</span></div>
          <h3>The build</h3>
          <p>We rebuild the site, funnel, or campaign in weeks and test everything before it reaches real customers.</p>
        </div>
        <div className="p3-col">
          <div className="p3-numrow p3-numrow-last"><span className="p3-num">3</span></div>
          <h3>The launch</h3>
          <p>Everything goes live, every lead gets a fast reply, and we keep tuning based on what the numbers show.</p>
        </div>
      </div>
      <div className="p3-lanes" aria-hidden="true">
        <div className="p3-pill">
          <i></i><span className="p3-task">Website pages</span>
          <span className="p3-status"><em className="s1">Audited</em><em className="s2">Building</em><em className="s3"><svg viewBox="0 0 16 16" fill="none" width="11" height="11"><path d="M3 8.5L6.2 11.5L13 4.5" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"/></svg>Live</em></span>
        </div>
        <div className="p3-pill">
          <i></i><span className="p3-task">Lead follow-up</span>
          <span className="p3-status"><em className="s1">Audited</em><em className="s2">Building</em><em className="s3"><svg viewBox="0 0 16 16" fill="none" width="11" height="11"><path d="M3 8.5L6.2 11.5L13 4.5" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"/></svg>Live</em></span>
        </div>
        <div className="p3-pill">
          <i></i><span className="p3-task">Ad campaigns</span>
          <span className="p3-status"><em className="s1">Audited</em><em className="s2">Building</em><em className="s3"><svg viewBox="0 0 16 16" fill="none" width="11" height="11"><path d="M3 8.5L6.2 11.5L13 4.5" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"/></svg>Live</em></span>
        </div>
        <div className="p3-pill">
          <i></i><span className="p3-task">Local SEO</span>
          <span className="p3-status"><em className="s1">Audited</em><em className="s2">Building</em><em className="s3"><svg viewBox="0 0 16 16" fill="none" width="11" height="11"><path d="M3 8.5L6.2 11.5L13 4.5" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"/></svg>Live</em></span>
        </div>
        <div className="p3-pill">
          <i></i><span className="p3-task">Lead tracking</span>
          <span className="p3-status"><em className="s1">Audited</em><em className="s2">Building</em><em className="s3"><svg viewBox="0 0 16 16" fill="none" width="11" height="11"><path d="M3 8.5L6.2 11.5L13 4.5" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"/></svg>Live</em></span>
        </div>
        <div className="p3-pill">
          <i></i><span className="p3-task">Review requests</span>
          <span className="p3-status"><em className="s1">Audited</em><em className="s2">Building</em><em className="s3"><svg viewBox="0 0 16 16" fill="none" width="11" height="11"><path d="M3 8.5L6.2 11.5L13 4.5" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"/></svg>Live</em></span>
        </div>
      </div>
    </div>
  </div>
</section>



<section className="stats-band">
  <div className="wrap">
    <h2>One team, one invoice, no surprises</h2>
    <p className="section-lede">Straightforward terms so you know what you're agreeing to before you sign anything.</p>
    <div className="stats-grid">
      <div className="stat-block"><b>Fixed quote</b><span>Scoped and approved before we start — the number doesn't move</span></div>
      <div className="stat-block"><b>2–4 wks</b><span>Typical time to a live, working site</span></div>
      <div className="stat-block"><b>Month to month</b><span>No multi-year lock-in contract</span></div>
      <div className="stat-block"><b>Real specialists</b><span>Direct access to who built it, not a ticket queue</span></div>
    </div>
  </div>
</section>


<section className="services">
  <div className="wrap">
    <h2>Who we're built for</h2>
    <p className="section-lede">We turn down work that isn't a fit for either of us — here's how to tell in advance.</p>
    <div className="service-list">
      <details className="service" open>
        <summary>
          <div className="icon"><svg viewBox="0 0 24 24" fill="none"><path d="M5 12.5L9.5 17L19 6.5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/></svg></div>
          <div><h3>This is a fit if</h3><p>Any of these sound like where you're at right now.</p></div>
        </summary>
        <div className="service-more">
          <ul>
            <li>You need a website that converts, not just looks good in a screenshot</li>
            <li>You're tired of re-explaining your business to a new freelancer every few months</li>
            <li>You want weekly proof of progress, not a status report</li>
            <li>You're on GHL, WordPress, Shopify, or a custom stack and need it to actually convert</li>
            <li>You've outgrown what a website builder like Wix or Squarespace can actually do for your business</li>
            <li>You need a custom website developer or custom software development company for something a template can't handle</li>
          </ul>
        </div>
      </details>
      <details className="service" open>
        <summary>
          <div className="icon"><svg viewBox="0 0 24 24" fill="none"><path d="M6 6L18 18M18 6L6 18" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"/></svg></div>
          <div><h3>Probably not a fit if</h3><p>We'd rather tell you now than after a wasted call.</p></div>
        </summary>
        <div className="service-more">
          <ul>
            <li>You want the cheapest day-rate available, not a scoped outcome</li>
            <li>You need a single static page with no ongoing changes</li>
            <li>You're not ready to have a specialist on call after launch</li>
            <li>You want guaranteed rankings or revenue promised on the first call</li>
          </ul>
        </div>
      </details>
    </div>
  </div>
</section>


<section className="work" id="work">
  <div className="wrap">
    <h2>Recent work</h2>
    <p className="section-lede">A few of the live sites we've built. Open any of them to see the real thing.</p>
    <div className="portfolio-grid">
      {[
        { name: "Jeff Flowers Insurance", tag: "GoHighLevel website", url: "https://jflowersinsurance.com" },
        { name: "PracForge", tag: "WordPress build", url: "https://pracforge.com" },
        { name: "Mangoholic", tag: "WooCommerce build", url: "https://mangoholicae.com" },
      ].map((p) => (
        <div className="portfolio-card show" key={p.name}>
          <a className="portfolio-thumb portfolio-thumb-shot" href={p.url} target="_blank" rel="noopener noreferrer">
            <img src={`https://s0.wp.com/mshots/v1/${encodeURIComponent(p.url)}?w=800`} alt={`${p.name} live screenshot`} loading="lazy" />
          </a>
          <div className="portfolio-body">
            <span className="portfolio-tag">{p.tag}</span>
            <h3>{p.name}</h3>
          </div>
        </div>
      ))}
    </div>
    <p style={{ marginTop: "28px" }}><a href="/portfolio" className="btn btn-ghost">See all projects</a></p>
  </div>
</section>


<section className="services">
  <div className="wrap">
    <h2>Frequently asked questions</h2>
    <p className="section-lede">The things people usually ask before the first call.</p>
    <div className="service-list">
      <details className="service">
        <summary>
          <div><h3>What does Empro Labs actually do for a small business?</h3></div>
          <span className="chev">＋</span>
        </summary>
        <div className="service-more">
          <p>We build and manage the website, GHL funnel, or Shopify store behind your business, plus the SEO and ads that bring customers to it — as one accountable team instead of a rotating cast of freelancers.</p>
        </div>
      </details>
      <details className="service">
        <summary>
          <div><h3>How is this priced?</h3></div>
          <span className="chev">＋</span>
        </summary>
        <div className="service-more">
          <p>Every engagement starts with a scoped, fixed quote before any work begins. No hourly guesswork, no surprise invoices.</p>
        </div>
      </details>
      <details className="service">
        <summary>
          <div><h3>How fast can you start?</h3></div>
          <span className="chev">＋</span>
        </summary>
        <div className="service-more">
          <p>Most engagements begin with an audit within a week of the first call, and a working plan inside two weeks.</p>
        </div>
      </details>
      <details className="service">
        <summary>
          <div><h3>Do you only build new projects, or fix existing ones?</h3></div>
          <span className="chev">＋</span>
        </summary>
        <div className="service-more">
          <p>Both. A large share of our work is rescuing a website or campaign a previous freelancer or agency left unfinished.</p>
        </div>
      </details>
      <details className="service">
        <summary>
          <div><h3>Which platforms do you work with?</h3></div>
          <span className="chev">＋</span>
        </summary>
        <div className="service-more">
          <p>Custom code, GHL, WordPress, and Shopify — whichever fits what you're actually trying to do, not whichever we're most incentivized to sell.</p>
        </div>
      </details>
      <details className="service">
        <summary>
          <div><h3>What happens after launch?</h3></div>
          <span className="chev">＋</span>
        </summary>
        <div className="service-more">
          <p>We stay on. Ongoing support is a standard part of every engagement, not an upsell.</p>
        </div>
      </details>
    </div>
  </div>
</section>


<section className="cta-banner">
  <div className="wrap">
    <div className="cta-panel">
      <h2>Ready to stop losing customers to a broken funnel?</h2>
      <p>Tell us what's not working — your site, your rankings, or your ads. We'll reply with a scoped plan, not a sales deck.</p>
      <a href="#contact" className="btn btn-primary">Get a free audit</a>
    </div>
  </div>
</section>


<section className="contact" id="contact">
  <div className="wrap">
    <div className="contact-grid">
      <div>
        <h2>Tell us what you're building</h2>
        <p className="section-lede">Fill this in and we'll reply within one business day with next steps — no sales call required first.</p>
        <ul className="contact-info">
          <li><span>Email</span><a href="mailto:hello@emprolabs.dev">hello@emprolabs.dev</a></li>
          <li><span>Response time</span><span>Within 1 business day</span></li>
        </ul>
      </div>

      <GHLContactForm />
    </div>
  </div>
</section>
    </>
  );
}
