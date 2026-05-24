import React, { useEffect, useState } from 'react';
import '../css/Homepage.css'
import jsPDF from 'jspdf';
import logos from '../../Images/photo_2025-10-11_14-07-15.jpg'
import pdflogos from '../../Images/pdf logos.jpg'
import applications from '../../Images/Site Vectors_page-0001 (2).jpg'
import dronesimages from '../../Images/drone-with-camera-is-flying-iceberg.jpg'
import battlefields from '../../Images/battlefields.jpg'
import eyessdrones from '../../Images/eyessdrones.jpg'
import medicaldroness from '../../Images/medicaldroness.jpg'
import nightvision from '../../Images/nightvision.jpg'
import abovearrowicons from '../../Images/arrow imagee.png'
import pdf from '../../components/pdf/specifications.pdf';
import { FaAngleUp } from 'react-icons/fa'; // Import the up arrow icon
import { BiBorderRadius } from 'react-icons/bi';
import { useLocation } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import ScrollToTopButton from '../ScrollToTopButton';
import ContactForm from '../ContactForm';
import Seo from '../Seo';
import logoss from '../../Images/sidebar_page-0001 (2).jpg';
// import homepageImage from '../../Images/Homepage drone image.jpg';
// import homepageImage from '../../Images/Homepage drone image.jpg'; 
import { Link } from 'react-router-dom';
import { applicationsList } from '../../data/applicationsData';
import ReadMoreLess from '../ReadMoreLess';

const WHAT_WE_ARE_TEXT = `We are at the forefront of advancing automation and surveillance systems that redefine security and operational efficiency. By harnessing cutting-edge technologies such as artificial intelligence and machine learning, our solutions enable real-time analysis of vast data streams, ensuring rapid identification of potential threats and streamlined responses. Our smart surveillance systems, equipped with facial recognition and predictive analytics, are designed to detect unusual behaviors and deliver timely alerts for proactive intervention. While we are committed to enhancing public safety and productivity, we also prioritize ethical considerations regarding privacy and data management. We believe in a future where innovative technology and civil liberties coexist, and we are dedicated to leading the way.

The landscape of surveillance technology has evolved dramatically over the past decade. Traditional systems often relied on passive monitoring, requiring human operators to sift through hours of footage to identify potential incidents. However, with advancements in artificial intelligence (AI) and machine learning, we have revolutionized this approach. Our automated surveillance systems are capable of real-time data analysis, recognizing patterns, and detecting anomalies with unparalleled accuracy.

For instance, our smart cameras are equipped with advanced facial recognition capabilities, enabling organizations to enhance their security protocols effectively. By leveraging AI algorithms, these systems can swiftly identify individuals in crowded environments, allowing for prompt responses to potential threats.`;

