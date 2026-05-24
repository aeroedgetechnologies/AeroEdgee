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

  const rows = [
    ['Full name', displayValue(name)],
    ['Organization', displayValue(organization)],
    ['Email', displayValue(email)],
    ['Phone', displayValue(phone)],
  ];

  const tableRows = rows
    .map(
      ([label, value]) => `
        <tr>
          <td style="padding:12px 16px;border-bottom:1px solid #e2e8f0;color:#64748b;font-size:13px;width:140px;vertical-align:top;">${label}</td>
          <td style="padding:12px 16px;border-bottom:1px solid #e2e8f0;color:#0f172a;font-size:14px;font-weight:600;">${value}</td>
        </tr>`
    )
    .join('');

  return `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="utf-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <title>New contact form submission</title>
</head>
<body style="margin:0;padding:0;background-color:#f1f5f9;font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,Helvetica,Arial,sans-serif;">
  <table role="presentation" width="100%" cellspacing="0" cellpadding="0" style="background-color:#f1f5f9;padding:32px 16px;">
    <tr>
      <td align="center">
        <table role="presentation" width="100%" cellspacing="0" cellpadding="0" style="max-width:600px;background:#ffffff;border-radius:12px;overflow:hidden;box-shadow:0 4px 24px rgba(15,23,42,0.08);">
          <tr>
            <td style="background:linear-gradient(135deg,#0f172a 0%,#1e3a5f 100%);padding:28px 32px;">
              <p style="margin:0 0 6px;font-size:11px;letter-spacing:0.14em;text-transform:uppercase;color:#94a3b8;font-weight:600;">AeroEdge Technologies</p>
              <h1 style="margin:0;font-size:22px;line-height:1.3;color:#ffffff;font-weight:700;">New contact enquiry</h1>
              <p style="margin:10px 0 0;font-size:14px;line-height:1.5;color:#cbd5e1;">A visitor submitted the contact form on aetechnologies.in</p>
            </td>
          </tr>
          <tr>
            <td style="padding:24px 32px 8px;">
              <p style="margin:0 0 16px;font-size:13px;color:#64748b;">
                <strong style="color:#0f172a;">Received:</strong> ${escapeHtml(submittedAt)} (IST)
              </p>
              <table role="presentation" width="100%" cellspacing="0" cellpadding="0" style="border:1px solid #e2e8f0;border-radius:8px;overflow:hidden;">
                ${tableRows}
              </table>
            </td>
          </tr>
          <tr>
            <td style="padding:8px 32px 28px;">
              <p style="margin:0 0 8px;font-size:12px;font-weight:700;letter-spacing:0.06em;text-transform:uppercase;color:#64748b;">Message</p>
              <div style="background:#f8fafc;border:1px solid #e2e8f0;border-radius:8px;padding:16px 18px;color:#334155;font-size:14px;line-height:1.65;white-space:pre-wrap;">${displayValue(message)}</div>
            </td>
          </tr>
          <tr>
            <td style="padding:0 32px 28px;">
              <a href="mailto:${escapeHtml(email)}" style="display:inline-block;background:#dc2626;color:#ffffff;text-decoration:none;font-size:14px;font-weight:600;padding:12px 22px;border-radius:8px;">Reply to ${displayValue(name)}</a>
            </td>
          </tr>
          <tr>
            <td style="background:#f8fafc;padding:18px 32px;border-top:1px solid #e2e8f0;">
              <p style="margin:0;font-size:12px;line-height:1.5;color:#94a3b8;text-align:center;">
                This notification was sent automatically from the AeroEdge website contact form.<br />
                <a href="https://aetechnologies.in" style="color:#dc2626;text-decoration:none;">aetechnologies.in</a>
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
    `Organization: ${organization || '—'}`,
    `Email: ${email || '—'}`,
    `Phone: ${phone || '—'}`,
    '',
    'Message:',
    message || '—',
    '',
    '—',
    'Sent from aetechnologies.in contact form',
  ].join('\n');
}

module.exports = { buildContactEmailHtml, buildContactEmailText };
