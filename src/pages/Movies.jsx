import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import { getMoviesBySearchQuery } from 'services/api';
import SearchBox from '../components/SearchBox';

const Movies = () => {
  const [movies, setMovies] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();
  const queryParam = searchParams.get('query') ?? '';

  const updateSearchQuery = query => {
    setSearchParams(query !== '' ? { query } : {});
  };

  useEffect(() => {
    if (!queryParam) return;

    getMoviesBySearchQuery(queryParam)
      .then(movies => setMovies(movies))
      .catch(error => toast.error(error.message));
  }, [queryParam]);

  console.log(movies);

  return (
    <main>
      <SearchBox onSubmit={updateSearchQuery} />
    </main>
  );
};

export default Movies;
