import React from "react";
import { Container } from "../../App";
import heroImage from "../../assets/images/Hero Image.png";
import {
  ContentDescription,
  ContentOffer,
  ContentTitle,
  MainContent,
  MainWrapper,
} from "./components";
import { GetStartedForm } from "../GetStartedForm/GetStartedForm";

export const Main = () => {
  return (
    <section>
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
          </MainContent>
          <img src={heroImage} alt="heroImage" />
        </MainWrapper>
      </Container>
    </section>
  );
};
