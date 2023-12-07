import { ADD_FAVORITE, REMOVE_FAVORITE, REMOVE_ALL_FAVORITES } from '../actions/actionTypes';
import { Tour } from '../types/tourType';

interface Action {
  type: string;
  payload: Tour | number;
}

interface State {
  favorites: Tour[];
}

const initialState: State = {
  favorites: [],
};

const favoriteReducer = (state: State = initialState, action: Action): State => {
  switch (action.type) {
    case ADD_FAVORITE:
      const tourToAdd = action.payload as Tour;
      const isTourInFavorites = state.favorites.some((tour) => tour.id === tourToAdd.id);

      if (!isTourInFavorites) {
        return {
          ...state,
          favorites: [...state.favorites, tourToAdd],
        };
      }
      return state;

    case REMOVE_FAVORITE:
      return {
        ...state,
        favorites: state.favorites.filter((tour) => tour.id !== action.payload as number),
      };

    case REMOVE_ALL_FAVORITES:
      return {
        ...state,
        favorites: [],
      };

    default:
      return state;
  }
};

export default favoriteReducer;
