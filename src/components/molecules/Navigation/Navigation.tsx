import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { Menu, RightSide } from './NavigationStyles';
import favIcon from '../../assets/icons/favIcon.png';
import blackFavIcon from '../../assets/icons/blackFavIcon.png';
import NavigationItem from '../../atoms/NavigationItem/NavigationItem';
import {SignInButton , FavoriteButton} from '../../atoms/Buttons/Buttons';
import Logo from '../../atoms/Logo/Logo';

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
