import { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { toast } from 'react-toastify';
import { getInfoOfMovieById } from 'services/api';

const MovieDetails = () => {
  const { movieId } = useParams();
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    getInfoOfMovieById(movieId)
      .then(movie => setMovie(movie))
      .catch(error => toast.error(error.message));
  }, [movieId]);

  if (!movie) return;

  console.log(movie);

  return (
    <main>
      <Link to="/">Go back</Link>
      <p>{movie.overview}</p>
    </main>
  );
};

export default MovieDetails;
