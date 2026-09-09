export default function WhatIsLeadConnectorCrm() {
  return (
    <div className="post-body">
      <p>
        If you've spent any time inside a GoHighLevel account, you've seen the name "Lead Connector"
        somewhere — in the mobile app, in a phone number setting, or in an email that mentions
        LC Phone or LC Email. It's not a separate product you buy or a third-party integration.
        Lead Connector is the built-in calling, texting, and review-request layer that ships with
        every GoHighLevel account, and understanding what it actually does is the difference between
        a GHL account that responds to leads in seconds and one that quietly drops them.
      </p>

      <h2>What Lead Connector CRM actually is</h2>
      <p>
        GoHighLevel is the CRM and funnel-building platform as a whole. Lead Connector is the
        communication layer inside it — the part that handles phone numbers, two-way texting, email
        sending, missed-call automations, and review requests. When people search "Lead Connector
        CRM," they're usually looking for one of two things: the mobile app that lets business owners
        text and call leads from their phone, or an explanation of how the calling/texting
        infrastructure inside GHL works.
      </p>
      <p>
        In practice, Lead Connector covers:
      </p>
      <ul>
        <li>Phone number provisioning and call routing (LC Phone)</li>
        <li>Two-way SMS conversations tied to a contact's CRM record</li>
        <li>Transactional and marketing email sending (LC Email)</li>
        <li>Missed-call text-back automation</li>
        <li>Review request and reputation management workflows</li>
        <li>The Lead Connector mobile app, for responding to leads outside the desktop dashboard</li>
      </ul>

      <h2>Why most GHL accounts have it half-configured</h2>
      <p>
        Lead Connector comes active by default on a new GHL account, but "active" isn't the same as
        "set up correctly." The accounts we take over from a previous freelancer or a self-service
        setup usually have the same handful of gaps:
      </p>
      <ul>
        <li>A phone number provisioned but never registered for A2P 10DLC compliance, so texts silently fail to deliver</li>
        <li>Missed-call text-back left on the default template, with no actual business information in it</li>
        <li>Review requests never turned on, so completed jobs generate zero new Google reviews</li>
        <li>Email sending on a shared or unverified domain, landing in spam instead of the inbox</li>
      </ul>
      <p>
        None of these are visible from the dashboard's main view — you have to know to check each one
        individually, which is why they're the first things we audit on a new GHL engagement.
      </p>

      <h2>A2P 10DLC registration: the step that gets skipped</h2>
      <p>
        This is the single most common reason a GHL account's texts stop delivering. Carriers require
        Application-to-Person (A2P) 10-digit long code registration for any business sending SMS at
        scale — GHL surfaces this as a compliance step inside the Lead Connector phone settings, but
        it's easy to skip when you're focused on building funnels. An unregistered number can send a
        handful of texts before carriers start filtering them, which shows up as "the automation says
        it sent but the lead never got it."
      </p>

      <h2>Setting up missed-call text-back properly</h2>
      <p>
        The default missed-call text-back message is generic and immediately recognizable as an
        automation. A version that actually recovers the lead names the business, sets a real
        expectation ("we'll call you back within the hour"), and — for service businesses — asks the
        one qualifying question that matters (what's the issue, or what service they need) so the
        follow-up call starts with useful information instead of "so, what did you need?"
      </p>

      <h2>Review requests: the feature most accounts never turn on</h2>
      <p>
        Lead Connector can trigger a review request automatically once a job or opportunity is marked
        complete — via text, with a direct link to your Google Business Profile. Most accounts we
        inherit have this feature available but never activated, which means every finished job is a
        missed chance at a review that would have taken zero manual effort to request.
      </p>

      <h2>How this fits into a full GHL build</h2>
      <p>
        Lead Connector is the layer that makes a GHL funnel or CRM setup actually respond to people in
        real time — the funnel captures the lead, and Lead Connector is what calls, texts, and
        follows up with them. Getting it configured correctly (numbers registered, templates written
        for the actual business, review requests turned on) is a standard part of any GHL account we
        set up, not a separate add-on.
      </p>

      <h2>Frequently asked questions</h2>
      <h3>Is Lead Connector a separate product from GoHighLevel?</h3>
      <p>
        No — it's the built-in communication layer inside every GoHighLevel account, not a separate
        purchase or integration.
      </p>
      <h3>Why aren't my Lead Connector texts sending?</h3>
      <p>
        The most common cause is an unregistered or incomplete A2P 10DLC compliance submission — carriers
        will silently filter texts from a number that hasn't completed this step.
      </p>
      <h3>Can Lead Connector send automatic review requests?</h3>
      <p>
        Yes, tied to a pipeline stage or job-completion trigger — it's available on every account but
        has to be explicitly configured and turned on.
      </p>
    </div>
  );
}
