import React from 'react';
import {
  PageWrapper,
  LandingHeader,
  ContentHeader,
  LandingText,
  LandingLink,
  ContentSection,
} from './LandingPage.style';
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
          backgroundColor: colors.darkpurple,
        }}
      >
        <FontAwesomeIcon icon='tv' />
        <FontAwesomeIcon icon='check-circle' />
        <FontAwesomeIcon icon='layer-group' />
      </ContentSection>
      <ContentSection style={{ backgroundColor: colors.darkblue }}>
        Hello
      </ContentSection>
      <ContentSection style={{ backgroundColor: colors.darkgrey }}>
        Hello
      </ContentSection>
    </PageWrapper>
  );
}
