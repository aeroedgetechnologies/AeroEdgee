import React from 'react';
import '../css/Contact.css';
import ScrollToTopButton from '../ScrollToTopButton';
import ContactForm from '../ContactForm';
import Seo from '../Seo';

const Contact = () => {
  return (
    <>
      <Seo
        title="Contact Us"
        path="/contact-us"
        description="Contact AeroEdge Technologies for drones, surveillance systems, defence automation, and enterprise solutions. Get a quote or demo today."
        keywords="contact AeroEdge, drone enquiry India, surveillance quote"
      />
      <section className="Contactussection-background" aria-labelledby="contact-page-heading">
        <div className="contact-page-inner">
          <div className="contact-form-panel">
            <h1 id="contact-page-heading" className="text-3xl md:text-4xl font-bold text-white mb-2">
              Contact Us
            </h1>
            <p className="text-lg text-white/90 mb-2">
              Tell us about your project — we respond within 1–2 business days.
            </p>
            <p className="text-sm text-white/80 mb-4">
              Or email{' '}
              <a
                href="mailto:connect@aeroedgetechnologies.in"
                className="underline hover:text-white"
              >
                connect@aeroedgetechnologies.in
              </a>
            </p>
            <ContactForm variant="dark" />
          </div>
        </div>
        <ScrollToTopButton />
      </section>
    </>
  );
};

export default Contact;
