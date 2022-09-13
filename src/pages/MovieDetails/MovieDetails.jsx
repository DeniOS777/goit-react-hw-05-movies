import { useState, useEffect, Suspense } from 'react';
import { useParams, Outlet, useLocation } from 'react-router-dom';
import { toast } from 'react-toastify';
import { BiArrowBack } from 'react-icons/bi';
import { getInfoOfMovieById } from 'services/api';
import dummyPoster from './dummyPoster.jpg';
import { Box } from '../../components/Box';
import Loader from '../../components/Loader';
import {
  StyledLink,
  Container,
  MyLink,
  Item,
  Title,
  TitleUserRate,
  TitleOverview,
  TextOverview,
  TitleGenres,
  TextGenres,
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
      <Container>
        <StyledLink to={backLinkHref}>
          <BiArrowBack />
          Go back
        </StyledLink>

        <CardMovie>
          <ImageWrap>
            <img
              src={
                poster_path
                  ? `https://image.tmdb.org/t/p/w342${poster_path}`
                  : dummyPoster
              }
              alt={title}
            />
          </ImageWrap>
          <DescriptionMovie>
            <Title>{`${title} (${releaseDate})`}</Title>
            <TitleUserRate>
              User Score: {userScorePersentage || '🤷‍♂️'}%
            </TitleUserRate>
            <TitleOverview>Overview:</TitleOverview>
            <TextOverview>{overview}</TextOverview>
            <TitleGenres>Genres: </TitleGenres>
            <TextGenres>{parseGenres}</TextGenres>
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
        <Suspense fallback={<Loader />}>
          <Outlet />
        </Suspense>
      </Container>
    </main>
  );
};

export default MovieDetails;
