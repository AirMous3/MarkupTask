import styled from "styled-components";
import {
  DESKTOP,
  MOBILE,
  MOBILE_SMALL,
  TABLET,
} from "../../constants/Variables";
import heroImage from "../../assets/images/Hero Image.png";
import vector6 from "../../assets/images/Vector6.png";
import vector7 from "../../assets/images/Vector7.png";

export const MainWrapper = styled.div`
  display: flex;
  justify-content: space-between;

  @media ${MOBILE} {
    flex-direction: column-reverse;
    align-items: center;
  }
`;

export const MainContent = styled.div`
  display: flex;
  flex-direction: column;
  color: ${(props) => props.theme.colors.primary};

  @media ${DESKTOP} {
    margin-top: 52px;
  }

  @media ${TABLET} {
    max-width: 399px;
    padding-left: 30px;
  }

  @media ${MOBILE} {
    padding-right: 10px;
  }
  @media ${MOBILE_SMALL} {
    padding-left: 40px;
    padding-right: 10px;
  }
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
  max-width: 543px;

  span {
    position: relative;

    &::after {
      content: "";
      position: absolute;
      bottom: 0;
      left: 0;
      width: 220px;
      height: 26px;
      background: #bed2ff;
      filter: blur(44px);
      z-index: -1;
    }
  }

  @media ${TABLET} {
    font-size: 34px;
  }
  @media ${MOBILE} {
    max-width: 553px;
  }

  @media ${MOBILE_SMALL} {
    font-size: 48px;
  }
`;

export const ContentDescription = styled.div`
  font-size: 20px;
  line-height: 30px;
  max-width: 520px;
  opacity: 0.7;
  margin-bottom: 53px;

  @media ${TABLET} {
    font-size: 18px;
  }
  @media ${MOBILE} {
    margin-bottom: 48px;
  }
`;

export const ContentStats = styled.div`
  display: flex;
  justify-content: space-between;
  margin-right: -25px;

  @media ${MOBILE} {
    display: none;
  }
`;

export const StatNumber = styled.div`
  font-weight: bold;
  font-size: 56px;
  line-height: 66px;
  letter-spacing: -4px;
  color: ${(props) => props.color || "black"};
  margin-bottom: 13px;

  @media ${TABLET} {
    font-size: 34px;
  }
`;

export const StatDescription = styled.div`
  color: black;
  width: 141px;
  height: 50px;
  font-size: 16px;
  line-height: 24px;

  @media ${TABLET} {
    font-size: 14px;
  }
`;

export const SectionWrapper = styled.section`
  padding-top: 46px;
  padding-bottom: 50px;

  @media ${MOBILE} {
    padding-top: 60px;
  }
`;

export const MainImages = styled.div`
  flex: 1;
  height: 901px;
  background: url("${heroImage}") 89px -32px, url("${vector6}") 285px 9px,
    url("${vector7}") 104px 127%;
  background-size: auto;
  background-repeat: no-repeat;

  @media ${TABLET} {
    max-width: 501px;
    height: 601px;
    background-size: cover;
  }

  @media ${MOBILE} {
    flex: initial;
    width: 100%;
    height: 892px;
    background-position: center;
  }

  @media ${MOBILE_SMALL} {
    height: 750px;
    background-size: cover;
  }
`;
