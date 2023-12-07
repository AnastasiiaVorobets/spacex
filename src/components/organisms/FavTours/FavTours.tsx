import { useDispatch, useSelector } from 'react-redux';
import Tour from '../../molecules/Tour/Tour';
import { Tour as TourType } from '../../../types/tourType';
import { RootState } from '../../../store/store';
import { removeAllFavorites } from '../../../actions/actions';
import { TourContainer, ClearAllText, Container } from './FavToursStyles';

const FavTours: React.FC = () => {
  const favorites = useSelector((state: RootState) => state.favorites);
  const dispatch = useDispatch();

  const handleRemoveAllFavorites = () => {
    dispatch(removeAllFavorites());
  };

  return (
    <Container>
      <ClearAllText onClick={handleRemoveAllFavorites}>Clear all</ClearAllText>
      <TourContainer>
        {favorites.map((tour: TourType) => (
          <Tour
            key={tour.id}
            tour={tour}
            isOnFavoritesPage={true}
          />
        ))}
      </TourContainer>
    </Container>
  );
};

export default FavTours;
