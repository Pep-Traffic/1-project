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
    <div className="eyebrow"><span className="line"></span>Software development agency</div>
    <h1>Stop patching<br />broken releases.<br /><span className="accent">Start shipping.</span></h1>
    <p className="lede">Empro Labs builds and maintains production software for founders who are done relying on a rotating cast of freelancers. Senior engineers, one team, every release.</p>
    <div className="cta-row">
      <a href="#contact" className="btn btn-primary">Book a call</a>
      <a href="#work" className="btn btn-ghost">See our work</a>
    </div>
  </div>

  <div className="testimonial-float" id="heroTestimonial">
    <div className="chip-text">
      <p id="heroQuote">"They shipped in three weeks what our last agency couldn't finish in three months."</p>
      <div className="who">
        <div className="avatar"></div>
        <div><b id="heroName">Maya R.</b> <span id="heroRole">— Startup Founder</span></div>
      </div>
    </div>
  </div>
</section>


<section className="logo-strip">
  <div className="wrap">
    <p>Trusted by teams building on</p>
    <div className="logo-row">
      <span>Northwind</span>
      <span>Basecamp Labs</span>
      <span>Ferro</span>
      <span>Halcyon</span>
      <span>Cascade</span>
    </div>
  </div>
</section>


<section className="solutions">
  <div className="wrap">
    <div className="eyebrow"><span className="line"></span>What we build</div>
    <h2>Software that does the follow-up for you</h2>
    <p className="section-lede">Three pieces of the same system: a site that captures the lead, tools your team can search, and infrastructure that tells you the truth about cost and uptime.</p>

    <div className="solution-grid">

      <div className="solution-card">
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
          <p><b>A website that turns visitors</b> into booked leads</p>
          <a href="#contact" className="arrow">↗</a>
        </div>
      </div>

      <div className="solution-card">
        <div className="mockup">
          <div className="search-row">🔍 <span className="typed-query" id="typedQuery"></span><span className="caret"></span></div>
          <div className="list-area">
            <div className="scan-line"></div>
            <a className="list-row" href="https://n8n.io" target="_blank" rel="noopener">
              <span className="swatch swatch-n8n"><svg viewBox="0 0 20 20" fill="none"><circle cx="4" cy="10" r="2.4" fill="currentColor"/><circle cx="16" cy="4.5" r="2.4" fill="currentColor"/><circle cx="16" cy="15.5" r="2.4" fill="currentColor"/><path d="M6.2 9.2L13.8 5.3M6.2 10.8L13.8 14.7" stroke="currentColor" strokeWidth="1.4"/></svg></span>
              n8n workflows
            </a>
            <a className="list-row" href="https://clickup.com" target="_blank" rel="noopener">
              <span className="swatch swatch-clickup"><svg viewBox="0 0 20 20" fill="none"><path d="M10 3L15 9L10 6L5 9L10 3Z" fill="currentColor"/><path d="M10 17L5 11L10 14L15 11L10 17Z" fill="currentColor" opacity="0.55"/></svg></span>
              ClickUp tasks
            </a>
            <a className="list-row" href="https://claude.ai" target="_blank" rel="noopener">
              <span className="swatch swatch-claude"><svg viewBox="0 0 20 20" fill="none"><path d="M10 2L11.6 8.4L18 10L11.6 11.6L10 18L8.4 11.6L2 10L8.4 8.4L10 2Z" fill="currentColor"/></svg></span>
              Claude conversations
            </a>
            <div className="list-row hl"><div className="swatch"></div> Your knowledge base</div>
          </div>
        </div>
        <div className="solution-foot">
          <p><b>Every tool your team uses,</b> searchable in one place</p>
          <a href="#contact" className="arrow">↗</a>
        </div>
      </div>

      <div className="solution-card">
        <div className="mockup" style={{position: 'relative'}}>
          <div className="badges">
            <span className="badge-pill">AWS</span>
            <span className="badge-pill">Vercel</span>
            <span className="live"><i></i>Live</span>
          </div>
          <div className="bars" id="deployBars">
            <i style={{height: '28%'}} data-value="12"></i><i style={{height: '42%'}} data-value="17"></i><i style={{height: '34%'}} data-value="15"></i>
            <i style={{height: '58%'}} data-value="22"></i><i style={{height: '48%'}} data-value="19"></i><i style={{height: '70%'}} data-value="27"></i>
            <i className="hl" style={{height: '88%'}} data-value="34"></i>
          </div>
          <div className="cost-row"><div><span>Cost per deploy</span><b id="costNumber">$0.42</b></div><span>and falling</span></div>
          <div className="chat-chip" id="chatChip">
            <div className="av"></div>
            <div>
              <div className="dots"><i></i><i></i><i></i></div>
              <p className="msg">Hi there! Any questions? Chat with us.</p>
            </div>
          </div>
        </div>
        <div className="solution-foot">
          <p><b>Infrastructure costs, tracked</b> and trending down</p>
          <a href="#contact" className="arrow">↗</a>
        </div>
      </div>

      <div className="solution-card">
        <div className="mockup stack-mockup">
          <div className="stack-card s3"></div>
          <div className="stack-card s2"></div>
          <div className="stack-card s1">
            <div className="chrome-dots"><i></i><i></i></div>
            <div className="bar full"></div>
            <div className="bar w70"></div>
          </div>
        </div>
        <div className="solution-foot">
          <p><b>Every feature gets its own preview,</b> not a shared staging server</p>
          <a href="#contact" className="arrow">↗</a>
        </div>
      </div>

      <div className="solution-card">
        <div className="mockup">
          <div className="thread-msg">
            <span className="thread-meta">User report, 11:48pm</span>
            <b>Checkout button broken</b>
          </div>
          <div className="typing-pill"><i></i><i></i><i></i></div>
          <div className="patch-note">
            <div className="patch-top">
              <span className="patch-icon">⌥</span>
              <div className="patch-bars" id="patchBars"><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i></div>
              <span className="patch-time">0:12</span>
            </div>
            <span className="patch-label">Fix and deploy note sent</span>
          </div>
          <div className="reply-pill"><b id="replyCount">28</b> minutes to first response</div>
        </div>
        <div className="solution-foot">
          <p><b>Sub-hour fixes,</b> day, night, and weekends</p>
          <a href="#contact" className="arrow">↗</a>
        </div>
      </div>

      <div className="solution-card">
        <div className="mockup" style={{position: 'relative'}}>
          <div className="incident-row">
            <span className="incident-icon">☎</span>
            <div><b>Incoming incident</b><span>Acknowledged in two minutes</span></div>
            <span className="live-tag"><i></i>Live</span>
          </div>
          <div className="incident-wave" id="incidentWave">
            <i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i>
          </div>
          <p className="incident-status">Diagnosing the issue</p>
          <div className="incident-row resolved">
            <span className="incident-icon">↗</span>
            <div><b>Root cause found</b><span>Fix deployed to production</span></div>
            <span className="live-tag done">Resolved</span>
          </div>
          <div className="chat-chip" id="chatChip2">
            <button className="chat-close" id="chatClose" aria-label="Dismiss">✕</button>
            <div className="av"></div>
            <div>
              <div className="dots"><i></i><i></i><i></i></div>
              <p className="msg">Hi there! Need a hand? Chat with us.</p>
            </div>
          </div>
        </div>
        <div className="solution-foot">
          <p><b>A real engineer on call,</b> not a support bot</p>
          <a href="#contact" className="arrow">↗</a>
        </div>
      </div>

    </div>

    <div className="solution-grid solution-grid-centered">
      <div className="solution-card">
        <div className="mockup escalation-mockup">
          <div className="esc-track" id="escTrack">
            <div className="esc-line"></div>
            <div className="esc-dot"></div>
            <a href="#contact" className="esc-step" data-step="0">
              <div className="esc-icon esc-slack"><svg viewBox="0 0 24 24" fill="none"><rect x="9" y="2" width="6" height="9" rx="3" fill="currentColor"/><rect x="9" y="13" width="6" height="9" rx="3" fill="currentColor" opacity="0.5"/></svg></div>
              <b>Slack alert</b><span>Immediate</span>
            </a>
            <a href="#contact" className="esc-step" data-step="1">
              <div className="esc-icon esc-mail"><svg viewBox="0 0 24 24" fill="none"><rect x="3" y="5" width="18" height="14" rx="2" stroke="currentColor" strokeWidth="1.6"/><path d="M4 6.5L12 13L20 6.5" stroke="currentColor" strokeWidth="1.6"/></svg></div>
              <b>Email</b><span>15 min</span>
            </a>
            <a href="#contact" className="esc-step" data-step="2">
              <div className="esc-icon esc-phone"><svg viewBox="0 0 24 24" fill="none"><path d="M5 4h4l2 5-2.5 1.5a11 11 0 0 0 5 5L15 13l5 2v4a2 2 0 0 1-2 2C9.5 21 3 14.5 3 6a2 2 0 0 1 2-2Z" stroke="currentColor" strokeWidth="1.4" strokeLinejoin="round"/></svg></div>
              <b>Phone call</b><span>30 min</span>
            </a>
            <a href="#contact" className="esc-step" data-step="3">
              <div className="esc-icon esc-done"><svg viewBox="0 0 24 24" fill="none"><path d="M5 12.5L9.5 17L19 6.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg></div>
              <b>Resolved</b><span>It stops</span>
            </a>
          </div>
        </div>
        <div className="float-chip esc-chip" id="escChip">
          <div className="check"><svg viewBox="0 0 16 16" fill="none"><path d="M3 8.5L6.2 11.5L13 4.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg></div>
          <div className="chip-text"><b id="escTitle">They fix it, the alert stops</b><span id="escSub">No incident goes unanswered on any channel</span></div>
          <span className="tag" id="escTag">Resolved</span>
        </div>
        <div className="solution-foot">
          <p><b>Escalation that chases</b> until it's fixed</p>
          <a href="#contact" className="arrow">↗</a>
        </div>
      </div>

      <div className="solution-card">
        <div className="mockup calendar-mockup">
          <div className="cal-head"><b>This week</b><span className="badge-pill">2 demos</span></div>
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
          <div className="chip-text"><b id="calDay">Thursday, 2:00pm</b><span>Sprint demo — come see what shipped</span></div>
          <span className="tag">Scheduled</span>
        </div>
        <div className="solution-foot">
          <p><b>Sprint demos, booked</b> straight onto your calendar</p>
          <a href="#contact" className="arrow">↗</a>
        </div>
      </div>

    </div>
  </div>
