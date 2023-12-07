import styled from "styled-components";

interface Props {
  background: string;
}

export const Nav = styled.nav<Props>`
  display: flex;
  align-items: center;
  gap: 10px;

  a {
    width: 53px;
    height: 53px;
    display: flex;
    align-items: center;
    justify-content: center;
    text-decoration: none;
    color: white;
    background-color: ${(props) => props.background};
    font-weight: 600;
    text-transform: uppercase;
    transition: background-color 0.5s;

    &:hover {
      background-color: #DD377D;
    }

    img {
      width: 24px;
      height: 24px;
    }
  }
`;

export const SignIn = styled.button`
  width: 163px;
  height: 53px;
  padding: 10px 15px;
  font-size: 20px;
  font-weight: 600;
  line-height: 20px;
  text-transform: uppercase;
  color: black;
  background-color: #D3EAFF;
  border: none;
  cursor: pointer;
  transition: background-color 0.5s;

  &:hover {
    background-color: #ECECEC;
  }
`;

export const Buy = styled.button`
  font-weight: 600;
  font-size: 24px;
  width: 278px;
  height: 53px;
  text-transform: uppercase;
  background-color: #D3EAFF;
  cursor: pointer;
  border: none;
  outline: none;
  transition: background-color 1s;

  &:hover {
    background-color: #6699cc;
  }
`;
