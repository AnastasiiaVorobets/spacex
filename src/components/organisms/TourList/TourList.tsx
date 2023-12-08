import React, { useState } from 'react';
import Tour from '../../molecules/Tour/Tour';
import { Tour as TourType } from '../../../types/tourType';
import { TourListHeading, TourListContainer, PaginationDots, Container, HeaderBlock, StyledButton,StyledArrow, ButtonsContainer } from './TourListStyles';
import arrowRight from '../../../assets/icons/arrowRight.png';
import arrowLeft from '../../../assets/icons/arrowLeft.png';

interface TourListProps {
  tours: TourType[];
}

const TourList: React.FC<TourListProps> = ({ tours }) => {
  const [currentTourIndex, setCurrentTourIndex] = useState(0);

  const toursPerPage = 3;
  const indexOfLastTour = currentTourIndex + toursPerPage;
  const currentTours = tours.slice(currentTourIndex, indexOfLastTour);

  const totalPages = Math.ceil(tours.length / toursPerPage);

  const handlePrevClick = () => {
    setCurrentTourIndex((prevIndex) => Math.max(prevIndex - 1, 0));
  };

  const handleNextClick = () => {
    setCurrentTourIndex((prevIndex) =>
      Math.min(prevIndex + 1, tours.length - toursPerPage)
    );
  };

  return (
    <Container id='main'>

      <HeaderBlock>
      <TourListHeading>Popular Tours</TourListHeading>
      <ButtonsContainer>
      <StyledButton onClick={handlePrevClick} disabled={currentTourIndex === 0}>
        <StyledArrow src={arrowLeft} alt="arrowLeft" />
      </StyledButton>
      <StyledButton
        onClick={handleNextClick}
        disabled={currentTourIndex === tours.length - toursPerPage}
      >
        <StyledArrow src={arrowRight} alt="arrowRight" />
      </StyledButton>
      </ButtonsContainer>
    </HeaderBlock>

      <TourListContainer>
        {currentTours.map((tour) => (
          <Tour key={tour.id} tour={tour} isOnFavoritesPage={false} />
        ))}
      </TourListContainer>
      <PaginationDots>
        {[...Array(totalPages)].map((_, index) => (
          <span
            key={index}
            className={index * toursPerPage === currentTourIndex ? 'active' : ''}
            onClick={() => setCurrentTourIndex(index * toursPerPage)}
          />
        ))}
      </PaginationDots>
    </Container>
  );
};

export default TourList;
