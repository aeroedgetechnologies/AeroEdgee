import React, { useState, memo, useCallback } from 'react';
import '../css/AboutUs.css'; 
import ScrollToTopButton from '../ScrollToTopButton';
import AboutUs1 from '../../components/Site Context/About us/04_p6230547.jpg'
import AboutUs2 from '../../components/Site Context/About us/About us.jpeg'
import AboutUs3 from '../../components/Site Context/About us/IMG_0055.jpg'
import AboutUs4 from '../../components/Site Context/About us/IMG_0058.jpg'
import Rockets from '../../Images/nasa-provided-space-station-window-view-earth-this-photograph_410516-34909.jpg'
// Sample image URLs (replace with your own)
const images = [
   AboutUs1,
   AboutUs2,
   AboutUs3,
   AboutUs4,
];

// Memoized Image Component
const ImageComponent = memo(({ src, index }) => (
  <div className="imgWrapper" key={index}>
    <img src={src} alt={`Gallery Image ${index + 1}`} loading="lazy" />
  </div>
));


const AboutUs = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  const handleToggle = useCallback(() => {
    setIsExpanded(prev => !prev);
  }, []);

  return (
    <section className="about-us-section">
      <div className="container">
        <div className="contentLeft">
          <div className="row">
            {images.map((src, index) => (
              <ImageComponent src={src} index={index} key={index} />
            ))}
          </div>
        </div>

        <div className="contentRight">
          <div className="content">
            <h4>Welcome To</h4>
            <h2>About Us</h2>
            <p>
               We specialize in cutting-edge aerial technology, providing innovative solutions that enhance monitering, surveillance, security, and operational efficiency.
            </p>
            {isExpanded && (
              <p>
                Our products range from advanced drones to integrated software systems designed to optimize aerial data collection. We serve a diverse clientele, including government agencies, private corporations, and non-profit organizations. 
                Our dedicated team of engineers and technologists works tirelessly to push the boundaries of what's possible, ensuring that we deliver not just products but complete solutions that meet our clients' needs.
                In addition to our work in commercial sectors, we are actively participating in defense projects, contributing advanced automation technologies that enhance operational effectiveness and security. Our approach begins with a thorough assessment of your processes to identify opportunities for automation, allowing us to develop customized strategies aligned with your business goals. We ensure the reliability and effectiveness of our solutions through rigorous testing and offer ongoing support and training for your team. Committed to sustainability, our solutions aim to minimize waste and energy consumption, contributing to a greener future. By partnering with Aeroedge Technologies, you can navigate the complexities of automation and transform your business processes to thrive in an increasingly competitive landscape.
                We are collaborating with the Himachal Pradesh government and its Agriculture Department to improve agricultural monitoring and spraying across large areas. This initiative aims to enhance precision farming practices, optimize resource use, and promote sustainable agricultural methods.
              </p>
            )}
            <button onClick={handleToggle} className="read-more-button">
              {isExpanded ? "Show Less" : "Read More..."}
            </button>
          </div>
          
        </div>
      </div>
      <ScrollToTopButton />
      <div className="contentRights">
  <div className="contents">
    <h2 className='opportunities'>Opportunities</h2>
    <p className='opportunitiesParagraphs'>
      We are preparing to present our monitoring devices to the IAF as part of the Make in India initiative. This collaboration aims to develop advanced surveillance systems that will enhance monitoring capabilities for our defense sector, ensuring national security. Our approach begins with a thorough assessment of processes to identify automation opportunities, allowing us to create customized strategies aligned with your business goals. We ensure the reliability and effectiveness of our solutions through rigorous testing and provide ongoing support and training for your team. Committed to sustainability, our solutions aim to minimize waste and energy consumption, contributing to a greener future. By partnering with Aeroedge Technologies you can navigate the complexities of automation and transform your business processes to thrive in an increasingly competitive landscape.

      AeroEdge Technologies is a leading provider of high-performance Polarised Optics, proudly serving the Indian Space Research Organisation (ISRO) for the past four years. Our commitment to innovation and quality has enabled us to develop advanced optical solutions tailored to meet the stringent demands of space applications. With a team of dedicated experts and a focus on cutting-edge technology, we strive to contribute to India's space endeavors and elevate the standards of optical manufacturing. At AeroEdge Technologies, we are passionate about pushing the boundaries of what’s possible in the field of Space and Defense.
    </p>
  </div>
  <img className="rightImage" src={Rockets} alt="About Us" />
</div>

    </section>
  );
};

export default AboutUs;
