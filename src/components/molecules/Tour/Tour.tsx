import React, { useState } from 'react';
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
  const [isFavorited, setIsFavorited] = useState(false);

  const handleFavoriteClick = () => {
    dispatch(addFavorite(tour));
    setIsFavorited(true);
  };

  const handleRemoveFromFavoritesClick = () => {
    dispatch(removeFavorite(tour.id));
    setIsFavorited(false);
  };

  return (
    <TourContainer>
      <img src={tour.img} alt={tour.title} />
      <h2>{tour.title}</h2>
      <p>{tour.text}</p>
      <ButtonsContainer>
        <BuyButton />
        {isOnFavoritesPage ? (
          <FavButton onClick={handleRemoveFromFavoritesClick}>
            <img src={deleteIcon} alt="deleteIcon" />
          </FavButton>
        ) : (
          <FavButton onClick={handleFavoriteClick} isFavorited={isFavorited}>
            <img src={blackFavIcon} alt="blackFavIcon" />
          </FavButton>
        )}
      </ButtonsContainer>
    </TourContainer>
  );
};

export default Tour;
