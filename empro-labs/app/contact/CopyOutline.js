"use client";

import { useEffect, useRef, useState } from "react";

const OUTLINE = [
  "Current site:",
  "Trade and service area:",
  "Where leads come from now:",
  "What's going wrong:",
  "What done looks like, and by when:",
].join("\n");

const LABELS = {
  idle: "Copy this outline",
  copied: "Copied — paste it in the message box",
  failed: "Copy didn't work — select the list above",
};

export default function CopyOutline() {
  const [state, setState] = useState("idle");
  const timer = useRef(null);

  useEffect(() => () => clearTimeout(timer.current), []);

  async function handleCopy() {
    let ok = false;

    try {
      if (navigator.clipboard && window.isSecureContext) {
        await navigator.clipboard.writeText(OUTLINE);
        ok = true;
      }
    } catch {
      ok = false;
    }

    if (!ok) {
      try {
        const ta = document.createElement("textarea");
        ta.value = OUTLINE;
        ta.setAttribute("readonly", "");
        ta.style.position = "fixed";
        ta.style.top = "-1000px";
        ta.style.opacity = "0";
        document.body.appendChild(ta);
        ta.select();
        ok = document.execCommand("copy");
        document.body.removeChild(ta);
      } catch {
        ok = false;
      }
    }

    setState(ok ? "copied" : "failed");
    clearTimeout(timer.current);
    timer.current = setTimeout(() => setState("idle"), 2600);
  }

  return (
    <>
      <button type="button" className="btn btn-ghost prep-copy" onClick={handleCopy}>
        {LABELS[state]}
      </button>
      <span className="sr-only" role="status" aria-live="polite">
        {state === "copied" ? "Outline copied to clipboard." : ""}
        {state === "failed" ? "Copy failed. Select the list above instead." : ""}
      </span>
    </>
  );
}
