import React from 'react';

const Movies = () => {
  return (
    <main>
      <form autoComplete="off">
        <input type="text" name="search" />
        <button type="submit">Search</button>
      </form>
    </main>
  );
};

export default Movies;
