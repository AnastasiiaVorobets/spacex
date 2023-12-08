import styled, { keyframes } from 'styled-components';
import tour1 from '../../../assets/banners/tour1.png';
import tour2 from '../../../assets/banners/tour2.png';
import tour3 from '../../../assets/banners/tour3.png';

const changeBackground = keyframes`
  0% {
    background-image: url(${tour1});
  }
  33.33% {
    background-image: url(${tour2});
  }
  66.66% {
    background-image: url(${tour3});
  }
  100% {
    background-image: url(${tour1});
  }
`;

export const HeaderContainer = styled.header`
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  animation: ${changeBackground} 15s infinite;
  background-size: cover;
`;
