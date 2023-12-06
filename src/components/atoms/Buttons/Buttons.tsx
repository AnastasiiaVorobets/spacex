import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import favIcon from '../../../assets/icons/favIcon.png';
import blackFavIcon from '../../../assets/icons/blackFavIcon.png';
import { Nav , SignIn, Buy } from './ButtonsStyles';

export const FavoriteButton: React.FC = () => {
  const [heartImage, setHeartImage] = useState(blackFavIcon);
  const [background, setBackground] = useState('#ECECEC');
  const location = useLocation();

  useEffect(() => {
    if (location.pathname === '/favorites') {
      setHeartImage(favIcon);
      setBackground('#DD377D');
    } else {
      setHeartImage(blackFavIcon);
      setBackground('#ECECEC');
    }
  }, [location.pathname]);

  return (
    <Nav background={background}>
      <Link to="/favorites">
        <img src={heartImage} alt="Heart" />
      </Link>
    </Nav>
  );
};

export const SignInButton: React.FC = () => {
  return (
    <SignIn>Sign In</SignIn>
  );
};


export const BuyButton: React.FC = () => {
  return (
    <Buy>Buy</Buy>
  )
};
