import React from 'react';
import {List, ListItem, LinkItem} from './NavigationItemStyles';

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
