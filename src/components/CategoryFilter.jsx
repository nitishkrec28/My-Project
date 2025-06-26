import React, { useState } from 'react';
import './CategoryFilter.css';

const categories = ['Fiction', 'Non-Fiction', 'Sci-Fi', 'Biography'];

const CategoryFilter = () => {
  const [selectedCategory, setSelectedCategory] = useState('');

  return (
    <section className="category-filter">
      <h2>Filter by Category</h2>
      <select onChange={(e) => setSelectedCategory(e.target.value)} value={selectedCategory}>
        <option value="">All Categories</option>
        {categories.map((category, index) => (
          <option key={index} value={category}>
            {category}
          </option>
        ))}
      </select>
      <p>Selected: {selectedCategory || 'None'}</p>
    </section>
  );
};

export default CategoryFilter;
