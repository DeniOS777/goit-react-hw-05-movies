import { useState, useEffect, Suspense } from 'react';
import { useParams, Outlet, useLocation } from 'react-router-dom';
import { toast } from 'react-toastify';
import { getInfoOfMovieById } from 'services/api';
import { Box } from '../../components/Box';
import {
  StyledLink,
  MyLink,
  Item,
  Title,
  UserRate,
  Overview,
  Genres,
  ImageWrap,
  DescriptionMovie,
  CardMovie,
  Text,
  WrappInfo,
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
  const { vote_average, poster_path, title, release_date, overview, genres } =
    movie;

  const backLinkHref = location.state?.from ?? '/';
  const userScorePersentage = Number(((vote_average / 10) * 100).toFixed());
  const releaseDate = release_date.slice(0, 4);
  const parseGenres = genres.map(genre => genre.name).join(', ');

  return (
    <main>
      <Box px={4}>
        <StyledLink to={backLinkHref}>Go back</StyledLink>

        <CardMovie>
          <ImageWrap>
            <img
              src={`https://image.tmdb.org/t/p/w342${poster_path}`}
              alt="poster"
            />
          </ImageWrap>
          <DescriptionMovie>
            <Title>{`${title} (${releaseDate})`}</Title>
            <UserRate>
              <b>User score:</b> {userScorePersentage || '🤷‍♂️'}%
            </UserRate>
            <Overview>
              <b>Overview:</b> {overview}
            </Overview>
            <Genres>
              <b>Genres:</b> {parseGenres}
            </Genres>
          </DescriptionMovie>
        </CardMovie>

        <WrappInfo>
          <Text>Additional information</Text>
          <Box as="ul" pl={4}>
            <Item>
              <MyLink to="cast" state={{ from: location.state?.from ?? '/' }}>
                Cast
              </MyLink>
            </Item>
            <Item>
              <MyLink
                to="reviews"
                state={{ from: location.state?.from ?? '/' }}
              >
                Reviews
              </MyLink>
            </Item>
          </Box>
        </WrappInfo>
        <Suspense fallback={null}>
          <Outlet />
        </Suspense>
      </Box>
    </main>
  );
};

export default MovieDetails;
