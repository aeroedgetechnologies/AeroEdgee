import { getApiBaseUrl } from './api';

/**
 * Submit contact form to backend. Strips gdpr checkbox (not stored in DB).
 * @returns {{ ok: boolean, data?: object, error?: string }}
 */
export async function submitContactForm(formData) {
  const { name, organization, email, phone, message } = formData;

  if (!name?.trim() || !email?.trim() || !message?.trim()) {
    return { ok: false, error: 'Please fill in name, email, and message.' };
  }

  const payload = {
    name: name.trim(),
    organization: organization?.trim() || '',
    email: email.trim(),
    phone: phone?.trim() || '',
    message: message.trim(),
  };

  const apiUrl = getApiBaseUrl();

  try {
    const response = await fetch(`${apiUrl}/api/contact`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload),
    });

    let data = {};
    try {
      data = await response.json();
    } catch {
      data = {};
    }

    if (response.ok) {
      return { ok: true, data };
    }

    const messageText =
      data.message || `Server error (${response.status}). Please try again or email connect@aeroedgetechnologies.in`;
    return { ok: false, error: messageText };
  } catch (err) {
    console.error('Contact form network error:', err);
    return {
      ok: false,
      error: `Could not reach the server. Please email connect@aeroedgetechnologies.in directly.`,
    };
  }
}
