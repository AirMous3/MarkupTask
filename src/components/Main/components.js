import styled from "styled-components";

export const MainWrapper = styled.div`
  display: flex;
  justify-content: space-between;

  img {
    width: 740px;
    height: 885px;
    margin-top: -120px;
    z-index: -1;
  }
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
  margin-bottom: 52px;
`;
