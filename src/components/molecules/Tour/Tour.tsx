import React from 'react';
import { useDispatch } from 'react-redux';
import { Tour as TourType } from '../../../types/tourType';
import { TourContainer, ButtonsContainer, FavButton } from './TourStyles';
import { addFavorite, removeFavorite } from '../../../actions/actions';
import blackFavIcon from '../../../assets/icons/blackFavIcon.png';
import deleteIcon from '../../../assets/icons/deleteIcon.png';
import { BuyButton } from '../../atoms/Buttons/Buttons';

interface TourProps {
  tour: TourType;
  isOnFavoritesPage: boolean;
}

const Tour: React.FC<TourProps> = ({ tour, isOnFavoritesPage }) => {

  const dispatch = useDispatch();

  const handleFavoriteClick = () => {
    dispatch(addFavorite(tour));
  }

  const handleRemoveFromFavoritesClick = () => {
    dispatch(removeFavorite(tour.id));
  };
  

  return (
    <TourContainer>
      <img src={tour.img} alt={tour.title} />
      <h2>{tour.title}</h2>
      <p>{tour.text}</p>
      <ButtonsContainer>
        <BuyButton />
        {isOnFavoritesPage ? (
          <FavButton onClick={handleRemoveFromFavoritesClick}><img src={deleteIcon} alt="" /></FavButton>
        )
        : (
          <FavButton onClick={handleFavoriteClick}><img src={blackFavIcon} alt="" /></FavButton>
        )}
      </ButtonsContainer>
    </TourContainer>
  );
};

export default Tour;
