import React from 'react';
import { Link } from 'react-router-dom';
import booksData from '../utils/booksData';

const HomePage = () => {
  const categories = [...new Set(booksData.map((book) => book.category))];
  const popularBooks = booksData.slice(0, 3);

  return (
    <div className="container">
      <h1>Welcome to the Online Library</h1>
      <h3>Book Categories:</h3>
      <ul>
        {categories.map((category, index) => (
          <li key={index}>
            <Link to={`/books/${category}`}>{category}</Link>
          </li>
        ))}
      </ul>
      <h3>Popular Books:</h3>
      <div className="book-grid">
        {popularBooks.map((book) => (
          <div className="book-card" key={book.id}>
            <img src={book.image} alt={book.title} />
            <h3>{book.title}</h3>
            <p><strong>Author:</strong> {book.author}</p>
            <p><strong>Rating:</strong> {book.rating}</p>
            <Link to={`/books/details/${book.id}`} className="details-link">View Details</Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HomePage;




