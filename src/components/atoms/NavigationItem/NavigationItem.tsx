import React from 'react';
import styled from 'styled-components';

const NavigationItem: React.FC = () => {
  return (
    <List>
        <ListItem>
          <LinkItem href="#" className="menu__link">
            Home
          </LinkItem>
        </ListItem>

        <ListItem>
          <LinkItem className="menu__link">
            Tours
          </LinkItem>
        </ListItem>

        <ListItem>
          <LinkItem className="menu__link">
            About
          </LinkItem>
        </ListItem>

        <ListItem>
          <LinkItem className="menu__link">
            Help
          </LinkItem>
        </ListItem>
      </List>
  );
};

export default NavigationItem;


const List = styled.ul`
  margin: 0;
  padding: 0;
  display: flex;
  list-style: none;
  text-transform: uppercase;
`;

const ListItem = styled.li`
  margin-right: 32px;
  cursor: pointer;
`;

const LinkItem = styled.a`
  text-decoration: none;
  color: white;
  position: relative;

  &:hover {
    &:after {
      content: '';
      position: absolute;
      left: 0;
      bottom: -5px;
      width: 100%;
      border-bottom: 2px solid white;
      transition: bottom 1s;
    }
  }
`;
