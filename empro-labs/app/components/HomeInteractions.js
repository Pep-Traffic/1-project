"use client";

import { useEffect } from "react";

// This component runs the homepage's interactive behavior exactly as it was
// authored (scroll-triggered reveals, live counters, typewriters, the
// contact form, etc.) as a single effect on mount. setInterval and
// IntersectionObserver are wrapped only for the lifetime of this effect so
// that everything is properly torn down if the user navigates away from the
// home page - the animation logic itself is untouched.
export default function HomeInteractions() {
  useEffect(() => {
    const cleanupFns = [];

    const realSetInterval = window.setInterval.bind(window);
    const realIntersectionObserver = window.IntersectionObserver;

    window.setInterval = (...args) => {
      const id = realSetInterval(...args);
      cleanupFns.push(() => clearInterval(id));
      return id;
    };

    class TrackedObserver extends realIntersectionObserver {
      constructor(...args) {
        super(...args);
        cleanupFns.push(() => this.disconnect());
      }
    }
    window.IntersectionObserver = TrackedObserver;


      // ---------- Hero testimonial cycles through real client quotes ----------
      (function(){
        const chip = document.getElementById('heroTestimonial');
        if (!chip) return;
        const quoteEl = document.getElementById('heroQuote');
        const nameEl = document.getElementById('heroName');
        const roleEl = document.getElementById('heroRole');
        const quotes = [
          { quote: '"They shipped in three weeks what our last agency couldn\'t finish in three months."', name: 'Maya R.', role: '— Startup Founder, Northwind' },
          { quote: '"The migration was the scariest part of our roadmap. Empro Labs made it the smoothest."', name: 'Owen T.', role: '— CTO, Halcyon' },
          { quote: '"We finally have an engineering partner who tells us the truth about timelines."', name: 'Priya D.', role: '— COO, Cascade' }
        ];
        if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
        let i = 0;
        setInterval(() => {
          chip.classList.add('swapping');
          setTimeout(() => {
            i = (i + 1) % quotes.length;
            quoteEl.textContent = quotes[i].quote;
            nameEl.textContent = quotes[i].name;
            roleEl.textContent = quotes[i].role;
            chip.classList.remove('swapping');
          }, 300);
        }, 4500);
      })();

      // ---------- Services & case-study cards: smooth animated expand/collapse ----------
      (function(){
        function animate(details, contentSelector, onIcon){
          const content = details.querySelector(contentSelector);
          if (!content) return;
          details.addEventListener('toggle', () => {
            if (details.open){
              const target = content.scrollHeight;
              content.style.height = target + 'px';
              content.style.opacity = 1;
              if (onIcon) onIcon(details, true);
              content.addEventListener('transitionend', function done(e){
                if (e.propertyName === 'height'){
                  content.style.height = 'auto';
                  content.removeEventListener('transitionend', done);
                }
              });
            } else {
              const current = content.scrollHeight;
              content.style.height = current + 'px';
              content.style.opacity = 0;
              if (onIcon) onIcon(details, false);
              // force reflow so the browser registers the starting height before collapsing
              requestAnimationFrame(() => requestAnimationFrame(() => {
                content.style.height = '0px';
              }));
            }
          });
        }

        document.querySelectorAll('details.service').forEach(d => {
          animate(d, '.service-more', (details, isOpen) => {
            const icon = details.querySelector('.icon');
            if (icon) icon.classList.toggle('active', isOpen);
          });
        });
        document.querySelectorAll('details.case').forEach(d => animate(d, '.case-more'));
      })();

      // ---------- Card 1: skeleton lines resolve into loaded text once in view ----------
      (function(){
        const cards = document.querySelectorAll('.solution-card');
        if (!cards.length) return;
        const card1 = cards[0];
        if (window.matchMedia('(prefers-reduced-motion: reduce)').matches){
          card1.classList.add('loaded');
          return;
        }
        const obs = new IntersectionObserver((entries) => {
          entries.forEach(entry => {
            if (entry.isIntersecting){
              setTimeout(() => entry.target.classList.add('loaded'), 1300);
              obs.unobserve(entry.target);
            }
          });
        }, { threshold: 0.35 });
        obs.observe(card1);
      })();

      // ---------- Card 1: notification popup cycles through real events ----------
      (function(){
        const chip = document.getElementById('notifChip');
        if (!chip) return;
        const card = chip.closest('.solution-card');
        const title = document.getElementById('notifTitle');
        const sub = document.getElementById('notifSub');
        const tag = document.getElementById('notifTag');
        const events = [
          { title: 'New quote request', sub: 'Straight into your CRM', tag: 'Lead' },
          { title: 'Callback requested', sub: 'Submitted from the website form', tag: 'Lead' },
          { title: 'Invoice paid', sub: 'Auto-synced to your billing tool', tag: 'Paid' }
        ];
        if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
        let i = 0;
        function swap(){
          chip.classList.add('swapping');
          setTimeout(() => {
            i = (i + 1) % events.length;
            title.textContent = events[i].title;
            sub.textContent = events[i].sub;
            tag.textContent = events[i].tag;
            chip.classList.remove('swapping');
          }, 260);
        }
        const obs = new IntersectionObserver((entries) => {
          entries.forEach(entry => {
            if (entry.isIntersecting){
              setInterval(swap, 3400);
              obs.disconnect();
            }
          });
        }, { threshold: 0.35 });
        obs.observe(card);
      })();

      // ---------- Card 3: bar chart gets a gentle live jitter after its first reveal ----------
      (function(){
        const bars = document.querySelectorAll('#deployBars i');
        if (!bars.length) return;
        if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
        const card = bars[0].closest('.solution-card');
        function jitter(){
          bars.forEach(bar => {
            const base = parseFloat(bar.dataset.value);
            const wiggled = Math.max(6, base + (Math.random() * 4 - 2));
            const pct = Math.min(100, (wiggled / 34) * 100);
            bar.style.height = pct + '%';
            bar.dataset.value = Math.round(wiggled);
          });
        }
        const obs = new IntersectionObserver((entries) => {
          entries.forEach(entry => {
            if (entry.isIntersecting){
              setInterval(jitter, 2800);
              obs.disconnect();
            }
          });
        }, { threshold: 0.35 });
        obs.observe(card);
      })();

      // ---------- Card 3: cost number counts down like an odometer ----------
      (function(){
        const el = document.getElementById('costNumber');
        if (!el) return;
        const card = el.closest('.solution-card');
        if (window.matchMedia('(prefers-reduced-motion: reduce)').matches){
          el.textContent = '$0.12';
          return;
        }
        const from = 0.42, to = 0.12, duration = 1100;
        function run(){
          const start = performance.now();
          function frame(now){
            const t = Math.min(1, (now - start) / duration);
            const eased = 1 - Math.pow(1 - t, 3);
            const val = from - (from - to) * eased;
            el.textContent = '$' + val.toFixed(2);
            if (t < 1) requestAnimationFrame(frame);
          }
          requestAnimationFrame(frame);
        }
        const obs = new IntersectionObserver((entries) => {
          entries.forEach(entry => {
            if (entry.isIntersecting){ setTimeout(run, 500); obs.disconnect(); }
          });
        }, { threshold: 0.35 });
        obs.observe(card);
      })();

      // ---------- Card 5: reply counter (waveform now runs continuously via CSS) ----------
      (function(){
        const bars = document.querySelectorAll('#patchBars i');
        if (!bars.length) return;
        const counter = document.getElementById('replyCount');
        const card = bars[0].closest('.solution-card');
        if (window.matchMedia('(prefers-reduced-motion: reduce)').matches){
          if (counter) counter.textContent = '28';
          return;
        }
        const obs = new IntersectionObserver((entries) => {
          entries.forEach(entry => {
            if (entry.isIntersecting){
              if (counter){
                let n = 90;
                const step = () => {
                  n = Math.max(28, n - 4);
                  counter.textContent = n;
                  if (n > 28) setTimeout(step, 35);
                };
                setTimeout(step, 1650);
              }
              obs.disconnect();
            }
          });
        }, { threshold: 0.35 });
        obs.observe(card);
      })();

      // ---------- Card 6: dismissible chat bubble (waveform now runs continuously via CSS) ----------
      (function(){
        const chip2 = document.getElementById('chatChip2');
        const closeBtn = document.getElementById('chatClose');
        if (chip2 && closeBtn){
          closeBtn.addEventListener('click', (e) => {
            e.preventDefault();
            chip2.classList.add('dismissed');
          });
          const card2 = chip2.closest('.solution-card');
          if (!window.matchMedia('(prefers-reduced-motion: reduce)').matches){
            const obs2 = new IntersectionObserver((entries) => {
              entries.forEach(entry => {
                if (entry.isIntersecting){
                  setTimeout(() => chip2.classList.add('done'), 2200);
                  obs2.disconnect();
                }
              });
            }, { threshold: 0.35 });
            obs2.observe(card2);
          } else {
            chip2.classList.add('done');
          }
        }
      })();

      // ---------- Card 7: icons light up in sync with the traveling dot, chip cycles ----------
      (function(){
        const track = document.getElementById('escTrack');
        if (!track) return;
        const icons = [...track.querySelectorAll('.esc-icon')];
        const card = track.closest('.solution-card');
        const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

        if (reduceMotion){
          icons[icons.length - 1].classList.add('lit');
        } else {
          const obs = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
              if (entry.isIntersecting){
                const DURATION = 4000; // matches escTravel animation-duration
                const marks = [0.05, 0.30, 0.60, 0.92].map(f => f * DURATION);
                function lightSequence(){
                  icons.forEach(i => i.classList.remove('lit'));
                  marks.forEach((t, idx) => setTimeout(() => icons[idx].classList.add('lit'), t));
                }
                lightSequence();
                setInterval(lightSequence, DURATION);
                obs.disconnect();
              }
            });
          }, { threshold: 0.35 });
          obs.observe(card);
        }

        // Resolution chip cycles through different outcomes
        const chip = document.getElementById('escChip');
        const title = document.getElementById('escTitle');
        const sub = document.getElementById('escSub');
        const tag = document.getElementById('escTag');
        if (!chip || reduceMotion) return;
        const outcomes = [
          { title: 'They fix it, the alert stops', sub: 'No incident goes unanswered on any channel', tag: 'Resolved' },
          { title: 'Escalated to the on-call engineer', sub: 'Phone call answered in under a minute', tag: 'Escalated' },
          { title: 'Fixed before the customer noticed', sub: 'Resolved in 11 minutes, start to finish', tag: 'Resolved' }
        ];
        let oi = 0;
        function swapOutcome(){
          chip.classList.add('swapping');
          setTimeout(() => {
            oi = (oi + 1) % outcomes.length;
            title.textContent = outcomes[oi].title;
            sub.textContent = outcomes[oi].sub;
            tag.textContent = outcomes[oi].tag;
            chip.classList.remove('swapping');
          }, 260);
        }
        const obs2 = new IntersectionObserver((entries) => {
          entries.forEach(entry => {
            if (entry.isIntersecting){
              setInterval(swapOutcome, 4000);
              obs2.disconnect();
            }
          });
        }, { threshold: 0.35 });
        obs2.observe(card);
      })();

      // ---------- Card 8: calendar slot booking rotates live, cells are real links ----------
      (function(){
        const grid = document.getElementById('calGrid');
        const chip = document.getElementById('calChip');
        const chipDay = document.getElementById('calDay');
        if (!grid) return;
        const cells = [...grid.querySelectorAll('a')];
        let current = cells.find(c => c.classList.contains('slot-booked'));
        const card = grid.closest('.solution-card');

        if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

        function bookNext(){
          const choices = cells.filter(c => c !== current);
          const next = choices[Math.floor(Math.random() * choices.length)];
          current.classList.remove('slot-booked');
          current.textContent = '';
          next.classList.add('slot-booked');
          next.textContent = next.dataset.day.split(', ')[1].replace(/(am|pm)/, '');
          current = next;

          if (chip && chipDay){
            chip.classList.add('swapping');
            setTimeout(() => {
              chipDay.textContent = next.dataset.day;
              chip.classList.remove('swapping');
            }, 260);
          }
        }

        const obs = new IntersectionObserver((entries) => {
          entries.forEach(entry => {
            if (entry.isIntersecting){
              setInterval(bookNext, 4200);
              obs.disconnect();
            }
          });
        }, { threshold: 0.35 });
        obs.observe(card);
      })();

      // ---------- Solutions cards: play their internal animations once in view ----------
      (function(){
        const cards = document.querySelectorAll('.solution-card');
        const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
        if (reduceMotion){ cards.forEach(c => c.classList.add('in-view')); }
        else{
          const obs = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
              if (entry.isIntersecting){
                entry.target.classList.add('in-view');
                obs.unobserve(entry.target);
              }
            });
          }, { threshold: 0.35 });
          cards.forEach(c => obs.observe(c));
        }
      })();

      // ---------- Card 2: looping typewriter effect in the search mockup ----------
      (function(){
        const el = document.getElementById('typedQuery');
        if (!el) return;
        if (window.matchMedia('(prefers-reduced-motion: reduce)').matches){
          el.textContent = 'support ticket status';
          return;
        }
        const queries = ['support ticket status', 'refund policy', 'deploy failure logs'];
        let qi = 0, ci = 0, deleting = false;

        function tick(){
          const current = queries[qi];
          if (!deleting){
            ci++;
            el.textContent = current.slice(0, ci);
            if (ci === current.length){ deleting = true; setTimeout(tick, 1400); return; }
          } else {
            ci--;
            el.textContent = current.slice(0, ci);
            if (ci === 0){ deleting = false; qi = (qi + 1) % queries.length; }
          }
          setTimeout(tick, deleting ? 35 : 65);
        }
        tick();
      })();

      // ---------- Card 3: chat bubble shows typing dots, then the message ----------
      (function(){
        const chip = document.getElementById('chatChip');
        if (!chip) return;
        const card = chip.closest('.solution-card');
        if (window.matchMedia('(prefers-reduced-motion: reduce)').matches){
          chip.classList.add('done');
          return;
        }
        const obs = new IntersectionObserver((entries) => {
          entries.forEach(entry => {
            if (entry.isIntersecting){
              setTimeout(() => chip.classList.add('done'), 2200);
              obs.disconnect();
            }
          });
        }, { threshold: 0.35 });
        obs.observe(card);
      })();

      // ---------- Regions panel: live latency jitter ----------
      (function(){
        const rows = document.querySelectorAll('.region-row');
        if (!rows.length) return;
        if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
        function jitter(){
          rows.forEach(row => {
            const base = parseFloat(row.dataset.base);
            const ms = Math.max(8, Math.round(base + (Math.random() * 6 - 3)));
            row.querySelector('.region-ms').innerHTML = ms + '<em>ms</em>';
            const pct = Math.min(90, Math.max(15, Math.round((ms / 70) * 100)));
            row.querySelector('.region-load i').style.width = pct + '%';
          });
        }
        setInterval(jitter, 2400);
      })();

      // ---------- Live pipeline terminal: ticking metrics + rolling log ----------
      (function(){
        const log = document.getElementById('log');
        const mUptime = document.getElementById('mUptime');
        const mDeploys = document.getElementById('mDeploys');
        const mLatency = document.getElementById('mLatency');
        if (!log) return;
        const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

        const lines = [
          'build passed — api/checkout',
          'tests 142/142 — core',
          'deployed to production — 11s',
          'healthcheck ok — all regions',
          'cache warmed — edge nodes',
          'rollback window closed — stable'
        ];
        let deploys = 7;

        function addLine(){
          const text = lines[Math.floor(Math.random() * lines.length)];
          const row = document.createElement('div');
          row.innerHTML = '<span class="ok">✓</span> ' + text;
          log.appendChild(row);
          while (log.children.length > 6) log.removeChild(log.firstChild);
          log.scrollTop = log.scrollHeight;
        }
        function tickMetrics(){
          const uptime = (99.9 + Math.random() * 0.09).toFixed(2);
          const latency = 128 + Math.floor(Math.random() * 30);
          mUptime.innerHTML = uptime + '<em>%</em>';
          mLatency.innerHTML = latency + '<em>ms</em>';
          if (Math.random() > 0.6){ deploys++; mDeploys.textContent = deploys; }
        }

        for (let i = 0; i < 4; i++) addLine();

        if (!reduceMotion){
          setInterval(addLine, 2600);
          setInterval(tickMetrics, 2000);
        }
      })();

      // ---------- Contact form: real client-side validation + submit handling ----------
      (function(){
        const form = document.getElementById('contactForm');
        const status = document.getElementById('formStatus');
        const submitBtn = document.getElementById('submitBtn');

        const fields = {
          name: { el: document.getElementById('name'), err: document.getElementById('nameError'),
            validate: v => v.trim().length > 0 ? '' : 'Please enter your name.' },
          email: { el: document.getElementById('email'), err: document.getElementById('emailError'),
            validate: v => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v.trim()) ? '' : 'Please enter a valid email.' },
          message: { el: document.getElementById('message'), err: document.getElementById('messageError'),
            validate: v => v.trim().length >= 10 ? '' : 'Tell us a little more (10+ characters).' }
        };

        function validateField(key){
          const f = fields[key];
          const msg = f.validate(f.el.value);
          f.err.textContent = msg;
          f.el.closest('.field').classList.toggle('has-error', !!msg);
          return !msg;
        }

        Object.keys(fields).forEach(key => {
          fields[key].el.addEventListener('blur', () => validateField(key));
        });

        form.addEventListener('submit', function(e){
          e.preventDefault();
          const results = Object.keys(fields).map(validateField);
          if (results.includes(false)){
            status.textContent = 'Please fix the highlighted fields.';
            status.classList.remove('success');
            return;
          }

          submitBtn.disabled = true;
          submitBtn.textContent = 'Sending…';
          status.textContent = '';

          // NOTE: there is no backend wired up in this static file, so this
          // simulates the send. To actually deliver messages, point this form
          // at a service like Formspree, or POST to your own API endpoint here.
          setTimeout(() => {
            status.textContent = "Thanks — we'll reply within one business day.";
            status.classList.add('success');
            submitBtn.disabled = false;
            submitBtn.textContent = 'Send message';
            form.reset();
          }, 700);
        });
      })();


    return () => {
      cleanupFns.forEach((fn) => {
        try {
          fn();
        } catch (e) {
          // no-op: element may already be gone
        }
      });
      window.setInterval = realSetInterval;
      window.IntersectionObserver = realIntersectionObserver;
    };
  }, []);

  return null;
}
