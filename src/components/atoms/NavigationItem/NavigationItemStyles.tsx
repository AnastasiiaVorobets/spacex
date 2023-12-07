import styled from "styled-components";

export const List = styled.ul`
  margin: 0;
  padding: 0;
  display: flex;
  list-style: none;
  text-transform: uppercase;
`;

export const ListItem = styled.li`
  margin-right: 32px;
  cursor: pointer;
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
