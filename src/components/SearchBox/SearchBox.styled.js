import styled from 'styled-components';

export const Form = styled.form`
  display: inline-flex;
  grid-gap: ${p => p.theme.space[3]}px;
  margin-bottom: ${p => p.theme.space[4]}px;
  width: 400px;
`;

export const Input = styled.input`
  padding-left: ${p => p.theme.space[4]}px;
  padding-right: ${p => p.theme.space[4]}px;
  padding-top: ${p => p.theme.space[2]}px;
  padding-bottom: ${p => p.theme.space[2]}px;
  width: 100%;
  border: ${p => p.theme.borders.middle} ${p => p.theme.colors.grey};
  border-radius: ${p => p.theme.radii.sm};

  &:focus {
    outline: none;
    border: ${p => p.theme.borders.middle} ${p => p.theme.colors.lightBlue};
  }
`;

export const SearchButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  padding-left: ${p => p.theme.space[4]}px;
  padding-right: ${p => p.theme.space[4]}px;
  font-weight: ${p => p.theme.fontWeights.middle};
  color: ${p => p.theme.colors.orange};
  border: ${p => p.theme.borders.normal} ${p => p.theme.colors.orange};
  background-color: ${p => p.theme.colors.white};
  border-radius: ${p => p.theme.radii.sm};
  transition: background-color 250ms ease-in-out, color 250ms ease-in-out;

  &:hover {
    background-color: ${p => p.theme.colors.orange};
    color: ${p => p.theme.colors.white};
  }
`;
