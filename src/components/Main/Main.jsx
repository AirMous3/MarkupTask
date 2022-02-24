import React from "react";
import heroImage from "../../assets/images/Hero Image.png";
import {
  ContentDescription,
  ContentOffer,
  ContentStats,
  ContentTitle,
  MainContent,
  MainWrapper,
  SectionWrapper,
  StatDescription,
  StatNumber,
} from "./components";
import { GetStartedForm } from "../GetStartedForm/GetStartedForm";
import styled from "styled-components";
import vector7 from "../../assets/images/Vector7.png";
import vector6 from "../../assets/images/Vector6.png";
import { MOBILE, MOBILE_SMALL, TABLET } from "../../Variables";

const MainImages = styled.div`
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
    height: 895px;
    background-position: center;
  }

  @media ${MOBILE_SMALL} {
    height: 750px;
    background-size: cover;
  }
`;

// const MainImages = styled.div`
//   position: relative;
//   width: 100%;
// `;
// const HeroImage = styled.img`
//   position: absolute;
//   bottom: 0;
//   left: 0;
//   max-width: 100%;
// `;
// const Vector6 = styled.img`
//   position: absolute;
//   top: 0;
//   left: 0;
//   max-width: 100%;
// `;
// const Vector7 = styled.img`
//   position: absolute;
//   bottom: 0;
//   left: 0;
//   max-width: 100%;
// `;

export const Main = () => {
  return (
    <SectionWrapper>
      <MainWrapper>
        <MainContent>
          <ContentTitle>Booking of doctor’s appointment</ContentTitle>

          <ContentOffer>
            Don’t Miss Our Exclusive Patient <span>Special</span>
          </ContentOffer>

          <ContentDescription>
            We want to make sure that everyone has access to natural and
            effective care. With our special, you’ll receive a consultation and
            a digital posture assesment.
          </ContentDescription>

          <GetStartedForm />

          <ContentStats>
            <div>
              <StatNumber>240</StatNumber>
              <StatDescription>
                Qualified Doctors & Medical Specialists
              </StatDescription>
            </div>
            <div>
              <StatNumber color="#215EE9">1.456</StatNumber>
              <StatDescription>
                Medical Tests Done For Our Patients
              </StatDescription>
            </div>
            <div>
              <StatNumber>1M+</StatNumber>
              <StatDescription>
                Years of Experience The Medical Field
              </StatDescription>
            </div>
          </ContentStats>
        </MainContent>
        {/*<MainImages>*/}
        {/*  <Vector6 src={vector6} alt="" />*/}
        {/*  <Vector7 src={vector7} alt="" />*/}
        {/*  <HeroImage src={heroImage} alt="" />*/}
        {/*</MainImages>*/}
        <MainImages></MainImages>
      </MainWrapper>
    </SectionWrapper>
  );
};
