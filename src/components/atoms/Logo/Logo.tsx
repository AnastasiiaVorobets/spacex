import React from 'react';
import { Link } from 'react-router-dom';
import { LogoStyle } from './LogoStyles';
import logo from '../../../assets/logo.png';

const Logo: React.FC = () => {
  return (
    <Link to="/">
      <LogoStyle src={logo} alt="Logo" />
    </Link>
  );
};

export default Logo;