</section>


<section className="hub-section">
  <div className="wrap">
    <div className="eyebrow"><span className="line"></span>How it all connects</div>
    <h2>One team, plugged into every tool you already run</h2>
    <p className="section-lede">We don't rip out your stack and start over. Empro Labs plugs straight into your website, database, and warehouse, and keeps every app your team already lives in talking to each other.</p>

    <div className="hub-visual">
      <div className="hub-backdrop"></div>

      <div className="hub-tags-top">
        <span className="hub-tag hub-tag-1">Application</span>
        <span className="hub-tag hub-tag-2">Database</span>
        <span className="hub-tag hub-tag-3">Website</span>
        <span className="hub-tag hub-tag-4">Warehouse</span>
      </div>

      <svg className="hub-lines" viewBox="0 0 700 260" preserveAspectRatio="none">
        {/* tag 1 — Application */}
        <path className="hub-thread" d="M90 20 C 200 20, 260 110, 350 150" />
        <path className="hub-thread" d="M90 20 C 150 40, 220 130, 340 148" />
        <path className="hub-thread" d="M90 20 C 180 10, 280 90, 360 152" />
        <path className="hub-pulse" d="M90 20 C 200 20, 260 110, 350 150" pathLength="1" style={{ animationDelay: "0s" }} />

        {/* tag 2 — Database */}
        <path className="hub-thread" d="M270 20 C 300 60, 330 100, 350 150" />
        <path className="hub-thread" d="M270 20 C 290 70, 320 110, 340 148" />
        <path className="hub-thread" d="M270 20 C 305 55, 335 95, 360 150" />
        <path className="hub-pulse" d="M270 20 C 300 60, 330 100, 350 150" pathLength="1" style={{ animationDelay: "0.45s" }} />

        {/* tag 3 — Website */}
        <path className="hub-thread" d="M430 20 C 400 60, 370 100, 350 150" />
        <path className="hub-thread" d="M430 20 C 410 70, 380 110, 360 148" />
        <path className="hub-thread" d="M430 20 C 395 55, 365 95, 340 150" />
        <path className="hub-pulse" d="M430 20 C 400 60, 370 100, 350 150" pathLength="1" style={{ animationDelay: "0.9s" }} />

        {/* tag 4 — Warehouse */}
        <path className="hub-thread" d="M610 20 C 500 20, 440 110, 350 150" />
        <path className="hub-thread" d="M610 20 C 550 40, 480 130, 360 148" />
        <path className="hub-thread" d="M610 20 C 520 10, 420 90, 340 152" />
        <path className="hub-pulse" d="M610 20 C 500 20, 440 110, 350 150" pathLength="1" style={{ animationDelay: "1.35s" }} />
      </svg>

      <div className="hub-core">
        <span className="hub-ring hub-ring-1"></span>
        <span className="hub-ring hub-ring-2"></span>
        <span className="hub-ring hub-ring-3"></span>
        <span className="hub-node">
          <svg viewBox="0 0 24 24" fill="none">
            <path d="M9 6L3 12L9 18" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M15 6L21 12L15 18" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </span>
      </div>

      <div className="hub-icons-bottom">
        <span className="hub-icon" style={{ "--d": "0s" }} title="GoHighLevel">
          <span className="hub-icon-mono" style={{ color: "#0B5CFF" }}>GHL</span>
        </span>
        <span className="hub-icon" style={{ "--d": "0.2s" }} title="ClickUp">
          <svg viewBox="0 0 24 24" fill="#7B68EE"><path d="M2 18.439l3.69-2.828c1.961 2.56 4.044 3.739 6.363 3.739 2.307 0 4.33-1.166 6.203-3.704L22 18.405C19.298 22.065 15.941 24 12.053 24 8.178 24 4.788 22.078 2 18.439zM12.04 6.15l-6.568 5.66-3.036-3.52L12.055 0l9.543 8.296-3.05 3.509z" /></svg>
        </span>
        <span className="hub-icon" style={{ "--d": "0.4s" }} title="Slack">
          <svg viewBox="0 0 24 24" fill="#4A154B"><path d="M5.042 15.165a2.528 2.528 0 0 1-2.52 2.523A2.528 2.528 0 0 1 0 15.165a2.527 2.527 0 0 1 2.522-2.52h2.52v2.52zM6.313 15.165a2.527 2.527 0 0 1 2.521-2.52 2.527 2.527 0 0 1 2.521 2.52v6.313A2.528 2.528 0 0 1 8.834 24a2.528 2.528 0 0 1-2.521-2.522v-6.313zM8.834 5.042a2.528 2.528 0 0 1-2.521-2.52A2.528 2.528 0 0 1 8.834 0a2.528 2.528 0 0 1 2.521 2.522v2.52H8.834zM8.834 6.313a2.528 2.528 0 0 1 2.521 2.521 2.528 2.528 0 0 1-2.521 2.521H2.522A2.528 2.528 0 0 1 0 8.834a2.528 2.528 0 0 1 2.522-2.521h6.312zM18.956 8.834a2.528 2.528 0 0 1 2.522-2.521A2.528 2.528 0 0 1 24 8.834a2.528 2.528 0 0 1-2.522 2.521h-2.522V8.834zM17.688 8.834a2.528 2.528 0 0 1-2.523 2.521 2.527 2.527 0 0 1-2.52-2.521V2.522A2.527 2.527 0 0 1 15.165 0a2.528 2.528 0 0 1 2.523 2.522v6.312zM15.165 18.956a2.528 2.528 0 0 1 2.523 2.522A2.528 2.528 0 0 1 15.165 24a2.527 2.527 0 0 1-2.52-2.522v-2.522h2.52zM15.165 17.688a2.527 2.527 0 0 1-2.52-2.523 2.526 2.526 0 0 1 2.52-2.52h6.313A2.527 2.527 0 0 1 24 15.165a2.528 2.528 0 0 1-2.522 2.523h-6.313z" /></svg>
        </span>
        <span className="hub-icon" style={{ "--d": "0.6s" }} title="WordPress">
          <svg viewBox="0 0 24 24" fill="#21759B"><path d="M21.469 6.825c.84 1.537 1.318 3.3 1.318 5.175 0 3.979-2.156 7.456-5.363 9.325l3.295-9.527c.615-1.54.82-2.771.82-3.864 0-.405-.026-.78-.07-1.11m-7.981.105c.647-.03 1.232-.105 1.232-.105.582-.075.514-.93-.067-.899 0 0-1.755.135-2.88.135-1.064 0-2.85-.15-2.85-.15-.585-.03-.661.855-.075.885 0 0 .54.061 1.125.09l1.68 4.605-2.37 7.08L5.354 6.9c.649-.03 1.234-.1 1.234-.1.585-.075.516-.93-.065-.896 0 0-1.746.138-2.874.138-.2 0-.438-.008-.69-.015C4.911 3.15 8.235 1.215 12 1.215c2.809 0 5.365 1.072 7.286 2.833-.046-.003-.091-.009-.141-.009-1.06 0-1.812.923-1.812 1.914 0 .89.513 1.643 1.06 2.531.411.72.89 1.643.89 2.977 0 .915-.354 1.994-.821 3.479l-1.075 3.585-3.9-11.61.001.014zM12 22.784c-1.059 0-2.081-.153-3.048-.437l3.237-9.406 3.315 9.087c.024.053.05.101.078.149-1.12.393-2.325.609-3.582.609M1.211 12c0-1.564.336-3.05.935-4.39L7.29 21.709C3.694 19.96 1.212 16.271 1.211 12M12 0C5.385 0 0 5.385 0 12s5.385 12 12 12 12-5.385 12-12S18.615 0 12 0" /></svg>
        </span>
        <span className="hub-icon" style={{ "--d": "0.8s" }} title="Shopify">
          <svg viewBox="0 0 24 24" fill="#95BF47"><path d="M15.337 23.979l7.216-1.561s-2.604-17.613-2.625-17.73c-.018-.116-.114-.192-.211-.192s-1.929-.136-1.929-.136-1.275-1.274-1.439-1.411c-.045-.037-.075-.057-.121-.074l-.914 21.104h.023zM11.71 11.305s-.81-.424-1.774-.424c-1.447 0-1.504.906-1.504 1.141 0 1.232 3.24 1.715 3.24 4.629 0 2.295-1.44 3.76-3.406 3.76-2.354 0-3.54-1.465-3.54-1.465l.646-2.086s1.245 1.066 2.28 1.066c.675 0 .975-.545.975-.932 0-1.619-2.654-1.694-2.654-4.359-.034-2.237 1.571-4.416 4.827-4.416 1.257 0 1.875.361 1.875.361l-.945 2.715-.02.01zM11.17.83c.136 0 .271.038.405.135-.984.465-2.064 1.639-2.508 3.992-.656.213-1.293.405-1.889.578C7.697 3.75 8.951.84 11.17.84V.83zm1.235 2.949v.135c-.754.232-1.583.484-2.394.736.466-1.777 1.333-2.645 2.085-2.971.193.501.309 1.176.309 2.1zm.539-2.234c.694.074 1.141.867 1.429 1.755-.349.114-.735.231-1.158.366v-.252c0-.752-.096-1.371-.271-1.871v.002zm2.992 1.289c-.02 0-.06.021-.078.021s-.289.075-.714.21c-.423-1.233-1.176-2.37-2.508-2.37h-.115C12.135.209 11.669 0 11.265 0 8.159 0 6.675 3.877 6.21 5.846c-1.194.365-2.063.636-2.16.674-.675.213-.694.232-.772.87-.075.462-1.83 14.063-1.83 14.063L15.009 24l.927-21.166z" /></svg>
        </span>
        <span className="hub-icon" style={{ "--d": "1s" }} title="Etsy">
          <svg viewBox="0 0 24 24" fill="#F1641E"><path d="M8.559 2.445c0-.325.033-.52.59-.52h7.465c1.3 0 2.02 1.11 2.54 3.193l.42 1.666h1.27c.23-4.728.43-6.784.43-6.784s-3.196.36-5.09.36H6.635L1.521.196v1.37l1.725.326c1.21.24 1.5.496 1.6 1.606 0 0 .11 3.27.11 8.64 0 5.385-.09 8.61-.09 8.61 0 .973-.39 1.333-1.59 1.573l-1.722.33V24l5.13-.165h8.55c1.935 0 6.39.165 6.39.165.105-1.17.75-6.48.855-7.064h-1.2l-1.284 2.91c-1.005 2.28-2.476 2.445-4.11 2.445h-4.906c-1.63 0-2.415-.64-2.415-2.05V12.8s3.62 0 4.79.096c.912.064 1.463.325 1.76 1.598l.39 1.695h1.41l-.09-4.278.192-4.305h-1.391l-.45 1.89c-.283 1.244-.48 1.47-1.754 1.6-1.666.17-4.815.14-4.815.14V2.45h-.05z" /></svg>
        </span>
        <span className="hub-icon" style={{ "--d": "1.2s" }} title="Supabase">
          <svg viewBox="0 0 24 24" fill="#3ECF8E"><path d="M11.9 1.036c-.015-.986-1.26-1.41-1.874-.637L.764 12.05C-.33 13.427.65 15.455 2.409 15.455h9.579l.113 7.51c.014.985 1.259 1.408 1.873.636l9.262-11.653c1.093-1.375.113-3.403-1.645-3.403h-9.642z" /></svg>
        </span>
      </div>
    </div>
  </div>
