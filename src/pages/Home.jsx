import { useState, useEffect } from 'react';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { getTrendingMoviesDay } from '../services/api';

const Home = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    getTrendingMoviesDay()
      .then(movies => setMovies(movies))
      .catch(error => toast.error(error.message));
  }, []);

  return (
    <main>
      <h2>Trending today</h2>
      {movies.length > 0 && (
        <ul>
          {movies.map(movie => (
            <li key={movie.id}>
              <a href="/">{movie.title}</a>
            </li>
          ))}
        </ul>
      )}
    </main>
  );
};

export default Home;
