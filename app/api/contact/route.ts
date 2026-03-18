import { Resend } from "resend";
import { NextResponse } from "next/server";

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function escapeHtml(text: string): string {
  return text
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

function buildEmailHtml(name: string, email: string, message: string): string {
  const safeName = escapeHtml(name);
  const safeEmail = escapeHtml(email);
  const safeMessage = escapeHtml(message).replace(/\n/g, "<br />");
  const mailto = escapeHtml(`mailto:${email}`);

  return `<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="utf-8" />
<meta name="viewport" content="width=device-width, initial-scale=1" />
</head>
<body style="margin:0;padding:0;background-color:#141414;">
<table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background-color:#141414;padding:32px 16px;font-family:Roboto,Helvetica,Arial,sans-serif;">
  <tr>
    <td align="center">
      <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="max-width:560px;border:1px solid #cc9933;border-radius:12px;overflow:hidden;background-color:#1a1a1a;">
        <tr>
          <td style="padding:24px 24px 16px;border-bottom:1px solid #cc9933;">
            <p style="margin:0;font-size:11px;font-weight:600;letter-spacing:0.12em;text-transform:uppercase;color:#fee2b2;">New contact</p>
            <h1 style="margin:8px 0 0;font-size:22px;font-weight:700;color:#cc9933;line-height:1.2;">Market Watch Leaders</h1>
          </td>
        </tr>
        <tr>
          <td style="padding:24px;">
            <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="border-collapse:collapse;">
              <tr>
                <td style="padding:12px 0 4px;font-size:11px;font-weight:600;text-transform:uppercase;letter-spacing:0.08em;color:#fee2b2;">Name</td>
              </tr>
              <tr>
                <td style="padding:0 0 20px;font-size:16px;color:#ffffff;line-height:1.5;">${safeName}</td>
              </tr>
              <tr>
                <td style="padding:12px 0 4px;font-size:11px;font-weight:600;text-transform:uppercase;letter-spacing:0.08em;color:#fee2b2;">Email</td>
              </tr>
              <tr>
                <td style="padding:0 0 20px;font-size:16px;line-height:1.5;">
                  <a href="${mailto}" style="color:#cc9933;text-decoration:underline;">${safeEmail}</a>
                </td>
              </tr>
              <tr>
                <td style="padding:12px 0 4px;font-size:11px;font-weight:600;text-transform:uppercase;letter-spacing:0.08em;color:#fee2b2;">Message</td>
              </tr>
              <tr>
                <td style="padding:0;font-size:15px;color:#fee2b2;line-height:1.6;opacity:0.95;">${safeMessage}</td>
              </tr>
            </table>
          </td>
        </tr>
        <tr>
          <td style="padding:16px 24px;background-color:#141414;border-top:1px solid #98652b;">
            <p style="margin:0;font-size:12px;color:#98652b;text-align:center;">M. Shanken Communications · Market Watch</p>
          </td>
        </tr>
      </table>
    </td>
  </tr>
</table>
</body>
</html>`;
}

export async function POST(request: Request) {
  let body: unknown;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json(
      { error: "Invalid JSON body." },
      { status: 400 }
    );
  }

  const { name, email, message } = body as {
    name?: unknown;
    email?: unknown;
    message?: unknown;
  };

  const nameStr =
    typeof name === "string" ? name.trim() : "";
  const emailStr =
    typeof email === "string" ? email.trim() : "";
  const messageStr =
    typeof message === "string" ? message.trim() : "";

  if (!nameStr) {
    return NextResponse.json(
      { error: "Name is required." },
      { status: 400 }
    );
  }
  if (!emailStr) {
    return NextResponse.json(
      { error: "Email is required." },
      { status: 400 }
    );
  }
  if (!EMAIL_REGEX.test(emailStr)) {
    return NextResponse.json(
      { error: "Please enter a valid email address." },
      { status: 400 }
    );
  }
  if (!messageStr) {
    return NextResponse.json(
      { error: "Message is required." },
      { status: 400 }
    );
  }

  const apiKey = process.env.RESEND_API_KEY;
  const from = process.env.CONTACT_FROM_EMAIL;
  const to = process.env.CONTACT_TO_EMAIL;

  if (!apiKey || !from || !to) {
    return NextResponse.json(
      { error: "Email service is not configured." },
      { status: 500 }
    );
  }

  try {
    const resend = new Resend(apiKey);
    const { error } = await resend.emails.send({
      from,
      to,
      replyTo: emailStr,
      subject: `Market Watch Leaders — Message from ${nameStr}`,
      html: buildEmailHtml(nameStr, emailStr, messageStr),
    });

    if (error) {
      console.error("[contact] Resend error:", error);
      return NextResponse.json(
        { error: "Failed to send message." },
        { status: 500 }
      );
    }

    return NextResponse.json({ success: true });
  } catch (e) {
    console.error("[contact]", e);
    return NextResponse.json(
      { error: "Failed to send message." },
      { status: 500 }
    );
  }
}
