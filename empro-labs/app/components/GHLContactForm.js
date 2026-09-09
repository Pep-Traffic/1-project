"use client";

import Script from "next/script";

export default function GHLContactForm() {
  return (
    <>
      <iframe
        src="https://link.pmcasolutions.com/widget/form/kFLV4CeQUICdgxlhlLX2"
        style={{ width: "100%", height: "494px", border: "none", borderRadius: "8px" }}
        id="inline-kFLV4CeQUICdgxlhlLX2"
        data-layout='{"id":"INLINE"}'
        data-trigger-type="alwaysShow"
        data-trigger-value=""
        data-activation-type="alwaysActivated"
        data-activation-value=""
        data-deactivation-type="neverDeactivate"
        data-deactivation-value=""
        data-form-name="Form 0"
        data-height="494"
        data-layout-iframe-id="inline-kFLV4CeQUICdgxlhlLX2"
        data-form-id="kFLV4CeQUICdgxlhlLX2"
        data-cookie-consent="true"
        data-cookie-consent-provider="auto"
        title="Empro Labs contact form"
      />
      <Script src="https://link.pmcasolutions.com/js/form_embed.js" strategy="afterInteractive" />
    </>
  );
}
