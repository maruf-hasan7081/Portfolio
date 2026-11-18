"use client";

import { useId, useState } from "react";
import { API_BASE } from "@/lib/getPortfolio";
import { validateContactFields } from "@/lib/validateContact";

function Arrow({ external = false }) {
  return (
    <svg className="action-arrow" aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <path d={external ? "M6 18 18 6M8 6h10v10" : "M4 12h15m-6-6 6 6-6 6"} />
    </svg>
  );
}

const emptyFields = { name: "", email: "", message: "", company: "" };

export default function ContactForm({ recipientEmail }) {
  const formId = useId();
  const nameId = `${formId}-name`;
  const emailId = `${formId}-email`;
  const messageId = `${formId}-message`;

  const [fields, setFields] = useState(emptyFields);
  const [errors, setErrors] = useState({});
  const [touched, setTouched] = useState({});
  const [status, setStatus] = useState("idle");
  const [serverError, setServerError] = useState("");

  if (!recipientEmail) return null;

  function setField(key, value) {
    setFields((prev) => {
      const next = { ...prev, [key]: value };
      if (touched[key]) {
        const nextErrors = validateContactFields(next);
        setErrors((current) => {
          const merged = { ...current };
          if (nextErrors[key]) merged[key] = nextErrors[key];
          else delete merged[key];
          return merged;
        });
      }
      return next;
    });
    if (status !== "idle") {
      setStatus("idle");
      setServerError("");
    }
  }

  function blurField(key) {
    setTouched((prev) => ({ ...prev, [key]: true }));
    const nextErrors = validateContactFields({ ...fields });
    setErrors((prev) => ({ ...prev, [key]: nextErrors[key] }));
  }

  async function handleSubmit(event) {
    event.preventDefault();
    const nextErrors = validateContactFields(fields);
    setErrors(nextErrors);
    setTouched({ name: true, email: true, message: true });
    setServerError("");

    if (Object.keys(nextErrors).length > 0) {
      setStatus("invalid");
      const firstKey = ["name", "email", "message"].find((k) => nextErrors[k]);
      if (firstKey) {
        document.getElementById(firstKey === "name" ? nameId : firstKey === "email" ? emailId : messageId)?.focus();
      }
      return;
    }

    setStatus("sending");
    try {
      const res = await fetch(`${API_BASE}/api/v1/contact/`, {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({
          name: fields.name.trim(),
          email: fields.email.trim(),
          message: fields.message.trim(),
          company: fields.company,
        }),
      });
      const payload = await res.json().catch(() => ({}));
      if (!res.ok) {
        setServerError(payload.detail || "Could not send. Try again or email directly.");
        setStatus("error");
        return;
      }
      setStatus("sent");
      setFields(emptyFields);
      setTouched({});
    } catch {
      setServerError("Network error — is Django running on port 8000?");
      setStatus("error");
    }
  }

  return (
    <form className="contact-form" noValidate onSubmit={handleSubmit} aria-labelledby={`${formId}-title`}>
      <h3 id={`${formId}-title`} className="sr-only">
        Contact form
      </h3>

      <label htmlFor={nameId}>
        Your name
        <input
          id={nameId}
          name="name"
          type="text"
          autoComplete="name"
          className={errors.name && touched.name ? "input-invalid" : undefined}
          value={fields.name}
          onChange={(e) => setField("name", e.target.value)}
          onBlur={() => blurField("name")}
          aria-invalid={Boolean(errors.name && touched.name)}
          aria-describedby={errors.name && touched.name ? `${nameId}-error` : undefined}
        />
        {errors.name && touched.name ? (
          <span id={`${nameId}-error`} className="field-error" role="alert">
            {errors.name}
          </span>
        ) : null}
      </label>

      <label htmlFor={emailId}>
        Your email
        <input
          id={emailId}
          name="email"
          type="text"
          inputMode="email"
          autoComplete="email"
          className={errors.email && touched.email ? "input-invalid" : undefined}
          value={fields.email}
          onChange={(e) => setField("email", e.target.value)}
          onBlur={() => blurField("email")}
          aria-invalid={Boolean(errors.email && touched.email)}
          aria-describedby={errors.email && touched.email ? `${emailId}-error` : undefined}
        />
        {errors.email && touched.email ? (
          <span id={`${emailId}-error`} className="field-error" role="alert">
            {errors.email}
          </span>
        ) : null}
      </label>

      <label className="contact-message" htmlFor={messageId}>
        Your message
        <textarea
          id={messageId}
          name="message"
          rows={4}
          className={errors.message && touched.message ? "input-invalid" : undefined}
          value={fields.message}
          onChange={(e) => setField("message", e.target.value)}
          onBlur={() => blurField("message")}
          aria-invalid={Boolean(errors.message && touched.message)}
          aria-describedby={errors.message && touched.message ? `${messageId}-error` : undefined}
        />
        {errors.message && touched.message ? (
          <span id={`${messageId}-error`} className="field-error" role="alert">
            {errors.message}
          </span>
        ) : null}
      </label>

      <input
        type="text"
        name="company"
        value={fields.company}
        onChange={(e) => setField("company", e.target.value)}
        className="contact-honeypot"
        tabIndex={-1}
        autoComplete="off"
        aria-hidden="true"
      />

      {status === "sent" ? (
        <p className="contact-form-status contact-form-status--success" role="status">
          Thanks! Your message was received.
        </p>
      ) : null}

      {status === "invalid" ? (
        <p className="contact-form-status contact-form-status--error" role="alert">
          Fix the highlighted fields and try again.
        </p>
      ) : null}

      {status === "error" && serverError ? (
        <p className="contact-form-status contact-form-status--error" role="alert">
          {serverError}{" "}
          <a href={`mailto:${recipientEmail.trim()}`}>Email {recipientEmail.trim()} directly</a>
        </p>
      ) : null}

      <button type="submit" className="btn btn-primary" disabled={status === "sending"}>
        {status === "sending" ? "Sending…" : "Send message"} <Arrow />
      </button>
    </form>
  );
}