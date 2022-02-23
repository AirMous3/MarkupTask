import styled from "styled-components";
import lines from "../../assets/icons/bottomLines.svg";
import vector7 from "../../assets/images/Vector7.png";
import vector6 from "../../assets/images/Vector6.png";

export const MainWrapper = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const MainContent = styled.div`
  display: flex;
  flex-direction: column;
  color: #215ee9;
  margin-top: 100px;
`;

export const ContentTitle = styled.div`
  font-size: 14px;
  font-weight: 700;
  line-height: 24px;
`;

export const ContentOffer = styled.div`
  font-size: 65px;
  font-weight: 700;
  line-height: 101.8%;
  margin-top: 19px;
  margin-bottom: 30px;
  letter-spacing: -0.01em;
  width: 543px;
  height: 198px;
`;

export const ContentDescription = styled.div`
  font-size: 20px;
  line-height: 30px;
  font-weight: 400;
  width: 520px;
  height: 90px;
  opacity: 0.7;
  margin-bottom: 50px;
`;

export const ContentStats = styled.div`
  display: flex;
  justify-content: space-between;
  margin-right: -25px;
`;

export const StatNumber = styled.div`
  font-weight: bold;
  font-size: 56px;
  line-height: 66px;
  letter-spacing: -4px;
  color: ${(props) => props.color || "black"};
  margin-bottom: 13px;
`;

export const StatDescription = styled.div`
  color: black;
  width: 141px;
  height: 50px;
  font-size: 16px;
  line-height: 24px;
`;

export const SectionWrapper = styled.section`
  background-image: url(${lines});
  background-repeat: no-repeat no-repeat;
  background-position: bottom left;
`;
