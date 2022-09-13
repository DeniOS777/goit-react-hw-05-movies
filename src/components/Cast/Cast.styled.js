import styled from 'styled-components';

export const CardActor = styled.li`
  box-shadow: 0px 1px 3px rgba(0, 0, 0, 0.12), 0px 1px 1px rgba(0, 0, 0, 0.14),
    0px 2px 1px rgba(0, 0, 0, 0.2);
  border-radius: ${p => p.theme.radii.sm};
  overflow: hidden;

  & img {
    transition: transform 250ms ease-in-out;
  }

  &:hover img {
    transform: scale(1.1);
  }
`;

export const ActorName = styled.p`
  margin-bottom: ${p => p.theme.space[2]}px;
  font-size: ${p => p.theme.fontSizes.s};
  font-weight: ${p => p.theme.fontWeights.bold};
`;

export const ActorRole = styled.p`
  font-size: ${p => p.theme.fontSizes.s};
`;

export const WrappInfo = styled.div`
  padding: ${p => p.theme.space[2]}px;
  text-align: center;
`;

export const WrappImage = styled.div`
  overflow: hidden;
`;
