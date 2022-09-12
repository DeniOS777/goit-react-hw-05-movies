import { useState, useEffect } from 'react';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { getTrendingMoviesDay } from '../../services/api';
import { Box } from '../../components/Box';
import { HomeTitle, MovieItem, StyledLink } from './Home.styled';

const Home = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    getTrendingMoviesDay()
      .then(movies => setMovies(movies))
      .catch(error => toast.error(error.message));
  }, []);

  return (
    <main>
      <Box px={4}>
        <HomeTitle>Trending today</HomeTitle>
        {movies.length > 0 && (
          <Box as="ul" pl={3}>
            {movies.map(({ id, title, original_title }) => (
              <MovieItem key={id}>
                <StyledLink to={`/movies/${id}`}>
                  {title || original_title}
                </StyledLink>
              </MovieItem>
            ))}
          </Box>
        )}
      </Box>
    </main>
  );
};

export default Home;