</section>


<section className="services" id="services">
  <div className="wrap">
    <div className="eyebrow"><span className="line"></span>What we do</div>
    <h2>Everything between an idea and a system that runs itself</h2>
    <p className="section-lede">We don't hand off a scope document and disappear. Empro Labs stays on as the engineering team behind your product, from the first commit to the tenth release.</p>

    <div className="service-list">
      <details className="service">
        <summary>
          <div className="icon"><svg viewBox="0 0 24 24" fill="none"><path d="M9 6L3 12L9 18" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/><path d="M15 6L21 12L15 18" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/></svg></div>
          <div><h3>Product engineering</h3><p>Full-stack web and mobile builds, architected to handle real traffic — not just a demo.</p></div>
          <span className="chev">＋</span>
        </summary>
        <div className="service-more">
          <ul>
            <li>Web and mobile apps built on a modern, typed stack</li>
            <li>Architecture reviewed for real production load, not a demo</li>
            <li>Handoff includes documentation your own team can extend</li>
          </ul>
        </div>
      </details>

      <details className="service">
        <summary>
          <div className="icon"><svg viewBox="0 0 24 24" fill="none"><path d="M4 6.5C4 5.12 7.58 4 12 4C16.42 4 20 5.12 20 6.5C20 7.88 16.42 9 12 9C7.58 9 4 7.88 4 6.5Z" stroke="currentColor" strokeWidth="1.8"/><path d="M4 6.5V17.5C4 18.88 7.58 20 12 20C16.42 20 20 18.88 20 17.5V6.5" stroke="currentColor" strokeWidth="1.8"/><path d="M4 12C4 13.38 7.58 14.5 12 14.5C16.42 14.5 20 13.38 20 12" stroke="currentColor" strokeWidth="1.8"/></svg></div>
          <div><h3>DevOps &amp; infrastructure</h3><p>CI/CD pipelines, cloud architecture, and monitoring so releases stop being a gamble.</p></div>
          <span className="chev">＋</span>
        </summary>
        <div className="service-more">
          <ul>
            <li>Automated pipelines — every merge tests, builds, and deploys itself</li>
            <li>Cloud infrastructure sized for your actual traffic, not guesswork</li>
            <li>Alerting wired up before launch, not after the first outage</li>
          </ul>
        </div>
      </details>

      <details className="service">
        <summary>
          <div className="icon"><svg viewBox="0 0 24 24" fill="none"><path d="M4 20L8.5 15.5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"/><path d="M13 4L20 11L11 20L4 20L4 13L11 6L13 4Z" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round"/></svg></div>
          <div><h3>Product design</h3><p>Interfaces designed around how your users actually work, not around a template.</p></div>
          <span className="chev">＋</span>
        </summary>
        <div className="service-more">
          <ul>
            <li>Flows mapped from real user tasks, not a component library</li>
            <li>Interactive prototypes you can test before a line of code is written</li>
            <li>A design system your engineers can actually build from</li>
          </ul>
        </div>
      </details>

      <details className="service">
        <summary>
          <div className="icon"><svg viewBox="0 0 24 24" fill="none"><path d="M12 3L4 6.5V11C4 15.5 7.4 19.7 12 21C16.6 19.7 20 15.5 20 11V6.5L12 3Z" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round"/><path d="M9 12L11 14L15.5 9.5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/></svg></div>
          <div><h3>Ongoing support</h3><p>An SLA-backed team on call for bugs, scaling issues, and the features that come next.</p></div>
          <span className="chev">＋</span>
        </summary>
        <div className="service-more">
          <ul>
            <li>Guaranteed response times, in writing</li>
            <li>The same engineers who built it — no re-explaining your codebase</li>
            <li>Monthly capacity for new features, not just bug fixes</li>
          </ul>
        </div>
      </details>
    </div>
  </div>
