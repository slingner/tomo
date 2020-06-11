import styled from 'styled-components';
import { colors } from '../../constants';
import wallet from './assets/wallet.jpg';

export const ImageWrapper = styled.img`
  width: 100%;
  overflow: hidden;
  object-fit: cover;
  height: 50%;

  @media (min-width: 600px) {
    min-width: 50%;

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
  max-width: 40%;
  border-radius: 50%;

  @media (min-width: 800px) {
    max-width: 200px;
  }
`;

export const PageWrapper = styled.div`
  text-align: center;
  width: 100vw;
  overflow-x: hidden;
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
  color: ${colors.white};
  align-items: center;
  font-size: 20px;
  text-align: center;
  padding: 40px;

  @media (min-width: 800px) {
    flex-direction: column;
    padding: 100px;
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
  font-size: 20px;
  text-align: center;
  margin: auto;

  @media (min-width: 800px) {
    flex-direction: row;
    justify-content: space-evenly;
  }
`;

export const TestimonialWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  margin: 30px;

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
    padding-top: 80px;
  }
`;

export const LandingHeader = styled.h1`
  text-align: center;
  padding: 50px 10px 30px 10px;
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
    padding: 35px;
    font-size: 25px;
  }
`;

export const LandingText2 = styled.p`
  text-align: center;
  color: ${colors.white};
  font-size: 20px;
  padding: 30px;
  order: 1;

  @media (min-width: 800px) {
    padding: 35px;
    font-size: 25px;
    order: 2;
  }
`;
