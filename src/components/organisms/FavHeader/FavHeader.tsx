import { FavouritesTitle } from '../../atoms/Titles/Titles';
import Navigation from '../../molecules/Navigation/Navigation';
import { HeaderContainer } from './FavHeaderStyles';

const FavHeader: React.FC = () => {
  return (
    <>
      <HeaderContainer>
        <Navigation />
        <FavouritesTitle />
      </HeaderContainer>
    </>
  );
};

export default FavHeader;
