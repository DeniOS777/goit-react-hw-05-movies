import React from 'react';
import PropTypes from 'prop-types';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Form, Input, SearchButton } from './SearchBox.styled';

const SearchBox = ({ onSubmit }) => {
  const handleSubmit = e => {
    e.preventDefault();
    const form = e.target;

    if (form.elements.search.value.trim() === '') {
      onSubmit(form.elements.search.value);
      return toast.info('Search field is empty');
    }
    onSubmit(form.elements.search.value);
    form.reset();
  };

  return (
    <Form autoComplete="off" onSubmit={handleSubmit}>
      <Input type="text" name="search" placeholder="Enter name film..." />
      <SearchButton type="submit">Search</SearchButton>
    </Form>
  );
};

SearchBox.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

export default SearchBox;
