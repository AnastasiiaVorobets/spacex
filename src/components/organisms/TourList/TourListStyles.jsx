import styled from 'styled-components';

export const Container = styled.div`
  margin: 25px 80px;
  font-size: 32px;
`;

export const TourListContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
`;

export const PaginationDots = styled.div`
  display: flex;
  justify-content: center;

  span {
    position: relative;
    margin: 0 5px;
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