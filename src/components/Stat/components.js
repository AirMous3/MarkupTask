import styled from 'styled-components';

export const StatNumber = styled.div`
  font-weight: ${(props) => props.theme.fontWeights.bold};
  font-size: ${(props) => props.theme.fontSizes[3]};
  line-height: ${(props) => props.theme.lineHeights[4]};
  letter-spacing: -4px;
  color: black;
  margin-bottom: 13px;

  ${({ theme }) => theme.between('tablet', 'laptop')`
     font-size: 34px;
`}
`;
export const StatNumberAccent = styled(StatNumber)`
  color: ${(props) => props.theme.colors.primary};
`;

export const StatDescription = styled.div`
  color: black;
  width: 141px;
  height: 50px;
  font-size: ${(props) => props.theme.fontSizes[1]};
  line-height: ${(props) => props.theme.lineHeights[2]};

  ${({ theme }) => theme.between('tablet', 'laptop')`
     font-size: 14px;
`}
`;
