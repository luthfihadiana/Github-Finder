import { configureStore } from '@reduxjs/toolkit';
import searchsReducers from './reducers/searchsReducers';

const store = configureStore({
  reducer:{
    searchs: searchsReducers,
  }
});

export default store;