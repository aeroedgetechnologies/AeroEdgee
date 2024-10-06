import React from 'react';
import '../css/Campaign.css'; // Ensure styles are adjusted as needed
import ScrollToTopButton from '../ScrollToTopButton';
import campaign1 from '../../components/Site Context/Campaign/Hcfee111b0b5c41aea4ea13c7cce15f21A.jpg_640x640Q90.jpg_.jpg';
import campaign2 from '../../components/Site Context/Campaign/agricultural-drone-hovering-vibrant-green-field-generative-ai_914383-187 (2).jpg';
import campaign3 from '../../components/Site Context/Campaign/closeup-military-aircraft-cable-connector-isolated-white-background_361767-1033.jpg';

const Campaign = () => {
  return (
    <div>
      <section className="container">
        <div className="each">
          <div>
            <h3 className="header">
              <span style={{ color: '#000000' }}>How can</span><br />
              <span className="header-advanced">advance</span><br />
              innovations enhance the world?
            </h3>
            <img alt="drones flying over landscape" src={campaign1} className="image" />
            <span className="header-advanced">Integrations</span><br />
            <h3 className="subheader">
            We are pleased to offer a portable anemometer as an essential accessory for our weather drones. This lightweight and compact device significantly enhances the drones' capabilities by providing accurate real-time measurements of wind speed and direction, crucial for effective weather assessments and research.

The anemometer features a user-friendly interface, making it easy to operate in the field. It displays wind speed in various units (mph, km/h, or m/s) and tracks wind direction, ensuring comprehensive weather data collection. Designed for durability, it withstands harsh weather conditions, guaranteeing reliable performance in diverse environments.            </h3>
            <h3 className="subheader">
              Have questions? Reach out to us at <a href="mailto:connect@aeroedgetechnologies.in" className="bold-link">connect@aeroedgetechnologies.in</a>.
            </h3>
          </div>
        </div>

        <div className="each">
          <img alt="drone surveying a field" src={campaign2} className="image" />
          <div>
            <h3 className="header">
              <span style={{ color: '#000000', fontSize: '25px', fontWeight: 600 }}>The power of</span><br />
              <span className="header-advanced">Aerial Technology</span><br />
            </h3>
            <h3 className="subheader">
              Drones are transforming the way we gather data and monitor environments. Discover the possibilities of aerial surveillance and precision agriculture.
              Our company specializes in providing advanced agricultural drones designed to enhance efficiency and productivity in modern farming. With the capability to carry payloads of up to 20 kg, these drones are engineered for a variety of applications, including crop monitoring, pesticide spraying, and precision fertilization.

In every growing season, our drones consistently meet and exceed expectations, offering farmers innovative solutions to tackle common challenges. By enabling precise application of fertilizers and pesticides, our drones help minimize waste and reduce environmental impact, leading to healthier crops and increased yields. Their ability to cover large areas quickly allows farmers to optimize resources and time, making operations more efficient.

Equipped with high-resolution cameras and sensors, our drones provide real-time data on crop health, soil conditions, and moisture levels. This information empowers farmers to make informed decisions, ensuring timely interventions that can significantly boost productivity. By incorporating aerial imagery and analytics into farming practices, we support a transformative shift towards precision agriculture, fostering a more sustainable and profitable approach.

As seasons change and agricultural demands evolve, our drones adapt seamlessly to various crops and terrains, showcasing their versatility and reliability. We are committed to supporting farmers in their quest for innovation, sustainability, and increased profitability through our state-of-the-art drone technology. With our drones, the future of agriculture is not just about meeting expectations; it’s about exceeding them, paving the way for a more productive and sustainable agricultural landscape.
            </h3>
          </div>
        </div>
      </section>

      <section className="container">
        <div className="each">
          <div>
            <h3 className="header">
              <span style={{ color: '#000000', fontSize: '30px', fontWeight: 600 }}>We Are</span><br />
              Observing
            </h3>
            <h3 className="subheader">

            Aero Edge Technologies is a pioneering company, also dedicated to advancing our understanding of exoplanets through innovative research and technology. One of the primary focuses of the company is the analysis of infrared radiation emitted by these distant celestial bodies. By resolving the infrared signatures of exoplanets, Aero Edge aims to uncover critical information about their atmospheres, compositions, and potential for supporting life.

Infrared radiation is vital for studying the thermal characteristics of exoplanets, as it can reveal details about their atmospheric conditions and surface properties. Aero Edge Technologies is developing advanced tools and methodologies to enhance the detection and analysis of this radiation. By leveraging sophisticated imaging techniques and algorithms, the company seeks to improve the precision of exoplanet observations.

Through this research, Aero Edge Technologies is contributing to the broader scientific community's efforts to explore the universe and understand the diversity of planetary systems. Their work not only aims to shed light on exoplanets within our galaxy but also hopes to inspire future explorations and innovations in space technology. Ultimately, Aero Edge is on a mission to push the boundaries of what we know about the cosmos and the potential for life beyond Earth.            </h3>
            {/* <h3 className="subheader">
              Drones are not just gadgets; they are tools for innovation and efficiency. Learn how we can work together.
            </h3> */}
            <br/>
            <h3 className="subheader">
              For inquiries, contact us at <a href="mailto:connect@aeroedgetechnologies.in" className="bold-link">connect@aeroedgetechnologies.in</a>
            </h3>
          </div>
        </div>

        <div className="each">
          <div>
            <h3 className="header">
              Spare<span style={{ fontWeight: 600 }}>Parts</span></h3>
            <h3 className="subheader">
            In order for our machinery to experience fewer technical failures, it is imperative that we ensure the procurement of A-grade spare parts.<br/>
            Connect with us for component solutions.
             <a href="#" className="bold-link" target="_blank" rel="noopener noreferrer">Learn more.</a>
            </h3>
            <br />
            <img alt="drone in action" src={campaign3} className="image" />
            <br />
            <h3 className="subheader">
              We’re here to help you navigate the drone landscape. If you have questions, <a href="#" className="bold-link">reach out</a>.
            </h3>
          </div>
        </div>
      </section>
      <ScrollToTopButton />
    </div>
  );
};

export default Campaign;
