import React, { useCallback, useMemo } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { BuyButton } from '../../atoms/Buttons/Buttons';
import { RootState } from '../../../store/store';
import { Tour as TourType } from '../../../types/tourType';
import { addFavorite, removeFavorite } from '../../../actions/actions';
import { TourContainer, ButtonsContainer, FavButton, DescriptionContainer } from './TourStyles';
import blackFavIcon from '../../../assets/icons/blackFavIcon.png';
import deleteIcon from '../../../assets/icons/deleteIcon.png';

interface TourProps {
  tour: TourType;
  isOnFavoritesPage: boolean;
}

const Tour: React.FC<TourProps> = ({ tour, isOnFavoritesPage }) => {
  const dispatch = useDispatch();
  
  const isFavorited = useSelector((state: RootState) =>
    state.favorites.some((favorite) => favorite.id === tour.id)
  );

  const handleFavoriteClick = useCallback(() => {
    dispatch(addFavorite(tour));
  }, [dispatch, tour]);

  const handleRemoveFromFavoritesClick = useCallback(() => {
    dispatch(removeFavorite(tour.id));
  }, [dispatch, tour]);

  const favButton = useMemo(() => (
    <FavButton onClick={handleFavoriteClick} isFavorited={isFavorited}>
      <img src={blackFavIcon} alt="blackFavIcon" />
    </FavButton>
  ), [handleFavoriteClick, isFavorited]);

  const deleteButton = useMemo(() => (
    <FavButton onClick={handleRemoveFromFavoritesClick}>
      <img src={deleteIcon} alt="deleteIcon" />
    </FavButton>
  ), [handleRemoveFromFavoritesClick]);

  return (
    <TourContainer>
      <img src={tour.img} alt={tour.name} />
      <DescriptionContainer>
        <h2>{tour.name}</h2>
        <p>{tour.description}</p>
      </DescriptionContainer>
      <ButtonsContainer>
        <BuyButton />
        {isOnFavoritesPage ? deleteButton : favButton}
      </ButtonsContainer>
    </TourContainer>
  );
};

export default Tour;
