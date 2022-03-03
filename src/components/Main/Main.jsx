import React from 'react';
import { GetStartedForm } from '@/components/GetStartedForm';
import { Stat } from '@/components/Stat';
import {
  MainContent,
  MainImages,
  MainWrapper,
  SectionWrapper,
  ContentOffer,
  ContentStats,
  ContentTitle,
  ContentDescription,
} from './components';

export const Main = React.memo(() => (
  <SectionWrapper>
    <MainWrapper>
      <MainContent>
        <ContentTitle>Booking of doctor’s appointment</ContentTitle>

        <ContentOffer>
          Don’t Miss Our Exclusive Patient
          <span>Special</span>
        </ContentOffer>

        <ContentDescription>
          We want to make sure that everyone has access to natural and effective care.
          With our special, you’ll receive a consultation and a digital posture assesment.
        </ContentDescription>

        <GetStartedForm />

        <ContentStats>
          <Stat number="240" description="Qualified Doctors & Medical Specialists" />

          <Stat number="1.456" description="Medical Tests Done For Our Patients" accent />

          <Stat number="1M+" description="Years of Experience The Medical Field" />
        </ContentStats>
      </MainContent>

      <MainImages />
    </MainWrapper>
  </SectionWrapper>
));
