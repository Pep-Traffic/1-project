import GHLContactForm from "./GHLContactForm";

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
          <svg viewBox="0 0 24 24" fill="none"><circle cx="12" cy="12" r="8" stroke="currentColor" strokeWidth="1.8"/><path className="icon-clock-hand" d="M12 8V12L15 14" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/></svg>
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
        <div className="mockup mk">
          <div className="mk-search"><svg viewBox="0 0 24 24" fill="none" width="14" height="14"><circle cx="11" cy="11" r="6.5" stroke="currentColor" strokeWidth="2"/><path d="M16 16L20 20" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/></svg><span>roofing contractor near me</span></div>
          <div className="mk-map">
            <span className="mk-pin mk-pin-a"></span><span className="mk-pin mk-pin-b"></span><span className="mk-pin mk-pin-top"><i>1</i></span>
          </div>
          <div className="mk-result"><b>Your business</b><span>Top local result</span></div>
        </div>
        <div className="solution-foot">
          <p><b>Local visibility puts you in the right searches.</b> Google Business Profile, city relevance, and review signals working together.</p>
          <a href="#contact" className="arrow">↗</a>
        </div>
      </div>

      <div className="solution-card">
        <span className="card-icon"><svg viewBox="0 0 24 24" fill="none" width="18" height="18" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"><path d="M4 10v4a1 1 0 0 0 1 1h2l6 4V5L7 9H5a1 1 0 0 0-1 1Z"/><path d="M17 9.5a4 4 0 0 1 0 5"/></svg></span>
        <div className="mockup mk">
          <div className="mk-head"><span>Campaign performance</span><em className="mk-badge">Active</em></div>
          <div className="mk-bars"><i style={{ height: "18%" }}></i><i style={{ height: "30%" }}></i><i style={{ height: "26%" }}></i><i style={{ height: "42%" }}></i><i style={{ height: "38%" }}></i><i style={{ height: "58%" }}></i><i style={{ height: "72%" }}></i></div>
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
        <div className="mockup mk">
          <div className="mk-head"><span><i className="mk-live"></i>Lead assistant</span></div>
          <div className="mk-bubble mk-in">Do you repair roof leaks?</div>
          <div className="mk-bubble mk-out">Yes. What ZIP code is the property in?</div>
          <div className="typing-pill"><i></i><i></i><i></i></div>
        </div>
        <div className="solution-foot">
          <p><b>AI chat answers while intent is still high.</b> An immediate first response that captures job details and alerts your team.</p>
          <a href="#contact" className="arrow">↗</a>
        </div>
      </div>

      <div className="solution-card">
        <span className="card-icon"><svg viewBox="0 0 24 24" fill="none" width="18" height="18" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"><path d="M5 4h4l2 5-2.5 1.5a11 11 0 0 0 5 5L15 13l5 2v4a2 2 0 0 1-2 2C9.5 21 3 14.5 3 6a2 2 0 0 1 2-2Z"/></svg></span>
        <div className="mockup mk mk-center">
          <span className="mk-ico"><svg viewBox="0 0 24 24" fill="none" width="22" height="22"><path d="M5 4h4l2 5-2.5 1.5a11 11 0 0 0 5 5L15 13l5 2v4a2 2 0 0 1-2 2C9.5 21 3 14.5 3 6a2 2 0 0 1 2-2Z" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round"/></svg></span>
          <b>Missed call</b>
          <span className="mk-sub">Customer · 8:42 PM</span>
          <span className="mk-sent">Text sent in seconds</span>
        </div>
        <div className="solution-foot">
          <p><b>Missed-call recovery keeps the conversation alive.</b> An instant personalized text when a call cannot be answered.</p>
          <a href="#contact" className="arrow">↗</a>
        </div>
      </div>

      <div className="solution-card">
        <span className="card-icon"><svg viewBox="0 0 24 24" fill="none" width="18" height="18" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"><path d="M12 3l2.7 5.6 6.1.9-4.4 4.3 1 6.1L12 17l-5.4 2.9 1-6.1L3.2 9.5l6.1-.9L12 3Z"/></svg></span>
        <div className="mockup mk">
          <div className="mk-stars">★★★★★</div>
          <div className="mk-row"><svg viewBox="0 0 24 24" fill="none" width="14" height="14"><path d="M12 3l2.7 5.6 6.1.9-4.4 4.3 1 6.1L12 17l-5.4 2.9 1-6.1L3.2 9.5l6.1-.9L12 3Z" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round"/></svg>Review request sent</div>
          <div className="mk-review"><span>New customer review</span><i></i><i className="short"></i></div>
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
        <div className="mockup mk">
          <div className="mk-head"><span>Past customers</span></div>
          <div className="mk-progress"><i></i></div>
          <div className="mk-row"><svg viewBox="0 0 24 24" fill="none" width="14" height="14"><path d="M4 12l16-8-6 16-3-7-7-1Z" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round"/></svg>Follow-up sent to old leads</div>
        </div>
        <div className="solution-foot">
          <p><b>Reactivation brings past customers back.</b> Relevant follow-up to old opportunities and customers already in your database.</p>
          <a href="#contact" className="arrow">↗</a>
        </div>
      </div>

      <div className="solution-card">
        <span className="card-icon"><svg viewBox="0 0 24 24" fill="none" width="18" height="18" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="4" width="6" height="6" rx="1.5"/><rect x="15" y="14" width="6" height="6" rx="1.5"/><path d="M9 7h3a3 3 0 0 1 3 3v4"/></svg></span>
        <div className="mockup mk">
          <div className="mk-cols">
            <div><em>New lead</em><span className="mk-k">Roof repair</span></div>
            <div><em>Contacted</em><span className="mk-k on">Roof repair</span></div>
            <div><em>Estimate</em><span className="mk-k on">Roof repair</span></div>
            <div><em>Booked</em><span className="mk-k">Confirmed</span></div>
          </div>
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
    <p className="section-lede">We don't rip out your stack and start over. Empro Labs plugs straight into your website, your CRM, and your ad accounts, and keeps every tool your team already uses talking to each other.</p>
    </div>

    <div className="hub-visual">
      <div className="hub-backdrop"></div>

      <div className="hub-tags-top">
        <span className="hub-tag" style={{ left: "12.9%" }}>Website</span>
        <span className="hub-tag hub-tag-offset" style={{ left: "38.6%" }}>GHL / CRM</span>
        <span className="hub-tag hub-tag-offset" style={{ left: "61.4%" }}>Ads</span>
        <span className="hub-tag" style={{ left: "87.1%" }}>Analytics</span>
      </div>

      <svg className="hub-lines" viewBox="0 0 700 560" preserveAspectRatio="none">
        {/* tag 1 — Application */}
        <path className="hub-thread" d="M90 40 C 200 46, 260 170, 350 248" />
        <path className="hub-thread" d="M90 40 C 150 66, 220 190, 340 246" />
        <path className="hub-thread" d="M90 40 C 180 26, 280 150, 360 250" />
        <path className="hub-pulse" d="M90 40 C 200 46, 260 170, 350 248" pathLength="1" style={{ animationDelay: "0s" }} />

        {/* tag 2 — Database */}
        <path className="hub-thread" d="M270 66 C 300 120, 330 190, 350 248" />
        <path className="hub-thread" d="M270 66 C 290 130, 320 200, 340 246" />
        <path className="hub-thread" d="M270 66 C 305 115, 335 185, 360 250" />
        <path className="hub-pulse" d="M270 66 C 300 120, 330 190, 350 248" pathLength="1" style={{ animationDelay: "0.4s" }} />

        {/* tag 3 — Website */}
        <path className="hub-thread" d="M430 66 C 400 120, 370 190, 350 248" />
        <path className="hub-thread" d="M430 66 C 410 130, 380 200, 360 246" />
        <path className="hub-thread" d="M430 66 C 395 115, 365 185, 340 250" />
        <path className="hub-pulse" d="M430 66 C 400 120, 370 190, 350 248" pathLength="1" style={{ animationDelay: "0.8s" }} />

        {/* tag 4 — Warehouse */}
        <path className="hub-thread" d="M610 40 C 500 46, 440 170, 350 248" />
        <path className="hub-thread" d="M610 40 C 550 66, 480 190, 340 246" />
        <path className="hub-thread" d="M610 40 C 520 26, 420 150, 360 250" />
        <path className="hub-pulse" d="M610 40 C 500 46, 440 170, 350 248" pathLength="1" style={{ animationDelay: "1.2s" }} />

        {/* hub down to each app icon */}
        <path className="hub-thread" d="M350 312 C 250 355, 120 430, 60 507" />
        <path className="hub-pulse" d="M350 312 C 250 355, 120 430, 60 507" pathLength="1" style={{ animationDelay: "0.15s" }} />
        <path className="hub-thread" d="M350 312 C 300 355, 200 435, 157 507" />
        <path className="hub-pulse" d="M350 312 C 300 355, 200 435, 157 507" pathLength="1" style={{ animationDelay: "0.5s" }} />
        <path className="hub-thread" d="M350 312 C 335 360, 270 440, 253 507" />
        <path className="hub-pulse" d="M350 312 C 335 360, 270 440, 253 507" pathLength="1" style={{ animationDelay: "0.85s" }} />
        <path className="hub-thread" d="M350 312 C 350 380, 350 450, 350 507" />
        <path className="hub-pulse" d="M350 312 C 350 380, 350 450, 350 507" pathLength="1" style={{ animationDelay: "1.2s" }} />
        <path className="hub-thread" d="M350 312 C 365 360, 430 440, 447 507" />
        <path className="hub-pulse" d="M350 312 C 365 360, 430 440, 447 507" pathLength="1" style={{ animationDelay: "1.55s" }} />
        <path className="hub-thread" d="M350 312 C 400 355, 500 435, 543 507" />
        <path className="hub-pulse" d="M350 312 C 400 355, 500 435, 543 507" pathLength="1" style={{ animationDelay: "1.9s" }} />
        <path className="hub-thread" d="M350 312 C 450 355, 580 430, 640 507" />
        <path className="hub-pulse" d="M350 312 C 450 355, 580 430, 640 507" pathLength="1" style={{ animationDelay: "2.25s" }} />
      </svg>

      <div className="hub-core">
        <span className="hub-ring hub-ring-1"></span>
        <span className="hub-ring hub-ring-2"></span>
        <span className="hub-ring hub-ring-3"></span>
        <span className="hub-node">
          <img src="/brand/icon.png" alt="Empro Labs" />
        </span>
      </div>

      <div className="hub-icons-bottom">
        <span className="hub-icon" title="GoHighLevel">
          <span className="hub-icon-mono" style={{ color: "#0B5CFF" }}>GHL</span>
        </span>
        <span className="hub-icon" title="ClickUp">
          <svg viewBox="0 0 24 24" fill="#7B68EE"><path d="M2 18.439l3.69-2.828c1.961 2.56 4.044 3.739 6.363 3.739 2.307 0 4.33-1.166 6.203-3.704L22 18.405C19.298 22.065 15.941 24 12.053 24 8.178 24 4.788 22.078 2 18.439zM12.04 6.15l-6.568 5.66-3.036-3.52L12.055 0l9.543 8.296-3.05 3.509z" /></svg>
        </span>
        <span className="hub-icon" title="Slack">
          <svg viewBox="0 0 24 24" fill="#4A154B"><path d="M5.042 15.165a2.528 2.528 0 0 1-2.52 2.523A2.528 2.528 0 0 1 0 15.165a2.527 2.527 0 0 1 2.522-2.52h2.52v2.52zM6.313 15.165a2.527 2.527 0 0 1 2.521-2.52 2.527 2.527 0 0 1 2.521 2.52v6.313A2.528 2.528 0 0 1 8.834 24a2.528 2.528 0 0 1-2.521-2.522v-6.313zM8.834 5.042a2.528 2.528 0 0 1-2.521-2.52A2.528 2.528 0 0 1 8.834 0a2.528 2.528 0 0 1 2.521 2.522v2.52H8.834zM8.834 6.313a2.528 2.528 0 0 1 2.521 2.521 2.528 2.528 0 0 1-2.521 2.521H2.522A2.528 2.528 0 0 1 0 8.834a2.528 2.528 0 0 1 2.522-2.521h6.312zM18.956 8.834a2.528 2.528 0 0 1 2.522-2.521A2.528 2.528 0 0 1 24 8.834a2.528 2.528 0 0 1-2.522 2.521h-2.522V8.834zM17.688 8.834a2.528 2.528 0 0 1-2.523 2.521 2.527 2.527 0 0 1-2.52-2.521V2.522A2.527 2.527 0 0 1 15.165 0a2.528 2.528 0 0 1 2.523 2.522v6.312zM15.165 18.956a2.528 2.528 0 0 1 2.523 2.522A2.528 2.528 0 0 1 15.165 24a2.527 2.527 0 0 1-2.52-2.522v-2.522h2.52zM15.165 17.688a2.527 2.527 0 0 1-2.52-2.523 2.526 2.526 0 0 1 2.52-2.52h6.313A2.527 2.527 0 0 1 24 15.165a2.528 2.528 0 0 1-2.522 2.523h-6.313z" /></svg>
        </span>
        <span className="hub-icon" title="WordPress">
          <svg viewBox="0 0 24 24" fill="#21759B"><path d="M21.469 6.825c.84 1.537 1.318 3.3 1.318 5.175 0 3.979-2.156 7.456-5.363 9.325l3.295-9.527c.615-1.54.82-2.771.82-3.864 0-.405-.026-.78-.07-1.11m-7.981.105c.647-.03 1.232-.105 1.232-.105.582-.075.514-.93-.067-.899 0 0-1.755.135-2.88.135-1.064 0-2.85-.15-2.85-.15-.585-.03-.661.855-.075.885 0 0 .54.061 1.125.09l1.68 4.605-2.37 7.08L5.354 6.9c.649-.03 1.234-.1 1.234-.1.585-.075.516-.93-.065-.896 0 0-1.746.138-2.874.138-.2 0-.438-.008-.69-.015C4.911 3.15 8.235 1.215 12 1.215c2.809 0 5.365 1.072 7.286 2.833-.046-.003-.091-.009-.141-.009-1.06 0-1.812.923-1.812 1.914 0 .89.513 1.643 1.06 2.531.411.72.89 1.643.89 2.977 0 .915-.354 1.994-.821 3.479l-1.075 3.585-3.9-11.61.001.014zM12 22.784c-1.059 0-2.081-.153-3.048-.437l3.237-9.406 3.315 9.087c.024.053.05.101.078.149-1.12.393-2.325.609-3.582.609M1.211 12c0-1.564.336-3.05.935-4.39L7.29 21.709C3.694 19.96 1.212 16.271 1.211 12M12 0C5.385 0 0 5.385 0 12s5.385 12 12 12 12-5.385 12-12S18.615 0 12 0" /></svg>
        </span>
        <span className="hub-icon" title="Shopify">
          <svg viewBox="0 0 24 24" fill="#95BF47"><path d="M15.337 23.979l7.216-1.561s-2.604-17.613-2.625-17.73c-.018-.116-.114-.192-.211-.192s-1.929-.136-1.929-.136-1.275-1.274-1.439-1.411c-.045-.037-.075-.057-.121-.074l-.914 21.104h.023zM11.71 11.305s-.81-.424-1.774-.424c-1.447 0-1.504.906-1.504 1.141 0 1.232 3.24 1.715 3.24 4.629 0 2.295-1.44 3.76-3.406 3.76-2.354 0-3.54-1.465-3.54-1.465l.646-2.086s1.245 1.066 2.28 1.066c.675 0 .975-.545.975-.932 0-1.619-2.654-1.694-2.654-4.359-.034-2.237 1.571-4.416 4.827-4.416 1.257 0 1.875.361 1.875.361l-.945 2.715-.02.01zM11.17.83c.136 0 .271.038.405.135-.984.465-2.064 1.639-2.508 3.992-.656.213-1.293.405-1.889.578C7.697 3.75 8.951.84 11.17.84V.83zm1.235 2.949v.135c-.754.232-1.583.484-2.394.736.466-1.777 1.333-2.645 2.085-2.971.193.501.309 1.176.309 2.1zm.539-2.234c.694.074 1.141.867 1.429 1.755-.349.114-.735.231-1.158.366v-.252c0-.752-.096-1.371-.271-1.871v.002zm2.992 1.289c-.02 0-.06.021-.078.021s-.289.075-.714.21c-.423-1.233-1.176-2.37-2.508-2.37h-.115C12.135.209 11.669 0 11.265 0 8.159 0 6.675 3.877 6.21 5.846c-1.194.365-2.063.636-2.16.674-.675.213-.694.232-.772.87-.075.462-1.83 14.063-1.83 14.063L15.009 24l.927-21.166z" /></svg>
        </span>
        <span className="hub-icon" title="Etsy">
          <svg viewBox="0 0 24 24" fill="#F1641E"><path d="M8.559 2.445c0-.325.033-.52.59-.52h7.465c1.3 0 2.02 1.11 2.54 3.193l.42 1.666h1.27c.23-4.728.43-6.784.43-6.784s-3.196.36-5.09.36H6.635L1.521.196v1.37l1.725.326c1.21.24 1.5.496 1.6 1.606 0 0 .11 3.27.11 8.64 0 5.385-.09 8.61-.09 8.61 0 .973-.39 1.333-1.59 1.573l-1.722.33V24l5.13-.165h8.55c1.935 0 6.39.165 6.39.165.105-1.17.75-6.48.855-7.064h-1.2l-1.284 2.91c-1.005 2.28-2.476 2.445-4.11 2.445h-4.906c-1.63 0-2.415-.64-2.415-2.05V12.8s3.62 0 4.79.096c.912.064 1.463.325 1.76 1.598l.39 1.695h1.41l-.09-4.278.192-4.305h-1.391l-.45 1.89c-.283 1.244-.48 1.47-1.754 1.6-1.666.17-4.815.14-4.815.14V2.45h-.05z" /></svg>
        </span>
        <span className="hub-icon" title="Supabase">
          <svg viewBox="0 0 24 24" fill="#3ECF8E"><path d="M11.9 1.036c-.015-.986-1.26-1.41-1.874-.637L.764 12.05C-.33 13.427.65 15.455 2.409 15.455h9.579l.113 7.51c.014.985 1.259 1.408 1.873.636l9.262-11.653c1.093-1.375.113-3.403-1.645-3.403h-9.642z" /></svg>
        </span>
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


<section className="process" id="process">
  <div className="wrap">
    <h2>Five steps, no surprises</h2>
    <p className="section-lede">Every project follows the same clear process, with speed, SEO, and conversion built in from day one, so you always know what is shipping and when.</p>

    <div className="steps">
      <div className="step-dot"></div>
      <div className="step"><div className="num">01</div><h4>Discover</h4><p>We audit your site, rankings, and ad spend before touching anything.</p></div>
      <div className="step"><div className="num">02</div><h4>Plan</h4><p>A scoped roadmap with milestones you can hold us to.</p></div>
      <div className="step"><div className="num">03</div><h4>Build</h4><p>Weekly check-ins. You see progress, not status reports.</p></div>
      <div className="step"><div className="num">04</div><h4>Launch</h4><p>Tested and checked across devices before it reaches real customers.</p></div>
      <div className="step"><div className="num">05</div><h4>Support</h4><p>We stay on to maintain and extend what we built.</p></div>
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
