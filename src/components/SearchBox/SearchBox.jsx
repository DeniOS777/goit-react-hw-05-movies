import React from 'react';

const SearchBox = ({ onSubmit }) => {
  const handleSubmit = e => {
    e.preventDefault();
    const form = e.target;

    if (form.elements.search.value.trim() === '') {
      onSubmit(form.elements.search.value);
      return console.log('Search field is empty');
    }
    onSubmit(form.elements.search.value);
    form.reset();
  };

  return (
    <form autoComplete="off" onSubmit={handleSubmit}>
      <input type="text" name="search" />
      <button type="submit">Search</button>
    </form>
  );
};

export default SearchBox;
