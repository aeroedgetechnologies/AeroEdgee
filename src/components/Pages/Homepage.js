import React, { useEffect, useState } from 'react';
import '../css/Homepage.css'
import jsPDF from 'jspdf';
import logos from '../../Images/portrait-male-security-guard-with-radio-station-camera-screens.jpg'
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
import logoss from '../../Images/sidebar_page-0001 (2).jpg';
// import homepageImage from '../../Images/Homepage drone image.jpg';
// import homepageImage from '../../Images/Homepage drone image.jpg'; 
import applications1 from '../../components/Site Context/Applications Images/pexels-debarshi-mukherjee-803108656-28762353.jpg'; 
import applications2 from '../../components/Site Context/Applications Images/pexels-elfust-18960738.jpg'; 
import applications3 from '../../components/Site Context/Applications Images/pexels-mysterious-ocean-260670408-12686560.jpg'; 
import applications4 from '../../components/Site Context/Applications Images/pexels-quang-nguyen-vinh-222549-14776899.jpg'; 
import applications5 from '../../components/Site Context/Applications Images/pexels-sevenstormphotography-439416.jpg'; 
import applications6 from '../../components/Site Context/Applications Images/pexels-shalenderkumar-4204698.jpg'; 
import applications7 from '../../components/Site Context/Applications Images/pexels-urtimud-89-76108288-14263363.jpg'; 
import applications8 from '../../components/Site Context/Applications Images/pexels-vanngo-ng-105653827-23857944.jpg'; 
import battlefieldss from '../../Images/anemometer-wind-speed-measurement-small-weather-station-anemometer-blue-sky_347372-911.avif'

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
  const [formData, setFormData] = useState({
    name: '',
    organization: '',
    email: '',
    phone: '',
    message: '',
    gdpr: false,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: type === 'checkbox' ? checked : value,
    }));
  };
  
  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await fetch(`${process.env.REACT_APP_API_URL}/api/contact`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        toast.success('We will contact you through email!', {
          onClose: () => {
            setFormData({
              name: '',
              organization: '',
              email: '',
              phone: '',
              message: '',
              gdpr: false,
            });
          },
        });
      } else {
        toast.error('Failed to send message.'); // Show error toast
      }
    } catch (error) {
      console.error('Error:', error);
      toast.error('An error occurred.'); // Show error toast
    }
  };

  return (
    <>
    {/* Products Section */}
    <section className="homepage-section">
{/* <img src={logoss} alt="Logo" className="mr-2 rounded h-10 w-[110px]" /> */}

  <div className="flex justify-start items-center h-full ml-10"> {/* Align to the left */}
    <div className="p-8 rounded-lg mx-4 my-10 text-left"> {/* Change to text-left */}
      {/* <h1 className="text-7xl font-bold text-blue-300 mb-2">SNAP-M</h1>
      <h2 className="text-2xl text-gray-200">Survey Grade Drone for Aerial Mapping</h2> */}
      <p className="text-2xl md:text-3xl lg:text-4xl font-semibold text-gray-700 mb-4">
{/* {renderLetters(text)} */}
        I n n o v a t i o n s
      </p>
    </div>
  </div>
</section>
      {/* Services Section */}
      <section className="flex flex-col md:flex-row bg-white py-10">
  {/* Image Column */}
  <div className="md:w-1/2 ml-16">
    <img 
      src={logos} 
      alt="Services" 
      className="object-cover h-full w-full rounded-lg h-[600px]"
    />
  </div>
  
  {/* Text Column */}
  <div className="md:w-1/2 flex flex-col justify-between p-8">
    {/* Text at the top */}
    <div>
      <h2 className="text-3xl font-bold mb-4">What We Are</h2>
      {/* <p className="text-lg mb-2">Survey of India qualified PPK drone for high precision aerial mapping.</p>
      <p className="text-lg mb-2">Industry-leading flight time with maximum possible area coverage.</p> */}
      <p className="text-lg mb-4">We are at the forefront of advancing automation and surveillance systems that redefine security and operational efficiency. By harnessing cutting-edge technologies such as artificial intelligence and machine learning, our solutions enable real-time analysis of vast data streams, ensuring rapid identification of potential threats and streamlined responses. Our smart surveillance systems, equipped with facial recognition and predictive analytics, are designed to detect unusual behaviors and deliver timely alerts for proactive intervention. While we are committed to enhancing public safety and productivity, we also prioritize ethical considerations regarding privacy and data management. We believe in a future where innovative technology and civil liberties coexist, and we are dedicated to leading the way.
      The landscape of surveillance technology has evolved dramatically over the past decade. Traditional systems often relied on passive monitoring, requiring human operators to sift through hours of footage to identify potential incidents. However, with advancements in artificial intelligence (AI) and machine learning, we have revolutionized this approach. Our automated surveillance systems are capable of real-time data analysis, recognizing patterns, and detecting anomalies with unparalleled accuracy.

For instance, our smart cameras are equipped with advanced facial recognition capabilities, enabling organizations to enhance their security protocols effectively. By leveraging AI algorithms, these systems can swiftly identify individuals in crowded environments, allowing for prompt responses to potential threats.
      </p>
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



 {/* Campaign Section */}
 <section className="flex flex-col bg-white py-10">
  {/* Battlefield Surveillance System Section */}
  <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', marginBottom: '10px' }}>
    <div style={{ padding: '32px', borderRadius: '8px', margin: '0 16px', textAlign: 'left'}}>
      <h2 style={{ fontSize: '2.25rem', fontWeight: 'bold', color: '#4B5563', marginBottom: '16px', marginLeft: '16px' }}>
        Surveillance Systems
      </h2>
      <div class="custom-applications">
  <div class="applications-container">
    <div class="grid ">
      <img width="750" height="750" src="/static/media/battlefields.51f555f7ce305bbe144d.jpg" alt="Battlefield Surveillance" class="image-item" loading="lazy" />
      <img width="350" height="350" src={battlefieldss} alt="Battlefield Surveillance" class="image-item" loading="lazy" />
      <img width="350" height="350" src="/static/media/medicaldroness.9f39fa02d14cf90f9935.jpg" alt="Battlefield Surveillance" class="image-item" loading="lazy" />
      <img width="350" height="350" src="/static/media/nightvision.988094b1a8e64d11ee25.jpg" alt="Battlefield Surveillance" class="image-item" loading="lazy" />
    </div>
  </div>
</div>

    </div>
  </div>

  {/* Advanced Features Section */}
  <div className="flex flex-row justify-center items-center">
  <div className="md:w-1/2 flex flex-col justify-between p-8">
    {/* Text at the top */}
    <div>
      <h2 className="text-3xl font-bold mb-4">Evolution Of Technology</h2>
      {/* <p className="text-lg mb-2">Survey of India qualified PPK drone for high precision aerial mapping.</p>
      <p className="text-lg mb-2">Industry-leading flight time with maximum possible area coverage.</p> */}
      <p className="text-lg mb-4">Our advanced technology revolutionizes quality control by combining features that ensure superior performance and reliability. With accurate weather detection, our drones provide real-time data on conditions like wind speed and temperature, enhancing situational awareness and mission success. The integration of AI in operation planning allows for automatic generation of optimal flight paths and adaptive strategies, responding to changing environments effectively. Our drones maintain exceptional stability even in adverse weather, ensuring precise navigation and data collection.
Built with military-grade quality, they withstand rigorous field conditions, reducing the risk of equipment failure. The strongest materials in the frame construction offer durability and enhanced flight stability, enabling the carrying of heavier payloads while maintaining maneuverability. Additionally, high-performance cameras with impressive zoom ranges and infrared imaging capabilities allow for detailed surveillance and reconnaissance, even in low-light conditions. Together, these features position our drones as essential tools for modern military operations, providing teams with the edge they need to execute missions with precision and confidence.
      </p>
    </div>
  </div>
    <div className="p-8 rounded-lg mx-4 text-lefts">
      <h2 className="text-4xl font-bold text-grey-700 mb-4 ml-4">
        Advanced Features
      </h2>
      <img
        className="w-[900px] h-auto mb-4" 
        src={applications}
        alt="Advanced Features"
        loading="lazy"
      />
    </div>
  </div>
</section>





{/* Services Section */}
<section className="flex flex-col bg-white py-10">
  <div className="flex flex-col items-center mb-10 w-full">
    <h2 className="text-4xl font-bold mb-4">Applications</h2>
    <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 justify-items-center">
      {[
        { src: applications1, alt: "Disaster Relief Coordination", caption: "Disaster Relief Coordination" },
        { src: applications7, alt: "Resource Extraction Planning", caption: "Resource Extraction Planning" },
        { src: applications3, alt: "Rail System Evaluation", caption: "Rail System Evaluation" },
        { src: applications8, alt: "Advanced Agriculture", caption: "Advanced Agriculture" },
        { src: applications6, alt: "Urban Planning Strategy", caption: "Urban Planning Strategy" },
        { src: applications5, alt: "Construction Project Management ", caption: "Construction Project Management" },
        { src: applications2, alt: "Geographic Information Analysis", caption: "Geographic Information Analysis" },
        { src: applications4, alt: "Mountain Topography Mapping", caption: "Mountain Topography Mapping" },
      ].map((item, index) => (
        <div className="flex flex-col items-center" key={index}>
          <figure className="relative transition-transform duration-300 transform hover:scale-105 cursor-pointer">
            <img
              width="240"
              height="240"
              src={item.src}
              alt={item.alt}
              className="w-full h-auto rounded-[15px]"
              loading="lazy"
            />
            <figcaption className="text-center mt-2 font-bold">{item.caption}</figcaption>
          </figure>
        </div>
      ))}
    </section>
  </div>
</section>


      {/* Contact Us Section */}
{/* Contact Us Section */}
<section
  className="Contactussection-background"
>
  <div className="flex justify-center items-center h-[720px]">
    <div className="hidden md:flex flex-grow justify-end pr-16"> {/* Flex container for larger screens */}
      <div className="p-8 rounded-lg max-w-[700px]"> {/* Limit width for form */}
        <h1 className="text-4xl font-bold text-white mb-2">Contact Us</h1>
        <p className="text-xl text-white">Learn more about our story.</p>

        <form className="mt-5" onSubmit={handleSubmit}>
  <div className="mb-4">
    <label htmlFor="name" className="block text-white">Name *</label>
    <input
      type="text"
      name="name"
      id="name"
      required
      onChange={handleChange}
      className="border-b-2 border-gray-100 bg-transparent focus:outline-none focus:border-blue-500 w-full py-1 text-white" // Added text-white
    />
  </div>
  <div className="mb-4">
    <label htmlFor="organization" className="block text-white">Organization Name</label>
    <input
      type="text"
      name="organization"
      id="organization"
      onChange={handleChange}
      className="border-b border-gray-100 bg-transparent focus:outline-none focus:border-blue-500 w-full py-1 text-white" // Added text-white
    />
  </div>
  <div className="mb-4">
    <label htmlFor="email" className="block text-white">Email Address *</label>
    <input
      type="email"
      name="email"
      id="email"
      required
      onChange={handleChange}
      className="border-b border-gray-100 bg-transparent focus:outline-none focus:border-blue-500 w-full py-1 text-white" // Added text-white
    />
  </div>
  <div className="mb-4">
    <label htmlFor="phone" className="block text-white">Phone Number</label>
    <input
      type="tel"
      name="phone"
      id="phone"
      onChange={handleChange}
      className="border-b border-gray-100 bg-transparent focus:outline-none focus:border-blue-500 w-full py-1 text-white" // Added text-white
    />
  </div>
  <div className="mb-4 relative">
    <textarea
      name="message"
      id="message"
      required
      onChange={handleChange}
      className="border-2 border-gray-100 bg-transparent focus:outline-none focus:border-blue-500 w-full py-2 px-3 pt-4 text-white placeholder-white" // Added text-white
      rows="4"
      placeholder="Message *"
    />
  </div>
  <div className="mb-4">
    <label className="block text-white flex items-center">
      <input
        type="checkbox"
        name="gdpr"
        id="gdpr"
        required
        onChange={handleChange}
        className="mr-2"
      />
      By using this form you agree with the storage and handling of your data by this website.
    </label>
  </div>
  <button type="submit" className="bg-red-600 text-white px-4 py-2 rounded hover:bg-blue-700">
    Send
  </button>
</form>


      </div>
    </div>

    {/* Centered form for smaller screens */}
    <div className="md:hidden p-8 rounded-lg max-w-[400px]"> {/* Hide on larger screens */}
      <h1 className="text-4xl font-bold text-gray-700 mb-2">Contact Us</h1>
      <p className="text-xl text-gray-600">Learn more about our story.</p>

      <form className="mt-5" onSubmit={handleSubmit}>
        <div className="mb-4">
          <label className="block text-gray-900">Name *</label>
          <input
            type="text"
            name="name"
            required
            className="border-b-2 border-gray-100 bg-transparent focus:outline-none focus:border-blue-500 w-full py-1"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-900">Organization Name</label>
          <input
            type="text"
            name="organization"
            className="border-b border-gray-100 bg-transparent focus:outline-none focus:border-blue-500 w-full py-1"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-900">Email Address *</label>
          <input
            type="email"
            name="email"
            required
            className="border-b border-gray-100 bg-transparent focus:outline-none focus:border-blue-500 w-full py-1"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-900">Phone Number</label>
          <input
            type="tel"
            name="phone"
            className="border-b border-gray-100 bg-transparent focus:outline-none focus:border-blue-500 w-full py-1"
          />
        </div>
        <div className="mb-4 relative">
          <textarea
            name="message"
            required
            className="border-2 border-gray-100 bg-transparent focus:outline-none focus:border-blue-500 w-full py-2 px-3 pt-4"
            rows="4"
            placeholder="Message *"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-900 flex items-center">
            <input type="checkbox" name="gdpr" required className="mr-2" />
            By using this form you agree with the storage and handling of your data by this website.
          </label>
        </div>
        <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded ">
          Send
        </button>
      </form>
    </div>
  </div>
</section>

<ScrollToTopButton />
      <ToastContainer 
        position="top-center"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
    </>
  );
};

export default HomePage;
