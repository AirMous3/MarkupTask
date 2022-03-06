import styled from 'styled-components';
import heroImage from '@/assets/images/Hero Image.png';
import vector6 from '@/assets/images/Vector6.png';
import vector7 from '@/assets/images/Vector7.png';
import heroImageM from '@/assets/images/mobile/Hero ImageM.png';
import vector8 from '@/assets/images/mobile/Vector8.png';

export const MainWrapper = styled.div`
  display: flex;
  justify-content: space-between;

  ${({ theme }) => theme.below.tablet`
    flex-direction: column-reverse;
      align-items: center;
`}
`;

export const MainContent = styled.div`
  display: flex;
  flex-direction: column;
  color: ${(props) => props.theme.colors.primary};

  ${({ theme }) => theme.above.laptop`
    margin-top: 100px;
`}

  ${({ theme }) => theme.between('tablet', 'laptop')`
      max-width: 399px;
      margin-top: 40px;
      padding-left: 30px;
`}

  ${({ theme }) => theme.below.tablet`
     padding-right: 10px;
`}


  ${({ theme }) => theme.below.mobileM`
      padding-left: 40px;
      padding-right: 40px;
`}
`;

export const ContentTitle = styled.div`
  font-size: ${(props) => props.theme.fontSizes[0]};
  font-weight: ${(props) => props.theme.fontWeights.bold};
  line-height: ${(props) => props.theme.lineHeights[2]};
`;

export const ContentOffer = styled.h2`
  font-size: ${(props) => props.theme.fontSizes[4]};
  font-weight: ${(props) => props.theme.fontWeights.bold};
  line-height: ${(props) => props.theme.lineHeights[4]};
  margin-top: 15px;
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

  ${({ theme }) => theme.between('tablet', 'laptop')`
   font-size: 50px;
`}

  ${({ theme }) => theme.below.tablet`
    max-width: 553px;
`}
  ${({ theme }) => theme.below.mobileL`
    margin-top: 17px;
    margin-bottom: 31px;
`}
  ${({ theme }) => theme.below.mobileM`
    font-size: 48px;
`}
`;

export const ContentDescription = styled.div`
  font-size: ${(props) => props.theme.fontSizes[2]};
  line-height: ${(props) => props.theme.lineHeights[3]};
  max-width: 520px;
  opacity: 0.7;
  margin-bottom: 53px;

  ${({ theme }) => theme.between('tablet', 'laptop')`
   font-size: 18px;
`}

  ${({ theme }) => theme.below.tablet`
     margin-bottom: 51px;
`}
`;

export const ContentStats = styled.div`
  display: flex;
  justify-content: space-between;
  margin-right: -25px;

  ${({ theme }) => theme.below.tablet`
      display: none;
`}
`;

export const SectionWrapper = styled.section`
  ${({ theme }) => theme.between('tablet', 'laptop')`
      padding-bottom: 50px;
`}

  ${({ theme }) => theme.below.tablet`
      padding-top: 60px;
`}
`;

export const MainImages = styled.div`
  flex: 1;
  height: 998px;
  background-image: url('${heroImage}'), url('${vector6}'), url('${vector7}');
  background-position: 92px 13px, 287px 56px, 104px 284px;
  background-size: auto;
  background-repeat: no-repeat;
  filter: drop-shadow(50px -56px 104px rgba(28, 91, 235, 0.05));

  ${({ theme }) => theme.above.laptop`
      margin-right: -76px;
`}

  ${({ theme }) => theme.between('tablet', 'laptop')`
      max-width: 501px;
      height: 601px;
      background-size: cover, 284px, 422px;
      background-position: 0 0px, 120px 21px, -3px 188px;
`}

  ${({ theme }) => theme.below.tablet`
      flex: initial;
      width: 100%;
      height: 890px;
      background-image: url('${heroImage}'), url('${vector8}');
      background-position: center,1px 75px;
      background-size: auto,750px 814px;
`}

  ${({ theme }) => theme.below.mobileL`
      background-image: url('${heroImageM}'), url('${vector8}');
      background-position: -2px -109px,4px 40px;
      background-size: auto, auto;
`}
`;
