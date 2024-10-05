import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import logos from '../Images/droness.jpeg';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
        <Link to="/" className="flex items-center">
          {/* Uncomment this if you want to use the logo */}
          {/* <img src={logos} alt="Logo" className="mr-2 rounded h-10 w-[110px]" /> */}
          <h1 className="text-4xl font-bold text-gray-500">AeroEdge</h1>
        </Link>
        <div className="md:hidden">
          <button onClick={toggleMenu} className="focus:outline-none">
            {isOpen ? (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
              </svg>
            )}
          </button>
        </div>
        <ul className={`md:flex space-x-6 absolute md:static bg-white w-full md:w-auto transition-transform duration-300 ease-in-out ${isOpen ? 'top-16' : '-top-96'} md:top-0`}>
          <li className="relative group">
            <Link 
              to="/" 
              className="text-gray-800 transition duration-300 block px-4 py-2 md:p-0"
              onClick={() => setIsOpen(false)}
            >
              Home 
              <span style={{ marginRight: '-10px', marginLeft: '15px' }}>|</span>
              </Link>
            <span className="absolute left-0 right-0 bottom-[-4px] h-0.5 bg-black scale-x-0 transition-transform duration-500 group-hover:scale-x-100"></span>
          </li>
          {['Products', 'Services', 'Contact Us', 'About Us'].map((item, index) => (
            <li key={index} className="relative group">
              <Link 
                to={`/${item.toLowerCase().replace(' ', '-')}`} 
                className="text-gray-800 transition duration-300 block px-4 py-2 md:p-0"
                onClick={() => setIsOpen(false)}
              >
                {item}
              </Link>
              <span className="absolute left-0 right-0 bottom-[-4px] h-0.5 bg-black scale-x-0 transition-transform duration-500 group-hover:scale-x-100"></span>
            </li>
          ))}
          <li className="relative group">
            <Link 
              to="/campaign" 
              className="text-gray-800 transition duration-300 block px-4 py-2 md:p-0"
              onClick={() => setIsOpen(false)}
            >
              Campaign
            </Link>
            <span className="absolute left-0 right-0 bottom-[-4px] h-0.5 bg-black scale-x-0 transition-transform duration-500 group-hover:scale-x-100"></span>
          </li>
          <li className="relative group">
            <Link 
              to="/signup" 
              className="text-gray-800 transition duration-300 block px-4 py-2 md:p-0"
              onClick={() => setIsOpen(false)}
            >
              Sign Up
            </Link>
            <span className="absolute left-0 right-0 bottom-[-4px] h-0.5 bg-black scale-x-0 transition-transform duration-500 group-hover:scale-x-100"></span>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
