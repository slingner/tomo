import React, { useState } from 'react';
import {
  PageWrapper,
  LandingHeader,
  ContentHeader,
  LandingText,
  LandingText2,
  BoldText,
  IconWrapper,
  ContentSection,
  ImageWrapper,
  ImageWrapper2,
  RoundImageWrapper,
  TestimonialSection,
  TestimonialWrapper,
  TestimonialHeader,
  TestimonialText,
  IconSection,
} from './LandingPage.style';
import { CreditBounce, BillBounce, InvoiceBounce } from './icons';
import cash from './assets/cash.jpg';
import happy from './assets/happy.jpg';
import computer from './assets/computer.jpg';
import guy from './assets/guy.jpg';
import guy2 from './assets/guy2.jpg';
import girl2 from './assets/girl2.jpg';
import { FormButton } from '../Button/Button';
import { FormInput, FormWrapper } from '../Form/Form';
import { colors } from '../../constants';
import { CSSTransition } from 'react-transition-group';

export default function LandingPage() {
  //the object in state that holds the input text for the current email submission
  const [inputData, setInputData] = useState({ email: '' });
  //the array in state holding all submitted emails
  const [emailData, setEmailData] = useState([]);
  //state status of email submit success
  const [message, setMessage] = useState(false);

  //this sets the current inputData from the email input into state
  function handleChange(e) {
    const { name, value } = e.target;
    setInputData((prevInputData) => {
      return {
        ...prevInputData,
        [name]: value,
      };
    });
  }

  function handleSubmit(e) {
    e.preventDefault();
    //takes all previous emails and adds the newest one to the array
    setEmailData((prevEmails) => [...prevEmails, inputData]);

    //reset the input field
    setInputData({ email: '' });

    //switches the display message to true
    setMessage(true);

    //and this sets a timeout on the message to disapper after 3 seconds
    setTimeout(() => setMessage(null), 3000);
  }

  //this maps through the array of all submitted emails and when called will render the list
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
            color={colors.black}
          />
          <FormButton type='submit'>Sign Up!</FormButton>
          {/* Timeout for successful email submission */}
          <CSSTransition
            in={message}
            timeout={100}
            classNames='alert'
            unmountOnExit
            appear
          >
            <p style={{ color: 'white' }}>Success!</p>
          </CSSTransition>
        </FormWrapper>

        {/* List of all submitted emails */}
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

      <IconSection
        style={{
          backgroundColor: colors.burntOrange,
        }}
      >
        <IconWrapper>
          <CreditBounce />
          <BoldText>No credit score? Np.</BoldText>
          <LandingText style={{ padding: '0' }}>
            Whether you have a credit score or not, anyone is eligible to apply.
            Get approved today and we’ll ship your card the same day!
          </LandingText>
        </IconWrapper>
        <IconWrapper>
          <InvoiceBounce />
          <BoldText>Never miss a payment.</BoldText>
          <LandingText style={{ padding: '0' }}>
            Relax and watch your credit score grow.
          </LandingText>
        </IconWrapper>
        <IconWrapper>
          <BillBounce />
          <BoldText>Earn cashback.</BoldText>
          <LandingText style={{ padding: '0' }}>
            Rewards that will put a smile on your face.
          </LandingText>
        </IconWrapper>
      </IconSection>

      <ContentSection style={{ backgroundColor: colors.sunset }}>
        <LandingText>
          <BoldText>Build credit the smart way. </BoldText>
          <br />
          <br />
          Tomo is the first card to offer specialized smart payments catered to
          credit building. Choose to pay off your card weekly, bi-weekly or
          monthly.
        </LandingText>

        <ImageWrapper alt='money' src={cash} />
      </ContentSection>

      <ContentSection style={{ backgroundColor: colors.purpleGrey }}>
        <LandingText2>
          Not only do you automatically earn 1% cash back by default, but have
          the ability to boost your cashback up to 20%.
          <br />
          <br />
          <BoldText>Yep, pretty amazing we know.</BoldText>
        </LandingText2>

        <ImageWrapper2 alt='smiles' src={happy} />
      </ContentSection>

      <ContentSection>
        <LandingText>
          You work hard for your money and simply put,
          <br />
          <br />
          <BoldText>credit card fees suck.</BoldText>
          <br />
          <br />
          That’s why we got rid of them and don’t plan on having them, ever.
        </LandingText>

        <ImageWrapper alt='computer' src={computer} />
      </ContentSection>

      <TestimonialHeader style={{ color: 'black' }}>
        What people are saying...
      </TestimonialHeader>
      <TestimonialSection>
        <TestimonialWrapper>
          <RoundImageWrapper alt='Portrait of guy' src={guy} />
          <BoldText style={{ color: 'black' }}>David W. </BoldText>
          <TestimonialText style={{ color: colors.grey }}>
            "This is fantastic! Thanks so much guys!"
          </TestimonialText>
        </TestimonialWrapper>

        <TestimonialWrapper>
          <RoundImageWrapper alt='Portrait of another guy' src={guy2} />
          <BoldText style={{ color: 'black' }}>Matt L. </BoldText>
          <TestimonialText style={{ color: colors.grey }}>
            "Tomo is amazing. I've been using it to build my credit."
          </TestimonialText>
        </TestimonialWrapper>
        <TestimonialWrapper>
          <RoundImageWrapper alt='Portrait of girl' src={girl2} />
          <BoldText style={{ color: 'black' }}>Tammy T. </BoldText>
          <TestimonialText style={{ color: colors.grey }}>
            "Thanks so much for making these resources available to us!"
          </TestimonialText>
        </TestimonialWrapper>
      </TestimonialSection>
    </PageWrapper>
  );
}
