import styled from 'styled-components';

export const Button = styled.button`
  font-weight: ${(props) => props.theme.fontWeights.bold};
  font-size: ${(props) => props.theme.fontSizes[1]};
  line-height: ${(props) => props.theme.lineHeights[0]};

  border: none;
  background: ${(props) => props.theme.colors.primary};
  color: white;
  padding: 17px 42px 16px 43px;
  box-shadow: ${(props) => props.theme.boxShadows[1]};
  border-radius: 40px;
  cursor: pointer;
  white-space: nowrap;
`;
export const Container = styled.div`
  max-width: 1372px;
  margin-left: auto;
  margin-right: auto;
`;
