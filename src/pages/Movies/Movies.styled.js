import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Container = styled.div`
  padding-left: 16px;
  padding-right: 16px;

  *:last-child {
    margin-bottom: 0;
  }
`;

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
