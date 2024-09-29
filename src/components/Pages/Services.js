import React from 'react';
import '../css/Services.css'; // Assuming you will create this CSS file for styles

const services = [
  {
    title: 'Annual Maintenance',
    description: 'Regular servicing to ensure optimal performance and longevity of equipment.',
  },
  {
    title: 'Installations',
    description: 'Professional setup of systems and equipment tailored to your needs.',
  },
  {
    title: 'Medical Supplies',
    description: 'Essential supplies for healthcare applications.',
  },
  {
    title: 'Agriculture Supplies',
    description: 'Innovative solutions to improve agricultural productivity and efficiency.',
  },
  {
    title: 'Training Services',
    description: 'Comprehensive training programs to equip users with essential skills and knowledge.',
  },
];

const Services = () => {
  return (
    <section className="services-section">
      <div className="services-container">
        <h2 className="services-title">Our Services</h2>
        <div className="services-grid">
          {services.map((service, index) => (
            <div className="service-card" key={index}>
              <h3 className="service-title">{service.title}</h3>
              <p className="service-description">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
