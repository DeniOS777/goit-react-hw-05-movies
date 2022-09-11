import styled from 'styled-components';

export const Form = styled.form`
  display: inline-flex;
  grid-gap: 10px;
  margin-bottom: 15px;
  width: 400px;
`;

export const Input = styled.input`
  padding-left: 12px;
  padding-right: 12px;
  padding-top: 4px;
  padding-bottom: 4px;
  width: 100%;
  border: 2px solid #ccc;
  border-radius: 4px;
`;

export const SearchButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  padding-left: 12px;
  padding-right: 12px;
  font-weight: 500;
  color: #f15c27;
  border: 1px solid #f15c27;
  background-color: #fff;
  border-radius: 4px;
  transition: background-color 250ms ease-in-out, color 250ms ease-in-out;

  &:hover {
    background-color: #f15c27;
    color: #fff;
  }
`;
