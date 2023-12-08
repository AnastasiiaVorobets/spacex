import styled from 'styled-components';

export const Container = styled.div`
  margin: 96px 80px;
  font-size: 32px;
`;

export const TourListHeading = styled.h1`
  font-size: 32px;
  font-weight: 800;
  margin-left: 20px;
  text-transform: uppercase;
`;

export const TourListContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: start;
`;

export const PaginationDots = styled.div`
  display: flex;
  justify-content: center;

  span {
    position: relative;
    margin: 40px 5px 0;
    width: 24px;
    height: 24px;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: transparent;
    border: 2px solid #000;
    border-radius: 50%;
    cursor: pointer;
    transition: background-color 0.3s ease;

    &::before {
      content: '';
      width: 10px;
      height: 10px;
      background-color: transparent;
      border-radius: 50%;
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
    }
  }

  span.active {
    background-color: #fff;
    &::before {
      background-color: #000;
      width: 12px;
      height: 12px;
    }
  }
`;

export const HeaderBlock = styled.div`
  display: flex;
  justify-content: space-between;
  margin-right: 20px;
  align-items: center;
`;

export const ButtonsContainer = styled.div`
  display: flex;
`;

export const StyledButton = styled.button`
  width: 44px;
  height: 44px;
  background-color: #D3EAFF;
  color: #ffffff;
  border: none;
  padding: 0;
  margin: 5px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;

  &:disabled {
    background-color: #d3d3d3;
    color: #808080;
    cursor: not-allowed;
  }
`;

export const StyledArrow = styled.img`
  height: 24px;
  width: 24px;
`;
