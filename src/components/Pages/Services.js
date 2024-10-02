import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPenFancy, faDharmachakra, faTasks, faTachometerAlt, faRecycle, faHeadset } from '@fortawesome/free-solid-svg-icons';
import '../css/Services.css'; // Assuming you will create this CSS file for styles

const offerItems = [
  {
      icon: faPenFancy,
      title: 'Project Creation',
      description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
  },
  {
      icon: faDharmachakra,
      title: 'Software Development',
      description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
  },
  {
      icon: faTasks,
      title: 'Project Management',
      description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
  },
  {
      icon: faTachometerAlt,
      title: 'Project Implementation',
      description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
  },
  {
      icon: faRecycle,
      title: 'Software Update',
      description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
  },
  {
      icon: faHeadset,
      title: '24/7 Support',
      description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
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
              <h4>Lorem Ipsum is simply dummy text</h4>
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
      </div>
    </section>
  );
};


export default Services;
