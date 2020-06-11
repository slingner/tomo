import styled from 'styled-components';
import { colors } from '../../constants';
import wallet from './assets/wallet.jpg';

export const PageWrapper = styled.div`
  text-align: center;
  width: 100vw;
`;

export const LandingHeader = styled.h1`
  text-align: center;
  padding: 50px 10px 30px 10px;
  color: ${colors.white};
  font-size: 65px;
  width: 100vw;
  opacity: 100%;

  @media (min-width: 600px) {
    padding-top: 350px;
  }
`;

export const LandingText = styled.p`
  text-align: center;
  color: ${colors.white};
  font-size: 25px;
  padding: 35px;
  margin: auto;

  @media (min-width: 00px) {
  }
`;

export const ContentHeader = styled.div`
  background-image: url(${wallet});
  height: 100%;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  .header {
    background-color: rgba(66, 75, 84, 0.5);
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    height: 100%;
    z-index: 1px;
  }
  @media (min-width: 600px) {
    height: 100vh;
  }
`;

export const ContentSection = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: fit-content;
  color: ${colors.white};
  background-color: ${(props) =>
    props.color ? props.color : colors.slategrey};
  align-items: center;
  font-size: 20px;
  text-align: center;
  padding: 100px;

  @media (min-width: 800px) {
    flex-direction: row;
  }
`;

export const LandingImage = styled.img`
  margin-left: auto;
  margin-right: auto;
  border: 1px solid grey;
  border-radius: 5px;
  height: 100%;
  height: auto;

  @media (min-width: 600px) {
    width: 70%;
    height: auto;
  }
`;
