import React from 'react';
import Navigation from '../../molecules/Navigation/Navigation';
import { HeaderContainer, ExploreLink } from './HeaderStyles';
import down from '../../../assets/icons/downIcon.png';
import { HomeTitle } from '../../atoms/Titles/Titles';

const Header: React.FC = () => {
  const handleExploreClick = () => {
    const targetElement = document.getElementById('main');
    if (targetElement) {
        targetElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <>
      <HeaderContainer>
        <Navigation />
        <HomeTitle />
        <ExploreLink onClick={handleExploreClick}>Explore tours <img src={down} alt="" /></ExploreLink>
      </HeaderContainer>
    </>
  );
};

export default Header;
