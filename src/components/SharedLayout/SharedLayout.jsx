import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { Link } from './SharedLayout.styled';
import Loader from '../Loader';
import { Box } from '../Box';

const SharedLayout = () => {
  return (
    <>
      <Box
        as="header"
        boxShadow="0px 10px 13px -7px #000000, 5px 5px 15px 5px rgba(0,0,0,0)"
        mb={5}
        px={4}
        py={3}
      >
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
      <Suspense fallback={<Loader />}>
        <Outlet />
      </Suspense>
    </>
  );
};

export default SharedLayout;
