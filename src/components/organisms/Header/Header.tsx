import React from 'react';
import Navigation from '../../molecules/Navigation/Navigation';
import HomeBanner from '../../molecules/HomeBanner/HomeBanner';
import { HeaderContainer } from './HeaderStyles';

const Header: React.FC = () => {

  return (
    <>
      <HeaderContainer>
        <Navigation />
        <HomeBanner />
      </HeaderContainer>
    </>
  );
};

export default Header;
