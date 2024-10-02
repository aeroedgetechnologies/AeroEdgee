// src/App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link  } from 'react-router-dom';
import Navbar from './components/Navbar';
// import Products from './components/pages/Products';
// import Services from './components/pages/Services';
// import Campaign from './components/pages/Campaign';
// import ContactUs from './components/pages/ContactUs';
// import AboutUs from './components/pages/AboutUs';
import ItemForm from './ItemForm';
import SignupForm from './SignupForm';
import HomePage from './components/Pages/Homepage';
import Product from './components/Pages/Product';
import Services from './components/Pages/Services';
import Contact from './components/Pages/Contact';
import AboutUs from './components/Pages/AboutUs';
import Campaign from './components/Pages/Campaign';
import supportedBy from '../src/Images/Supported by_page-0001.jpg';
import ScrollToTopButton from './components/ScrollToTopButton';
import LoginForm from './LoginForm';
import Homes from './components/Codepen/Homes';

const App = () => {
  return (
    <Router>
      <div>
        <Navbar />
        <main className="scrollable">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/products" element={<Product />} />
            <Route path="/services" element={<Services />} />
            <Route path="/campaign" element={<Campaign />} />
            <Route path="/contact-us" element={<Contact />} />
            <Route path="/about-us" element={<AboutUs />} />
            <Route path="/item-form" element={<ItemForm />} />
            <Route path="/signup" element={<SignupForm />} />
            <Route path="/login" element={<LoginForm />} />
            <Route path="/homes" element={<Homes />} />
          </Routes>
        </main>
        <ScrollToTopButton /> 
        <footer className="bg-gray-300 text-gray-700 py-4">
          <div className="flex justify-around items-center mb-4">
            <div className="text-center">
              <h2 style={{ fontSize: '29px', fontWeight: 'bold' }}>Supported By</h2>
              <Link to="/">
                <img
                  src={supportedBy}
                  alt="Supported By"
                  className="mt-2 w-[360px]"
                />
              </Link>
            </div>

            <div className="text-center">
              <h2 style={{ fontSize: '29px', fontWeight: 'bold' }}>Contact Us</h2>
              <a href="mailto:sales@cdspace.in" style={{ color: '#4B5563', fontSize: '18px' }}>
                aeroedgetechnologies@gmail.com
              </a>
            </div>
          </div>

          <div className="text-center p-7">
            <p style={{ fontSize: '18px' }}>
              &copy; {new Date().getFullYear()} Simple Page. All rights reserved.
            </p>
          </div>
        </footer>
      </div>
    </Router>
  );
};

export default App;
