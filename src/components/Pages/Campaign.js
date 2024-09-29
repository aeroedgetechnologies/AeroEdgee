import React from 'react';
import '../css/Campaign.css'; // Make sure to adjust styles as needed

const Campaign = () => {
  return (
    <div className="campaign-section">
      {/* Section 1 */}
      <div className="campaign-item">
        <div className="text-content">
          <h2 className="text-4xl font-bold mb-4">Join Our Latest Campaign</h2>
          <p className="text-lg mb-4">
            We are excited to invite you to participate in our latest campaign aimed at transforming aerial technology across multiple sectors.
          </p>
          <p className="text-lg mb-4">
            From agriculture to urban planning, our initiative is designed to optimize efficiency and promote safety, ensuring a sustainable future.
          </p>
          <p className="text-lg">
            Join us in making a difference today!
          </p>
        </div>
        <div className="image-content">
          <img
            src="https://images.unsplash.com/photo-1529171308272-201c63f8831a?q=80&w=1933&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
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
            Our cutting-edge drones utilize advanced technology to deliver high-precision mapping, surveillance, and data collection services.
          </p>
          <p className="text-lg mb-4">
            With features like real-time analytics and robust performance in various conditions, our solutions are tailored to meet the needs of modern industries.
          </p>
          <p className="text-lg">
            Elevate your operations with our unmatched reliability and efficiency.
          </p>
        </div>
        <div className="image-content">
          <img
            src="https://plus.unsplash.com/premium_photo-1688463426040-3e724a762492?q=80&w=1975&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
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
            We invite both organizations and individuals to collaborate with us in advancing the future of aerial technology.
          </p>
          <p className="text-lg mb-4">
            Your involvement can catalyze innovation and drive substantial growth in sectors that rely on aerial solutions.
          </p>
          <p className="text-lg">
            Together, we can pioneer advancements that benefit society as a whole.
          </p>
        </div>
        <div className="image-content">
          <img
            src="https://plus.unsplash.com/premium_photo-1696273224469-79c9be779b09?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
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
            Our dedicated team is committed to providing exceptional support and guidance tailored to your unique needs.
          </p>
          <p className="text-lg mb-4">
            We have built a reputation for excellence, with numerous satisfied clients benefiting from our expertise in aerial technology.
          </p>
          <p className="text-lg">
            Partner with us for unparalleled service and innovative solutions that set you apart in your industry.
          </p>
        </div>
        <div className="image-content">
          <img
            src="https://plus.unsplash.com/premium_photo-1696273225510-5ff59f0e5695?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
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
            Interested in learning more about our initiatives? Reach out to us today for comprehensive information on how you can get involved.
          </p>
          <p className="text-lg mb-4">
            Whether you're an industry leader or an enthusiast, we welcome all inquiries and partnerships.
          </p>
          <p className="text-lg">
            Together, let's revolutionize the aerial landscape for the betterment of our communities.
          </p>
        </div>
        <div className="image-content">
          <img
            src="https://plus.unsplash.com/premium_photo-1696273225791-bdab25451705?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="Campaign Image 5"
            className="campaign-image"
          />
        </div>
      </div>
    </div>
  );
};

export default Campaign;
