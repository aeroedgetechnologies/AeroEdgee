/** Medium gray brand palette for contact notification emails */
const GRAY = {
  primary: '#6b7280',
  primaryDark: '#4b5563',
  primaryLight: '#9ca3af',
  textOnGray: '#ffffff',
  textMutedOnGray: '#e5e7eb',
  bodyBg: '#f3f4f6',
  cardBg: '#ffffff',
  text: '#1f2937',
  textMuted: '#6b7280',
  border: '#e5e7eb',
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
  return text ? escapeHtml(text) : '—';
}

function buildContactEmailHtml({ name, organization, email, phone, message }) {
  const submittedAt = new Date().toLocaleString('en-IN', {
    dateStyle: 'medium',
    timeStyle: 'short',
    timeZone: 'Asia/Kolkata',
  });

  const orgLine = organization
    ? `<p style="margin:4px 0 0;font-size:13px;color:${GRAY.textMutedOnGray};">${displayValue(organization)}</p>`
    : '';

  return `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="utf-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <title>New contact form submission</title>
</head>
<body style="margin:0;padding:0;background-color:${GRAY.bodyBg};font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,Helvetica,Arial,sans-serif;">
  <table role="presentation" width="100%" cellspacing="0" cellpadding="0" style="background-color:${GRAY.bodyBg};padding:40px 16px;">
    <tr>
      <td align="center">
        <table role="presentation" width="100%" cellspacing="0" cellpadding="0" style="max-width:560px;background:${GRAY.cardBg};border-radius:4px;overflow:hidden;box-shadow:0 2px 12px rgba(0,0,0,0.08);">
          <!-- Header -->
          <tr>
            <td style="background-color:${GRAY.primary};padding:28px 32px;text-align:center;">
              <h1 style="margin:0;font-size:22px;line-height:1.3;color:${GRAY.textOnGray};font-weight:700;">${displayValue(name)}</h1>
              <p style="margin:8px 0 0;font-size:14px;color:${GRAY.textMutedOnGray};">
                <a href="mailto:${escapeHtml(email)}" style="color:${GRAY.textOnGray};text-decoration:none;">${displayValue(email)}</a>
              </p>
              ${orgLine}
            </td>
          </tr>
          <!-- Body -->
          <tr>
            <td style="padding:32px 32px 24px;background:${GRAY.cardBg};">
              <p style="margin:0 0 20px;font-size:15px;color:${GRAY.text};line-height:1.5;">
                <strong>Subject:</strong> Professional Inquiry — AeroEdge Contact Form
              </p>
              <hr style="border:none;border-top:1px solid ${GRAY.border};margin:0 0 24px;" />
              <p style="margin:0 0 12px;font-size:15px;color:${GRAY.text};line-height:1.5;">Dear AeroEdge Team,</p>
              <p style="margin:0 0 16px;font-size:14px;color:${GRAY.textMuted};line-height:1.5;">
                A new enquiry was submitted on <strong style="color:${GRAY.text};">aetechnologies.in</strong> on ${escapeHtml(submittedAt)} (IST).
              </p>
              <table role="presentation" width="100%" cellspacing="0" cellpadding="0" style="margin:0 0 20px;font-size:14px;color:${GRAY.text};">
                <tr>
                  <td style="padding:6px 0;color:${GRAY.textMuted};width:110px;vertical-align:top;">Phone</td>
                  <td style="padding:6px 0;font-weight:600;">${displayValue(phone)}</td>
                </tr>
                <tr>
                  <td style="padding:6px 0;color:${GRAY.textMuted};vertical-align:top;">Organization</td>
                  <td style="padding:6px 0;font-weight:600;">${displayValue(organization)}</td>
                </tr>
              </table>
              <p style="margin:0 0 8px;font-size:13px;font-weight:600;color:${GRAY.textMuted};text-transform:uppercase;letter-spacing:0.05em;">Message</p>
              <p style="margin:0 0 28px;font-size:14px;color:${GRAY.text};line-height:1.7;white-space:pre-wrap;">${displayValue(message)}</p>
              <table role="presentation" cellspacing="0" cellpadding="0" align="center" style="margin:0 auto;">
                <tr>
                  <td align="center" style="border-radius:6px;background-color:${GRAY.primary};">
                    <a href="mailto:${escapeHtml(email)}?subject=Re%3A%20Your%20AeroEdge%20enquiry" style="display:inline-block;padding:14px 48px;font-size:15px;font-weight:600;color:${GRAY.textOnGray};text-decoration:none;">Reply</a>
                  </td>
                </tr>
              </table>
            </td>
          </tr>
          <!-- Footer -->
          <tr>
            <td style="background-color:${GRAY.primary};padding:24px 32px;text-align:center;">
              <p style="margin:0;font-size:16px;font-weight:700;color:${GRAY.textOnGray};">AeroEdge Technologies</p>
              <p style="margin:6px 0 0;font-size:13px;color:${GRAY.textMutedOnGray};">Defence &amp; Industrial UAV Solutions</p>
              <p style="margin:12px 0 0;font-size:12px;color:${GRAY.textMutedOnGray};">
                <a href="https://aetechnologies.in" style="color:${GRAY.textOnGray};text-decoration:underline;">aetechnologies.in</a>
                &nbsp;·&nbsp;
                <a href="mailto:connect@aeroedgetechnologies.in" style="color:${GRAY.textOnGray};text-decoration:underline;">connect@aeroedgetechnologies.in</a>
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
  return [
    'AeroEdge Technologies — New contact enquiry',
    '==========================================',
    '',
    `Name: ${name || '—'}`,
    `Email: ${email || '—'}`,
    `Organization: ${organization || '—'}`,
    `Phone: ${phone || '—'}`,
    '',
    'Message:',
    message || '—',
    '',
    '—',
    'Reply to the sender from your inbox.',
    'https://aetechnologies.in',
  ].join('\n');
}

module.exports = { buildContactEmailHtml, buildContactEmailText };
