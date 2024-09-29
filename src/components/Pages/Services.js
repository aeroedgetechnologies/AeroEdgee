import React from 'react';
import '../css/Services.css'; // Assuming you will create this CSS file for styles

const services = [
  {
    title: 'Annual Maintenance',
    description: 'Regular servicing to ensure optimal performance and longevity of equipment.',
    image: 'https://picsum.photos/300/200?random=1', // Add random image URL
  },
  {
    title: 'Installations',
    description: 'Professional setup of systems and equipment tailored to your needs.',
    image: 'https://picsum.photos/300/200?random=2', // Add random image URL
  },
  {
    title: 'Medical Supplies',
    description: 'Essential supplies for healthcare applications.',
    image: 'https://picsum.photos/300/200?random=3', // Add random image URL
  },
  {
    title: 'Agriculture Supplies',
    description: 'Innovative solutions to improve agricultural productivity and efficiency.',
    image: 'https://picsum.photos/300/200?random=4', // Add random image URL
  },
  {
    title: 'Training Services',
    description: 'Comprehensive training programs to equip users with essential skills and knowledge.',
    image: 'https://picsum.photos/300/200?random=5', // Add random image URL
  },
  {
    title: 'Training Services',
    description: 'Comprehensive training programs to equip users with essential skills and knowledge.',
    image: 'https://picsum.photos/300/200?random=5', // Add random image URL
  },
  {
    title: 'Training Services',
    description: 'Comprehensive training programs to equip users with essential skills and knowledge.',
    image: 'https://picsum.photos/300/200?random=5', // Add random image URL
  },
  {
    title: 'Training Services',
    description: 'Comprehensive training programs to equip users with essential skills and knowledge.',
    image: 'https://picsum.photos/300/200?random=5', // Add random image URL
  },
  // {
  //   title: 'Training Services',
  //   description: 'Comprehensive training programs to equip users with essential skills and knowledge.',
  //   image: 'https://picsum.photos/300/200?random=5', // Add random image URL
  // },
  // {
  //   title: 'Training Services',
  //   description: 'Comprehensive training programs to equip users with essential skills and knowledge.',
  //   image: 'https://picsum.photos/300/200?random=5', // Add random image URL
  // },
];

const Services = () => {
  return (
    <section className="services-section">
      <div className="services-container">
        <h2 className="services-title">Our Services</h2>
        <div className="services-grid">
          {services.map((service, index) => (
            <div className="service-card" key={index}>
              <img
                src={service.image}
                alt={service.title}
                className="service-image" // Add a class for styling
              />
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
