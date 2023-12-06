import styled from 'styled-components';
import favTour from '../../../assets/banners/favTour.png';

export const HeaderContainer = styled.header`
  height: 50vh;
  display: flex;
  flex-direction: column;
  text-align: center;
  background: linear-gradient(rgba(30, 30, 30, 0.5), rgba(30, 30, 30, 0.5)), url(${favTour}) center/cover no-repeat;
  color: white;
`;

