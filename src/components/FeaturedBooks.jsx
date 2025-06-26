// src/components/FeaturedBooks.jsx
import React from "react";
import books from "../books"; // Adjust the path as per your structure
import "./FeaturedBooks.css";

const FeaturedBooks = () => {
  return (
    <div className="featured-books">
      <h2>Computer Science & Engineering Books</h2>
      <div className="books-container">
        {books.map((book) => (
          <div key={book.id} className="book-card">
            <h3>{book.title}</h3>
            <p>Author: {book.author}</p>
            <a href={book.link} target="_blank" rel="noopener noreferrer">
              View Details
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FeaturedBooks;
