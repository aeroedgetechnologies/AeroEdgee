import React, { useState } from 'react';
import { FaChevronLeft, FaChevronRight, FaTimes } from 'react-icons/fa';
import '../css/MediaCoverage.css';
import ScrollToTopButton from '../ScrollToTopButton';
import MediaCoverageImage from "../../components/Site Context/Media Coverage/pexels-vie-studio-4439444 (1).jpg"; // Ensure you have the correct import

// Media coverage data
const mediaCoverageData = [
  {
    title: 'Article',
    // description: 'Description for Article 1.',
    image: MediaCoverageImage,
  },
  {
    title: 'Article',
    // description: 'Description for Article 2.',
    image: MediaCoverageImage,
  },
  {
    title: 'Article',
    // description: 'Description for Article 3.',
    image: MediaCoverageImage,
  },
  {
    title: 'Article',
    // description: 'Description for Article 4.',
    image: MediaCoverageImage,
  },
];

// Modal component with animation
const Modal = ({ image, onClose, isExiting, nextImage, prevImage }) => {
  return (
    <div
      className={`fixed inset-0 flex items-center justify-center bg-black bg-opacity-75 transition-opacity duration-300 ${isExiting ? 'opacity-0' : 'opacity-100'}`}
    >
      <button className="absolute top-4 right-4 text-white" onClick={onClose}>
        <FaTimes size={24} />
      </button>
      <img
        src={image}
        alt="Enlarged"
        className="max-w-full max-h-full object-contain"
        style={{ width: '70%', height: '70%' }}
      />
      <button className="absolute left-4 top-1/2 transform -translate-y-1/2 text-white" onClick={prevImage}>
        <FaChevronLeft size={24} />
      </button>
      <button className="absolute right-4 top-1/2 transform -translate-y-1/2 text-white" onClick={nextImage}>
        <FaChevronRight size={24} />
      </button>
    </div>
  );
};

// Main MediaCoverage component
const MediaCoverage = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isExiting, setIsExiting] = useState(false);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % mediaCoverageData.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + mediaCoverageData.length) % mediaCoverageData.length);
  };

  const openModal = () => setIsModalOpen(true);

  const closeModal = () => {
    setIsExiting(true);
    setTimeout(() => {
      setIsExiting(false);
      setIsModalOpen(false);
    }, 300); // Match this duration with the CSS transition duration
  };

  return (
    <section className="media-coverage">
      <h2 className="text-center text-4xl font-bold mb-8">Media Coverage</h2>
      <div className="relative flex items-center justify-center">
        <div className="slide text-center" onClick={openModal}>
          <img
            src={mediaCoverageData[currentIndex].image}
            alt={mediaCoverageData[currentIndex].title}
            className="w-[1100px] h-[500px] rounded-lg mb-2 cursor-pointer"
          />
          <h3 className="text-xl font-semibold">{mediaCoverageData[currentIndex].title}</h3>
          <p className="text-gray-700 mt-2">{mediaCoverageData[currentIndex].description}</p>
        </div>
        <button
          onClick={prevSlide}
          className="absolute left-4 top-1/2 transform -translate-y-1/2 text-white p-2 rounded-full shadow-lg text-black"
        >
          <FaChevronLeft size={24} />
        </button>
        <button
          onClick={nextSlide}
          className="absolute right-4 top-1/2 transform -translate-y-1/2 text-white p-2 rounded-full shadow-lg"
        >
          <FaChevronRight size={24} />
        </button>
      </div>
      <div className="flex justify-center mt-4">
        {mediaCoverageData.map((_, index) => (
          <button
            key={index}
            className={`w-3 h-3 mx-1 rounded-full ${currentIndex === index ? 'bg-gray-700' : 'bg-gray-300'}`}
            onClick={() => setCurrentIndex(index)}
          />
        ))}
      </div>
      <ScrollToTopButton />

      {/* Modal for displaying enlarged image */}
      {isModalOpen && (
        <Modal
          image={mediaCoverageData[currentIndex].image}
          onClose={closeModal}
          isExiting={isExiting}
          nextImage={nextSlide}
          prevImage={prevSlide}
        />
      )}
    </section>
  );
};

export default MediaCoverage;
