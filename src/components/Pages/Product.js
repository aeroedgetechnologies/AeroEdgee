import React from 'react';
import '../css/Product.css'; // Ensure you have the necessary CSS for styling
import ReactPlayer from 'react-player';
import MediaCoverage from './MediaCoverage';
import products1 from '../../Images/products1.jpg';
import products2 from '../../Images/products2.jpg';
import products3 from '../../Images/products3.jpg';
import products4 from '../../Images/products4.jpg';
import products5 from '../../Images/products5.jpg'; // Keep this as products5
import products6 from '../../Images/photo_2024-09-29_13-14-49.jpg'; // Rename this import
import ScrollToTopButton from '../ScrollToTopButton';
import products11 from '../../components/Site Context/Automation & Fire safety/pexels-kjbromme-16544054.jpg'; 
import products12 from '../../components/Site Context/Automation & Fire safety/pexels-lolimjoshingyou-12997193 (1).jpg'; 

const products = [
  {
    title: 'Surveillance Systems',
    description: 'Advanced systems for monitoring and security applications.',
    image: products1, // Use the variable directly
  },
  {
    title: 'Drones',
    description: 'Versatile drones designed for various industries.',
    image: products2,
  },
  {
    title: 'Optics and Lenses',
    description: 'High-performance optics for enhanced visibility and precision.',
    image: products3,
  },
  {
    title: 'Drones Integrated Equipment',
    description: 'Comprehensive solutions that optimize Equipments functionality.',
    image: products4,
  },
  {
    title: 'Anti-Drone Systems',
    description: 'Effective technologies to ensure security against unauthorized drones.',
    image: products5,
  },
  {
    title: 'Radio Equipment',
    description: 'Reliable communication tools for seamless operations.',
    image: products6, // Use the renamed variable here
  },
  {
    title: 'Automations',
    description: 'Our quality parts reducing manual tasks and enhancing efficiency.',
    image: products11, // Use the renamed variable here
  },
  {
    title: 'Fire safety',
    description: 'With real-time monitoring and alerts, we ensure a rapid response to potential hazards.',
    image: products12, // Use the renamed variable here
  },
];
const Product = () => {
  return (
    <div>
      {/* Drones Delivering Good Section */}
      <section className="bg-custom text-white py-10">
<div className="max-w-6xl mx-auto px-4 text-left h-full flex flex-col justify-center">
  <h2 className="text-4xl mb-2 pl-4 md:pl-6 lg:pl-8">
    Drones Delivering Medical Essentials
    <br />
    {/* <span className="text-yellow-300">GOOD</span>s. */}
  </h2>
  <h6 className="text-lg pl-4 text-red-700 md:text-xl lg:text-2xl md:pl-6 lg:pl-8">
    Next Generation Drones for Future Logistics
  </h6>
</div>

</section>

      {/* Products Section */}
      <section className="products-section py-16 bg-white mx-4 my-20">
      <h2 className="text-center text-4xl font-bold mb-8">Our Products</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-4">
          {products.map((product, index) => (
            <div key={index} className="product-card p-6 rounded-lg shadow-md transition-transform transform hover:scale-105">
              <img src={product.image} alt={product.title} className="w-full h-48 object-cover rounded-t-lg mb-4" />
              <h3 className="text-xl font-semibold mb-2">{product.title}</h3>
              <p className="text-gray-700">{product.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Life Saving Deliveries Section */}
<section className="py-10 bg-white bg-custom-section">
      <div className="absolute inset-0 bg-cover bg-center" style={{ opacity: 0.2 }} />
      <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row items-center relative z-10 h-full ml-10">
  <div className="relative w-full max-w-[90vw] mx-auto overflow-hidden" style={{ paddingTop: '56.25%', minHeight: '200px' }}>
    <ReactPlayer
      url="https://youtu.be/ePfc0cmDAbc?si=FJctnlw57C9P2pvQ" // YouTube video URL
      className="absolute top-0 left-0 w-full h-full"
      controls
    />
  </div>

  <div className="md:w-1/2 flex flex-col justify-center text-center md:text-left md:ml-10 md:mt-0 mt-6"> {/* Added mt-6 for spacing */}
    <h2 className="text-3xl font-bold mb-4 text-gray-300">AMC Agreements</h2>
    <p className="mb-2 text-gray-300">Helping to keep products in optimal condition and potentially prolonging their lifespan</p>
    {/* <p className="mb-2 text-gray-300"><strong>First</strong> Drone Medical delivery of INDIA.</p> */}
  </div>
</div>

      <div
        className="absolute inset-0 flex items-center justify-center"
        style={{ pointerEvents: 'none' }} // Prevents interfering with other elements
      >
        <img
          src="https://example.com/vector-graphic.svg" // Replace with your vector graphic URL
          alt="Vector Background"
          className="h-full w-full object-cover opacity-10"
        />
      </div>
    </section>
    <MediaCoverage />
    <ScrollToTopButton />
    </div>
  );
};

export default Product;
