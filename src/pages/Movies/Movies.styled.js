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

export const MovieItem = styled.li`
  font-weight: ${p => p.theme.fontWeights.middle};

  &:not(:last-child) {
    margin-bottom: ${p => p.theme.space[2]}px;
  }
`;
