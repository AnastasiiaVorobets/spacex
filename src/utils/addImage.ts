import { Tour } from '../types/tourType';
import tour1 from "../assets/cards/tour1.png";
import tour2 from "../assets/cards/tour2.png";
import tour3 from "../assets/cards/tour3.png";

export const addImage = (rocket: Partial<Tour>, index: number) => {
  const newElem = { ...rocket };

  if (index % 3 === 0) {
    newElem.img = tour1;

    return newElem;
  }

  if ((index + 1) % 3 === 0) {
    newElem.img = tour3;

    return newElem;
  }

  newElem.img = tour2;

  return newElem;
};
