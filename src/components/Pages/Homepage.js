import React, { useEffect, useState } from 'react';
import '../css/Homepage.css'
import jsPDF from 'jspdf';
import logos from '../../Images/drones withh white background heree it is.jpg'
import pdflogos from '../../Images/pdf logos.jpg'
import applications from '../../Images/Site Vectors_page-0001.jpg'
import dronesimages from '../../Images/drone-with-camera-is-flying-iceberg.jpg'
import abovearrowicons from '../../Images/abovearrowicons.jpeg'
import pdf from '../../components/pdf/specifications.pdf';

const HomePage = () => {
  const [animate, setAnimate] = useState(false);
  const [showScroll, setShowScroll] = useState(false);
  useEffect(() => {
    setAnimate(true);
    const handleScroll = () => {
      if (window.scrollY > 300) {
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


  const handleSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    const data = Object.fromEntries(formData.entries());
  
    try {
      const response = await fetch('https://aeroedgee.onrender.com/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });
  
      if (response.ok) {
        alert('Message sent successfully!');
      } else {
        alert('Failed to send message.');
      }
    } catch (error) {
      console.error('Error:', error);
      alert('An error occurred.');
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
        <div className="flex justify-center items-center h-full mr-[1200px] ml-[150px]">
          <div className="p-8 rounded-lg mx-4 my-10 text-center">
            <h1 className="text-7xl font-bold text-gray-100 mb-2">SNAP-M</h1>
            <h2 className="text-2xl text-gray-100">Survey Grade Drone for Aerial Mapping</h2>
            <p className={`text-4xl font-semibold text-yellow-300 mb-4 ${animate ? 'animate-drop-and-bounce' : ''}`}>
              DGCA Type Certified
            </p>
          </div>
        </div>
      </section>
      {/* Services Section */}
      <section className="flex flex-col md:flex-row bg-white py-10 h-[700px]">
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
  {/* First Section */}
  <div className="flex flex-col justify-center items-center mb-10">
    <div className="p-8 rounded-lg mx-4">
      <h2 className="text-4xl font-bold text-grey-700 mb-2">How It Works</h2>
      <img
        width="1024"
        height="291"
        src="https://cdspace.in/wp-content/uploads/2021/03/Snap_execution-1024x291.png"
        alt="SNAP_Execution"
        className="w-full h-auto mb-4"
        loading="lazy"
      />
      <p className="text-xl text-gray-900">Join our latest campaign.</p>
    </div>
  </div>
  
  {/* Second Section */}
  <div className="flex flex-col justify-center items-center">
    <div className=" p-8 rounded-lg mx-4">
      <h2 className="text-4xl font-bold text-grey-700 mb-4">Advanced Features</h2>
      <img
        className="w-[900px] h-[700] mb-4"
        src={applications}
        alt="SNAP_Features"
        loading="lazy"
      />
    </div>
  </div>
</section>



{/* Services Section */}
<section className="flex flex-col md:flex-row bg-white py-10 h-[700px] pt-0">
  <div className="flex flex-col items-center mb-10 w-full">
    <h2 className="text-4xl font-bold mb-4">Applications</h2>
    <section className="grid grid-cols-1 md:grid-cols-4 gap-4 justify-items-center">
      
      <div className="flex flex-col items-center">
        <figure className="relative">
          <img
            width="240"
            height="240"
            src="https://picsum.photos/240/240?random=1"
            alt="Mining Maps"
            className="w-full h-auto"
            loading="lazy"
          />
          <figcaption className="text-center mt-2 font-bold">Mine Planning</figcaption>
        </figure>
      </div>

      <div className="flex flex-col items-center">
        <figure className="relative">
          <img
            width="240"
            height="240"
            src="https://picsum.photos/240/240?random=2"
            alt="Construction Management"
            className="w-full h-auto"
            loading="lazy"
          />
          <figcaption className="text-center mt-2 font-bold">Construction Management</figcaption>
        </figure>
      </div>

      <div className="flex flex-col items-center">
        <figure className="relative">
          <img
            width="240"
            height="240"
            src="https://picsum.photos/240/240?random=3"
            alt="Railway Inspection"
            className="w-full h-auto"
            loading="lazy"
          />
          <figcaption className="text-center mt-2 font-bold">Railway Inspection</figcaption>
        </figure>
      </div>

      <div className="flex flex-col items-center">
        <figure className="relative">
          <img
            width="240"
            height="240"
            src="https://picsum.photos/240/240?random=4"
            alt="Town Planning"
            className="w-full h-auto"
            loading="lazy"
          />
          <figcaption className="text-center mt-2 font-bold">Smart City Planning</figcaption>
        </figure>
      </div>

      {/* Additional images for the second section */}
      <div className="flex flex-col items-center">
        <figure className="relative">
          <img
            width="240"
            height="240"
            src="https://picsum.photos/240/240?random=5"
            alt="Disaster Management"
            className="w-full h-auto"
            loading="lazy"
          />
          <figcaption className="text-center mt-2 font-bold">Disaster Assistance</figcaption>
        </figure>
      </div>

      <div className="flex flex-col items-center">
        <figure className="relative">
          <img
            width="240"
            height="240"
            src="https://picsum.photos/240/240?random=6"
            alt="Terrain Mapping"
            className="w-full h-auto"
            loading="lazy"
          />
          <figcaption className="text-center mt-2 font-bold">Terrain Mapping</figcaption>
        </figure>
      </div>

      <div className="flex flex-col items-center">
        <figure className="relative">
          <img
            width="240"
            height="240"
            src="https://picsum.photos/240/240?random=7"
            alt="Irrigation Survey"
            className="w-full h-auto"
            loading="lazy"
          />
          <figcaption className="text-center mt-2 font-bold">Irrigation Survey</figcaption>
        </figure>
      </div>

      <div className="flex flex-col items-center">
        <figure className="relative">
          <img
            width="240"
            height="240"
            src="https://picsum.photos/240/240?random=8"
            alt="Forest Monitoring"
            className="w-full h-auto"
            loading="lazy"
          />
          <figcaption className="text-center mt-2 font-bold">Forest Monitoring</figcaption>
        </figure>
      </div>

    </section>
    {/* <h2 className="text-center italic mt-4">Image Courtesy: Picsum</h2> */}
  </div>
</section>



      {/* Contact Us Section */}
      <section
  style={{
    backgroundImage: `url(${dronesimages})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    height: '700px',
  }}
>
  <div className="flex justify-center items-center h-[720px]">
    <div className="p-8 rounded-lg mx-4 my-10 ml-[900px]">
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
    // placeholder="+91"
    className="border-b border-gray-100 bg-transparent focus:outline-none focus:border-blue-500 w-full py-1 placeholder:text-gray-100 text-gray-100"
  />
</div>
        <div className="mb-4 relative">
        <textarea
  name="message"
  required
  className="border-2 border-gray-100 bg-transparent focus:outline-none focus:border-blue-500 w-full py-2 px-3 pt-4 placeholder:text-gray-100 text-gray-100 "
  rows="4"
  placeholder="Message *"
/>
</div>


<div className="mb-4">
  <label className="block text-gray-9000 flex items-center">
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
{showScroll && (
  <button
    onClick={scrollToTop}
    className="fixed bottom-5 right-5 bg-transparent rounded-full shadow-lg"
    aria-label="Scroll to Top"
  >
    <img
      src={abovearrowicons} // Replace with the path to your vector icon
      alt="Scroll to Top"
      className="h-6 w-6" // Adjust size as needed
    />
  </button>
)}


    </>
  );
};

export default HomePage;
