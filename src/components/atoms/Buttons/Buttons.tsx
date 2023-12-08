import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import favIcon from '../../../assets/icons/favIcon.png';
import blackFavIcon from '../../../assets/icons/blackFavIcon.png';
import { Nav , SignIn, Buy, ExploreLink } from './ButtonsStyles';
import downIcon from '../../../assets/icons/downIcon.png'

export const FavoriteButton: React.FC = () => {
  const [heartImage, setHeartImage] = useState(blackFavIcon);
  const [background, setBackground] = useState('#ECECEC');
  const location = useLocation();

  useEffect(() => {
    if (location.pathname === '/favorites') {
      setHeartImage(favIcon);
      setBackground('#DD377D');
    }
    else {
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

export const ExploreButton: React.FC = () => {
  const handleExploreClick = () => {
    const targetElement = document.getElementById('main');
    if (targetElement) {
        targetElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <ExploreLink onClick={handleExploreClick}>Explore tours <img src={downIcon} alt="downIcon" 
    /></ExploreLink>
  )
};
