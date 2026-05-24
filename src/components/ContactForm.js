import React from 'react';
import { submitContactForm } from '../utils/submitContact';
import { toast } from 'react-toastify';

const emptyForm = {
  name: '',
  organization: '',
  email: '',
  phone: '',
  message: '',
  gdpr: false,
};

export default function ContactForm({ variant = 'dark', className = '' }) {
  const [formData, setFormData] = React.useState(emptyForm);
  const [submitting, setSubmitting] = React.useState(false);

  const isDark = variant === 'dark';
  const labelClass = isDark ? 'text-white' : 'text-gray-800';
  const inputClass = isDark
    ? 'border-b border-gray-100 bg-transparent text-white placeholder-gray-200 focus:outline-none focus:border-blue-400 w-full py-2'
    : 'border-b border-gray-400 bg-white text-gray-900 focus:outline-none focus:border-blue-600 w-full py-2';

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.gdpr) {
      toast.error('Please accept the data storage agreement.');
      return;
    }
    setSubmitting(true);
    const result = await submitContactForm(formData);
    setSubmitting(false);

    if (result.ok) {
      toast.success('Thank you! We will contact you soon.');
      setFormData(emptyForm);
    } else {
      toast.error(result.error || 'Failed to send message.');
    }
  };

  return (
    <form className={`mt-5 space-y-4 ${className}`} onSubmit={handleSubmit} noValidate>
      <div>
        <label htmlFor="contact-name" className={`block mb-1 ${labelClass}`}>
          Name *
        </label>
        <input
          type="text"
          name="name"
          id="contact-name"
          required
          value={formData.name}
          onChange={handleChange}
          className={inputClass}
          autoComplete="name"
        />
      </div>
      <div>
        <label htmlFor="contact-organization" className={`block mb-1 ${labelClass}`}>
          Organization
        </label>
        <input
          type="text"
          name="organization"
          id="contact-organization"
          value={formData.organization}
          onChange={handleChange}
          className={inputClass}
          autoComplete="organization"
        />
      </div>
      <div>
        <label htmlFor="contact-email" className={`block mb-1 ${labelClass}`}>
          Email *
        </label>
        <input
          type="email"
          name="email"
          id="contact-email"
          required
          value={formData.email}
          onChange={handleChange}
          className={inputClass}
          autoComplete="email"
        />
      </div>
      <div>
        <label htmlFor="contact-phone" className={`block mb-1 ${labelClass}`}>
          Phone
        </label>
        <input
          type="tel"
          name="phone"
          id="contact-phone"
          value={formData.phone}
          onChange={handleChange}
          className={inputClass}
          autoComplete="tel"
        />
      </div>
      <div>
        <label htmlFor="contact-message" className={`block mb-1 ${labelClass}`}>
          Message *
        </label>
        <textarea
          name="message"
          id="contact-message"
          required
          rows={4}
          value={formData.message}
          onChange={handleChange}
          className={`${inputClass} border-2 rounded px-3`}
          placeholder="How can we help you?"
        />
      </div>
      <div>
        <label className={`flex items-start gap-2 text-sm ${labelClass}`}>
          <input
            type="checkbox"
            name="gdpr"
            checked={formData.gdpr}
            onChange={handleChange}
            required
            className="mt-1"
          />
          <span>
            By using this form you agree with the storage and handling of your data by this
            website.
          </span>
        </label>
      </div>
      <button
        type="submit"
        disabled={submitting}
        className="bg-red-600 hover:bg-red-700 disabled:opacity-60 text-white px-6 py-2 rounded font-medium transition-colors"
      >
        {submitting ? 'Sending…' : 'Send'}
      </button>
    </form>
  );
}
