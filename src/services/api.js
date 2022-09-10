const API_KEY = 'fac524451816d908f081cf899bfc32e2';
const BASE_URL = 'https://api.themoviedb.org/3';

export const getTrendingMoviesDay = async () => {
  const response = await fetch(
    `${BASE_URL}/trending/movie/day?api_key=${API_KEY}`
  );

  if (response.ok) {
    const data = await response.json();
    return data.results;
  }
  return Promise.reject(
    new Error(`Server responsed with status code: ${response.status}`)
  );
};

export const getInfoOfMovieById = async movieId => {
  const response = await fetch(
    `${BASE_URL}/movie/${movieId}?api_key=${API_KEY}`
  );

  if (response.ok) {
    const data = await response.json();
    return data;
  }
  return Promise.reject(
    new Error(`Server responsed with status code: ${response.status}`)
  );
};

export const getCreditsOfMovieById = async movieId => {
  const response = await fetch(
    `${BASE_URL}/movie/${movieId}/credits?api_key=${API_KEY}`
  );

  if (response.ok) {
    const data = await response.json();
    return data.cast;
  }
  return Promise.reject(
    new Error(`Server responsed with status code: ${response.status}`)
  );
};
