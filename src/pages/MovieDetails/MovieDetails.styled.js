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

export const MyLink = styled(Link)`
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

export const Item = styled.li`
  font-weight: 500;

  &:not(:last-child) {
    margin-bottom: 3px;
  }
`;

export const Title = styled.h2`
  margin-bottom: 35px;
  font-size: 28px;
  font-weight: 600;
`;

export const TitleUserRate = styled.p`
  font-size: 18px;
  font-weight: 700;
  letter-spacing: 0.02em;
  margin-bottom: 25px;
`;

export const TitleOverview = styled.h3`
  font-size: 18px;
  font-weight: 700;
  letter-spacing: 0.02em;
  margin-bottom: 15px;
`;

export const TextOverview = styled.p`
  margin-bottom: 15px;
`;

export const TitleGenres = styled.h3`
  font-size: 18px;
  font-weight: 700;
  letter-spacing: 0.02em;

  margin-bottom: 15px;
`;

export const TextGenres = styled.p`
  letter-spacing: 0.02em;
`;

export const ImageWrap = styled.div`
  border-radius: 6px;
  overflow: hidden;
`;

export const DescriptionMovie = styled.div`
  padding-top: 20px;
  padding-bottom: 20px;
`;

export const CardMovie = styled.div`
  display: grid;
  grid-template-columns: 320px 1fr;
  grid-gap: 20px;
  margin-bottom: 20px;
`;

export const Text = styled.p`
  margin-bottom: 15px;
`;

export const WrappInfo = styled.div`
  margin-bottom: 15px;
  padding-top: 15px;
  padding-bottom: 15px;
  border-top: 2px solid #ccc;
  border-bottom: 2px solid #ccc;
`;
