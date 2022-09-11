import { useState, useEffect } from 'react';
import { useSearchParams, Link, useLocation } from 'react-router-dom';
import { toast } from 'react-toastify';
import { getMoviesBySearchQuery } from 'services/api';
import SearchBox from '../../components/SearchBox';
import { Box } from '../../components/Box';
import { StyledLink, MovieItem } from './Movies.styled';

const Movies = () => {
  const location = useLocation();
  const [movies, setMovies] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();
  const queryParam = searchParams.get('query') ?? '';

  const updateSearchQuery = query => {
    setSearchParams(query !== '' ? { query } : {});
  };

  useEffect(() => {
    if (!queryParam) return setMovies([]);

    getMoviesBySearchQuery(queryParam)
      .then(movies => setMovies(movies))
      .catch(error => toast.error(error.message));
  }, [queryParam]);

  console.log(movies);

  return (
    <main>
      <Box px={4}>
        <SearchBox onSubmit={updateSearchQuery} />

        {movies.length > 0 && (
          <Box as="ul">
            {movies.map(({ id, original_title, title }) => (
              <MovieItem key={id}>
                <StyledLink to={`/movies/${id}`} state={{ from: location }}>
                  {original_title || title}
                </StyledLink>
              </MovieItem>
            ))}
          </Box>
        )}
      </Box>
    </main>
  );
};

export default Movies;
