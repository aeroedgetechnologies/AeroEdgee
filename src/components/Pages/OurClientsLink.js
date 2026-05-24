// src/components/OurClientsLink.js
import React from 'react';
import { useNavigate } from 'react-router-dom';
import ourclients from '../../Images/Supported by_page-0001 (1).jpg';

const OurClientsLink = () => {
  const navigate = useNavigate();

  const handleClientClick = () => {
    navigate('/'); // Navigate to the home page
    window.scrollTo(0, 0); // Scroll to the top of the page
  };

  return (
    <div className="text-center mb-4 md:mb-0">
      <h2 className="text-2xl font-bold">Our Clients</h2>
      <img
        src={ourclients}
        alt="Supported By"
        className="mt-2 w-3/4 md:w-[360px] max-w-full"
        onClick={handleClientClick}
        style={{ cursor: 'pointer' }} // Add pointer cursor for better UX
      />
    </div>
  );
};

export default OurClientsLink;
