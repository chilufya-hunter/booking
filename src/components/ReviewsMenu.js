import React, { useState } from 'react';
import './navbar.css';
import './reviewsmenu.css'

const ReviewsMenu = () => {
  const [reviews, setReviews] = useState([
    { id: 1, author: 'John Doe', rating: 5, content: 'Excellent stay! The guest house was clean and comfortable.' },
    { id: 2, author: 'Jane Smith', rating: 4, content: 'Great location and friendly staff. Room was a bit small.' },
    { id: 3, author: 'Mike Johnson', rating: 5, content: 'Absolutely loved it! Will definitely come back.' }
  ]);
  const [newReview, setNewReview] = useState({ author: '', rating: 5, content: '' });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewReview(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setReviews(prev => [...prev, { ...newReview, id: prev.length + 1 }]);
    setNewReview({ author: '', rating: 5, content: '' });
  };

  return (
    <div className="reviews-menu-container p-4 space-y-6">
      <h2 className="text-2xl font-bold mb-4">Guest Reviews</h2>
      
      <div className="space-y-4">
        {reviews.map(review => (
          <div key={review.id} className="bg-white p-4 rounded shadow">
            <div className="flex justify-between items-center mb-2">
              <h3 className="font-bold">{review.author}</h3>
              <div className="text-yellow-500">
                {'★'.repeat(review.rating)}{'☆'.repeat(5 - review.rating)}
              </div>
            </div>
            <p>{review.content}</p>
          </div>
        ))}
      </div>

      <form onSubmit={handleSubmit} className="bg-gray-100 p-4 rounded">
        <h3 className="text-xl font-bold mb-4">Write a Review</h3>
        <div className="space-y-4">
          <div>
            <label htmlFor="author" className="block mb-1">Your Name</label>
            <input
              type="text"
              id="author"
              name="author"
              value={newReview.author}
              onChange={handleInputChange}
              className="w-full p-2 border rounded"
              required
            />
          </div>
          <div>
            <label htmlFor="rating" className="block mb-1">Rating</label>
            <select
              id="rating"
              name="rating"
              value={newReview.rating}
              onChange={handleInputChange}
              className="w-full p-2 border rounded"
            >
              {[1, 2, 3, 4, 5].map(num => (
                <option key={num} value={num}>{num} Star{num !== 1 ? 's' : ''}</option>
              ))}
            </select>
          </div>
          <div>
            <label htmlFor="content" className="block mb-1">Your Review</label>
            <textarea
              id="content"
              name="content"
              value={newReview.content}
              onChange={handleInputChange}
              className="w-full p-2 border rounded"
              rows="4"
              required
            ></textarea>
          </div>
          <button type="submit" className="w-full bg-blue-600 text-white p-2 rounded hover:bg-blue-700 transition duration-200">
            Submit Review
          </button>
        </div>
      </form>
    </div>
  );
};

export default ReviewsMenu;