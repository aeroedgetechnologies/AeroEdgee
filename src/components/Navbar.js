import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import './css/Navbar.css';

const navItems = [
  { label: 'Home', to: '/' },
  { label: 'Products', to: '/products' },
  { label: 'Services', to: '/services' },
  { label: 'Contact Us', to: '/contact-us' },
  { label: 'About Us', to: '/about-us' },
  { label: 'Campaign', to: '/campaign' },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const linkClass = ({ isActive }) =>
    `px-3 py-2 rounded-md text-sm font-medium transition-colors ${
      isActive ? 'text-gray-900 bg-gray-100' : 'text-gray-700 hover:text-gray-900 hover:bg-gray-50'
    }`;

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50 w-full">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 md:h-[4.5rem]">
          <Link to="/" className="flex-shrink-0 flex items-center min-w-0" onClick={() => setIsOpen(false)}>
            <span className="text-2xl sm:text-3xl font-bold text-gray-600 truncate">AeroEdge</span>
          </Link>

          <button
            type="button"
            className="md:hidden inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:bg-gray-100 focus:outline-none"
            aria-expanded={isOpen}
            aria-label="Toggle menu"
            onClick={() => setIsOpen((o) => !o)}
          >
            {isOpen ? (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>

          <ul
            className={`${
              isOpen ? 'flex' : 'hidden'
            } md:flex absolute md:static left-0 right-0 top-16 md:top-auto bg-white md:bg-transparent flex-col md:flex-row md:items-center gap-1 md:gap-0 shadow-lg md:shadow-none border-t md:border-0 border-gray-100 py-3 md:py-0 px-4 md:px-0`}
          >
            {navItems.map((item, index) => (
              <li key={item.to} className="flex items-center md:flex-row flex-col w-full md:w-auto">
                <NavLink
                  to={item.to}
                  end={item.to === '/'}
                  className={linkClass}
                  onClick={() => setIsOpen(false)}
                >
                  {item.label}
                </NavLink>
                {index < navItems.length - 1 && (
                  <span className="nav-separator hidden md:inline" aria-hidden="true">
                    |
                  </span>
                )}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
