import styled from 'styled-components';
import notificationIcon from '@/assets/icons/notification.svg';

export const LoginWrapper = styled.div`
  display: flex;
  align-items: center;

  a {
    font-weight: ${(props) => props.theme.fontWeights.bold};
    font-size: ${(props) => props.theme.fontSizes[1]};
    line-height: ${(props) => props.theme.lineHeights[0]};
    color: ${(props) => props.theme.colors.secondary};
  }

  ${({ theme }) => theme.below.tablet`
    display: none;
`}
`;

export const NotificationIcon = styled.div`
  background-image: url(${notificationIcon});
  width: 20px;
  height: 20px;
  cursor: pointer;
  margin-left: 39px;

  ${({ theme }) => theme.between('laptop', 'laptopL')`
     margin: 0;
`}

  ${({ theme }) => theme.between('tablet', 'laptop')`
     margin: 0;
`}
`;