const HomePage = () => {
  const [animate, setAnimate] = useState(false);
  const [showScroll, setShowScroll] = useState(false);
  useEffect(() => {
    setAnimate(true);
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
  // const generatePDF = () => {
  //   const doc = new jsPDF();
    
  //   doc.setFontSize(22);
  //   doc.text('Specifications', 10, 10);
    
  //   doc.setFontSize(16);
  //   const specifications = [
  //     'Flight Specifications',
  //     'Endurance: 50+ min.',
  //     'Wind Resistance: >8m/s',
  //     'Weight: 2.7kg',
  //     'Takeoff Altitude: 5000 m AMSL',
  //     'Battery: Lithium Based (International Standard compliant)',
  //     'RTK-PPK GNSS Bands: Dual Frequency L1, L2, G1, G2',
  //     'GNSS Constellations: GPS, GLONASS, Galileo',
  //     'C2 Link: AES 128 Bit Encryption',
  //     'Compliance: DGCA Type Certified',
  //     '',
  //     'Failsafe Features',
  //     'Low Battery: Return to Home',
  //     'Communication Loss: Return to Home',
  //     'Geofence Breach: Return to Home',
  //     'Altitude Breach: Return to Home',
  //     '',
  //     'Mapping Performance',
  //     'Area Coverage @120m (Sidelap 60%): >1.5 sq. km',
  //     'Accuracy X/Y: <10 cm',
  //     'Accuracy Z: <20 cm',
  //     'GSD @120m: 3 cm'
  //   ];
    
  //   specifications.forEach((line, index) => {
  //     doc.text(line, 10, 20 + (index * 10));
  //   });

  //   doc.save('specifications.pdf');
  // };

  const generatePDF = () => {
    const link = document.createElement('a');
    link.href = pdf; // Using the imported PDF path
    link.download = 'Specifications.pdf'; // Name of the downloaded file
    document.body.appendChild(link); // Append to body to make it work in some browsers
    link.click(); // Simulate click to trigger download
    document.body.removeChild(link); // Clean up
  };
  const [toastShown, setToastShown] = useState(false); // Track if toast has been shown

  const location = useLocation();

  useEffect(() => {
    // Check if there is a state and it indicates a successful login
    if (location.state?.fromLogin && !toastShown) {
      toast.success("Login successful!"); // Show success toast
      setToastShown(true); // Set toast as shown
    }
  }, [location, toastShown]);
  return (
    <>
    <Seo
      path="/"
      description="AeroEdge Technologies — military-grade drones, surveillance systems, anti-UAV defence, and automation for energy, agriculture, and logistics in India."
      keywords="AeroEdge, drones India, surveillance systems, defence technology, anti-UAV, aerial mapping"
    />
    {/* Products Section */}
    <section className="homepage-section" aria-label="AeroEdge hero banner">
      <div className="homepage-section__inner flex justify-start items-center h-full">
        <div className="px-6 md:px-10 lg:px-16 py-10 md:py-14 text-left max-w-2xl">
          <p className="text-xs md:text-sm font-semibold tracking-[0.2em] uppercase text-slate-500 mb-3">
            AeroEdge Technologies
          </p>
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-800 leading-tight mb-3">
            Advanced engineering for defence &amp; energy
          </h1>
          <p className="text-base md:text-lg text-slate-600 leading-relaxed">
            Military-grade drones, surveillance systems, and precision manufacturing for mission-critical applications.
          </p>
        </div>
      </div>
    </section>
      {/* Services Section */}
      <section className="page-section flex flex-col lg:flex-row bg-white gap-8 lg:gap-12">
  <div className="lg:w-1/2 w-full px-4 lg:px-8">
    <img 
      src={logos} 
      alt="AeroEdge automation and surveillance technology" 
      className="object-cover w-full rounded-lg max-h-[480px] lg:max-h-[560px]"
      loading="lazy"
    />
  </div>
  
  <div className="lg:w-1/2 w-full flex flex-col justify-center p-4 lg:p-8">
    {/* Text at the top */}
    <div>
      <h2 className="text-3xl font-bold mb-4">What We Are</h2>
      <ReadMoreLess previewChars={380}>{WHAT_WE_ARE_TEXT}</ReadMoreLess>
    </div>

    {/* Button positioned at the bottom right */}
    {/* <div className="flex justify-end mt-4">
            <img 
              src={pdflogos} 
              alt="Download PDF" 
              className="cursor-pointer h-[69px]" 
              onClick={generatePDF}
            />
          </div> */}
  </div>
</section>



      {/* Surveillance & technology */}
      <section className="page-section bg-white" aria-labelledby="surveillance-heading">
        <div className="section-container">
          <h2 id="surveillance-heading" className="section-title">
            Surveillance Systems
          </h2>
          <div className="surveillance-image-grid">
            <img src={battlefields} alt="Battlefield surveillance drone deployment" className="surveillance-image" loading="lazy" />
            <img src={eyessdrones} alt="Advanced optical surveillance system" className="surveillance-image" loading="lazy" />
            <img src={medicaldroness} alt="Medical delivery drone system" className="surveillance-image" loading="lazy" />
            <img src={nightvision} alt="Night vision surveillance capability" className="surveillance-image" loading="lazy" />
          </div>
        </div>
      </section>

      <section className="page-section bg-gray-50" aria-labelledby="evolution-heading">
        <div className="section-container evolution-grid">
          <div className="evolution-copy">
            <h2 id="evolution-heading" className="section-title text-left">
              Evolution Of Technology
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed">
              Our advanced technology revolutionizes quality control by combining features that ensure
              superior performance and reliability. With accurate weather detection, our drones provide
              real-time data on conditions like wind speed and temperature, enhancing situational
              awareness and mission success. Built with military-grade quality, they withstand rigorous
              field conditions. High-performance cameras with impressive zoom ranges and infrared imaging
              allow detailed surveillance and reconnaissance, even in low-light conditions.
            </p>
          </div>
          <div className="evolution-visual">
            <h3 className="text-2xl font-bold text-gray-800 mb-4">Advanced Features</h3>
            <img
              className="w-full max-w-xl h-auto rounded-xl shadow-md mx-auto"
              src={applications}
              alt="Advanced drone and surveillance features diagram"
              loading="lazy"
            />
          </div>
        </div>
      </section>

      <section
        id="applications"
        className="page-section bg-white applications-section"
        aria-labelledby="applications-heading"
      >
        <div className="section-container">
          <h2 id="applications-heading" className="section-title text-center mb-4">
            Applications
          </h2>
          <p className="text-center text-gray-600 max-w-2xl mx-auto mb-10">
            Click any application to explore capabilities, imagery, and how AeroEdge supports your sector.
          </p>
          <div className="applications-grid">
            {applicationsList.map((app) => (
              <Link
                to={`/applications/${app.id}`}
                className="application-card-link"
                key={app.id}
                aria-label={`Learn more about ${app.title}`}
              >
                <img
                  src={app.heroImage}
                  alt={app.title}
                  className="application-card__img"
                  loading="lazy"
                />
                <span className="application-card__caption">{app.title}</span>
                <span className="application-card-link__cta">View details →</span>
              </Link>
            ))}
          </div>
        </div>
      </section>


      <section className="Contactussection-background" aria-labelledby="home-contact-heading">
        <div className="contact-page-inner">
          <div className="contact-form-panel">
            <h2 id="home-contact-heading" className="text-3xl md:text-4xl font-bold text-white mb-2">
              Contact Us
            </h2>
            <p className="text-lg text-white/90 mb-4">Learn more about our story — request a demo or quote.</p>
            <ContactForm variant="dark" />
          </div>
        </div>
      </section>

<ScrollToTopButton />
    </>
  );
};

export default HomePage;
