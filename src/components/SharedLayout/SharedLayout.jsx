import React from 'react';
import { Outlet } from 'react-router-dom';
import { Link } from './SharedLayout.styled';
import { Box } from '../Box';

const SharedLayout = () => {
  return (
    <>
      <Box as="header" borderBottom="1px solid black" mb={4} px={4} py={3}>
        <Box as="nav">
          <Box as="ul" display="flex" gridGap={4}>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/movies">Movies</Link>
            </li>
          </Box>
        </Box>
      </Box>
      <Outlet />
    </>
  );
};

export default SharedLayout;
