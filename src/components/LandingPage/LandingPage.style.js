import styled from 'styled-components';
import { colors } from '../../constants';
import wallet from './assets/wallet.jpg';

export const PageWrapper = styled.div`
  text-align: center;
  width: 100vw;
  overflow-x: hidden;
`;

export const ColumnWrap = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  margin: auto;
`;

export const ImageWrapper = styled.img`
  width: 100%;
  overflow: hidden;
  object-fit: cover;
  width: 100%;

  @media (min-width: 800px) {
    min-width: 50%;
    max-width: 50%;
    overflow: hidden;
    object-fit: cover;
  }
`;

export const ImageWrapper2 = styled.img`
  width: 100%;
  overflow: hidden;
  object-fit: cover;
  order: 2;

  @media (min-width: 600px) {
    min-width: 50%;
    overflow: hidden;
    object-fit: cover;
    order: 1;
  }
`;

export const RoundImageWrapper = styled.img`
  min-width: 180px;
  max-width: 180px;
  border-radius: 50%;
  -webkit-box-shadow: 4px 4px 5px -2px rgba(176, 176, 176, 1);
  -moz-box-shadow: 4px 4px 5px -2px rgba(176, 176, 176, 1);
  box-shadow: 4px 4px 5px -2px rgba(176, 176, 176, 1);

  @media (min-width: 600px) {
    min-width: 200px;
    max-width: 200px;
  }
`;

export const ContentHeader = styled.div`
  background-image: url(${wallet});
  height: 100vh;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  box-shadow: inset 0 0 0 2000px rgba(50, 50, 50, 0.2);

  @media (min-width: 600px) {
    height: 100vh;
  }
`;

export const IconWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  color: ${colors.white};
  align-items: center;
  font-size: 20px;
  text-align: center;

  @media (min-width: 800px) {
    flex-direction: column;
    height: 70vh;
  }
`;

export const ContentSection = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  height: fit-content;
  color: ${colors.white};
  background-color: ${(props) =>
    props.color ? props.color : colors.slategrey};
  align-items: center;
  font-size: 20px;
  text-align: center;

  @media (min-width: 800px) {
    flex-direction: row;
  }
`;

export const TestimonialSection = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  color: ${colors.black};
  align-items: center;
  font-size: 0.5em;
  text-align: center;
  margin: 20px;

  @media (min-width: 1200px) {
    flex-direction: row;
  }
`;

export const TestimonialWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 50px 50px;

  @media (min-width: 800px) {
    flex-direction: column;
  }
`;

export const TestimonialHeader = styled.h1`
  text-align: center;
  color: ${colors.black};
  font-size: 25px;
  padding-top: 40px;

  @media (min-width: 600px) {
    font-size: 45px;
    padding-top: 20px;
  }
`;

export const TestimonialText = styled.p`
  text-align: center;
  color: ${colors.darkblue};
  font-size: 20px;
  padding: 15px;

  @media (min-width: 600px) {
    font-size: 20px;
  }
`;

export const LandingHeader = styled.h1`
  text-align: center;
  padding: 10px;
  color: ${colors.white};
  font-size: 35px;
  width: 100vw;
  opacity: 100%;
  margin-top: 50%;

  @media (min-width: 600px) {
    padding-top: 350px;
    font-size: 65px;
    margin: 0;
  }
`;

export const LandingText = styled.p`
  text-align: center;
  color: ${colors.white};
  font-size: 20px;
  padding: 30px;

  @media (min-width: 800px) {
    padding: 45px;
    font-size: 25px;
  }
`;

export const BoldText = styled.span`
  text-align: center;
  color: ${colors.white};
  font-size: 28px;
  padding: 10px;
  font-weight: 900;

  @media (min-width: 800px) {
    font-size: 35px;
    padding-top: 30px;
  }
`;

export const LandingText2 = styled.p`
  text-align: center;
  color: ${colors.white};
  font-size: 20px;
  padding: 10px;
  order: 1;

  @media (min-width: 800px) {
    min-width: 50%;
    max-width: 50%;
    font-size: 25px;
    order: 2;
  }
`;
