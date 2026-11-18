const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;

export function validateContactFields({ name = "", email = "", message = "" }) {
  const errors = {};
  const trimmedName = String(name).trim();
  const trimmedEmail = String(email).trim();
  const trimmedMessage = String(message).trim();

  if (trimmedName.length < 2) {
    errors.name = "Please enter your name (at least 2 characters).";
  } else if (trimmedName.length > 120) {
    errors.name = "Name is too long.";
  }

  if (!trimmedEmail) {
    errors.email = "Email is required.";
  } else if (!EMAIL_PATTERN.test(trimmedEmail)) {
    errors.email = "Enter a valid email address.";
  } else if (trimmedEmail.length > 254) {
    errors.email = "Email is too long.";
  }

  if (trimmedMessage.length < 10) {
    errors.message = "Message should be at least 10 characters.";
  } else if (trimmedMessage.length > 5000) {
    errors.message = "Message is too long (max 5000 characters).";
  }

  return errors;
}

export function buildContactMailtoUrl(toEmail, { name, email, message }) {
  const subject = `Portfolio inquiry from ${name.trim()}`;
  const lines = [
    message.trim(),
    "",
    "---",
    `From: ${name.trim()}`,
    `Reply to: ${email.trim()}`,
  ];
  let body = lines.join("\r\n");

  const params = new URLSearchParams();
  params.set("subject", subject);
  params.set("body", body);

  let url = `mailto:${encodeURIComponent(toEmail)}?${params.toString()}`;

  // ponytail: ~2k mailto ceiling on some OS clients; trim body with notice
  const maxLen = 1900;
  if (url.length > maxLen) {
    const overhead = `mailto:${encodeURIComponent(toEmail)}?subject=${encodeURIComponent(subject)}&body=`.length;
    const budget = Math.max(80, maxLen - overhead - 40);
    body = `${body.slice(0, budget)}\r\n\r\n[Message shortened for mail app limits]`;
    params.set("body", body);
    url = `mailto:${encodeURIComponent(toEmail)}?${params.toString()}`;
  }

  return url;
}

export function openMailClient(mailtoUrl) {
  const anchor = document.createElement("a");
  anchor.href = mailtoUrl;
  anchor.style.display = "none";
  document.body.appendChild(anchor);
  anchor.click();
  document.body.removeChild(anchor);
}