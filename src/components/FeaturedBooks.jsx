import React from 'react';
import './FeaturedBooks.css';

const books = [
  { id: 1, title: 'Book One', author: 'Author One' },
  { id: 2, title: 'Book Two', author: 'Author Two' },
  { id: 3, title: 'Book Three', author: 'Author Three' },
];

const FeaturedBooks = () => {
  return (
    <section className="featured-books">
      <h2>Featured Books</h2>
      <div className="slider">
        {books.map((book) => (
          <div key={book.id} className="book">
            <h3>{book.title}</h3>
            <p>{book.author}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FeaturedBooks;
