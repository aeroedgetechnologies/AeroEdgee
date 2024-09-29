import React from 'react';
import '../css/AboutUs.css'; 
import aeroEdgeLogo from '../../Images/aeroedge logos.jpg'; 

const AboutUs = () => {
  return (
    <section className="about-us-section">
      <div className="container">
        <div className="flex flex-col md:flex-row items-center">
          {/* Logo/Image Column */}
          <div className="md:w-1/2">
            <img 
              src={aeroEdgeLogo} 
              alt="AeroEdge Logo" 
              className="about-us-logo"
            />
          </div>
          
          {/* Text Column */}
          <div className="md:w-1/2 p-6">
            <h2 className="text-4xl font-bold mb-4">About Us</h2>
            <p className="text-lg mb-4">
              At AeroEdge, we specialize in cutting-edge aerial technology, providing innovative solutions that enhance surveillance, security, and operational efficiency. 
            </p>
            <p className="text-lg mb-4">
              Our commitment to quality, reliability, and customer satisfaction drives us to deliver exceptional products and services tailored to meet diverse needs.
            </p>
            <p className="text-lg mb-4">
              We take pride in being an industry leader, continually evolving to meet the demands of our clients and ensuring that we stay at the forefront of technology.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
