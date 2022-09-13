import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import { getCreditsOfMovieById } from 'services/api';
import dummyImage from './dummyProfile.jpg';
import { Box } from '../Box';
import {
  CardActor,
  ActorName,
  ActorRole,
  WrappInfo,
  WrappImage,
} from './Cast.styled';

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
    <Box as="section" pb={4}>
      {credits.length > 0 && (
        <Box
          as="ul"
          display="grid"
          gridGap="15px"
          gridTemplateColumns="repeat(auto-fill, minmax(150px ,1fr))"
        >
          {credits.map(({ credit_id, profile_path, name, character }) => (
            <CardActor key={credit_id}>
              <WrappImage>
                <img
                  src={
                    profile_path
                      ? `https://image.tmdb.org/t/p/w185${profile_path}`
                      : dummyImage
                  }
                  alt={name}
                />
              </WrappImage>
              <WrappInfo>
                <ActorName>{name}</ActorName>
                <ActorRole>Character: {character}</ActorRole>
              </WrappInfo>
            </CardActor>
          ))}
        </Box>
      )}
    </Box>
  );
};

export default Cast;
