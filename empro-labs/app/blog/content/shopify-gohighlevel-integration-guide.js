export default function ShopifyGoHighLevelIntegrationGuide() {
  return (
    <div className="post-body">
      <p>
        Most guides to connecting Shopify and GoHighLevel are still written for a Zapier-first world that
        doesn't exist anymore. They walk you through a "New Order" trigger, a "Create Contact" action, and
        call it done — no error handling, no mention of Shopify's GraphQL-only Admin API, and nothing about
        what happens when a webhook silently fails at 2am on Black Friday. This guide replaces that approach
        with the one we actually run for clients: a native webhook pipeline, mapped directly into a GoHighLevel
        workflow, with the failure modes handled up front instead of discovered in production.
      </p>

      <h2>Why the old Zapier-only approach is breaking down</h2>
      <p>
        Two things changed that most 2022–2023 tutorials never accounted for. First, Shopify has been
        sunsetting REST Admin API endpoints in favor of GraphQL-only access — order and customer data that
        used to be a simple REST call now needs a GraphQL query, and tutorials built on the old REST webhooks
        setup screen will walk you through fields that no longer exist. Second, per-task platforms like Zapier
        get expensive fast once you're past a few hundred orders a month, and every extra "step" in a Zap is
        another point of failure you don't control.
      </p>

      <table>
        <thead>
          <tr>
            <th>Cost driver</th>
            <th>Zapier (task-based)</th>
            <th>Native webhook pipeline</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>500 orders / month</td>
            <td>~$70–$100/mo (Professional tier task limits)</td>
            <td>~$0 (self-hosted webhook receiver)</td>
          </tr>
          <tr>
            <td>2,000+ orders / month</td>
            <td>$200+/mo, often requires Team tier</td>
            <td>Same infrastructure cost — flat</td>
          </tr>
          <tr>
            <td>Multi-step logic (branching by product tag, value, region)</td>
            <td>Each branch is a separate Zap or a Paths add-on</td>
            <td>Handled natively in GHL's workflow builder</td>
          </tr>
          <tr>
            <td>Failure visibility</td>
            <td>Buried in Zapier's task history</td>
            <td>Full control — you own the logs</td>
          </tr>
        </tbody>
      </table>

      <h2>Architecture overview — what you're actually building</h2>
      <p>
        The pipeline has three hops: Shopify fires a webhook the moment an order is created, a lightweight
        middleware endpoint receives and validates that payload, and that middleware calls GoHighLevel's API
        to create or update a contact and drop them into the right pipeline stage or workflow. The middleware
        hop is the part most tutorials skip entirely — without it, you have no place to log failures, retry
        dropped requests, or reshape the payload before GHL sees it.
      </p>
      <p>
        <em>
          [Insert architecture diagram here: Shopify → Webhook Receiver (n8n/Node) → GoHighLevel API. A simple
          three-box flow diagram outperforms a wall of text for this section — export one from Excalidraw or
          Figma at 1200px wide.]
        </em>
      </p>
      <p>
        This is also where GoHighLevel's 2026 AI Workflow Builder earns its keep. Instead of hand-building a
        dozen "if product tag contains X" branches, you can hand the workflow builder a plain-language
        instruction — "route orders over $500 to the VIP pipeline and text the owner" — and it drafts the
        branch logic for you, which you then review and tighten. Treat its output as a first draft, not a
        final answer; it still gets edge cases wrong on ambiguous product tagging.
      </p>

      <h2>Step 1 — Registering the Shopify webhook (GraphQL, not REST)</h2>
      <p>
        Shopify's current Admin API only accepts webhook registration through GraphQL. Here's the mutation
        that subscribes to new orders:
      </p>
      <pre>
        <code>{`mutation {
  webhookSubscriptionCreate(
    topic: ORDERS_CREATE
    webhookSubscription: {
      callbackUrl: "https://yourdomain.com/webhook/ghl"
      format: JSON
    }
  ) {
    webhookSubscription { id }
    userErrors { field message }
  }
}`}</code>
      </pre>
      <p>
        Run this once against your store's Admin API (Settings → Apps → Develop apps, with the
        <code>write_orders</code> scope granted). Always check <code>userErrors</code> in the response — a
        malformed callback URL fails silently in the UI but shows up here immediately.
      </p>
      <p>
        One detail that trips people up: Shopify's newer Customer Account API changes which consent fields
        are present on the order payload — specifically <code>email_marketing_consent</code> and
        <code>sms_marketing_consent</code> now follow a structured opt-in object instead of a flat boolean.
        If you're mapping consent into a GHL custom field for compliant SMS follow-up, map against the
        structured object, not the old flat field, or you'll quietly opt people into texts they never agreed to.
      </p>

      <h2>Step 2 — Mapping the payload to a GHL contact and opportunity</h2>
      <p>
        Here's a trimmed, realistic order payload and the fields you actually need out of it:
      </p>
      <pre>
        <code>{`{
  "id": 5384029183,
  "email": "jane@example.com",
  "phone": "+15551234567",
  "total_price": "249.00",
  "currency": "USD",
  "line_items": [
    { "title": "Pro Install Kit", "quantity": 1, "sku": "PIK-001" }
  ],
  "customer": {
    "first_name": "Jane",
    "last_name": "Doe",
    "email_marketing_consent": { "state": "subscribed" }
  },
  "tags": "vip, repeat-customer"
}`}</code>
      </pre>
      <p>
        Map <code>email</code> and <code>phone</code> to the contact's primary fields, <code>total_price</code>
        into a custom field like <code>last_order_value</code>, and <code>tags</code> into GHL contact tags
        directly — this is what lets your workflow branch logic key off "vip" or "repeat-customer" without any
        extra lookup. The most common failure we see here isn't a missing field, it's a type mismatch:
        <code>total_price</code> arrives as a string ("249.00"), and if your GHL workflow condition compares it
        as a number without casting, the branch silently never fires. Cast it explicitly in your middleware
        before it reaches GHL.
      </p>

      <h2>Step 3 — Triggering the GoHighLevel workflow</h2>
      <p>
        Once the contact and opportunity exist, your middleware calls GHL's API to enroll that contact in a
        workflow (or you trigger the workflow via GHL's own inbound webhook trigger, if you'd rather keep the
        branching logic entirely inside GHL). For most clients we recommend the latter — it keeps your
        automation logic visible and editable by a non-developer on your team, instead of buried in code only
        your agency can touch.
      </p>
      <p>
        <em>
          [Insert a 60–90 second Loom here: screen-record the GHL workflow builder mid-build, narrating how the
          "order value" branch splits VIP customers from standard ones, and how the AI Workflow Builder's
          suggested branch compares to the hand-tuned version. This is the single highest-value asset on the
          page — almost nothing ranking for this term has video of the actual GHL interface.]
        </em>
      </p>

      <h2>Step 4 — Error handling and retry logic (the part every tutorial skips)</h2>
      <p>
        Shopify retries a failed webhook delivery — anything that doesn't return a 2xx response — for up to 48
        hours, using an exponential backoff schedule. That window is your safety net, but only if your
        middleware actually returns the right status codes and you're logging what comes through. A minimal
        retry-aware receiver looks like this:
      </p>
      <pre>
        <code>{`app.post('/webhook/ghl', async (req, res) => {
  try {
    const payload = verifyShopifyHmac(req);       // reject if signature invalid
    await syncToGoHighLevel(payload);              // your mapping + GHL API call
    res.status(200).send('ok');
  } catch (err) {
    logFailedWebhook(req.body, err);               // so a bad payload is never silently lost
    res.status(500).send('retry');                 // tells Shopify to retry within the 48hr window
  }
});`}</code>
      </pre>
      <p>
        Verifying the HMAC signature on every request isn't optional — without it, your webhook endpoint is a
        public URL anyone can POST fake order data to. Log every failure with the raw payload attached, not
        just the error message; when something breaks at 2am, the payload is what tells you whether it was a
        Shopify-side format change or a bug in your own mapping.
      </p>

      <h2>Testing the pipeline end-to-end</h2>
      <p>
        <em>
          [Insert a backend screenshot here: GoHighLevel's webhook/API log panel showing a successful test
          payload landing and creating a contact. A real screenshot of your own account's log view is worth
          more for trust signals here than any amount of description.]
        </em>
      </p>
      <p>Before calling the pipeline production-ready, walk through this checklist:</p>
      <ul>
        <li>Place a real test order in Shopify (or use their order webhook test payload) and confirm it lands as a contact in GHL within seconds</li>
        <li>Confirm tags and custom fields (order value, product SKU) mapped correctly, not just email and phone</li>
        <li>Force a malformed payload and confirm your middleware logs it instead of crashing silently</li>
        <li>Confirm the HMAC signature check actually rejects an unsigned request</li>
        <li>Trigger the GHL workflow manually once and verify the branch logic (VIP vs. standard) fires correctly</li>
        <li>Check that refunds and cancellations update the GHL opportunity status, not just new orders</li>
        <li>Confirm SMS consent mapping respects the structured Customer Account API object, not the old flat field</li>
        <li>Load-test with a burst of 20+ orders to confirm nothing gets dropped under concurrent load</li>
        <li>Set up alerting (even a simple Slack webhook) on repeated middleware failures</li>
        <li>Document the mapping table for whoever maintains this after you</li>
      </ul>

      <h2>Frequently asked questions</h2>
      <h3>Do I still need Zapier at all for Shopify–GHL?</h3>
      <p>
        Not for the core order-to-contact sync — that's what this pipeline replaces. Zapier can still make
        sense for low-volume, one-off connections to a third tool that doesn't have a direct API you want to
        build against, where the task cost is trivial.
      </p>
      <h3>Does this work with Shopify Plus?</h3>
      <p>
        Yes, and Plus stores get access to additional webhook topics (like checkout abandonment at the
        script-editor level) that standard Shopify plans don't expose — worth building into the same pipeline
        if you're on Plus.
      </p>
      <h3>How do refunds and cancellations sync back to GHL?</h3>
      <p>
        Register a second webhook subscription for <code>ORDERS_CANCELLED</code> and <code>REFUNDS_CREATE</code>,
        and route both into the same middleware with logic that updates the existing GHL opportunity's status
        instead of creating a new contact — the contact already exists from the original order webhook.
      </p>
    </div>
  );
}
