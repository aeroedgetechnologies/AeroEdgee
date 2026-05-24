import React, { useEffect, useState } from 'react';
import { FaAngleUp } from 'react-icons/fa';

const ScrollToTopButton = () => {
  const [showScroll, setShowScroll] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 1000) {
        setShowScroll(true);
      } else {
        setShowScroll(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      {showScroll && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-5 right-5 bg-transparent rounded-full shadow-lg hover:bg-gray-300 transition duration-300"
          aria-label="Scroll to Top"
        >
          <FaAngleUp className="h-8 w-8" />
        </button>
      )}
    </>
  );
};

export default ScrollToTopButton;
