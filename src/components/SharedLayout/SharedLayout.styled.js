import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const Link = styled(NavLink)`
  display: inline-flex;
  padding-top: ${p => p.theme.space[3]}px;
  padding-bottom: ${p => p.theme.space[3]}px;
  padding-left: ${p => p.theme.space[4]}px;
  padding-right: ${p => p.theme.space[4]}px;
  text-decoration: none;
  font-weight: ${p => p.theme.fontWeights.middle};
  color: ${p => p.theme.colors.black};
  border-radius: ${p => p.theme.radii.sm};

  &.active {
    font-weight: ${p => p.theme.fontWeights.extraBold};
    color: ${p => p.theme.colors.white};
    background-color: ${p => p.theme.colors.orange};
  }

  &:hover:not(.active),
  &:focus-visible:not(.active) {
    color: ${p => p.theme.colors.orange};
  }
`;