</section>


<section className="pipeline">
  <div className="wrap">
    <div className="pipeline-grid">
      <div>
        <div className="eyebrow"><span className="line"></span>Right now</div>
        <h2>Live from a production pipeline</h2>
        <p className="section-lede">This is a real terminal simulation, updating on an interval — a preview of the kind of visibility you get once we're running your releases.</p>

        <div className="terminal">
          <div className="terminal-bar">
            <div className="dots"><i></i><i></i><i></i></div>
            <div className="env">production · us-east-1</div>
          </div>
          <div className="terminal-body">
            <div className="metric-grid">
              <div className="metric"><span>Uptime</span><b id="mUptime">99.98<em>%</em></b></div>
              <div className="metric"><span>Deploys today</span><b id="mDeploys">7</b></div>
              <div className="metric"><span>p95 latency</span><b id="mLatency">142<em>ms</em></b></div>
            </div>
            <div className="log" id="log" aria-live="polite"></div>
          </div>
        </div>
      </div>

      <div className="regions-panel">
        <div className="regions-head">
          <b>Deployed across 4 regions</b>
          <span className="live-tag"><i></i>Live</span>
        </div>
        <div className="regions-list" id="regionsList">
          <div className="region-row" data-base="18">
            <span className="region-dot"></span>
            <span className="region-name">us-east-1</span>
            <span className="region-load"><i style={{width: '62%'}}></i></span>
            <span className="region-ms">18<em>ms</em></span>
          </div>
          <div className="region-row" data-base="34">
            <span className="region-dot"></span>
            <span className="region-name">eu-west-1</span>
            <span className="region-load"><i style={{width: '41%'}}></i></span>
            <span className="region-ms">34<em>ms</em></span>
          </div>
          <div className="region-row" data-base="52">
            <span className="region-dot"></span>
            <span className="region-name">ap-southeast-1</span>
            <span className="region-load"><i style={{width: '28%'}}></i></span>
            <span className="region-ms">52<em>ms</em></span>
          </div>
          <div className="region-row" data-base="21">
            <span className="region-dot"></span>
            <span className="region-name">sa-east-1</span>
            <span className="region-load"><i style={{width: '35%'}}></i></span>
            <span className="region-ms">21<em>ms</em></span>
          </div>
        </div>
        <p className="regions-note">Requests routed to the nearest healthy region automatically.</p>
      </div>
    </div>
  </div>
