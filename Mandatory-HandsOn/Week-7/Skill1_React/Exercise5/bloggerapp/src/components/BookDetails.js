import React from 'react';

const BookDetails = ({ isVisible, book }) => {
  // Conditional Rendering Method 1: Using if-else statement
  if (!isVisible) {
    return null;
  }

  return (
    <div className="book-details">
      <h2>Book Details</h2>
      {/* Conditional Rendering Method 2: Using ternary operator */}
      {book ? (
        <div>
          <h3>{book.title}</h3>
          <p><strong>Author:</strong> {book.author}</p>
          <p><strong>Genre:</strong> {book.genre}</p>
          <p><strong>Pages:</strong> {book.pages}</p>
          {/* Conditional Rendering Method 3: Using logical AND operator */}
          {book.rating && <p><strong>Rating:</strong> {book.rating}/5</p>}
          {book.available && <span className="available">✓ Available</span>}
          {!book.available && <span className="unavailable">✗ Out of Stock</span>}
        </div>
      ) : (
        <p>No book selected</p>
      )}
    </div>
  );
};

export default BookDetails;
