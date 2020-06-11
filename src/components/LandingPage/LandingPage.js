import React from 'react';
import {
  PageWrapper,
  LandingHeader,
  ContentHeader,
  LandingText,
  ContentSection,
} from './LandingPage.style';
import cash from './assets/cash.jpg';
import happy from './assets/happy.jpg';
import balloon from './assets/balloon.jpg';
import { FormButton } from '../Button/Button';
import { FormInput, FormWrapper } from '../Form/Form';
import { colors } from '../../constants';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default function LandingPage() {
  return (
    <PageWrapper>
      <ContentHeader>
        <LandingHeader> Credit for all.</LandingHeader>
        <FormWrapper>
          <FormInput
            id='Email'
            name='Email'
            aria-label='Enter your email here.'
            aria-required='true'
            required
            color={colors.darkgrey}
            placeholder='Enter Your Email...'
          />
          <FormButton>Sign Up!</FormButton>
        </FormWrapper>
      </ContentHeader>

      <ContentSection
        style={{
          display: 'flex',
          backgroundColor: colors.darkpurple,
        }}
      >
        <FontAwesomeIcon icon='credit-card' style={{ fontSize: '100px' }} />
        <LandingText>No credit score? Np.</LandingText>

        <FontAwesomeIcon
          icon='file-invoice-dollar'
          style={{ fontSize: '100px' }}
        />
        <LandingText>Never miss a payment.</LandingText>

        <FontAwesomeIcon icon='money-bill-wave' style={{ fontSize: '100px' }} />
        <LandingText> Earn Cashback </LandingText>
      </ContentSection>

      <ContentSection style={{ backgroundColor: colors.darkblue }}>
        <LandingText>
          Build credit the smart way. Tomo is the first card to offer
          specialized smart payments catered to credit building. Choose to pay
          off your card weekly, bi-weekly or monthly.
        </LandingText>
        <img alt='money' src={cash} />
      </ContentSection>

      <ContentSection style={{ backgroundColor: colors.lightpurple }}>
        <img alt='smiles' src={happy} style={{ width: '50%' }} />
        <LandingText>
          Not only do you automatically earn 1% cash back by default, but have
          the ability to boost your cashback up to 20%. Yep, pretty amazing we
          know.
        </LandingText>
      </ContentSection>

      <ContentSection style={{ backgroundColor: colors.darkblue }}>
        <LandingText>
          You work hard for your money and simply put, credit card fees suck.
          That’s why we got rid of them and don’t plan on having them, ever.
        </LandingText>
        <img alt='money' src={balloon} />
      </ContentSection>

      <ContentSection
        style={{
          display: 'flex',
          flexDirection: 'row',
          height: '50vh',
          padding: '100px',
          backgroundColor: colors.darkpurple,
        }}
      ></ContentSection>
    </PageWrapper>
  );
}