</section>


<section className="process" id="process">
  <div className="wrap">
    <div className="eyebrow"><span className="line"></span>How we work</div>
    <h2>Five steps, no surprises</h2>
    <p className="section-lede">Every engagement follows the same rhythm, so you always know what's shipping and when.</p>

    <div className="steps">
      <div className="step-dot"></div>
      <div className="step"><div className="num">01</div><h4>Discover</h4><p>We audit your codebase and goals before writing a single line.</p></div>
      <div className="step"><div className="num">02</div><h4>Plan</h4><p>A scoped roadmap with milestones you can hold us to.</p></div>
      <div className="step"><div className="num">03</div><h4>Build</h4><p>Weekly demos. You see progress, not status reports.</p></div>
      <div className="step"><div className="num">04</div><h4>Ship</h4><p>Deployed, monitored, and load-tested before it reaches users.</p></div>
      <div className="step"><div className="num">05</div><h4>Support</h4><p>We stay on to maintain and extend what we built.</p></div>
    </div>
  </div>
</section>


<section className="phases">
  <div className="wrap">
    <div className="phases-grid">
      <div className="phases-list">
        <div className="phase">
          <span className="phase-head"><span className="phase-num">01</span><span className="phase-title">The audit</span></span>
          <p>We map where your engineering time is actually leaking. You get the plan either way, and it's free.</p>
        </div>
        <div className="phase">
          <span className="phase-head"><span className="phase-num">02</span><span className="phase-title">The build</span></span>
          <p>We build and test the whole fix in weeks, before it ever touches production.</p>
        </div>
        <div className="phase">
          <span className="phase-head"><span className="phase-num">03</span><span className="phase-title">The handoff</span></span>
          <p>You get monitoring, documentation, and a team on call — not just a repo and a goodbye.</p>
        </div>
      </div>

      <div className="kanban" aria-hidden="true">
        <div className="kanban-fade kanban-fade-top"></div>
        <div className="kanban-fade kanban-fade-bottom"></div>
        <div className="kanban-track">
          <div className="kanban-card"><span className="kb-dot"></span><span>Audit complete</span><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6 9 17l-5-5"/></svg></div>
          <div className="kanban-card"><span className="kb-dot"></span><span>Codebase rebuilt</span><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6 9 17l-5-5"/></svg></div>
          <div className="kanban-card"><span className="kb-dot"></span><span>Tests passing</span><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6 9 17l-5-5"/></svg></div>
          <div className="kanban-card"><span className="kb-dot"></span><span>Deployed to production</span><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6 9 17l-5-5"/></svg></div>
          
          <div className="kanban-card" aria-hidden="true"><span className="kb-dot"></span><span>Audit complete</span><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6 9 17l-5-5"/></svg></div>
          <div className="kanban-card" aria-hidden="true"><span className="kb-dot"></span><span>Codebase rebuilt</span><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6 9 17l-5-5"/></svg></div>
          <div className="kanban-card" aria-hidden="true"><span className="kb-dot"></span><span>Tests passing</span><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6 9 17l-5-5"/></svg></div>
          <div className="kanban-card" aria-hidden="true"><span className="kb-dot"></span><span>Deployed to production</span><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6 9 17l-5-5"/></svg></div>
        </div>
      </div>
    </div>
  </div>
