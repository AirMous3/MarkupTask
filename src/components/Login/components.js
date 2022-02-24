import styled from "styled-components";
import notificationIcon from "../../assets/icons/notification.svg";
import { HD, MOBILE, TABLET } from "../../constants/Variables";

export const LoginWrapper = styled.div`
  display: flex;
  align-items: center;

  a {
    font-weight: bold;
    font-size: 16px;
    line-height: 19px;
    color: ${(props) => props.theme.colors.secondary};
  }

  @media ${MOBILE} {
    display: none;
  }
`;

export const NotificationIcon = styled.div`
  background-image: url(${notificationIcon});
  width: 20px;
  height: 20px;
  cursor: pointer;
  margin-right: -39px;
  margin-left: 39px;

  @media ${HD} {
    margin: 0;
  }
  @media ${TABLET} {
    margin: 0;
  }
`;
