import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../../assets/logo.png';
import { LogoStyle } from './LogoStyles';

const Logo: React.FC = () => {
  return (
    <Link to="/">
      <LogoStyle src={logo} alt="Logo" />
    </Link>
  );
};

export default Logo;
