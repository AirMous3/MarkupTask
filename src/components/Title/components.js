import styled from "styled-components";
import windIcon from "../../assets/icons/wind.svg";

export const TitleIcon = styled.div`
  background-image: url(${windIcon});
  width: 24px;
  height: 24px;
  border: none;
`;
export const TitleWrapper = styled.div`
  display: flex;
`;
export const TitleText = styled.div`
  margin-left: 13px;
  font-size: 16px;
  line-height: 24px;
  font-weight: bold;
`;
