import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPenFancy, faDharmachakra, faTasks, faTachometerAlt, faRecycle, faHeadset } from '@fortawesome/free-solid-svg-icons';
import '../css/Services.css'; // Assuming you will create this CSS file for styles

const offerItems = [
  {
    icon: faTachometerAlt,
    title: 'Advanced Agriculture',
    description: 'Utilizing cutting-edge technology to enhance agricultural practices for sustainable farming.',
},
{
    icon: faRecycle,
    title: 'Urban Planning Strategy',
    description: 'We create innovative urban planning strategies that prioritize community well-being.',
},
{
    icon: faHeadset,
    title: 'Construction Project Management',
    description: 'Our team excels in managing construction projects from inception to completion.',
},
  {
      icon: faPenFancy,
      title: 'Disaster Relief Coordination',
      description: 'We specialize in coordinating disaster relief efforts to ensure timely and effective response during emergencies.',
  },
  {
      icon: faDharmachakra,
      title: 'Resource Extraction Planning',
      description: 'Our experts develop strategic plans for resource extraction, balancing efficiency and sustainability.',
  },
  {
      icon: faTasks,
      title: 'Rail System Evaluation',
      description: 'We provide comprehensive evaluations of rail systems to improve safety, efficiency, and infrastructure.',
  },
];

const Services = () => {
  return (
    <section className="we-offer-area text-center bg-gray">
      <div className="containers">
        <div className="row">
          <div className="col-md-12">
            <div className="site-heading text-center">
              <h2>What we <span>Offer</span></h2>
              <h4>Your trusted partner in essential services</h4>
            </div>
          </div>
        </div>
        <div className="row our-offer-items less-carousel">
            {offerItems.map((item, index) => (
                <div className="col-md-4 col-sm-6 equal-height" key={index}>
                    <div className="item">
                        <FontAwesomeIcon icon={item.icon} />
                        <h4>{item.title}</h4>
                        <p>{item.description}</p>
                    </div>
                </div>
            ))}
        </div>
        <span></span>
        <h1 className="text-xl font-semibold text-gray-800 mb-4 servicesNotes">
  Note: Clarifications are essential prior to conducting an analysis of the projects and providing the necessary services.
</h1>
      </div>
    </section>
  );
};

export default Services;
