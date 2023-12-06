import styled from "styled-components";

export const HomeTitle: React.FC = () => {
  return (
    <HeaderTitle>
      <h2>The space is waiting for</h2>
      <h2>YOU</h2>
    </HeaderTitle>
  )
};

export const FavouritesTitle: React.FC = () => {
  return (
    <FavouriteTitle>Favourites</FavouriteTitle>
  )
};

export const HeaderTitle = styled.h1`
  text-transform: uppercase;
  text-align: center;
  color: white;

  h2 {
    margin: 0;
    font-weight: 800;
  }

  h2:first-child {
    font-size: 48px;
  }

  h2:last-child {
    font-size: 310px;
  }
`;

export const FavouriteTitle = styled.h1`
  font-size: 48px;
  font-weight: 800;
  margin-top: 120px;
  text-transform: uppercase;
`;