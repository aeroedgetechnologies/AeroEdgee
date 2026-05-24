/**
 * Corporate transactional email styling — minimal, high trust, low spam signals.
 */
const C = {
  accent: '#475569',
  text: '#111827',
  textSecondary: '#374151',
  textMuted: '#6b7280',
  border: '#e5e7eb',
  surface: '#f9fafb',
  white: '#ffffff',
  outer: '#f3f4f6',
};

function escapeHtml(value) {
  return String(value ?? '')
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');
}

function displayValue(value) {
  const text = String(value ?? '').trim();
  return text ? escapeHtml(text) : '<span style="color:#9ca3af;">Not provided</span>';
}

function detailRow(label, value) {
  return `
    <tr>
      <td style="padding:10px 0;border-bottom:1px solid ${C.border};font-family:Arial,Helvetica,sans-serif;">
        <table role="presentation" cellspacing="0" cellpadding="0" border="0">
          <tr>
            <td style="color:${C.textMuted};font-size:13px;white-space:nowrap;vertical-align:top;padding:0 10px 0 0;line-height:1.5;">${label}:</td>
            <td style="color:${C.text};font-size:14px;vertical-align:top;padding:0;line-height:1.5;">${value}</td>
          </tr>
        </table>
      </td>
    </tr>`;
}

function buildContactEmailHtml({ name, organization, email, phone, message }) {
  const submittedAt = new Date().toLocaleString('en-IN', {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
    timeZone: 'Asia/Kolkata',
  });

  const emailLink = email
    ? `<a href="mailto:${escapeHtml(email)}" style="color:${C.accent};text-decoration:none;">${displayValue(email)}</a>`
    : displayValue(email);

  return `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="utf-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <meta http-equiv="X-UA-Compatible" content="IE=edge" />
  <title>Website contact form — ${escapeHtml(name || 'New submission')}</title>
</head>
<body style="margin:0;padding:0;background-color:${C.outer};font-family:Arial,Helvetica,sans-serif;-webkit-font-smoothing:antialiased;">
  <div style="display:none;max-height:0;overflow:hidden;mso-hide:all;">
    New contact form submission from ${escapeHtml(name || 'a visitor')} via aetechnologies.in
  </div>
  <table role="presentation" width="100%" cellspacing="0" cellpadding="0" border="0" style="background-color:${C.outer};">
    <tr>
      <td align="center" style="padding:32px 16px;">
        <table role="presentation" width="100%" cellspacing="0" cellpadding="0" border="0" style="max-width:600px;background-color:${C.white};border:1px solid ${C.border};">
          <tr>
            <td style="height:3px;background-color:${C.accent};font-size:0;line-height:0;">&nbsp;</td>
          </tr>
          <tr>
            <td style="padding:28px 32px 20px;border-bottom:1px solid ${C.border};">
              <p style="margin:0 0 4px;font-size:11px;letter-spacing:0.08em;text-transform:uppercase;color:${C.textMuted};font-weight:600;font-family:Arial,Helvetica,sans-serif;">AeroEdge Technologies</p>
              <h1 style="margin:0;font-size:20px;font-weight:600;color:${C.text};line-height:1.35;font-family:Arial,Helvetica,sans-serif;">Website contact notification</h1>
              <p style="margin:10px 0 0;font-size:13px;color:${C.textMuted};line-height:1.5;font-family:Arial,Helvetica,sans-serif;">
                Received ${escapeHtml(submittedAt)} (IST)
              </p>
            </td>
          </tr>
          <tr>
            <td style="padding:24px 32px;">
              <p style="margin:0 0 18px;font-size:14px;color:${C.textSecondary};line-height:1.6;font-family:Arial,Helvetica,sans-serif;">
                The following details were submitted through the contact form on
                <a href="https://aetechnologies.in/contact-us" style="color:${C.accent};text-decoration:none;">aetechnologies.in</a>.
              </p>
              <table role="presentation" cellspacing="0" cellpadding="0" border="0" style="margin:0 0 24px;">
                ${detailRow('Full name', `<strong style="font-weight:600;">${displayValue(name)}</strong>`)}
                ${detailRow('Email', emailLink)}
                ${detailRow('Organization', displayValue(organization))}
                ${detailRow('Phone', displayValue(phone))}
              </table>
              <p style="margin:0 0 8px;font-size:12px;font-weight:600;color:${C.textMuted};font-family:Arial,Helvetica,sans-serif;">Message</p>
              <table role="presentation" width="100%" cellspacing="0" cellpadding="0" border="0">
                <tr>
                  <td style="background-color:${C.surface};border:1px solid ${C.border};padding:16px 18px;">
                    <p style="margin:0;font-size:14px;color:${C.text};line-height:1.65;white-space:pre-wrap;font-family:Arial,Helvetica,sans-serif;">${displayValue(message)}</p>
                  </td>
                </tr>
              </table>
              <p style="margin:24px 0 0;font-size:14px;color:${C.textSecondary};line-height:1.5;font-family:Arial,Helvetica,sans-serif;">
                To respond, use <strong>Reply</strong> in your mail client — your reply will go directly to the sender.
              </p>
            </td>
          </tr>
          <tr>
            <td style="padding:20px 32px 28px;background-color:${C.surface};border-top:1px solid ${C.border};">
              <p style="margin:0;font-size:12px;color:${C.textMuted};line-height:1.6;font-family:Arial,Helvetica,sans-serif;">
                AeroEdge Technologies<br />
                Automated notification · Contact form ·
                <a href="https://aetechnologies.in" style="color:${C.accent};text-decoration:none;">aetechnologies.in</a>
              </p>
            </td>
          </tr>
        </table>
      </td>
    </tr>
  </table>
</body>
</html>`;
}

