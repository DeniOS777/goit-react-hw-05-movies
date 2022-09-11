import { useState, useEffect, Suspense } from 'react';
import { useParams, Link, Outlet, useLocation } from 'react-router-dom';
import { toast } from 'react-toastify';
import { getInfoOfMovieById } from 'services/api';
import { Box } from '../../components/Box';
import {
  StyledLink,
  Title,
  UserRate,
  Overview,
  Genres,
  ImageWrap,
  DescriptionMovie,
  CardMovie,
} from './MovieDetails.styled';

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
      <Box px={4}>
        <StyledLink to={backLinkHref}>Go back</StyledLink>

        <CardMovie>
          <ImageWrap>
            <img
              src={`https://image.tmdb.org/t/p/w342${movie.poster_path}`}
              alt="poster"
            />
          </ImageWrap>
          <DescriptionMovie>
            <Title>{`${movie.title} (${movie.release_date})`}</Title>
            <UserRate>
              <b>User score:</b> {userScorePersentage || '🤷‍♂️'}%
            </UserRate>
            <Overview>
              <b>Overview:</b> {movie.overview}
            </Overview>
            <Genres>
              <b>Genres:</b> {movie.genres[0].name}
            </Genres>
          </DescriptionMovie>
        </CardMovie>
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
      </Box>
    </main>
  );
};

export default MovieDetails;
