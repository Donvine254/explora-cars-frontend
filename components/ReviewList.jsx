"use client";

import React, { useEffect, useState } from 'react';

const ReviewList = ({ carId }) => {
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    fetch("https://explora-cars-production.up.railway.app/reviews")
      .then((response) => response.json())
      .then((data) => setReviews(data));
  }, [carId]);

  return (
    <div>
      <h2 className='font-bold text-3xl text-center my-2'>Reviews</h2>
      <ul>
        {reviews && reviews.map((review) => (
          <li key={review.id}>
            <strong>{review.title}</strong> - Rating: {review.rating}
            <p>{review.body}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ReviewList;