</section>


<section className="work" id="work">
  <div className="wrap">
    <div className="eyebrow"><span className="line"></span>Selected work</div>
    <h2>Recent releases</h2>
    <p className="section-lede">A few of the systems we've built, rebuilt, and kept running.</p>

    <details className="case">
      <summary>
        <div>
          <span className="tag">Northwind — E-commerce</span>
          <h3>Rebuilt checkout from the ground up</h3>
          <p>Replaced a legacy checkout flow that was losing customers at payment. New stack shipped in six weeks.</p>
        </div>
        <div className="stat"><b>62%</b><span>faster checkout load</span></div>
      </summary>
      <div className="case-more">
        <ul>
          <li>Replaced a 3rd-party checkout widget with an in-house flow</li>
          <li>Cut payment-step abandonment by moving validation client-side</li>
          <li>Shipped with feature flags so rollout was fully reversible</li>
        </ul>
      </div>
    </details>
    <details className="case">
      <summary>
        <div>
          <span className="tag">Halcyon — SaaS platform</span>
          <h3>Migrated a decade-old PHP monolith</h3>
          <p>Moved a 10-year-old codebase to a modern stack with zero downtime and no feature freeze.</p>
        </div>
        <div className="stat"><b>0</b><span>minutes of downtime</span></div>
      </summary>
      <div className="case-more">
        <ul>
          <li>Ran the old and new systems side by side behind a router</li>
          <li>Migrated data in batches, verified against the live system</li>
          <li>Team kept shipping features throughout the migration</li>
        </ul>
      </div>
    </details>
    <details className="case">
      <summary>
        <div>
          <span className="tag">Cascade — Internal tools</span>
          <h3>Built an operations dashboard from scratch</h3>
          <p>Replaced six spreadsheets and a Slack bot with one internal tool the ops team actually uses.</p>
        </div>
        <div className="stat"><b>20 hrs</b><span>saved per week</span></div>
      </summary>
      <div className="case-more">
        <ul>
          <li>Interviewed the ops team before designing a single screen</li>
          <li>Replaced manual spreadsheet reconciliation with live syncing</li>
          <li>Delivered in four two-week sprints with weekly demos</li>
        </ul>
      </div>
    </details>
  </div>
