import React from 'react';
import '../css/Campaign.css'; // Create a new CSS file for custom styles

const Campaign = () => {
  return (
    <div className="campaign-section">
      {/* Section 1 */}
      <div className="campaign-item">
        <div className="text-content">
          <h2 className="text-4xl font-bold mb-4">Join Our Latest Campaign</h2>
          <p className="text-lg mb-4">
            Be part of our innovative efforts in advancing aerial technology for various industries.
          </p>
          <p className="text-lg">
            Whether it's agriculture, infrastructure, or emergency services, our campaign aims to enhance operational efficiency and safety.
          </p>
        </div>
        <div className="image-content">
          <img
            src="https://picsum.photos/400/300?random=1"
            alt="Campaign Image 1"
            className="campaign-image"
          />
        </div>
      </div>

      {/* Section 2 */}
      <div className="campaign-item reverse">
        <div className="text-content">
          <h2 className="text-4xl font-bold mb-4">Innovative Solutions</h2>
          <p className="text-lg mb-4">
            Our drones are equipped with cutting-edge technology, enabling high-precision mapping and data collection.
          </p>
          <p className="text-lg">
            Experience unmatched reliability and efficiency in your operations with our advanced aerial solutions.
          </p>
        </div>
        <div className="image-content">
          <img
            src="https://picsum.photos/400/300?random=2"
            alt="Campaign Image 2"
            className="campaign-image"
          />
        </div>
      </div>

      {/* Section 3 */}
      <div className="campaign-item">
        <div className="text-content">
          <h2 className="text-4xl font-bold mb-4">Get Involved</h2>
          <p className="text-lg mb-4">
            We invite organizations and individuals to collaborate with us in enhancing the future of aerial technology.
          </p>
          <p className="text-lg">
            Your support can help us reach new heights and innovate further for the benefit of all industries.
          </p>
        </div>
        <div className="image-content">
          <img
            src="https://picsum.photos/400/300?random=3"
            alt="Campaign Image 3"
            className="campaign-image"
          />
        </div>
      </div>

      {/* Section 4 */}
      <div className="campaign-item reverse">
        <div className="text-content">
          <h2 className="text-4xl font-bold mb-4">Why Choose Us?</h2>
          <p className="text-lg mb-4">
            Our team is dedicated to providing top-notch support and guidance throughout your journey with us.
          </p>
          <p className="text-lg">
            Join a network of satisfied clients who have benefited from our expertise in aerial technology.
          </p>
        </div>
        <div className="image-content">
          <img
            src="https://picsum.photos/400/300?random=4"
            alt="Campaign Image 4"
            className="campaign-image"
          />
        </div>
      </div>

      {/* Section 5 */}
      <div className="campaign-item">
        <div className="text-content">
          <h2 className="text-4xl font-bold mb-4">Contact Us</h2>
          <p className="text-lg mb-4">
            Interested in learning more? Reach out to us for more information on how you can get involved.
          </p>
          <p className="text-lg">
            Together, let's revolutionize the aerial landscape!
          </p>
        </div>
        <div className="image-content">
          <img
            src="https://picsum.photos/400/300?random=5"
            alt="Campaign Image 5"
            className="campaign-image"
          />
        </div>
      </div>
    </div>
  );
};

export default Campaign;
