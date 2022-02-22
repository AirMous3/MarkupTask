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

          <img src={heroImage} alt="heroImage" />
        </MainWrapper>
      </Container>
    </SectionWrapper>
  );
};
