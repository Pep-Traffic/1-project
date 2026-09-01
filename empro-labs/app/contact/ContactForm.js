"use client";

import { useState } from "react";

export default function ContactForm() {
  const [values, setValues] = useState({ name: "", email: "", message: "" });
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState({ text: "", success: false });
  const [submitting, setSubmitting] = useState(false);

  function validate(field, value) {
    if (field === "name") return value.trim().length > 0 ? "" : "Please enter your name.";
    if (field === "email")
      return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value.trim()) ? "" : "Please enter a valid email.";
    if (field === "message")
      return value.trim().length >= 10 ? "" : "Tell us a little more (10+ characters).";
    return "";
  }

  function handleChange(field, value) {
    setValues((v) => ({ ...v, [field]: value }));
  }

  function handleBlur(field) {
    setErrors((e) => ({ ...e, [field]: validate(field, values[field]) }));
  }

  function handleSubmit(e) {
    e.preventDefault();
    const newErrors = {
      name: validate("name", values.name),
      email: validate("email", values.email),
      message: validate("message", values.message),
    };
    setErrors(newErrors);

    if (Object.values(newErrors).some(Boolean)) {
      setStatus({ text: "Please fix the highlighted fields.", success: false });
      return;
    }

    setSubmitting(true);
    setStatus({ text: "", success: false });

    // NOTE: there is no backend wired up here, so this simulates the send.
    // To actually deliver messages, point this at a service like Formspree,
    // or POST to your own API route here.
    setTimeout(() => {
      setStatus({ text: "Thanks — we'll reply within one business day.", success: true });
      setSubmitting(false);
      setValues({ name: "", email: "", message: "" });
    }, 700);
  }

  return (
    <form onSubmit={handleSubmit} noValidate>
      <div className={`field${errors.name ? " has-error" : ""}`}>
        <label htmlFor="name">Name</label>
        <input
          type="text"
          id="name"
          name="name"
          autoComplete="name"
          value={values.name}
          onChange={(e) => handleChange("name", e.target.value)}
          onBlur={() => handleBlur("name")}
          required
        />
        <span className="error">{errors.name}</span>
      </div>

      <div className={`field${errors.email ? " has-error" : ""}`}>
        <label htmlFor="email">Email</label>
        <input
          type="email"
          id="email"
          name="email"
          autoComplete="email"
          value={values.email}
          onChange={(e) => handleChange("email", e.target.value)}
          onBlur={() => handleBlur("email")}
          required
        />
        <span className="error">{errors.email}</span>
      </div>

      <div className={`field${errors.message ? " has-error" : ""}`}>
        <label htmlFor="message">What are you building?</label>
        <textarea
          id="message"
          name="message"
          rows={4}
          value={values.message}
          onChange={(e) => handleChange("message", e.target.value)}
          onBlur={() => handleBlur("message")}
          required
        ></textarea>
        <span className="error">{errors.message}</span>
      </div>

      <button type="submit" className="btn btn-primary" disabled={submitting}>
        {submitting ? "Sending…" : "Send message"}
      </button>
      <p className={`form-status${status.success ? " success" : ""}`} role="status" aria-live="polite">
        {status.text}
      </p>
    </form>
  );
}
