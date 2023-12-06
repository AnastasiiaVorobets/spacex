import styled from 'styled-components';

export const TourContainer = styled.div`
  width: 411px;
  height: 572px;
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

export const ButtonsContainer = styled.div`
  width: 347px;
  margin: 50px auto 0;
  display: flex;
  justify-content: space-around;
`;



export const FavButton = styled.button`
  width: 53px;
  height: 53px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  cursor: pointer;
  border: none;
  background-color: #ECECEC;
  transition: background-color 1s;

  &:hover {
    background-color: #DD377D;
  }

  img {
    margin: auto;
    width: 24px;
    height: 24px;
  }
`;
