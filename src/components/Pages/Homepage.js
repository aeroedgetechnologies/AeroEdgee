import React, { useEffect, useState } from 'react';
import '../css/Homepage.css'
import jsPDF from 'jspdf';
import logos from '../../Images/portrait-male-security-guard-with-radio-station-camera-screens.jpg'
import pdflogos from '../../Images/pdf logos.jpg'
import applications from '../../Images/Site Vectors_page-0001.jpg'
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
        toast.success('We will contact you through email!'); // Show success toast
        setFormData({
          name: '',
          organization: '',
          email: '',
          phone: '',
          message: '',
          gdpr: false,
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
    <section
  style={{
    backgroundImage: `url(https://images.unsplash.com/photo-1525066298243-cb6c16628ae0?q=80&w=1931&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3DD)`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    height: '700px',
  }}
>
{/* <img src={logoss} alt="Logo" className="mr-2 rounded h-10 w-[110px]" /> */}

  <div className="flex justify-start items-center h-full ml-10"> {/* Align to the left */}
    <div className="p-8 rounded-lg mx-4 my-10 text-left"> {/* Change to text-left */}
      {/* <h1 className="text-7xl font-bold text-blue-300 mb-2">SNAP-M</h1>
      <h2 className="text-2xl text-gray-200">Survey Grade Drone for Aerial Mapping</h2> */}
      <p className="text-4xl font-semibold text-grey-400 mb-4">
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
      <h2 className="text-3xl font-bold mb-4">Proudly Made in India</h2>
      <p className="text-lg mb-2">Survey of India qualified PPK drone for high precision aerial mapping.</p>
      <p className="text-lg mb-2">Industry-leading flight time with maximum possible area coverage.</p>
      <p className="text-lg mb-4">Superior mapping accuracy with indigenous dual-frequency RTK/PPK system.</p>
    </div>

    {/* Button positioned at the bottom right */}
    <div className="flex justify-end mt-4">
            <img 
              src={pdflogos} 
              alt="Download PDF" 
              className="cursor-pointer h-[69px]" 
              onClick={generatePDF}
            />
          </div>
  </div>
</section>



 {/* Campaign Section */}
 <section className="flex flex-col bg-white py-10">
  {/* Battlefield Surveillance System Section */}
  <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', marginBottom: '10px' }}>
    <div style={{ padding: '32px', borderRadius: '8px', margin: '0 16px', textAlign: 'left'}}>
      <h2 style={{ fontSize: '2.25rem', fontWeight: 'bold', color: '#4B5563', marginBottom: '16px', marginLeft: '16px' }}>
        Battlefield Surveillance System
      </h2>
      <div class="custom-applications">
  <div class="applications-container">
    <div class="grid ">
      <img width="750" height="750" src="/static/media/battlefields.51f555f7ce305bbe144d.jpg" alt="Battlefield Surveillance" class="image-item" loading="lazy" />
      <img width="350" height="350" src="https://images.unsplash.com/photo-1548198309-3beef6c7b72a?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Battlefield Surveillance" class="image-item" loading="lazy" />
      <img width="350" height="350" src="/static/media/medicaldroness.9f39fa02d14cf90f9935.jpg" alt="Battlefield Surveillance" class="image-item" loading="lazy" />
      <img width="350" height="350" src="/static/media/nightvision.988094b1a8e64d11ee25.jpg" alt="Battlefield Surveillance" class="image-item" loading="lazy" />
    </div>
  </div>
</div>

    </div>
  </div>

  {/* Advanced Features Section */}
  <div className="flex flex-col justify-center items-center">
    <div className="p-8 rounded-lg mx-4 text-left">
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
        { src: "https://picsum.photos/240/240?random=1", alt: "Mining Maps", caption: "Mine Planning" },
        { src: "https://picsum.photos/240/240?random=2", alt: "Construction Management", caption: "Construction Management" },
        { src: "https://picsum.photos/240/240?random=3", alt: "Railway Inspection", caption: "Railway Inspection" },
        { src: "https://picsum.photos/240/240?random=4", alt: "Town Planning", caption: "Smart City Planning" },
        { src: "https://picsum.photos/240/240?random=5", alt: "Disaster Management", caption: "Disaster Assistance" },
        { src: "https://picsum.photos/240/240?random=6", alt: "Terrain Mapping", caption: "Terrain Mapping" },
        { src: "https://picsum.photos/240/240?random=7", alt: "Irrigation Survey", caption: "Irrigation Survey" },
        { src: "https://picsum.photos/240/240?random=8", alt: "Forest Monitoring", caption: "Forest Monitoring" },
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
  style={{
    backgroundImage: `url(${dronesimages})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    minHeight: '700px', // Use minHeight instead of height
  }}
>
  <div className="flex justify-center items-center h-[720px]">
    <div className="hidden md:flex flex-grow justify-end pr-16"> {/* Flex container for larger screens */}
      <div className="p-8 rounded-lg max-w-[700px]"> {/* Limit width for form */}
        <h1 className="text-4xl font-bold text-gray-700 mb-2">Contact Us</h1>
        <p className="text-xl text-gray-600">Learn more about our story.</p>

        <form className="mt-5" onSubmit={handleSubmit}>
  <div className="mb-4">
    <label className="block text-gray-900">Name *</label>
    <input
      type="text"
      name="name"
      value={formData.name} // Bind to state
      onChange={handleChange} // Update state on change
      required
      className="border-b-2 border-gray-100 bg-transparent focus:outline-none focus:border-blue-500 w-full py-1"
    />
  </div>
  <div className="mb-4">
    <label className="block text-gray-900">Organization Name</label>
    <input
      type="text"
      name="organization"
      value={formData.organization} // Bind to state
      onChange={handleChange} // Update state on change
      className="border-b border-gray-100 bg-transparent focus:outline-none focus:border-blue-500 w-full py-1"
    />
  </div>
  <div className="mb-4">
    <label className="block text-gray-900">Email Address *</label>
    <input
      type="email"
      name="email"
      value={formData.email} // Bind to state
      onChange={handleChange} // Update state on change
      required
      className="border-b border-gray-100 bg-transparent focus:outline-none focus:border-blue-500 w-full py-1"
    />
  </div>
  <div className="mb-4">
    <label className="block text-gray-900">Phone Number</label>
    <input
      type="tel"
      name="phone"
      value={formData.phone} // Bind to state
      onChange={handleChange} // Update state on change
      className="border-b border-gray-100 bg-transparent focus:outline-none focus:border-blue-500 w-full py-1"
    />
  </div>
  <div className="mb-4 relative">
    <textarea
      name="message"
      value={formData.message} // Bind to state
      onChange={handleChange} // Update state on change
      required
      className="border-2 border-gray-100 bg-transparent focus:outline-none focus:border-blue-500 w-full py-2 px-3 pt-4 " 
      rows="4"
      placeholder="Message *"
    />
  </div>
  <div className="mb-4">
    <label className="block text-gray-900 flex items-center">
      <input
        type="checkbox"
        name="gdpr"
        checked={formData.gdpr} // Bind to state
        onChange={handleChange} // Update state on change
        required
        className="mr-2"
      />
      By using this form you agree with the storage and handling of your data by this website.
    </label>
  </div>
  <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded">
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
        <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded">
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
