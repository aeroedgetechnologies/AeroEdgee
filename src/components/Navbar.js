import React from 'react';
import { Link } from 'react-router-dom';
import logos from '../Images/droness.jpeg';

const Navbar = () => {
  return (
    <nav className="bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
        <Link to="/" className="flex items-center">
          {/* <img src={logos} alt="Logo" className="mr-2 ml-7rounded h-10 w-[110px]" /> */}
          <h1 className='text-4xl font-bold text-gray-500 mb-2'>AeroEdge</h1>
        </Link>
        <ul className="flex space-x-6">
          {['Products', 'Services', 'Contact Us', 'About Us'].map((item, index) => (
            <li key={index} className="relative group">
              <Link 
                to={`/${item.toLowerCase().replace(' ', '-')}`} 
                className="text-gray-800 transition duration-300"
              >
                {item}
              </Link>
              <span className="absolute left-0 right-0 bottom-[-4px] h-0.5 bg-black scale-x-0 transition-transform duration-500 group-hover:scale-x-100"></span>
            </li>
          ))}
          {/* Special case for Campaign */}
          <li className="relative group">
            <Link 
              to="/item-form" 
              className="text-gray-800 transition duration-300"
            >
              Campaign
            </Link>
            <span className="absolute left-0 right-0 bottom-[-4px] h-0.5 bg-black scale-x-0 transition-transform duration-500 group-hover:scale-x-100"></span>
          </li>
          {/* Special case for Sign Up */}
          <li className="relative group">
            <Link 
              to="/signup" 
              className="text-gray-800 transition duration-300"
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
