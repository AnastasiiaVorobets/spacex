import { createStore } from 'redux';
import favoriteReducer from '../reducer/reducer';

export type RootState = {
  favorites: any[];
};

const store = createStore(favoriteReducer);

export default store;

