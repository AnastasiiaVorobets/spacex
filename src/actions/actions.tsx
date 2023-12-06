import { ADD_FAVORITE, REMOVE_FAVORITE, REMOVE_ALL_FAVORITES } from './actionTypes';
import { Tour } from '../types/tourType';

export const addFavorite = (tour: Tour) => ({
  type: ADD_FAVORITE,
  payload: tour,
});

export const removeFavorite = (tourId: number) => ({
  type: REMOVE_FAVORITE,
  payload: tourId,
});

export const removeAllFavorites = () => ({
  type: REMOVE_ALL_FAVORITES,
});
