import styled from 'styled-components';

export const ReviewItem = styled.li`
  &:not(:last-child) {
    margin-bottom: ${p => p.theme.space[4]}px;
  }
`;
export const AuthorName = styled.p`
  margin-bottom: ${p => p.theme.space[3]}px;
  font-weight: ${p => p.theme.fontWeights.middle};
  letter-spacing: 0.02em;
`;

export const TextReview = styled.p`
  letter-spacing: 0.02em;
`;