</section>


<section className="testimonials">
  <div className="wrap">
    <div className="eyebrow"><span className="line"></span>What clients say</div>
    <h2>Teams that stopped worrying about their stack</h2>
    <p className="section-lede">A few words from founders and operators we've worked alongside.</p>

    <div className="quote-grid">
      <div className="quote">
        <p>"They shipped in three weeks what our last agency couldn't finish in three months."</p>
        <div className="who"><div className="avatar"></div><div><b>Maya R.</b><span>Startup Founder, Northwind</span></div></div>
      </div>
      <div className="quote">
        <p>"The migration was the scariest part of our roadmap. Empro Labs made it the smoothest."</p>
        <div className="who"><div className="avatar"></div><div><b>Owen T.</b><span>CTO, Halcyon</span></div></div>
      </div>
      <div className="quote">
        <p>"We finally have an engineering partner who tells us the truth about timelines."</p>
        <div className="who"><div className="avatar"></div><div><b>Priya D.</b><span>COO, Cascade</span></div></div>
      </div>
    </div>
  </div>
</section>


<section className="cta-banner">
  <div className="wrap">
    <div className="cta-panel">
      <h2>Ready to stop firefighting?</h2>
      <p>Tell us what's broken or what you're building next. We'll reply with a real plan, not a sales deck.</p>
      <a href="#contact" className="btn btn-primary">Book a call</a>
    </div>
  </div>
