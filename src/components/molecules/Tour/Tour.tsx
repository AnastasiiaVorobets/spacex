import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { BuyButton } from '../../atoms/Buttons/Buttons';
import { Tour as TourType } from '../../../types/tourType';
import { addFavorite, removeFavorite } from '../../../actions/actions';
import { TourContainer, ButtonsContainer, FavButton , DescriptionContainer} from './TourStyles';
import blackFavIcon from '../../../assets/icons/blackFavIcon.png';
import deleteIcon from '../../../assets/icons/deleteIcon.png';

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
      <img src={tour.img} alt={tour.name} />
      <DescriptionContainer>
        <h2>{tour.name}</h2>
        <p>{tour.description}</p>
      </DescriptionContainer>
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
