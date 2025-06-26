import React from 'react';
import './About.css';

const About = () => {
  return (
    <div className="about-container">
      <h1>About BookWorm</h1>
      <p>
        Welcome to <strong>BookWorm</strong>, your one-stop solution for finding and exploring a wide range of books. 
        Whether you are a student, a professional, or just someone who loves reading, we have something for everyone.
      </p>
      <p>
        Our platform features:
      </p>
      <ul>
        <li>A curated selection of featured books</li>
        <li>Easy-to-navigate category filters</li>
        <li>Interactive newsletter sign-up</li>
      </ul>
      <p>
        BookWorm is dedicated to fostering a community of book lovers and providing a seamless user experience.
        Happy reading!
      </p>
    </div>
  );
};

export default About;