</section>


<section className="contact" id="contact">
  <div className="wrap">
    <div className="contact-grid">
      <div>
        <div className="eyebrow"><span className="line"></span>Get in touch</div>
        <h2>Tell us what you're building</h2>
        <p className="section-lede">Fill this in and we'll reply within one business day with next steps — no sales call required first.</p>
        <ul className="contact-info">
          <li><span>Email</span><a href="mailto:hello@emprolabs.dev">hello@emprolabs.dev</a></li>
          <li><span>Response time</span><a href="#">Within 1 business day</a></li>
        </ul>
      </div>

      <form id="contactForm" noValidate>
        <div className="field">
          <label htmlFor="name">Name</label>
          <input type="text" id="name" name="name" autoComplete="name" required />
          <span className="error" id="nameError"></span>
        </div>
        <div className="field">
          <label htmlFor="email">Email</label>
          <input type="email" id="email" name="email" autoComplete="email" required />
          <span className="error" id="emailError"></span>
        </div>
        <div className="field">
          <label htmlFor="message">What are you building?</label>
          <textarea id="message" name="message" rows="4" required></textarea>
          <span className="error" id="messageError"></span>
        </div>
        <button type="submit" className="btn btn-primary" id="submitBtn">Send message</button>
        <p className="form-status" id="formStatus" role="status" aria-live="polite"></p>
      </form>
    </div>
  </div>
</section>
    </>
  );
}
