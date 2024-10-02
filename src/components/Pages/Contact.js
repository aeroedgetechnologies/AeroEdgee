import React, { useState } from 'react';
import '../css/Contact.css'; // Import your CSS file for styling
import dronesimages from '../../Images/drone-with-camera-is-flying-iceberg.jpg'; // Replace with the appropriate image path
import ScrollToTopButton from '../ScrollToTopButton';

const Contact = () => {
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
      const response = await fetch('https://aeroedgee.onrender.com/api/contact', {
      // const response = await fetch('http://localhost:5000/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        alert('Message sent successfully!');
        setFormData({
          name: '',
          organization: '',
          email: '',
          phone: '',
          message: '',
          gdpr: false,
        });
      } else {
        alert('Failed to send message.');
      }
    } catch (error) {
      console.error('Error:', error);
      alert('An error occurred.');
    }
  };

  return (
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
    <ScrollToTopButton />
  </section>
  );
};

export default Contact;
