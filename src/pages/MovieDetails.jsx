import { useState, useEffect } from 'react';
import { useParams, Link, Outlet } from 'react-router-dom';
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
      <img src={movie.poster_path} alt="poster" />
      <p style={{ marginBottom: '15px', fontSize: '20px', fontWeight: '600' }}>
        {movie.title}
      </p>
      <p style={{ marginBottom: '15px' }}>
        User score: {((movie.vote_average / 10) * 100).toFixed()}%
      </p>
      <p style={{ marginBottom: '15px' }}>Overview: {movie.overview}</p>
      <p style={{ marginBottom: '15px' }}>Genres: {movie.genres[0].name}</p>

      <div>
        <p>Additional information</p>
        <ul>
          <li>
            <Link to="cast">Cast</Link>
          </li>
          <li>
            <Link to="reviews">Reviews</Link>
          </li>
        </ul>
        <Outlet />
      </div>
    </main>
  );
};

export default MovieDetails;
