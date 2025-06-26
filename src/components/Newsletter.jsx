import React, { useState } from 'react';
import './Newsletter.css';

const Newsletter = () => {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email.includes('@')) {
      setMessage('Thank you for signing up!');
    } else {
      setMessage('Please enter a valid email address.');
    }
  };

  return (
    <section className="newsletter">
      <h2>Sign Up for Our Newsletter</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="email"
          placeholder="Enter your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <button type="submit">Subscribe</button>
      </form>
      {message && <p>{message}</p>}
    </section>
  );
};

export default Newsletter;
