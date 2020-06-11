import React, { useState } from 'react';
import {
  PageWrapper,
  LandingHeader,
  ContentHeader,
  LandingText,
  LandingText2,
  IconWrapper,
  ContentSection,
  ImageWrapper,
  ImageWrapper2,
  RoundImageWrapper,
  TestimonialSection,
  TestimonialWrapper,
  TestimonialHeader,
} from './LandingPage.style';
import cash from './assets/cash.jpg';
import happy from './assets/happy.jpg';
import balloon from './assets/balloon.jpg';
import guy from './assets/guy.jpg';
import guy2 from './assets/guy2.jpg';
import girl2 from './assets/girl2.jpg';
import { FormButton } from '../Button/Button';
import { FormInput, FormWrapper } from '../Form/Form';
import { colors } from '../../constants';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default function LandingPage() {
  const [inputData, setInputData] = useState({ email: '' });
  const [emailData, setEmailData] = useState([]);

  function handleChange(e) {
    // update input data
    const { name, value } = e.target;
    setInputData((prevInputData) => {
      return {
        ...prevInputData,
        [name]: value,
      };
    });
  }

  function handleSubmit(e) {
    // add the input data to the emailData array
    e.preventDefault();
    setEmailData((prevEmails) => [...prevEmails, inputData]);
    setInputData({ email: '' });
  }

  const emails = emailData.map((emails, idx) => (
    <p key={idx}> {emails.email}</p>
  ));

  return (
    <PageWrapper>
      <ContentHeader>
        <LandingHeader>
          Start with no credit. <br />
          Build amazing credit.
        </LandingHeader>
        <FormWrapper onSubmit={handleSubmit}>
          <FormInput
            value={inputData.email}
            onChange={handleChange}
            placeholder='Enter Your Email...'
            type='email'
            name='email'
            required
            color={colors.darkgrey}
          />
          <FormButton type='submit'>Sign Up!</FormButton>
        </FormWrapper>
        <div
          style={{
            color: 'white',
            fontSize: '22px',
            minHeight: '150px',
            maxHeight: '200px',
            maxWidth: '300px',
            borderRadius: '5px',
            margin: 'auto',
            overflow: 'auto',
          }}
        >
          All emails: {emails}{' '}
        </div>
      </ContentHeader>

      <ContentSection
        style={{
          backgroundColor: colors.darkpurple,
        }}
      >
        <IconWrapper>
          <FontAwesomeIcon icon='credit-card' style={{ fontSize: '100px' }} />
          <LandingText>No credit score? Np.</LandingText>
        </IconWrapper>
        <IconWrapper>
          <FontAwesomeIcon
            icon='file-invoice-dollar'
            style={{ fontSize: '100px' }}
          />
          <LandingText>Never miss a payment.</LandingText>
        </IconWrapper>
        <IconWrapper>
          <FontAwesomeIcon
            icon='money-bill-wave'
            style={{ fontSize: '100px' }}
          />
          <LandingText> Earn Cashback </LandingText>
        </IconWrapper>
      </ContentSection>

      <ContentSection style={{ backgroundColor: colors.darkblue }}>
        <LandingText>
          Build credit the smart way. Tomo is the first card to offer
          specialized smart payments catered to credit building. Choose to pay
          off your card weekly, bi-weekly or monthly.
        </LandingText>
        <ImageWrapper alt='money' src={cash} />
      </ContentSection>

      <ContentSection style={{ backgroundColor: colors.lightpurple }}>
        <LandingText2>
          Not only do you automatically earn 1% cash back by default, but have
          the ability to boost your cashback up to 20%. Yep, pretty amazing we
          know.
        </LandingText2>
        <ImageWrapper2 alt='smiles' src={happy} />
      </ContentSection>

      <ContentSection style={{ backgroundColor: colors.darkblue }}>
        <LandingText>
          You work hard for your money and simply put, credit card fees suck.
          That’s why we got rid of them and don’t plan on having them, ever.
        </LandingText>
        <ImageWrapper alt='money' src={balloon} />
      </ContentSection>

      <TestimonialHeader style={{ color: 'black' }}>
        What people are saying...
      </TestimonialHeader>
      <TestimonialSection>
        <TestimonialWrapper>
          <RoundImageWrapper alt='Portrait of man' src={guy} />
          <LandingText style={{ color: colors.darkblue }}>
            Margaret E. "This is fantastic! Thanks so much guys!"
          </LandingText>
        </TestimonialWrapper>

        <TestimonialWrapper>
          <RoundImageWrapper alt='Portrait of girl' src={guy2} />
          <LandingText style={{ color: colors.darkblue }}>
            Fred S. "Bootstrap is amazing. I've been using it to create lots of
            super nice landing pages."
          </LandingText>
        </TestimonialWrapper>
        <TestimonialWrapper>
          <RoundImageWrapper alt='Portrait of girl' src={girl2} />
          <LandingText style={{ color: colors.darkblue }}>
            Sarah W. "Thanks so much for making these free resources available
            to us!"
          </LandingText>
        </TestimonialWrapper>
      </TestimonialSection>
    </PageWrapper>
  );
}
