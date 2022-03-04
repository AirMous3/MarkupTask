import styled from 'styled-components';
import heroImage from '@/assets/images/Hero Image.png';
import vector6 from '@/assets/images/Vector6.png';
import vector7 from '@/assets/images/Vector7.png';
import vector8 from '@/assets/images/Vector8.png';
import {
  DESKTOP, MOBILE, MOBILE_SMALL, TABLET,
} from '@/constants/Variables';

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
    margin-top: 100px;
  }

  @media ${TABLET} {
    max-width: 399px;
    margin-top: 40px;
    padding-left: 30px;
  }

  @media ${MOBILE} {
    padding-right: 10px;
  }
  @media ${MOBILE_SMALL} {
    padding-left: 40px;
    padding-right: 40px;
  }
`;

export const ContentTitle = styled.div`
  font-size: 14px;
  font-weight: 700;
  line-height: 24px;
`;

export const ContentOffer = styled.h2`
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
      content: '';
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
    margin-bottom: 51px;
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

export const SectionWrapper = styled.section`
  padding-bottom: 50px;

  @media ${MOBILE} {
    padding-top: 60px;
  }
`;

export const MainImages = styled.div`
  flex: 1;
  height: 998px;
  background-image: url('${heroImage}'), url('${vector6}'), url('${vector7}');
  background-position: 92px 13px, 287px 56px, 104px 284px;
  background-size: auto;
  background-repeat: no-repeat;
  filter: drop-shadow(50px -56px 104px rgba(28, 91, 235, 0.05));

  @media ${DESKTOP} {
    margin-right: -76px;
  }

  @media ${TABLET} {
    max-width: 501px;
    height: 601px;
    background-size: cover, 284px, 422px;
    background-position: 0 0px, 120px 21px, -3px 188px;
  }

  @media ${MOBILE} {
    flex: initial;
    width: 100%;
    height: 890px;
    background-image: url('${heroImage}'), url('${vector6}'), url('${vector8}');
    background-position: center, center, -34px 33px;
    background-size: auto, auto, 669px 860px;
  }

  @media (min-width: 643px) and (max-width: 768px) {
    background-image: url('${heroImage}'), url('${vector6}'), url('${vector7}');
    background-position: 92px 13px, 287px 56px, 104px 284px;
    background-size: auto;
    background-repeat: no-repeat;
  }

  @media ${MOBILE_SMALL} {
    height: 750px;
    background-size: cover;
  }
`;
