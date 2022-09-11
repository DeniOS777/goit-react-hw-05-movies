import { useState, useEffect, Suspense } from 'react';
import { useParams, Link, Outlet, useLocation } from 'react-router-dom';
import { toast } from 'react-toastify';
import { getInfoOfMovieById } from 'services/api';
import { Box } from '../components/Box';

const MovieDetails = () => {
  const location = useLocation();
  const { movieId } = useParams();
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    getInfoOfMovieById(movieId)
      .then(movie => setMovie(movie))
      .catch(error => toast.error(error.message));
  }, [movieId]);

  if (!movie) return;

  console.log(movie);

  const backLinkHref = location.state?.from ?? '/';

  const userScorePersentage = Number(
    ((movie.vote_average / 10) * 100).toFixed()
  );

  return (
    <main>
      <Link to={backLinkHref}>Go back</Link>
      <img
        src={`https://image.tmdb.org/t/p/w300${movie.poster_path}`}
        alt="poster"
      />
      <p style={{ marginBottom: '15px', fontSize: '20px', fontWeight: '600' }}>
        {`${movie.title} (${movie.release_date})`}
      </p>
      <p style={{ marginBottom: '15px' }}>
        User score: {userScorePersentage || '🤷‍♂️'}%
      </p>
      <p style={{ marginBottom: '15px' }}>Overview: {movie.overview}</p>
      <p style={{ marginBottom: '15px' }}>Genres: {movie.genres[0].name}</p>

      <div>
        <p>Additional information</p>
        <Box as="ul">
          <li>
            <Link to="cast" state={{ from: location.state?.from ?? '/' }}>
              Cast
            </Link>
          </li>
          <li>
            <Link to="reviews" state={{ from: location.state?.from ?? '/' }}>
              Reviews
            </Link>
          </li>
        </Box>
        <Suspense fallback={null}>
          <Outlet />
        </Suspense>
      </div>
    </main>
  );
};

export default MovieDetails;
