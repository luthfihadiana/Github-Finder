import { configureStore } from '@reduxjs/toolkit';
import searchsReducers from './reducers/searchsReducers';
import storage from 'redux-persist/lib/storage';
import { 
  persistReducer, 
  persistStore,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER, 
} from 'redux-persist';

const persistConfig = {
  key: 'searchs',
  storage,
  blacklist: ['loading','error', 'data']
}

const persistedReducer = persistReducer(persistConfig, searchsReducers)

const store = configureStore({
  reducer:{
    searchs: persistedReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);

export default store;