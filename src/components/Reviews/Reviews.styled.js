import styled from 'styled-components';

export const ReviewItem = styled.li`
  &:not(:last-child) {
    margin-bottom: 20px;
  }
`;
export const AuthorName = styled.p`
  margin-bottom: 10px;
  font-weight: 600;
  letter-spacing: 0.02em;
`;

export const TextReview = styled.p`
  letter-spacing: 0.02em;
`;
