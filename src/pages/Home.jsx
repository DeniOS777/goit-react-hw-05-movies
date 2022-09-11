import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
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
      <h1 style={{ marginBottom: '20px', fontSize: '30px' }}>Trending today</h1>
      {movies.length > 0 && (
        <ul>
          {movies.map(({ id, title, original_title }) => (
            <li key={id}>
              <Link to={`/movies/${id}`}>{title || original_title}</Link>
            </li>
          ))}
        </ul>
      )}
    </main>
  );
};

export default Home;
