import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import booksData from '../utils/booksData';
import './BrowseBooksPage.css';

const BrowseBooksPage = () => {
  const { category } = useParams();
  const [searchTerm, setSearchTerm] = useState('');
  const filteredBooks = booksData.filter(
    (book) =>
      (!category || book.category.toLowerCase() === category.toLowerCase()) &&
      (book.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        book.author.toLowerCase().includes(searchTerm.toLowerCase()))
  );

  return (
    <div className="container">
      <h1>{category ? `Books in ${category}` : "All Books"}</h1>
      <input
        type="text"
        placeholder="Search by title or author"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="search-bar"
      />
      <div className="book-grid">
        {filteredBooks.map((book) => (
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

export default BrowseBooksPage;




