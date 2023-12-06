import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../../assets/logo.png';
import styled from 'styled-components';

const Logo: React.FC = () => {
  return (
    <Link to="/">
      <LogoStyle src={logo} alt="Logo" />
    </Link>
  );
};

export default Logo;

const LogoStyle = styled.img`
  height: 42px;
  width: 230px;
`;
