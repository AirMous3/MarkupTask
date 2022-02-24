import React from "react";
import {
  ContentDescription,
  ContentOffer,
  ContentStats,
  ContentTitle,
  MainContent,
  MainImages,
  MainWrapper,
  SectionWrapper,
} from "./components";
import { GetStartedForm } from "../GetStartedForm/GetStartedForm";
import { Stat } from "../Stat/Stat";
import { useTheme } from "styled-components";

export const Main = () => {
  const theme = useTheme();
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
            <Stat
              number="240"
              description="Qualified Doctors & Medical Specialists"
            />

            <Stat
              number="1.456"
              description="Medical Tests Done For Our Patients"
              color={theme.colors.primary}
            />

            <Stat
              number="1M+"
              description="Years of Experience The Medical Field"
            />
          </ContentStats>
        </MainContent>

        <MainImages />
      </MainWrapper>
    </SectionWrapper>
  );
};
