import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import { getCreditsOfMovieById } from 'services/api';
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
          {credits.map(item => (
            <li key={item.id}>
              <img src={item.profile_path} alt="the actor " />
              <p>{item.original_name}</p>
              <p>Character: {item.character}</p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Cast;
