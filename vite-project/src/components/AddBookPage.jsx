import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import booksData from '../utils/booksData';

const AddBookPage = () => {
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const [category, setCategory] = useState('');
  const [description, setDescription] = useState('');
  const [rating, setRating] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const newBook = {
      id: booksData.length + 1,
      title,
      author,
      category,
      description,
      rating: parseFloat(rating),
    };
    booksData.push(newBook);
    navigate('/browse');
  };

  return (
    <div className="container">
      <h1>Add a New Book</h1>
      <form onSubmit={handleSubmit}>
        <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} placeholder="Title" required />
        <input type="text" value={author} onChange={(e) => setAuthor(e.target.value)} placeholder="Author" required />
        <input type="text" value={category} onChange={(e) => setCategory(e.target.value)} placeholder="Category" required />
        <textarea value={description} onChange={(e) => setDescription(e.target.value)} placeholder="Description" required />
        <input type="number" value={rating} onChange={(e) => setRating(e.target.value)} placeholder="Rating" step="0.1" required />
        <button type="submit">Add Book</button>
      </form>
    </div>
  );
};

export default AddBookPage;



