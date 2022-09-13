import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Container = styled.div`
  padding-left: ${p => p.theme.space[4]}px;
  padding-right: ${p => p.theme.space[4]}px;

  *:last-child {
    margin-bottom: 0;
  }
`;

export const StyledLink = styled(Link)`
  display: inline-flex;
  margin-bottom: ${p => p.theme.space[3]}px;
  padding-left: ${p => p.theme.space[4]}px;
  padding-right: ${p => p.theme.space[4]}px;
  padding-top: ${p => p.theme.space[1]}px;
  padding-bottom: ${p => p.theme.space[1]}px;
  font-weight: ${p => p.theme.fontWeights.middle};
  color: ${p => p.theme.colors.orange};
  border: ${p => p.theme.borders.normal} ${p => p.theme.colors.orange};
  border-top-right-radius: ${p => p.theme.space[2]}px;
  border-bottom-right-radius: ${p => p.theme.space[2]}px;
  border-top-left-radius: 16px;
  border-bottom-left-radius: 16px;
  text-decoration: none;
  transition: background-color 250ms ease-in-out, color 250ms ease-in-out;

  &:hover {
    color: ${p => p.theme.colors.white};
    background-color: ${p => p.theme.colors.orange};
  }
`;

export const MyLink = styled(Link)`
  text-decoration: underline;
  color: ${p => p.theme.colors.blue};

  &:visited {
    color: ${p => p.theme.colors.violet};
  }

  &:hover:not(.active),
  &:focus-visible:not(.active) {
    color: ${p => p.theme.colors.orange};
  }
`;

export const Item = styled.li`
  font-weight: ${p => p.theme.fontWeights.middle};

  &:not(:last-child) {
    margin-bottom: ${p => p.theme.space[2]}px;
  }
`;

export const Title = styled.h2`
  margin-bottom: ${p => p.theme.space[5]}px;
  font-size: ${p => p.theme.fontSizes.l};
  font-weight: ${p => p.theme.fontWeights.middle};
`;

export const TitleUserRate = styled.p`
  font-size: ${p => p.theme.fontSizes.m};
  font-weight: ${p => p.theme.fontWeights.bold};
  letter-spacing: 0.02em;
  margin-bottom: ${p => p.theme.space[5]}px;
`;

export const TitleOverview = styled.h3`
  font-size: ${p => p.theme.fontSizes.m};
  font-weight: ${p => p.theme.fontWeights.bold};
  letter-spacing: 0.02em;
  margin-bottom: ${p => p.theme.space[4]}px;
`;

export const TextOverview = styled.p`
  margin-bottom: ${p => p.theme.space[4]}px;
`;

export const TitleGenres = styled.h3`
  font-size: ${p => p.theme.fontSizes.m};
  font-weight: ${p => p.theme.fontWeights.bold};
  letter-spacing: 0.02em;

  margin-bottom: ${p => p.theme.space[4]}px;
`;

export const TextGenres = styled.p`
  letter-spacing: 0.02em;
`;

export const ImageWrap = styled.div`
  border-radius: ${p => p.theme.radii.md};
  box-shadow: 0px 10px 13px -7px #000000, 5px 5px 15px 5px rgba(0, 0, 0, 0);
  overflow: hidden;
`;

export const DescriptionMovie = styled.div`
  padding-top: ${p => p.theme.space[4]}px;
  padding-bottom: ${p => p.theme.space[4]}px;
`;

export const CardMovie = styled.div`
  display: grid;
  grid-template-columns: 320px 1fr;
  grid-gap: ${p => p.theme.space[4]}px;
  margin-bottom: ${p => p.theme.space[4]}px;
`;

export const Text = styled.p`
  margin-bottom: ${p => p.theme.space[4]}px;
`;

export const WrappInfo = styled.div`
  margin-bottom: ${p => p.theme.space[4]}px;
  padding-top: ${p => p.theme.space[4]}px;
  padding-bottom: ${p => p.theme.space[4]}px;
  border-top: ${p => p.theme.borders.middle} ${p => p.theme.colors.grey};
  border-bottom: ${p => p.theme.borders.middle} ${p => p.theme.colors.grey};
`;
