import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import { getReviewsOfMovieById } from 'services/api';

const Reviews = () => {
  const { movieId } = useParams();
  const [reviews, setReviews] = useState(null);

  useEffect(() => {
    getReviewsOfMovieById(movieId)
      .then(data => setReviews(data))
      .catch(error => toast.error(error.message));
  }, [movieId]);

  if (!reviews) return;

  console.log(reviews);

  return (
    <div>
      {reviews.length > 0 ? (
        <ul>
          {reviews.map(item => (
            <li key={item.id}>
              <p>Author: {item.author}</p>
              <p>{item.content}</p>
            </li>
          ))}
        </ul>
      ) : (
        <p>We don't have any reviews for this movie.</p>
      )}
    </div>
  );
};

export default Reviews;
