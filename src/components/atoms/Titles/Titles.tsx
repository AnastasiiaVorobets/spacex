import { HeaderTitle, FavouriteTitle} from './TitlesStyles';

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
