import React, { useState, useCallback } from 'react';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import applications from '../../Images/delivery-robot-futuristic-environment.jpg'
const SignupForm = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate(); // Initialize navigate

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const response = await axios.post(`${process.env.REACT_APP_API_URL}/api/signup`, {
        username: username.toLowerCase(),
        email,
        password,
      });
      toast.success(response.data.message);
      setUsername('');
      setEmail('');
      setPassword('');
      navigate('/login', { state: { signupSuccess: true } });
    } catch (error) {
      const message = error.response?.data?.message || 'Something went wrong';
      toast.error(message);
    } finally {
      setLoading(false);
    }
  };

  const togglePasswordVisibility = useCallback(() => {
    setShowPassword((prev) => !prev);
  }, []);

  return (
    <div className="flex items-center justify-center min-h-screen bg-cover bg-center"       style={{ backgroundImage: `url(${applications})` }}>
      <div className="relative bg-black bg-opacity-30 rounded-lg shadow-lg p-8 max-w-sm w-full transition-shadow duration-300 shadow-blue-400 hover:shadow-blue-600">
        <h2 className="text-4xl text-center text-white">Sign Up</h2>
        <form className="mt-6" onSubmit={handleSubmit}>
          {/* Username Input */}
          <div className="relative mb-4">
            <input
              type="text"
              id="username-input"
              required
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              placeholder="Username"
              className="w-full px-4 py-2 text-white bg-transparent border-2 border-gray-300 rounded-full focus:outline-none focus:border-blue-400"
            />
            <img
              src="https://cdn-icons-png.flaticon.com/512/6325/6325109.png"
              alt="user-image"
              className="absolute right-4 top-2.5"
              width="25px"
            />
          </div>

          {/* Email Input */}
          <div className="relative mb-4">
            <input
              type="email"
              id="email-input"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Email"
              className="w-full px-4 py-2 text-white bg-transparent border-2 border-gray-300 rounded-full focus:outline-none focus:border-blue-400"
            />
            <img
              src="https://cdn-icons-png.flaticon.com/512/6325/6325109.png"
              alt="email-image"
              className="absolute right-4 top-2.5"
              width="25px"
            />
          </div>

          {/* Password Input */}
          <div className="relative mb-6">
            <input
              type={showPassword ? "text" : "password"}
              id="password-input"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Password"
              className="w-full px-4 py-2 text-white bg-transparent border-2 border-gray-300 rounded-full focus:outline-none focus:border-blue-400"
            />
            <img
              src="https://cdn-icons-png.flaticon.com/512/2489/2489659.png"
              alt="lock-image"
              className="absolute right-4 top-2.5 cursor-pointer"
              width="22px"
              onClick={togglePasswordVisibility}
            />
          </div>

          {/* Sign Up Button */}
          <div className="flex justify-center">
            <button type="submit" disabled={loading} className="w-full py-2 text-black bg-white rounded-full hover:bg-gray-300">
              {loading ? 'Signing Up...' : 'Sign Up'}
            </button>
          </div>

          {/* Login Link */}
          <div className="mt-4 text-center text-white">
            <p className="text-gray-300">Already have an account? <Link to="/login" className="text-blue-500 hover:underline">Login</Link></p>
          </div>
        </form>
      </div>
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
    </div>
  );
};

export default React.memo(SignupForm);
