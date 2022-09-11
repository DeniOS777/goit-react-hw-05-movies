import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const StyledLink = styled(Link)`
  display: inline-flex;
  margin-bottom: 8px;
  padding-left: 12px;
  padding-right: 12px;
  padding-top: 2px;
  padding-bottom: 2px;
  font-weight: 500;
  color: #f15c27;
  border: 1px solid #f15c27;
  border-top-right-radius: 4px;
  border-bottom-right-radius: 4px;
  border-top-left-radius: 16px;
  border-bottom-left-radius: 16px;
  text-decoration: none;
  transition: background-color 250ms ease-in-out, color 250ms ease-in-out;

  &:hover {
    color: #fff;
    background-color: #f15c27;
  }
`;

export const MovieTitle = styled.h2`
  margin-bottom: 15px;
  font-size: 20px;
  font-weight: 600;
`;

export const UserRate = styled.p`
  margin-bottom: 15px;
`;

export const Overview = styled.p`
  margin-bottom: 15px;
`;
