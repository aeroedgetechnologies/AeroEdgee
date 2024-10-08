import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import applications from '../../Images/delivery-robot-futuristic-environment.jpg'

const LoginForm = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const location = useLocation(); // Get location from the hook
  const navigate = useNavigate();
    useEffect(() => {
    if (location.state?.signupSuccess) {
      toast.success("Signup successful! You can now log in."); // Show success toast
    }
  }, [location]);
  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("Username:", username.toLowerCase()); // Log the username
    console.log("Password:", password); // Log the password
    try {
      const response = await axios.post(`${process.env.REACT_APP_API_URL}/api/login`, {
        username: username.toLowerCase(), // Ensure the username is lowercased here as well
        password,
      });
      toast.success(response.data.message); // Display success message in a toast
      setUsername('');
      setPassword('');
      navigate('/', { state: { fromLogin: true } });
    } catch (error) {
      const message = error.response?.data?.message || 'Error logging in';
      toast.error(message); // Display error message in a toast
    }
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-cover bg-center" style={{ backgroundImage: `url(${applications})` }}>
      <div className="relative bg-black bg-opacity-30 rounded-lg shadow-lg p-8 max-w-sm w-full transition-shadow duration-300 shadow-blue-400 hover:shadow-blue-600">
        <h2 className="text-4xl text-center text-white">Login</h2>
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
              className="w-full px-4 py-2 text-gray-700 bg-transparent border-2 border-gray-300 rounded-full focus:outline-none focus:border-blue-400 placeholder-black"
            />
            {/* <img
              src="https://cdn-icons-png.flaticon.com/512/6325/6325109.png"
              alt="user-image"
              className="absolute right-4 top-2.5"
              width="25px"
            /> */}
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
              className="w-full px-4 py-2 text-gray-700 bg-transparent border-2 border-gray-300 rounded-full focus:outline-none focus:border-blue-400 placeholder-black"
            />
            <img
              src="https://cdn-icons-png.flaticon.com/512/2489/2489659.png"
              alt="lock-image"
              className="absolute right-4 top-2.5 cursor-pointer"
              width="22px"
              onClick={togglePasswordVisibility}
            />
          </div>

          {/* Remember me and Forgot password */}
          <div className="flex justify-between mb-4">
            <div className="flex items-center">
              <input type="checkbox" id="remember" className="mr-2" />
              <label htmlFor="remember" className="text-white">Remember me</label>
            </div>
            <div>
              <a href="#" className="text-white hover:underline">Forgot Password?</a>
            </div>
          </div>

          {/* Login Button */}
          <div className="flex justify-center">
            <button type="submit" className="w-full py-2 text-black bg-white rounded-full hover:bg-gray-300">Login</button>
          </div>

          {/* Register Link */}
          <div className="mt-4 text-center text-white">
            <p className="text-gray-300">Don't you have an account? <Link to="/signup" className="text-blue-500 hover:underline">Register</Link></p>
          </div>
        </form>
      </div>
      <ToastContainer 
        position="top-center" // Toast position
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

export default LoginForm;
