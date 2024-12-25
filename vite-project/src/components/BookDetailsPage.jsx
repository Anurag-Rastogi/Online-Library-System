import React from 'react';
import { useParams, Link } from 'react-router-dom';
import booksData from '../utils/booksData';

const BookDetailsPage = () => {
  const { id } = useParams();
  const book = booksData.find((b) => b.id === parseInt(id));

  if (!book) return <h1>Book Not Found</h1>;

  return (
    <div className="container">
      <h1>{book.title}</h1>
      <p><strong>Author:</strong> {book.author}</p>
      <p><strong>Category:</strong> {book.category}</p>
      <p><strong>Description:</strong> {book.description}</p>
      <p><strong>Rating:</strong> {book.rating}</p>
      <Link to={`/books/${book.category}`}>Back to {book.category} Books</Link>
    </div>
  );
};

export default BookDetailsPage;


