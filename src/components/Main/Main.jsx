import React from "react";
import { Container } from "../../App";
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

const MainImages = styled.div`
  position: relative;
  z-index: -1;

  img {
    margin-top: -120px;
    filter: drop-shadow(50px -56px 104px rgba(28, 91, 235, 0.05));
  }
`;

const CloudTop = styled.img`
  position: absolute;
  top: 200px;
  left: 0;
`;
const CloudBottom = styled.img`
  position: absolute;
  bottom: 0;
  left: 289px;
`;

export const Main = () => {
  return (
    <SectionWrapper>
      <Container>
        <MainWrapper>
          <MainContent>
            <ContentTitle>Booking of doctor’s appointment</ContentTitle>

            <ContentOffer>
              Don’t Miss Our Exclusive Patient Special
            </ContentOffer>

            <ContentDescription>
              We want to make sure that everyone has access to natural and
              effective care. With our special, you’ll receive a consultation
              and a digital posture assesment.
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
          <MainImages>
            <CloudTop src={vector6} alt="" />
            <CloudBottom src={vector7} alt="" />

            <img src={heroImage} alt="heroImage" />
          </MainImages>
        </MainWrapper>
      </Container>
    </SectionWrapper>
  );
};
