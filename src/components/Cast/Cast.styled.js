import styled from 'styled-components';

export const CardActor = styled.li`
  box-shadow: 0px 1px 3px rgba(0, 0, 0, 0.12), 0px 1px 1px rgba(0, 0, 0, 0.14),
    0px 2px 1px rgba(0, 0, 0, 0.2);
  border-radius: 4px;
  overflow: hidden;

  & img {
    transition: transform 250ms ease-in-out;
  }

  &:hover img {
    transform: scale(1.1);
  }
`;

export const ActorName = styled.p`
  margin-bottom: 4px;
  font-size: 14px;
  font-weight: 700;
`;

export const ActorRole = styled.p`
  font-size: 14px;
`;

export const WrappInfo = styled.div`
  padding: 4px;
  text-align: center;
`;

export const WrappImage = styled.div`
  overflow: hidden;
`;
