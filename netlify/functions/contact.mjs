import nodemailer from "nodemailer";

function validate(body) {
  const errors = {};
  const name = String(body.name ?? "").trim();
  const email = String(body.email ?? "").trim();
  const message = String(body.message ?? "").trim();
  if (name.length < 2) errors.name = "Name too short.";
  if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i.test(email)) errors.email = "Invalid email.";
  if (message.length < 10) errors.message = "Message too short.";
  return { name, email, message, errors };
}

export default async (req) => {
  if (req.method !== "POST") {
    return new Response(JSON.stringify({ detail: "Method not allowed" }), {
      status: 405,
      headers: { "Content-Type": "application/json" },
    });
  }

  let body;
  try {
    body = await req.json();
  } catch {
    return new Response(JSON.stringify({ detail: "Invalid JSON" }), {
      status: 400,
      headers: { "Content-Type": "application/json" },
    });
  }

  if (String(body.company ?? "").trim()) {
    return new Response(JSON.stringify({ ok: true }), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    });
  }

  const { name, email, message, errors } = validate(body);
  if (Object.keys(errors).length) {
    return new Response(JSON.stringify(errors), {
      status: 400,
      headers: { "Content-Type": "application/json" },
    });
  }

  const user = process.env.EMAIL_HOST_USER || "marufhasanchowdhury06@gmail.com";
  const pass = (process.env.EMAIL_HOST_PASSWORD || "").trim();
  const to = (process.env.CONTACT_INBOX_EMAIL || user).trim();

  if (!pass) {
    return new Response(
      JSON.stringify({
        detail:
          "Email not configured on Netlify. Add EMAIL_HOST_PASSWORD (Gmail App Password) in site env vars.",
      }),
      { status: 503, headers: { "Content-Type": "application/json" } }
    );
  }

  const transporter = nodemailer.createTransport({
    host: process.env.EMAIL_HOST || "smtp.gmail.com",
    port: Number(process.env.EMAIL_PORT || "587"),
    secure: false,
    auth: { user, pass },
  });

  const text = [
    "New message from your portfolio contact form.",
    "",
    `Name: ${name}`,
    `Reply-To: ${email}`,
    "",
    "Message:",
    message,
  ].join("\n");

  try {
    await transporter.sendMail({
      from: process.env.DEFAULT_FROM_EMAIL || user,
      to,
      replyTo: email,
      subject: `Portfolio contact from ${name}`,
      text,
    });
  } catch (err) {
    return new Response(
      JSON.stringify({ detail: "Could not send email.", error: String(err.message || err) }),
      { status: 502, headers: { "Content-Type": "application/json" } }
    );
  }

  return new Response(JSON.stringify({ ok: true, detail: "Message sent." }), {
    status: 200,
    headers: { "Content-Type": "application/json" },
  });
};