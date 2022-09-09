import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const Link = styled(NavLink)`
  display: inline-flex;
  padding: 8px 12px;
  text-decoration: none;
  font-weight: 500;
  color: #000000;
  border-radius: 4px;

  &.active {
    font-weight: 700;
    color: #ffffff;
    background-color: #f15c27;
  }

  &:hover:not(.active),
  &:focus-visible:not(.active) {
    color: #f15c27;
  }
`;
