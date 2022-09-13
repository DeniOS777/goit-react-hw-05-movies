import styled from 'styled-components';

export const ReviewItem = styled.li`
  padding-left: ${p => p.theme.space[5]}px;
  padding-right: ${p => p.theme.space[4]}px;
  padding-top: ${p => p.theme.space[4]}px;
  padding-bottom: ${p => p.theme.space[4]}px;
  border-left: ${p => p.theme.borders.large} ${p => p.theme.colors.grey};
  border-radius: ${p => p.theme.radii.md};
  box-shadow: 0px 1px 3px rgba(0, 0, 0, 0.12), 0px 1px 1px rgba(0, 0, 0, 0.14),
    0px 2px 1px rgba(0, 0, 0, 0.2);

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
