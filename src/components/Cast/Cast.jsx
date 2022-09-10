import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import { getCreditsOfMovieById } from 'services/api';
import dummyImage from './dummyUser.jpg';
// import {Box} from '../Box'

const Cast = () => {
  const { movieId } = useParams();
  const [credits, setCredits] = useState(null);

  useEffect(() => {
    getCreditsOfMovieById(movieId)
      .then(data => setCredits(data))
      .catch(error => toast.error(error.message));
  }, [movieId]);

  if (!credits) return;

  console.log(credits);

  return (
    <div>
      {credits.length > 0 && (
        <ul>
          {credits.map(({ id, profile_path, original_name, character }) => (
            <li key={id}>
              <img
                src={
                  profile_path
                    ? `https://image.tmdb.org/t/p/w154${profile_path}`
                    : dummyImage
                }
                alt="the actor"
              />
              <p>{original_name}</p>
              <p>Character: {character}</p>
            </li>
          ))}
        </ul>
      )}
      <img src={dummyImage} alt="dummy" />
    </div>
  );
};

export default Cast;
