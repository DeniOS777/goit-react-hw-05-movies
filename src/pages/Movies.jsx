import { useState, useEffect } from 'react';
import { useSearchParams, Link, useLocation } from 'react-router-dom';
import { toast } from 'react-toastify';
import { getMoviesBySearchQuery } from 'services/api';
import SearchBox from '../components/SearchBox';

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
  console.log(location);

  return (
    <main>
      <SearchBox onSubmit={updateSearchQuery} />
      {movies.length > 0 && (
        <ul>
          {movies.map(({ id, original_title, title }) => (
            <li key={id}>
              <Link to={`/movies/${id}`} state={{ from: location }}>
                {original_title || title}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </main>
  );
};

export default Movies;
