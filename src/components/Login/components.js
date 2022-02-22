import styled from "styled-components";
import notificationIcon from "../../assets/icons/notification.svg";

export const LoginWrapper = styled.div`
  display: flex;
  align-items: center;

  a {
    color: #7d8790;
    font-weight: bold;
    font-size: 16px;
    line-height: 19px;
  }
`;
export const RegisterButton = styled.button`
  font-weight: 700;
  font-size: 16px;
  line-height: 19px;
  margin-left: 40px;
  margin-right: 60px;
  border: none;
  background: #215ee9;
  color: white;
  width: 146px;
  height: 52px;
  box-shadow: 0px 100px 161px rgba(33, 94, 233, 0.08),
    0px 64.8148px 94.2894px rgba(33, 94, 233, 0.0607407),
    0px 38.5185px 51.2815px rgba(33, 94, 233, 0.0485926),
    0px 20px 26.1625px rgba(33, 94, 233, 0.04),
    0px 8.14815px 13.1185px rgba(33, 94, 233, 0.0314074),
    0px 1.85185px 6.33565px rgba(33, 94, 233, 0.0192593);
  border-radius: 40px;
  cursor: pointer;
`;

export const NotificationIcon = styled.div`
  background-image: url(${notificationIcon});
  width: 22px;
  height: 22px;
  cursor: pointer;
`;
