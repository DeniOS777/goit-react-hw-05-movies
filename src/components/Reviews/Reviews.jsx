import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import { getReviewsOfMovieById } from 'services/api';
import { AuthorName, TextReview, ReviewItem } from './Reviews.styled';
import { Box } from '../Box';

const Reviews = () => {
  const { movieId } = useParams();
  const [reviews, setReviews] = useState(null);

  useEffect(() => {
    getReviewsOfMovieById(movieId)
      .then(data => setReviews(data))
      .catch(error => toast.error(error.message));
  }, [movieId]);

  if (!reviews) return;

  return (
    <Box pb={4}>
      {reviews.length > 0 ? (
        <Box as="ul">
          {reviews.map(({ id, author, content }) => (
            <ReviewItem key={id}>
              <AuthorName>Author: {author}</AuthorName>
              <TextReview>{content}</TextReview>
            </ReviewItem>
          ))}
        </Box>
      ) : (
        <p>We don't have any reviews for this movie.</p>
      )}
    </Box>
  );
};

export default Reviews;
