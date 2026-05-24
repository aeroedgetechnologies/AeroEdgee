import React from 'react';
import '../css/Product.css';
import ReactPlayer from 'react-player';
import MediaCoverage from './MediaCoverage';
import ScrollToTopButton from '../ScrollToTopButton';
import Seo from '../Seo';
import products1 from '../../Images/products1.jpg';
import products2 from '../../Images/products2.jpg';
import products3 from '../../Images/products3.jpg';
import products4 from '../../Images/products4.jpg';
import products5 from '../../Images/products5.jpg';
import products6 from '../../Images/photo_2024-09-29_13-14-49.jpg';
import products11 from '../../components/Site Context/Automation & Fire safety/pexels-kjbromme-16544054.jpg';
import products12 from '../../components/Site Context/Automation & Fire safety/pexels-lolimjoshingyou-12997193 (1).jpg';

const products = [
  {
    title: 'Surveillance Systems',
    description: 'Advanced systems for monitoring and security applications.',
    image: products1,
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
    description: 'Comprehensive solutions that optimize equipment functionality.',
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
    image: products6,
  },
  {
    title: 'Automations',
    description: 'Our quality parts reducing manual tasks and enhancing efficiency.',
    image: products11,
  },
  {
    title: 'Fire safety',
    description:
      'With real-time monitoring and alerts, we ensure a rapid response to potential hazards.',
    image: products12,
  },
];

const Product = () => {
  return (
    <div className="product-page">
      <Seo
        title="Products"
        path="/products"
        description="Explore AeroEdge surveillance systems, military-grade drones, anti-UAV technology, optics, radio equipment, automation, and fire safety solutions."
        keywords="drone products, surveillance systems, anti-drone, military drones India, AeroEdge products"
      />

      <section className="product-hero" aria-labelledby="product-hero-heading">
        <div className="product-hero-overlay">
          <div className="product-hero-content">
            <h1 id="product-hero-heading">Drones Delivering Medical Essentials</h1>
            <p className="product-hero-subtitle">
              Next Generation Drones for Future Logistics
            </p>
          </div>
        </div>
      </section>

      <section className="products-section" aria-labelledby="our-products-heading">
        <h2 id="our-products-heading" className="text-center text-3xl md:text-4xl font-bold mb-10">
          Our Products
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 px-2">
          {products.map((product) => (
            <article
              key={product.title}
              className="product-card p-5 rounded-lg shadow-md transition-transform hover:scale-[1.02]"
            >
              <img
                src={product.image}
                alt={`${product.title} — AeroEdge Technologies`}
                className="w-full h-44 object-cover rounded-lg mb-4"
                loading="lazy"
              />
              <h3 className="text-xl font-semibold mb-2 text-gray-900">{product.title}</h3>
              <p className="text-gray-600 flex-grow">{product.description}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="product-video-section" aria-labelledby="amc-heading">
        <div className="max-w-6xl mx-auto px-4 grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          <div className="video-wrapper">
            <ReactPlayer
              url="https://www.youtube.com/watch?v=ePfc0cmDAbc"
              width="100%"
              height="100%"
              controls
              config={{
                youtube: { playerVars: { modestbranding: 1 } },
              }}
            />
          </div>
          <div className="product-video-copy">
            <h2 id="amc-heading">AMC Agreements</h2>
            <p>
              Helping to keep products in optimal condition and potentially prolonging their
              lifespan.
            </p>
          </div>
        </div>
      </section>

      <MediaCoverage />
      <ScrollToTopButton />
    </div>
  );
};

export default Product;
