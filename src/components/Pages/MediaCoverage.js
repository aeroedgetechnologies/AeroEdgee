import React, { useState } from 'react';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import '../css/MediaCoverage.css';

const mediaCoverageData = [
  {
    title: 'Article 1',
    description: 'Description for Article 1.',
    image: 'https://picsum.photos/800/400?random=1',
  },
  {
    title: 'Article 2',
    description: 'Description for Article 2.',
    image: 'https://picsum.photos/800/400?random=2',
  },
  {
    title: 'Article 3',
    description: 'Description for Article 3.',
    image: 'https://picsum.photos/800/400?random=3',
  },
  {
    title: 'Article 4',
    description: 'Description for Article 4.',
    image: 'https://picsum.photos/800/400?random=4',
  },
];

const MediaCoverage = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % mediaCoverageData.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      (prevIndex - 1 + mediaCoverageData.length) % mediaCoverageData.length
    );
  };

  return (
    <section className="media-coverage">
      <h2 className="text-center text-4xl font-bold mb-8">Media Coverage</h2>
      <div className="relative flex items-center justify-center">
        <div className="slide text-center">
          <img
            src={mediaCoverageData[currentIndex].image}
            alt={mediaCoverageData[currentIndex].title}
            className="w-[1000px] h-[400px] rounded-lg mb-4"
          />
          <h3 className="text-xl font-semibold">
            {mediaCoverageData[currentIndex].title}
          </h3>
          <p className="text-gray-700 mt-2">
            {mediaCoverageData[currentIndex].description}
          </p>
        </div>
        <button
          onClick={prevSlide}
          className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-gray-700 text-white p-3 rounded-full shadow-lg hover:bg-gray-600"
        >
          <FaChevronLeft size={24} />
        </button>
        <button
          onClick={nextSlide}
          className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-gray-700 text-white p-3 rounded-full shadow-lg hover:bg-gray-600"
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
    </section>
  );
};

export default MediaCoverage;
