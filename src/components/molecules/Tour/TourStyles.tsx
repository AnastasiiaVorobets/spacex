import styled from 'styled-components';

export const TourContainer = styled.div`
  width: 411px;
  margin: 16px;
  text-align: center;
  border: 1px solid #ccc;

  h1 {
    font-size: 24px;
    margin-bottom: 8px;
  }

  img {
    max-width: 100%;
    height: auto;
    margin-bottom: 8px;
  }

  h2 {
    width: 347px;
    margin: 0 auto;
    font-size: 20px;
    text-transform: uppercase;
  }

  p {
    width: 347px;
    margin: 16px auto 0;
    font-size: 16px;
    color: #556B84;

  }
`;

export const DescriptionContainer = styled.div`
    height: 150px;
    margin: 16px auto 0;
    font-size: 16px;
    color: #556b84;
`;

export const ButtonsContainer = styled.div`
  width: 347px;
  margin: 50px auto 24px;
  display: flex;
  justify-content: space-around;
`;

export const FavButton = styled.button<{ isFavorited?: boolean }>`
  width: 53px;
  height: 53px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  cursor: pointer;
  border: none;
  background-color: ${({ isFavorited }) => (isFavorited ? '#DD377D' : '#ECECEC')};
  transition: background-color 1s;

  &:hover {
    background-color: ${({ isFavorited }) => (isFavorited ? '#DD377D' : '#DD377D')};
  }

  img {
    margin: auto;
    width: 24px;
    height: 24px;
  }
`;