function buildContactEmailText({ name, organization, email, phone, message }) {
  const submittedAt = new Date().toLocaleString('en-IN', {
    dateStyle: 'full',
    timeStyle: 'short',
    timeZone: 'Asia/Kolkata',
  });

  return [
    'AEROEDGE TECHNOLOGIES',
    'Website contact notification',
    '',
    `Received: ${submittedAt} (IST)`,
    '',
    '--- Contact details ---',
    `Name:         ${name || 'Not provided'}`,
    `Email:        ${email || 'Not provided'}`,
    `Organization: ${organization || 'Not provided'}`,
    `Phone:        ${phone || 'Not provided'}`,
    '',
    '--- Message ---',
    message || 'Not provided',
    '',
    '---',
    'Reply to this email to respond directly to the sender.',
    'Source: https://aetechnologies.in/contact-us',
  ].join('\n');
}

function buildContactAutoReplyHtml({ name }) {
  const greeting = name ? escapeHtml(name.trim()) : 'there';

  return `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="utf-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <title>We received your message — AeroEdge Technologies</title>
</head>
<body style="margin:0;padding:0;background-color:${C.outer};font-family:Arial,Helvetica,sans-serif;-webkit-font-smoothing:antialiased;">
  <table role="presentation" width="100%" cellspacing="0" cellpadding="0" border="0" style="background-color:${C.outer};">
    <tr>
      <td align="center" style="padding:32px 16px;">
        <table role="presentation" width="100%" cellspacing="0" cellpadding="0" border="0" style="max-width:560px;background-color:${C.white};border:1px solid ${C.border};">
          <tr>
            <td style="height:3px;background-color:${C.accent};font-size:0;line-height:0;">&nbsp;</td>
          </tr>
          <tr>
            <td style="padding:28px 32px 20px;border-bottom:1px solid ${C.border};">
              <p style="margin:0 0 4px;font-size:11px;letter-spacing:0.08em;text-transform:uppercase;color:${C.textMuted};font-weight:600;">AeroEdge Technologies</p>
              <h1 style="margin:0;font-size:20px;font-weight:600;color:${C.text};line-height:1.35;">Thank you for contacting us</h1>
            </td>
          </tr>
          <tr>
            <td style="padding:24px 32px;">
              <p style="margin:0 0 16px;font-size:15px;color:${C.text};line-height:1.65;">
                Hi ${greeting},
              </p>
              <p style="margin:0 0 16px;font-size:14px;color:${C.textSecondary};line-height:1.65;">
                We have received your message and our team will review it shortly.
                <strong> We will contact you soon.</strong>
              </p>
              <p style="margin:0 0 16px;font-size:14px;color:${C.textSecondary};line-height:1.65;">
                For urgent enquiries, you can also reach us at
                <a href="mailto:connect@aeroedgetechnologies.in" style="color:${C.accent};text-decoration:none;">connect@aeroedgetechnologies.in</a>.
              </p>
              <p style="margin:0;font-size:14px;color:${C.textSecondary};line-height:1.65;">
                Best regards,<br />
                <strong style="color:${C.text};">AeroEdge Technologies</strong>
              </p>
            </td>
          </tr>
          <tr>
            <td style="padding:20px 32px 28px;background-color:${C.surface};border-top:1px solid ${C.border};">
              <p style="margin:0;font-size:12px;color:${C.textMuted};line-height:1.6;">
                This is an automated confirmation. Please do not reply to this email unless you need to add more details.
              </p>
            </td>
          </tr>
        </table>
      </td>
    </tr>
  </table>
</body>
</html>`;
}

function buildContactAutoReplyText({ name }) {
  const greeting = name?.trim() ? name.trim() : 'there';

  return [
    'AEROEDGE TECHNOLOGIES',
    'Thank you for contacting us',
    '',
    `Hi ${greeting},`,
    '',
    'We have received your message and our team will review it shortly.',
    'We will contact you soon.',
    '',
    'For urgent enquiries: connect@aeroedgetechnologies.in',
    '',
    'Best regards,',
    'AeroEdge Technologies',
    '',
    '---',
    'This is an automated confirmation.',
  ].join('\n');
}

module.exports = {
  buildContactEmailHtml,
  buildContactEmailText,
  buildContactAutoReplyHtml,
  buildContactAutoReplyText,
};
