import styled from 'styled-components';

export const BurgerWrap = styled.button`
  cursor: pointer;
  padding: 0;
  border: none;
  background: none;
`;

export const BurgerBar = styled.span`
  display: block;
  width: 28px;
  height: 4px;
  border-radius: 5px;
  background: #000;

  &:not(:last-child) {
    margin-bottom: 4px;
  }
`;
