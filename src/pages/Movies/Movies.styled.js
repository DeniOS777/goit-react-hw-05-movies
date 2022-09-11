import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const StyledLink = styled(Link)`
  text-decoration: underline;
  color: #1f36ee;

  &:visited {
    color: #6927a8;
  }

  &:hover:not(.active),
  &:focus-visible:not(.active) {
    color: #f15c27;
  }
`;

export const MovieItem = styled.li`
  font-weight: 500;

  &:not(:last-child) {
    margin-bottom: 3px;
  }
`;
