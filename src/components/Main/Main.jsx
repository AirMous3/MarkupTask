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
  background: url("${heroImage}") bottom left, url("${vector6}") 0 0,
    url("${vector7}") 0 300%;
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
        <MainImages></MainImages>
      </MainWrapper>
    </SectionWrapper>
  );
};
