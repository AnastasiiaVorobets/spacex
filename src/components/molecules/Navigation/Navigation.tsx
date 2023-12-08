import NavigationItem from '../../atoms/NavigationItem/NavigationItem';
import {SignInButton , FavoriteButton} from '../../atoms/Buttons/Buttons';
import Logo from '../../atoms/Logo/Logo';
import { Menu, RightSide } from './NavigationStyles';

const Navigation: React.FC = () => {
  return (
    <Menu>
      <Logo />
      <NavigationItem />
      <RightSide>
        <FavoriteButton />
        <SignInButton />
      </RightSide>
    </Menu>
  );
};

export default Navigation;
