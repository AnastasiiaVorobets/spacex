import styled from 'styled-components';

export const Menu = styled.menu`
  height: 80px;
  margin: 0;
  padding: 0 80px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: rgba(30, 30, 30, 0.48);
`;

export const Logo = styled.img`
  height: 42px;
  width: 230px;
`;

export const List = styled.ul`
  margin: 0;
  padding: 0;
  display: flex;
  list-style: none;
  text-transform: uppercase;
`;

export const ListItem = styled.li`
  margin-right: 32px;
`;

export const LinkItem = styled.a`
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

export const RightSide = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
`;
