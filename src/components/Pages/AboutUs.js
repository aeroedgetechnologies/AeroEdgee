import React, { useState, memo, useCallback } from 'react';
import '../css/AboutUs.css'; 
import ScrollToTopButton from '../ScrollToTopButton';

// Sample image URLs (replace with your own)
const images = [
  "https://images.unsplash.com/photo-1687579521048-217e24217d53?crop=entropy&cs=srgb&fm=jpg&ixid=M3wzMjM4NDZ8MHwxfHJhbmRvbXx8fHx8fHx8fDE2ODg5ODcxNzl8&ixlib=rb-4.0.3&q=85",
  "https://images.unsplash.com/photo-1686580546412-80e80519abd7?crop=entropy&cs=srgb&fm=jpg&ixid=M3wzMjM4NDZ8MHwxfHJhbmRvbXx8fHx8fHx8fDE2ODg5ODcyMDN8&ixlib=rb-4.0.3&q=85",
  "https://images.unsplash.com/photo-1688133338995-a394ce7314e4?crop=entropy&cs=srgb&fm=jpg&ixid=M3wzMjM4NDZ8MHwxfHJhbmRvbXx8fHx8fHx8fDE2ODg5ODcyMDN8&ixlib=rb-4.0.3&q=85",
  "https://images.unsplash.com/photo-1686354715732-7e4685269a25?crop=entropy&cs=srgb&fm=jpg&ixid=M3wzMjM4NDZ8MHwxfHJhbmRvbXx8fHx8fHx8fDE2ODg5ODcyNzN8&ixlib=rb-4.0.3&q=85",
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
            <h2>About Us Title...</h2>
            <p>
              At AeroEdge, we specialize in cutting-edge aerial technology, providing innovative solutions that enhance surveillance, security, and operational efficiency.
            </p>
            {isExpanded && (
              <p>
                Our products range from advanced drones to integrated software systems designed to optimize aerial data collection. We serve a diverse clientele, including government agencies, private corporations, and non-profit organizations. 
                Our dedicated team of engineers and technologists works tirelessly to push the boundaries of what's possible, ensuring that we deliver not just products but complete solutions that meet our clients' needs.
              </p>
            )}
            <button onClick={handleToggle} className="read-more-button">
              {isExpanded ? "Show Less" : "Read More..."}
            </button>
          </div>
        </div>
      </div>
      <ScrollToTopButton />
    </section>
  );
};

export default AboutUs;
