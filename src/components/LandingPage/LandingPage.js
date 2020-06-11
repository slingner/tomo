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
          flexDirection: 'row',
          height: '50vh',
          padding: '100px',
          backgroundColor: colors.darkpurple,
        }}
      >
        <div style={{ flexDirection: 'column' }}>
          <FontAwesomeIcon icon='credit-card' style={{ fontSize: '100px' }} />
          <LandingText>No credit score? Np.</LandingText>
        </div>
        <div style={{ flexDirection: 'column' }}>
          <FontAwesomeIcon
            icon='file-invoice-dollar'
            style={{ fontSize: '100px' }}
          />
          <LandingText>Never miss a payment.</LandingText>
        </div>
        <div style={{ flexDirection: 'column' }}>
          <FontAwesomeIcon
            icon='money-bill-wave'
            style={{ fontSize: '100px' }}
          />
          <LandingText>Earn Cashback</LandingText>
        </div>
      </ContentSection>
      <ContentSection style={{ backgroundColor: colors.darkblue }}>
        <LandingText>Earn Cashback</LandingText>
        <img
          alt='money'
          style={{ alignSelf: 'right', height: '50%', width: '50%' }}
          src={cash}
        />
      </ContentSection>
      <ContentSection style={{ backgroundColor: colors.lightpurple }}>
        <img alt='smiles' src={happy} style={{ width: '50%' }} />
        <LandingText>Earn Cashback</LandingText>
      </ContentSection>
      <ContentSection style={{ backgroundColor: colors.darkblue }}>
        <LandingText>Earn Cashback</LandingText>
        <img
          alt='money'
          style={{ alignSelf: 'right', height: '50%', width: '50%' }}
          src={cash}
        />
      </ContentSection>
      <ContentSection
        style={{
          display: 'flex',
          flexDirection: 'row',
          height: '50vh',
          padding: '100px',
          backgroundColor: colors.darkpurple,
        }}
      >
        <div style={{ flexDirection: 'column' }}>
          <FontAwesomeIcon icon='credit-card' style={{ fontSize: '100px' }} />
          <LandingText>No credit score? Np.</LandingText>
        </div>
        <div style={{ flexDirection: 'column' }}>
          <FontAwesomeIcon
            icon='file-invoice-dollar'
            style={{ fontSize: '100px' }}
          />
          <LandingText>Never miss a payment.</LandingText>
        </div>
        <div style={{ flexDirection: 'column' }}>
          <FontAwesomeIcon
            icon='money-bill-wave'
            style={{ fontSize: '100px' }}
          />
          <LandingText>Earn Cashback</LandingText>
        </div>
      </ContentSection>
    </PageWrapper>
  );
}
