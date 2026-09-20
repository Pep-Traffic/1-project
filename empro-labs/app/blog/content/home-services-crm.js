import Link from "next/link";

export default function HomeServicesCrm() {
  return (
    <div className="post-body">
      <p>
        Most home service businesses end up with a CRM the same way: somebody sold them one, it got
        half set up, and now it holds a contact list nobody trusts. The scheduling side works, the
        follow-up side does not, and leads still get lost between the phone ringing and the job
        getting booked.
      </p>
      <p>
        A CRM for a home services business has a narrower job than the category suggests. It is not
        there to be a database. It is there to make sure every inquiry gets answered fast enough to
        win, and that nothing goes quiet without somebody noticing. This is what that actually
        requires, and which parts of the software you can ignore.
      </p>

      <h2>What a home services CRM has to do</h2>
      <p>
        Strip away the feature lists and there are five jobs. If a system does these, it works. If it
        does forty other things but misses one of these, it will still leak jobs.
      </p>
      <ul>
        <li>
          <b>Answer instantly.</b> A missed call has to trigger an automatic text within seconds, not
          a task for somebody to call back later. Emergency work is won by whoever replies first.
        </li>
        <li>
          <b>Put every channel in one inbox.</b> Calls, form fills, texts, Facebook messages and
          Google Business Profile messages landing in one place, tied to one contact record.
        </li>
        <li>
          <b>Chase the quote.</b> An estimate that goes out and hears nothing back needs an automatic
          follow-up sequence, not a sticky note.
        </li>
        <li>
          <b>Ask for the review.</b> A review request that fires when the job closes, automatically,
          because nobody remembers to send them manually.
        </li>
        <li>
          <b>Show where jobs come from.</b> Call tracking and form tracking, so you know which
          channel produced which booked job, not just which produced clicks.
        </li>
      </ul>

      <h2>Field service software and CRM are not the same thing</h2>
      <p>
        This is where most of the confusion lives. Tools like ServiceTitan, Jobber and Housecall Pro
        are field service management platforms. They are strong at what happens <em>after</em> a job
        is sold: scheduling, dispatch, estimates, invoicing, job costing, technician management.
      </p>
      <p>
        A CRM in the sense that matters here is about what happens <em>before</em> the job is sold:
        capturing the lead, answering it fast, and chasing it until it books or dies. Platforms like
        GoHighLevel sit on that side.
      </p>
      <p>
        Plenty of contractors run both, and that is a reasonable setup. The mistake is buying field
        service software, discovering it does not aggressively chase cold estimates, and concluding
        that CRMs do not work. You bought a tool for a different stage of the job.
      </p>
      <p>
        If you are choosing one and can only run one, the question is simple: is your problem that
        jobs are chaotic once sold, or that not enough jobs get sold? Chaos after the sale is a field
        service software problem. Leads going quiet is a CRM problem.
      </p>

      <h2>Speed to lead is the whole game</h2>
      <p>
        Every other feature is downstream of response time. A homeowner with a burst pipe or a dead
        furnace calls several companies and books whoever picks up or replies first. They are not
        comparing your reviews at 11pm.
      </p>
      <p>
        So the first thing to configure, before any pipeline or tag structure, is the missed-call
        text-back. When a call goes unanswered, the system sends a text immediately. Two things make
        the difference between one that works and one that annoys people:
      </p>
      <ul>
        <li>
          It has to identify the business by name. A text from an unknown number saying &ldquo;sorry we
          missed you&rdquo; reads as spam.
        </li>
        <li>
          It has to ask one qualifying question, not just apologize. &ldquo;Is the system out
          completely, or running badly?&rdquo; starts a conversation and sorts the job at the same
          time.
        </li>
      </ul>
      <p>
        We cover the mechanics of the layer that handles this inside GoHighLevel in{" "}
        <Link href="/blog/what-is-lead-connector-crm">our guide to Lead Connector</Link>.
      </p>

      <h2>The pipeline stages that actually earn their place</h2>
      <p>
        Most CRM setups fail because somebody built fifteen pipeline stages in a planning meeting and
        nobody updates them. Stages are only useful if a job sitting too long in one of them triggers
        something.
      </p>
      <p>
        Five stages is usually right for a home services business:
      </p>
      <ul>
        <li><b>New lead</b> — captured, not yet contacted</li>
        <li><b>Contacted</b> — a real two-way conversation has happened</li>
        <li><b>Estimate sent</b> — the number is with the customer</li>
        <li><b>Follow-up</b> — quiet for more than a few days, automation is chasing</li>
        <li><b>Booked</b> — on the calendar</li>
      </ul>
      <p>
        The stage that matters most is the fourth one. That is where revenue is lost in every trade,
        and it is the only stage that exists purely so an automation has somewhere to fire from.
      </p>

      <h2>What to skip</h2>
      <p>
        CRM vendors sell breadth. Most of it is irrelevant to a business with a handful of trucks.
        You can safely ignore, at least at first:
      </p>
      <ul>
        <li>
          <b>Lead scoring.</b> With the volume a local contractor handles, you can read every lead
          yourself. Scoring solves a problem you do not have.
        </li>
        <li>
          <b>Long email nurture campaigns.</b> Home services buying decisions are short and urgent.
          Nobody reads a six-email drip about gutters. Texts do the work.
        </li>
        <li>
          <b>Custom field sprawl.</b> Every field somebody has to fill in manually is a field that
          will be empty within a month. Capture what the intake form can capture automatically.
        </li>
        <li>
          <b>Social media scheduling bundled into the CRM.</b> It is rarely good, and it is not what
          is costing you jobs.
        </li>
      </ul>

      <h2>The intake form is part of the CRM</h2>
      <p>
        This gets treated as a website decision, but it determines what your CRM can do. A form that
        collects a name, email and &ldquo;message&rdquo; gives you nothing to route or automate on. A
        form that asks the two or three questions that sort the job lets everything downstream work.
      </p>
      <p>
        For an HVAC company that means asking whether the system is running at all, and the age of the
        unit — the difference between a service call and an install. For a plumber it means asking
        whether water is actively leaking. For a remodeler it means asking about budget range and
        target start month, because the follow-up sequence for a months-long decision is different
        from an emergency.
      </p>
      <p>
        We publish the exact intake fields, text-back message and pipeline we would configure for each
        trade on the <Link href="/industries">industry pages</Link>.
      </p>

      <h2>A realistic setup order</h2>
      <p>
        If you are starting from nothing, the order matters more than the platform. Doing these in
        sequence means each step pays for the next.
      </p>
      <ul>
        <li><b>First:</b> missed-call text-back on your existing number. Cheapest change, biggest return.</li>
        <li><b>Second:</b> one inbox, so calls, texts and form fills stop living in three places.</li>
        <li><b>Third:</b> an intake form that asks the sorting questions.</li>
        <li><b>Fourth:</b> the estimate follow-up sequence.</li>
        <li><b>Fifth:</b> automatic review requests on job close.</li>
        <li><b>Last:</b> call and form tracking, so you can see cost per booked job by channel.</li>
      </ul>
      <p>
        Most businesses try to do all six at once, stall on the configuration, and end up with none of
        them running. One at a time, each fully working before the next, gets you there.
      </p>

      <h2>Before you buy anything</h2>
      <p>
        Two questions worth answering honestly first. How many calls went unanswered last week? And
        how many estimates from last month never got a second contact? If you cannot answer either,
        that is the real starting point — not a software comparison.
      </p>
      <p>
        A CRM does not create demand. It stops you losing the demand you already paid for. If you are
        buying one hoping it will bring in work, the money is better spent on{" "}
        <Link href="/services/seo">getting found</Link> or{" "}
        <Link href="/services/ads-management">paid campaigns</Link> first, with the CRM ready to catch
        what they produce.
      </p>
    </div>
  );
}
