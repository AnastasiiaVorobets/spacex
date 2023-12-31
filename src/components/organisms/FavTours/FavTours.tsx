import { useDispatch, useSelector } from 'react-redux';
import Tour from '../../molecules/Tour/Tour';
import { Tour as TourType } from '../../../types/tourType';
import { RootState } from '../../../store/store';
import { removeAllFavorites } from '../../../actions/actions';
import { TourContainer, ClearAllText, Container } from './FavToursStyles';
import { useCallback } from 'react';

const FavTours: React.FC = () => {
  const favorites = useSelector((state: RootState) => state.favorites);
  const dispatch = useDispatch();

  const handleRemoveAllFavorites = useCallback(() => {
    dispatch(removeAllFavorites());
  }, [dispatch]);

  return (
    <Container>
      <ClearAllText onClick={handleRemoveAllFavorites}>Clear all</ClearAllText>
      {favorites.length === 0 ? (
        <p>You don't have favorites tours :(</p>
      ) : (
        <TourContainer>
          {favorites.map((tour: TourType) => (
            <Tour
              key={tour.id}
              tour={tour}
              isOnFavoritesPage={true}
            />
          ))}
        </TourContainer>
      )}
    </Container>
  );
};

export default FavTours;
