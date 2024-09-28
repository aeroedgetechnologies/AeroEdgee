import React, { useState } from 'react';
import axios from 'axios';

const SignupForm = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:5000/api/signup', {
        username,
        email,
        password,
      });
      alert(response.data.message);
      setUsername('');
      setEmail('');
      setPassword('');
    } catch (error) {
      alert('Error creating user: ' + error.message);
    }
  };

  return (
    <div style={{
      padding: '40px',
      color: 'white',
      backgroundImage: 'url(https://picsum.photos/800/400?random)', // Picsum background image
      backgroundSize: 'cover', // Cover the entire div
      backgroundPosition: 'center', // Center the background image
      opacity: 0.9, // Slightly transparent to show overlay
    }}>
      {/* <div style={{ textAlign: 'center' }}>
        <h2>Join Us Today!</h2>
        <p>Create your account to start using our application.</p>
      </div> */}
      
      <div style={{
      padding: '40px',
      color: 'white',
      borderRadius: '8px',
      margin: '20px auto',
      // backgroundImage: 'url(https://picsum.photos/800/400)',
      // backgroundSize: 'cover',
      // backgroundPosition: 'center',
      // opacity: 0.9,
      backgroundColor: 'rgba(0, 0, 0, 0.6)', // Semi-transparent background for form
      minHeight: '100vh', // Full height of the viewport
      display: 'flex', // Use flexbox for centering
      justifyContent: 'center', // Center content horizontally
      alignItems: 'center', // Center content vertically
    }}>
      <div style={{
        width: '100%', // Full width for the inner div
        backgroundColor: 'rgba(278, 277, 269, 0.3)',
        padding: '20px',
        borderRadius: '8px',
        maxWidth: '820px',
        minHeight: "432px",
      }}>
        <div style={{ textAlign: 'center', marginBottom: '20px' }}>
          <h2>Join Us Today!</h2>
          <p>Create your account to start using our application.</p>
        </div>

        <form onSubmit={handleSubmit}>
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            placeholder="Enter your username"
            required
            style={{
              width: '100%', // Full width for inputs
              padding: '10px',
              margin: '10px 0',
              border: '1px solid #ccc',
              borderRadius: '4px',
              boxSizing: 'border-box',
            }}
          />
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email"
            required
            style={{
              width: '100%', // Full width for inputs
              padding: '10px',
              margin: '10px 0',
              border: '1px solid #ccc',
              borderRadius: '4px',
              boxSizing: 'border-box',
            }}
          />
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Enter your password"
            required
            style={{
              width: '100%', // Full width for inputs
              padding: '10px',
              margin: '10px 0',
              border: '1px solid #ccc',
              borderRadius: '4px',
              boxSizing: 'border-box',
            }}
          />
          <div style={{ textAlign: 'center', marginTop: '20px' }}>
            <button type="submit" style={{
              padding: '10px 20px',
              backgroundColor: '#007bff',
              color: 'white',
              border: 'none',
              borderRadius: '4px',
              cursor: 'pointer',
            }}>Sign Up</button>
          </div>
        </form>
      </div>
    </div>
{/* 
      <div style={{
        marginTop: '20px',
        padding: '20px',
        backgroundImage: 'url(https://picsum.photos/800/401)', // New background image
        backgroundSize: 'cover',
        borderRadius: '8px',
        opacity: 0.9,
      }}>
        <h3>About Us</h3>
        <p>We are dedicated to providing the best experience for our users.</p>
      </div>

      <div style={{
        marginTop: '20px',
        padding: '20px',
        backgroundImage: 'url(https://picsum.photos/800/402)', // New background image
        backgroundSize: 'cover',
        borderRadius: '8px',
        opacity: 0.9,
      }}>
        <h3>Features</h3>
        <ul>
          <li>Easy to use interface</li>
          <li>24/7 customer support</li>
          <li>Regular updates and improvements</li>
        </ul>
      </div>

      <div style={{
        marginTop: '20px',
        padding: '20px',
        backgroundImage: 'url(https://picsum.photos/800/403)', // New background image
        backgroundSize: 'cover',
        borderRadius: '8px',
        opacity: 0.9,
      }}>
        <h3>Testimonials</h3>
        <p>Our users love us! Hear what they have to say about their experience.</p>
      </div>

      <div style={{
        marginTop: '20px',
        padding: '20px',
        backgroundImage: 'url(https://picsum.photos/800/404)', // New background image
        backgroundSize: 'cover',
        borderRadius: '8px',
        opacity: 0.9,
      }}>
        <h3>Contact Us</h3>
        <p>Get in touch for any queries or support!</p>
      </div> */}
    </div>
  );
};

export default SignupForm;
