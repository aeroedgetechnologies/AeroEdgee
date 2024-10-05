import React, { useState } from 'react';
import '../css/Contact.css'; // Import your CSS file for styling
import dronesimages from '../../Images/drone-with-camera-is-flying-iceberg.jpg'; // Replace with the appropriate image path
import ScrollToTopButton from '../ScrollToTopButton';
import { ToastContainer, toast } from 'react-toastify'; // Import ToastContainer and toast
import 'react-toastify/dist/ReactToastify.css'; // Import toast styles

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
      const response = await fetch(`${process.env.REACT_APP_API_URL}/api/contact`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        toast.success('We will contact you through email!'); // Show success toast
        setFormData({
          name: '',
          organization: '',
          email: '',
          phone: '',
          message: '',
          gdpr: false,
        });
      } else {
        toast.error('Failed to send message.'); // Show error toast
      }
    } catch (error) {
      console.error('Error:', error);
      toast.error('An error occurred.'); // Show error toast
    }
  };

  return (
    <section
      style={{
        backgroundImage: `url(${dronesimages})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        minHeight: '700px', // Use minHeight instead of height
      }}
    >
      <div className="flex justify-center items-center h-[720px]">
        <div className="hidden md:flex flex-grow justify-end pr-16"> {/* Flex container for larger screens */}
          <div className="p-8 rounded-lg max-w-[700px]"> {/* Limit width for form */}
            <h1 className="text-4xl font-bold text-gray-700 mb-2">Contact Us</h1>
            <p className="text-xl text-gray-600">Learn more about our story.</p>

            <form className="mt-5" onSubmit={handleSubmit}>
              <div className="mb-4">
                <label htmlFor="name" className="block text-gray-900">Name *</label>
                <input
                  type="text"
                  name="name"
                  id="name"
                  required
                  onChange={handleChange} // Add onChange
                  className="border-b-2 border-gray-100 bg-transparent focus:outline-none focus:border-blue-500 w-full py-1"
                />
              </div>
              <div className="mb-4">
                <label htmlFor="organization" className="block text-gray-900">Organization Name</label>
                <input
                  type="text"
                  name="organization"
                  id="organization"
                  onChange={handleChange} // Add onChange
                  className="border-b border-gray-100 bg-transparent focus:outline-none focus:border-blue-500 w-full py-1"
                />
              </div>
              <div className="mb-4">
                <label htmlFor="email" className="block text-gray-900">Email Address *</label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  required
                  onChange={handleChange} // Add onChange
                  className="border-b border-gray-100 bg-transparent focus:outline-none focus:border-blue-500 w-full py-1"
                />
              </div>
              <div className="mb-4">
                <label htmlFor="phone" className="block text-gray-900">Phone Number</label>
                <input
                  type="tel"
                  name="phone"
                  id="phone"
                  onChange={handleChange} // Add onChange
                  className="border-b border-gray-100 bg-transparent focus:outline-none focus:border-blue-500 w-full py-1"
                />
              </div>
              <div className="mb-4 relative">
                <textarea
                  name="message"
                  id="message"
                  required
                  onChange={handleChange} // Add onChange
                  className="border-2 border-gray-100 bg-transparent focus:outline-none focus:border-blue-500 w-full py-2 px-3 pt-4"
                  rows="4"
                  placeholder="Message *"
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-900 flex items-center">
                  <input
                    type="checkbox"
                    name="gdpr"
                    id="gdpr"
                    required
                    onChange={handleChange} // Add onChange
                    className="mr-2"
                  />
                  By using this form you agree with the storage and handling of your data by this website.
                </label>
              </div>
              <button type="submit" className="bg-gray-500 text-white px-4 py-2 rounded hover:bg-green-700">
              Send
              </button>
            </form>
          </div>
        </div>

        {/* Centered form for smaller screens */}
        <div className="md:hidden p-8 rounded-lg max-w-[400px]"> {/* Hide on larger screens */}
          <h1 className="text-4xl font-bold text-gray-700 mb-2">Contact Us</h1>
          <p className="text-xl text-gray-600">Learn more about our story.</p>

          <form className="mt-5" onSubmit={handleSubmit}>
            <div className="mb-4">
              <label htmlFor="name" className="block text-gray-900">Name *</label>
              <input
                type="text"
                name="name"
                id="name"
                required
                onChange={handleChange} // Add onChange
                className="border-b-2 border-gray-100 bg-transparent focus:outline-none focus:border-blue-500 w-full py-1"
              />
            </div>
            <div className="mb-4">
              <label htmlFor="organization" className="block text-gray-900">Organization Name</label>
              <input
                type="text"
                name="organization"
                id="organization"
                onChange={handleChange} // Add onChange
                className="border-b border-gray-100 bg-transparent focus:outline-none focus:border-blue-500 w-full py-1"
              />
            </div>
            <div className="mb-4">
              <label htmlFor="email" className="block text-gray-900">Email Address *</label>
              <input
                type="email"
                name="email"
                id="email"
                required
                onChange={handleChange} // Add onChange
                className="border-b border-gray-100 bg-transparent focus:outline-none focus:border-blue-500 w-full py-1"
              />
            </div>
            <div className="mb-4">
              <label htmlFor="phone" className="block text-gray-900">Phone Number</label>
              <input
                type="tel"
                name="phone"
                id="phone"
                onChange={handleChange} // Add onChange
                className="border-b border-gray-100 bg-transparent focus:outline-none focus:border-blue-500 w-full py-1"
              />
            </div>
            <div className="mb-4 relative">
              <textarea
                name="message"
                id="message"
                required
                onChange={handleChange} // Add onChange
                className="border-2 border-gray-100 bg-transparent focus:outline-none focus:border-blue-500 w-full py-2 px-3 pt-4"
                rows="4"
                placeholder="Message *"
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-900 flex items-center">
                <input
                  type="checkbox"
                  name="gdpr"
                  id="gdpr"
                  required
                  onChange={handleChange} // Add onChange
                  className="mr-2"
                />
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
      <ToastContainer 
        position="top-center"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
    </section>
  );
};

export default Contact;
